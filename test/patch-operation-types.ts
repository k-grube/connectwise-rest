import { expectTypeOf } from 'expect-type'
import type { PatchOperation } from '../src/types'

export const addPatchOperation: PatchOperation = { op: 'add', path: 'summary', value: 'updated' }
export const replacePatchOperation: PatchOperation = { op: 'replace', path: 'summary', value: 'updated' }
export const removePatchOperation: PatchOperation = { op: 'remove', path: 'summary' }
// remove may still carry a value, existing consumers pass one
export const removePatchOperationWithValue: PatchOperation = { op: 'remove', path: 'summary', value: 'x' }

expectTypeOf<Extract<PatchOperation, { op: 'add' | 'replace' }>>().toEqualTypeOf<{
  op: 'add' | 'replace'
  path: string
  value: unknown
}>()

expectTypeOf<Extract<PatchOperation, { op: 'remove' }>>().toEqualTypeOf<{
  op: 'remove'
  path: string
  value?: unknown
}>()

// @ts-expect-error add operations should require a value.
export const addPatchOperationWithoutValue: PatchOperation = { op: 'add', path: 'summary' }

// @ts-expect-error replace operations should require a value.
export const replacePatchOperationWithoutValue: PatchOperation = { op: 'replace', path: 'summary' }

// @ts-expect-error patch operation op should be constrained to JSON patch operations.
export const invalidPatchOperation: PatchOperation = { op: 'copy', path: 'summary', value: 'updated' }
