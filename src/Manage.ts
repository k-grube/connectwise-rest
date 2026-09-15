import axios, { AxiosInstance } from 'axios'
import { makeRequest, makePaginate, PaginationOptions, PaginationApiMethod } from './BaseAPI'
import type { CWMOptions } from './ManageAPI'
import { CWLogger, DataResponse, ErrorResponse, RequestOptions, RetryOptions } from './types'

const CW_MANAGE_DEBUG = !!process.env.CW_MANAGE_DEBUG

/**
 * DEFAULTS variable.
 * @type {Object}
 * @property {RetryOptions} retryOptions - Retry options for API requests.
 * @property {string} apiPath - The endpoint path for API requests.
 * @property {(debug: boolean) => CWLogger} logger - Logger function that takes a boolean flag to enable debug mode.
 */
export const DEFAULTS: {
  retryOptions: RetryOptions
  apiPath: string
  logger: (debug: boolean) => CWLogger
} = {
  apiPath: '/apis/3.0',
  retryOptions: {
    retries: 4,
    minTimeout: 50,
    maxTimeout: 20000,
    randomize: true,
  },
  logger:
    (debug = false) =>
    (level, text, meta) => {
      switch (level) {
        case 'error':
          console.error(`${level}: ${text}`, meta)
          return
        case 'warn':
          if (debug) {
            console.log(`${level}: ${text}`, meta)
          }
          return
        case 'info': {
          if (debug) {
            console.info(`${level}: ${text}`, meta)
          }
          return
        }
        default:
          console.log(`${level}: ${text}`, meta)
          return
      }
    },
}

/**
 * Represents a class for managing configuration options.
 * @internal
 */
export interface ManageConfig extends CWMOptions {
  authorization: string
  entryPoint: string
  timeout: number
  apiVersion: string
  retry: boolean
  retryOptions: RetryOptions
  logger: CWLogger
  debug: boolean
}

/**
 * @internal
 */
export default class Manage {
  config: ManageConfig
  private instance: AxiosInstance

  /**
   * @public
   */
  request: (args: RequestOptions) => Promise<any>

  /**
   * @public
   * Pass the function to be paginated first, then arguments to paginate itself,
   * then any additional arguments to the function in order
   *
   * @example
   * ```javascript
   *  cwm.paginate(cwm.FinanceAPI.getFinanceAgreements, {startPage: 1, pageSize: 500}, {conditions: 'inactiveFlag = false'})
   *
   * ```
   */
  paginate: <T, Args extends unknown[]>(
    apiMethod: PaginationApiMethod<T, Args>,
    paginateArgs: PaginationOptions,
    ...methodArgs: Args
  ) => Promise<T[]>

  constructor({
    companyId,
    publicKey,
    privateKey,
    companyUrl,
    clientId,
    entryPoint = 'v4_6_release',
    timeout = 20000,
    apiVersion = '2021.1',
    retry = false,
    retryOptions = DEFAULTS.retryOptions,
    logger,
    debug = false,
  }: CWMOptions) {
    if (!companyId || !publicKey || !privateKey || !companyUrl || !clientId) {
      throw new Error('Missing options [companyId, publicKey, privateKey, companyUrl, clientId]')
    }

    this.config = {
      companyId,
      publicKey,
      privateKey,
      companyUrl,
      clientId,
      entryPoint,
      apiVersion,
      retry,
      timeout,
      logger: logger ? logger : DEFAULTS.logger(debug || CW_MANAGE_DEBUG),
      debug: debug || CW_MANAGE_DEBUG,
      retryOptions: {
        ...DEFAULTS.retryOptions,
        ...retryOptions,
      },
      authorization: `Basic ${Buffer.from(`${companyId}+${publicKey}:${privateKey}`).toString(
        'base64',
      )}`,
    }

    this.instance = axios.create({
      timeout,
      baseURL: `https://${companyUrl}/${entryPoint}${DEFAULTS.apiPath}`,
      headers: {
        Accept: `application/vnd.connectwise.com+json; version=${apiVersion}, application/json`,
        'Cache-Control': 'no-cache',
        Authorization: this.config.authorization,
        clientId: this.config.clientId,
      },
    })

    this.request = makeRequest({ config: this.config, api: this.api, thisObj: this })
    this.paginate = makePaginate({ thisObj: this })
  }

  /**
   * @internal
   */
  private async api({
    path,
    method,
    params,
    data,
    contentType,
    responseType,
    headers: requestHeaders,
  }: RequestOptions): Promise<ErrorResponse | DataResponse> {
    try {
      // For multipart uploads let the runtime set Content-Type + boundary.
      // Axios inspects FormData and builds the header itself; passing a plain
      // object with contentType: 'multipart' falls back to the caller's
      // FormData (consumers should use toFormData() from BaseAPI).
      const headers: Record<string, string> | undefined =
        contentType === 'multipart'
          ? { ...requestHeaders, 'Content-Type': 'multipart/form-data' }
          : requestHeaders

      // empty arrays return undefined so axios omits the param entirely
      const normalizeFieldValue = (value: unknown) =>
        Array.isArray(value) ? (value.length ? value.join(',') : undefined) : value

      const normalizeOrderByValue = (value: unknown) => {
        if (!Array.isArray(value)) {
          return value
        }
        if (!value.length) {
          return undefined
        }

        return value
          .map((item) => {
            if (!item || typeof item !== 'object' || !('field' in item) || !('direction' in item)) {
              return item
            }

            const { field, direction } = item as { field: string; direction: 'asc' | 'desc' }
            return `${field} ${direction}`
          })
          .join(',')
      }

      const normalizedParams =
        params && typeof params === 'object' && ('fields' in params || 'orderBy' in params)
          ? {
              ...params,
              fields: normalizeFieldValue(params.fields),
              orderBy: normalizeOrderByValue(params.orderBy),
            }
          : params

      const result = await this.instance({
        url: path,
        method,
        params: normalizedParams,
        data,
        headers,
        responseType: responseType ?? 'json',
      })

      return result?.data
    } catch (error: any) {
      if (error.isAxiosError) {
        throw {
          status: error.response?.status,
          data: error.response?.data,
          message: error?.message,
        }
      }

      // something else catastrophic went wrong
      throw error
    }
  }
}
