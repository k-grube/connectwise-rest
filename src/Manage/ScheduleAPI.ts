/* This file was auto-generated, do not manually edit. */
import { ManageBaseAPI } from '../BaseAPI'
import { components } from '../ManageTypes'
import { CommonParameters } from '../ManageAPI'
import { NoContentResponse } from '../types'
type schemas = components['schemas']
/** {@link Calendar} */
export type Calendar = schemas['Calendar']
/** {@link CalendarInfo} */
export type CalendarInfo = schemas['CalendarInfo']
/** {@link Count} */
export type Count = schemas['Count']
/** {@link Holiday} */
export type Holiday = schemas['Holiday']
/** {@link HolidayInfo} */
export type HolidayInfo = schemas['HolidayInfo']
/** {@link HolidayList} */
export type HolidayList = schemas['HolidayList']
/** {@link HolidayListInfo} */
export type HolidayListInfo = schemas['HolidayListInfo']
/** {@link PatchOperation} */
export type PatchOperation = schemas['PatchOperation']
/** {@link PortalCalendar} */
export type PortalCalendar = schemas['PortalCalendar']
/** {@link ScheduleColor} */
export type ScheduleColor = schemas['ScheduleColor']
/** {@link ScheduleDetail} */
export type ScheduleDetail = schemas['ScheduleDetail']
/** {@link ScheduleEntry} */
export type ScheduleEntry = schemas['ScheduleEntry']
/** {@link ScheduleEntryDetail} */
export type ScheduleEntryDetail = schemas['ScheduleEntryDetail']
/** {@link ScheduleReminderTime} */
export type ScheduleReminderTime = schemas['ScheduleReminderTime']
/** {@link ScheduleStatus} */
export type ScheduleStatus = schemas['ScheduleStatus']
/** {@link ScheduleStatusInfo} */
export type ScheduleStatusInfo = schemas['ScheduleStatusInfo']
/** {@link ScheduleType} */
export type ScheduleType = schemas['ScheduleType']
/** {@link ScheduleTypeInfo} */
export type ScheduleTypeInfo = schemas['ScheduleTypeInfo']
/** {@link Usage} */
export type Usage = schemas['Usage']

/**
 * Schedule module
 * @public
 */
export class ScheduleAPI extends ManageBaseAPI {
  getScheduleCalendars(params: CommonParameters<Calendar> = {}): Promise<Array<Calendar>> {
    return this.request({
      path: `/schedule/calendars`,
      method: 'get',
      params,
    })
  }

  postScheduleCalendars(calendar: Calendar): Promise<Calendar> {
    return this.request({
      path: `/schedule/calendars`,
      method: 'post',
      data: calendar,
    })
  }

  getScheduleCalendarsById(id: number, params: CommonParameters<Calendar> = {}): Promise<Calendar> {
    return this.request({
      path: `/schedule/calendars/${id}`,
      method: 'get',
      params,
    })
  }

  patchScheduleCalendarsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Calendar> {
    return this.request({
      path: `/schedule/calendars/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  putScheduleCalendarsById(id: number, calendar: Calendar): Promise<Calendar> {
    return this.request({
      path: `/schedule/calendars/${id}`,
      method: 'put',
      data: calendar,
    })
  }

  deleteScheduleCalendarsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/schedule/calendars/${id}`,
      method: 'delete',
    })
  }

  postScheduleCalendarsByIdCopy(id: number): Promise<Calendar> {
    return this.request({
      path: `/schedule/calendars/${id}/copy`,
      method: 'post',
    })
  }

  getScheduleCalendarsByIdInfo(
    id: number,
    params: CommonParameters<CalendarInfo> = {},
  ): Promise<CalendarInfo> {
    return this.request({
      path: `/schedule/calendars/${id}/info`,
      method: 'get',
      params,
    })
  }

  getScheduleCalendarsByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/schedule/calendars/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getScheduleCalendarsByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/schedule/calendars/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getScheduleCalendarsCount(params: CommonParameters<Calendar> = {}): Promise<Calendar> {
    return this.request({
      path: `/schedule/calendars/count`,
      method: 'get',
      params,
    })
  }

  getScheduleCalendarsInfo(
    params: CommonParameters<CalendarInfo> = {},
  ): Promise<Array<CalendarInfo>> {
    return this.request({
      path: `/schedule/calendars/info`,
      method: 'get',
      params,
    })
  }

  getScheduleCalendarsInfoCount(
    params: CommonParameters<CalendarInfo> = {},
  ): Promise<CalendarInfo> {
    return this.request({
      path: `/schedule/calendars/info/count`,
      method: 'get',
      params,
    })
  }

  getScheduleColors(params: CommonParameters<ScheduleColor> = {}): Promise<Array<ScheduleColor>> {
    return this.request({
      path: `/schedule/colors`,
      method: 'get',
      params,
    })
  }

  getScheduleColorsById(
    id: number,
    params: CommonParameters<ScheduleColor> = {},
  ): Promise<ScheduleColor> {
    return this.request({
      path: `/schedule/colors/${id}`,
      method: 'get',
      params,
    })
  }

  putScheduleColorsById(id: number, scheduleColor: ScheduleColor): Promise<ScheduleColor> {
    return this.request({
      path: `/schedule/colors/${id}`,
      method: 'put',
      data: scheduleColor,
    })
  }

  patchScheduleColorsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ScheduleColor> {
    return this.request({
      path: `/schedule/colors/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postScheduleColorsByIdClear(id: number): Promise<ScheduleColor> {
    return this.request({
      path: `/schedule/colors/${id}/clear`,
      method: 'post',
    })
  }

  getScheduleColorsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/schedule/colors/count`,
      method: 'get',
      params,
    })
  }

  postScheduleColorsReset(): Promise<Array<ScheduleColor>> {
    return this.request({
      path: `/schedule/colors/reset`,
      method: 'post',
    })
  }

  getScheduleDetails(
    params: CommonParameters<ScheduleEntryDetail> = {},
  ): Promise<Array<ScheduleEntryDetail>> {
    return this.request({
      path: `/schedule/details`,
      method: 'get',
      params,
    })
  }

  getScheduleDetailsById(
    id: number,
    params: CommonParameters<ScheduleEntryDetail> = {},
  ): Promise<ScheduleEntryDetail> {
    return this.request({
      path: `/schedule/details/${id}`,
      method: 'get',
      params,
    })
  }

  getScheduleDetailsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/schedule/details/count`,
      method: 'get',
      params,
    })
  }

  getScheduleEntries(params: CommonParameters<ScheduleEntry> = {}): Promise<Array<ScheduleEntry>> {
    return this.request({
      path: `/schedule/entries`,
      method: 'get',
      params,
    })
  }

  postScheduleEntries(scheduleEntry: ScheduleEntry): Promise<ScheduleEntry> {
    return this.request({
      path: `/schedule/entries`,
      method: 'post',
      data: scheduleEntry,
    })
  }

  getScheduleEntriesById(
    id: number,
    params: CommonParameters<ScheduleEntry> = {},
  ): Promise<ScheduleEntry> {
    return this.request({
      path: `/schedule/entries/${id}`,
      method: 'get',
      params,
    })
  }

  deleteScheduleEntriesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/schedule/entries/${id}`,
      method: 'delete',
    })
  }

  putScheduleEntriesById(id: number, scheduleEntry: ScheduleEntry): Promise<ScheduleEntry> {
    return this.request({
      path: `/schedule/entries/${id}`,
      method: 'put',
      data: scheduleEntry,
    })
  }

  patchScheduleEntriesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ScheduleEntry> {
    return this.request({
      path: `/schedule/entries/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  deleteScheduleEntriesByIdByNotifyResource(
    id: number,
    notifyResource: string,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/schedule/entries/${id}/${notifyResource}`,
      method: 'delete',
    })
  }

  getScheduleEntriesByParentIdDetails(
    parentId: number,
    params: CommonParameters<ScheduleDetail> = {},
  ): Promise<Array<ScheduleDetail>> {
    return this.request({
      path: `/schedule/entries/${parentId}/details`,
      method: 'get',
      params,
    })
  }

  getScheduleEntriesByParentIdDetailsById(
    id: number,
    parentId: number,
    params: CommonParameters<ScheduleDetail> = {},
  ): Promise<ScheduleDetail> {
    return this.request({
      path: `/schedule/entries/${parentId}/details/${id}`,
      method: 'get',
      params,
    })
  }

  getScheduleEntriesByParentIdDetailsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/schedule/entries/${parentId}/details/count`,
      method: 'get',
      params,
    })
  }

  getScheduleEntriesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/schedule/entries/count`,
      method: 'get',
      params,
    })
  }

  getScheduleHolidayLists(params: CommonParameters<HolidayList> = {}): Promise<Array<HolidayList>> {
    return this.request({
      path: `/schedule/holidayLists`,
      method: 'get',
      params,
    })
  }

  postScheduleHolidayLists(holidayList: HolidayList): Promise<HolidayList> {
    return this.request({
      path: `/schedule/holidayLists`,
      method: 'post',
      data: holidayList,
    })
  }

  getScheduleHolidayListsById(
    id: number,
    params: CommonParameters<HolidayList> = {},
  ): Promise<HolidayList> {
    return this.request({
      path: `/schedule/holidayLists/${id}`,
      method: 'get',
      params,
    })
  }

  deleteScheduleHolidayListsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/schedule/holidayLists/${id}`,
      method: 'delete',
    })
  }

  putScheduleHolidayListsById(id: number, holidayList: HolidayList): Promise<HolidayList> {
    return this.request({
      path: `/schedule/holidayLists/${id}`,
      method: 'put',
      data: holidayList,
    })
  }

  patchScheduleHolidayListsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<HolidayList> {
    return this.request({
      path: `/schedule/holidayLists/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getScheduleHolidaylistsByIdInfo(
    id: number,
    params: CommonParameters<HolidayListInfo> = {},
  ): Promise<HolidayListInfo> {
    return this.request({
      path: `/schedule/holidaylists/${id}/info`,
      method: 'get',
      params,
    })
  }

  getScheduleHolidayListsByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/schedule/holidayLists/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getScheduleHolidayListsByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/schedule/holidayLists/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getScheduleHolidayListsByParentIdHolidays(
    parentId: number,
    params: CommonParameters<Holiday> = {},
  ): Promise<Array<Holiday>> {
    return this.request({
      path: `/schedule/holidayLists/${parentId}/holidays`,
      method: 'get',
      params,
    })
  }

  postScheduleHolidayListsByParentIdHolidays(parentId: number, holiday: Holiday): Promise<Holiday> {
    return this.request({
      path: `/schedule/holidayLists/${parentId}/holidays`,
      method: 'post',
      data: holiday,
    })
  }

  getScheduleHolidayListsByParentIdHolidaysById(
    id: number,
    parentId: number,
    params: CommonParameters<Holiday> = {},
  ): Promise<Holiday> {
    return this.request({
      path: `/schedule/holidayLists/${parentId}/holidays/${id}`,
      method: 'get',
      params,
    })
  }

  deleteScheduleHolidayListsByParentIdHolidaysById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/schedule/holidayLists/${parentId}/holidays/${id}`,
      method: 'delete',
    })
  }

  putScheduleHolidayListsByParentIdHolidaysById(
    id: number,
    parentId: number,
    holiday: Holiday,
  ): Promise<Holiday> {
    return this.request({
      path: `/schedule/holidayLists/${parentId}/holidays/${id}`,
      method: 'put',
      data: holiday,
    })
  }

  patchScheduleHolidayListsByParentIdHolidaysById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Holiday> {
    return this.request({
      path: `/schedule/holidayLists/${parentId}/holidays/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getScheduleHolidaylistsByParentIdHolidaysByIdInfo(
    parentId: number,
    id: number,
    params: CommonParameters<HolidayInfo> = {},
  ): Promise<HolidayInfo> {
    return this.request({
      path: `/schedule/holidaylists/${parentId}/holidays/${id}/info`,
      method: 'get',
      params,
    })
  }

  getScheduleHolidayListsByParentIdHolidaysCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/schedule/holidayLists/${parentId}/holidays/count`,
      method: 'get',
      params,
    })
  }

  getScheduleHolidaylistsByParentIdHolidaysInfo(
    parentId: number,
    params: CommonParameters<HolidayInfo> = {},
  ): Promise<Array<HolidayInfo>> {
    return this.request({
      path: `/schedule/holidaylists/${parentId}/holidays/info`,
      method: 'get',
      params,
    })
  }

  postScheduleHolidayListsCopy(copy: HolidayList): Promise<HolidayList> {
    return this.request({
      path: `/schedule/holidayLists/copy`,
      method: 'post',
      data: copy,
    })
  }

  getScheduleHolidayListsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/schedule/holidayLists/count`,
      method: 'get',
      params,
    })
  }

  getScheduleHolidaylistsInfo(
    params: CommonParameters<HolidayListInfo> = {},
  ): Promise<Array<HolidayListInfo>> {
    return this.request({
      path: `/schedule/holidaylists/info`,
      method: 'get',
      params,
    })
  }

  getSchedulePortalcalendars(
    params: CommonParameters<PortalCalendar> = {},
  ): Promise<Array<PortalCalendar>> {
    return this.request({
      path: `/schedule/portalcalendars`,
      method: 'get',
      params,
    })
  }

  getSchedulePortalcalendarsById(
    id: number,
    params: CommonParameters<PortalCalendar> = {},
  ): Promise<PortalCalendar> {
    return this.request({
      path: `/schedule/portalcalendars/${id}`,
      method: 'get',
      params,
    })
  }

  putSchedulePortalcalendarsById(
    id: number,
    portalCalendar: PortalCalendar,
  ): Promise<PortalCalendar> {
    return this.request({
      path: `/schedule/portalcalendars/${id}`,
      method: 'put',
      data: portalCalendar,
    })
  }

  patchSchedulePortalcalendarsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<PortalCalendar> {
    return this.request({
      path: `/schedule/portalcalendars/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSchedulePortalcalendarsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/schedule/portalcalendars/count`,
      method: 'get',
      params,
    })
  }

  getScheduleReminderTimes(
    params: CommonParameters<ScheduleReminderTime> = {},
  ): Promise<Array<ScheduleReminderTime>> {
    return this.request({
      path: `/schedule/reminderTimes`,
      method: 'get',
      params,
    })
  }

  getScheduleReminderTimesById(
    id: number,
    params: CommonParameters<ScheduleReminderTime> = {},
  ): Promise<ScheduleReminderTime> {
    return this.request({
      path: `/schedule/reminderTimes/${id}`,
      method: 'get',
      params,
    })
  }

  putScheduleReminderTimesById(
    id: number,
    reminderTime: ScheduleReminderTime,
  ): Promise<ScheduleReminderTime> {
    return this.request({
      path: `/schedule/reminderTimes/${id}`,
      method: 'put',
      data: reminderTime,
    })
  }

  patchScheduleReminderTimesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ScheduleReminderTime> {
    return this.request({
      path: `/schedule/reminderTimes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getScheduleReminderTimesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/schedule/reminderTimes/count`,
      method: 'get',
      params,
    })
  }

  getScheduleStatuses(
    params: CommonParameters<ScheduleStatus> = {},
  ): Promise<Array<ScheduleStatus>> {
    return this.request({
      path: `/schedule/statuses`,
      method: 'get',
      params,
    })
  }

  postScheduleStatuses(scheduleStatus: ScheduleStatus): Promise<ScheduleStatus> {
    return this.request({
      path: `/schedule/statuses`,
      method: 'post',
      data: scheduleStatus,
    })
  }

  getScheduleStatusesById(
    id: number,
    params: CommonParameters<ScheduleStatus> = {},
  ): Promise<ScheduleStatus> {
    return this.request({
      path: `/schedule/statuses/${id}`,
      method: 'get',
      params,
    })
  }

  deleteScheduleStatusesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/schedule/statuses/${id}`,
      method: 'delete',
    })
  }

  putScheduleStatusesById(id: number, scheduleStatus: ScheduleStatus): Promise<ScheduleStatus> {
    return this.request({
      path: `/schedule/statuses/${id}`,
      method: 'put',
      data: scheduleStatus,
    })
  }

  patchScheduleStatusesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ScheduleStatus> {
    return this.request({
      path: `/schedule/statuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getScheduleStatusesByIdInfo(
    id: number,
    params: CommonParameters<ScheduleStatusInfo> = {},
  ): Promise<ScheduleStatusInfo> {
    return this.request({
      path: `/schedule/statuses/${id}/info`,
      method: 'get',
      params,
    })
  }

  getScheduleStatusesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/schedule/statuses/count`,
      method: 'get',
      params,
    })
  }

  getScheduleStatusesInfo(
    params: CommonParameters<ScheduleStatusInfo> = {},
  ): Promise<Array<ScheduleStatusInfo>> {
    return this.request({
      path: `/schedule/statuses/info`,
      method: 'get',
      params,
    })
  }

  getScheduleStatusesInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/schedule/statuses/info/count`,
      method: 'get',
      params,
    })
  }

  getScheduleTypes(params: CommonParameters<ScheduleType> = {}): Promise<Array<ScheduleType>> {
    return this.request({
      path: `/schedule/types`,
      method: 'get',
      params,
    })
  }

  postScheduleTypes(scheduleType: ScheduleType): Promise<ScheduleType> {
    return this.request({
      path: `/schedule/types`,
      method: 'post',
      data: scheduleType,
    })
  }

  getScheduleTypesById(
    id: number,
    params: CommonParameters<ScheduleType> = {},
  ): Promise<ScheduleType> {
    return this.request({
      path: `/schedule/types/${id}`,
      method: 'get',
      params,
    })
  }

  deleteScheduleTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/schedule/types/${id}`,
      method: 'delete',
    })
  }

  putScheduleTypesById(id: number, scheduleType: ScheduleType): Promise<ScheduleType> {
    return this.request({
      path: `/schedule/types/${id}`,
      method: 'put',
      data: scheduleType,
    })
  }

  patchScheduleTypesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ScheduleType> {
    return this.request({
      path: `/schedule/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getScheduleTypesByIdInfo(
    id: number,
    params: CommonParameters<ScheduleTypeInfo> = {},
  ): Promise<ScheduleTypeInfo> {
    return this.request({
      path: `/schedule/types/${id}/info`,
      method: 'get',
      params,
    })
  }

  getScheduleTypesByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/schedule/types/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getScheduleTypesByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/schedule/types/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getScheduleTypesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/schedule/types/count`,
      method: 'get',
      params,
    })
  }

  getScheduleTypesInfo(
    params: CommonParameters<ScheduleTypeInfo> = {},
  ): Promise<Array<ScheduleTypeInfo>> {
    return this.request({
      path: `/schedule/types/info`,
      method: 'get',
      params,
    })
  }

  getScheduleTypesInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/schedule/types/info/count`,
      method: 'get',
      params,
    })
  }
}
