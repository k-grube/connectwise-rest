import { RequestOptions } from './types'
import promiseRetry from 'promise-retry'
import Manage, { ManageConfig } from './Manage'
import Automate, { AutomateConfig } from './Automate'
import { CommonParameters } from './AutomateAPI'

/**
 * Build a `FormData` from a plain object for multipart uploads. File fields can
 * be any value FormData.append accepts natively (Blob, File, Buffer, Uint8Array,
 * ReadStream under the Node ponyfill). Primitive values are stringified.
 *
 * @public
 */
export function toFormData(input: Record<string, unknown>): FormData {
  const fd = new FormData()
  for (const [k, v] of Object.entries(input)) {
    if (v === undefined || v === null) {
      continue
    }
    if (v instanceof Blob) {
      fd.append(k, v)
    } else if (typeof v === 'string') {
      fd.append(k, v)
    } else if (typeof v === 'number' || typeof v === 'boolean' || typeof v === 'bigint') {
      fd.append(k, String(v))
    } else {
      // Buffer, Uint8Array, File, ReadStream all accepted by FormData.append
      // through Blob-like coercion in modern runtimes.
      fd.append(k, v as Blob)
    }
  }
  return fd
}

/**
 * Base class for generated Automate API sections. Holds a shared `Automate`
 * client reference so every sub-API uses the same axios instance and auth state.
 * @public
 */
export class AutomateBaseAPI {
  readonly #client: Automate

  /**
   * Sub-APIs are instantiated by the AutomateAPI aggregator's lazy getters.
   * Consumers should not call this directly.
   * @internal
   */
  constructor(client: Automate) {
    this.#client = client
  }

  protected request<T = unknown>(args: RequestOptions): Promise<T> {
    return this.#client.request(args) as Promise<T>
  }
}

/**
 * Base class for generated Manage API sections. Holds a shared `Manage`
 * client reference so every sub-API uses the same axios instance and auth state.
 * @public
 */
export class ManageBaseAPI {
  readonly #client: Manage

  /**
   * Sub-APIs are instantiated by the ManageAPI aggregator's lazy getters.
   * Consumers should not call this directly.
   * @internal
   */
  constructor(client: Manage) {
    this.#client = client
  }

  protected request<T = unknown>(args: RequestOptions): Promise<T> {
    return this.#client.request(args) as Promise<T>
  }
}

/**
 * curried request function
 * @internal
 */
export const makeRequest =
  ({
    config,
    api,
    thisObj,
  }: {
    config: ManageConfig | AutomateConfig
    api: (args: RequestOptions) => Promise<unknown>
    thisObj: InstanceType<typeof Automate | typeof Manage>
  }): ((args: RequestOptions) => Promise<unknown>) =>
  ({
    path,
    method = 'get',
    params,
    data,
    contentType,
    responseType,
    headers,
  }: RequestOptions): Promise<unknown> => {
    const retryCodes = ['ECONNRESET', 'ETIMEDOUT', 'ESOCKETTIMEDOUT']
    const boundApi = api.bind(thisObj)

    if (!path) {
      throw new Error('path must be defined.')
    }

    let startTime = Date.now()
    const { retry, retryOptions, logger } = config

    if (!retry) {
      return boundApi({ path, method, params, data, contentType, responseType, headers })
        .then((result: any) => {
          logger(
            'info',
            `${method} ${path} ${Date.now() - startTime}ms params=${JSON.stringify(params)}`,
          )
          return result
        })
        .catch((error: Record<string, unknown> | undefined) => {
          logger(
            'error',
            `${method} ${path} ${Date.now() - startTime}ms params=${JSON.stringify(params)}`,
            error,
          )
          throw error
        })
    } else {
      return promiseRetry(retryOptions, (retry, number) => {
        return boundApi({ path, method, params, data, contentType, responseType, headers }).catch(
          (error) => {
            logger(
              'warn',
              `${method} ${path} ${Date.now() - startTime}ms error occurred: ${
                error.code
              }, retry=${number}, params=${JSON.stringify(params)}`,
            )
            startTime = Date.now()
            if (retryCodes.includes(error.code)) {
              return retry(error)
            }
            throw error
          },
        )
      })
        .then((result) => {
          logger(
            'info',
            `${method} ${path} ${Date.now() - startTime}ms params=${JSON.stringify(params)}`,
          )

          return result
        })
        .catch((error) => {
          logger(
            'error',
            `${method} ${path} ${Date.now() - startTime}ms error occurred: ${
              error.code
            }, params=${JSON.stringify(params)}`,
            error,
          )
          throw error
        })
    }
  }

export interface PaginationConfig {
  thisObj: InstanceType<typeof Automate | typeof Manage>
}

export type PaginationApiMethod<T = unknown, Args extends unknown[] = unknown[]> = (
  ...args: Args
) => Promise<T[]>

export type PaginationOptions = {
  pageSize?: number
  startPage?: number
}

/**
 * curried paginate function
 * @internal
 */
export const makePaginate =
  ({ thisObj }: PaginationConfig) =>
  async <T, Args extends unknown[]>(
    apiMethod: PaginationApiMethod<T, Args>,
    paginateArgs: PaginationOptions = {},
    ...methodArgs: Args
  ): Promise<T[]> => {
    const { startPage = 1, pageSize = 1000 } = paginateArgs

    let results: T[] = []
    let page = startPage

    if (startPage === undefined || startPage < 1) {
      page = 1
    }

    while (true) {
      const pageResults = await getPage(apiMethod, methodArgs, thisObj, page++, pageSize)
      // complete page returned, loop again
      if (Array.isArray(pageResults) && pageResults.length > 0) {
        results = [...results, ...pageResults]
        if (pageResults.length !== pageSize) {
          // incomplete page, there are no more pages
          break
        }
      } else {
        // no results returned, this is the last page, previous page was full
        break
      }
    }

    return results
  }

/**
 * @internal
 */
function getPage<T, Args extends unknown[]>(
  apiMethod: PaginationApiMethod<T, Args>,
  methodArgs: Args,
  thisObj: InstanceType<typeof Automate | typeof Manage>,
  page = 1,
  pageSize = 1000,
): Promise<T[]> {
  const args = [...methodArgs] as unknown[]

  // Javascript Function.length returns number of non-default values
  // the method args will always be greater than the api method args
  // due to this, if params is not passed in, even as an empty object,
  // we need to throw an error
  if (args.length < apiMethod.length) {
    throw new Error(
      `CommonParams must be passed in for pagination to work properly for function ${apiMethod.name}`,
    )
  }

  // look for CommonParams and inject page and pageSize
  const commonParams = args.pop() as CommonParameters
  commonParams.page = page
  commonParams.pageSize = pageSize

  args.push(commonParams)

  return apiMethod.apply(thisObj, args as Args)
}
