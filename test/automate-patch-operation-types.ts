import { expectTypeOf } from 'expect-type'
import type { components } from '../src/AutomateTypes'

type PatchOperation = components['schemas']['LabTech.RESTApi.Models.PatchOperation']

export const addOp: PatchOperation = { Op: 'add', Path: 'Comment', Value: 'updated' }
export const replaceOp: PatchOperation = { Op: 'replace', Path: 'Comment', Value: 'updated' }
export const removeOp: PatchOperation = { Op: 'remove', Path: 'Comment' }
// remove may still carry a value, existing consumers pass one
export const removeOpWithValue: PatchOperation = { Op: 'remove', Path: 'Comment', Value: 'x' }

expectTypeOf<Extract<PatchOperation, { Op: 'add' | 'replace' }>>().toEqualTypeOf<{
  Op: 'add' | 'replace'
  Path: string
  Value: unknown
}>()

expectTypeOf<Extract<PatchOperation, { Op: 'remove' }>>().toEqualTypeOf<{
  Op: 'remove'
  Path: string
  Value?: unknown
}>()

// @ts-expect-error add operations should require a value.
export const addOpWithoutValue: PatchOperation = { Op: 'add', Path: 'Comment' }

// @ts-expect-error replace operations should require a value.
export const replaceOpWithoutValue: PatchOperation = { Op: 'replace', Path: 'Comment' }

// @ts-expect-error op should be constrained to json patch operations.
export const invalidOp: PatchOperation = { Op: 'copy', Path: 'Comment', Value: 'updated' }
