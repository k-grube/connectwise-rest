/* This file was auto-generated, do not manually edit. */
import { ManageBaseAPI } from '../BaseAPI'
import { components } from '../ManageTypes'
import { CommonParameters } from '../ManageAPI'
import { NoContentResponse, PDFResponse } from '../types'
type schemas = components['schemas']
/** {@link AccountingBatch} */
export type AccountingBatch = schemas['AccountingBatch']
/** {@link AccountingPackage} */
export type AccountingPackage = schemas['AccountingPackage']
/** {@link AccountingPackageSetup} */
export type AccountingPackageSetup = schemas['AccountingPackageSetup']
/** {@link Addition} */
export type Addition = schemas['Addition']
/** {@link Agreement} */
export type Agreement = schemas['Agreement']
/** {@link AgreementAdjustment} */
export type AgreementAdjustment = schemas['Agreement.Adjustment']
/** {@link AgreementApplicationParameters} */
export type AgreementApplicationParameters = schemas['AgreementApplicationParameters']
/** {@link AgreementBatchSetup} */
export type AgreementBatchSetup = schemas['AgreementBatchSetup']
/** {@link AgreementRecap} */
export type AgreementRecap = schemas['AgreementRecap']
/** {@link AgreementRecurringParameters} */
export type AgreementRecurringParameters = schemas['AgreementRecurringParameters']
/** {@link AgreementSite} */
export type AgreementSite = schemas['AgreementSite']
/** {@link AgreementTabsCount} */
export type AgreementTabsCount = schemas['AgreementTabsCount']
/** {@link AgreementType} */
export type AgreementType = schemas['AgreementType']
/** {@link AgreementTypeBoardDefault} */
export type AgreementTypeBoardDefault = schemas['AgreementTypeBoardDefault']
/** {@link AgreementTypeInfo} */
export type AgreementTypeInfo = schemas['AgreementTypeInfo']
/** {@link AgreementTypeWorkRole} */
export type AgreementTypeWorkRole = schemas['AgreementTypeWorkRole']
/** {@link AgreementTypeWorkRoleExclusion} */
export type AgreementTypeWorkRoleExclusion = schemas['AgreementTypeWorkRoleExclusion']
/** {@link AgreementTypeWorkRoleInfo} */
export type AgreementTypeWorkRoleInfo = schemas['AgreementTypeWorkRoleInfo']
/** {@link AgreementTypeWorkType} */
export type AgreementTypeWorkType = schemas['AgreementTypeWorkType']
/** {@link AgreementTypeWorkTypeExclusion} */
export type AgreementTypeWorkTypeExclusion = schemas['AgreementTypeWorkTypeExclusion']
/** {@link AgreementWorkRole} */
export type AgreementWorkRole = schemas['AgreementWorkRole']
/** {@link AgreementWorkRoleExclusion} */
export type AgreementWorkRoleExclusion = schemas['AgreementWorkRoleExclusion']
/** {@link AgreementWorkType} */
export type AgreementWorkType = schemas['AgreementWorkType']
/** {@link AgreementWorkTypeExclusion} */
export type AgreementWorkTypeExclusion = schemas['AgreementWorkTypeExclusion']
/** {@link BatchEntry} */
export type BatchEntry = schemas['BatchEntry']
/** {@link BillingCycle} */
export type BillingCycle = schemas['BillingCycle']
/** {@link BillingCycleInfo} */
export type BillingCycleInfo = schemas['BillingCycleInfo']
/** {@link BillingSetup} */
export type BillingSetup = schemas['BillingSetup']
/** {@link BillingSetupInfo} */
export type BillingSetupInfo = schemas['BillingSetupInfo']
/** {@link BillingSetupRouting} */
export type BillingSetupRouting = schemas['BillingSetupRouting']
/** {@link BillingStatus} */
export type BillingStatus = schemas['BillingStatus']
/** {@link BillingStatusInfo} */
export type BillingStatusInfo = schemas['BillingStatusInfo']
/** {@link BillingTerm} */
export type BillingTerm = schemas['BillingTerm']
/** {@link BillingTermInfo} */
export type BillingTermInfo = schemas['BillingTermInfo']
/** {@link BoardDefault} */
export type BoardDefault = schemas['BoardDefault']
/** {@link ClosedInvoice} */
export type ClosedInvoice = schemas['ClosedInvoice']
/** {@link CompanyFinance} */
export type CompanyFinance = schemas['CompanyFinance']
/** {@link ConfigurationReference} */
export type ConfigurationReference = schemas['ConfigurationReference']
/** {@link Count} */
export type Count = schemas['Count']
/** {@link CreateAccountingBatchRequest} */
export type CreateAccountingBatchRequest = schemas['CreateAccountingBatchRequest']
/** {@link CurrencyCode} */
export type CurrencyCode = schemas['CurrencyCode']
/** {@link CurrencyInfo} */
export type CurrencyInfo = schemas['CurrencyInfo']
/** {@link DeliveryMethod} */
export type DeliveryMethod = schemas['DeliveryMethod']
/** {@link ExpenseTypeExemption} */
export type ExpenseTypeExemption = schemas['ExpenseTypeExemption']
/** {@link ExportAccountingBatchRequest} */
export type ExportAccountingBatchRequest = schemas['ExportAccountingBatchRequest']
/** {@link FinanceCurrency} */
export type FinanceCurrency = schemas['Finance.Currency']
/** {@link GLAccount} */
export type GLAccount = schemas['GLAccount']
/** {@link GLCaption} */
export type GLCaption = schemas['GLCaption']
/** {@link GLEntry} */
export type GLEntry = schemas['GLEntry']
/** {@link GLExport} */
export type GLExport = schemas['GLExport']
/** {@link GLPath} */
export type GLPath = schemas['GLPath']
/** {@link Invoice} */
export type Invoice = schemas['Invoice']
/** {@link InvoiceCommission} */
export type InvoiceCommission = schemas['InvoiceCommission']
/** {@link InvoiceEmailTemplate} */
export type InvoiceEmailTemplate = schemas['InvoiceEmailTemplate']
/** {@link InvoiceEmailTemplateInfo} */
export type InvoiceEmailTemplateInfo = schemas['InvoiceEmailTemplateInfo']
/** {@link InvoiceInfo} */
export type InvoiceInfo = schemas['InvoiceInfo']
/** {@link InvoicePayment} */
export type InvoicePayment = schemas['InvoicePayment']
/** {@link InvoiceRouting} */
export type InvoiceRouting = schemas['InvoiceRouting']
/** {@link InvoiceTemplate} */
export type InvoiceTemplate = schemas['InvoiceTemplate']
/** {@link InvoiceTemplateSetup} */
export type InvoiceTemplateSetup = schemas['InvoiceTemplateSetup']
/** {@link MappedType} */
export type MappedType = schemas['MappedType']
/** {@link PatchOperation} */
export type PatchOperation = schemas['PatchOperation']
/** {@link ProductTypeExemption} */
export type ProductTypeExemption = schemas['ProductTypeExemption']
/** {@link TaxCode} */
export type TaxCode = schemas['TaxCode']
/** {@link TaxCodeInfo} */
export type TaxCodeInfo = schemas['TaxCodeInfo']
/** {@link TaxCodeLevel} */
export type TaxCodeLevel = schemas['TaxCodeLevel']
/** {@link TaxCodeXRef} */
export type TaxCodeXRef = schemas['TaxCodeXRef']
/** {@link TaxIntegration} */
export type TaxIntegration = schemas['TaxIntegration']
/** {@link TaxIntegrationInfo} */
export type TaxIntegrationInfo = schemas['TaxIntegrationInfo']
/** {@link TaxableExpenseTypeLevel} */
export type TaxableExpenseTypeLevel = schemas['TaxableExpenseTypeLevel']
/** {@link TaxableProductTypeLevel} */
export type TaxableProductTypeLevel = schemas['TaxableProductTypeLevel']
/** {@link TaxableWorkRoleLevel} */
export type TaxableWorkRoleLevel = schemas['TaxableWorkRoleLevel']
/** {@link TaxableXRefLevel} */
export type TaxableXRefLevel = schemas['TaxableXRefLevel']
/** {@link UnpostedExpense} */
export type UnpostedExpense = schemas['UnpostedExpense']
/** {@link UnpostedExpenseTaxableLevel} */
export type UnpostedExpenseTaxableLevel = schemas['UnpostedExpenseTaxableLevel']
/** {@link UnpostedInvoice} */
export type UnpostedInvoice = schemas['UnpostedInvoice']
/** {@link UnpostedInvoiceTaxableLevel} */
export type UnpostedInvoiceTaxableLevel = schemas['UnpostedInvoiceTaxableLevel']
/** {@link UnpostedPayments} */
export type UnpostedPayments = schemas['UnpostedPayments']
/** {@link UnpostedProcurement} */
export type UnpostedProcurement = schemas['UnpostedProcurement']
/** {@link UnpostedProcurementTaxableLevel} */
export type UnpostedProcurementTaxableLevel = schemas['UnpostedProcurementTaxableLevel']
/** {@link Usage} */
export type Usage = schemas['Usage']
/** {@link WorkRoleExemption} */
export type WorkRoleExemption = schemas['WorkRoleExemption']

/**
 * Finance module
 * @public
 */
export class FinanceAPI extends ManageBaseAPI {
  getFinanceAccountingBatches(
    params: CommonParameters<AccountingBatch> = {},
  ): Promise<Array<AccountingBatch>> {
    return this.request({
      path: `/finance/accounting/batches`,
      method: 'get',
      params,
    })
  }

  postFinanceAccountingBatches(
    accountingBatchParameters: CreateAccountingBatchRequest,
  ): Promise<GLExport> {
    return this.request({
      path: `/finance/accounting/batches`,
      method: 'post',
      data: accountingBatchParameters,
    })
  }

  getFinanceAccountingBatchesById(
    id: number,
    params: CommonParameters<AccountingBatch> = {},
  ): Promise<AccountingBatch> {
    return this.request({
      path: `/finance/accounting/batches/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAccountingBatchesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/accounting/batches/${id}`,
      method: 'delete',
    })
  }

  postFinanceAccountingBatchesByIdExport(
    id: number,
    batchExportParameters: ExportAccountingBatchRequest,
  ): Promise<GLExport> {
    return this.request({
      path: `/finance/accounting/batches/${id}/export`,
      method: 'post',
      data: batchExportParameters,
    })
  }

  getFinanceAccountingBatchesByParentIdEntries(
    parentId: number,
    params: CommonParameters<BatchEntry> = {},
  ): Promise<Array<BatchEntry>> {
    return this.request({
      path: `/finance/accounting/batches/${parentId}/entries`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingBatchesByParentIdEntriesById(
    id: number,
    parentId: number,
    params: CommonParameters<BatchEntry> = {},
  ): Promise<BatchEntry> {
    return this.request({
      path: `/finance/accounting/batches/${parentId}/entries/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingBatchesByParentIdEntriesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/accounting/batches/${parentId}/entries/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingBatchesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/accounting/batches/count`,
      method: 'get',
      params,
    })
  }

  postFinanceAccountingExport(
    batchExportParameters: ExportAccountingBatchRequest,
  ): Promise<GLExport> {
    return this.request({
      path: `/finance/accounting/export`,
      method: 'post',
      data: batchExportParameters,
    })
  }

  getFinanceAccountingUnpostedexpenses(
    params: CommonParameters<UnpostedExpense> = {},
  ): Promise<Array<UnpostedExpense>> {
    return this.request({
      path: `/finance/accounting/unpostedexpenses`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedexpensesById(
    id: number,
    params: CommonParameters<UnpostedExpense> = {},
  ): Promise<UnpostedExpense> {
    return this.request({
      path: `/finance/accounting/unpostedexpenses/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedexpensesByParentIdTaxableLevels(
    parentId: number,
    params: CommonParameters<UnpostedExpenseTaxableLevel> = {},
  ): Promise<Array<UnpostedExpenseTaxableLevel>> {
    return this.request({
      path: `/finance/accounting/unpostedexpenses/${parentId}/taxableLevels`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedexpensesByParentIdTaxableLevelsById(
    id: number,
    parentId: number,
    params: CommonParameters<UnpostedExpenseTaxableLevel> = {},
  ): Promise<UnpostedExpenseTaxableLevel> {
    return this.request({
      path: `/finance/accounting/unpostedexpenses/${parentId}/taxableLevels/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedexpensesByParentIdTaxableLevelsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/accounting/unpostedexpenses/${parentId}/taxableLevels/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedexpensesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/accounting/unpostedexpenses/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedinvoices(
    params: CommonParameters<UnpostedInvoice> = {},
  ): Promise<Array<UnpostedInvoice>> {
    return this.request({
      path: `/finance/accounting/unpostedinvoices`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedinvoicesById(
    id: number,
    params: CommonParameters<UnpostedInvoice> = {},
  ): Promise<UnpostedInvoice> {
    return this.request({
      path: `/finance/accounting/unpostedinvoices/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedinvoicesByParentIdTaxableLevels(
    parentId: number,
    params: CommonParameters<UnpostedInvoiceTaxableLevel> = {},
  ): Promise<Array<UnpostedInvoiceTaxableLevel>> {
    return this.request({
      path: `/finance/accounting/unpostedinvoices/${parentId}/taxableLevels`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedinvoicesByParentIdTaxableLevelsById(
    id: number,
    parentId: number,
    params: CommonParameters<UnpostedInvoiceTaxableLevel> = {},
  ): Promise<UnpostedInvoiceTaxableLevel> {
    return this.request({
      path: `/finance/accounting/unpostedinvoices/${parentId}/taxableLevels/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedinvoicesByParentIdTaxableLevelsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/accounting/unpostedinvoices/${parentId}/taxableLevels/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedinvoicesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/accounting/unpostedinvoices/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedpayments(
    params: CommonParameters<UnpostedPayments> = {},
  ): Promise<Array<UnpostedPayments>> {
    return this.request({
      path: `/finance/accounting/unpostedpayments`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedPaymentsById(
    id: number,
    params: CommonParameters<UnpostedPayments> = {},
  ): Promise<UnpostedPayments> {
    return this.request({
      path: `/finance/accounting/unpostedPayments/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedPaymentsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/accounting/unpostedPayments/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedprocurement(
    params: CommonParameters<UnpostedProcurement> = {},
  ): Promise<Array<UnpostedProcurement>> {
    return this.request({
      path: `/finance/accounting/unpostedprocurement`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedprocurementById(
    id: number,
    params: CommonParameters<UnpostedProcurement> = {},
  ): Promise<UnpostedProcurement> {
    return this.request({
      path: `/finance/accounting/unpostedprocurement/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedprocurementByParentIdTaxableLevels(
    parentId: number,
    params: CommonParameters<UnpostedProcurementTaxableLevel> = {},
  ): Promise<Array<UnpostedProcurementTaxableLevel>> {
    return this.request({
      path: `/finance/accounting/unpostedprocurement/${parentId}/taxableLevels`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedprocurementByParentIdTaxableLevelsById(
    id: number,
    parentId: number,
    params: CommonParameters<UnpostedProcurementTaxableLevel> = {},
  ): Promise<UnpostedProcurementTaxableLevel> {
    return this.request({
      path: `/finance/accounting/unpostedprocurement/${parentId}/taxableLevels/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedprocurementByParentIdTaxableLevelsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/accounting/unpostedprocurement/${parentId}/taxableLevels/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedprocurementCount(
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/accounting/unpostedprocurement/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingPackages(
    params: CommonParameters<AccountingPackage> = {},
  ): Promise<Array<AccountingPackage>> {
    return this.request({
      path: `/finance/accountingPackages`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingPackagesById(
    id: number,
    params: CommonParameters<AccountingPackage> = {},
  ): Promise<AccountingPackage> {
    return this.request({
      path: `/finance/accountingPackages/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingPackagesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/accountingPackages/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingPackageSetup(
    params: CommonParameters<AccountingPackageSetup> = {},
  ): Promise<Array<AccountingPackageSetup>> {
    return this.request({
      path: `/finance/accountingPackageSetup`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingPackageSetupById(
    id: number,
    params: CommonParameters<AccountingPackageSetup> = {},
  ): Promise<AccountingPackageSetup> {
    return this.request({
      path: `/finance/accountingPackageSetup/${id}`,
      method: 'get',
      params,
    })
  }

  putFinanceAccountingPackageSetupById(
    id: number,
    accountingPackageSetup: AccountingPackageSetup,
  ): Promise<AccountingPackageSetup> {
    return this.request({
      path: `/finance/accountingPackageSetup/${id}`,
      method: 'put',
      data: accountingPackageSetup,
    })
  }

  patchFinanceAccountingPackageSetupById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AccountingPackageSetup> {
    return this.request({
      path: `/finance/accountingPackageSetup/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAccountingPackageSetupCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/accountingPackageSetup/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementrecap(
    params: CommonParameters<AgreementRecap> = {},
  ): Promise<Array<AgreementRecap>> {
    return this.request({
      path: `/finance/agreementrecap/`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementrecapById(
    id: number,
    params: CommonParameters<AgreementRecap> = {},
  ): Promise<AgreementRecap> {
    return this.request({
      path: `/finance/agreementrecap/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreements(params: CommonParameters<Agreement> = {}): Promise<Array<Agreement>> {
    return this.request({
      path: `/finance/agreements`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreements(agreement: Agreement): Promise<Agreement> {
    return this.request({
      path: `/finance/agreements`,
      method: 'post',
      data: agreement,
    })
  }

  getFinanceAgreementsById(
    id: number,
    params: CommonParameters<Agreement> = {},
  ): Promise<Agreement> {
    return this.request({
      path: `/finance/agreements/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementsById(id: number, agreement: Agreement): Promise<Agreement> {
    return this.request({
      path: `/finance/agreements/${id}`,
      method: 'put',
      data: agreement,
    })
  }

  patchFinanceAgreementsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Agreement> {
    return this.request({
      path: `/finance/agreements/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementsByIdApplicationParametersByPodId(
    id: number,
    podId: string,
    params: CommonParameters<AgreementApplicationParameters> = {},
  ): Promise<AgreementApplicationParameters> {
    return this.request({
      path: `/finance/agreements/${id}/applicationParameters/${podId}`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByIdInvoice(id: number): Promise<number> {
    return this.request({
      path: `/finance/agreements/${id}/invoice`,
      method: 'post',
    })
  }

  getFinanceAgreementsByIdQuickAccessCount(
    id: number,
    params: CommonParameters<AgreementTabsCount> = {},
  ): Promise<AgreementTabsCount> {
    return this.request({
      path: `/finance/agreements/${id}/quickAccess/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsByIdRecurringParametersByPodId(
    id: number,
    podId: string,
    params: CommonParameters<AgreementRecurringParameters> = {},
  ): Promise<AgreementRecurringParameters> {
    return this.request({
      path: `/finance/agreements/${id}/recurringParameters/${podId}`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsByParentIdAdditions(
    parentId: number,
    params: CommonParameters<Addition> = {},
  ): Promise<Array<Addition>> {
    return this.request({
      path: `/finance/agreements/${parentId}/additions`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdAdditions(
    parentId: number,
    addition: Addition,
  ): Promise<Addition> {
    return this.request({
      path: `/finance/agreements/${parentId}/additions`,
      method: 'post',
      data: addition,
    })
  }

  getFinanceAgreementsByParentIdAdditionsById(
    id: number,
    parentId: number,
    params: CommonParameters<Addition> = {},
  ): Promise<Addition> {
    return this.request({
      path: `/finance/agreements/${parentId}/additions/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementsByParentIdAdditionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${parentId}/additions/${id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementsByParentIdAdditionsById(
    id: number,
    parentId: number,
    addition: Addition,
  ): Promise<Addition> {
    return this.request({
      path: `/finance/agreements/${parentId}/additions/${id}`,
      method: 'put',
      data: addition,
    })
  }

  patchFinanceAgreementsByParentIdAdditionsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Addition> {
    return this.request({
      path: `/finance/agreements/${parentId}/additions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementsByParentIdAdditionsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreements/${parentId}/additions/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsByParentIdAdjustments(
    parentId: number,
    params: CommonParameters<AgreementAdjustment> = {},
  ): Promise<Array<AgreementAdjustment>> {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdAdjustments(
    parentId: number,
    adjustment: AgreementAdjustment,
  ): Promise<AgreementAdjustment> {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments`,
      method: 'post',
      data: adjustment,
    })
  }

  getFinanceAgreementsByParentIdAdjustmentsById(
    id: number,
    parentId: number,
    params: CommonParameters<AgreementAdjustment> = {},
  ): Promise<AgreementAdjustment> {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementsByParentIdAdjustmentsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments/${id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementsByParentIdAdjustmentsById(
    id: number,
    parentId: number,
    adjustment: AgreementAdjustment,
  ): Promise<AgreementAdjustment> {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments/${id}`,
      method: 'put',
      data: adjustment,
    })
  }

  patchFinanceAgreementsByParentIdAdjustmentsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AgreementAdjustment> {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementsByParentIdAdjustmentsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsByParentIdBoardDefaults(
    parentId: number,
    params: CommonParameters<BoardDefault> = {},
  ): Promise<Array<BoardDefault>> {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdBoardDefaults(
    parentId: number,
    boardDefault: BoardDefault,
  ): Promise<BoardDefault> {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults`,
      method: 'post',
      data: boardDefault,
    })
  }

  getFinanceAgreementsByParentIdBoardDefaultsById(
    id: number,
    parentId: number,
    params: CommonParameters<BoardDefault> = {},
  ): Promise<BoardDefault> {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementsByParentIdBoardDefaultsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults/${id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementsByParentIdBoardDefaultsById(
    id: number,
    parentId: number,
    boardDefault: BoardDefault,
  ): Promise<BoardDefault> {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults/${id}`,
      method: 'put',
      data: boardDefault,
    })
  }

  patchFinanceAgreementsByParentIdBoardDefaultsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<BoardDefault> {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementsByParentIdBoardDefaultsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsByParentIdConfigurations(
    parentId: number,
    params: CommonParameters<ConfigurationReference> = {},
  ): Promise<Array<ConfigurationReference>> {
    return this.request({
      path: `/finance/agreements/${parentId}/configurations`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdConfigurations(
    parentId: number,
    configuration: ConfigurationReference,
  ): Promise<ConfigurationReference> {
    return this.request({
      path: `/finance/agreements/${parentId}/configurations`,
      method: 'post',
      data: configuration,
    })
  }

  getFinanceAgreementsByParentIdConfigurationsById(
    id: number,
    parentId: number,
    params: CommonParameters<ConfigurationReference> = {},
  ): Promise<ConfigurationReference> {
    return this.request({
      path: `/finance/agreements/${parentId}/configurations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementsByParentIdConfigurationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${parentId}/configurations/${id}`,
      method: 'delete',
    })
  }

  getFinanceAgreementsByParentIdConfigurationsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreements/${parentId}/configurations/count`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdCopy(parentId: number): Promise<Agreement> {
    return this.request({
      path: `/finance/agreements/${parentId}/copy`,
      method: 'post',
    })
  }

  getFinanceAgreementsByParentIdSites(
    parentId: number,
    params: CommonParameters<AgreementSite> = {},
  ): Promise<Array<AgreementSite>> {
    return this.request({
      path: `/finance/agreements/${parentId}/sites`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdSites(
    parentId: number,
    site: AgreementSite,
  ): Promise<AgreementSite> {
    return this.request({
      path: `/finance/agreements/${parentId}/sites`,
      method: 'post',
      data: site,
    })
  }

  getFinanceAgreementsByParentIdSitesById(
    id: number,
    parentId: number,
    params: CommonParameters<AgreementSite> = {},
  ): Promise<AgreementSite> {
    return this.request({
      path: `/finance/agreements/${parentId}/sites/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementsByParentIdSitesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${parentId}/sites/${id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementsByParentIdSitesById(
    id: number,
    parentId: number,
    site: AgreementSite,
  ): Promise<AgreementSite> {
    return this.request({
      path: `/finance/agreements/${parentId}/sites/${id}`,
      method: 'put',
      data: site,
    })
  }

  patchFinanceAgreementsByParentIdSitesById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AgreementSite> {
    return this.request({
      path: `/finance/agreements/${parentId}/sites/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementsByParentIdSitesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreements/${parentId}/sites/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsByParentIdWorkRoleExclusions(
    parentId: number,
    params: CommonParameters<AgreementWorkRoleExclusion> = {},
  ): Promise<Array<AgreementWorkRoleExclusion>> {
    return this.request({
      path: `/finance/agreements/${parentId}/workRoleExclusions`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdWorkRoleExclusions(
    parentId: number,
    workRoleExclusion: AgreementWorkRoleExclusion,
  ): Promise<AgreementWorkRoleExclusion> {
    return this.request({
      path: `/finance/agreements/${parentId}/workRoleExclusions`,
      method: 'post',
      data: workRoleExclusion,
    })
  }

  deleteFinanceAgreementsByParentIdWorkRoleExclusionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${parentId}/workRoleExclusions/${id}`,
      method: 'delete',
    })
  }

  getFinanceAgreementsByParentIdWorkRoleExclusionsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreements/${parentId}/workRoleExclusions/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsByParentIdWorkroles(
    parentId: number,
    params: CommonParameters<AgreementWorkRole> = {},
  ): Promise<Array<AgreementWorkRole>> {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdWorkroles(
    parentId: number,
    workRole: AgreementWorkRole,
  ): Promise<AgreementWorkRole> {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles`,
      method: 'post',
      data: workRole,
    })
  }

  getFinanceAgreementsByParentIdWorkrolesById(
    id: number,
    parentId: number,
    params: CommonParameters<AgreementWorkRole> = {},
  ): Promise<AgreementWorkRole> {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementsByParentIdWorkrolesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles/${id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementsByParentIdWorkrolesById(
    id: number,
    parentId: number,
    workRole: AgreementWorkRole,
  ): Promise<AgreementWorkRole> {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles/${id}`,
      method: 'put',
      data: workRole,
    })
  }

  patchFinanceAgreementsByParentIdWorkrolesById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AgreementWorkRole> {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementsByParentIdWorkrolesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsByParentIdWorkTypeExclusions(
    parentId: number,
    params: CommonParameters<AgreementWorkTypeExclusion> = {},
  ): Promise<Array<AgreementWorkTypeExclusion>> {
    return this.request({
      path: `/finance/agreements/${parentId}/workTypeExclusions`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdWorkTypeExclusions(
    parentId: number,
    workTypeExclusion: AgreementWorkTypeExclusion,
  ): Promise<AgreementWorkTypeExclusion> {
    return this.request({
      path: `/finance/agreements/${parentId}/workTypeExclusions`,
      method: 'post',
      data: workTypeExclusion,
    })
  }

  deleteFinanceAgreementsByParentIdWorkTypeExclusionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${parentId}/workTypeExclusions/${id}`,
      method: 'delete',
    })
  }

  getFinanceAgreementsByParentIdWorkTypeExclusionsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreements/${parentId}/workTypeExclusions/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsByParentIdWorktypes(
    parentId: number,
    params: CommonParameters<AgreementWorkType> = {},
  ): Promise<Array<AgreementWorkType>> {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdWorktypes(
    parentId: number,
    workType: AgreementWorkType,
  ): Promise<AgreementWorkType> {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes`,
      method: 'post',
      data: workType,
    })
  }

  getFinanceAgreementsByParentIdWorktypesById(
    id: number,
    parentId: number,
    params: CommonParameters<AgreementWorkType> = {},
  ): Promise<AgreementWorkType> {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementsByParentIdWorktypesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes/${id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementsByParentIdWorktypesById(
    id: number,
    parentId: number,
    workType: AgreementWorkType,
  ): Promise<AgreementWorkType> {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes/${id}`,
      method: 'put',
      data: workType,
    })
  }

  patchFinanceAgreementsByParentIdWorktypesById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AgreementWorkType> {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementsByParentIdWorktypesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/agreements/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsTypes(
    params: CommonParameters<AgreementType> = {},
  ): Promise<Array<AgreementType>> {
    return this.request({
      path: `/finance/agreements/types`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsTypes(agreementType: AgreementType): Promise<AgreementType> {
    return this.request({
      path: `/finance/agreements/types`,
      method: 'post',
      data: agreementType,
    })
  }

  getFinanceAgreementsTypesById(
    id: number,
    params: CommonParameters<AgreementType> = {},
  ): Promise<AgreementType> {
    return this.request({
      path: `/finance/agreements/types/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementsTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/types/${id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementsTypesById(id: number, agreementType: AgreementType): Promise<AgreementType> {
    return this.request({
      path: `/finance/agreements/types/${id}`,
      method: 'put',
      data: agreementType,
    })
  }

  patchFinanceAgreementsTypesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AgreementType> {
    return this.request({
      path: `/finance/agreements/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementsTypesByIdInfo(
    id: number,
    params: CommonParameters<AgreementTypeInfo> = {},
  ): Promise<AgreementTypeInfo> {
    return this.request({
      path: `/finance/agreements/types/${id}/info`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsTypesByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/finance/agreements/types/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsTypesByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/finance/agreements/types/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsTypesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/agreements/types/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsTypesInfo(
    params: CommonParameters<AgreementTypeInfo> = {},
  ): Promise<Array<AgreementTypeInfo>> {
    return this.request({
      path: `/finance/agreements/types/info`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsTypesInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/agreements/types/info/count`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByIdCopy(id: number): Promise<AgreementType> {
    return this.request({
      path: `/finance/agreements/types${id}/copy`,
      method: 'post',
    })
  }

  getFinanceAgreementTypesByParentIdBoardDefaults(
    parentId: number,
    params: CommonParameters<AgreementTypeBoardDefault> = {},
  ): Promise<Array<AgreementTypeBoardDefault>> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementTypesByParentIdBoardDefaults(
    parentId: number,
    boardDefault: AgreementTypeBoardDefault,
  ): Promise<AgreementTypeBoardDefault> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults`,
      method: 'post',
      data: boardDefault,
    })
  }

  getFinanceAgreementTypesByParentIdBoardDefaultsById(
    id: number,
    parentId: number,
    params: CommonParameters<AgreementTypeBoardDefault> = {},
  ): Promise<AgreementTypeBoardDefault> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementTypesByParentIdBoardDefaultsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults/${id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementTypesByParentIdBoardDefaultsById(
    id: number,
    parentId: number,
    boardDefault: AgreementTypeBoardDefault,
  ): Promise<AgreementTypeBoardDefault> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults/${id}`,
      method: 'put',
      data: boardDefault,
    })
  }

  patchFinanceAgreementTypesByParentIdBoardDefaultsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AgreementTypeBoardDefault> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementTypesByParentIdBoardDefaultsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementTypesByParentIdWorkRoleExclusions(
    parentId: number,
    params: CommonParameters<AgreementTypeWorkRoleExclusion> = {},
  ): Promise<Array<AgreementTypeWorkRoleExclusion>> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workRoleExclusions`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementTypesByParentIdWorkRoleExclusions(
    parentId: number,
    workRoleExclusion: AgreementTypeWorkRoleExclusion,
  ): Promise<AgreementTypeWorkRoleExclusion> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workRoleExclusions`,
      method: 'post',
      data: workRoleExclusion,
    })
  }

  getFinanceAgreementTypesByParentIdWorkRoleExclusionsById(
    id: number,
    parentId: number,
    params: CommonParameters<AgreementTypeWorkRoleExclusion> = {},
  ): Promise<AgreementTypeWorkRoleExclusion> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workRoleExclusions/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementTypesByParentIdWorkRoleExclusionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workRoleExclusions/${id}`,
      method: 'delete',
    })
  }

  getFinanceAgreementTypesByParentIdWorkRoleExclusionsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workRoleExclusions/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementTypesByParentIdWorkroles(
    parentId: number,
    params: CommonParameters<AgreementTypeWorkRole> = {},
  ): Promise<Array<AgreementTypeWorkRole>> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementTypesByParentIdWorkroles(
    parentId: number,
    workRole: AgreementTypeWorkRole,
  ): Promise<AgreementTypeWorkRole> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles`,
      method: 'post',
      data: workRole,
    })
  }

  getFinanceAgreementTypesByParentIdWorkrolesById(
    id: number,
    parentId: number,
    params: CommonParameters<AgreementTypeWorkRole> = {},
  ): Promise<AgreementTypeWorkRole> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementTypesByParentIdWorkrolesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/${id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementTypesByParentIdWorkrolesById(
    id: number,
    parentId: number,
    workRole: AgreementTypeWorkRole,
  ): Promise<AgreementTypeWorkRole> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/${id}`,
      method: 'put',
      data: workRole,
    })
  }

  patchFinanceAgreementTypesByParentIdWorkrolesById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AgreementTypeWorkRole> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementTypesByParentIdWorkrolesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementTypesByParentIdWorkrolesInfo(
    parentId: number,
    params: CommonParameters<AgreementTypeWorkRoleInfo> = {},
  ): Promise<Array<AgreementTypeWorkRoleInfo>> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/info`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementTypesByParentIdWorkrolesInfoById(
    id: number,
    parentId: number,
    params: CommonParameters<AgreementTypeWorkRoleInfo> = {},
  ): Promise<AgreementTypeWorkRoleInfo> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/info/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementTypesByParentIdWorkrolesInfoCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/info/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementTypesByParentIdWorkTypeExclusions(
    parentId: number,
    params: CommonParameters<AgreementTypeWorkTypeExclusion> = {},
  ): Promise<Array<AgreementTypeWorkTypeExclusion>> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workTypeExclusions`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementTypesByParentIdWorkTypeExclusions(
    parentId: number,
    workTypeExclusion: AgreementTypeWorkTypeExclusion,
  ): Promise<AgreementTypeWorkTypeExclusion> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workTypeExclusions`,
      method: 'post',
      data: workTypeExclusion,
    })
  }

  getFinanceAgreementTypesByParentIdWorkTypeExclusionsById(
    id: number,
    parentId: number,
    params: CommonParameters<AgreementTypeWorkTypeExclusion> = {},
  ): Promise<AgreementTypeWorkTypeExclusion> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workTypeExclusions/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementTypesByParentIdWorkTypeExclusionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workTypeExclusions/${id}`,
      method: 'delete',
    })
  }

  getFinanceAgreementTypesByParentIdWorkTypeExclusionsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workTypeExclusions/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementTypesByParentIdWorktypes(
    parentId: number,
    params: CommonParameters<AgreementTypeWorkType> = {},
  ): Promise<Array<AgreementTypeWorkType>> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementTypesByParentIdWorktypes(
    parentId: number,
    workType: AgreementTypeWorkType,
  ): Promise<AgreementTypeWorkType> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes`,
      method: 'post',
      data: workType,
    })
  }

  getFinanceAgreementTypesByParentIdWorktypesById(
    id: number,
    parentId: number,
    params: CommonParameters<AgreementTypeWorkType> = {},
  ): Promise<AgreementTypeWorkType> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementTypesByParentIdWorktypesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes/${id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementTypesByParentIdWorktypesById(
    id: number,
    parentId: number,
    workType: AgreementTypeWorkType,
  ): Promise<AgreementTypeWorkType> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes/${id}`,
      method: 'put',
      data: workType,
    })
  }

  patchFinanceAgreementTypesByParentIdWorktypesById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AgreementTypeWorkType> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementTypesByParentIdWorktypesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBatchSetups(
    params: CommonParameters<AgreementBatchSetup> = {},
  ): Promise<Array<AgreementBatchSetup>> {
    return this.request({
      path: `/finance/batchSetups`,
      method: 'get',
      params,
    })
  }

  getFinanceBatchSetupsById(
    id: number,
    params: CommonParameters<AgreementBatchSetup> = {},
  ): Promise<AgreementBatchSetup> {
    return this.request({
      path: `/finance/batchSetups/${id}`,
      method: 'get',
      params,
    })
  }

  putFinanceBatchSetupsById(
    id: number,
    batchSetup: AgreementBatchSetup,
  ): Promise<AgreementBatchSetup> {
    return this.request({
      path: `/finance/batchSetups/${id}`,
      method: 'put',
      data: batchSetup,
    })
  }

  patchFinanceBatchSetupsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AgreementBatchSetup> {
    return this.request({
      path: `/finance/batchSetups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceBatchSetupsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/batchSetups/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingCycles(
    params: CommonParameters<BillingCycle> = {},
  ): Promise<Array<BillingCycle>> {
    return this.request({
      path: `/finance/billingCycles`,
      method: 'get',
      params,
    })
  }

  postFinanceBillingCycles(billingCycle: BillingCycle): Promise<BillingCycle> {
    return this.request({
      path: `/finance/billingCycles`,
      method: 'post',
      data: billingCycle,
    })
  }

  getFinanceBillingCyclesById(
    id: number,
    params: CommonParameters<BillingCycle> = {},
  ): Promise<BillingCycle> {
    return this.request({
      path: `/finance/billingCycles/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceBillingCyclesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/billingCycles/${id}`,
      method: 'delete',
    })
  }

  putFinanceBillingCyclesById(id: number, billingCycle: BillingCycle): Promise<BillingCycle> {
    return this.request({
      path: `/finance/billingCycles/${id}`,
      method: 'put',
      data: billingCycle,
    })
  }

  patchFinanceBillingCyclesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<BillingCycle> {
    return this.request({
      path: `/finance/billingCycles/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceBillingCyclesByIdInfo(
    id: number,
    params: CommonParameters<BillingCycleInfo> = {},
  ): Promise<BillingCycleInfo> {
    return this.request({
      path: `/finance/billingCycles/${id}/info`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingCyclesByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/finance/billingCycles/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingCyclesByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/finance/billingCycles/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingCyclesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/billingCycles/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingCyclesInfo(
    params: CommonParameters<BillingCycleInfo> = {},
  ): Promise<Array<BillingCycleInfo>> {
    return this.request({
      path: `/finance/billingCycles/info`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingCyclesInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/billingCycles/info/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingSetups(
    params: CommonParameters<BillingSetup> = {},
  ): Promise<Array<BillingSetup>> {
    return this.request({
      path: `/finance/billingSetups`,
      method: 'get',
      params,
    })
  }

  postFinanceBillingSetups(billingSetup: BillingSetup): Promise<BillingSetup> {
    return this.request({
      path: `/finance/billingSetups`,
      method: 'post',
      data: billingSetup,
    })
  }

  getFinanceBillingSetupsById(
    id: number,
    params: CommonParameters<BillingSetup> = {},
  ): Promise<BillingSetup> {
    return this.request({
      path: `/finance/billingSetups/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceBillingSetupsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/billingSetups/${id}`,
      method: 'delete',
    })
  }

  putFinanceBillingSetupsById(id: number, billingSetup: BillingSetup): Promise<BillingSetup> {
    return this.request({
      path: `/finance/billingSetups/${id}`,
      method: 'put',
      data: billingSetup,
    })
  }

  patchFinanceBillingSetupsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<BillingSetup> {
    return this.request({
      path: `/finance/billingSetups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceBillingSetupsByIdInfo(
    id: number,
    params: CommonParameters<BillingSetupInfo> = {},
  ): Promise<BillingSetupInfo> {
    return this.request({
      path: `/finance/billingSetups/${id}/info`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingSetupsByParentIdRoutings(
    parentId: number,
    params: CommonParameters<BillingSetupRouting> = {},
  ): Promise<Array<BillingSetupRouting>> {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings`,
      method: 'get',
      params,
    })
  }

  postFinanceBillingSetupsByParentIdRoutings(
    parentId: number,
    billingSetupRouting: BillingSetupRouting,
  ): Promise<BillingSetupRouting> {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings`,
      method: 'post',
      data: billingSetupRouting,
    })
  }

  getFinanceBillingSetupsByParentIdRoutingsById(
    id: number,
    parentId: number,
    params: CommonParameters<BillingSetupRouting> = {},
  ): Promise<BillingSetupRouting> {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceBillingSetupsByParentIdRoutingsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings/${id}`,
      method: 'delete',
    })
  }

  putFinanceBillingSetupsByParentIdRoutingsById(
    id: number,
    parentId: number,
    billingSetupRouting: BillingSetupRouting,
  ): Promise<BillingSetupRouting> {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings/${id}`,
      method: 'put',
      data: billingSetupRouting,
    })
  }

  patchFinanceBillingSetupsByParentIdRoutingsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<BillingSetupRouting> {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceBillingSetupsByParentIdRoutingsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingSetupsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/billingSetups/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingSetupsInfo(
    params: CommonParameters<BillingSetupInfo> = {},
  ): Promise<Array<BillingSetupInfo>> {
    return this.request({
      path: `/finance/billingSetups/info`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingSetupsInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/billingSetups/info/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingStatuses(
    params: CommonParameters<BillingStatus> = {},
  ): Promise<Array<BillingStatus>> {
    return this.request({
      path: `/finance/billingStatuses`,
      method: 'get',
      params,
    })
  }

  postFinanceBillingStatuses(billingStatus: BillingStatus): Promise<BillingStatus> {
    return this.request({
      path: `/finance/billingStatuses`,
      method: 'post',
      data: billingStatus,
    })
  }

  getFinanceBillingStatusesById(
    id: number,
    params: CommonParameters<BillingStatus> = {},
  ): Promise<BillingStatus> {
    return this.request({
      path: `/finance/billingStatuses/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceBillingStatusesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/billingStatuses/${id}`,
      method: 'delete',
    })
  }

  putFinanceBillingStatusesById(id: number, billingStatus: BillingStatus): Promise<BillingStatus> {
    return this.request({
      path: `/finance/billingStatuses/${id}`,
      method: 'put',
      data: billingStatus,
    })
  }

  patchFinanceBillingStatusesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<BillingStatus> {
    return this.request({
      path: `/finance/billingStatuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceBillingStatusesByIdInfo(
    id: number,
    params: CommonParameters<BillingStatusInfo> = {},
  ): Promise<BillingStatusInfo> {
    return this.request({
      path: `/finance/billingStatuses/${id}/info`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingStatusesByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/finance/billingStatuses/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingStatusesByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/finance/billingStatuses/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingStatusesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/billingStatuses/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingStatusesInfo(
    params: CommonParameters<BillingStatusInfo> = {},
  ): Promise<Array<BillingStatusInfo>> {
    return this.request({
      path: `/finance/billingStatuses/info`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingStatusesInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/billingStatuses/info/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingTerms(params: CommonParameters<BillingTerm> = {}): Promise<Array<BillingTerm>> {
    return this.request({
      path: `/finance/billingTerms`,
      method: 'get',
      params,
    })
  }

  postFinanceBillingTerms(billingTerms: BillingTerm): Promise<BillingTerm> {
    return this.request({
      path: `/finance/billingTerms`,
      method: 'post',
      data: billingTerms,
    })
  }

  getFinanceBillingTermsById(
    id: number,
    params: CommonParameters<BillingTerm> = {},
  ): Promise<BillingTerm> {
    return this.request({
      path: `/finance/billingTerms/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceBillingTermsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/billingTerms/${id}`,
      method: 'delete',
    })
  }

  putFinanceBillingTermsById(id: number, billingTerms: BillingTerm): Promise<BillingTerm> {
    return this.request({
      path: `/finance/billingTerms/${id}`,
      method: 'put',
      data: billingTerms,
    })
  }

  patchFinanceBillingTermsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<BillingTerm> {
    return this.request({
      path: `/finance/billingTerms/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceBillingTermsByIdInfo(
    id: number,
    params: CommonParameters<BillingTermInfo> = {},
  ): Promise<BillingTermInfo> {
    return this.request({
      path: `/finance/billingTerms/${id}/info`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingTermsByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/finance/billingTerms/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingTermsByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/finance/billingTerms/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingTermsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/billingTerms/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingTermsInfo(
    params: CommonParameters<BillingTermInfo> = {},
  ): Promise<Array<BillingTermInfo>> {
    return this.request({
      path: `/finance/billingTerms/info`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingTermsInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/billingTerms/info/count`,
      method: 'get',
      params,
    })
  }

  putFinanceClosedInvoicesById(id: number, closedInvoice: ClosedInvoice): Promise<ClosedInvoice> {
    return this.request({
      path: `/finance/closedInvoices/${id}`,
      method: 'put',
      data: closedInvoice,
    })
  }

  patchFinanceClosedInvoicesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ClosedInvoice> {
    return this.request({
      path: `/finance/closedInvoices/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceCompanyFinance(
    params: CommonParameters<CompanyFinance> = {},
  ): Promise<Array<CompanyFinance>> {
    return this.request({
      path: `/finance/companyFinance/`,
      method: 'get',
      params,
    })
  }

  getFinanceCompanyFinanceById(
    id: number,
    params: CommonParameters<CompanyFinance> = {},
  ): Promise<CompanyFinance> {
    return this.request({
      path: `/finance/companyFinance/${id}`,
      method: 'get',
      params,
    })
  }

  putFinanceCompanyFinanceById(
    id: number,
    CompanyFinance: CompanyFinance,
  ): Promise<CompanyFinance> {
    return this.request({
      path: `/finance/companyFinance/${id}`,
      method: 'put',
      data: CompanyFinance,
    })
  }

  patchFinanceCompanyFinanceById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<CompanyFinance> {
    return this.request({
      path: `/finance/companyFinance/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceCompanyFinanceCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/companyFinance/count`,
      method: 'get',
      params,
    })
  }

  getFinanceCurrencies(
    params: CommonParameters<FinanceCurrency> = {},
  ): Promise<Array<FinanceCurrency>> {
    return this.request({
      path: `/finance/currencies`,
      method: 'get',
      params,
    })
  }

  postFinanceCurrencies(currency: FinanceCurrency): Promise<FinanceCurrency> {
    return this.request({
      path: `/finance/currencies`,
      method: 'post',
      data: currency,
    })
  }

  getFinanceCurrenciesById(
    id: number,
    params: CommonParameters<FinanceCurrency> = {},
  ): Promise<FinanceCurrency> {
    return this.request({
      path: `/finance/currencies/${id}`,
      method: 'get',
      params,
    })
  }

  putFinanceCurrenciesById(id: number, currency: FinanceCurrency): Promise<FinanceCurrency> {
    return this.request({
      path: `/finance/currencies/${id}`,
      method: 'put',
      data: currency,
    })
  }

  patchFinanceCurrenciesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<FinanceCurrency> {
    return this.request({
      path: `/finance/currencies/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  deleteFinanceCurrenciesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/currencies/${id}`,
      method: 'delete',
    })
  }

  getFinanceCurrenciesByIdInfo(
    id: number,
    params: CommonParameters<CurrencyInfo> = {},
  ): Promise<CurrencyInfo> {
    return this.request({
      path: `/finance/currencies/${id}/info`,
      method: 'get',
      params,
    })
  }

  getFinanceCurrenciesByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/finance/currencies/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getFinanceCurrenciesByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/finance/currencies/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getFinanceCurrenciesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/currencies/count`,
      method: 'get',
      params,
    })
  }

  getFinanceCurrenciesInfo(
    params: CommonParameters<CurrencyInfo> = {},
  ): Promise<Array<CurrencyInfo>> {
    return this.request({
      path: `/finance/currencies/info`,
      method: 'get',
      params,
    })
  }

  getFinanceCurrenciesInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/currencies/info/count`,
      method: 'get',
      params,
    })
  }

  getFinanceDeliveryMethods(
    params: CommonParameters<DeliveryMethod> = {},
  ): Promise<Array<DeliveryMethod>> {
    return this.request({
      path: `/finance/deliveryMethods`,
      method: 'get',
      params,
    })
  }

  postFinanceDeliveryMethods(deliveryMethod: DeliveryMethod): Promise<DeliveryMethod> {
    return this.request({
      path: `/finance/deliveryMethods`,
      method: 'post',
      data: deliveryMethod,
    })
  }

  getFinanceDeliveryMethodsById(
    id: number,
    params: CommonParameters<DeliveryMethod> = {},
  ): Promise<DeliveryMethod> {
    return this.request({
      path: `/finance/deliveryMethods/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceDeliveryMethodsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/deliveryMethods/${id}`,
      method: 'delete',
    })
  }

  putFinanceDeliveryMethodsById(
    id: number,
    deliveryMethod: DeliveryMethod,
  ): Promise<DeliveryMethod> {
    return this.request({
      path: `/finance/deliveryMethods/${id}`,
      method: 'put',
      data: deliveryMethod,
    })
  }

  patchFinanceDeliveryMethodsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<DeliveryMethod> {
    return this.request({
      path: `/finance/deliveryMethods/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceDeliveryMethodsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/deliveryMethods/count`,
      method: 'get',
      params,
    })
  }

  getFinanceGlAccounts(params: CommonParameters<GLAccount> = {}): Promise<Array<GLAccount>> {
    return this.request({
      path: `/finance/glAccounts`,
      method: 'get',
      params,
    })
  }

  postFinanceGlAccounts(glAccount: GLAccount): Promise<GLAccount> {
    return this.request({
      path: `/finance/glAccounts`,
      method: 'post',
      data: glAccount,
    })
  }

  getFinanceGlAccountsById(
    id: number,
    params: CommonParameters<GLAccount> = {},
  ): Promise<GLAccount> {
    return this.request({
      path: `/finance/glAccounts/${id}`,
      method: 'get',
      params,
    })
  }

  putFinanceGlAccountsById(id: number, glAccount: GLAccount): Promise<GLAccount> {
    return this.request({
      path: `/finance/glAccounts/${id}`,
      method: 'put',
      data: glAccount,
    })
  }

  patchFinanceGlAccountsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<GLAccount> {
    return this.request({
      path: `/finance/glAccounts/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  deleteFinanceGlAccountsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/glAccounts/${id}`,
      method: 'delete',
    })
  }

  getFinanceGlAccountsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/glAccounts/count`,
      method: 'get',
      params,
    })
  }

  getFinanceGlAccountsMappedTypes(
    params: CommonParameters<MappedType> = {},
  ): Promise<Array<MappedType>> {
    return this.request({
      path: `/finance/glAccounts/mappedTypes`,
      method: 'get',
      params,
    })
  }

  getFinanceGlAccountsMappedTypesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/glAccounts/mappedTypes/count`,
      method: 'get',
      params,
    })
  }

  getFinanceGlCaptions(params: CommonParameters<GLCaption> = {}): Promise<Array<GLCaption>> {
    return this.request({
      path: `/finance/glCaptions`,
      method: 'get',
      params,
    })
  }

  getFinanceGlCaptionsById(
    id: number,
    params: CommonParameters<GLCaption> = {},
  ): Promise<GLCaption> {
    return this.request({
      path: `/finance/glCaptions/${id}`,
      method: 'get',
      params,
    })
  }

  putFinanceGlCaptionsById(id: number, glCaption: GLCaption): Promise<GLCaption> {
    return this.request({
      path: `/finance/glCaptions/${id}`,
      method: 'put',
      data: glCaption,
    })
  }

  patchFinanceGlCaptionsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<GLCaption> {
    return this.request({
      path: `/finance/glCaptions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceGlCaptionsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/glCaptions/count`,
      method: 'get',
      params,
    })
  }

  getFinanceGlpaths(params: CommonParameters<GLPath> = {}): Promise<Array<GLPath>> {
    return this.request({
      path: `/finance/glpaths`,
      method: 'get',
      params,
    })
  }

  postFinanceGlpaths(gLPath: GLPath): Promise<GLPath> {
    return this.request({
      path: `/finance/glpaths`,
      method: 'post',
      data: gLPath,
    })
  }

  getFinanceGlpathsById(id: number, params: CommonParameters<GLPath> = {}): Promise<GLPath> {
    return this.request({
      path: `/finance/glpaths/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceGlpathsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/glpaths/${id}`,
      method: 'delete',
    })
  }

  putFinanceGlpathsById(id: number, gLPath: GLPath): Promise<GLPath> {
    return this.request({
      path: `/finance/glpaths/${id}`,
      method: 'put',
      data: gLPath,
    })
  }

  patchFinanceGlpathsById(id: number, patchOperations: Array<PatchOperation>): Promise<GLPath> {
    return this.request({
      path: `/finance/glpaths/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceGlpathsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/glpaths/count`,
      method: 'get',
      params,
    })
  }

  getFinanceInfoCurrencyCodes(
    params: CommonParameters<CurrencyCode> = {},
  ): Promise<Array<CurrencyCode>> {
    return this.request({
      path: `/finance/info/currencyCodes`,
      method: 'get',
      params,
    })
  }

  getFinanceInfoCurrencyCodesById(
    id: number,
    params: CommonParameters<CurrencyCode> = {},
  ): Promise<CurrencyCode> {
    return this.request({
      path: `/finance/info/currencyCodes/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceInfoCurrencyCodesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/info/currencyCodes/count`,
      method: 'get',
      params,
    })
  }

  getFinanceInfoInvoiceById(
    id: number,
    params: CommonParameters<InvoiceInfo> = {},
  ): Promise<InvoiceInfo> {
    return this.request({
      path: `/finance/info/invoice/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceInfoTaxIntegrations(
    params: CommonParameters<TaxIntegrationInfo> = {},
  ): Promise<Array<TaxIntegrationInfo>> {
    return this.request({
      path: `/finance/info/taxIntegrations`,
      method: 'get',
      params,
    })
  }

  getFinanceInfoTaxIntegrationsById(
    id: number,
    params: CommonParameters<TaxIntegrationInfo> = {},
  ): Promise<TaxIntegrationInfo> {
    return this.request({
      path: `/finance/info/taxIntegrations/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceInfoTaxIntegrationsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/info/taxIntegrations/count`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceEmailTemplates(
    params: CommonParameters<InvoiceEmailTemplate> = {},
  ): Promise<Array<InvoiceEmailTemplate>> {
    return this.request({
      path: `/finance/invoiceEmailTemplates`,
      method: 'get',
      params,
    })
  }

  postFinanceInvoiceEmailTemplates(
    invoiceEmailTemplate: InvoiceEmailTemplate,
  ): Promise<InvoiceEmailTemplate> {
    return this.request({
      path: `/finance/invoiceEmailTemplates`,
      method: 'post',
      data: invoiceEmailTemplate,
    })
  }

  getFinanceInvoiceEmailTemplatesById(
    id: number,
    params: CommonParameters<InvoiceEmailTemplate> = {},
  ): Promise<InvoiceEmailTemplate> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceInvoiceEmailTemplatesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}`,
      method: 'delete',
    })
  }

  putFinanceInvoiceEmailTemplatesById(
    id: number,
    invoiceEmailTemplate: InvoiceEmailTemplate,
  ): Promise<InvoiceEmailTemplate> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}`,
      method: 'put',
      data: invoiceEmailTemplate,
    })
  }

  patchFinanceInvoiceEmailTemplatesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<InvoiceEmailTemplate> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceInvoiceEmailTemplatesByIdInfo(
    id: number,
    params: CommonParameters<InvoiceEmailTemplateInfo> = {},
  ): Promise<InvoiceEmailTemplateInfo> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}/info`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceEmailTemplatesByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceEmailTemplatesByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceEmailTemplatesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/count`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceEmailTemplatesInfo(
    params: CommonParameters<InvoiceEmailTemplateInfo> = {},
  ): Promise<Array<InvoiceEmailTemplateInfo>> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/info`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceEmailTemplatesInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/info/count`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoices(params: CommonParameters<Invoice> = {}): Promise<Array<Invoice>> {
    return this.request({
      path: `/finance/invoices`,
      method: 'get',
      params,
    })
  }

  postFinanceInvoices(invoice: Invoice): Promise<Invoice> {
    return this.request({
      path: `/finance/invoices`,
      method: 'post',
      data: invoice,
    })
  }

  getFinanceInvoicesById(id: number, params: CommonParameters<Invoice> = {}): Promise<Invoice> {
    return this.request({
      path: `/finance/invoices/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceInvoicesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/invoices/${id}`,
      method: 'delete',
    })
  }

  putFinanceInvoicesById(id: number, invoice: Invoice): Promise<Invoice> {
    return this.request({
      path: `/finance/invoices/${id}`,
      method: 'put',
      data: invoice,
    })
  }

  patchFinanceInvoicesById(id: number, patchOperations: Array<PatchOperation>): Promise<Invoice> {
    return this.request({
      path: `/finance/invoices/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceInvoicesByIdPdf(
    id: number,
    params: CommonParameters<string> = {},
  ): Promise<PDFResponse> {
    return this.request({
      path: `/finance/invoices/${id}/pdf`,
      method: 'get',
      responseType: 'arraybuffer',
      params,
    })
  }

  getFinanceInvoicesByParentIdCommissions(
    parentId: number,
    params: CommonParameters<InvoiceCommission> = {},
  ): Promise<Array<InvoiceCommission>> {
    return this.request({
      path: `/finance/invoices/${parentId}/commissions`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoicesByParentIdCommissionsById(
    id: number,
    parentId: number,
    params: CommonParameters<InvoiceCommission> = {},
  ): Promise<InvoiceCommission> {
    return this.request({
      path: `/finance/invoices/${parentId}/commissions/${id}`,
      method: 'get',
      params,
    })
  }

  patchFinanceInvoicesByParentIdCommissionsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<InvoiceCommission> {
    return this.request({
      path: `/finance/invoices/${parentId}/commissions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postFinanceInvoicesByParentIdCommissionsRecalculate(parentId: number): Promise<any> {
    return this.request({
      path: `/finance/invoices/${parentId}/commissions/recalculate`,
      method: 'post',
    })
  }

  getFinanceInvoicesByParentIdGlEntries(
    parentId: number,
    params: CommonParameters<GLEntry> = {},
  ): Promise<Array<GLEntry>> {
    return this.request({
      path: `/finance/invoices/${parentId}/glEntries/`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoicesByParentIdGlEntriesById(
    parentId: number,
    id: number,
    params: CommonParameters<GLEntry> = {},
  ): Promise<GLEntry> {
    return this.request({
      path: `/finance/invoices/${parentId}/glEntries/${id}`,
      method: 'get',
      params,
    })
  }

  putFinanceInvoicesByParentIdGlEntriesById(
    parentId: number,
    id: number,
    gLEntry: GLEntry,
  ): Promise<GLEntry> {
    return this.request({
      path: `/finance/invoices/${parentId}/glEntries/${id}`,
      method: 'put',
      data: gLEntry,
    })
  }

  patchFinanceInvoicesByParentIdGlEntriesById(
    parentId: number,
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<GLEntry> {
    return this.request({
      path: `/finance/invoices/${parentId}/glEntries/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceInvoicesByParentIdPayments(
    parentId: number,
    params: CommonParameters<InvoicePayment> = {},
  ): Promise<Array<InvoicePayment>> {
    return this.request({
      path: `/finance/invoices/${parentId}/payments`,
      method: 'get',
      params,
    })
  }

  postFinanceInvoicesByParentIdPayments(
    parentId: number,
    payment: InvoicePayment,
  ): Promise<InvoicePayment> {
    return this.request({
      path: `/finance/invoices/${parentId}/payments`,
      method: 'post',
      data: payment,
    })
  }

  getFinanceInvoicesByParentIdPaymentsById(
    id: number,
    parentId: number,
    params: CommonParameters<InvoicePayment> = {},
  ): Promise<InvoicePayment> {
    return this.request({
      path: `/finance/invoices/${parentId}/payments/${id}`,
      method: 'get',
      params,
    })
  }

  patchFinanceInvoicesByParentIdPaymentsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<InvoicePayment> {
    return this.request({
      path: `/finance/invoices/${parentId}/payments/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  putFinanceInvoicesByParentIdPaymentsById(
    id: number,
    parentId: number,
    payment: InvoicePayment,
  ): Promise<InvoicePayment> {
    return this.request({
      path: `/finance/invoices/${parentId}/payments/${id}`,
      method: 'put',
      data: payment,
    })
  }

  deleteFinanceInvoicesByParentIdPaymentsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/invoices/${parentId}/payments/${id}`,
      method: 'delete',
    })
  }

  getFinanceInvoicesByParentIdRoutings(
    parentId: number,
    params: CommonParameters<InvoiceRouting> = {},
  ): Promise<Array<InvoiceRouting>> {
    return this.request({
      path: `/finance/invoices/${parentId}/routings`,
      method: 'get',
      params,
    })
  }

  postFinanceInvoicesByParentIdRoutings(
    parentId: number,
    InvoiceRouting: InvoiceRouting,
  ): Promise<InvoiceRouting> {
    return this.request({
      path: `/finance/invoices/${parentId}/routings`,
      method: 'post',
      data: InvoiceRouting,
    })
  }

  getFinanceInvoicesByParentIdRoutingsById(
    id: number,
    parentId: number,
    params: CommonParameters<InvoiceRouting> = {},
  ): Promise<InvoiceRouting> {
    return this.request({
      path: `/finance/invoices/${parentId}/routings/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceInvoicesByParentIdRoutingsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/invoices/${parentId}/routings/${id}`,
      method: 'delete',
    })
  }

  putFinanceInvoicesByParentIdRoutingsById(
    id: number,
    parentId: number,
    companyTypeAssociation: InvoiceRouting,
  ): Promise<InvoiceRouting> {
    return this.request({
      path: `/finance/invoices/${parentId}/routings/${id}`,
      method: 'put',
      data: companyTypeAssociation,
    })
  }

  patchFinanceInvoicesByParentIdRoutingsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<InvoiceRouting> {
    return this.request({
      path: `/finance/invoices/${parentId}/routings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceInvoicesByParentIdRoutingsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/invoices/${parentId}/routings/count`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoicesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/invoices/count`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceTemplates(
    params: CommonParameters<InvoiceTemplate> = {},
  ): Promise<Array<InvoiceTemplate>> {
    return this.request({
      path: `/finance/invoiceTemplates`,
      method: 'get',
      params,
    })
  }

  postFinanceInvoiceTemplates(invoiceTemplate: InvoiceTemplate): Promise<InvoiceTemplate> {
    return this.request({
      path: `/finance/invoiceTemplates`,
      method: 'post',
      data: invoiceTemplate,
    })
  }

  getFinanceInvoiceTemplatesById(
    id: number,
    params: CommonParameters<InvoiceTemplate> = {},
  ): Promise<InvoiceTemplate> {
    return this.request({
      path: `/finance/invoiceTemplates/${id}`,
      method: 'get',
      params,
    })
  }

  patchFinanceInvoiceTemplatesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<InvoiceTemplate> {
    return this.request({
      path: `/finance/invoiceTemplates/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  putFinanceInvoiceTemplatesById(
    id: number,
    invoiceTemplate: InvoiceTemplate,
  ): Promise<InvoiceTemplate> {
    return this.request({
      path: `/finance/invoiceTemplates/${id}`,
      method: 'put',
      data: invoiceTemplate,
    })
  }

  deleteFinanceInvoiceTemplatesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/invoiceTemplates/${id}`,
      method: 'delete',
    })
  }

  getFinanceInvoiceTemplatesByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/finance/invoiceTemplates/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceTemplatesByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/finance/invoiceTemplates/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceTemplatesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/invoiceTemplates/count`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceTemplateSetups(
    params: CommonParameters<InvoiceTemplateSetup> = {},
  ): Promise<Array<InvoiceTemplateSetup>> {
    return this.request({
      path: `/finance/invoiceTemplateSetups`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceTemplateSetupsById(
    id: number,
    params: CommonParameters<InvoiceTemplateSetup> = {},
  ): Promise<InvoiceTemplateSetup> {
    return this.request({
      path: `/finance/invoiceTemplateSetups/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceTemplateSetupsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/invoiceTemplateSetups/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodes(params: CommonParameters<TaxCode> = {}): Promise<Array<TaxCode>> {
    return this.request({
      path: `/finance/taxCodes`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodes(taxCode: TaxCode): Promise<TaxCode> {
    return this.request({
      path: `/finance/taxCodes`,
      method: 'post',
      data: taxCode,
    })
  }

  getFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevels(
    parentId: number,
    grandparentId: number,
    params: CommonParameters<TaxableExpenseTypeLevel> = {},
  ): Promise<Array<TaxableExpenseTypeLevel>> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/${parentId}/taxableExpenseTypeLevels`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevels(
    parentId: number,
    grandparentId: number,
    taxableExpenseTypeLevel: TaxableExpenseTypeLevel,
  ): Promise<TaxableExpenseTypeLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/${parentId}/taxableExpenseTypeLevels`,
      method: 'post',
      data: taxableExpenseTypeLevel,
    })
  }

  getFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters<TaxableExpenseTypeLevel> = {},
  ): Promise<TaxableExpenseTypeLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/${parentId}/taxableExpenseTypeLevels/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/${parentId}/taxableExpenseTypeLevels/${id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    taxableExpenseTypeLevel: TaxableExpenseTypeLevel,
  ): Promise<TaxableExpenseTypeLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/${parentId}/taxableExpenseTypeLevels/${id}`,
      method: 'put',
      data: taxableExpenseTypeLevel,
    })
  }

  patchFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TaxableExpenseTypeLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/${parentId}/taxableExpenseTypeLevels/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevelsCount(
    parentId: number,
    grandparentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/${parentId}/taxableExpenseTypeLevels/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevels(
    parentId: number,
    grandparentId: number,
    params: CommonParameters<TaxableProductTypeLevel> = {},
  ): Promise<Array<TaxableProductTypeLevel>> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/${parentId}/taxableProductTypeLevels`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevels(
    parentId: number,
    grandparentId: number,
    taxableProductTypeLevel: TaxableProductTypeLevel,
  ): Promise<TaxableProductTypeLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/${parentId}/taxableProductTypeLevels`,
      method: 'post',
      data: taxableProductTypeLevel,
    })
  }

  getFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters<TaxableProductTypeLevel> = {},
  ): Promise<TaxableProductTypeLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/${parentId}/taxableProductTypeLevels/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/${parentId}/taxableProductTypeLevels/${id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    taxableProductTypeLevel: TaxableProductTypeLevel,
  ): Promise<TaxableProductTypeLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/${parentId}/taxableProductTypeLevels/${id}`,
      method: 'put',
      data: taxableProductTypeLevel,
    })
  }

  patchFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TaxableProductTypeLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/${parentId}/taxableProductTypeLevels/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevelsCount(
    parentId: number,
    grandparentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/${parentId}/taxableProductTypeLevels/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevels(
    parentId: number,
    grandparentId: number,
    params: CommonParameters<TaxableXRefLevel> = {},
  ): Promise<Array<TaxableXRefLevel>> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/${parentId}/taxableXRefLevels`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevels(
    parentId: number,
    grandparentId: number,
    taxableXRefLevel: TaxableXRefLevel,
  ): Promise<TaxableXRefLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/${parentId}/taxableXRefLevels`,
      method: 'post',
      data: taxableXRefLevel,
    })
  }

  getFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters<TaxableXRefLevel> = {},
  ): Promise<TaxableXRefLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/${parentId}/taxableXRefLevels/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/${parentId}/taxableXRefLevels/${id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    taxableXRefLevel: TaxableXRefLevel,
  ): Promise<TaxableXRefLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/${parentId}/taxableXRefLevels/${id}`,
      method: 'put',
      data: taxableXRefLevel,
    })
  }

  patchFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TaxableXRefLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/${parentId}/taxableXRefLevels/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevelsCount(
    parentId: number,
    grandparentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/${parentId}/taxableXRefLevels/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevels(
    parentId: number,
    grandparentId: number,
    params: CommonParameters<TaxableWorkRoleLevel> = {},
  ): Promise<Array<TaxableWorkRoleLevel>> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/${parentId}/taxableWorkRoleLevels`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevels(
    parentId: number,
    grandparentId: number,
    taxableWorkRoleLevel: TaxableWorkRoleLevel,
  ): Promise<TaxableWorkRoleLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/${parentId}/taxableWorkRoleLevels`,
      method: 'post',
      data: taxableWorkRoleLevel,
    })
  }

  getFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters<TaxableWorkRoleLevel> = {},
  ): Promise<TaxableWorkRoleLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/${parentId}/taxableWorkRoleLevels/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/${parentId}/taxableWorkRoleLevels/${id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    taxableWorkRoleLevel: TaxableWorkRoleLevel,
  ): Promise<TaxableWorkRoleLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/${parentId}/taxableWorkRoleLevels/${id}`,
      method: 'put',
      data: taxableWorkRoleLevel,
    })
  }

  patchFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TaxableWorkRoleLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/${parentId}/taxableWorkRoleLevels/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevelsCount(
    parentId: number,
    grandparentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/${parentId}/taxableWorkRoleLevels/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesById(id: number, params: CommonParameters<TaxCode> = {}): Promise<TaxCode> {
    return this.request({
      path: `/finance/taxCodes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesById(id: number, taxCode: TaxCode): Promise<TaxCode> {
    return this.request({
      path: `/finance/taxCodes/${id}`,
      method: 'put',
      data: taxCode,
    })
  }

  patchFinanceTaxCodesById(id: number, patchOperations: Array<PatchOperation>): Promise<TaxCode> {
    return this.request({
      path: `/finance/taxCodes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postFinanceTaxCodesByIdCopy(id: number): Promise<TaxCode> {
    return this.request({
      path: `/finance/taxCodes/${id}/copy`,
      method: 'post',
    })
  }

  getFinanceTaxCodesByIdInfo(
    id: number,
    params: CommonParameters<TaxCodeInfo> = {},
  ): Promise<TaxCodeInfo> {
    return this.request({
      path: `/finance/taxCodes/${id}/info`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/finance/taxCodes/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/finance/taxCodes/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByParentIdExpenseTypeExemptions(
    parentId: number,
    params: CommonParameters<ExpenseTypeExemption> = {},
  ): Promise<Array<ExpenseTypeExemption>> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodesByParentIdExpenseTypeExemptions(
    parentId: number,
    expenseTypeExemption: ExpenseTypeExemption,
  ): Promise<ExpenseTypeExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions`,
      method: 'post',
      data: expenseTypeExemption,
    })
  }

  getFinanceTaxCodesByParentIdExpenseTypeExemptionsById(
    id: number,
    parentId: number,
    params: CommonParameters<ExpenseTypeExemption> = {},
  ): Promise<ExpenseTypeExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesByParentIdExpenseTypeExemptionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions/${id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesByParentIdExpenseTypeExemptionsById(
    id: number,
    parentId: number,
    expenseTypeExemption: ExpenseTypeExemption,
  ): Promise<ExpenseTypeExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions/${id}`,
      method: 'put',
      data: expenseTypeExemption,
    })
  }

  patchFinanceTaxCodesByParentIdExpenseTypeExemptionsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ExpenseTypeExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxCodesByParentIdExpenseTypeExemptionsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByParentIdProductTypeExemptions(
    parentId: number,
    params: CommonParameters<ProductTypeExemption> = {},
  ): Promise<Array<ProductTypeExemption>> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodesByParentIdProductTypeExemptions(
    parentId: number,
    productTypeExemption: ProductTypeExemption,
  ): Promise<ProductTypeExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions`,
      method: 'post',
      data: productTypeExemption,
    })
  }

  getFinanceTaxCodesByParentIdProductTypeExemptionsById(
    id: number,
    parentId: number,
    params: CommonParameters<ProductTypeExemption> = {},
  ): Promise<ProductTypeExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesByParentIdProductTypeExemptionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions/${id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesByParentIdProductTypeExemptionsById(
    id: number,
    parentId: number,
    productTypeExemption: ProductTypeExemption,
  ): Promise<ProductTypeExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions/${id}`,
      method: 'put',
      data: productTypeExemption,
    })
  }

  patchFinanceTaxCodesByParentIdProductTypeExemptionsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProductTypeExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxCodesByParentIdProductTypeExemptionsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByParentIdTaxCodeLevels(
    parentId: number,
    params: CommonParameters<TaxCodeLevel> = {},
  ): Promise<Array<TaxCodeLevel>> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodesByParentIdTaxCodeLevels(
    parentId: number,
    taxCodeLevel: TaxCodeLevel,
  ): Promise<TaxCodeLevel> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels`,
      method: 'post',
      data: taxCodeLevel,
    })
  }

  getFinanceTaxCodesByParentIdTaxCodeLevelsById(
    id: number,
    parentId: number,
    params: CommonParameters<TaxCodeLevel> = {},
  ): Promise<TaxCodeLevel> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesByParentIdTaxCodeLevelsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels/${id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesByParentIdTaxCodeLevelsById(
    id: number,
    parentId: number,
    taxCodeLevel: TaxCodeLevel,
  ): Promise<TaxCodeLevel> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels/${id}`,
      method: 'put',
      data: taxCodeLevel,
    })
  }

  patchFinanceTaxCodesByParentIdTaxCodeLevelsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TaxCodeLevel> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxCodesByParentIdTaxCodeLevelsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByParentIdTaxCodeXRefs(
    parentId: number,
    params: CommonParameters<TaxCodeXRef> = {},
  ): Promise<Array<TaxCodeXRef>> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodesByParentIdTaxCodeXRefs(
    parentId: number,
    taxCodeXRef: TaxCodeXRef,
  ): Promise<TaxCodeXRef> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs`,
      method: 'post',
      data: taxCodeXRef,
    })
  }

  getFinanceTaxCodesByParentIdTaxCodeXRefsById(
    id: number,
    parentId: number,
    params: CommonParameters<TaxCodeXRef> = {},
  ): Promise<TaxCodeXRef> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesByParentIdTaxCodeXRefsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs/${id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesByParentIdTaxCodeXRefsById(
    id: number,
    parentId: number,
    taxCodeXRef: TaxCodeXRef,
  ): Promise<TaxCodeXRef> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs/${id}`,
      method: 'put',
      data: taxCodeXRef,
    })
  }

  patchFinanceTaxCodesByParentIdTaxCodeXRefsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TaxCodeXRef> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxCodesByParentIdTaxCodeXRefsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByParentIdWorkRoleExemptions(
    parentId: number,
    params: CommonParameters<WorkRoleExemption> = {},
  ): Promise<Array<WorkRoleExemption>> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodesByParentIdWorkRoleExemptions(
    parentId: number,
    workRoleExemption: WorkRoleExemption,
  ): Promise<WorkRoleExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions`,
      method: 'post',
      data: workRoleExemption,
    })
  }

  getFinanceTaxCodesByParentIdWorkRoleExemptionsById(
    id: number,
    parentId: number,
    params: CommonParameters<WorkRoleExemption> = {},
  ): Promise<WorkRoleExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesByParentIdWorkRoleExemptionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions/${id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesByParentIdWorkRoleExemptionsById(
    id: number,
    parentId: number,
    workRoleExemption: WorkRoleExemption,
  ): Promise<WorkRoleExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions/${id}`,
      method: 'put',
      data: workRoleExemption,
    })
  }

  patchFinanceTaxCodesByParentIdWorkRoleExemptionsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<WorkRoleExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxCodesByParentIdWorkRoleExemptionsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesInfo(params: CommonParameters<TaxCodeInfo> = {}): Promise<Array<TaxCodeInfo>> {
    return this.request({
      path: `/finance/taxCodes/info`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/info/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxIntegrations(
    params: CommonParameters<TaxIntegration> = {},
  ): Promise<Array<TaxIntegration>> {
    return this.request({
      path: `/finance/taxIntegrations`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxIntegrationsById(
    id: number,
    params: CommonParameters<TaxIntegration> = {},
  ): Promise<TaxIntegration> {
    return this.request({
      path: `/finance/taxIntegrations/${id}`,
      method: 'get',
      params,
    })
  }

  putFinanceTaxIntegrationsById(
    id: number,
    taxIntegration: TaxIntegration,
  ): Promise<TaxIntegration> {
    return this.request({
      path: `/finance/taxIntegrations/${id}`,
      method: 'put',
      data: taxIntegration,
    })
  }

  patchFinanceTaxIntegrationsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TaxIntegration> {
    return this.request({
      path: `/finance/taxIntegrations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxIntegrationsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/finance/taxIntegrations/count`,
      method: 'get',
      params,
    })
  }
}
