/* This file was auto-generated, do not manually edit. */
import { ManageBaseAPI } from '../BaseAPI'
import { components } from '../ManageTypes'
import { CommonParameters } from '../ManageAPI'
import { NoContentResponse } from '../types'
type schemas = components['schemas']
/** {@link ActivityStopwatch} */
export type ActivityStopwatch = schemas['ActivityStopwatch']
/** {@link ChargeCode} */
export type ChargeCode = schemas['ChargeCode']
/** {@link ChargeCodeExpenseType} */
export type ChargeCodeExpenseType = schemas['ChargeCodeExpenseType']
/** {@link ChargeCodeInfo} */
export type ChargeCodeInfo = schemas['ChargeCodeInfo']
/** {@link Count} */
export type Count = schemas['Count']
/** {@link PatchOperation} */
export type PatchOperation = schemas['PatchOperation']
/** {@link ScheduleStopwatch} */
export type ScheduleStopwatch = schemas['ScheduleStopwatch']
/** {@link SuccessResponse} */
export type SuccessResponse = schemas['SuccessResponse']
/** {@link TicketStopwatch} */
export type TicketStopwatch = schemas['TicketStopwatch']
/** {@link TimeAccrual} */
export type TimeAccrual = schemas['TimeAccrual']
/** {@link TimeAccrualDetail} */
export type TimeAccrualDetail = schemas['TimeAccrualDetail']
/** {@link TimeEntry} */
export type TimeEntry = schemas['TimeEntry']
/** {@link TimeEntryAudit} */
export type TimeEntryAudit = schemas['TimeEntryAudit']
/** {@link TimeEntryChangeLog} */
export type TimeEntryChangeLog = schemas['TimeEntryChangeLog']
/** {@link TimeEntryTierReject} */
export type TimeEntryTierReject = schemas['TimeEntryTierReject']
/** {@link TimeEntryTierUpdate} */
export type TimeEntryTierUpdate = schemas['TimeEntryTierUpdate']
/** {@link TimePeriod} */
export type TimePeriod = schemas['TimePeriod']
/** {@link TimePeriodSetup} */
export type TimePeriodSetup = schemas['TimePeriodSetup']
/** {@link TimePeriodSetupDefaults} */
export type TimePeriodSetupDefaults = schemas['TimePeriodSetupDefaults']
/** {@link TimeSheet} */
export type TimeSheet = schemas['TimeSheet']
/** {@link TimeSheetAudit} */
export type TimeSheetAudit = schemas['TimeSheetAudit']
/** {@link TimeSheetTierUpdate} */
export type TimeSheetTierUpdate = schemas['TimeSheetTierUpdate']
/** {@link Usage} */
export type Usage = schemas['Usage']
/** {@link WorkRole} */
export type WorkRole = schemas['WorkRole']
/** {@link WorkRoleInfo} */
export type WorkRoleInfo = schemas['WorkRoleInfo']
/** {@link WorkRoleLocation} */
export type WorkRoleLocation = schemas['WorkRoleLocation']
/** {@link WorkType} */
export type WorkType = schemas['WorkType']
/** {@link WorkTypeInfo} */
export type WorkTypeInfo = schemas['WorkTypeInfo']

/**
 * Time module
 * @public
 */
export class TimeAPI extends ManageBaseAPI {
  getTimeAccruals(params: CommonParameters<TimeAccrual> = {}): Promise<Array<TimeAccrual>> {
    return this.request({
      path: `/time/accruals`,
      method: 'get',
      params,
    })
  }

  postTimeAccruals(timeAccrual: TimeAccrual): Promise<TimeAccrual> {
    return this.request({
      path: `/time/accruals`,
      method: 'post',
      data: timeAccrual,
    })
  }

  getTimeAccrualsById(
    id: number,
    params: CommonParameters<TimeAccrual> = {},
  ): Promise<TimeAccrual> {
    return this.request({
      path: `/time/accruals/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeAccrualsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/accruals/${id}`,
      method: 'delete',
    })
  }

  putTimeAccrualsById(id: number, timeAccrual: TimeAccrual): Promise<TimeAccrual> {
    return this.request({
      path: `/time/accruals/${id}`,
      method: 'put',
      data: timeAccrual,
    })
  }

  patchTimeAccrualsById(id: number, patchOperations: Array<PatchOperation>): Promise<TimeAccrual> {
    return this.request({
      path: `/time/accruals/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeAccrualsByParentIdDetails(
    parentId: number,
    params: CommonParameters<TimeAccrualDetail> = {},
  ): Promise<Array<TimeAccrualDetail>> {
    return this.request({
      path: `/time/accruals/${parentId}/details`,
      method: 'get',
      params,
    })
  }

  postTimeAccrualsByParentIdDetails(
    parentId: number,
    timeAccrualDetail: TimeAccrualDetail,
  ): Promise<TimeAccrualDetail> {
    return this.request({
      path: `/time/accruals/${parentId}/details/`,
      method: 'post',
      data: timeAccrualDetail,
    })
  }

  getTimeAccrualsByParentIdDetailsById(
    id: number,
    parentId: number,
    params: CommonParameters<TimeAccrualDetail> = {},
  ): Promise<TimeAccrualDetail> {
    return this.request({
      path: `/time/accruals/${parentId}/details/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeAccrualsByParentIdDetailsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/time/accruals/${parentId}/details/${id}`,
      method: 'delete',
    })
  }

  putTimeAccrualsByParentIdDetailsById(
    id: number,
    parentId: number,
    timeAccrualDetail: TimeAccrualDetail,
  ): Promise<TimeAccrualDetail> {
    return this.request({
      path: `/time/accruals/${parentId}/details/${id}`,
      method: 'put',
      data: timeAccrualDetail,
    })
  }

  patchTimeAccrualsByParentIdDetailsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TimeAccrualDetail> {
    return this.request({
      path: `/time/accruals/${parentId}/details/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeAccrualsByParentIdDetailsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/time/accruals/${parentId}/details/count`,
      method: 'get',
      params,
    })
  }

  getTimeAccrualsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/time/accruals/count`,
      method: 'get',
      params,
    })
  }

  getTimeActivitystopwatches(
    params: CommonParameters<ActivityStopwatch> = {},
  ): Promise<Array<ActivityStopwatch>> {
    return this.request({
      path: `/time/activitystopwatches`,
      method: 'get',
      params,
    })
  }

  postTimeActivitystopwatches(activityStopwatch: ActivityStopwatch): Promise<ActivityStopwatch> {
    return this.request({
      path: `/time/activitystopwatches`,
      method: 'post',
      data: activityStopwatch,
    })
  }

  getTimeActivitystopwatchesById(
    id: number,
    params: CommonParameters<ActivityStopwatch> = {},
  ): Promise<ActivityStopwatch> {
    return this.request({
      path: `/time/activitystopwatches/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeActivitystopwatchesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/activitystopwatches/${id}`,
      method: 'delete',
    })
  }

  putTimeActivitystopwatchesById(
    id: number,
    activityStopwatch: ActivityStopwatch,
  ): Promise<ActivityStopwatch> {
    return this.request({
      path: `/time/activitystopwatches/${id}`,
      method: 'put',
      data: activityStopwatch,
    })
  }

  patchTimeActivitystopwatchesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ActivityStopwatch> {
    return this.request({
      path: `/time/activitystopwatches/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeActivitystopwatchesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/time/activitystopwatches/count`,
      method: 'get',
      params,
    })
  }

  getTimeChangelogs(
    params: CommonParameters<TimeEntryChangeLog> = {},
  ): Promise<Array<TimeEntryChangeLog>> {
    return this.request({
      path: `/time/changelogs`,
      method: 'get',
      params,
    })
  }

  deleteTimeChangelogs(): Promise<NoContentResponse> {
    return this.request({
      path: `/time/changelogs`,
      method: 'delete',
    })
  }

  getTimeChargeCodes(params: CommonParameters<ChargeCode> = {}): Promise<Array<ChargeCode>> {
    return this.request({
      path: `/time/chargeCodes`,
      method: 'get',
      params,
    })
  }

  postTimeChargeCodes(chargeCode: ChargeCode): Promise<ChargeCode> {
    return this.request({
      path: `/time/chargeCodes`,
      method: 'post',
      data: chargeCode,
    })
  }

  getTimeChargeCodesById(
    id: number,
    params: CommonParameters<ChargeCode> = {},
  ): Promise<ChargeCode> {
    return this.request({
      path: `/time/chargeCodes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeChargeCodesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/chargeCodes/${id}`,
      method: 'delete',
    })
  }

  putTimeChargeCodesById(id: number, chargeCode: ChargeCode): Promise<ChargeCode> {
    return this.request({
      path: `/time/chargeCodes/${id}`,
      method: 'put',
      data: chargeCode,
    })
  }

  patchTimeChargeCodesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ChargeCode> {
    return this.request({
      path: `/time/chargeCodes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeChargeCodesByIdInfo(
    id: number,
    params: CommonParameters<ChargeCodeInfo> = {},
  ): Promise<ChargeCodeInfo> {
    return this.request({
      path: `/time/chargeCodes/${id}/info`,
      method: 'get',
      params,
    })
  }

  getTimeChargeCodesByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/time/chargeCodes/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getTimeChargeCodesByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/time/chargeCodes/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getTimeChargeCodesByParentIdExpenseTypes(
    parentId: number,
    params: CommonParameters<ChargeCodeExpenseType> = {},
  ): Promise<Array<ChargeCodeExpenseType>> {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes`,
      method: 'get',
      params,
    })
  }

  postTimeChargeCodesByParentIdExpenseTypes(
    parentId: number,
    chargeCodeExpenseType: ChargeCodeExpenseType,
  ): Promise<ChargeCodeExpenseType> {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes`,
      method: 'post',
      data: chargeCodeExpenseType,
    })
  }

  getTimeChargeCodesByParentIdExpenseTypesById(
    id: number,
    parentId: number,
    params: CommonParameters<ChargeCodeExpenseType> = {},
  ): Promise<ChargeCodeExpenseType> {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeChargeCodesByParentIdExpenseTypesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes/${id}`,
      method: 'delete',
    })
  }

  putTimeChargeCodesByParentIdExpenseTypesById(
    id: number,
    parentId: number,
    chargeCodeExpenseType: ChargeCodeExpenseType,
  ): Promise<ChargeCodeExpenseType> {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes/${id}`,
      method: 'put',
      data: chargeCodeExpenseType,
    })
  }

  patchTimeChargeCodesByParentIdExpenseTypesById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ChargeCodeExpenseType> {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeChargeCodesByParentIdExpenseTypesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes/count`,
      method: 'get',
      params,
    })
  }

  getTimeChargeCodesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/time/chargeCodes/count`,
      method: 'get',
      params,
    })
  }

  getTimeChargeCodesInfo(
    params: CommonParameters<ChargeCodeInfo> = {},
  ): Promise<Array<ChargeCodeInfo>> {
    return this.request({
      path: `/time/chargeCodes/info`,
      method: 'get',
      params,
    })
  }

  getTimeChargeCodesInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/time/chargeCodes/info/count`,
      method: 'get',
      params,
    })
  }

  getTimeEntries(params: CommonParameters<TimeEntry> = {}): Promise<Array<TimeEntry>> {
    return this.request({
      path: `/time/entries`,
      method: 'get',
      params,
    })
  }

  postTimeEntries(timeEntry: TimeEntry): Promise<TimeEntry> {
    return this.request({
      path: `/time/entries`,
      method: 'post',
      data: timeEntry,
    })
  }

  getTimeEntriesById(id: number, params: CommonParameters<TimeEntry> = {}): Promise<TimeEntry> {
    return this.request({
      path: `/time/entries/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeEntriesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/entries/${id}`,
      method: 'delete',
    })
  }

  putTimeEntriesById(id: number, timeEntry: TimeEntry): Promise<TimeEntry> {
    return this.request({
      path: `/time/entries/${id}`,
      method: 'put',
      data: timeEntry,
    })
  }

  patchTimeEntriesById(id: number, patchOperations: Array<PatchOperation>): Promise<TimeEntry> {
    return this.request({
      path: `/time/entries/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postTimeEntriesByIdCancelReject(
    id: number,
    timeEntryTierUpdate: TimeEntryTierUpdate,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/time/entries/${id}/cancelReject`,
      method: 'post',
      data: timeEntryTierUpdate,
    })
  }

  postTimeEntriesByIdDetach(id: number): Promise<TimeEntry> {
    return this.request({
      path: `/time/entries/${id}/detach`,
      method: 'post',
    })
  }

  postTimeEntriesByIdReject(
    id: number,
    timeEntryTierUpdate: TimeEntryTierReject,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/time/entries/${id}/reject`,
      method: 'post',
      data: timeEntryTierUpdate,
    })
  }

  getTimeEntriesByParentIdAudits(
    parentId: number,
    params: CommonParameters<TimeEntryAudit> = {},
  ): Promise<Array<TimeEntryAudit>> {
    return this.request({
      path: `/time/entries/${parentId}/audits`,
      method: 'get',
      params,
    })
  }

  getTimeEntriesByParentIdAuditsById(
    id: number,
    parentId: number,
    params: CommonParameters<TimeEntryAudit> = {},
  ): Promise<TimeEntryAudit> {
    return this.request({
      path: `/time/entries/${parentId}/audits/${id}`,
      method: 'get',
      params,
    })
  }

  getTimeEntriesByParentIdAuditsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/time/entries/${parentId}/audits/count`,
      method: 'get',
      params,
    })
  }

  getTimeEntriesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/time/entries/count`,
      method: 'get',
      params,
    })
  }

  postTimeEntriesDefaults(timeEntry: TimeEntry): Promise<TimeEntry> {
    return this.request({
      path: `/time/entries/defaults`,
      method: 'post',
      data: timeEntry,
    })
  }

  getTimeInfoChargeCodeExpenseTypes(
    params: CommonParameters<ChargeCodeExpenseType> = {},
  ): Promise<Array<ChargeCodeExpenseType>> {
    return this.request({
      path: `/time/info/chargeCodeExpenseTypes`,
      method: 'get',
      params,
    })
  }

  getTimeInfoChargeCodeExpenseTypesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/time/info/chargeCodeExpenseTypes/count`,
      method: 'get',
      params,
    })
  }

  getTimeSchedulestopwatches(
    params: CommonParameters<ScheduleStopwatch> = {},
  ): Promise<Array<ScheduleStopwatch>> {
    return this.request({
      path: `/time/schedulestopwatches`,
      method: 'get',
      params,
    })
  }

  postTimeSchedulestopwatches(scheduleStopwatch: ScheduleStopwatch): Promise<ScheduleStopwatch> {
    return this.request({
      path: `/time/schedulestopwatches`,
      method: 'post',
      data: scheduleStopwatch,
    })
  }

  getTimeSchedulestopwatchesById(
    id: number,
    params: CommonParameters<ScheduleStopwatch> = {},
  ): Promise<ScheduleStopwatch> {
    return this.request({
      path: `/time/schedulestopwatches/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeSchedulestopwatchesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/schedulestopwatches/${id}`,
      method: 'delete',
    })
  }

  putTimeSchedulestopwatchesById(
    id: number,
    scheduleStopwatch: ScheduleStopwatch,
  ): Promise<ScheduleStopwatch> {
    return this.request({
      path: `/time/schedulestopwatches/${id}`,
      method: 'put',
      data: scheduleStopwatch,
    })
  }

  patchTimeSchedulestopwatchesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ScheduleStopwatch> {
    return this.request({
      path: `/time/schedulestopwatches/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeSchedulestopwatchesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/time/schedulestopwatches/count`,
      method: 'get',
      params,
    })
  }

  getTimeSheets(params: CommonParameters<TimeSheet> = {}): Promise<Array<TimeSheet>> {
    return this.request({
      path: `/time/sheets`,
      method: 'get',
      params,
    })
  }

  getTimeSheetsById(id: number, params: CommonParameters<TimeSheet> = {}): Promise<TimeSheet> {
    return this.request({
      path: `/time/sheets/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeSheetsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/sheets/${id}`,
      method: 'delete',
    })
  }

  postTimeSheetsByIdApprove(id: number, sheetId: TimeSheetTierUpdate): Promise<SuccessResponse> {
    return this.request({
      path: `/time/sheets/${id}/approve`,
      method: 'post',
      data: sheetId,
    })
  }

  postTimeSheetsByIdReject(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/time/sheets/${id}/reject`,
      method: 'post',
    })
  }

  postTimeSheetsByIdReverse(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/time/sheets/${id}/reverse`,
      method: 'post',
    })
  }

  postTimeSheetsByIdSubmit(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/time/sheets/${id}/submit`,
      method: 'post',
    })
  }

  getTimeSheetsByParentIdAudits(
    parentId: number,
    params: CommonParameters<TimeSheetAudit> = {},
  ): Promise<Array<TimeSheetAudit>> {
    return this.request({
      path: `/time/sheets/${parentId}/audits`,
      method: 'get',
      params,
    })
  }

  getTimeSheetsByParentIdAuditsById(
    id: number,
    parentId: number,
    params: CommonParameters<TimeSheetAudit> = {},
  ): Promise<TimeSheetAudit> {
    return this.request({
      path: `/time/sheets/${parentId}/audits/${id}`,
      method: 'get',
      params,
    })
  }

  getTimeSheetsByParentIdAuditsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/time/sheets/${parentId}/audits/count`,
      method: 'get',
      params,
    })
  }

  getTimeSheetsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/time/sheets/count`,
      method: 'get',
      params,
    })
  }

  getTimeTicketstopwatches(
    params: CommonParameters<TicketStopwatch> = {},
  ): Promise<Array<TicketStopwatch>> {
    return this.request({
      path: `/time/ticketstopwatches`,
      method: 'get',
      params,
    })
  }

  postTimeTicketstopwatches(ticketStopwatch: TicketStopwatch): Promise<TicketStopwatch> {
    return this.request({
      path: `/time/ticketstopwatches`,
      method: 'post',
      data: ticketStopwatch,
    })
  }

  getTimeTicketstopwatchesById(
    id: number,
    params: CommonParameters<TicketStopwatch> = {},
  ): Promise<TicketStopwatch> {
    return this.request({
      path: `/time/ticketstopwatches/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeTicketstopwatchesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/ticketstopwatches/${id}`,
      method: 'delete',
    })
  }

  putTimeTicketstopwatchesById(
    id: number,
    ticketStopwatch: TicketStopwatch,
  ): Promise<TicketStopwatch> {
    return this.request({
      path: `/time/ticketstopwatches/${id}`,
      method: 'put',
      data: ticketStopwatch,
    })
  }

  patchTimeTicketstopwatchesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TicketStopwatch> {
    return this.request({
      path: `/time/ticketstopwatches/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeTicketstopwatchesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/time/ticketstopwatches/count`,
      method: 'get',
      params,
    })
  }

  getTimeTimePeriodSetups(
    params: CommonParameters<TimePeriodSetup> = {},
  ): Promise<Array<TimePeriodSetup>> {
    return this.request({
      path: `/time/timePeriodSetups`,
      method: 'get',
      params,
    })
  }

  postTimeTimePeriodSetups(timePeriodSetup: TimePeriodSetup): Promise<TimePeriodSetup> {
    return this.request({
      path: `/time/timePeriodSetups`,
      method: 'post',
      data: timePeriodSetup,
    })
  }

  getTimeTimePeriodSetupsById(
    id: number,
    params: CommonParameters<TimePeriodSetup> = {},
  ): Promise<TimePeriodSetup> {
    return this.request({
      path: `/time/timePeriodSetups/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeTimePeriodSetupsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/timePeriodSetups/${id}`,
      method: 'delete',
    })
  }

  putTimeTimePeriodSetupsById(
    id: number,
    timePeriodSetup: TimePeriodSetup,
  ): Promise<TimePeriodSetup> {
    return this.request({
      path: `/time/timePeriodSetups/${id}`,
      method: 'put',
      data: timePeriodSetup,
    })
  }

  patchTimeTimePeriodSetupsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TimePeriodSetup> {
    return this.request({
      path: `/time/timePeriodSetups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeTimePeriodSetupsByParentIdPeriods(
    parentId: number,
    params: CommonParameters<TimePeriod> = {},
  ): Promise<Array<TimePeriod>> {
    return this.request({
      path: `/time/timePeriodSetups/${parentId}/periods`,
      method: 'get',
      params,
    })
  }

  getTimeTimePeriodSetupsByParentIdPeriodsById(
    id: number,
    parentId: number,
    params: CommonParameters<TimePeriod> = {},
  ): Promise<TimePeriod> {
    return this.request({
      path: `/time/timePeriodSetups/${parentId}/periods/${id}`,
      method: 'get',
      params,
    })
  }

  getTimeTimePeriodSetupsByParentIdPeriodsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/time/timePeriodSetups/${parentId}/periods/count`,
      method: 'get',
      params,
    })
  }

  getTimeTimePeriodSetupsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/time/timePeriodSetups/count`,
      method: 'get',
      params,
    })
  }

  getTimeTimePeriodSetupsDefault(
    params: CommonParameters<TimePeriodSetupDefaults> = {},
  ): Promise<TimePeriodSetupDefaults> {
    return this.request({
      path: `/time/timePeriodSetups/default`,
      method: 'get',
      params,
    })
  }

  getTimeWorkRoles(params: CommonParameters<WorkRole> = {}): Promise<Array<WorkRole>> {
    return this.request({
      path: `/time/workRoles`,
      method: 'get',
      params,
    })
  }

  postTimeWorkRoles(workRole: WorkRole): Promise<WorkRole> {
    return this.request({
      path: `/time/workRoles`,
      method: 'post',
      data: workRole,
    })
  }

  getTimeWorkRolesById(id: number, params: CommonParameters<WorkRole> = {}): Promise<WorkRole> {
    return this.request({
      path: `/time/workRoles/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeWorkRolesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/workRoles/${id}`,
      method: 'delete',
    })
  }

  putTimeWorkRolesById(id: number, workRole: WorkRole): Promise<WorkRole> {
    return this.request({
      path: `/time/workRoles/${id}`,
      method: 'put',
      data: workRole,
    })
  }

  patchTimeWorkRolesById(id: number, patchOperations: Array<PatchOperation>): Promise<WorkRole> {
    return this.request({
      path: `/time/workRoles/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeWorkRolesByIdInfo(
    id: number,
    params: CommonParameters<WorkRoleInfo> = {},
  ): Promise<WorkRoleInfo> {
    return this.request({
      path: `/time/workRoles/${id}/info`,
      method: 'get',
      params,
    })
  }

  getTimeWorkRolesByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/time/workRoles/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getTimeWorkRolesByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/time/workRoles/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getTimeWorkRolesByParentIdLocations(
    parentId: number,
    params: CommonParameters<WorkRoleLocation> = {},
  ): Promise<Array<WorkRoleLocation>> {
    return this.request({
      path: `/time/workRoles/${parentId}/locations`,
      method: 'get',
      params,
    })
  }

  postTimeWorkRolesByParentIdLocations(
    parentId: number,
    workRoleLocation: WorkRoleLocation,
  ): Promise<WorkRoleLocation> {
    return this.request({
      path: `/time/workRoles/${parentId}/locations`,
      method: 'post',
      data: workRoleLocation,
    })
  }

  getTimeWorkRolesByParentIdLocationsById(
    id: number,
    parentId: number,
    params: CommonParameters<WorkRoleLocation> = {},
  ): Promise<WorkRoleLocation> {
    return this.request({
      path: `/time/workRoles/${parentId}/locations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeWorkRolesByParentIdLocationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/time/workRoles/${parentId}/locations/${id}`,
      method: 'delete',
    })
  }

  putTimeWorkRolesByParentIdLocationsById(
    id: number,
    parentId: number,
    workRoleLocation: WorkRoleLocation,
  ): Promise<WorkRoleLocation> {
    return this.request({
      path: `/time/workRoles/${parentId}/locations/${id}`,
      method: 'put',
      data: workRoleLocation,
    })
  }

  patchTimeWorkRolesByParentIdLocationsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<WorkRoleLocation> {
    return this.request({
      path: `/time/workRoles/${parentId}/locations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeWorkRolesByParentIdLocationsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/time/workRoles/${parentId}/locations/count`,
      method: 'get',
      params,
    })
  }

  getTimeWorkRolesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/time/workRoles/count`,
      method: 'get',
      params,
    })
  }

  getTimeWorkRolesInfo(params: CommonParameters<WorkRoleInfo> = {}): Promise<Array<WorkRoleInfo>> {
    return this.request({
      path: `/time/workRoles/info`,
      method: 'get',
      params,
    })
  }

  getTimeWorkRolesInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/time/workRoles/info/count`,
      method: 'get',
      params,
    })
  }

  getTimeWorkTypes(params: CommonParameters<WorkType> = {}): Promise<Array<WorkType>> {
    return this.request({
      path: `/time/workTypes`,
      method: 'get',
      params,
    })
  }

  postTimeWorkTypes(workType: WorkType): Promise<WorkType> {
    return this.request({
      path: `/time/workTypes`,
      method: 'post',
      data: workType,
    })
  }

  getTimeWorkTypesById(id: number, params: CommonParameters<WorkType> = {}): Promise<WorkType> {
    return this.request({
      path: `/time/workTypes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeWorkTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/workTypes/${id}`,
      method: 'delete',
    })
  }

  putTimeWorkTypesById(id: number, workType: WorkType): Promise<WorkType> {
    return this.request({
      path: `/time/workTypes/${id}`,
      method: 'put',
      data: workType,
    })
  }

  patchTimeWorkTypesById(id: number, patchOperations: Array<PatchOperation>): Promise<WorkType> {
    return this.request({
      path: `/time/workTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeWorkTypesByIdInfo(
    id: number,
    params: CommonParameters<WorkTypeInfo> = {},
  ): Promise<WorkTypeInfo> {
    return this.request({
      path: `/time/workTypes/${id}/info`,
      method: 'get',
      params,
    })
  }

  getTimeWorkTypesByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/time/workTypes/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getTimeWorkTypesByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/time/workTypes/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getTimeWorkTypesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/time/workTypes/count`,
      method: 'get',
      params,
    })
  }

  getTimeWorkTypesInfo(params: CommonParameters<WorkTypeInfo> = {}): Promise<Array<WorkTypeInfo>> {
    return this.request({
      path: `/time/workTypes/info`,
      method: 'get',
      params,
    })
  }

  getTimeWorkTypesInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/time/workTypes/info/count`,
      method: 'get',
      params,
    })
  }
}
