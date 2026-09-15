/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Automate orchestrator:
 *   1. Merge the 20 per-section JSONs via automate-json.js.
 *   2. Emit src/AutomateTypes.ts from the merged spec via openapi-typescript.
 *   3. Emit one src/Automate/<Section>API.ts per filename-derived section.
 *   4. Emit src/AutomateAPI.ts, a barrel with lazy-getter properties for each section.
 *   5. Run ESLint --fix over everything written.
 */

const fs = require('fs')
const path = require('path')
const { factory, SyntaxKind } = require('typescript')
const { ESLint } = require('eslint')
const { generateAPIClass } = require('./generator.js')
const { getAutomateJson } = require('./automate-json.js')

const SRC_DIR = path.join(__dirname, '..', 'src')
const SECTIONS_DIR = path.join(SRC_DIR, 'Automate')
const TYPES_FILE = path.join(SRC_DIR, 'AutomateTypes.ts')
const AUTOMATEAPI_FILE = path.join(SRC_DIR, 'AutomateAPI.ts')

function pascal(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function createProperty(name, type, optional = false) {
  return factory.createPropertySignature(
    undefined,
    factory.createIdentifier(name),
    optional ? factory.createToken(SyntaxKind.QuestionToken) : undefined,
    type,
  )
}

function createOpType(...ops) {
  return factory.createUnionTypeNode(
    ops.map((op) => factory.createLiteralTypeNode(factory.createStringLiteral(op))),
  )
}

// spec types Op as bare string, Value as empty object; override with real
// json-patch shape (PascalCase, unlike Manage)
function createPatchOperationTransform(_schemaObject, meta) {
  if (meta.path !== '#/components/schemas/LabTech.RESTApi.Models.PatchOperation') {
    return undefined
  }

  return factory.createUnionTypeNode([
    factory.createTypeLiteralNode([
      createProperty('Op', createOpType('add', 'replace')),
      createProperty('Path', factory.createKeywordTypeNode(SyntaxKind.StringKeyword)),
      createProperty('Value', factory.createKeywordTypeNode(SyntaxKind.UnknownKeyword)),
    ]),
    factory.createTypeLiteralNode([
      createProperty('Op', createOpType('remove')),
      createProperty('Path', factory.createKeywordTypeNode(SyntaxKind.StringKeyword)),
      createProperty('Value', factory.createKeywordTypeNode(SyntaxKind.UnknownKeyword), true),
    ]),
  ])
}

async function emitTypes(spec) {
  console.log('generating AutomateTypes.ts from merged spec')
  const mod = await import('openapi-typescript')
  const openapiTS = mod.default ?? mod
  const result = await openapiTS(spec, { transform: createPatchOperationTransform })
  let output
  if (typeof result === 'string') {
    output = result
  } else if (mod.astToString) {
    output = mod.astToString(result)
  } else {
    throw new Error('Unexpected openapi-typescript output; no astToString export')
  }
  fs.writeFileSync(TYPES_FILE, output)
}

function groupOperationsBySection(paths) {
  // automate-json.js tags each operation with a `section` key derived from the
  // source JSON filename (e.g. Clients.json -> section "Clients"). Group by that.
  const sections = {}
  for (const url of Object.keys(paths)) {
    const methods = paths[url]
    // pick the section from any method on this path; they all share one
    const firstMethodKey = Object.keys(methods).pop()
    const section = methods[firstMethodKey].section
    if (!section) {
      continue
    }
    const key = pascal(section)
    if (!sections[key]) {
      sections[key] = []
    }
    sections[key].push({ url, methods })
  }
  return sections
}

function emitSectionFiles(sections) {
  if (!fs.existsSync(SECTIONS_DIR)) {
    fs.mkdirSync(SECTIONS_DIR, { recursive: true })
  }

  const apiNames = Object.keys(sections).sort()
  for (const apiName of apiNames) {
    const file = generateAPIClass({
      apiName,
      operations: sections[apiName],
      generatorType: 'Automate',
    })
    const fileName = path.join(SECTIONS_DIR, `${apiName}API.ts`)
    fs.writeFileSync(fileName, file)
  }
  return apiNames
}

function emitAggregator(apiNames) {
  const imports = apiNames
    .map((n) => `import { ${n}API } from './Automate/${n}API'`)
    .join('\n')
  const typeExports = apiNames
    .map((n) => `import type * as ${n}APITypes from './Automate/${n}API'`)
    .join('\n')

  const getters = apiNames
    .map(
      (n) => `  get ${n}API(): ${n}API {
    const v = new ${n}API(this)
    Object.defineProperty(this, '${n}API', { value: v, configurable: true })
    return v
  }`,
    )
    .join('\n\n')

  const reExportedTypes = apiNames.map((n) => `  ${n}APITypes,`).join('\n')

  const out = `/* This file was auto-generated, do not manually edit. */
import Automate from './Automate'
import { CWLogger, RetryOptions } from './types'
${imports}

${typeExports}

/**
 * @public
 */
export type CWAOptions = {
  serverUrl: string
  username?: string
  password?: string
  twoFactorPasscode?: string
  token?: string
  clientId: string
  timeout?: number
  retry?: boolean
  retryOptions?: RetryOptions
  logger?: CWLogger
  debug?: boolean
}

/**
 * @public
 */
export type OrderBy = {
  name?: string
  type?: 'Undefined' | 'Ascending' | 'Descending'
}

/**
 * @public
 */
export type CommonParameters = {
  orderBy?: OrderBy
  page?: number
  pageSize?: number
  condition?: string
  expands?: {
    [key: string]: QueryOptionExpand
  }
  includedFields?: Array<string>
  excludedFields?: Array<string>
  ids?: Array<string>
  timeout?: number
}

/**
 * @public
 */
export type QueryOptionExpand = {
  fieldName?: string
  page?: number
  pageSize?: number
  condition?: string
  expands?: {
    [key: string]: QueryOptionExpand
  }
  orderBy?: OrderBy
  includedFields?: string[]
  excludedFields?: string[]
}

/**
 * Exported list of section API property names for introspection and testing.
 * @public
 */
export const SECTIONS = [
${apiNames.map((n) => `  '${n}API',`).join('\n')}
] as const

/**
 * @public
 */
export type SectionName = (typeof SECTIONS)[number]

/**
 * Top-level Automate client. Section clients are exposed as lazy getters so you pay
 * for each only when first accessed. Each access caches the instance in place.
 *
 * All sub-APIs share this single Automate instance (and therefore a single axios client,
 * auth state, and connection pool).
 *
 * @public
 */
class AutomateAPI extends Automate {
  constructor(options: CWAOptions) {
    super(options)
  }

${getters}
}

/**
 * @public
 */
export default AutomateAPI

/**
 * @public
 */
export type {
${reExportedTypes}
}
`
  fs.writeFileSync(AUTOMATEAPI_FILE, out)
}

async function runEslintFix() {
  console.log('running eslint --fix on generated Automate files')
  const eslint = new ESLint({ fix: true })
  const results = await eslint.lintFiles(['src/Automate/*.ts', 'src/AutomateAPI.ts'])
  await ESLint.outputFixes(results)
  const formatter = await eslint.loadFormatter('stylish')
  const text = formatter.format(results)
  if (text.trim()) {
    console.log(text)
  }
}

async function generate() {
  console.log('merging Automate JSON specs')
  const spec = getAutomateJson()

  await emitTypes(spec)

  const sections = groupOperationsBySection(spec.paths)
  console.log(`emitting ${Object.keys(sections).length} Automate section files`)
  const apiNames = emitSectionFiles(sections)

  console.log('emitting AutomateAPI.ts aggregator')
  emitAggregator(apiNames)

  await runEslintFix()
  console.log('Automate generation done')
}

generate().catch((err) => {
  console.error(err)
  process.exit(1)
})
