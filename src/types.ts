import type * as ManageAPIs from './ManageAPI'
import type * as AutomateApis from './AutomateAPI'

export enum StatusCode {
  OK = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,
  MovedPermanently = 301,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  TooManyRequests = 429,
  InternalServerError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
}

export type Methods = 'get' | 'put' | 'delete' | 'post' | 'patch'

export type RetryOptions = {
  minTimeout: number
  retries: number
  maxTimeout: number
  randomize: boolean
  factor?: number
}

/**
 * Axios response type passthrough for endpoints that return binary or non-JSON
 * content (PDFs, images, octet-streams, raw text). Omit or pass `'json'` for
 * regular JSON endpoints. `'arraybuffer'` is a good Node default for binary;
 * `'blob'` works in browsers; `'stream'` is Node-only and returns a Readable.
 * @public
 */
export type ResponseType = 'json' | 'arraybuffer' | 'blob' | 'stream' | 'text' | 'document'

/**
 * Request-body encoding hint for endpoints whose OpenAPI spec declares a body
 * content-type other than JSON. Today only `'multipart'` is meaningful;
 * extend here if you add others. Omit for JSON endpoints.
 * @public
 */
export type ContentType = 'json' | 'multipart'

export type RequestOptions = {
  path: string
  method?: Methods
  params?: Record<string, unknown>
  data?:
    | Record<string, unknown>
    | Record<string, unknown>[]
    | PatchOperation[]
    | FormData
    | Blob
    | ArrayBuffer
    | Uint8Array
    | null
    | string
    | number
    | undefined
  /** Hint for the request body encoding; generator sets this for multipart endpoints. */
  contentType?: ContentType
  /** Hint for how axios should decode the response; generator sets this for binary endpoints. */
  responseType?: ResponseType
  /** Endpoint-specific headers to merge into the request. */
  headers?: Record<string, string>
}

export type LoggingLevels = 'error' | 'warn' | 'info' | 'debug'
export type CWLogger = (level: LoggingLevels, text: string, meta?: Record<string, unknown>) => void

export type DataResponse =
  | Record<string, unknown>
  | Record<string, unknown>[]
  | string
  | number
  | null
  | undefined

export type ErrorResponse = {
  status: number | string
  data: DataResponse
  message: string
}

// missing types from api spec
export type NoContentResponse = undefined
// both arrive as Buffer, axios arraybuffer responses in node
export type OctetStreamResponse = Buffer
export type PDFResponse = Buffer
export type HTMLResponse = string
export type PatchOperation = ManageAPIs.PatchOperation
export type { ManageAPIs, AutomateApis }
