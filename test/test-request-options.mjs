import assert from 'node:assert'
import { describe, it } from 'mocha'
import { makeRequest } from '../dist/BaseAPI.js'

const noopLogger = () => {}

describe('request options', () => {
  it('forwards contentType and responseType without retry', async () => {
    let received
    const request = makeRequest({
      config: { retry: false, logger: noopLogger },
      api(args) {
        received = args
        return Promise.resolve('ok')
      },
      thisObj: {},
    })

    await request({
      path: '/test',
      method: 'post',
      data: 'body',
      contentType: 'multipart',
      responseType: 'arraybuffer',
    })

    assert.deepStrictEqual(received, {
      path: '/test',
      method: 'post',
      params: undefined,
      data: 'body',
      contentType: 'multipart',
      responseType: 'arraybuffer',
      headers: undefined,
    })
  })

  it('forwards contentType and responseType with retry', async () => {
    let received
    const request = makeRequest({
      config: {
        retry: true,
        retryOptions: { retries: 0, minTimeout: 1, maxTimeout: 1, randomize: false },
        logger: noopLogger,
      },
      api(args) {
        received = args
        return Promise.resolve('ok')
      },
      thisObj: {},
    })

    await request({
      path: '/test',
      method: 'post',
      data: 'body',
      contentType: 'multipart',
      responseType: 'arraybuffer',
    })

    assert.deepStrictEqual(received, {
      path: '/test',
      method: 'post',
      params: undefined,
      data: 'body',
      contentType: 'multipart',
      responseType: 'arraybuffer',
      headers: undefined,
    })
  })
})
