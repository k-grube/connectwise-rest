import assert from 'node:assert/strict'
import { describe, it } from 'mocha'
import normalizer from '../generator/normalize-manage-spec.js'
const { normalizeManageSpec } = normalizer

const operation = (operationId = 'getWidget') => ({
  operationId,
  responses: { 200: { description: 'OK' } },
})
const specFor = (path, get = operation()) => ({ paths: { [path]: { get } } })

describe('Manage spec normalization', () => {
  it('leaves an upstream-corrected spec unchanged and does not mutate its input', () => {
    const spec = specFor('/widgets/{identifier}')
    spec.paths['/widgets/{identifier}'].get.parameters = [
      { name: 'identifier', in: 'path', required: true, schema: { type: 'string' } },
    ]
    assert.deepEqual(normalizeManageSpec(spec), spec)
  })

  it('recovers the truncated regex on an unrelated route and repairs its operation ID', () => {
    const spec = specFor(
      '/widgets/{slug:regex(^(reserved. |(',
      operation('getWidgetsslugregexreserved'),
    )
    const original = structuredClone(spec)
    const normalized = normalizeManageSpec(spec)
    const get = normalized.paths['/widgets/{slug}'].get
    assert.equal(get.operationId, 'getWidgetsBySlug')
    assert.deepEqual(get.parameters, [
      { name: 'slug', in: 'path', required: true, schema: { type: 'string' } },
    ])
    assert.deepEqual(spec, original)
    assert.deepEqual(normalizeManageSpec(normalized), normalized)
  })

  it('handles complete constraints, regex quantifiers, and multiple parameters', () => {
    const get = operation('lookupWidget')
    get.parameters = [
      { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
      { name: 'code', in: 'path', required: true, schema: { type: 'string', minLength: 2 } },
    ]
    const normalized = normalizeManageSpec(
      specFor('/widgets/{id:int}/codes/{code:regex(^[A-Z]{2,4}$)}', get),
    )
    assert.deepEqual(normalized.paths['/widgets/{id}/codes/{code}'].get, get)
  })

  it('preserves an inherited parameter declaration without duplicating it', () => {
    const spec = specFor('/widgets/{id:int}')
    spec.paths['/widgets/{id:int}'].parameters = [
      { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
    ]
    assert.equal(normalizeManageSpec(spec).paths['/widgets/{id}'].get.parameters, undefined)
  })

  it('does not confuse regex character classes or escaped braces with placeholders', () => {
    for (const constraint of ['regex(^[{}]+$)', String.raw`regex(^\{[a-z]+\}$)`]) {
      const normalized = normalizeManageSpec(specFor(`/widgets/{code:${constraint}}/details`))
      assert.ok(normalized.paths['/widgets/{code}/details'])
    }
  })

  it('preserves a referenced parameter declaration', () => {
    const spec = specFor('/widgets/{id:int}')
    spec.components = {
      parameters: {
        WidgetId: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
      },
    }
    spec.paths['/widgets/{id:int}'].get.parameters = [{ $ref: '#/components/parameters/WidgetId' }]
    assert.deepEqual(normalizeManageSpec(spec).paths['/widgets/{id}'].get.parameters, [
      { $ref: '#/components/parameters/WidgetId' },
    ])
  })

  it('rejects ambiguous or malformed placeholders instead of inventing a route', () => {
    for (const path of [
      '/widgets/{id',
      '/widgets/{id:int',
      '/widgets/{id:}',
      '/widgets/id}',
      '/widgets/{id:regex(foo/children',
    ]) {
      assert.throws(() => normalizeManageSpec(specFor(path)), /path template/)
    }
  })

  it('rejects colliding routes rather than silently overwriting an operation', () => {
    const spec = {
      paths: { '/widgets/{id}': { get: operation() }, '/widgets/{id:int}': { get: operation() } },
    }
    assert.throws(() => normalizeManageSpec(spec), /collide/)
  })

  it('declares response content types that are only named in the description', () => {
    const get = operation()
    get.responses = {
      200: { description: 'ContentType = application/octet-stream' },
      201: { description: 'ContentType = text/html' },
      202: { description: 'ContentType = application/json' },
    }
    const responses = normalizeManageSpec(specFor('/widgets/{id}/image', get)).paths[
      '/widgets/{id}/image'
    ].get.responses
    assert.deepEqual(responses[200].content, {
      'application/octet-stream': { schema: { type: 'string', format: 'binary' } },
    })
    assert.deepEqual(responses[201].content, { 'text/html': { schema: { type: 'string' } } })
    assert.equal(responses[202].content, undefined)
  })

  it('declares PDF and schema-named response bodies described in prose', () => {
    const jsonType = 'application/vnd.connectwise.com+json; version=1'
    const spec = {
      paths: {
        '/widgets': {
          get: { responses: { 200: { description: 'OK', content: { [jsonType]: {} } } } },
        },
        '/widgets/{id}/statement': {
          get: { responses: { 200: { description: 'PDF attachment (as a document).' } } },
        },
        '/widgets/{id}/detach': {
          post: { responses: { 200: { description: 'Widget' } } },
        },
        '/widgets/{id}/recalculate': {
          post: { responses: { 200: { description: 'Unknown' }, 201: { description: '' } } },
        },
      },
      components: { schemas: { Widget: { type: 'object' } } },
    }
    const { paths } = normalizeManageSpec(spec)
    assert.deepEqual(paths['/widgets/{id}/statement'].get.responses[200].content, {
      'application/pdf': { schema: { type: 'string', format: 'binary' } },
    })
    assert.deepEqual(paths['/widgets/{id}/detach'].post.responses[200].content, {
      [jsonType]: { schema: { $ref: '#/components/schemas/Widget' } },
    })
    const recalculate = paths['/widgets/{id}/recalculate'].post.responses
    assert.equal(recalculate[200].content, undefined)
    assert.equal(recalculate[201].content, undefined)
  })

  it('keeps an explicitly declared response content type', () => {
    const get = operation()
    const content = { 'application/pdf': { schema: { type: 'string', format: 'binary' } } }
    get.responses = { 200: { description: 'ContentType = application/octet-stream', content } }
    const normalized = normalizeManageSpec(specFor('/widgets/{id}/pdf', get))
    assert.deepEqual(normalized.paths['/widgets/{id}/pdf'].get.responses[200].content, content)
  })
})
