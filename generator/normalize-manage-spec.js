/* eslint-disable @typescript-eslint/no-require-imports */
const HTTP_METHODS = new Set(['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'])
const identifier = /^[A-Za-z_][\w]*$/

// Server-side route constraints are not part of the URL sent by a client.
function normalizePath(path) {
  const constrained = []
  let result = ''
  for (let i = 0; i < path.length;) {
    if (path[i] === '}') {
      throw new Error(`Malformed Manage path template: ${path}`)
    }
    if (path[i] !== '{') {
      result += path[i++]
      continue
    }
    const start = i++
    let depth = 1
    let characterClass = false
    for (; i < path.length && depth; i++) {
      if (path[i] === '\\') {
        i++
      } else if (path[i] === '[') {
        characterClass = true
      } else if (path[i] === ']') {
        characterClass = false
      } else if (!characterClass && path[i] === '{') {
        depth++
      } else if (!characterClass && path[i] === '}') {
        depth--
      }
    }
    const token = path.slice(start + 1, depth ? path.length : i - 1)
    const colon = token.indexOf(':')
    const name = colon < 0 ? token : token.slice(0, colon)
    const constraint = colon < 0 ? '' : token.slice(colon + 1)
    if (!identifier.test(name) || (colon >= 0 && !constraint)) {
      throw new Error(`Malformed Manage path template: ${path}`)
    }
    // Only recover an unclosed regex at the end of a route. A slash could
    // indicate another route segment, so do not silently discard it.
    if (depth && (!constraint.startsWith('regex(') || constraint.includes('/'))) {
      throw new Error(`Ambiguous or unclosed Manage path template: ${path}`)
    }
    if (colon >= 0) {
      constrained.push({ name, token })
    }
    result += `{${name}}`
  }
  return { path: result, constrained }
}

function operationName(method, path) {
  return (
    method +
    path
      .split('/')
      .filter(Boolean)
      .map((part) => {
        const parameter = /^\{(.+)\}$/.exec(part)
        if (parameter) {
          return `By${parameter[1][0].toUpperCase()}${parameter[1].slice(1)}`
        }
        return part
          .split(/[^A-Za-z0-9_$]+/)
          .filter(Boolean)
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join('')
      })
      .join('')
  )
}

// The JSON media type the spec declares elsewhere, so synthesized content
// matches the rest of the generated response types.
function jsonMediaType(spec) {
  for (const item of Object.values(spec.paths)) {
    for (const operation of Object.values(item)) {
      for (const response of Object.values(operation?.responses || {})) {
        const mediaType = Object.keys(response.content || {}).find((type) => /json/.test(type))
        if (mediaType) {
          return mediaType
        }
      }
    }
  }
  return 'application/json'
}

// Some responses describe their body only in prose. Declare it as content so
// the generator and openapi-typescript both see the real response shape.
function describedContent(description = '', spec, jsonType) {
  const contentType = /^ContentType = (\S+)$/.exec(description)?.[1]
  if (contentType === 'application/json') {
    return undefined
  }
  if (contentType?.startsWith('text/')) {
    return { [contentType]: { schema: { type: 'string' } } }
  }
  if (contentType) {
    return { [contentType]: { schema: { type: 'string', format: 'binary' } } }
  }
  // The customer statement endpoint describes its PDF only in prose.
  if (description.startsWith('PDF attachment')) {
    return { 'application/pdf': { schema: { type: 'string', format: 'binary' } } }
  }
  // A bare schema name, e.g. "TimeEntry".
  if (identifier.test(description) && spec.components?.schemas?.[description]) {
    return { [jsonType]: { schema: { $ref: `#/components/schemas/${description}` } } }
  }
  return undefined
}

function normalizeResponseContent(operation, spec, jsonType) {
  for (const response of Object.values(operation.responses || {})) {
    if (response.content) {
      continue
    }
    const content = describedContent(response.description, spec, jsonType)
    if (content) {
      response.content = content
    }
  }
}

function normalizeManageSpec(input) {
  const spec = structuredClone(input)
  const jsonType = jsonMediaType(spec)
  const paths = {}
  for (const [original, item] of Object.entries(spec.paths)) {
    const { path, constrained } = normalizePath(original)
    if (Object.hasOwn(paths, path)) {
      throw new Error(`Manage paths collide after normalization: ${original} -> ${path}`)
    }
    for (const [method, operation] of Object.entries(item)) {
      if (!HTTP_METHODS.has(method)) {
        continue
      }
      normalizeResponseContent(operation, spec, jsonType)
      if (!constrained.length) {
        continue
      }
      // Keep intentional operation IDs; replace IDs derived from leaked constraints.
      if (
        !operation.operationId ||
        constrained.some(({ token }) =>
          operation.operationId
            .toLowerCase()
            .includes(token.replace(/[^A-Za-z0-9_]/g, '').toLowerCase()),
        )
      ) {
        operation.operationId = operationName(method, path)
      }
      for (const { name } of constrained) {
        const parameters = [...(item.parameters || []), ...(operation.parameters || [])]
        const declared = parameters.some((parameter) => {
          if (parameter.$ref) {
            if (!parameter.$ref.startsWith('#/')) {
              throw new Error(`Cannot resolve path parameter reference: ${parameter.$ref}`)
            }
            parameter = parameter.$ref
              .slice(2)
              .split('/')
              .reduce((value, key) => value?.[key.replace(/~1/g, '/').replace(/~0/g, '~')], spec)
            if (!parameter) {
              throw new Error(`Unresolved parameter reference in ${original}`)
            }
          }
          return parameter.in === 'path' && parameter.name === name
        })
        if (!declared) {
          // A constrained placeholder supplies its name, but not a reliable schema.
          // String preserves the identifier exactly as supplied by the caller.
          operation.parameters ??= []
          operation.parameters.push({
            name,
            in: 'path',
            required: true,
            schema: { type: 'string' },
          })
        }
      }
    }
    paths[path] = item
  }
  spec.paths = paths
  return spec
}

module.exports = { normalizeManageSpec }
