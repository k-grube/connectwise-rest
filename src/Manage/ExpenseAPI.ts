/* This file was auto-generated, do not manually edit. */
import { ManageBaseAPI } from '../BaseAPI'
import { components } from '../ManageTypes'
import { CommonParameters } from '../ManageAPI'
import { NoContentResponse } from '../types'
type schemas = components['schemas']
/** {@link Classification} */
export type Classification = schemas['Classification']
/** {@link Count} */
export type Count = schemas['Count']
/** {@link ExpenseEntry} */
export type ExpenseEntry = schemas['ExpenseEntry']
/** {@link ExpenseEntryAudit} */
export type ExpenseEntryAudit = schemas['ExpenseEntryAudit']
/** {@link ExpenseReport} */
export type ExpenseReport = schemas['ExpenseReport']
/** {@link ExpenseReportAudit} */
export type ExpenseReportAudit = schemas['ExpenseReportAudit']
/** {@link ExpenseReportTierUpdate} */
export type ExpenseReportTierUpdate = schemas['ExpenseReportTierUpdate']
/** {@link ExpenseTaxTypeInfo} */
export type ExpenseTaxTypeInfo = schemas['ExpenseTaxTypeInfo']
/** {@link ExpenseType} */
export type ExpenseType = schemas['ExpenseType']
/** {@link ExpenseTypeInfo} */
export type ExpenseTypeInfo = schemas['ExpenseTypeInfo']
/** {@link PatchOperation} */
export type PatchOperation = schemas['PatchOperation']
/** {@link PaymentType} */
export type PaymentType = schemas['PaymentType']
/** {@link PaymentTypeInfo} */
export type PaymentTypeInfo = schemas['PaymentTypeInfo']
/** {@link SuccessResponse} */
export type SuccessResponse = schemas['SuccessResponse']

/**
 * Expense module
 * @public
 */
export class ExpenseAPI extends ManageBaseAPI {
  getExpenseClassifications(
    params: CommonParameters<Classification> = {},
  ): Promise<Array<Classification>> {
    return this.request({
      path: `/expense/classifications`,
      method: 'get',
      params,
    })
  }

  getExpenseClassificationsById(
    id: number,
    params: CommonParameters<Classification> = {},
  ): Promise<Classification> {
    return this.request({
      path: `/expense/classifications/${id}`,
      method: 'get',
      params,
    })
  }

  getExpenseClassificationsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/expense/classifications/count`,
      method: 'get',
      params,
    })
  }

  getExpenseEntries(params: CommonParameters<ExpenseEntry> = {}): Promise<Array<ExpenseEntry>> {
    return this.request({
      path: `/expense/entries`,
      method: 'get',
      params,
    })
  }

  postExpenseEntries(expenseEntry: ExpenseEntry): Promise<ExpenseEntry> {
    return this.request({
      path: `/expense/entries`,
      method: 'post',
      data: expenseEntry,
    })
  }

  getExpenseEntriesById(
    id: number,
    params: CommonParameters<ExpenseEntry> = {},
  ): Promise<ExpenseEntry> {
    return this.request({
      path: `/expense/entries/${id}`,
      method: 'get',
      params,
    })
  }

  deleteExpenseEntriesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/expense/entries/${id}`,
      method: 'delete',
    })
  }

  putExpenseEntriesById(id: number, expenseEntry: ExpenseEntry): Promise<ExpenseEntry> {
    return this.request({
      path: `/expense/entries/${id}`,
      method: 'put',
      data: expenseEntry,
    })
  }

  patchExpenseEntriesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ExpenseEntry> {
    return this.request({
      path: `/expense/entries/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getExpenseEntriesByParentIdAudits(
    parentId: number,
    params: CommonParameters<ExpenseEntryAudit> = {},
  ): Promise<Array<ExpenseEntryAudit>> {
    return this.request({
      path: `/expense/entries/${parentId}/audits`,
      method: 'get',
      params,
    })
  }

  getExpenseEntriesByParentIdAuditsById(
    id: number,
    parentId: number,
    params: CommonParameters<ExpenseEntryAudit> = {},
  ): Promise<ExpenseEntryAudit> {
    return this.request({
      path: `/expense/entries/${parentId}/audits/${id}`,
      method: 'get',
      params,
    })
  }

  getExpenseEntriesByParentIdAuditsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/expense/entries/${parentId}/audits/count`,
      method: 'get',
      params,
    })
  }

  getExpenseEntriesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/expense/entries/count`,
      method: 'get',
      params,
    })
  }

  getExpenseInfoTaxTypes(
    params: CommonParameters<ExpenseTaxTypeInfo> = {},
  ): Promise<Array<ExpenseTaxTypeInfo>> {
    return this.request({
      path: `/expense/info/taxTypes`,
      method: 'get',
      params,
    })
  }

  getExpenseInfoTaxTypesById(
    id: number,
    params: CommonParameters<ExpenseTaxTypeInfo> = {},
  ): Promise<ExpenseTaxTypeInfo> {
    return this.request({
      path: `/expense/info/taxTypes/${id}`,
      method: 'get',
      params,
    })
  }

  getExpenseInfoTaxTypesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/expense/info/taxTypes/count`,
      method: 'get',
      params,
    })
  }

  getExpensePaymentTypes(params: CommonParameters<PaymentType> = {}): Promise<Array<PaymentType>> {
    return this.request({
      path: `/expense/paymentTypes`,
      method: 'get',
      params,
    })
  }

  postExpensePaymentTypes(paymentType: PaymentType): Promise<PaymentType> {
    return this.request({
      path: `/expense/paymentTypes`,
      method: 'post',
      data: paymentType,
    })
  }

  getExpensePaymentTypesById(
    id: number,
    params: CommonParameters<PaymentType> = {},
  ): Promise<PaymentType> {
    return this.request({
      path: `/expense/paymentTypes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteExpensePaymentTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/expense/paymentTypes/${id}`,
      method: 'delete',
    })
  }

  putExpensePaymentTypesById(id: number, paymentType: PaymentType): Promise<PaymentType> {
    return this.request({
      path: `/expense/paymentTypes/${id}`,
      method: 'put',
      data: paymentType,
    })
  }

  patchExpensePaymentTypesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<PaymentType> {
    return this.request({
      path: `/expense/paymentTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getExpensePaymentTypesByIdInfo(
    id: number,
    params: CommonParameters<PaymentTypeInfo> = {},
  ): Promise<PaymentTypeInfo> {
    return this.request({
      path: `/expense/paymentTypes/${id}/info`,
      method: 'get',
      params,
    })
  }

  getExpensePaymentTypesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/expense/paymentTypes/count`,
      method: 'get',
      params,
    })
  }

  getExpensePaymentTypesInfo(
    params: CommonParameters<PaymentTypeInfo> = {},
  ): Promise<Array<PaymentTypeInfo>> {
    return this.request({
      path: `/expense/paymentTypes/info`,
      method: 'get',
      params,
    })
  }

  getExpenseReports(params: CommonParameters<ExpenseReport> = {}): Promise<Array<ExpenseReport>> {
    return this.request({
      path: `/expense/reports`,
      method: 'get',
      params,
    })
  }

  getExpenseReportsById(
    id: number,
    params: CommonParameters<ExpenseReport> = {},
  ): Promise<ExpenseReport> {
    return this.request({
      path: `/expense/reports/${id}`,
      method: 'get',
      params,
    })
  }

  postExpenseReportsByIdApprove(
    id: number,
    reportId: ExpenseReportTierUpdate,
  ): Promise<SuccessResponse> {
    return this.request({
      path: `/expense/reports/${id}/approve`,
      method: 'post',
      data: reportId,
    })
  }

  postExpenseReportsByIdReject(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/expense/reports/${id}/reject`,
      method: 'post',
    })
  }

  postExpenseReportsByIdReverse(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/expense/reports/${id}/reverse`,
      method: 'post',
    })
  }

  postExpenseReportsByIdSubmit(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/expense/reports/${id}/submit`,
      method: 'post',
    })
  }

  getExpenseReportsByParentIdAudits(
    parentId: number,
    params: CommonParameters<ExpenseReportAudit> = {},
  ): Promise<Array<ExpenseReportAudit>> {
    return this.request({
      path: `/expense/reports/${parentId}/audits`,
      method: 'get',
      params,
    })
  }

  getExpenseReportsByParentIdAuditsById(
    id: number,
    parentId: number,
    params: CommonParameters<ExpenseReportAudit> = {},
  ): Promise<ExpenseReportAudit> {
    return this.request({
      path: `/expense/reports/${parentId}/audits/${id}`,
      method: 'get',
      params,
    })
  }

  getExpenseReportsByParentIdAuditsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/expense/reports/${parentId}/audits/count`,
      method: 'get',
      params,
    })
  }

  getExpenseReportsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/expense/reports/count`,
      method: 'get',
      params,
    })
  }

  getExpenseTypes(params: CommonParameters<ExpenseType> = {}): Promise<Array<ExpenseType>> {
    return this.request({
      path: `/expense/types`,
      method: 'get',
      params,
    })
  }

  postExpenseTypes(expenseType: ExpenseType): Promise<ExpenseType> {
    return this.request({
      path: `/expense/types`,
      method: 'post',
      data: expenseType,
    })
  }

  getExpenseTypesById(
    id: number,
    params: CommonParameters<ExpenseType> = {},
  ): Promise<ExpenseType> {
    return this.request({
      path: `/expense/types/${id}`,
      method: 'get',
      params,
    })
  }

  deleteExpenseTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/expense/types/${id}`,
      method: 'delete',
    })
  }

  putExpenseTypesById(id: number, expenseType: ExpenseType): Promise<ExpenseType> {
    return this.request({
      path: `/expense/types/${id}`,
      method: 'put',
      data: expenseType,
    })
  }

  patchExpenseTypesById(id: number, patchOperations: Array<PatchOperation>): Promise<ExpenseType> {
    return this.request({
      path: `/expense/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getExpenseTypesByIdInfo(
    id: number,
    params: CommonParameters<ExpenseTypeInfo> = {},
  ): Promise<ExpenseTypeInfo> {
    return this.request({
      path: `/expense/types/${id}/info`,
      method: 'get',
      params,
    })
  }

  getExpenseTypesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/expense/types/count`,
      method: 'get',
      params,
    })
  }

  getExpenseTypesInfo(
    params: CommonParameters<ExpenseTypeInfo> = {},
  ): Promise<Array<ExpenseTypeInfo>> {
    return this.request({
      path: `/expense/types/info`,
      method: 'get',
      params,
    })
  }
}
