import assert from 'node:assert'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'
import { beforeEach, describe, it } from 'mocha'
import pkg from '../dist/index.js'
const { ManageAPI } = pkg

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '.env') })

const {
  MANAGE_API_COMPANY = 'test-company',
  MANAGE_API_URL = 'example.com',
  MANAGE_API_PUBLIC_KEY = 'test-public-key',
  MANAGE_API_PRIVATE_KEY = 'test-private-key',
  MANAGE_API_CLIENT_ID = 'test-client-id',
} = process.env

describe('Manage request options', () => {
  let cwm = null
  let requestArgs = null

  beforeEach(() => {
    cwm = new ManageAPI({
      companyId: MANAGE_API_COMPANY,
      companyUrl: MANAGE_API_URL,
      publicKey: MANAGE_API_PUBLIC_KEY,
      privateKey: MANAGE_API_PRIVATE_KEY,
      clientId: MANAGE_API_CLIENT_ID,
      apiVersion: '2021.2',
      logger: () => {},
    })
    requestArgs = null
    cwm.instance = async (args) => {
      requestArgs = args
      return { data: [] }
    }
  })

  describe('request headers', () => {
    it('adds member user type header when creating member tokens', async () => {
      await cwm.SystemAPI.postSystemMembersByMemberIdentifierTokens('member-id')

      assert.deepStrictEqual(requestArgs.headers, { 'x-cw-usertype': 'member' })
    })
  })

  describe('binary downloads', () => {
    it('requests document downloads as arraybuffers', async () => {
      await cwm.SystemAPI.getSystemDocumentsByIdDownload(123)

      assert.strictEqual(requestArgs.responseType, 'arraybuffer')
    })

    it('requests invoice PDFs as arraybuffers', async () => {
      await cwm.FinanceAPI.getFinanceInvoicesByIdPdf(456)

      assert.strictEqual(requestArgs.responseType, 'arraybuffer')
    })
  })
})
