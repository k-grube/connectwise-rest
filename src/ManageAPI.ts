/* This file was auto-generated, do not manually edit. */
import Manage from './Manage'
import { CWLogger, RetryOptions } from './types'
import { CompanyAPI } from './Manage/CompanyAPI'
import { ConfigurationsAPI } from './Manage/ConfigurationsAPI'
import { ExpenseAPI } from './Manage/ExpenseAPI'
import { FinanceAPI } from './Manage/FinanceAPI'
import { MarketingAPI } from './Manage/MarketingAPI'
import { ProcurementAPI } from './Manage/ProcurementAPI'
import { ProjectAPI } from './Manage/ProjectAPI'
import { SalesAPI } from './Manage/SalesAPI'
import { ScheduleAPI } from './Manage/ScheduleAPI'
import { ServiceAPI } from './Manage/ServiceAPI'
import { SystemAPI } from './Manage/SystemAPI'
import { TimeAPI } from './Manage/TimeAPI'

import type { components } from './ManageTypes'
import type * as CompanyAPITypes from './Manage/CompanyAPI'
import type * as ConfigurationsAPITypes from './Manage/ConfigurationsAPI'
import type * as ExpenseAPITypes from './Manage/ExpenseAPI'
import type * as FinanceAPITypes from './Manage/FinanceAPI'
import type * as MarketingAPITypes from './Manage/MarketingAPI'
import type * as ProcurementAPITypes from './Manage/ProcurementAPI'
import type * as ProjectAPITypes from './Manage/ProjectAPI'
import type * as SalesAPITypes from './Manage/SalesAPI'
import type * as ScheduleAPITypes from './Manage/ScheduleAPI'
import type * as ServiceAPITypes from './Manage/ServiceAPI'
import type * as SystemAPITypes from './Manage/SystemAPI'
import type * as TimeAPITypes from './Manage/TimeAPI'

/**
 * @public
 * Manage patch operation input object, usually passed in an array of operations
 */
export type PatchOperation = components['schemas']['PatchOperation']

/**
 * @public
 */
export interface CWMOptions {
  /** Your CW Manage Company ID */
  companyId: string
  /** api public key */
  publicKey: string
  /** api private key */
  privateKey: string
  /** Your CW Manage instance URI, e.g. my.domain.com */
  companyUrl: string
  /** Request a client ID from developer.connectwise.com */
  clientId: string
  /** Defaults to 'v4_6_release' */
  entryPoint?: string
  /** Default timeout in milliseconds */
  timeout?: number
  /** Api version, defaults to 2021.1 */
  apiVersion?: string
  /** Enable automatic retry. Defaults to false. */
  retry?: boolean
  /** @see RetryOptions type */
  retryOptions?: RetryOptions
  /** Pass in a custom logger function, otherwise the default will be used. */
  logger?: CWLogger
  /** Enable debug output. Defaults to false. */
  debug?: boolean
}

type FieldPathPrimitive = bigint | boolean | null | number | string | symbol | undefined

type FieldPathTerminal = Date | FieldPathPrimitive | RegExp

type FieldPathValue<T> = T extends ReadonlyArray<infer U> ? U : T

type FieldPathDepth = [never, 0, 1, 2, 3, 4, 5]

type FieldPath<T, Depth extends number = 5> = [Depth] extends [never]
  ? never
  : T extends FieldPathTerminal
    ? never
    : T extends object
      ? {
          [K in keyof T & string]: NonNullable<T[K]> extends FieldPathTerminal
            ? K
            : NonNullable<FieldPathValue<T[K]>> extends object
              ? K | `${K}/${FieldPath<NonNullable<FieldPathValue<T[K]>>, FieldPathDepth[Depth]>}`
              : K
        }[keyof T & string]
      : never

type FieldSelection<T> = ReadonlyArray<FieldPath<NonNullable<T>>>

type OrderByField<T> = FieldPath<NonNullable<T>>

type SortOrder = 'asc' | 'desc'

type OrderByValue<T> = ReadonlyArray<{
  field: OrderByField<T>
  direction: SortOrder
}>

/**
 * @public
 * Manage common parameters
 */
export type CommonParameters<T = any> = {
  conditions?: string
  childConditions?: string
  customFieldConditions?: string
  orderBy?: OrderByValue<T> | string
  fields?: FieldSelection<T> | string
  page?: number
  pageSize?: number
  pageId?: number
}

/**
 * Top-level Manage client. Section clients are exposed as lazy getters so you pay
 * for each only when first accessed. Each access caches the instance in place.
 *
 * All sub-APIs share this single Manage instance (and therefore a single axios client,
 * auth state, and connection pool).
 *
 * @public
 */
export const SECTIONS = [
  'CompanyAPI',
  'ConfigurationsAPI',
  'ExpenseAPI',
  'FinanceAPI',
  'MarketingAPI',
  'ProcurementAPI',
  'ProjectAPI',
  'SalesAPI',
  'ScheduleAPI',
  'ServiceAPI',
  'SystemAPI',
  'TimeAPI',
] as const

/**
 * @public
 */
export type SectionName = (typeof SECTIONS)[number]

/**
 * @public
 */
class ManageAPI extends Manage {
  constructor(options: CWMOptions) {
    super(options)
  }

  get CompanyAPI(): CompanyAPI {
    const v = new CompanyAPI(this)
    Object.defineProperty(this, 'CompanyAPI', { value: v, configurable: true })
    return v
  }

  get ConfigurationsAPI(): ConfigurationsAPI {
    const v = new ConfigurationsAPI(this)
    Object.defineProperty(this, 'ConfigurationsAPI', { value: v, configurable: true })
    return v
  }

  get ExpenseAPI(): ExpenseAPI {
    const v = new ExpenseAPI(this)
    Object.defineProperty(this, 'ExpenseAPI', { value: v, configurable: true })
    return v
  }

  get FinanceAPI(): FinanceAPI {
    const v = new FinanceAPI(this)
    Object.defineProperty(this, 'FinanceAPI', { value: v, configurable: true })
    return v
  }

  get MarketingAPI(): MarketingAPI {
    const v = new MarketingAPI(this)
    Object.defineProperty(this, 'MarketingAPI', { value: v, configurable: true })
    return v
  }

  get ProcurementAPI(): ProcurementAPI {
    const v = new ProcurementAPI(this)
    Object.defineProperty(this, 'ProcurementAPI', { value: v, configurable: true })
    return v
  }

  get ProjectAPI(): ProjectAPI {
    const v = new ProjectAPI(this)
    Object.defineProperty(this, 'ProjectAPI', { value: v, configurable: true })
    return v
  }

  get SalesAPI(): SalesAPI {
    const v = new SalesAPI(this)
    Object.defineProperty(this, 'SalesAPI', { value: v, configurable: true })
    return v
  }

  get ScheduleAPI(): ScheduleAPI {
    const v = new ScheduleAPI(this)
    Object.defineProperty(this, 'ScheduleAPI', { value: v, configurable: true })
    return v
  }

  get ServiceAPI(): ServiceAPI {
    const v = new ServiceAPI(this)
    Object.defineProperty(this, 'ServiceAPI', { value: v, configurable: true })
    return v
  }

  get SystemAPI(): SystemAPI {
    const v = new SystemAPI(this)
    Object.defineProperty(this, 'SystemAPI', { value: v, configurable: true })
    return v
  }

  get TimeAPI(): TimeAPI {
    const v = new TimeAPI(this)
    Object.defineProperty(this, 'TimeAPI', { value: v, configurable: true })
    return v
  }
}

/**
 * @public
 */
export default ManageAPI

/**
 * @public
 */
export type {
  CompanyAPITypes,
  ConfigurationsAPITypes,
  ExpenseAPITypes,
  FinanceAPITypes,
  MarketingAPITypes,
  ProcurementAPITypes,
  ProjectAPITypes,
  SalesAPITypes,
  ScheduleAPITypes,
  ServiceAPITypes,
  SystemAPITypes,
  TimeAPITypes,
}
