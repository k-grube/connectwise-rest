import assert from 'node:assert'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'
import { describe, it } from 'mocha'
import pkg from '../dist/index.js'
const { ManageAPI, ManageSECTIONS } = pkg

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '.env') })

const {
  MANAGE_API_COMPANY = 'test-company',
  MANAGE_API_URL = 'example.com',
  MANAGE_API_PUBLIC_KEY = 'test-public-key',
  MANAGE_API_PRIVATE_KEY = 'test-private-key',
  MANAGE_API_CLIENT_ID = 'test-client-id',
} = process.env

describe('Manage', () => {
  const cwm = new ManageAPI({
    companyId: MANAGE_API_COMPANY,
    companyUrl: MANAGE_API_URL,
    publicKey: MANAGE_API_PUBLIC_KEY,
    privateKey: MANAGE_API_PRIVATE_KEY,
    clientId: MANAGE_API_CLIENT_ID,
    apiVersion: '2021.2',
    logger: () => {},
  })

  describe('instance', () => {
    it('should be an instance of ManageAPI', () => {
      assert(cwm instanceof ManageAPI)
    })
  })

  describe('sections', () => {
    it('exports a non-empty SECTIONS list', () => {
      assert(Array.isArray(ManageSECTIONS))
      assert(ManageSECTIONS.length > 0)
    })

    for (const section of ManageSECTIONS) {
      it(`exposes ${section} as a lazy getter`, () => {
        const instance = cwm[section]
        assert(instance, `${section} should be accessible on cwm`)
        assert.strictEqual(cwm[section], instance, `${section} should cache on access`)
      })
    }
  })

  describe('request params', () => {
    it('serializes typed fields and orderBy arrays for Manage queries', async () => {
      let requestArgs
      cwm.instance = async (args) => {
        requestArgs = args
        return { data: [] }
      }

      await cwm.ServiceAPI.getServiceTickets({
        fields: ['id', 'summary', 'company/id'],
        orderBy: [
          { field: 'company/id', direction: 'asc' },
          { field: 'summary', direction: 'desc' },
        ],
        conditions: 'closedFlag = false',
      })

      assert.deepStrictEqual(requestArgs.params, {
        fields: 'id,summary,company/id',
        orderBy: 'company/id asc,summary desc',
        conditions: 'closedFlag = false',
      })
    })
  })
})
