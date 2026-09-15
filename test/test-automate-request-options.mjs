import assert from 'node:assert'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'
import { beforeEach, describe, it } from 'mocha'
import pkg from '../dist/index.js'
const { AutomateAPI } = pkg

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '.env') })

const {
  AUTOMATE_API_CLIENT_ID = 'test-client-id',
  AUTOMATE_API_URL = 'example.com',
  AUTOMATE_API_USER = 'test-user',
  AUTOMATE_API_PASSWORD = 'test-password',
} = process.env

describe('Automate request options', () => {
  let cwa = null
  let requestArgs = null

  beforeEach(() => {
    cwa = new AutomateAPI({
      clientId: AUTOMATE_API_CLIENT_ID,
      serverUrl: AUTOMATE_API_URL,
      username: AUTOMATE_API_USER,
      password: AUTOMATE_API_PASSWORD,
      logger: () => {},
    })
    // token set so api() skips getToken
    cwa.config.token = 'test-token'
    requestArgs = null
    cwa.instance = async (args) => {
      requestArgs = args
      return { data: [] }
    }
  })

  describe('request headers', () => {
    it('forwards endpoint headers to axios', async () => {
      await cwa.request({ path: '/test', method: 'get', headers: { 'x-custom': 'value' } })

      assert.deepStrictEqual(requestArgs.headers, { 'x-custom': 'value' })
    })

    it('merges headers under multipart content type', async () => {
      await cwa.request({
        path: '/test',
        method: 'post',
        data: 'body',
        contentType: 'multipart',
        headers: { 'x-custom': 'value' },
      })

      assert.deepStrictEqual(requestArgs.headers, {
        'x-custom': 'value',
        'Content-Type': 'multipart/form-data',
      })
    })
  })
})
