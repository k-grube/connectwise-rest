/* This file was auto-generated, do not manually edit. */
import { ManageBaseAPI, toFormData } from '../BaseAPI'
import { components } from '../ManageTypes'
import { CommonParameters } from '../ManageAPI'
import { NoContentResponse, OctetStreamResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link AllowedFileType} */
export type AllowedFileType = schemas['AllowedFileType']
/** {@link AllowedOrigin} */
export type AllowedOrigin = schemas['AllowedOrigin']
/** {@link ApiMember} */
export type ApiMember = schemas['ApiMember']
/** {@link AuditTrailEntry} */
export type AuditTrailEntry = schemas['AuditTrailEntry']
/** {@link AuthAnvil} */
export type AuthAnvil = schemas['AuthAnvil']
/** {@link AutoSyncTime} */
export type AutoSyncTime = schemas['AutoSyncTime']
/** {@link BillableOptionsInfo} */
export type BillableOptionsInfo = schemas['BillableOptionsInfo']
/** {@link BulkResult} */
export type BulkResult = schemas['BulkResult']
/** {@link BundleRequestsCollection} */
export type BundleRequestsCollection = schemas['BundleRequestsCollection']
/** {@link BundleResultsCollection} */
export type BundleResultsCollection = schemas['BundleResultsCollection']
/** {@link CallbackEntry} */
export type CallbackEntry = schemas['CallbackEntry']
/** {@link Certification} */
export type Certification = schemas['Certification']
/** {@link ConnectWiseHostedScreen} */
export type ConnectWiseHostedScreen = schemas['ConnectWiseHostedScreen']
/** {@link ConnectWiseHostedSetup} */
export type ConnectWiseHostedSetup = schemas['ConnectWiseHostedSetup']
/** {@link CorporateStructure} */
export type CorporateStructure = schemas['CorporateStructure']
/** {@link CorporateStructureInfo} */
export type CorporateStructureInfo = schemas['CorporateStructureInfo']
/** {@link CorporateStructureLevel} */
export type CorporateStructureLevel = schemas['CorporateStructureLevel']
/** {@link Count} */
export type Count = schemas['Count']
/** {@link Crm} */
export type Crm = schemas['Crm']
/** {@link CrmInfo} */
export type CrmInfo = schemas['CrmInfo']
/** {@link CustomFieldInfo} */
export type CustomFieldInfo = schemas['CustomFieldInfo']
/** {@link CustomReport} */
export type CustomReport = schemas['CustomReport']
/** {@link CustomReportParameter} */
export type CustomReportParameter = schemas['CustomReportParameter']
/** {@link CwTimeZone} */
export type CwTimeZone = schemas['CwTimeZone']
/** {@link Department} */
export type Department = schemas['Department']
/** {@link DepartmentInfo} */
export type DepartmentInfo = schemas['DepartmentInfo']
/** {@link DepartmentLocation} */
export type DepartmentLocation = schemas['DepartmentLocation']
/** {@link DepartmentLocationInfo} */
export type DepartmentLocationInfo = schemas['DepartmentLocationInfo']
/** {@link DirectionalSyncInfo} */
export type DirectionalSyncInfo = schemas['DirectionalSyncInfo']
/** {@link DocumentFormData} */
export type DocumentFormData = schemas['DocumentFormData']
/** {@link DocumentInfo} */
export type DocumentInfo = schemas['DocumentInfo']
/** {@link DocumentSetup} */
export type DocumentSetup = schemas['DocumentSetup']
/** {@link DocumentType} */
export type DocumentType = schemas['DocumentType']
/** {@link EPayConfiguration} */
export type EPayConfiguration = schemas['EPayConfiguration']
/** {@link EmailConnector} */
export type EmailConnector = schemas['EmailConnector']
/** {@link EmailConnectorInfo} */
export type EmailConnectorInfo = schemas['EmailConnectorInfo']
/** {@link EmailConnectorParsingRule} */
export type EmailConnectorParsingRule = schemas['EmailConnectorParsingRule']
/** {@link EmailConnectorParsingStyle} */
export type EmailConnectorParsingStyle = schemas['EmailConnectorParsingStyle']
/** {@link EmailExclusion} */
export type EmailExclusion = schemas['EmailExclusion']
/** {@link EmailToken} */
export type EmailToken = schemas['EmailToken']
/** {@link Experiment} */
export type Experiment = schemas['Experiment']
/** {@link FileUploadSetting} */
export type FileUploadSetting = schemas['FileUploadSetting']
/** {@link GoogleEmailSetup} */
export type GoogleEmailSetup = schemas['GoogleEmailSetup']
/** {@link IdCollection} */
export type IdCollection = schemas['IdCollection']
/** {@link Imap} */
export type Imap = schemas['Imap']
/** {@link ImapInfo} */
export type ImapInfo = schemas['ImapInfo']
/** {@link ImportMassMaintenance} */
export type ImportMassMaintenance = schemas['ImportMassMaintenance']
/** {@link InOutBoard} */
export type InOutBoard = schemas['InOutBoard']
/** {@link InOutType} */
export type InOutType = schemas['InOutType']
/** {@link InOutTypeInfo} */
export type InOutTypeInfo = schemas['InOutTypeInfo']
/** {@link Info} */
export type Info = schemas['Info']
/** {@link IntegratorLogin} */
export type IntegratorLogin = schemas['IntegratorLogin']
/** {@link IntegratorTag} */
export type IntegratorTag = schemas['IntegratorTag']
/** {@link KPI} */
export type KPI = schemas['KPI']
/** {@link KPICategory} */
export type KPICategory = schemas['KPICategory']
/** {@link LdapConfiguration} */
export type LdapConfiguration = schemas['LdapConfiguration']
/** {@link LdapConfigurationInfo} */
export type LdapConfigurationInfo = schemas['LdapConfigurationInfo']
/** {@link LdapConfigurationTestLink} */
export type LdapConfigurationTestLink = schemas['LdapConfigurationTestLink']
/** {@link Link} */
export type Link = schemas['Link']
/** {@link LinkInfo} */
export type LinkInfo = schemas['LinkInfo']
/** {@link LinkResolveUrlInfo} */
export type LinkResolveUrlInfo = schemas['LinkResolveUrlInfo']
/** {@link LocaleInfo} */
export type LocaleInfo = schemas['LocaleInfo']
/** {@link Location} */
export type Location = schemas['Location']
/** {@link LocationDepartment} */
export type LocationDepartment = schemas['LocationDepartment']
/** {@link LocationInfo} */
export type LocationInfo = schemas['LocationInfo']
/** {@link LocationWorkRole} */
export type LocationWorkRole = schemas['LocationWorkRole']
/** {@link M365ContactSyncInfo} */
export type M365ContactSyncInfo = schemas['M365ContactSyncInfo']
/** {@link M365ContactSyncMonitoring} */
export type M365ContactSyncMonitoring = schemas['M365ContactSyncMonitoring']
/** {@link ManagedDeviceAccount} */
export type ManagedDeviceAccount = schemas['ManagedDeviceAccount']
/** {@link ManagementNetworkSecurity} */
export type ManagementNetworkSecurity = schemas['ManagementNetworkSecurity']
/** {@link MarketplaceImport} */
export type MarketplaceImport = schemas['MarketplaceImport']
/** {@link Member} */
export type Member = schemas['Member']
/** {@link MemberAccrual} */
export type MemberAccrual = schemas['MemberAccrual']
/** {@link MemberCertification} */
export type MemberCertification = schemas['MemberCertification']
/** {@link MemberDeactivation} */
export type MemberDeactivation = schemas['MemberDeactivation']
/** {@link MemberDelegation} */
export type MemberDelegation = schemas['MemberDelegation']
/** {@link MemberForCalSync} */
export type MemberForCalSync = schemas['MemberForCalSync']
/** {@link MemberInfo} */
export type MemberInfo = schemas['MemberInfo']
/** {@link MemberLinkSsoUser} */
export type MemberLinkSsoUser = schemas['MemberLinkSsoUser']
/** {@link MemberNotificationSetting} */
export type MemberNotificationSetting = schemas['MemberNotificationSetting']
/** {@link MemberPersona} */
export type MemberPersona = schemas['MemberPersona']
/** {@link MemberSkill} */
export type MemberSkill = schemas['MemberSkill']
/** {@link MemberSsoToken} */
export type MemberSsoToken = schemas['MemberSsoToken']
/** {@link MemberTemplate} */
export type MemberTemplate = schemas['MemberTemplate']
/** {@link MemberType} */
export type MemberType = schemas['MemberType']
/** {@link MemberTypeInfo} */
export type MemberTypeInfo = schemas['MemberTypeInfo']
/** {@link MenuEntry} */
export type MenuEntry = schemas['MenuEntry']
/** {@link MenuEntryLocation} */
export type MenuEntryLocation = schemas['MenuEntryLocation']
/** {@link MyAccount} */
export type MyAccount = schemas['MyAccount']
/** {@link MyMember} */
export type MyMember = schemas['MyMember']
/** {@link MyMemberInfo} */
export type MyMemberInfo = schemas['MyMemberInfo']
/** {@link MySecurity} */
export type MySecurity = schemas['MySecurity']
/** {@link MySecurityCustomizeItem} */
export type MySecurityCustomizeItem = schemas['MySecurityCustomizeItem']
/** {@link NotificationRecipient} */
export type NotificationRecipient = schemas['NotificationRecipient']
/** {@link Office365EmailApplicationInfo} */
export type Office365EmailApplicationInfo = schemas['Office365EmailApplicationInfo']
/** {@link Office365EmailSetup} */
export type Office365EmailSetup = schemas['Office365EmailSetup']
/** {@link OnPremiseSearchSetting} */
export type OnPremiseSearchSetting = schemas['OnPremiseSearchSetting']
/** {@link OsGradeWeight} */
export type OsGradeWeight = schemas['OsGradeWeight']
/** {@link Other} */
export type Other = schemas['Other']
/** {@link ParsingType} */
export type ParsingType = schemas['ParsingType']
/** {@link ParsingVariable} */
export type ParsingVariable = schemas['ParsingVariable']
/** {@link PatchOperation} */
export type PatchOperation = schemas['PatchOperation']
/** {@link PersonasInfo} */
export type PersonasInfo = schemas['PersonasInfo']
/** {@link PortalReport} */
export type PortalReport = schemas['PortalReport']
/** {@link QuoteLink} */
export type QuoteLink = schemas['QuoteLink']
/** {@link Report} */
export type Report = schemas['Report']
/** {@link ReportCard} */
export type ReportCard = schemas['ReportCard']
/** {@link ReportCardDetail} */
export type ReportCardDetail = schemas['ReportCardDetail']
/** {@link ReportCardInfo} */
export type ReportCardInfo = schemas['ReportCardInfo']
/** {@link ReportColumnDefinition} */
export type ReportColumnDefinition = schemas['ReportColumnDefinition']
/** {@link ReportDataResponse} */
export type ReportDataResponse = schemas['ReportDataResponse']
/** {@link ReportingService} */
export type ReportingService = schemas['ReportingService']
/** {@link SecurityRole} */
export type SecurityRole = schemas['SecurityRole']
/** {@link SecurityRoleInfo} */
export type SecurityRoleInfo = schemas['SecurityRoleInfo']
/** {@link SecurityRoleSetting} */
export type SecurityRoleSetting = schemas['SecurityRoleSetting']
/** {@link Service} */
export type Service = schemas['Service']
/** {@link ServiceInfo} */
export type ServiceInfo = schemas['ServiceInfo']
/** {@link SetupScreen} */
export type SetupScreen = schemas['SetupScreen']
/** {@link Skill} */
export type Skill = schemas['Skill']
/** {@link SkillCategory} */
export type SkillCategory = schemas['SkillCategory']
/** {@link SkillInfo} */
export type SkillInfo = schemas['SkillInfo']
/** {@link SsoConfiguration} */
export type SsoConfiguration = schemas['SsoConfiguration']
/** {@link SsoUser} */
export type SsoUser = schemas['SsoUser']
/** {@link StandardNote} */
export type StandardNote = schemas['StandardNote']
/** {@link StandardNoteInfo} */
export type StandardNoteInfo = schemas['StandardNoteInfo']
/** {@link SuccessResponse} */
export type SuccessResponse = schemas['SuccessResponse']
/** {@link Survey} */
export type Survey = schemas['Survey']
/** {@link SurveyInfo} */
export type SurveyInfo = schemas['SurveyInfo']
/** {@link SurveyQuestion} */
export type SurveyQuestion = schemas['SurveyQuestion']
/** {@link SurveyQuestionValue} */
export type SurveyQuestionValue = schemas['SurveyQuestionValue']
/** {@link SystemSetting} */
export type SystemSetting = schemas['SystemSetting']
/** {@link TimeExpense} */
export type TimeExpense = schemas['TimeExpense']
/** {@link TimeZoneSetup} */
export type TimeZoneSetup = schemas['TimeZoneSetup']
/** {@link TimeZoneSetupInfo} */
export type TimeZoneSetupInfo = schemas['TimeZoneSetupInfo']
/** {@link TodayPageCategory} */
export type TodayPageCategory = schemas['TodayPageCategory']
/** {@link TodayPageLink} */
export type TodayPageLink = schemas['TodayPageLink']
/** {@link Token} */
export type Token = schemas['Token']
/** {@link Usage} */
export type Usage = schemas['Usage']
/** {@link UserDefinedField} */
export type UserDefinedField = schemas['UserDefinedField']
/** {@link UserDefinedFieldInfo} */
export type UserDefinedFieldInfo = schemas['UserDefinedFieldInfo']
/** {@link UserEmail} */
export type UserEmail = schemas['UserEmail']
/** {@link Workflow} */
export type Workflow = schemas['Workflow']
/** {@link WorkflowAction} */
export type WorkflowAction = schemas['WorkflowAction']
/** {@link WorkflowActionAutomateParameter} */
export type WorkflowActionAutomateParameter = schemas['WorkflowActionAutomateParameter']
/** {@link WorkflowActionUserDefinedField} */
export type WorkflowActionUserDefinedField = schemas['WorkflowActionUserDefinedField']
/** {@link WorkflowAttachment} */
export type WorkflowAttachment = schemas['WorkflowAttachment']
/** {@link WorkflowEvent} */
export type WorkflowEvent = schemas['WorkflowEvent']
/** {@link WorkflowNotifyType} */
export type WorkflowNotifyType = schemas['WorkflowNotifyType']
/** {@link WorkflowNotifyTypeInfo} */
export type WorkflowNotifyTypeInfo = schemas['WorkflowNotifyTypeInfo']
/** {@link WorkflowTableType} */
export type WorkflowTableType = schemas['WorkflowTableType']
/** {@link WorkflowTableTypeInfo} */
export type WorkflowTableTypeInfo = schemas['WorkflowTableTypeInfo']
/** {@link WorkflowTrigger} */
export type WorkflowTrigger = schemas['WorkflowTrigger']
/** {@link WorkflowTriggerOption} */
export type WorkflowTriggerOption = schemas['WorkflowTriggerOption']

/**
 * System module
 * @public
 */
export class SystemAPI extends ManageBaseAPI {
  getSystemAllowedfiletypes(
    params: CommonParameters<AllowedFileType> = {},
  ): Promise<Array<AllowedFileType>> {
    return this.request({
      path: `/system/allowedfiletypes/`,
      method: 'get',
      params,
    })
  }

  postSystemAllowedFileTypes(allowedFileType: AllowedFileType): Promise<AllowedFileType> {
    return this.request({
      path: `/system/AllowedFileTypes/`,
      method: 'post',
      data: allowedFileType,
    })
  }

  getSystemAllowedfiletypesById(
    id: number,
    params: CommonParameters<AllowedFileType> = {},
  ): Promise<AllowedFileType> {
    return this.request({
      path: `/system/allowedfiletypes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemAllowedfiletypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/allowedfiletypes/${id}`,
      method: 'delete',
    })
  }

  putSystemAllowedfiletypesById(
    id: number,
    AllowedFileType: AllowedFileType,
  ): Promise<AllowedFileType> {
    return this.request({
      path: `/system/allowedfiletypes/${id}`,
      method: 'put',
      data: AllowedFileType,
    })
  }

  patchSystemAllowedfiletypesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AllowedFileType> {
    return this.request({
      path: `/system/allowedfiletypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemAllowedfiletypesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/allowedfiletypes/count`,
      method: 'get',
      params,
    })
  }

  getSystemAllowedorigins(
    params: CommonParameters<AllowedOrigin> = {},
  ): Promise<Array<AllowedOrigin>> {
    return this.request({
      path: `/system/allowedorigins`,
      method: 'get',
      params,
    })
  }

  postSystemAllowedorigins(origin: AllowedOrigin): Promise<AllowedOrigin> {
    return this.request({
      path: `/system/allowedorigins`,
      method: 'post',
      data: origin,
    })
  }

  getSystemAllowedoriginsById(
    id: number,
    params: CommonParameters<AllowedOrigin> = {},
  ): Promise<AllowedOrigin> {
    return this.request({
      path: `/system/allowedorigins/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemAllowedoriginsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/allowedorigins/${id}`,
      method: 'delete',
    })
  }

  putSystemAllowedoriginsById(id: number, origin: AllowedOrigin): Promise<AllowedOrigin> {
    return this.request({
      path: `/system/allowedorigins/${id}`,
      method: 'put',
      data: origin,
    })
  }

  patchSystemAllowedoriginsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AllowedOrigin> {
    return this.request({
      path: `/system/allowedorigins/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemAllowedoriginsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/allowedorigins/count`,
      method: 'get',
      params,
    })
  }

  getSystemApiMembers(params: CommonParameters<ApiMember> = {}): Promise<Array<ApiMember>> {
    return this.request({
      path: `/system/apiMembers`,
      method: 'get',
      params,
    })
  }

  postSystemApiMembers(apiMember: ApiMember): Promise<ApiMember> {
    return this.request({
      path: `/system/apiMembers`,
      method: 'post',
      data: apiMember,
    })
  }

  getSystemApiMembersById(
    id: number,
    params: CommonParameters<ApiMember> = {},
  ): Promise<ApiMember> {
    return this.request({
      path: `/system/apiMembers/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemApiMembersById(id: number, apiMember: ApiMember): Promise<ApiMember> {
    return this.request({
      path: `/system/apiMembers/${id}`,
      method: 'put',
      data: apiMember,
    })
  }

  patchSystemApiMembersById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ApiMember> {
    return this.request({
      path: `/system/apiMembers/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemApiMembersCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/apiMembers/count`,
      method: 'get',
      params,
    })
  }

  getSystemApiMembersDefault(params: CommonParameters<ApiMember> = {}): Promise<ApiMember> {
    return this.request({
      path: `/system/apiMembers/default`,
      method: 'get',
      params,
    })
  }

  getSystemAudittrail(
    params: CommonParameters<AuditTrailEntry> = {},
  ): Promise<Array<AuditTrailEntry>> {
    return this.request({
      path: `/system/audittrail`,
      method: 'get',
      params,
    })
  }

  getSystemAudittrailCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/audittrail/count`,
      method: 'get',
      params,
    })
  }

  getSystemAuthAnvils(params: CommonParameters<AuthAnvil> = {}): Promise<Array<AuthAnvil>> {
    return this.request({
      path: `/system/authAnvils`,
      method: 'get',
      params,
    })
  }

  getSystemAuthAnvilsById(
    id: number,
    params: CommonParameters<AuthAnvil> = {},
  ): Promise<AuthAnvil> {
    return this.request({
      path: `/system/authAnvils/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemAuthAnvilsById(id: number, authAnvil: AuthAnvil): Promise<AuthAnvil> {
    return this.request({
      path: `/system/authAnvils/${id}`,
      method: 'put',
      data: authAnvil,
    })
  }

  patchSystemAuthAnvilsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AuthAnvil> {
    return this.request({
      path: `/system/authAnvils/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemAuthAnvilsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/authAnvils/count`,
      method: 'get',
      params,
    })
  }

  getSystemAuthAnvilsTestConnection(
    params: CommonParameters<SuccessResponse> = {},
  ): Promise<SuccessResponse> {
    return this.request({
      path: `/system/authAnvils/testConnection`,
      method: 'get',
      params,
    })
  }

  getSystemAutoSyncTime(params: CommonParameters<AutoSyncTime> = {}): Promise<Array<AutoSyncTime>> {
    return this.request({
      path: `/system/autoSyncTime`,
      method: 'get',
      params,
    })
  }

  postSystemAutoSyncTime(autoSyncTime: AutoSyncTime): Promise<AutoSyncTime> {
    return this.request({
      path: `/system/autoSyncTime`,
      method: 'post',
      data: autoSyncTime,
    })
  }

  getSystemAutoSyncTimeById(
    id: number,
    params: CommonParameters<AutoSyncTime> = {},
  ): Promise<AutoSyncTime> {
    return this.request({
      path: `/system/autoSyncTime/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemAutoSyncTimeById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/autoSyncTime/${id}`,
      method: 'delete',
    })
  }

  putSystemAutoSyncTimeById(id: number, autoSyncTime: AutoSyncTime): Promise<AutoSyncTime> {
    return this.request({
      path: `/system/autoSyncTime/${id}`,
      method: 'put',
      data: autoSyncTime,
    })
  }

  patchSystemAutoSyncTimeById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AutoSyncTime> {
    return this.request({
      path: `/system/autoSyncTime/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemAutoSyncTimeCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/autoSyncTime/count`,
      method: 'get',
      params,
    })
  }

  getSystemBillableOptionsInfo(
    params: CommonParameters<BillableOptionsInfo> = {},
  ): Promise<Array<BillableOptionsInfo>> {
    return this.request({
      path: `/system/BillableOptions/info`,
      method: 'get',
      params,
    })
  }

  postSystemBundles(requests: BundleRequestsCollection): Promise<BundleResultsCollection> {
    return this.request({
      path: `/system/bundles`,
      method: 'post',
      data: requests,
    })
  }

  postSystemBundlesCount(requests: BundleRequestsCollection): Promise<BundleResultsCollection> {
    return this.request({
      path: `/system/bundles/count`,
      method: 'post',
      data: requests,
    })
  }

  getSystemCallbacks(params: CommonParameters<CallbackEntry> = {}): Promise<Array<CallbackEntry>> {
    return this.request({
      path: `/system/callbacks`,
      method: 'get',
      params,
    })
  }

  postSystemCallbacks(callbackEntry: CallbackEntry): Promise<CallbackEntry> {
    return this.request({
      path: `/system/callbacks`,
      method: 'post',
      data: callbackEntry,
    })
  }

  getSystemCallbacksById(
    id: number,
    params: CommonParameters<CallbackEntry> = {},
  ): Promise<CallbackEntry> {
    return this.request({
      path: `/system/callbacks/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemCallbacksById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/callbacks/${id}`,
      method: 'delete',
    })
  }

  putSystemCallbacksById(id: number, callbackEntry: CallbackEntry): Promise<CallbackEntry> {
    return this.request({
      path: `/system/callbacks/${id}`,
      method: 'put',
      data: callbackEntry,
    })
  }

  patchSystemCallbacksById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<CallbackEntry> {
    return this.request({
      path: `/system/callbacks/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemCallbacksCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/callbacks/count`,
      method: 'get',
      params,
    })
  }

  getSystemCertifications(
    params: CommonParameters<Certification> = {},
  ): Promise<Array<Certification>> {
    return this.request({
      path: `/system/certifications`,
      method: 'get',
      params,
    })
  }

  postSystemCertifications(certification: Certification): Promise<Certification> {
    return this.request({
      path: `/system/certifications`,
      method: 'post',
      data: certification,
    })
  }

  getSystemCertificationsById(
    id: number,
    params: CommonParameters<Certification> = {},
  ): Promise<Certification> {
    return this.request({
      path: `/system/certifications/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemCertificationsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/certifications/${id}`,
      method: 'delete',
    })
  }

  putSystemCertificationsById(id: number, certification: Certification): Promise<Certification> {
    return this.request({
      path: `/system/certifications/${id}`,
      method: 'put',
      data: certification,
    })
  }

  patchSystemCertificationsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Certification> {
    return this.request({
      path: `/system/certifications/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemCertificationsByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/system/certifications/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getSystemCertificationsByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/system/certifications/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getSystemCertificationsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/certifications/count`,
      method: 'get',
      params,
    })
  }

  getSystemConnectWiseHostedScreens(
    params: CommonParameters<ConnectWiseHostedScreen> = {},
  ): Promise<Array<ConnectWiseHostedScreen>> {
    return this.request({
      path: `/system/connectWiseHostedScreens`,
      method: 'get',
      params,
    })
  }

  getSystemConnectWiseHostedScreensById(
    id: number,
    params: CommonParameters<ConnectWiseHostedScreen> = {},
  ): Promise<ConnectWiseHostedScreen> {
    return this.request({
      path: `/system/connectWiseHostedScreens/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemConnectWiseHostedScreensCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/connectWiseHostedScreens/count`,
      method: 'get',
      params,
    })
  }

  getSystemConnectwisehostedsetups(
    params: CommonParameters<ConnectWiseHostedSetup> = {},
  ): Promise<Array<ConnectWiseHostedSetup>> {
    return this.request({
      path: `/system/connectwisehostedsetups`,
      method: 'get',
      params,
    })
  }

  postSystemConnectwisehostedsetups(
    connectWiseHostedSetup: ConnectWiseHostedSetup,
  ): Promise<ConnectWiseHostedSetup> {
    return this.request({
      path: `/system/connectwisehostedsetups`,
      method: 'post',
      data: connectWiseHostedSetup,
    })
  }

  getSystemConnectwisehostedsetupsById(
    id: number,
    params: CommonParameters<ConnectWiseHostedSetup> = {},
  ): Promise<ConnectWiseHostedSetup> {
    return this.request({
      path: `/system/connectwisehostedsetups/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemConnectwisehostedsetupsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/connectwisehostedsetups/${id}`,
      method: 'delete',
    })
  }

  putSystemConnectwisehostedsetupsById(
    id: number,
    connectWiseHostedSetup: ConnectWiseHostedSetup,
  ): Promise<ConnectWiseHostedSetup> {
    return this.request({
      path: `/system/connectwisehostedsetups/${id}`,
      method: 'put',
      data: connectWiseHostedSetup,
    })
  }

  patchSystemConnectwisehostedsetupsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ConnectWiseHostedSetup> {
    return this.request({
      path: `/system/connectwisehostedsetups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemConnectwisehostedsetupsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/connectwisehostedsetups/count`,
      method: 'get',
      params,
    })
  }

  getSystemContactsyncMonitoring(
    params: CommonParameters<M365ContactSyncMonitoring> = {},
  ): Promise<Array<M365ContactSyncMonitoring>> {
    return this.request({
      path: `/system/contactsync/monitoring`,
      method: 'get',
      params,
    })
  }

  postSystemContactsyncMonitoring(): Promise<M365ContactSyncMonitoring> {
    return this.request({
      path: `/system/contactsync/monitoring/`,
      method: 'post',
    })
  }

  patchSystemContactsyncMonitoring(): Promise<M365ContactSyncMonitoring> {
    return this.request({
      path: `/system/contactsync/monitoring/`,
      method: 'patch',
    })
  }

  getSystemContactsyncMonitoringById(
    id: number,
    params: CommonParameters<M365ContactSyncMonitoring> = {},
  ): Promise<M365ContactSyncMonitoring> {
    return this.request({
      path: `/system/contactsync/monitoring/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemContactsyncMonitoringCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/contactsync/monitoring/count`,
      method: 'get',
      params,
    })
  }

  getSystemContactsyncMonitoringNotificationtype(
    params: CommonParameters<M365ContactSyncMonitoring> = {},
  ): Promise<M365ContactSyncMonitoring> {
    return this.request({
      path: `/system/contactsync/monitoring/notificationtype/`,
      method: 'get',
      params,
    })
  }

  getSystemContactsyncMonitoringTypeById(
    id: number,
    params: CommonParameters<M365ContactSyncMonitoring> = {},
  ): Promise<M365ContactSyncMonitoring> {
    return this.request({
      path: `/system/contactsync/monitoring/type/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemContactsyncMonitoringTypeById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/contactsync/monitoring/type/${id}`,
      method: 'delete',
    })
  }

  getSystemCustomFieldInfos(
    params: CommonParameters<CustomFieldInfo> = {},
  ): Promise<Array<CustomFieldInfo>> {
    return this.request({
      path: `/system/customFieldInfos`,
      method: 'get',
      params,
    })
  }

  getSystemCustomReports(
    params: CommonParameters<CustomReport> = {},
  ): Promise<Array<CustomReport>> {
    return this.request({
      path: `/system/customReports`,
      method: 'get',
      params,
    })
  }

  postSystemCustomReports(customReport: CustomReport): Promise<CustomReport> {
    return this.request({
      path: `/system/customReports`,
      method: 'post',
      data: customReport,
    })
  }

  getSystemCustomReportsById(
    id: number,
    params: CommonParameters<CustomReport> = {},
  ): Promise<CustomReport> {
    return this.request({
      path: `/system/customReports/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemCustomReportsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/customReports/${id}`,
      method: 'delete',
    })
  }

  putSystemCustomReportsById(id: number, customReport: CustomReport): Promise<CustomReport> {
    return this.request({
      path: `/system/customReports/${id}`,
      method: 'put',
      data: customReport,
    })
  }

  patchSystemCustomReportsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<CustomReport> {
    return this.request({
      path: `/system/customReports/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemCustomReportsByParentIdParameters(
    parentId: number,
    params: CommonParameters<CustomReportParameter> = {},
  ): Promise<Array<CustomReportParameter>> {
    return this.request({
      path: `/system/customReports/${parentId}/parameters`,
      method: 'get',
      params,
    })
  }

  postSystemCustomReportsByParentIdParameters(
    parentId: number,
    customReportParameter: CustomReportParameter,
  ): Promise<CustomReportParameter> {
    return this.request({
      path: `/system/customReports/${parentId}/parameters`,
      method: 'post',
      data: customReportParameter,
    })
  }

  getSystemCustomReportsByParentIdParametersById(
    id: number,
    parentId: number,
    params: CommonParameters<CustomReportParameter> = {},
  ): Promise<CustomReportParameter> {
    return this.request({
      path: `/system/customReports/${parentId}/parameters/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemCustomReportsByParentIdParametersById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/customReports/${parentId}/parameters/${id}`,
      method: 'delete',
    })
  }

  putSystemCustomReportsByParentIdParametersById(
    id: number,
    parentId: number,
    customReportParameter: CustomReportParameter,
  ): Promise<CustomReportParameter> {
    return this.request({
      path: `/system/customReports/${parentId}/parameters/${id}`,
      method: 'put',
      data: customReportParameter,
    })
  }

  patchSystemCustomReportsByParentIdParametersById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<CustomReportParameter> {
    return this.request({
      path: `/system/customReports/${parentId}/parameters/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemCustomReportsByParentIdParametersCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/customReports/${parentId}/parameters/count`,
      method: 'get',
      params,
    })
  }

  getSystemCustomReportsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/customReports/count`,
      method: 'get',
      params,
    })
  }

  getSystemCwTimeZones(params: CommonParameters<CwTimeZone> = {}): Promise<Array<CwTimeZone>> {
    return this.request({
      path: `/system/cwTimeZones`,
      method: 'get',
      params,
    })
  }

  getSystemCwTimeZonesById(
    id: number,
    params: CommonParameters<CwTimeZone> = {},
  ): Promise<CwTimeZone> {
    return this.request({
      path: `/system/cwTimeZones/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemCwTimeZonesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/cwTimeZones/count`,
      method: 'get',
      params,
    })
  }

  getSystemDepartments(params: CommonParameters<Department> = {}): Promise<Array<Department>> {
    return this.request({
      path: `/system/departments`,
      method: 'get',
      params,
    })
  }

  postSystemDepartments(department: Department): Promise<Department> {
    return this.request({
      path: `/system/departments`,
      method: 'post',
      data: department,
    })
  }

  getSystemDepartmentsById(
    id: number,
    params: CommonParameters<Department> = {},
  ): Promise<Department> {
    return this.request({
      path: `/system/departments/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemDepartmentsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/departments/${id}`,
      method: 'delete',
    })
  }

  putSystemDepartmentsById(id: number, department: Department): Promise<Department> {
    return this.request({
      path: `/system/departments/${id}`,
      method: 'put',
      data: department,
    })
  }

  patchSystemDepartmentsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Department> {
    return this.request({
      path: `/system/departments/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemDepartmentsByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/system/departments/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getSystemDepartmentsByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/system/departments/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getSystemDepartmentsByParentIdLocations(
    parentId: number,
    params: CommonParameters<DepartmentLocation> = {},
  ): Promise<Array<DepartmentLocation>> {
    return this.request({
      path: `/system/departments/${parentId}/locations`,
      method: 'get',
      params,
    })
  }

  postSystemDepartmentsByParentIdLocations(
    parentId: number,
    departmentLocation: DepartmentLocation,
  ): Promise<DepartmentLocation> {
    return this.request({
      path: `/system/departments/${parentId}/locations`,
      method: 'post',
      data: departmentLocation,
    })
  }

  getSystemDepartmentsByParentIdLocationsById(
    id: number,
    parentId: number,
    params: CommonParameters<DepartmentLocation> = {},
  ): Promise<DepartmentLocation> {
    return this.request({
      path: `/system/departments/${parentId}/locations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemDepartmentsByParentIdLocationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/departments/${parentId}/locations/${id}`,
      method: 'delete',
    })
  }

  putSystemDepartmentsByParentIdLocationsById(
    id: number,
    parentId: number,
    departmentLocation: DepartmentLocation,
  ): Promise<DepartmentLocation> {
    return this.request({
      path: `/system/departments/${parentId}/locations/${id}`,
      method: 'put',
      data: departmentLocation,
    })
  }

  patchSystemDepartmentsByParentIdLocationsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<DepartmentLocation> {
    return this.request({
      path: `/system/departments/${parentId}/locations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemDepartmentsByParentIdLocationsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/departments/${parentId}/locations/count`,
      method: 'get',
      params,
    })
  }

  getSystemDepartmentsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/departments/count`,
      method: 'get',
      params,
    })
  }

  getSystemDirectionalSyncsByIdInfo(
    id: number,
    params: CommonParameters<DirectionalSyncInfo> = {},
  ): Promise<DirectionalSyncInfo> {
    return this.request({
      path: `/system/directionalSyncs/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemDirectionalSyncsInfo(
    params: CommonParameters<DirectionalSyncInfo> = {},
  ): Promise<Array<DirectionalSyncInfo>> {
    return this.request({
      path: `/system/directionalSyncs/info`,
      method: 'get',
      params,
    })
  }

  getSystemDirectionalSyncsInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/directionalSyncs/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemDocuments(params: CommonParameters<DocumentInfo> = {}): Promise<Array<DocumentInfo>> {
    return this.request({
      path: `/system/documents`,
      method: 'get',
      params,
    })
  }

  postSystemDocuments(documentFormData: DocumentFormData | FormData): Promise<DocumentInfo> {
    return this.request({
      path: `/system/documents`,
      method: 'post',
      data:
        documentFormData instanceof FormData
          ? documentFormData
          : toFormData(documentFormData as Record<string, unknown>),
      contentType: 'multipart',
    })
  }

  getSystemDocumentsById(
    id: number,
    params: CommonParameters<DocumentInfo> = {},
  ): Promise<DocumentInfo> {
    return this.request({
      path: `/system/documents/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemDocumentsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/documents/${id}`,
      method: 'delete',
    })
  }

  postSystemDocumentsById(id: number): Promise<DocumentInfo> {
    return this.request({
      path: `/system/documents/${id}`,
      method: 'post',
    })
  }

  getSystemDocumentsByIdDownload(
    id: number,
    params: CommonParameters<string> = {},
  ): Promise<OctetStreamResponse> {
    return this.request({
      path: `/system/documents/${id}/download`,
      method: 'get',
      responseType: 'arraybuffer',
      params,
    })
  }

  getSystemDocumentsByIdThumbnail(
    id: number,
    params: CommonParameters<string> = {},
  ): Promise<OctetStreamResponse> {
    return this.request({
      path: `/system/documents/${id}/thumbnail`,
      method: 'get',
      responseType: 'arraybuffer',
      params,
    })
  }

  getSystemDocumentsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/documents/count`,
      method: 'get',
      params,
    })
  }

  getSystemDocumentsUploadsample(
    params: CommonParameters<HTMLResponse> = {},
  ): Promise<HTMLResponse> {
    return this.request({
      path: `/system/documents/uploadsample`,
      method: 'get',
      params,
    })
  }

  getSystemDocumentTypesByIdInfo(
    id: number,
    params: CommonParameters<DocumentType> = {},
  ): Promise<DocumentType> {
    return this.request({
      path: `/system/documentTypes/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemDocumentTypesInfo(
    params: CommonParameters<DocumentType> = {},
  ): Promise<Array<DocumentType>> {
    return this.request({
      path: `/system/documentTypes/info`,
      method: 'get',
      params,
    })
  }

  getSystemDocumentTypesInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/documentTypes/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemEmailConnectors(
    params: CommonParameters<EmailConnector> = {},
  ): Promise<Array<EmailConnector>> {
    return this.request({
      path: `/system/emailConnectors`,
      method: 'get',
      params,
    })
  }

  postSystemEmailConnectors(emailConnector: EmailConnector): Promise<EmailConnector> {
    return this.request({
      path: `/system/emailConnectors`,
      method: 'post',
      data: emailConnector,
    })
  }

  getSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRules(
    parentId: number,
    grandparentId: number,
    params: CommonParameters<EmailConnectorParsingRule> = {},
  ): Promise<Array<EmailConnectorParsingRule>> {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/${parentId}/parsingRules`,
      method: 'get',
      params,
    })
  }

  postSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRules(
    parentId: number,
    grandparentId: number,
    emailConnectorParsingRule: EmailConnectorParsingRule,
  ): Promise<EmailConnectorParsingRule> {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/${parentId}/parsingRules`,
      method: 'post',
      data: emailConnectorParsingRule,
    })
  }

  getSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRulesById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters<EmailConnectorParsingRule> = {},
  ): Promise<EmailConnectorParsingRule> {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/${parentId}/parsingRules/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRulesById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/${parentId}/parsingRules/${id}`,
      method: 'delete',
    })
  }

  putSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRulesById(
    id: number,
    parentId: number,
    grandparentId: number,
    emailConnectorParsingRule: EmailConnectorParsingRule,
  ): Promise<EmailConnectorParsingRule> {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/${parentId}/parsingRules/${id}`,
      method: 'put',
      data: emailConnectorParsingRule,
    })
  }

  patchSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRulesById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<EmailConnectorParsingRule> {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/${parentId}/parsingRules/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRulesCount(
    parentId: number,
    grandparentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/${parentId}/parsingRules/count`,
      method: 'get',
      params,
    })
  }

  getSystemEmailConnectorsById(
    id: number,
    params: CommonParameters<EmailConnector> = {},
  ): Promise<EmailConnector> {
    return this.request({
      path: `/system/emailConnectors/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemEmailConnectorsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/emailConnectors/${id}`,
      method: 'delete',
    })
  }

  putSystemEmailConnectorsById(
    id: number,
    emailConnector: EmailConnector,
  ): Promise<EmailConnector> {
    return this.request({
      path: `/system/emailConnectors/${id}`,
      method: 'put',
      data: emailConnector,
    })
  }

  patchSystemEmailConnectorsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<EmailConnector> {
    return this.request({
      path: `/system/emailConnectors/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemEmailConnectorsByIdInfo(
    id: number,
    params: CommonParameters<EmailConnectorInfo> = {},
  ): Promise<EmailConnectorInfo> {
    return this.request({
      path: `/system/emailConnectors/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemEmailConnectorsByParentIdParsingStyles(
    parentId: number,
    params: CommonParameters<EmailConnectorParsingStyle> = {},
  ): Promise<Array<EmailConnectorParsingStyle>> {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles`,
      method: 'get',
      params,
    })
  }

  postSystemEmailConnectorsByParentIdParsingStyles(
    parentId: number,
    emailConnectorParsingStyle: EmailConnectorParsingStyle,
  ): Promise<EmailConnectorParsingStyle> {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles`,
      method: 'post',
      data: emailConnectorParsingStyle,
    })
  }

  getSystemEmailConnectorsByParentIdParsingStylesById(
    id: number,
    parentId: number,
    params: CommonParameters<EmailConnectorParsingStyle> = {},
  ): Promise<EmailConnectorParsingStyle> {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemEmailConnectorsByParentIdParsingStylesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles/${id}`,
      method: 'delete',
    })
  }

  putSystemEmailConnectorsByParentIdParsingStylesById(
    id: number,
    parentId: number,
    emailConnectorParsingStyle: EmailConnectorParsingStyle,
  ): Promise<EmailConnectorParsingStyle> {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles/${id}`,
      method: 'put',
      data: emailConnectorParsingStyle,
    })
  }

  patchSystemEmailConnectorsByParentIdParsingStylesById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<EmailConnectorParsingStyle> {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemEmailConnectorsByParentIdParsingStylesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles/count`,
      method: 'get',
      params,
    })
  }

  getSystemEmailConnectorsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/emailConnectors/count`,
      method: 'get',
      params,
    })
  }

  getSystemEmailConnectorsInfo(
    params: CommonParameters<EmailConnectorInfo> = {},
  ): Promise<Array<EmailConnectorInfo>> {
    return this.request({
      path: `/system/emailConnectors/info`,
      method: 'get',
      params,
    })
  }

  getSystemEmailConnectorsInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/emailConnectors/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemEmailExclusions(
    params: CommonParameters<EmailExclusion> = {},
  ): Promise<Array<EmailExclusion>> {
    return this.request({
      path: `/system/emailExclusions`,
      method: 'get',
      params,
    })
  }

  postSystemEmailExclusions(emailExclusion: EmailExclusion): Promise<EmailExclusion> {
    return this.request({
      path: `/system/emailExclusions`,
      method: 'post',
      data: emailExclusion,
    })
  }

  getSystemEmailExclusionsById(
    id: number,
    params: CommonParameters<EmailExclusion> = {},
  ): Promise<EmailExclusion> {
    return this.request({
      path: `/system/emailExclusions/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemEmailExclusionsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/emailExclusions/${id}`,
      method: 'delete',
    })
  }

  putSystemEmailExclusionsById(
    id: number,
    emailExclusion: EmailExclusion,
  ): Promise<EmailExclusion> {
    return this.request({
      path: `/system/emailExclusions/${id}`,
      method: 'put',
      data: emailExclusion,
    })
  }

  patchSystemEmailExclusionsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<EmailExclusion> {
    return this.request({
      path: `/system/emailExclusions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemEmailExclusionsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/emailExclusions/count`,
      method: 'get',
      params,
    })
  }

  getSystemEmailTokens(params: CommonParameters<EmailToken> = {}): Promise<Array<EmailToken>> {
    return this.request({
      path: `/system/emailTokens`,
      method: 'get',
      params,
    })
  }

  getSystemEmailTokensById(
    id: number,
    params: CommonParameters<EmailToken> = {},
  ): Promise<EmailToken> {
    return this.request({
      path: `/system/emailTokens/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemEmailTokensCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/emailTokens/count`,
      method: 'get',
      params,
    })
  }

  getSystemEPayConfigurations(
    params: CommonParameters<EPayConfiguration> = {},
  ): Promise<Array<EPayConfiguration>> {
    return this.request({
      path: `/system/ePayConfigurations`,
      method: 'get',
      params,
    })
  }

  postSystemEPayConfigurations(ePayConfiguration: EPayConfiguration): Promise<EPayConfiguration> {
    return this.request({
      path: `/system/ePayConfigurations`,
      method: 'post',
      data: ePayConfiguration,
    })
  }

  getSystemEPayConfigurationsById(
    id: number,
    params: CommonParameters<EPayConfiguration> = {},
  ): Promise<EPayConfiguration> {
    return this.request({
      path: `/system/ePayConfigurations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemEPayConfigurationsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/ePayConfigurations/${id}`,
      method: 'delete',
    })
  }

  putSystemEPayConfigurationsById(
    id: number,
    ePayConfiguration: EPayConfiguration,
  ): Promise<EPayConfiguration> {
    return this.request({
      path: `/system/ePayConfigurations/${id}`,
      method: 'put',
      data: ePayConfiguration,
    })
  }

  patchSystemEPayConfigurationsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<EPayConfiguration> {
    return this.request({
      path: `/system/ePayConfigurations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemEPayConfigurationsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/ePayConfigurations/count`,
      method: 'get',
      params,
    })
  }

  getSystemExperiments(params: CommonParameters<Experiment> = {}): Promise<Array<Experiment>> {
    return this.request({
      path: `/system/experiments`,
      method: 'get',
      params,
    })
  }

  getSystemExperimentsById(
    id: number,
    params: CommonParameters<Experiment> = {},
  ): Promise<Experiment> {
    return this.request({
      path: `/system/experiments/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemExperimentsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/experiments/count`,
      method: 'get',
      params,
    })
  }

  getSystemFileuploadsettings(
    params: CommonParameters<FileUploadSetting> = {},
  ): Promise<Array<FileUploadSetting>> {
    return this.request({
      path: `/system/fileuploadsettings/`,
      method: 'get',
      params,
    })
  }

  getSystemFileuploadsettingsById(
    id: number,
    params: CommonParameters<FileUploadSetting> = {},
  ): Promise<FileUploadSetting> {
    return this.request({
      path: `/system/fileuploadsettings/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemFileuploadsettingsById(
    id: number,
    companyTypeAssociation: FileUploadSetting,
  ): Promise<FileUploadSetting> {
    return this.request({
      path: `/system/fileuploadsettings/${id}`,
      method: 'put',
      data: companyTypeAssociation,
    })
  }

  patchSystemFileuploadsettingsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<FileUploadSetting> {
    return this.request({
      path: `/system/fileuploadsettings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemFileuploadsettingsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/fileuploadsettings/count`,
      method: 'get',
      params,
    })
  }

  getSystemGoogleemailsetup(
    params: CommonParameters<GoogleEmailSetup> = {},
  ): Promise<Array<GoogleEmailSetup>> {
    return this.request({
      path: `/system/googleemailsetup/`,
      method: 'get',
      params,
    })
  }

  postSystemGoogleemailsetup(GoogleEmailSetup: GoogleEmailSetup): Promise<GoogleEmailSetup> {
    return this.request({
      path: `/system/googleemailsetup/`,
      method: 'post',
      data: GoogleEmailSetup,
    })
  }

  getSystemGoogleemailsetupById(
    id: number,
    params: CommonParameters<GoogleEmailSetup> = {},
  ): Promise<GoogleEmailSetup> {
    return this.request({
      path: `/system/googleemailsetup/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemGoogleemailsetupById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/googleemailsetup/${id}`,
      method: 'delete',
    })
  }

  putSystemGoogleemailsetupById(
    id: number,
    companyTypeAssociation: GoogleEmailSetup,
  ): Promise<GoogleEmailSetup> {
    return this.request({
      path: `/system/googleemailsetup/${id}`,
      method: 'put',
      data: companyTypeAssociation,
    })
  }

  patchSystemGoogleemailsetupById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<GoogleEmailSetup> {
    return this.request({
      path: `/system/googleemailsetup/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postSystemGoogleemailsetupByIdTestConnection(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/system/googleemailsetup/${id}/testConnection`,
      method: 'post',
    })
  }

  getSystemGoogleemailsetupCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/googleemailsetup/count`,
      method: 'get',
      params,
    })
  }

  getSystemImaps(params: CommonParameters<Imap> = {}): Promise<Array<Imap>> {
    return this.request({
      path: `/system/imaps`,
      method: 'get',
      params,
    })
  }

  postSystemImaps(imap: Imap): Promise<Imap> {
    return this.request({
      path: `/system/imaps`,
      method: 'post',
      data: imap,
    })
  }

  getSystemImapsById(id: number, params: CommonParameters<Imap> = {}): Promise<Imap> {
    return this.request({
      path: `/system/imaps/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemImapsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/imaps/${id}`,
      method: 'delete',
    })
  }

  putSystemImapsById(id: number, imap: Imap): Promise<Imap> {
    return this.request({
      path: `/system/imaps/${id}`,
      method: 'put',
      data: imap,
    })
  }

  patchSystemImapsById(id: number, patchOperations: Array<PatchOperation>): Promise<Imap> {
    return this.request({
      path: `/system/imaps/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemImapsByIdInfo(id: number, params: CommonParameters<ImapInfo> = {}): Promise<ImapInfo> {
    return this.request({
      path: `/system/imaps/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemImapsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/imaps/count`,
      method: 'get',
      params,
    })
  }

  getSystemImapsInfo(params: CommonParameters<ImapInfo> = {}): Promise<Array<ImapInfo>> {
    return this.request({
      path: `/system/imaps/info`,
      method: 'get',
      params,
    })
  }

  getSystemImapsInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/imaps/info/count`,
      method: 'get',
      params,
    })
  }

  postSystemImportMassMaintenanceById(id: number): Promise<ImportMassMaintenance> {
    return this.request({
      path: `/system/importMassMaintenance/${id}`,
      method: 'post',
    })
  }

  getSystemInfo(params: CommonParameters<Info> = {}): Promise<Info> {
    return this.request({
      path: `/system/info`,
      method: 'get',
      params,
    })
  }

  getSystemInfoDepartmentlocations(
    params: CommonParameters<DepartmentLocationInfo> = {},
  ): Promise<Array<DepartmentLocationInfo>> {
    return this.request({
      path: `/system/info/departmentlocations`,
      method: 'get',
      params,
    })
  }

  getSystemInfoDepartmentlocationsById(
    id: number,
    params: CommonParameters<DepartmentLocationInfo> = {},
  ): Promise<DepartmentLocationInfo> {
    return this.request({
      path: `/system/info/departmentlocations/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemInfoDepartmentlocationsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/info/departmentlocations/count`,
      method: 'get',
      params,
    })
  }

  getSystemInfoDepartments(
    params: CommonParameters<DepartmentInfo> = {},
  ): Promise<Array<DepartmentInfo>> {
    return this.request({
      path: `/system/info/departments`,
      method: 'get',
      params,
    })
  }

  getSystemInfoDepartmentsById(
    id: number,
    params: CommonParameters<DepartmentInfo> = {},
  ): Promise<DepartmentInfo> {
    return this.request({
      path: `/system/info/departments/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemInfoDepartmentsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/info/departments/count`,
      method: 'get',
      params,
    })
  }

  getSystemInfoLinks(params: CommonParameters<LinkInfo> = {}): Promise<Array<LinkInfo>> {
    return this.request({
      path: `/system/info/links`,
      method: 'get',
      params,
    })
  }

  getSystemInfoLinksById(id: number, params: CommonParameters<LinkInfo> = {}): Promise<LinkInfo> {
    return this.request({
      path: `/system/info/links/${id}`,
      method: 'get',
      params,
    })
  }

  postSystemInfoLinksByIdResolveurl(
    id: number,
    resolveInfo: LinkResolveUrlInfo,
  ): Promise<LinkResolveUrlInfo> {
    return this.request({
      path: `/system/info/links/${id}/resolveurl`,
      method: 'post',
      data: resolveInfo,
    })
  }

  getSystemInfoLinksCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/info/links/count`,
      method: 'get',
      params,
    })
  }

  getSystemInfoLocales(params: CommonParameters<LocaleInfo> = {}): Promise<Array<LocaleInfo>> {
    return this.request({
      path: `/system/info/locales`,
      method: 'get',
      params,
    })
  }

  getSystemInfoLocalesById(
    id: number,
    params: CommonParameters<LocaleInfo> = {},
  ): Promise<LocaleInfo> {
    return this.request({
      path: `/system/info/locales/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemInfoLocalesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/info/locales/count`,
      method: 'get',
      params,
    })
  }

  getSystemInfoLocations(
    params: CommonParameters<LocationInfo> = {},
  ): Promise<Array<LocationInfo>> {
    return this.request({
      path: `/system/info/locations`,
      method: 'get',
      params,
    })
  }

  getSystemInfoLocationsById(
    id: number,
    params: CommonParameters<LocationInfo> = {},
  ): Promise<LocationInfo> {
    return this.request({
      path: `/system/info/locations/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemInfoLocationsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/info/locations/count`,
      method: 'get',
      params,
    })
  }

  getSystemInfoMembers(params: CommonParameters<MemberInfo> = {}): Promise<Array<MemberInfo>> {
    return this.request({
      path: `/system/info/members`,
      method: 'get',
      params,
    })
  }

  getSystemInfoMembersById(
    id: number,
    params: CommonParameters<MemberInfo> = {},
  ): Promise<MemberInfo> {
    return this.request({
      path: `/system/info/members/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemInfoMembersmemberIdentifierregextypes(
    params: CommonParameters<MemberInfo> = {},
  ): Promise<MemberInfo> {
    return this.request({
      path: `/system/info/members/{memberIdentifier:regex(^(types. |(`,
      method: 'get',
      params,
    })
  }

  getSystemInfoMembersCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/info/members/count`,
      method: 'get',
      params,
    })
  }

  getSystemInfoPersonas(params: CommonParameters<PersonasInfo> = {}): Promise<Array<PersonasInfo>> {
    return this.request({
      path: `/system/info/personas`,
      method: 'get',
      params,
    })
  }

  getSystemInfoPersonasById(
    id: number,
    params: CommonParameters<PersonasInfo> = {},
  ): Promise<PersonasInfo> {
    return this.request({
      path: `/system/info/personas/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemInfoPersonasCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/info/personas/count`,
      method: 'get',
      params,
    })
  }

  getSystemInfoStandardNotes(
    params: CommonParameters<StandardNoteInfo> = {},
  ): Promise<Array<StandardNoteInfo>> {
    return this.request({
      path: `/system/info/standardNotes`,
      method: 'get',
      params,
    })
  }

  getSystemInfoStandardNotesById(
    id: number,
    params: CommonParameters<StandardNoteInfo> = {},
  ): Promise<StandardNoteInfo> {
    return this.request({
      path: `/system/info/standardNotes/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemInfoStandardNotesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/info/standardNotes/count`,
      method: 'get',
      params,
    })
  }

  getSystemInOutBoards(params: CommonParameters<InOutBoard> = {}): Promise<Array<InOutBoard>> {
    return this.request({
      path: `/system/inOutBoards`,
      method: 'get',
      params,
    })
  }

  postSystemInOutBoards(inOutBoard: InOutBoard): Promise<InOutBoard> {
    return this.request({
      path: `/system/inOutBoards`,
      method: 'post',
      data: inOutBoard,
    })
  }

  getSystemInOutBoardsById(
    id: number,
    params: CommonParameters<InOutBoard> = {},
  ): Promise<InOutBoard> {
    return this.request({
      path: `/system/inOutBoards/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemInOutBoardsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/inOutBoards/${id}`,
      method: 'delete',
    })
  }

  putSystemInOutBoardsById(id: number, inOutBoard: InOutBoard): Promise<InOutBoard> {
    return this.request({
      path: `/system/inOutBoards/${id}`,
      method: 'put',
      data: inOutBoard,
    })
  }

  patchSystemInOutBoardsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<InOutBoard> {
    return this.request({
      path: `/system/inOutBoards/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemInOutBoardsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/inOutBoards/count`,
      method: 'get',
      params,
    })
  }

  getSystemInOutTypes(params: CommonParameters<InOutType> = {}): Promise<Array<InOutType>> {
    return this.request({
      path: `/system/inOutTypes`,
      method: 'get',
      params,
    })
  }

  postSystemInOutTypes(inOutType: InOutType): Promise<InOutType> {
    return this.request({
      path: `/system/inOutTypes`,
      method: 'post',
      data: inOutType,
    })
  }

  getSystemInOutTypesById(
    id: number,
    params: CommonParameters<InOutType> = {},
  ): Promise<InOutType> {
    return this.request({
      path: `/system/inOutTypes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemInOutTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/inOutTypes/${id}`,
      method: 'delete',
    })
  }

  putSystemInOutTypesById(id: number, inOutType: InOutType): Promise<InOutType> {
    return this.request({
      path: `/system/inOutTypes/${id}`,
      method: 'put',
      data: inOutType,
    })
  }

  patchSystemInOutTypesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<InOutType> {
    return this.request({
      path: `/system/inOutTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemInOutTypesByIdInfo(
    id: number,
    params: CommonParameters<InOutTypeInfo> = {},
  ): Promise<InOutTypeInfo> {
    return this.request({
      path: `/system/inOutTypes/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemInOutTypesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/inOutTypes/count`,
      method: 'get',
      params,
    })
  }

  getSystemInOutTypesCountInfo(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/inOutTypes/count/info`,
      method: 'get',
      params,
    })
  }

  getSystemInOutTypesInfo(
    params: CommonParameters<InOutTypeInfo> = {},
  ): Promise<Array<InOutTypeInfo>> {
    return this.request({
      path: `/system/inOutTypes/info`,
      method: 'get',
      params,
    })
  }

  getSystemIntegratorlogins(
    params: CommonParameters<IntegratorLogin> = {},
  ): Promise<Array<IntegratorLogin>> {
    return this.request({
      path: `/system/integratorlogins`,
      method: 'get',
      params,
    })
  }

  postSystemIntegratorlogins(integratorLogin: IntegratorLogin): Promise<IntegratorLogin> {
    return this.request({
      path: `/system/integratorlogins`,
      method: 'post',
      data: integratorLogin,
    })
  }

  getSystemIntegratorloginsById(
    id: number,
    params: CommonParameters<IntegratorLogin> = {},
  ): Promise<IntegratorLogin> {
    return this.request({
      path: `/system/integratorlogins/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemIntegratorloginsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/integratorlogins/${id}`,
      method: 'delete',
    })
  }

  putSystemIntegratorloginsById(
    id: number,
    integratorLogin: IntegratorLogin,
  ): Promise<IntegratorLogin> {
    return this.request({
      path: `/system/integratorlogins/${id}`,
      method: 'put',
      data: integratorLogin,
    })
  }

  patchSystemIntegratorloginsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<IntegratorLogin> {
    return this.request({
      path: `/system/integratorlogins/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemIntegratorloginsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/integratorlogins/count`,
      method: 'get',
      params,
    })
  }

  getSystemIntegratorTags(
    params: CommonParameters<IntegratorTag> = {},
  ): Promise<Array<IntegratorTag>> {
    return this.request({
      path: `/system/integratorTags`,
      method: 'get',
      params,
    })
  }

  postSystemIntegratorTags(tag: IntegratorTag): Promise<IntegratorTag> {
    return this.request({
      path: `/system/integratorTags`,
      method: 'post',
      data: tag,
    })
  }

  getSystemIntegratorTagsById(
    id: number,
    params: CommonParameters<IntegratorTag> = {},
  ): Promise<IntegratorTag> {
    return this.request({
      path: `/system/integratorTags/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemIntegratorTagsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/integratorTags/${id}`,
      method: 'delete',
    })
  }

  putSystemIntegratorTagsById(id: number, tag: IntegratorTag): Promise<IntegratorTag> {
    return this.request({
      path: `/system/integratorTags/${id}`,
      method: 'put',
      data: tag,
    })
  }

  patchSystemIntegratorTagsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<IntegratorTag> {
    return this.request({
      path: `/system/integratorTags/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemIntegratorTagsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/integratorTags/count`,
      method: 'get',
      params,
    })
  }

  getSystemKpiCategories(params: CommonParameters<KPICategory> = {}): Promise<Array<KPICategory>> {
    return this.request({
      path: `/system/kpiCategories`,
      method: 'get',
      params,
    })
  }

  getSystemKpiCategoriesById(
    id: number,
    params: CommonParameters<KPICategory> = {},
  ): Promise<KPICategory> {
    return this.request({
      path: `/system/kpiCategories/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemKpiCategoriesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/kpiCategories/count`,
      method: 'get',
      params,
    })
  }

  getSystemKpis(params: CommonParameters<KPI> = {}): Promise<Array<KPI>> {
    return this.request({
      path: `/system/kpis`,
      method: 'get',
      params,
    })
  }

  getSystemKpisById(id: number, params: CommonParameters<KPI> = {}): Promise<KPI> {
    return this.request({
      path: `/system/kpis/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemKpisCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/kpis/count`,
      method: 'get',
      params,
    })
  }

  getSystemLdapConfigurations(
    params: CommonParameters<LdapConfiguration> = {},
  ): Promise<Array<LdapConfiguration>> {
    return this.request({
      path: `/system/ldapConfigurations`,
      method: 'get',
      params,
    })
  }

  postSystemLdapConfigurations(ldapConfiguration: LdapConfiguration): Promise<LdapConfiguration> {
    return this.request({
      path: `/system/ldapConfigurations`,
      method: 'post',
      data: ldapConfiguration,
    })
  }

  getSystemLdapConfigurationsById(
    id: number,
    params: CommonParameters<LdapConfiguration> = {},
  ): Promise<LdapConfiguration> {
    return this.request({
      path: `/system/ldapConfigurations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemLdapConfigurationsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/ldapConfigurations/${id}`,
      method: 'delete',
    })
  }

  putSystemLdapConfigurationsById(
    id: number,
    ldapConfiguration: LdapConfiguration,
  ): Promise<LdapConfiguration> {
    return this.request({
      path: `/system/ldapConfigurations/${id}`,
      method: 'put',
      data: ldapConfiguration,
    })
  }

  patchSystemLdapConfigurationsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<LdapConfiguration> {
    return this.request({
      path: `/system/ldapConfigurations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemLdapConfigurationsByIdInfo(
    id: number,
    params: CommonParameters<LdapConfigurationInfo> = {},
  ): Promise<LdapConfigurationInfo> {
    return this.request({
      path: `/system/ldapConfigurations/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemLdapConfigurationsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/ldapConfigurations/count`,
      method: 'get',
      params,
    })
  }

  getSystemLdapConfigurationsInfo(
    params: CommonParameters<LdapConfigurationInfo> = {},
  ): Promise<Array<LdapConfigurationInfo>> {
    return this.request({
      path: `/system/ldapConfigurations/info`,
      method: 'get',
      params,
    })
  }

  getSystemLdapConfigurationsInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/ldapConfigurations/info/count`,
      method: 'get',
      params,
    })
  }

  postSystemLdapConfigurationsTestLink(
    server: LdapConfigurationTestLink,
  ): Promise<SuccessResponse> {
    return this.request({
      path: `/system/ldapConfigurations/testLink`,
      method: 'post',
      data: server,
    })
  }

  getSystemLinks(params: CommonParameters<Link> = {}): Promise<Array<Link>> {
    return this.request({
      path: `/system/links`,
      method: 'get',
      params,
    })
  }

  postSystemLinks(link: Link): Promise<Link> {
    return this.request({
      path: `/system/links`,
      method: 'post',
      data: link,
    })
  }

  getSystemLinksById(id: number, params: CommonParameters<Link> = {}): Promise<Link> {
    return this.request({
      path: `/system/links/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemLinksById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/links/${id}`,
      method: 'delete',
    })
  }

  putSystemLinksById(id: number, link: Link): Promise<Link> {
    return this.request({
      path: `/system/links/${id}`,
      method: 'put',
      data: link,
    })
  }

  patchSystemLinksById(id: number, patchOperations: Array<PatchOperation>): Promise<Link> {
    return this.request({
      path: `/system/links/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemLinksCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/links/count`,
      method: 'get',
      params,
    })
  }

  getSystemLocations(params: CommonParameters<Location> = {}): Promise<Array<Location>> {
    return this.request({
      path: `/system/locations`,
      method: 'get',
      params,
    })
  }

  postSystemLocations(location: Location): Promise<Location> {
    return this.request({
      path: `/system/locations`,
      method: 'post',
      data: location,
    })
  }

  getSystemLocationsById(id: number, params: CommonParameters<Location> = {}): Promise<Location> {
    return this.request({
      path: `/system/locations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemLocationsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/locations/${id}`,
      method: 'delete',
    })
  }

  putSystemLocationsById(id: number, location: Location): Promise<Location> {
    return this.request({
      path: `/system/locations/${id}`,
      method: 'put',
      data: location,
    })
  }

  patchSystemLocationsById(id: number, patchOperations: Array<PatchOperation>): Promise<Location> {
    return this.request({
      path: `/system/locations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemLocationsByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/system/locations/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getSystemLocationsByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/system/locations/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getSystemLocationsByParentIdDepartments(
    parentId: number,
    params: CommonParameters<LocationDepartment> = {},
  ): Promise<Array<LocationDepartment>> {
    return this.request({
      path: `/system/locations/${parentId}/departments`,
      method: 'get',
      params,
    })
  }

  getSystemLocationsByParentIdDepartmentsById(
    id: number,
    parentId: number,
    params: CommonParameters<LocationDepartment> = {},
  ): Promise<LocationDepartment> {
    return this.request({
      path: `/system/locations/${parentId}/departments/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemLocationsByParentIdDepartmentsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/locations/${parentId}/departments/count`,
      method: 'get',
      params,
    })
  }

  getSystemLocationsByParentIdWorkRoles(
    parentId: number,
    params: CommonParameters<LocationWorkRole> = {},
  ): Promise<Array<LocationWorkRole>> {
    return this.request({
      path: `/system/locations/${parentId}/workRoles`,
      method: 'get',
      params,
    })
  }

  getSystemLocationsByParentIdWorkRolesById(
    id: number,
    parentId: number,
    params: CommonParameters<LocationWorkRole> = {},
  ): Promise<LocationWorkRole> {
    return this.request({
      path: `/system/locations/${parentId}/workRoles/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemLocationsByParentIdWorkRolesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/locations/${parentId}/workRoles/count`,
      method: 'get',
      params,
    })
  }

  getSystemLocationsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/locations/count`,
      method: 'get',
      params,
    })
  }

  getSystemM365contactsyncByIdInfo(
    id: number,
    params: CommonParameters<M365ContactSyncInfo> = {},
  ): Promise<M365ContactSyncInfo> {
    return this.request({
      path: `/system/m365contactsync/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemM365contactsyncInfo(
    params: CommonParameters<M365ContactSyncInfo> = {},
  ): Promise<Array<M365ContactSyncInfo>> {
    return this.request({
      path: `/system/m365contactsync/info`,
      method: 'get',
      params,
    })
  }

  getSystemM365contactsyncInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/m365contactsync/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemManagementNetworkSecurities(
    params: CommonParameters<ManagementNetworkSecurity> = {},
  ): Promise<Array<ManagementNetworkSecurity>> {
    return this.request({
      path: `/system/managementNetworkSecurities`,
      method: 'get',
      params,
    })
  }

  postSystemManagementNetworkSecurities(
    managementNetworkSecurity: ManagementNetworkSecurity,
  ): Promise<ManagementNetworkSecurity> {
    return this.request({
      path: `/system/managementNetworkSecurities`,
      method: 'post',
      data: managementNetworkSecurity,
    })
  }

  getSystemManagementNetworkSecuritiesById(
    id: number,
    params: CommonParameters<ManagementNetworkSecurity> = {},
  ): Promise<ManagementNetworkSecurity> {
    return this.request({
      path: `/system/managementNetworkSecurities/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemManagementNetworkSecuritiesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/managementNetworkSecurities/${id}`,
      method: 'delete',
    })
  }

  putSystemManagementNetworkSecuritiesById(
    id: number,
    managementNetworkSecurity: ManagementNetworkSecurity,
  ): Promise<ManagementNetworkSecurity> {
    return this.request({
      path: `/system/managementNetworkSecurities/${id}`,
      method: 'put',
      data: managementNetworkSecurity,
    })
  }

  patchSystemManagementNetworkSecuritiesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ManagementNetworkSecurity> {
    return this.request({
      path: `/system/managementNetworkSecurities/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemManagementNetworkSecuritiesByIdTestCredentials(
    id: number,
    params: CommonParameters<SuccessResponse> = {},
  ): Promise<SuccessResponse> {
    return this.request({
      path: `/system/managementNetworkSecurities/${id}/testCredentials`,
      method: 'get',
      params,
    })
  }

  getSystemManagementNetworkSecuritiesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/managementNetworkSecurities/count`,
      method: 'get',
      params,
    })
  }

  getSystemMarketplaceimportGetdefinitionById(
    id: number,
    params: CommonParameters<MarketplaceImport> = {},
  ): Promise<MarketplaceImport> {
    return this.request({
      path: `/system/marketplaceimport/getdefinition/${id}`,
      method: 'get',
      params,
    })
  }

  postSystemMarketplaceimportImport(
    marketplaceImport: MarketplaceImport,
  ): Promise<MarketplaceImport> {
    return this.request({
      path: `/system/marketplaceimport/import`,
      method: 'post',
      data: marketplaceImport,
    })
  }

  getSystemMembers(params: CommonParameters<Member> = {}): Promise<Array<Member>> {
    return this.request({
      path: `/system/members`,
      method: 'get',
      params,
    })
  }

  postSystemMembers(member: Member): Promise<Member> {
    return this.request({
      path: `/system/members`,
      method: 'post',
      data: member,
    })
  }

  getSystemMembersById(id: number, params: CommonParameters<Member> = {}): Promise<Member> {
    return this.request({
      path: `/system/members/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemMembersById(id: number, member: Member): Promise<Member> {
    return this.request({
      path: `/system/members/${id}`,
      method: 'put',
      data: member,
    })
  }

  patchSystemMembersById(id: number, patchOperations: Array<PatchOperation>): Promise<Member> {
    return this.request({
      path: `/system/members/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postSystemMembersByIdDeactivate(
    id: number,
    item: MemberDeactivation,
  ): Promise<MemberDeactivation> {
    return this.request({
      path: `/system/members/${id}/deactivate`,
      method: 'post',
      data: item,
    })
  }

  getSystemMembersByIdImage(
    id: number,
    params: CommonParameters<OctetStreamResponse> = {},
  ): Promise<OctetStreamResponse> {
    return this.request({
      path: `/system/members/${id}/image`,
      method: 'get',
      params,
    })
  }

  postSystemMembersByIdLinkSsoUser(id: number, item: MemberLinkSsoUser): Promise<SuccessResponse> {
    return this.request({
      path: `/system/members/${id}/linkSsoUser`,
      method: 'post',
      data: item,
    })
  }

  postSystemMembersByIdSubmit(id: number, item: MemberSsoToken): Promise<SuccessResponse> {
    return this.request({
      path: `/system/members/${id}/submit`,
      method: 'post',
      data: item,
    })
  }

  postSystemMembersByIdUnlinkSsoUser(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/system/members/${id}/unlinkSsoUser`,
      method: 'post',
    })
  }

  deleteSystemMembersByIdUnusedTimeSheets(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/members/${id}/unusedTimeSheets`,
      method: 'delete',
    })
  }

  getSystemMembersByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/system/members/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getSystemMembersByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/system/members/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getSystemMembersmemberIdentifierregextypes(
    params: CommonParameters<Member> = {},
  ): Promise<Member> {
    return this.request({
      path: `/system/members/{memberIdentifier:regex(^(types. |(`,
      method: 'get',
      params,
    })
  }

  postSystemMembersByMemberIdentifierTokens(memberIdentifier: string): Promise<Token> {
    return this.request({
      path: `/system/members/${memberIdentifier}/tokens`,
      method: 'post',
      headers: { 'x-cw-usertype': 'member' },
    })
  }

  getSystemMembersByParentIdAccruals(
    parentId: number,
    params: CommonParameters<MemberAccrual> = {},
  ): Promise<Array<MemberAccrual>> {
    return this.request({
      path: `/system/members/${parentId}/accruals`,
      method: 'get',
      params,
    })
  }

  postSystemMembersByParentIdAccruals(
    parentId: number,
    memberAccrual: MemberAccrual,
  ): Promise<MemberAccrual> {
    return this.request({
      path: `/system/members/${parentId}/accruals`,
      method: 'post',
      data: memberAccrual,
    })
  }

  getSystemMembersByParentIdAccrualsById(
    id: number,
    parentId: number,
    params: CommonParameters<MemberAccrual> = {},
  ): Promise<MemberAccrual> {
    return this.request({
      path: `/system/members/${parentId}/accruals/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMembersByParentIdAccrualsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/members/${parentId}/accruals/${id}`,
      method: 'delete',
    })
  }

  putSystemMembersByParentIdAccrualsById(
    id: number,
    parentId: number,
    memberAccrual: MemberAccrual,
  ): Promise<MemberAccrual> {
    return this.request({
      path: `/system/members/${parentId}/accruals/${id}`,
      method: 'put',
      data: memberAccrual,
    })
  }

  patchSystemMembersByParentIdAccrualsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberAccrual> {
    return this.request({
      path: `/system/members/${parentId}/accruals/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMembersByParentIdAccrualsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/members/${parentId}/accruals/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersByParentIdCertifications(
    parentId: number,
    params: CommonParameters<MemberCertification> = {},
  ): Promise<Array<MemberCertification>> {
    return this.request({
      path: `/system/members/${parentId}/certifications`,
      method: 'get',
      params,
    })
  }

  postSystemMembersByParentIdCertifications(
    parentId: number,
    memberCertification: MemberCertification,
  ): Promise<MemberCertification> {
    return this.request({
      path: `/system/members/${parentId}/certifications`,
      method: 'post',
      data: memberCertification,
    })
  }

  getSystemMembersByParentIdCertificationsById(
    id: number,
    parentId: number,
    params: CommonParameters<MemberCertification> = {},
  ): Promise<MemberCertification> {
    return this.request({
      path: `/system/members/${parentId}/certifications/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMembersByParentIdCertificationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/members/${parentId}/certifications/${id}`,
      method: 'delete',
    })
  }

  putSystemMembersByParentIdCertificationsById(
    id: number,
    parentId: number,
    memberCertification: MemberCertification,
  ): Promise<MemberCertification> {
    return this.request({
      path: `/system/members/${parentId}/certifications/${id}`,
      method: 'put',
      data: memberCertification,
    })
  }

  patchSystemMembersByParentIdCertificationsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberCertification> {
    return this.request({
      path: `/system/members/${parentId}/certifications/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMembersByParentIdCertificationsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/members/${parentId}/certifications/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersByParentIdDelegations(
    parentId: number,
    params: CommonParameters<MemberDelegation> = {},
  ): Promise<Array<MemberDelegation>> {
    return this.request({
      path: `/system/members/${parentId}/delegations`,
      method: 'get',
      params,
    })
  }

  postSystemMembersByParentIdDelegations(
    parentId: number,
    memberDelegation: MemberDelegation,
  ): Promise<MemberDelegation> {
    return this.request({
      path: `/system/members/${parentId}/delegations`,
      method: 'post',
      data: memberDelegation,
    })
  }

  getSystemMembersByParentIdDelegationsById(
    id: number,
    parentId: number,
    params: CommonParameters<MemberDelegation> = {},
  ): Promise<MemberDelegation> {
    return this.request({
      path: `/system/members/${parentId}/delegations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMembersByParentIdDelegationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/members/${parentId}/delegations/${id}`,
      method: 'delete',
    })
  }

  putSystemMembersByParentIdDelegationsById(
    id: number,
    parentId: number,
    memberDelegation: MemberDelegation,
  ): Promise<MemberDelegation> {
    return this.request({
      path: `/system/members/${parentId}/delegations/${id}`,
      method: 'put',
      data: memberDelegation,
    })
  }

  patchSystemMembersByParentIdDelegationsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberDelegation> {
    return this.request({
      path: `/system/members/${parentId}/delegations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMembersByParentIdDelegationsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/members/${parentId}/delegations/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersByParentIdManagedDeviceAccounts(
    parentId: number,
    params: CommonParameters<ManagedDeviceAccount> = {},
  ): Promise<Array<ManagedDeviceAccount>> {
    return this.request({
      path: `/system/members/${parentId}/managedDeviceAccounts`,
      method: 'get',
      params,
    })
  }

  deleteSystemMembersByParentIdManagedDeviceAccountsBulk(
    parentId: number,
    managedDeviceAccounts: IdCollection,
  ): Promise<BulkResult> {
    return this.request({
      path: `/system/members/${parentId}/managedDeviceAccounts/bulk`,
      method: 'delete',
      data: managedDeviceAccounts,
    })
  }

  putSystemMembersByParentIdManagedDeviceAccountsBulk(
    parentId: number,
    managedDeviceAccounts: Array<ManagedDeviceAccount>,
  ): Promise<BulkResult> {
    return this.request({
      path: `/system/members/${parentId}/managedDeviceAccounts/bulk`,
      method: 'put',
      data: managedDeviceAccounts,
    })
  }

  getSystemMembersByParentIdMycertifications(
    parentId: number,
    params: CommonParameters<MemberCertification> = {},
  ): Promise<Array<MemberCertification>> {
    return this.request({
      path: `/system/members/${parentId}/mycertifications`,
      method: 'get',
      params,
    })
  }

  postSystemMembersByParentIdMycertifications(
    parentId: number,
    memberCertification: MemberCertification,
  ): Promise<MemberCertification> {
    return this.request({
      path: `/system/members/${parentId}/mycertifications`,
      method: 'post',
      data: memberCertification,
    })
  }

  getSystemMembersByParentIdMycertificationsById(
    id: number,
    parentId: number,
    params: CommonParameters<MemberCertification> = {},
  ): Promise<MemberCertification> {
    return this.request({
      path: `/system/members/${parentId}/mycertifications/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMembersByParentIdMycertificationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/members/${parentId}/mycertifications/${id}`,
      method: 'delete',
    })
  }

  putSystemMembersByParentIdMycertificationsById(
    id: number,
    parentId: number,
    memberCertification: MemberCertification,
  ): Promise<MemberCertification> {
    return this.request({
      path: `/system/members/${parentId}/mycertifications/${id}`,
      method: 'put',
      data: memberCertification,
    })
  }

  patchSystemMembersByParentIdMycertificationsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberCertification> {
    return this.request({
      path: `/system/members/${parentId}/mycertifications/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMembersByParentIdMycertificationsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/members/${parentId}/mycertifications/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersByParentIdNotificationSettings(
    parentId: number,
    params: CommonParameters<MemberNotificationSetting> = {},
  ): Promise<Array<MemberNotificationSetting>> {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings`,
      method: 'get',
      params,
    })
  }

  postSystemMembersByParentIdNotificationSettings(
    parentId: number,
    memberNotificationSetting: MemberNotificationSetting,
  ): Promise<MemberNotificationSetting> {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings`,
      method: 'post',
      data: memberNotificationSetting,
    })
  }

  getSystemMembersByParentIdNotificationSettingsById(
    id: number,
    parentId: number,
    params: CommonParameters<MemberNotificationSetting> = {},
  ): Promise<MemberNotificationSetting> {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMembersByParentIdNotificationSettingsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings/${id}`,
      method: 'delete',
    })
  }

  putSystemMembersByParentIdNotificationSettingsById(
    id: number,
    parentId: number,
    memberNotificationSetting: MemberNotificationSetting,
  ): Promise<MemberNotificationSetting> {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings/${id}`,
      method: 'put',
      data: memberNotificationSetting,
    })
  }

  patchSystemMembersByParentIdNotificationSettingsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberNotificationSetting> {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMembersByParentIdNotificationSettingsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersByParentIdPersonas(
    parentId: number,
    params: CommonParameters<MemberPersona> = {},
  ): Promise<Array<MemberPersona>> {
    return this.request({
      path: `/system/members/${parentId}/personas`,
      method: 'get',
      params,
    })
  }

  postSystemMembersByParentIdPersonas(
    parentId: number,
    memberPersona: MemberPersona,
  ): Promise<MemberPersona> {
    return this.request({
      path: `/system/members/${parentId}/personas`,
      method: 'post',
      data: memberPersona,
    })
  }

  getSystemMembersByParentIdPersonasById(
    id: number,
    parentId: number,
    params: CommonParameters<MemberPersona> = {},
  ): Promise<MemberPersona> {
    return this.request({
      path: `/system/members/${parentId}/personas/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMembersByParentIdPersonasById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/members/${parentId}/personas/${id}`,
      method: 'delete',
    })
  }

  putSystemMembersByParentIdPersonasById(
    id: number,
    parentId: number,
    memberPersona: MemberPersona,
  ): Promise<MemberPersona> {
    return this.request({
      path: `/system/members/${parentId}/personas/${id}`,
      method: 'put',
      data: memberPersona,
    })
  }

  patchSystemMembersByParentIdPersonasById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberPersona> {
    return this.request({
      path: `/system/members/${parentId}/personas/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMembersByParentIdPersonasCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/members/${parentId}/personas/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersByParentIdSkills(
    parentId: number,
    params: CommonParameters<MemberSkill> = {},
  ): Promise<Array<MemberSkill>> {
    return this.request({
      path: `/system/members/${parentId}/skills`,
      method: 'get',
      params,
    })
  }

  postSystemMembersByParentIdSkills(
    parentId: number,
    memberSkill: MemberSkill,
  ): Promise<MemberSkill> {
    return this.request({
      path: `/system/members/${parentId}/skills`,
      method: 'post',
      data: memberSkill,
    })
  }

  getSystemMembersByParentIdSkillsById(
    id: number,
    parentId: number,
    params: CommonParameters<MemberSkill> = {},
  ): Promise<MemberSkill> {
    return this.request({
      path: `/system/members/${parentId}/skills/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMembersByParentIdSkillsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/members/${parentId}/skills/${id}`,
      method: 'delete',
    })
  }

  putSystemMembersByParentIdSkillsById(
    id: number,
    parentId: number,
    memberSkill: MemberSkill,
  ): Promise<MemberSkill> {
    return this.request({
      path: `/system/members/${parentId}/skills/${id}`,
      method: 'put',
      data: memberSkill,
    })
  }

  patchSystemMembersByParentIdSkillsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberSkill> {
    return this.request({
      path: `/system/members/${parentId}/skills/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMembersByParentIdSkillsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/members/${parentId}/skills/count`,
      method: 'get',
      params,
    })
  }

  postSystemMembersBySsoidDeactivateIamMember(ssoid: string): Promise<NoContentResponse> {
    return this.request({
      path: `/system/members/${ssoid}/deactivateIamMember`,
      method: 'post',
    })
  }

  getSystemMembersCalendarsync(
    params: CommonParameters<MemberForCalSync> = {},
  ): Promise<Array<MemberForCalSync>> {
    return this.request({
      path: `/system/members/calendarsync`,
      method: 'get',
      params,
    })
  }

  getSystemMembersCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/members/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersTypes(params: CommonParameters<MemberType> = {}): Promise<Array<MemberType>> {
    return this.request({
      path: `/system/members/types`,
      method: 'get',
      params,
    })
  }

  postSystemMembersTypes(type: MemberType): Promise<MemberType> {
    return this.request({
      path: `/system/members/types`,
      method: 'post',
      data: type,
    })
  }

  getSystemMembersTypesById(
    id: number,
    params: CommonParameters<MemberType> = {},
  ): Promise<MemberType> {
    return this.request({
      path: `/system/members/types/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMembersTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/members/types/${id}`,
      method: 'delete',
    })
  }

  putSystemMembersTypesById(id: number, type: MemberType): Promise<MemberType> {
    return this.request({
      path: `/system/members/types/${id}`,
      method: 'put',
      data: type,
    })
  }

  patchSystemMembersTypesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberType> {
    return this.request({
      path: `/system/members/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMembersTypesByIdInfo(
    id: number,
    params: CommonParameters<MemberTypeInfo> = {},
  ): Promise<MemberTypeInfo> {
    return this.request({
      path: `/system/members/types/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemMembersTypesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/members/types/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersTypesInfo(
    params: CommonParameters<MemberTypeInfo> = {},
  ): Promise<Array<MemberTypeInfo>> {
    return this.request({
      path: `/system/members/types/info`,
      method: 'get',
      params,
    })
  }

  getSystemMembersTypesInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/members/types/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersWithSso(params: CommonParameters<Member> = {}): Promise<Array<Member>> {
    return this.request({
      path: `/system/members/withSso`,
      method: 'get',
      params,
    })
  }

  getSystemMembertemplates(
    params: CommonParameters<MemberTemplate> = {},
  ): Promise<Array<MemberTemplate>> {
    return this.request({
      path: `/system/membertemplates/`,
      method: 'get',
      params,
    })
  }

  postSystemMembertemplates(MemberTemplate: MemberTemplate): Promise<MemberTemplate> {
    return this.request({
      path: `/system/membertemplates/`,
      method: 'post',
      data: MemberTemplate,
    })
  }

  getSystemMembertemplatesById(
    id: number,
    params: CommonParameters<MemberTemplate> = {},
  ): Promise<MemberTemplate> {
    return this.request({
      path: `/system/membertemplates/${id}`,
      method: 'get',
      params,
    })
  }

  patchSystemMembertemplatesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberTemplate> {
    return this.request({
      path: `/system/membertemplates/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMembertemplatesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/membertemplates/count`,
      method: 'get',
      params,
    })
  }

  getSystemMenuentries(params: CommonParameters<MenuEntry> = {}): Promise<Array<MenuEntry>> {
    return this.request({
      path: `/system/menuentries`,
      method: 'get',
      params,
    })
  }

  postSystemMenuentries(menuEntry: MenuEntry): Promise<MenuEntry> {
    return this.request({
      path: `/system/menuentries`,
      method: 'post',
      data: menuEntry,
    })
  }

  getSystemMenuentriesById(
    id: number,
    params: CommonParameters<MenuEntry> = {},
  ): Promise<MenuEntry> {
    return this.request({
      path: `/system/menuentries/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMenuentriesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/menuentries/${id}`,
      method: 'delete',
    })
  }

  putSystemMenuentriesById(id: number, menuEntry: MenuEntry): Promise<MenuEntry> {
    return this.request({
      path: `/system/menuentries/${id}`,
      method: 'put',
      data: menuEntry,
    })
  }

  patchSystemMenuentriesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MenuEntry> {
    return this.request({
      path: `/system/menuentries/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMenuentriesByIdImage(
    id: number,
    params: CommonParameters<OctetStreamResponse> = {},
  ): Promise<OctetStreamResponse> {
    return this.request({
      path: `/system/menuentries/${id}/image`,
      method: 'get',
      params,
    })
  }

  postSystemMenuentriesByIdImage(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/menuentries/${id}/image`,
      method: 'post',
    })
  }

  getSystemMenuEntriesByParentIdLocations(
    parentId: number,
    params: CommonParameters<MenuEntryLocation> = {},
  ): Promise<Array<MenuEntryLocation>> {
    return this.request({
      path: `/system/menuEntries/${parentId}/locations`,
      method: 'get',
      params,
    })
  }

  postSystemMenuEntriesByParentIdLocations(
    parentId: number,
    menuEntryLocation: MenuEntryLocation,
  ): Promise<MenuEntryLocation> {
    return this.request({
      path: `/system/menuEntries/${parentId}/locations`,
      method: 'post',
      data: menuEntryLocation,
    })
  }

  getSystemMenuEntriesByParentIdLocationsById(
    id: number,
    parentId: number,
    params: CommonParameters<MenuEntryLocation> = {},
  ): Promise<MenuEntryLocation> {
    return this.request({
      path: `/system/menuEntries/${parentId}/locations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMenuEntriesByParentIdLocationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/menuEntries/${parentId}/locations/${id}`,
      method: 'delete',
    })
  }

  getSystemMenuEntriesByParentIdLocationsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/menuEntries/${parentId}/locations/count`,
      method: 'get',
      params,
    })
  }

  getSystemMenuentriesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/menuentries/count`,
      method: 'get',
      params,
    })
  }

  getSystemMyAccountById(id: number, params: CommonParameters<MyAccount> = {}): Promise<MyAccount> {
    return this.request({
      path: `/system/myAccount/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemMyAccountById(id: number, myAccount: MyAccount): Promise<MyAccount> {
    return this.request({
      path: `/system/myAccount/${id}`,
      method: 'put',
      data: myAccount,
    })
  }

  patchSystemMyAccountById(id: number, patchOperations: Array<PatchOperation>): Promise<MyAccount> {
    return this.request({
      path: `/system/myAccount/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMyAccountByParentIdDelegations(
    parentId: number,
    params: CommonParameters<MemberDelegation> = {},
  ): Promise<Array<MemberDelegation>> {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations`,
      method: 'get',
      params,
    })
  }

  postSystemMyAccountByParentIdDelegations(
    parentId: number,
    memberDelegation: MemberDelegation,
  ): Promise<MemberDelegation> {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations`,
      method: 'post',
      data: memberDelegation,
    })
  }

  getSystemMyAccountByParentIdDelegationsById(
    id: number,
    parentId: number,
    params: CommonParameters<MemberDelegation> = {},
  ): Promise<MemberDelegation> {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMyAccountByParentIdDelegationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations/${id}`,
      method: 'delete',
    })
  }

  putSystemMyAccountByParentIdDelegationsById(
    id: number,
    parentId: number,
    memberDelegation: MemberDelegation,
  ): Promise<MemberDelegation> {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations/${id}`,
      method: 'put',
      data: memberDelegation,
    })
  }

  patchSystemMyAccountByParentIdDelegationsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberDelegation> {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMyAccountByParentIdDelegationsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations/count`,
      method: 'get',
      params,
    })
  }

  getSystemMyAccountByParentIdSkills(
    parentId: number,
    params: CommonParameters<MemberSkill> = {},
  ): Promise<Array<MemberSkill>> {
    return this.request({
      path: `/system/myAccount/${parentId}/skills`,
      method: 'get',
      params,
    })
  }

  postSystemMyAccountByParentIdSkills(
    parentId: number,
    memberSkill: MemberSkill,
  ): Promise<MemberSkill> {
    return this.request({
      path: `/system/myAccount/${parentId}/skills`,
      method: 'post',
      data: memberSkill,
    })
  }

  getSystemMyAccountByParentIdSkillsById(
    id: number,
    parentId: number,
    params: CommonParameters<MemberSkill> = {},
  ): Promise<MemberSkill> {
    return this.request({
      path: `/system/myAccount/${parentId}/skills/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMyAccountByParentIdSkillsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/myAccount/${parentId}/skills/${id}`,
      method: 'delete',
    })
  }

  putSystemMyAccountByParentIdSkillsById(
    id: number,
    parentId: number,
    memberSkill: MemberSkill,
  ): Promise<MemberSkill> {
    return this.request({
      path: `/system/myAccount/${parentId}/skills/${id}`,
      method: 'put',
      data: memberSkill,
    })
  }

  patchSystemMyAccountByParentIdSkillsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberSkill> {
    return this.request({
      path: `/system/myAccount/${parentId}/skills/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMyAccountByParentIdSkillsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/myAccount/${parentId}/skills/count`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCorporateStructure(
    params: CommonParameters<CorporateStructure> = {},
  ): Promise<Array<CorporateStructure>> {
    return this.request({
      path: `/system/myCompany/corporateStructure`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCorporateStructureById(
    id: number,
    params: CommonParameters<CorporateStructure> = {},
  ): Promise<CorporateStructure> {
    return this.request({
      path: `/system/myCompany/corporateStructure/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemMyCompanyCorporateStructureById(
    id: number,
    corporateStructure: CorporateStructure,
  ): Promise<CorporateStructure> {
    return this.request({
      path: `/system/myCompany/corporateStructure/${id}`,
      method: 'put',
      data: corporateStructure,
    })
  }

  patchSystemMyCompanyCorporateStructureById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<CorporateStructure> {
    return this.request({
      path: `/system/myCompany/corporateStructure/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMyCompanyCorporateStructureByIdInfo(
    id: number,
    params: CommonParameters<CorporateStructureInfo> = {},
  ): Promise<CorporateStructureInfo> {
    return this.request({
      path: `/system/myCompany/corporateStructure/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCorporateStructureCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/myCompany/corporateStructure/count`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCorporateStructureInfo(
    params: CommonParameters<CorporateStructureInfo> = {},
  ): Promise<Array<CorporateStructureInfo>> {
    return this.request({
      path: `/system/myCompany/corporateStructure/info`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCorporateStructureInfoCount(
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/myCompany/corporateStructure/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCorporateStructureLevels(
    params: CommonParameters<CorporateStructureLevel> = {},
  ): Promise<Array<CorporateStructureLevel>> {
    return this.request({
      path: `/system/myCompany/corporateStructureLevels`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCorporateStructureLevelsById(
    id: number,
    params: CommonParameters<CorporateStructureLevel> = {},
  ): Promise<CorporateStructureLevel> {
    return this.request({
      path: `/system/myCompany/corporateStructureLevels/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCorporateStructureLevelsCount(
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/myCompany/corporateStructureLevels/count`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCrm(params: CommonParameters<Crm> = {}): Promise<Array<Crm>> {
    return this.request({
      path: `/system/myCompany/crm`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCrmById(id: number, params: CommonParameters<Crm> = {}): Promise<Crm> {
    return this.request({
      path: `/system/myCompany/crm/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemMyCompanyCrmById(id: number, crm: Crm): Promise<Crm> {
    return this.request({
      path: `/system/myCompany/crm/${id}`,
      method: 'put',
      data: crm,
    })
  }

  patchSystemMyCompanyCrmById(id: number, patchOperations: Array<PatchOperation>): Promise<Crm> {
    return this.request({
      path: `/system/myCompany/crm/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMyCompanyCrmByIdInfo(
    id: number,
    params: CommonParameters<CrmInfo> = {},
  ): Promise<CrmInfo> {
    return this.request({
      path: `/system/myCompany/crm/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCrmCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/myCompany/crm/count`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCrmInfo(params: CommonParameters<CrmInfo> = {}): Promise<Array<CrmInfo>> {
    return this.request({
      path: `/system/myCompany/crm/info`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCrmInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/myCompany/crm/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemMycompanyDocuments(
    params: CommonParameters<DocumentSetup> = {},
  ): Promise<Array<DocumentSetup>> {
    return this.request({
      path: `/system/mycompany/documents`,
      method: 'get',
      params,
    })
  }

  getSystemMycompanyDocumentsById(
    id: number,
    params: CommonParameters<DocumentSetup> = {},
  ): Promise<DocumentSetup> {
    return this.request({
      path: `/system/mycompany/documents/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemMycompanyDocumentsById(id: number, document: DocumentSetup): Promise<DocumentSetup> {
    return this.request({
      path: `/system/mycompany/documents/${id}`,
      method: 'put',
      data: document,
    })
  }

  patchSystemMycompanyDocumentsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<DocumentSetup> {
    return this.request({
      path: `/system/mycompany/documents/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMycompanyInfoServices(
    params: CommonParameters<ServiceInfo> = {},
  ): Promise<Array<ServiceInfo>> {
    return this.request({
      path: `/system/mycompany/info/services`,
      method: 'get',
      params,
    })
  }

  getSystemMycompanyInfoServicesById(
    id: number,
    params: CommonParameters<ServiceInfo> = {},
  ): Promise<ServiceInfo> {
    return this.request({
      path: `/system/mycompany/info/services/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyOther(params: CommonParameters<Other> = {}): Promise<Array<Other>> {
    return this.request({
      path: `/system/myCompany/other`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyOtherById(id: number, params: CommonParameters<Other> = {}): Promise<Other> {
    return this.request({
      path: `/system/myCompany/other/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemMyCompanyOtherById(id: number, other: Other): Promise<Other> {
    return this.request({
      path: `/system/myCompany/other/${id}`,
      method: 'put',
      data: other,
    })
  }

  patchSystemMyCompanyOtherById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Other> {
    return this.request({
      path: `/system/myCompany/other/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMyCompanyOtherCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/myCompany/other/count`,
      method: 'get',
      params,
    })
  }

  getSystemMycompanyReportingServices(
    params: CommonParameters<ReportingService> = {},
  ): Promise<Array<ReportingService>> {
    return this.request({
      path: `/system/mycompany/reportingServices`,
      method: 'get',
      params,
    })
  }

  getSystemMycompanyReportingServicesById(
    id: number,
    params: CommonParameters<ReportingService> = {},
  ): Promise<ReportingService> {
    return this.request({
      path: `/system/mycompany/reportingServices/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemMycompanyReportingServicesById(
    id: number,
    service: ReportingService,
  ): Promise<ReportingService> {
    return this.request({
      path: `/system/mycompany/reportingServices/${id}`,
      method: 'put',
      data: service,
    })
  }

  patchSystemMycompanyReportingServicesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ReportingService> {
    return this.request({
      path: `/system/mycompany/reportingServices/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postSystemMycompanyReportingServicesByIdTestConnection(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/system/mycompany/reportingServices/${id}/testConnection`,
      method: 'post',
    })
  }

  getSystemMycompanyServices(params: CommonParameters<Service> = {}): Promise<Array<Service>> {
    return this.request({
      path: `/system/mycompany/services`,
      method: 'get',
      params,
    })
  }

  getSystemMycompanyServicesById(
    id: number,
    params: CommonParameters<Service> = {},
  ): Promise<Service> {
    return this.request({
      path: `/system/mycompany/services/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemMycompanyServicesById(id: number, service: Service): Promise<Service> {
    return this.request({
      path: `/system/mycompany/services/${id}`,
      method: 'put',
      data: service,
    })
  }

  patchSystemMycompanyServicesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Service> {
    return this.request({
      path: `/system/mycompany/services/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMyCompanyTimeExpense(
    params: CommonParameters<TimeExpense> = {},
  ): Promise<Array<TimeExpense>> {
    return this.request({
      path: `/system/myCompany/timeExpense`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyTimeExpenseById(
    id: number,
    params: CommonParameters<TimeExpense> = {},
  ): Promise<TimeExpense> {
    return this.request({
      path: `/system/myCompany/timeExpense/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemMyCompanyTimeExpenseById(id: number, timeExpense: TimeExpense): Promise<TimeExpense> {
    return this.request({
      path: `/system/myCompany/timeExpense/${id}`,
      method: 'put',
      data: timeExpense,
    })
  }

  patchSystemMyCompanyTimeExpenseById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TimeExpense> {
    return this.request({
      path: `/system/myCompany/timeExpense/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMyCompanyTimeExpenseCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/myCompany/timeExpense/count`,
      method: 'get',
      params,
    })
  }

  getSystemMyMembers(params: CommonParameters<MyMember> = {}): Promise<MyMember> {
    return this.request({
      path: `/system/myMembers`,
      method: 'get',
      params,
    })
  }

  getSystemMyMembersInfo(params: CommonParameters<MyMemberInfo> = {}): Promise<MyMemberInfo> {
    return this.request({
      path: `/system/myMembers/info`,
      method: 'get',
      params,
    })
  }

  getSystemMySecurity(params: CommonParameters<MySecurity> = {}): Promise<Array<MySecurity>> {
    return this.request({
      path: `/system/mySecurity`,
      method: 'get',
      params,
    })
  }

  getSystemMySecurityCustomizeItems(
    params: CommonParameters<MySecurityCustomizeItem> = {},
  ): Promise<Array<MySecurityCustomizeItem>> {
    return this.request({
      path: `/system/mySecurity/customizeItems/`,
      method: 'get',
      params,
    })
  }

  getSystemNotificationRecipients(
    params: CommonParameters<NotificationRecipient> = {},
  ): Promise<Array<NotificationRecipient>> {
    return this.request({
      path: `/system/notificationRecipients`,
      method: 'get',
      params,
    })
  }

  getSystemNotificationRecipientsById(
    id: number,
    params: CommonParameters<NotificationRecipient> = {},
  ): Promise<NotificationRecipient> {
    return this.request({
      path: `/system/notificationRecipients/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemNotificationRecipientsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/notificationRecipients/count`,
      method: 'get',
      params,
    })
  }

  getSystemOffice365ApplicationByIdInfo(
    id: number,
    params: CommonParameters<Office365EmailApplicationInfo> = {},
  ): Promise<Office365EmailApplicationInfo> {
    return this.request({
      path: `/system/office365/application/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemOffice365ApplicationInfo(
    params: CommonParameters<Office365EmailApplicationInfo> = {},
  ): Promise<Array<Office365EmailApplicationInfo>> {
    return this.request({
      path: `/system/office365/application/info`,
      method: 'get',
      params,
    })
  }

  getSystemOffice365ApplicationInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/office365/application/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemOffice365EmailSetups(
    params: CommonParameters<Office365EmailSetup> = {},
  ): Promise<Array<Office365EmailSetup>> {
    return this.request({
      path: `/system/office365/emailSetups`,
      method: 'get',
      params,
    })
  }

  postSystemOffice365EmailSetups(entity: Office365EmailSetup): Promise<Office365EmailSetup> {
    return this.request({
      path: `/system/office365/emailSetups`,
      method: 'post',
      data: entity,
    })
  }

  getSystemOffice365EmailSetupsById(
    id: number,
    params: CommonParameters<Office365EmailSetup> = {},
  ): Promise<Office365EmailSetup> {
    return this.request({
      path: `/system/office365/emailSetups/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemOffice365EmailSetupsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/office365/emailSetups/${id}`,
      method: 'delete',
    })
  }

  putSystemOffice365EmailSetupsById(
    id: number,
    entity: Office365EmailSetup,
  ): Promise<Office365EmailSetup> {
    return this.request({
      path: `/system/office365/emailSetups/${id}`,
      method: 'put',
      data: entity,
    })
  }

  patchSystemOffice365EmailSetupsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Office365EmailSetup> {
    return this.request({
      path: `/system/office365/emailSetups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postSystemOffice365EmailSetupsByIdAuthorize(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/system/office365/emailSetups/${id}/authorize`,
      method: 'post',
    })
  }

  getSystemOffice365EmailSetupsByIdGetEmails(
    id: number,
    params: CommonParameters<UserEmail> = {},
  ): Promise<Array<UserEmail>> {
    return this.request({
      path: `/system/office365/emailSetups/${id}/getEmails/`,
      method: 'get',
      params,
    })
  }

  postSystemOffice365EmailSetupsByIdTestConnection(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/system/office365/emailSetups/${id}/testConnection`,
      method: 'post',
    })
  }

  getSystemOffice365EmailSetupsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/office365/emailSetups/count`,
      method: 'get',
      params,
    })
  }

  getSystemOnPremiseSearchSetting(
    params: CommonParameters<OnPremiseSearchSetting> = {},
  ): Promise<Array<OnPremiseSearchSetting>> {
    return this.request({
      path: `/system/onPremiseSearchSetting/`,
      method: 'get',
      params,
    })
  }

  getSystemOnPremiseSearchSettingById(
    id: number,
    params: CommonParameters<OnPremiseSearchSetting> = {},
  ): Promise<OnPremiseSearchSetting> {
    return this.request({
      path: `/system/onPremiseSearchSetting/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemOnPremiseSearchSettingById(
    id: number,
    onPremiseSearchSetting: OnPremiseSearchSetting,
  ): Promise<OnPremiseSearchSetting> {
    return this.request({
      path: `/system/onPremiseSearchSetting/${id}`,
      method: 'put',
      data: onPremiseSearchSetting,
    })
  }

  patchSystemOnPremiseSearchSettingById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<OnPremiseSearchSetting> {
    return this.request({
      path: `/system/onPremiseSearchSetting/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemOnPremiseSearchSettingCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/onPremiseSearchSetting/count`,
      method: 'get',
      params,
    })
  }

  getSystemOsgradeweights(
    params: CommonParameters<OsGradeWeight> = {},
  ): Promise<Array<OsGradeWeight>> {
    return this.request({
      path: `/system/osgradeweights`,
      method: 'get',
      params,
    })
  }

  getSystemOsgradeweightsById(
    id: number,
    params: CommonParameters<OsGradeWeight> = {},
  ): Promise<OsGradeWeight> {
    return this.request({
      path: `/system/osgradeweights/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemOsgradeweightsById(id: number, osGradeWeight: OsGradeWeight): Promise<OsGradeWeight> {
    return this.request({
      path: `/system/osgradeweights/${id}`,
      method: 'put',
      data: osGradeWeight,
    })
  }

  patchSystemOsgradeweightsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<OsGradeWeight> {
    return this.request({
      path: `/system/osgradeweights/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemOsgradeweightsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/osgradeweights/count`,
      method: 'get',
      params,
    })
  }

  getSystemParsingTypes(params: CommonParameters<ParsingType> = {}): Promise<Array<ParsingType>> {
    return this.request({
      path: `/system/parsingTypes`,
      method: 'get',
      params,
    })
  }

  getSystemParsingTypesById(
    id: number,
    params: CommonParameters<ParsingType> = {},
  ): Promise<ParsingType> {
    return this.request({
      path: `/system/parsingTypes/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemParsingTypesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/parsingTypes/count`,
      method: 'get',
      params,
    })
  }

  getSystemParsingVariables(
    params: CommonParameters<ParsingVariable> = {},
  ): Promise<Array<ParsingVariable>> {
    return this.request({
      path: `/system/parsingVariables`,
      method: 'get',
      params,
    })
  }

  getSystemParsingVariablesById(
    id: number,
    params: CommonParameters<ParsingVariable> = {},
  ): Promise<ParsingVariable> {
    return this.request({
      path: `/system/parsingVariables/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemParsingVariablesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/parsingVariables/count`,
      method: 'get',
      params,
    })
  }

  getSystemPortalReports(
    params: CommonParameters<PortalReport> = {},
  ): Promise<Array<PortalReport>> {
    return this.request({
      path: `/system/portalReports`,
      method: 'get',
      params,
    })
  }

  postSystemPortalReports(portalReport: PortalReport): Promise<PortalReport> {
    return this.request({
      path: `/system/portalReports`,
      method: 'post',
      data: portalReport,
    })
  }

  getSystemPortalReportsById(
    id: number,
    params: CommonParameters<PortalReport> = {},
  ): Promise<PortalReport> {
    return this.request({
      path: `/system/portalReports/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemPortalReportsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/portalReports/${id}`,
      method: 'delete',
    })
  }

  putSystemPortalReportsById(id: number, portalReport: PortalReport): Promise<PortalReport> {
    return this.request({
      path: `/system/portalReports/${id}`,
      method: 'put',
      data: portalReport,
    })
  }

  patchSystemPortalReportsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<PortalReport> {
    return this.request({
      path: `/system/portalReports/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemPortalReportsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/portalReports/count`,
      method: 'get',
      params,
    })
  }

  getSystemQuoteLinkSetup(params: CommonParameters<QuoteLink> = {}): Promise<Array<QuoteLink>> {
    return this.request({
      path: `/system/quoteLinkSetup`,
      method: 'get',
      params,
    })
  }

  postSystemQuoteLinkSetup(quoteLink: QuoteLink): Promise<QuoteLink> {
    return this.request({
      path: `/system/quoteLinkSetup`,
      method: 'post',
      data: quoteLink,
    })
  }

  getSystemQuoteLinkSetupById(
    id: number,
    params: CommonParameters<QuoteLink> = {},
  ): Promise<QuoteLink> {
    return this.request({
      path: `/system/quoteLinkSetup/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemQuoteLinkSetupById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/quoteLinkSetup/${id}`,
      method: 'delete',
    })
  }

  putSystemQuoteLinkSetupById(id: number, quoteLink: QuoteLink): Promise<QuoteLink> {
    return this.request({
      path: `/system/quoteLinkSetup/${id}`,
      method: 'put',
      data: quoteLink,
    })
  }

  patchSystemQuoteLinkSetupById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<QuoteLink> {
    return this.request({
      path: `/system/quoteLinkSetup/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemQuoteLinkSetupCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/quoteLinkSetup/count`,
      method: 'get',
      params,
    })
  }

  getSystemQuoteLinkSetupTestConnection(
    params: CommonParameters<SuccessResponse> = {},
  ): Promise<SuccessResponse> {
    return this.request({
      path: `/system/quoteLinkSetup/testConnection`,
      method: 'get',
      params,
    })
  }

  getSystemReportCards(params: CommonParameters<ReportCard> = {}): Promise<Array<ReportCard>> {
    return this.request({
      path: `/system/reportCards`,
      method: 'get',
      params,
    })
  }

  postSystemReportCards(reportCard: ReportCard): Promise<ReportCard> {
    return this.request({
      path: `/system/reportCards`,
      method: 'post',
      data: reportCard,
    })
  }

  getSystemReportCardsById(
    id: number,
    params: CommonParameters<ReportCard> = {},
  ): Promise<ReportCard> {
    return this.request({
      path: `/system/reportCards/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemReportCardsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/reportCards/${id}`,
      method: 'delete',
    })
  }

  putSystemReportCardsById(id: number, reportCard: ReportCard): Promise<ReportCard> {
    return this.request({
      path: `/system/reportCards/${id}`,
      method: 'put',
      data: reportCard,
    })
  }

  patchSystemReportCardsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ReportCard> {
    return this.request({
      path: `/system/reportCards/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemReportCardsByIdInfo(
    id: number,
    params: CommonParameters<ReportCardInfo> = {},
  ): Promise<ReportCardInfo> {
    return this.request({
      path: `/system/reportCards/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemReportCardsByParentIdDetails(
    parentId: number,
    params: CommonParameters<ReportCardDetail> = {},
  ): Promise<Array<ReportCardDetail>> {
    return this.request({
      path: `/system/reportCards/${parentId}/details`,
      method: 'get',
      params,
    })
  }

  postSystemReportCardsByParentIdDetails(
    parentId: number,
    reportCardDetail: ReportCardDetail,
  ): Promise<ReportCardDetail> {
    return this.request({
      path: `/system/reportCards/${parentId}/details`,
      method: 'post',
      data: reportCardDetail,
    })
  }

  getSystemReportCardsByParentIdDetailsById(
    id: number,
    parentId: number,
    params: CommonParameters<ReportCardDetail> = {},
  ): Promise<ReportCardDetail> {
    return this.request({
      path: `/system/reportCards/${parentId}/details/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemReportCardsByParentIdDetailsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/reportCards/${parentId}/details/${id}`,
      method: 'delete',
    })
  }

  putSystemReportCardsByParentIdDetailsById(
    id: number,
    parentId: number,
    reportCardDetail: ReportCardDetail,
  ): Promise<ReportCardDetail> {
    return this.request({
      path: `/system/reportCards/${parentId}/details/${id}`,
      method: 'put',
      data: reportCardDetail,
    })
  }

  patchSystemReportCardsByParentIdDetailsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ReportCardDetail> {
    return this.request({
      path: `/system/reportCards/${parentId}/details/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemReportCardsByParentIdDetailsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/reportCards/${parentId}/details/count`,
      method: 'get',
      params,
    })
  }

  getSystemReportCardsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/reportCards/count`,
      method: 'get',
      params,
    })
  }

  getSystemReportCardsInfo(
    params: CommonParameters<ReportCardInfo> = {},
  ): Promise<Array<ReportCardInfo>> {
    return this.request({
      path: `/system/reportCards/info`,
      method: 'get',
      params,
    })
  }

  getSystemReportCardsInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/reportCards/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemReports(params: CommonParameters<Report> = {}): Promise<Array<Report>> {
    return this.request({
      path: `/system/reports`,
      method: 'get',
      params,
    })
  }

  getSystemReportsByReportName(
    reportName: string,
    params: CommonParameters<ReportDataResponse> = {},
  ): Promise<ReportDataResponse> {
    return this.request({
      path: `/system/reports/${reportName}`,
      method: 'get',
      params,
    })
  }

  getSystemReportsByReportNameColumns(
    reportName: string,
    params: CommonParameters<ReportColumnDefinition> = {},
  ): Promise<Array<ReportColumnDefinition>> {
    return this.request({
      path: `/system/reports/${reportName}/columns`,
      method: 'get',
      params,
    })
  }

  getSystemReportsByReportNameCount(
    reportName: string,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/reports/${reportName}/count`,
      method: 'get',
      params,
    })
  }

  getSystemSecurityroles(
    params: CommonParameters<SecurityRole> = {},
  ): Promise<Array<SecurityRole>> {
    return this.request({
      path: `/system/securityroles`,
      method: 'get',
      params,
    })
  }

  postSystemSecurityroles(securityRole: SecurityRole): Promise<SecurityRole> {
    return this.request({
      path: `/system/securityroles`,
      method: 'post',
      data: securityRole,
    })
  }

  getSystemSecurityrolesById(
    id: number,
    params: CommonParameters<SecurityRole> = {},
  ): Promise<SecurityRole> {
    return this.request({
      path: `/system/securityroles/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemSecurityrolesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/securityroles/${id}`,
      method: 'delete',
    })
  }

  getSystemSecurityrolesByIdInfo(
    id: number,
    params: CommonParameters<SecurityRoleInfo> = {},
  ): Promise<SecurityRoleInfo> {
    return this.request({
      path: `/system/securityroles/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemSecurityRolesByParentIdSettings(
    parentId: number,
    params: CommonParameters<SecurityRoleSetting> = {},
  ): Promise<Array<SecurityRoleSetting>> {
    return this.request({
      path: `/system/securityRoles/${parentId}/settings`,
      method: 'get',
      params,
    })
  }

  getSystemSecurityRolesByParentIdSettingsById(
    id: number,
    parentId: number,
    params: CommonParameters<SecurityRoleSetting> = {},
  ): Promise<SecurityRoleSetting> {
    return this.request({
      path: `/system/securityRoles/${parentId}/settings/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemSecurityRolesByParentIdSettingsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/securityRoles/${parentId}/settings/count`,
      method: 'get',
      params,
    })
  }

  getSystemSecurityrolesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/securityroles/count`,
      method: 'get',
      params,
    })
  }

  getSystemSecurityrolesInfo(
    params: CommonParameters<SecurityRoleInfo> = {},
  ): Promise<Array<SecurityRoleInfo>> {
    return this.request({
      path: `/system/securityroles/info`,
      method: 'get',
      params,
    })
  }

  getSystemSecurityrolesInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/securityroles/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemSettings(params: CommonParameters<SystemSetting> = {}): Promise<Array<SystemSetting>> {
    return this.request({
      path: `/system/settings`,
      method: 'get',
      params,
    })
  }

  getSystemSettingsById(
    id: number,
    params: CommonParameters<SystemSetting> = {},
  ): Promise<SystemSetting> {
    return this.request({
      path: `/system/settings/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemSettingsById(id: number, systemSetting: SystemSetting): Promise<SystemSetting> {
    return this.request({
      path: `/system/settings/${id}`,
      method: 'put',
      data: systemSetting,
    })
  }

  patchSystemSettingsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<SystemSetting> {
    return this.request({
      path: `/system/settings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemSettingsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/settings/count`,
      method: 'get',
      params,
    })
  }

  getSystemSetupScreens(params: CommonParameters<SetupScreen> = {}): Promise<Array<SetupScreen>> {
    return this.request({
      path: `/system/setupScreens`,
      method: 'get',
      params,
    })
  }

  getSystemSetupScreensById(
    id: number,
    params: CommonParameters<SetupScreen> = {},
  ): Promise<SetupScreen> {
    return this.request({
      path: `/system/setupScreens/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemSetupScreensCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/setupScreens/count`,
      method: 'get',
      params,
    })
  }

  getSystemSkillCategories(
    params: CommonParameters<SkillCategory> = {},
  ): Promise<Array<SkillCategory>> {
    return this.request({
      path: `/system/skillCategories`,
      method: 'get',
      params,
    })
  }

  postSystemSkillCategories(skillCategory: SkillCategory): Promise<SkillCategory> {
    return this.request({
      path: `/system/skillCategories`,
      method: 'post',
      data: skillCategory,
    })
  }

  getSystemSkillCategoriesById(
    id: number,
    params: CommonParameters<SkillCategory> = {},
  ): Promise<SkillCategory> {
    return this.request({
      path: `/system/skillCategories/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemSkillCategoriesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/skillCategories/${id}`,
      method: 'delete',
    })
  }

  putSystemSkillCategoriesById(id: number, skillCategory: SkillCategory): Promise<SkillCategory> {
    return this.request({
      path: `/system/skillCategories/${id}`,
      method: 'put',
      data: skillCategory,
    })
  }

  patchSystemSkillCategoriesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<SkillCategory> {
    return this.request({
      path: `/system/skillCategories/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemSkillCategoriesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/skillCategories/count`,
      method: 'get',
      params,
    })
  }

  getSystemSkills(params: CommonParameters<Skill> = {}): Promise<Array<Skill>> {
    return this.request({
      path: `/system/skills`,
      method: 'get',
      params,
    })
  }

  postSystemSkills(skill: Skill): Promise<Skill> {
    return this.request({
      path: `/system/skills`,
      method: 'post',
      data: skill,
    })
  }

  getSystemSkillsById(id: number, params: CommonParameters<Skill> = {}): Promise<Skill> {
    return this.request({
      path: `/system/skills/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemSkillsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/skills/${id}`,
      method: 'delete',
    })
  }

  putSystemSkillsById(id: number, skill: Skill): Promise<Skill> {
    return this.request({
      path: `/system/skills/${id}`,
      method: 'put',
      data: skill,
    })
  }

  patchSystemSkillsById(id: number, patchOperations: Array<PatchOperation>): Promise<Skill> {
    return this.request({
      path: `/system/skills/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemSkillsByIdInfo(
    id: number,
    params: CommonParameters<SkillInfo> = {},
  ): Promise<SkillInfo> {
    return this.request({
      path: `/system/skills/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemSkillsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/skills/count`,
      method: 'get',
      params,
    })
  }

  getSystemSkillsInfo(params: CommonParameters<SkillInfo> = {}): Promise<Array<SkillInfo>> {
    return this.request({
      path: `/system/skills/info`,
      method: 'get',
      params,
    })
  }

  getSystemSkillsInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/skills/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemSsoConfigurations(
    params: CommonParameters<SsoConfiguration> = {},
  ): Promise<Array<SsoConfiguration>> {
    return this.request({
      path: `/system/ssoConfigurations`,
      method: 'get',
      params,
    })
  }

  postSystemSsoConfigurations(ssoConfiguration: SsoConfiguration): Promise<SsoConfiguration> {
    return this.request({
      path: `/system/ssoConfigurations`,
      method: 'post',
      data: ssoConfiguration,
    })
  }

  getSystemSsoConfigurationsById(
    id: number,
    params: CommonParameters<SsoConfiguration> = {},
  ): Promise<SsoConfiguration> {
    return this.request({
      path: `/system/ssoConfigurations/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemSsoConfigurationsById(
    id: number,
    ssoConfiguration: SsoConfiguration,
  ): Promise<SsoConfiguration> {
    return this.request({
      path: `/system/ssoConfigurations/${id}`,
      method: 'put',
      data: ssoConfiguration,
    })
  }

  patchSystemSsoConfigurationsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<SsoConfiguration> {
    return this.request({
      path: `/system/ssoConfigurations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  deleteSystemSsoConfigurationsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/ssoConfigurations/${id}`,
      method: 'delete',
    })
  }

  postSystemSsoConfigurationsByIdRegistertoken(
    id: number,
    ssoConfiguration: SsoConfiguration,
  ): Promise<SsoConfiguration> {
    return this.request({
      path: `/system/ssoConfigurations/${id}/registertoken`,
      method: 'post',
      data: ssoConfiguration,
    })
  }

  postSystemSsoConfigurationsByIdSubmitmembers(
    id: number,
    ssoConfiguration: SsoConfiguration,
  ): Promise<SsoConfiguration> {
    return this.request({
      path: `/system/ssoConfigurations/${id}/submitmembers`,
      method: 'post',
      data: ssoConfiguration,
    })
  }

  getSystemSsoConfigurationsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/ssoConfigurations/count`,
      method: 'get',
      params,
    })
  }

  getSystemSsoUsers(params: CommonParameters<SsoUser> = {}): Promise<Array<SsoUser>> {
    return this.request({
      path: `/system/ssoUsers`,
      method: 'get',
      params,
    })
  }

  getSystemSsoUsersByExternalId(
    externalId: number,
    params: CommonParameters<SsoUser> = {},
  ): Promise<SsoUser> {
    return this.request({
      path: `/system/ssoUsers/${externalId}`,
      method: 'get',
      params,
    })
  }

  getSystemSsoUsersCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/ssoUsers/count`,
      method: 'get',
      params,
    })
  }

  getSystemStandardNotes(
    params: CommonParameters<StandardNote> = {},
  ): Promise<Array<StandardNote>> {
    return this.request({
      path: `/system/standardNotes`,
      method: 'get',
      params,
    })
  }

  postSystemStandardNotes(standardNote: StandardNote): Promise<StandardNote> {
    return this.request({
      path: `/system/standardNotes`,
      method: 'post',
      data: standardNote,
    })
  }

  getSystemStandardNotesById(
    id: number,
    params: CommonParameters<StandardNote> = {},
  ): Promise<StandardNote> {
    return this.request({
      path: `/system/standardNotes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemStandardNotesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/standardNotes/${id}`,
      method: 'delete',
    })
  }

  putSystemStandardNotesById(id: number, standardNote: StandardNote): Promise<StandardNote> {
    return this.request({
      path: `/system/standardNotes/${id}`,
      method: 'put',
      data: standardNote,
    })
  }

  patchSystemStandardNotesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<StandardNote> {
    return this.request({
      path: `/system/standardNotes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemStandardNotesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/standardNotes/count`,
      method: 'get',
      params,
    })
  }

  getSystemSurveys(params: CommonParameters<Survey> = {}): Promise<Array<Survey>> {
    return this.request({
      path: `/system/surveys`,
      method: 'get',
      params,
    })
  }

  postSystemSurveys(survey: Survey): Promise<Survey> {
    return this.request({
      path: `/system/surveys`,
      method: 'post',
      data: survey,
    })
  }

  getSystemSurveysByGrandparentIdQuestionsByParentIdValues(
    parentId: number,
    grandparentId: number,
    params: CommonParameters<SurveyQuestionValue> = {},
  ): Promise<Array<SurveyQuestionValue>> {
    return this.request({
      path: `/system/surveys/${grandparentId}/questions/${parentId}/values`,
      method: 'get',
      params,
    })
  }

  postSystemSurveysByGrandparentIdQuestionsByParentIdValues(
    parentId: number,
    grandparentId: number,
    surveyQuestionValue: SurveyQuestionValue,
  ): Promise<SurveyQuestionValue> {
    return this.request({
      path: `/system/surveys/${grandparentId}/questions/${parentId}/values`,
      method: 'post',
      data: surveyQuestionValue,
    })
  }

  getSystemSurveysByGrandparentIdQuestionsByParentIdValuesById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters<SurveyQuestionValue> = {},
  ): Promise<SurveyQuestionValue> {
    return this.request({
      path: `/system/surveys/${grandparentId}/questions/${parentId}/values/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemSurveysByGrandparentIdQuestionsByParentIdValuesById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/surveys/${grandparentId}/questions/${parentId}/values/${id}`,
      method: 'delete',
    })
  }

  putSystemSurveysByGrandparentIdQuestionsByParentIdValuesById(
    id: number,
    parentId: number,
    grandparentId: number,
    surveyQuestionValue: SurveyQuestionValue,
  ): Promise<SurveyQuestionValue> {
    return this.request({
      path: `/system/surveys/${grandparentId}/questions/${parentId}/values/${id}`,
      method: 'put',
      data: surveyQuestionValue,
    })
  }

  patchSystemSurveysByGrandparentIdQuestionsByParentIdValuesById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<SurveyQuestionValue> {
    return this.request({
      path: `/system/surveys/${grandparentId}/questions/${parentId}/values/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemSurveysById(id: number, params: CommonParameters<Survey> = {}): Promise<Survey> {
    return this.request({
      path: `/system/surveys/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemSurveysById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/surveys/${id}`,
      method: 'delete',
    })
  }

  putSystemSurveysById(id: number, survey: Survey): Promise<Survey> {
    return this.request({
      path: `/system/surveys/${id}`,
      method: 'put',
      data: survey,
    })
  }

  patchSystemSurveysById(id: number, patchOperations: Array<PatchOperation>): Promise<Survey> {
    return this.request({
      path: `/system/surveys/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postSystemSurveysByIdCopy(id: number): Promise<Survey> {
    return this.request({
      path: `/system/surveys/${id}/copy`,
      method: 'post',
    })
  }

  getSystemSurveysByIdInfo(
    id: number,
    params: CommonParameters<SurveyInfo> = {},
  ): Promise<SurveyInfo> {
    return this.request({
      path: `/system/surveys/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemSurveysByParentIdQuestions(
    parentId: number,
    params: CommonParameters<SurveyQuestion> = {},
  ): Promise<Array<SurveyQuestion>> {
    return this.request({
      path: `/system/surveys/${parentId}/questions`,
      method: 'get',
      params,
    })
  }

  postSystemSurveysByParentIdQuestions(
    parentId: number,
    surveyQuestion: SurveyQuestion,
  ): Promise<SurveyQuestion> {
    return this.request({
      path: `/system/surveys/${parentId}/questions`,
      method: 'post',
      data: surveyQuestion,
    })
  }

  getSystemSurveysByParentIdQuestionsById(
    id: number,
    parentId: number,
    params: CommonParameters<SurveyQuestion> = {},
  ): Promise<SurveyQuestion> {
    return this.request({
      path: `/system/surveys/${parentId}/questions/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemSurveysByParentIdQuestionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/surveys/${parentId}/questions/${id}`,
      method: 'delete',
    })
  }

  putSystemSurveysByParentIdQuestionsById(
    id: number,
    parentId: number,
    surveyQuestion: SurveyQuestion,
  ): Promise<SurveyQuestion> {
    return this.request({
      path: `/system/surveys/${parentId}/questions/${id}`,
      method: 'put',
      data: surveyQuestion,
    })
  }

  patchSystemSurveysByParentIdQuestionsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<SurveyQuestion> {
    return this.request({
      path: `/system/surveys/${parentId}/questions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemSurveysByParentIdQuestionsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/surveys/${parentId}/questions/count`,
      method: 'get',
      params,
    })
  }

  getSystemSurveysCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/surveys/count`,
      method: 'get',
      params,
    })
  }

  getSystemSurveysInfo(params: CommonParameters<SurveyInfo> = {}): Promise<Array<SurveyInfo>> {
    return this.request({
      path: `/system/surveys/info`,
      method: 'get',
      params,
    })
  }

  getSystemSurveysInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/surveys/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemTimeZoneSetups(
    params: CommonParameters<TimeZoneSetup> = {},
  ): Promise<Array<TimeZoneSetup>> {
    return this.request({
      path: `/system/timeZoneSetups`,
      method: 'get',
      params,
    })
  }

  postSystemTimeZoneSetups(timeZoneSetup: TimeZoneSetup): Promise<TimeZoneSetup> {
    return this.request({
      path: `/system/timeZoneSetups`,
      method: 'post',
      data: timeZoneSetup,
    })
  }

  getSystemTimeZoneSetupsById(
    id: number,
    params: CommonParameters<TimeZoneSetup> = {},
  ): Promise<TimeZoneSetup> {
    return this.request({
      path: `/system/timeZoneSetups/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemTimeZoneSetupsById(id: number, timeZoneSetup: TimeZoneSetup): Promise<TimeZoneSetup> {
    return this.request({
      path: `/system/timeZoneSetups/${id}`,
      method: 'put',
      data: timeZoneSetup,
    })
  }

  patchSystemTimeZoneSetupsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TimeZoneSetup> {
    return this.request({
      path: `/system/timeZoneSetups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  deleteSystemTimeZoneSetupsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/timeZoneSetups/${id}`,
      method: 'delete',
    })
  }

  getSystemTimeZoneSetupsByIdInfo(
    id: number,
    params: CommonParameters<TimeZoneSetupInfo> = {},
  ): Promise<TimeZoneSetupInfo> {
    return this.request({
      path: `/system/timeZoneSetups/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemTimeZoneSetupsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/timeZoneSetups/count`,
      method: 'get',
      params,
    })
  }

  getSystemTimeZoneSetupsInfo(
    params: CommonParameters<TimeZoneSetupInfo> = {},
  ): Promise<Array<TimeZoneSetupInfo>> {
    return this.request({
      path: `/system/timeZoneSetups/info`,
      method: 'get',
      params,
    })
  }

  getSystemTimeZoneSetupsInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/timeZoneSetups/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemTodayPageCategories(
    params: CommonParameters<TodayPageCategory> = {},
  ): Promise<Array<TodayPageCategory>> {
    return this.request({
      path: `/system/todayPageCategories`,
      method: 'get',
      params,
    })
  }

  postSystemTodayPageCategories(todayPageCategory: TodayPageCategory): Promise<TodayPageCategory> {
    return this.request({
      path: `/system/todayPageCategories`,
      method: 'post',
      data: todayPageCategory,
    })
  }

  getSystemTodayPageCategoriesById(
    id: number,
    params: CommonParameters<TodayPageCategory> = {},
  ): Promise<TodayPageCategory> {
    return this.request({
      path: `/system/todayPageCategories/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemTodayPageCategoriesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/todayPageCategories/${id}`,
      method: 'delete',
    })
  }

  putSystemTodayPageCategoriesById(
    id: number,
    todayPageCategory: TodayPageCategory,
  ): Promise<TodayPageCategory> {
    return this.request({
      path: `/system/todayPageCategories/${id}`,
      method: 'put',
      data: todayPageCategory,
    })
  }

  patchSystemTodayPageCategoriesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TodayPageCategory> {
    return this.request({
      path: `/system/todayPageCategories/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemTodayPageCategoriesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/todayPageCategories/count`,
      method: 'get',
      params,
    })
  }

  getSystemTodayPagelinks(
    params: CommonParameters<TodayPageLink> = {},
  ): Promise<Array<TodayPageLink>> {
    return this.request({
      path: `/system/todayPagelinks`,
      method: 'get',
      params,
    })
  }

  postSystemTodayPagelinks(TodayPageLink: TodayPageLink): Promise<TodayPageLink> {
    return this.request({
      path: `/system/todayPagelinks/`,
      method: 'post',
      data: TodayPageLink,
    })
  }

  getSystemTodayPagelinksById(
    id: number,
    params: CommonParameters<TodayPageLink> = {},
  ): Promise<TodayPageLink> {
    return this.request({
      path: `/system/todayPagelinks/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemTodayPagelinksById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/todayPagelinks/${id}`,
      method: 'delete',
    })
  }

  putSystemTodayPagelinksById(
    id: number,
    companyTypeAssociation: TodayPageLink,
  ): Promise<TodayPageLink> {
    return this.request({
      path: `/system/todayPagelinks/${id}`,
      method: 'put',
      data: companyTypeAssociation,
    })
  }

  patchSystemTodayPagelinksById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TodayPageLink> {
    return this.request({
      path: `/system/todayPagelinks/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemTodayPagelinksCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/todayPagelinks/count`,
      method: 'get',
      params,
    })
  }

  getSystemUserDefinedFields(
    params: CommonParameters<UserDefinedField> = {},
  ): Promise<Array<UserDefinedField>> {
    return this.request({
      path: `/system/userDefinedFields`,
      method: 'get',
      params,
    })
  }

  postSystemUserDefinedFields(userDefinedField: UserDefinedField): Promise<UserDefinedField> {
    return this.request({
      path: `/system/userDefinedFields`,
      method: 'post',
      data: userDefinedField,
    })
  }

  getSystemUserDefinedFieldsById(
    id: number,
    params: CommonParameters<UserDefinedField> = {},
  ): Promise<UserDefinedField> {
    return this.request({
      path: `/system/userDefinedFields/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemUserDefinedFieldsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/userDefinedFields/${id}`,
      method: 'delete',
    })
  }

  putSystemUserDefinedFieldsById(
    id: number,
    userDefinedField: UserDefinedField,
  ): Promise<UserDefinedField> {
    return this.request({
      path: `/system/userDefinedFields/${id}`,
      method: 'put',
      data: userDefinedField,
    })
  }

  patchSystemUserDefinedFieldsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<UserDefinedField> {
    return this.request({
      path: `/system/userDefinedFields/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemUserDefinedFieldsByIdInfo(
    id: number,
    params: CommonParameters<UserDefinedFieldInfo> = {},
  ): Promise<UserDefinedFieldInfo> {
    return this.request({
      path: `/system/userDefinedFields/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemUserDefinedFieldsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/userDefinedFields/count`,
      method: 'get',
      params,
    })
  }

  getSystemUserDefinedFieldsInfo(
    params: CommonParameters<UserDefinedFieldInfo> = {},
  ): Promise<Array<UserDefinedFieldInfo>> {
    return this.request({
      path: `/system/userDefinedFields/info`,
      method: 'get',
      params,
    })
  }

  getSystemUserDefinedFieldsInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/userDefinedFields/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowActionsByParentIdAutomateParameters(
    parentId: number,
    params: CommonParameters<WorkflowActionAutomateParameter> = {},
  ): Promise<Array<WorkflowActionAutomateParameter>> {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters`,
      method: 'get',
      params,
    })
  }

  postSystemWorkflowActionsByParentIdAutomateParameters(
    parentId: number,
    workflowActionAutomateParameter: WorkflowActionAutomateParameter,
  ): Promise<WorkflowActionAutomateParameter> {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters`,
      method: 'post',
      data: workflowActionAutomateParameter,
    })
  }

  getSystemWorkflowActionsByParentIdAutomateParametersById(
    id: number,
    parentId: number,
    params: CommonParameters<WorkflowActionAutomateParameter> = {},
  ): Promise<WorkflowActionAutomateParameter> {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemWorkflowActionsByParentIdAutomateParametersById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters/${id}`,
      method: 'delete',
    })
  }

  putSystemWorkflowActionsByParentIdAutomateParametersById(
    id: number,
    parentId: number,
    workflowActionAutomateParameter: WorkflowActionAutomateParameter,
  ): Promise<WorkflowActionAutomateParameter> {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters/${id}`,
      method: 'put',
      data: workflowActionAutomateParameter,
    })
  }

  patchSystemWorkflowActionsByParentIdAutomateParametersById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<WorkflowActionAutomateParameter> {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemWorkflowActionsByParentIdAutomateParametersCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowActionsAutomateParameters(
    params: CommonParameters<WorkflowActionAutomateParameter> = {},
  ): Promise<Array<WorkflowActionAutomateParameter>> {
    return this.request({
      path: `/system/workflowActions/automateParameters`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowActionsAutomateParametersById(
    id: number,
    params: CommonParameters<WorkflowActionAutomateParameter> = {},
  ): Promise<WorkflowActionAutomateParameter> {
    return this.request({
      path: `/system/workflowActions/automateParameters/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflows(params: CommonParameters<Workflow> = {}): Promise<Array<Workflow>> {
    return this.request({
      path: `/system/workflows`,
      method: 'get',
      params,
    })
  }

  postSystemWorkflows(workflow: Workflow): Promise<Workflow> {
    return this.request({
      path: `/system/workflows`,
      method: 'post',
      data: workflow,
    })
  }

  getSystemWorkflowsByGrandparentIdEventsByParentIdActions(
    parentId: number,
    grandparentId: number,
    params: CommonParameters<WorkflowAction> = {},
  ): Promise<Array<WorkflowAction>> {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/${parentId}/actions`,
      method: 'get',
      params,
    })
  }

  postSystemWorkflowsByGrandparentIdEventsByParentIdActions(
    parentId: number,
    grandparentId: number,
    workflowAction: WorkflowAction,
  ): Promise<WorkflowAction> {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/${parentId}/actions`,
      method: 'post',
      data: workflowAction,
    })
  }

  getSystemWorkflowsByGrandparentIdEventsByParentIdActionsById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters<WorkflowAction> = {},
  ): Promise<WorkflowAction> {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/${parentId}/actions/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemWorkflowsByGrandparentIdEventsByParentIdActionsById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/${parentId}/actions/${id}`,
      method: 'delete',
    })
  }

  putSystemWorkflowsByGrandparentIdEventsByParentIdActionsById(
    id: number,
    parentId: number,
    grandparentId: number,
    workflowAction: WorkflowAction,
  ): Promise<WorkflowAction> {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/${parentId}/actions/${id}`,
      method: 'put',
      data: workflowAction,
    })
  }

  patchSystemWorkflowsByGrandparentIdEventsByParentIdActionsById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<WorkflowAction> {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/${parentId}/actions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemWorkflowsByGrandparentIdEventsByParentIdActionsCount(
    parentId: number,
    grandparentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/${parentId}/actions/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByGrandparentIdTriggersByParentIdOptions(
    parentId: number,
    grandparentId: number,
    params: CommonParameters<WorkflowTriggerOption> = {},
  ): Promise<Array<WorkflowTriggerOption>> {
    return this.request({
      path: `/system/workflows/${grandparentId}/triggers/${parentId}/options`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByGrandparentIdTriggersByParentIdOptionsCount(
    parentId: number,
    grandparentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/workflows/${grandparentId}/triggers/${parentId}/options/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsById(id: number, params: CommonParameters<Workflow> = {}): Promise<Workflow> {
    return this.request({
      path: `/system/workflows/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemWorkflowsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/workflows/${id}`,
      method: 'delete',
    })
  }

  putSystemWorkflowsById(id: number, workflow: Workflow): Promise<Workflow> {
    return this.request({
      path: `/system/workflows/${id}`,
      method: 'put',
      data: workflow,
    })
  }

  patchSystemWorkflowsById(id: number, patchOperations: Array<PatchOperation>): Promise<Workflow> {
    return this.request({
      path: `/system/workflows/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postSystemWorkflowsByIdCopy(id: number): Promise<Workflow> {
    return this.request({
      path: `/system/workflows/${id}/copy`,
      method: 'post',
    })
  }

  getSystemWorkflowsByParentIdAttachments(
    parentId: number,
    params: CommonParameters<WorkflowAttachment> = {},
  ): Promise<Array<WorkflowAttachment>> {
    return this.request({
      path: `/system/workflows/${parentId}/attachments`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdAttachmentsById(
    id: number,
    parentId: number,
    params: CommonParameters<WorkflowAttachment> = {},
  ): Promise<WorkflowAttachment> {
    return this.request({
      path: `/system/workflows/${parentId}/attachments/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdAttachmentsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/workflows/${parentId}/attachments/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdEvents(
    parentId: number,
    params: CommonParameters<WorkflowEvent> = {},
  ): Promise<Array<WorkflowEvent>> {
    return this.request({
      path: `/system/workflows/${parentId}/events`,
      method: 'get',
      params,
    })
  }

  postSystemWorkflowsByParentIdEvents(
    parentId: number,
    workflowEvent: WorkflowEvent,
  ): Promise<WorkflowEvent> {
    return this.request({
      path: `/system/workflows/${parentId}/events`,
      method: 'post',
      data: workflowEvent,
    })
  }

  getSystemWorkflowsByParentIdEventsById(
    id: number,
    parentId: number,
    params: CommonParameters<WorkflowEvent> = {},
  ): Promise<WorkflowEvent> {
    return this.request({
      path: `/system/workflows/${parentId}/events/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemWorkflowsByParentIdEventsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/workflows/${parentId}/events/${id}`,
      method: 'delete',
    })
  }

  putSystemWorkflowsByParentIdEventsById(
    id: number,
    parentId: number,
    workflowEvent: WorkflowEvent,
  ): Promise<WorkflowEvent> {
    return this.request({
      path: `/system/workflows/${parentId}/events/${id}`,
      method: 'put',
      data: workflowEvent,
    })
  }

  patchSystemWorkflowsByParentIdEventsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<WorkflowEvent> {
    return this.request({
      path: `/system/workflows/${parentId}/events/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postSystemWorkflowsByParentIdEventsByIdCopy(
    id: number,
    parentId: number,
  ): Promise<WorkflowEvent> {
    return this.request({
      path: `/system/workflows/${parentId}/events/${id}/copy`,
      method: 'post',
    })
  }

  getSystemWorkflowsByParentIdEventsByIdTest(
    id: number,
    parentId: number,
    params: CommonParameters<object> = {},
  ): Promise<Array<object>> {
    return this.request({
      path: `/system/workflows/${parentId}/events/${id}/test`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdEventsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/workflows/${parentId}/events/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdNotifyTypes(
    parentId: number,
    params: CommonParameters<WorkflowNotifyType> = {},
  ): Promise<Array<WorkflowNotifyType>> {
    return this.request({
      path: `/system/workflows/${parentId}/notifyTypes`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdNotifyTypesById(
    id: number,
    parentId: number,
    params: CommonParameters<WorkflowNotifyType> = {},
  ): Promise<WorkflowNotifyType> {
    return this.request({
      path: `/system/workflows/${parentId}/notifyTypes/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdNotifyTypesByIdInfo(
    id: number,
    parentId: number,
    params: CommonParameters<WorkflowNotifyTypeInfo> = {},
  ): Promise<WorkflowNotifyTypeInfo> {
    return this.request({
      path: `/system/workflows/${parentId}/notifyTypes/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdNotifyTypesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/workflows/${parentId}/notifyTypes/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdNotifyTypesInfo(
    parentId: number,
    params: CommonParameters<WorkflowNotifyTypeInfo> = {},
  ): Promise<Array<WorkflowNotifyTypeInfo>> {
    return this.request({
      path: `/system/workflows/${parentId}/notifyTypes/info`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdNotifyTypesInfoCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/workflows/${parentId}/notifyTypes/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdTriggers(
    parentId: number,
    params: CommonParameters<WorkflowTrigger> = {},
  ): Promise<Array<WorkflowTrigger>> {
    return this.request({
      path: `/system/workflows/${parentId}/triggers`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdTriggersCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/workflows/${parentId}/triggers/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsAttachments(
    params: CommonParameters<WorkflowAttachment> = {},
  ): Promise<Array<WorkflowAttachment>> {
    return this.request({
      path: `/system/workflows/attachments`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsAttachmentsById(
    id: number,
    params: CommonParameters<WorkflowAttachment> = {},
  ): Promise<Array<WorkflowAttachment>> {
    return this.request({
      path: `/system/workflows/attachments/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/workflows/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsEvents(
    params: CommonParameters<WorkflowEvent> = {},
  ): Promise<Array<WorkflowEvent>> {
    return this.request({
      path: `/system/workflows/events`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsEventsById(
    id: number,
    params: CommonParameters<WorkflowEvent> = {},
  ): Promise<WorkflowEvent> {
    return this.request({
      path: `/system/workflows/events/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsEventsActions(
    params: CommonParameters<WorkflowAction> = {},
  ): Promise<Array<WorkflowAction>> {
    return this.request({
      path: `/system/workflows/events/actions`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsEventsActionsById(
    id: number,
    params: CommonParameters<WorkflowAction> = {},
  ): Promise<WorkflowAction> {
    return this.request({
      path: `/system/workflows/events/actions/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsNotifyTypes(
    params: CommonParameters<WorkflowNotifyType> = {},
  ): Promise<Array<WorkflowNotifyType>> {
    return this.request({
      path: `/system/workflows/notifyTypes`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsNotifyTypesById(
    id: number,
    params: CommonParameters<WorkflowNotifyType> = {},
  ): Promise<Array<WorkflowNotifyType>> {
    return this.request({
      path: `/system/workflows/notifyTypes/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsTableTypes(
    params: CommonParameters<WorkflowTableType> = {},
  ): Promise<Array<WorkflowTableType>> {
    return this.request({
      path: `/system/workflows/tableTypes`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsTableTypesById(
    id: number,
    params: CommonParameters<WorkflowTableType> = {},
  ): Promise<WorkflowTableType> {
    return this.request({
      path: `/system/workflows/tableTypes/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsTableTypesByIdInfo(
    id: number,
    params: CommonParameters<WorkflowTableTypeInfo> = {},
  ): Promise<WorkflowTableTypeInfo> {
    return this.request({
      path: `/system/workflows/tableTypes/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsTableTypesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/workflows/tableTypes/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsTableTypesInfo(
    params: CommonParameters<WorkflowTableTypeInfo> = {},
  ): Promise<Array<WorkflowTableTypeInfo>> {
    return this.request({
      path: `/system/workflows/tableTypes/info`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsTableTypesInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/system/workflows/tableTypes/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsTriggers(
    params: CommonParameters<WorkflowTrigger> = {},
  ): Promise<Array<WorkflowTrigger>> {
    return this.request({
      path: `/system/workflows/triggers`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsTriggersOptions(
    params: CommonParameters<WorkflowTriggerOption> = {},
  ): Promise<Array<WorkflowTriggerOption>> {
    return this.request({
      path: `/system/workflows/triggers/options`,
      method: 'get',
      params,
    })
  }

  putSystemWorkflowsUserdefinedfieldsById(
    id: number,
    workflowActionUserDefinedField: WorkflowActionUserDefinedField,
  ): Promise<WorkflowActionUserDefinedField> {
    return this.request({
      path: `/system/workflows/userdefinedfields/${id}`,
      method: 'put',
      data: workflowActionUserDefinedField,
    })
  }

  patchSystemWorkflowsUserdefinedfieldsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<WorkflowActionUserDefinedField> {
    return this.request({
      path: `/system/workflows/userdefinedfields/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  deleteSystemWorkflowsUserdefinedfieldsActionsByParentId(
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/workflows/userdefinedfields/actions/${parentId}`,
      method: 'delete',
    })
  }

  postSystemWorkflowsUserdefinedfieldsEventsByGrandparentId(
    grandparentId: number,
    workflowActionUserDefinedField: WorkflowActionUserDefinedField,
  ): Promise<WorkflowActionUserDefinedField> {
    return this.request({
      path: `/system/workflows/userdefinedfields/events/${grandparentId}`,
      method: 'post',
      data: workflowActionUserDefinedField,
    })
  }

  getSystemWorkflowsUserdefinedfieldsEventsByGrandparentIdActionsByParentId(
    parentId: number,
    grandparentId: number,
    params: CommonParameters<WorkflowActionUserDefinedField> = {},
  ): Promise<Array<WorkflowActionUserDefinedField>> {
    return this.request({
      path: `/system/workflows/userdefinedfields/events/${grandparentId}/actions/${parentId}`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsUserdefinedfieldsEventsActions(
    params: CommonParameters<WorkflowActionUserDefinedField> = {},
  ): Promise<Array<WorkflowActionUserDefinedField>> {
    return this.request({
      path: `/system/workflows/userdefinedfields/events/actions`,
      method: 'get',
      params,
    })
  }
}
