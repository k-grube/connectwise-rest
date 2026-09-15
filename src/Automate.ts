import axios, { AxiosInstance } from 'axios'
import { CWLogger, DataResponse, ErrorResponse, RequestOptions, RetryOptions } from './types'
import { CWAOptions } from './AutomateAPI'
import { components } from './AutomateTypes'
import { makePaginate, makeRequest, PaginationApiMethod, PaginationOptions } from './BaseAPI'
type schemas = components['schemas']
type TokenResult = schemas['Automate.Api.Domain.Contracts.Security.TokenResult']

const CW_AUTOMATE_DEBUG = !!process.env.CW_AUTOMATE_DEBUG

export const DEFAULTS: {
  entryPoint: string
  retryOptions: RetryOptions
  logger: (debug: boolean) => CWLogger
} = {
  entryPoint: 'cwa',
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

export interface AutomateConfig extends CWAOptions {
  logger: CWLogger
  retry: boolean
  retryOptions: RetryOptions
}

/**
 * @internal
 */
export default class Automate {
  config: AutomateConfig
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
   *  cwa.paginate(cwa.ComputersAPI.getComputerList, {startPage: 1, pageSize: 1000}, {conditions: 'inactiveFlag = false'})
   *
   * ```
   */
  paginate: <T, Args extends unknown[]>(
    apiMethod: PaginationApiMethod<T, Args>,
    paginateArgs: PaginationOptions,
    ...methodArgs: Args
  ) => Promise<T[]>

  constructor({
    serverUrl,
    username,
    password,
    twoFactorPasscode,
    token,
    clientId,
    timeout = 20000,
    retry = false,
    retryOptions = DEFAULTS.retryOptions,
    logger,
    debug,
  }: CWAOptions) {
    if (token && username && password) {
      throw new Error(
        'Authenticate with token or username and password only, do not pass both methods',
      )
    }

    if (!token && !username && !password) {
      throw new Error('Missing options [token] or [username, password]')
    }

    if (!clientId) {
      throw new Error('Missing option [clientId]')
    }

    this.config = {
      serverUrl,
      username,
      password,
      twoFactorPasscode,
      clientId,
      timeout,
      retry,
      retryOptions: { ...DEFAULTS.retryOptions, ...retryOptions },
      logger: logger ? logger : DEFAULTS.logger(debug || CW_AUTOMATE_DEBUG),
      debug: debug || CW_AUTOMATE_DEBUG,
    }

    this.instance = axios.create()

    if (token) {
      this.config.token = token
      this.createAxiosInstance()
    }

    this.request = makeRequest({ config: this.config, api: this.api, thisObj: this })
    this.paginate = makePaginate({ thisObj: this })
  }

  get token() {
    return this.config.token
  }

  set token(token) {
    this.config.token = token
  }

  static async getToken({
    username,
    password,
    twoFactorPasscode,
    serverUrl,
  }: {
    username?: string
    password?: string
    twoFactorPasscode?: string
    serverUrl: string
  }): Promise<TokenResult> {
    const result = await axios.post(`https://${serverUrl}/${DEFAULTS.entryPoint}/api/v1/apitoken`, {
      username,
      password,
      twoFactorPasscode,
    })

    return result.data
  }

  async verifyToken() {
    try {
      await this.api({ path: '/api/v1/FeatureFlags', method: 'get' })
      return true
    } catch {
      return false
    }
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
    const { username, password, serverUrl, twoFactorPasscode } = this.config
    if (!this.config.token || !this.instance) {
      const result = await Automate.getToken({ username, password, serverUrl, twoFactorPasscode })
      this.config.token = result.AccessToken
      this.createAxiosInstance()
    }

    try {
      const headers: Record<string, string> | undefined =
        contentType === 'multipart'
          ? { ...requestHeaders, 'Content-Type': 'multipart/form-data' }
          : requestHeaders

      const result = await this.instance({
        url: path,
        method,
        params,
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

  private createAxiosInstance() {
    const { serverUrl, timeout, clientId } = this.config
    this.instance = axios.create({
      timeout,
      baseURL: `https://${serverUrl}/${DEFAULTS.entryPoint}`,
      headers: {
        Accept: `application/json`,
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${this.config.token}`,
        clientId,
      },
    })
  }
}
