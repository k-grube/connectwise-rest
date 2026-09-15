/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Manage orchestrator:
 *   1. Emit src/ManageTypes.ts from the OpenAPI spec via openapi-typescript.
 *   2. Emit one src/Manage/<Section>API.ts per top-level URL segment.
 *   3. Emit src/ManageAPI.ts, a barrel with lazy-getter properties for each section.
 *   4. Run ESLint --fix over everything written.
 */

const fs = require('fs')
const path = require('path')
const { factory, SyntaxKind } = require('typescript')
const { ESLint } = require('eslint')
const { generateAPIClass } = require('./generator.js')

const SPEC_PATH = path.join(__dirname, 'manage-json', 'manage.json')
const SRC_DIR = path.join(__dirname, '..', 'src')
const SECTIONS_DIR = path.join(SRC_DIR, 'Manage')
const TYPES_FILE = path.join(SRC_DIR, 'ManageTypes.ts')
const MANAGEAPI_FILE = path.join(SRC_DIR, 'ManageAPI.ts')

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

function createPatchOperationTransform(_schemaObject, meta) {
  if (meta.path !== '#/components/schemas/PatchOperation') {
    return undefined
  }

  return factory.createUnionTypeNode([
    factory.createTypeLiteralNode([
      createProperty('op', createOpType('add', 'replace')),
      createProperty('path', factory.createKeywordTypeNode(SyntaxKind.StringKeyword)),
      createProperty('value', factory.createKeywordTypeNode(SyntaxKind.UnknownKeyword)),
    ]),
    factory.createTypeLiteralNode([
      createProperty('op', createOpType('remove')),
      createProperty('path', factory.createKeywordTypeNode(SyntaxKind.StringKeyword)),
      createProperty('value', factory.createKeywordTypeNode(SyntaxKind.UnknownKeyword), true),
    ]),
  ])
}

async function emitTypes(spec) {
  console.log('generating ManageTypes.ts from spec')
  // openapi-typescript v7 is ESM-only; use dynamic import from this CJS script.
  const mod = await import('openapi-typescript')
  const openapiTS = mod.default ?? mod
  // v7 returns an AST (array of ts.Node); we must format via astToString.
  // v6 returns a string. Handle both.
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
  const sections = {}
  for (const url of Object.keys(paths)) {
    const [, section] = url.split('/')
    if (!section) {
      continue
    }
    const key = pascal(section)
    if (!sections[key]) {
      sections[key] = []
    }
    sections[key].push({ url, methods: paths[url] })
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
      generatorType: 'Manage',
    })
    const fileName = path.join(SECTIONS_DIR, `${apiName}API.ts`)
    fs.writeFileSync(fileName, file)
  }
  return apiNames
}

function emitAggregator(apiNames) {
  const imports = apiNames
    .map((n) => `import { ${n}API } from './Manage/${n}API'`)
    .join('\n')
  const typeExports = apiNames
    .map((n) => `import type * as ${n}APITypes from './Manage/${n}API'`)
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
import Manage from './Manage'
import { CWLogger, RetryOptions } from './types'
${imports}

import type { components } from './ManageTypes'
${typeExports}

/**
 * @public
 * Manage patch operation input object, usually passed in an array of operations
 */
export type PatchOperation = components['schemas']['PatchOperation']

/**
 * @public
 */
export interface CWMOptions {
  /** Your CW Manage Company ID */
  companyId: string
  /** api public key */
  publicKey: string
  /** api private key */
  privateKey: string
  /** Your CW Manage instance URI, e.g. my.domain.com */
  companyUrl: string
  /** Request a client ID from developer.connectwise.com */
  clientId: string
  /** Defaults to 'v4_6_release' */
  entryPoint?: string
  /** Default timeout in milliseconds */
  timeout?: number
  /** Api version, defaults to 2021.1 */
  apiVersion?: string
  /** Enable automatic retry. Defaults to false. */
  retry?: boolean
  /** @see RetryOptions type */
  retryOptions?: RetryOptions
  /** Pass in a custom logger function, otherwise the default will be used. */
  logger?: CWLogger
  /** Enable debug output. Defaults to false. */
  debug?: boolean
}

type FieldPathPrimitive = bigint | boolean | null | number | string | symbol | undefined

type FieldPathTerminal = Date | FieldPathPrimitive | RegExp

type FieldPathValue<T> = T extends ReadonlyArray<infer U> ? U : T

type FieldPathDepth = [never, 0, 1, 2, 3, 4, 5]

type FieldPath<T, Depth extends number = 5> = [Depth] extends [never]
  ? never
  : T extends FieldPathTerminal
    ? never
    : T extends object
      ? {
          [K in keyof T & string]: NonNullable<T[K]> extends FieldPathTerminal
            ? K
            : NonNullable<FieldPathValue<T[K]>> extends object
              ? K | \`\${K}/\${FieldPath<NonNullable<FieldPathValue<T[K]>>, FieldPathDepth[Depth]>}\`
              : K
        }[keyof T & string]
      : never

type FieldSelection<T> = ReadonlyArray<FieldPath<NonNullable<T>>>

type OrderByField<T> = FieldPath<NonNullable<T>>

type SortOrder = 'asc' | 'desc'

type OrderByValue<T> = ReadonlyArray<{
  field: OrderByField<T>
  direction: SortOrder
}>

/**
 * @public
 * Manage common parameters
 */
export type CommonParameters<T = any> = {
  conditions?: string
  childConditions?: string
  customFieldConditions?: string
  orderBy?: OrderByValue<T> | string
  fields?: FieldSelection<T> | string
  page?: number
  pageSize?: number
  pageId?: number
}

/**
 * Top-level Manage client. Section clients are exposed as lazy getters so you pay
 * for each only when first accessed. Each access caches the instance in place.
 *
 * All sub-APIs share this single Manage instance (and therefore a single axios client,
 * auth state, and connection pool).
 *
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
 * @public
 */
class ManageAPI extends Manage {
  constructor(options: CWMOptions) {
    super(options)
  }

${getters}
}

/**
 * @public
 */
export default ManageAPI

/**
 * @public
 */
export type {
${reExportedTypes}
}
`
  fs.writeFileSync(MANAGEAPI_FILE, out)
}

async function runEslintFix() {
  console.log('running eslint --fix on generated Manage files')
  const eslint = new ESLint({ fix: true })
  const results = await eslint.lintFiles(['src/Manage/*.ts', 'src/ManageAPI.ts'])
  await ESLint.outputFixes(results)
  const formatter = await eslint.loadFormatter('stylish')
  const text = formatter.format(results)
  if (text.trim()) {
    console.log(text)
  }
}

async function generate() {
  console.log('loading Manage spec from', SPEC_PATH)
  const spec = require(SPEC_PATH)

  await emitTypes(spec)

  const sections = groupOperationsBySection(spec.paths)
  console.log(`emitting ${Object.keys(sections).length} Manage section files`)
  const apiNames = emitSectionFiles(sections)

  console.log('emitting ManageAPI.ts aggregator')
  emitAggregator(apiNames)

  await runEslintFix()
  console.log('Manage generation done')
}

generate().catch((err) => {
  console.error(err)
  process.exit(1)
})
