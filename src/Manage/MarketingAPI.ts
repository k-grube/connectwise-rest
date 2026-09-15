/* This file was auto-generated, do not manually edit. */
import { ManageBaseAPI } from '../BaseAPI'
import { components } from '../ManageTypes'
import { CommonParameters } from '../ManageAPI'
import { NoContentResponse } from '../types'
type schemas = components['schemas']
/** {@link ActivityReference} */
export type ActivityReference = schemas['ActivityReference']
/** {@link Campaign} */
export type Campaign = schemas['Campaign']
/** {@link CampaignSubTypeCampaignSubType} */
export type CampaignSubTypeCampaignSubType = schemas['Campaign.SubType.CampaignSubType']
/** {@link CampaignAudit} */
export type CampaignAudit = schemas['CampaignAudit']
/** {@link CampaignStatus} */
export type CampaignStatus = schemas['CampaignStatus']
/** {@link CampaignType} */
export type CampaignType = schemas['CampaignType']
/** {@link CampaignTypeInfo} */
export type CampaignTypeInfo = schemas['CampaignTypeInfo']
/** {@link Count} */
export type Count = schemas['Count']
/** {@link EmailOpened} */
export type EmailOpened = schemas['EmailOpened']
/** {@link FormSubmitted} */
export type FormSubmitted = schemas['FormSubmitted']
/** {@link Group} */
export type Group = schemas['Group']
/** {@link GroupInfo} */
export type GroupInfo = schemas['GroupInfo']
/** {@link LinkClicked} */
export type LinkClicked = schemas['LinkClicked']
/** {@link MarketingCompany} */
export type MarketingCompany = schemas['MarketingCompany']
/** {@link MarketingContact} */
export type MarketingContact = schemas['MarketingContact']
/** {@link OpportunityReference} */
export type OpportunityReference = schemas['OpportunityReference']
/** {@link PatchOperation} */
export type PatchOperation = schemas['PatchOperation']
/** {@link TypeSubTypeCampaignSubType} */
export type TypeSubTypeCampaignSubType = schemas['Type.SubType.CampaignSubType']
/** {@link Usage} */
export type Usage = schemas['Usage']

/**
 * Marketing module
 * @public
 */
export class MarketingAPI extends ManageBaseAPI {
  getMarketingCampaigns(params: CommonParameters<Campaign> = {}): Promise<Array<Campaign>> {
    return this.request({
      path: `/marketing/campaigns`,
      method: 'get',
      params,
    })
  }

  postMarketingCampaigns(campaign: Campaign): Promise<Campaign> {
    return this.request({
      path: `/marketing/campaigns`,
      method: 'post',
      data: campaign,
    })
  }

  getMarketingCampaignsById(
    id: number,
    params: CommonParameters<Campaign> = {},
  ): Promise<Campaign> {
    return this.request({
      path: `/marketing/campaigns/${id}`,
      method: 'get',
      params,
    })
  }

  deleteMarketingCampaignsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/marketing/campaigns/${id}`,
      method: 'delete',
    })
  }

  putMarketingCampaignsById(id: number, campaign: Campaign): Promise<Campaign> {
    return this.request({
      path: `/marketing/campaigns/${id}`,
      method: 'put',
      data: campaign,
    })
  }

  patchMarketingCampaignsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Campaign> {
    return this.request({
      path: `/marketing/campaigns/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getMarketingCampaignsByIdActivities(
    id: number,
    params: CommonParameters<ActivityReference> = {},
  ): Promise<Array<ActivityReference>> {
    return this.request({
      path: `/marketing/campaigns/${id}/activities`,
      method: 'get',
      params,
    })
  }

  getMarketingCampaignsByIdActivitiesCount(
    id: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/marketing/campaigns/${id}/activities/count`,
      method: 'get',
      params,
    })
  }

  getMarketingCampaignsByIdOpportunities(
    id: number,
    params: CommonParameters<OpportunityReference> = {},
  ): Promise<Array<OpportunityReference>> {
    return this.request({
      path: `/marketing/campaigns/${id}/opportunities`,
      method: 'get',
      params,
    })
  }

  getMarketingCampaignsByIdOpportunitiesCount(
    id: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/marketing/campaigns/${id}/opportunities/count`,
      method: 'get',
      params,
    })
  }

  getMarketingCampaignsByParentIdAudits(
    parentId: number,
    params: CommonParameters<CampaignAudit> = {},
  ): Promise<Array<CampaignAudit>> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/audits`,
      method: 'get',
      params,
    })
  }

  postMarketingCampaignsByParentIdAudits(
    parentId: number,
    campaignAudit: CampaignAudit,
  ): Promise<CampaignAudit> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/audits`,
      method: 'post',
      data: campaignAudit,
    })
  }

  getMarketingCampaignsByParentIdAuditsById(
    id: number,
    parentId: number,
    params: CommonParameters<CampaignAudit> = {},
  ): Promise<CampaignAudit> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/audits/${id}`,
      method: 'get',
      params,
    })
  }

  deleteMarketingCampaignsByParentIdAuditsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/audits/${id}`,
      method: 'delete',
    })
  }

  putMarketingCampaignsByParentIdAuditsById(
    id: number,
    parentId: number,
    campaignAudit: CampaignAudit,
  ): Promise<CampaignAudit> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/audits/${id}`,
      method: 'put',
      data: campaignAudit,
    })
  }

  patchMarketingCampaignsByParentIdAuditsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<CampaignAudit> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/audits/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getMarketingCampaignsByParentIdAuditsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/audits/count`,
      method: 'get',
      params,
    })
  }

  getMarketingCampaignsByParentIdEmailsOpened(
    parentId: number,
    params: CommonParameters<EmailOpened> = {},
  ): Promise<Array<EmailOpened>> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/emailsOpened`,
      method: 'get',
      params,
    })
  }

  postMarketingCampaignsByParentIdEmailsOpened(
    parentId: number,
    emailOpened: EmailOpened,
  ): Promise<EmailOpened> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/emailsOpened`,
      method: 'post',
      data: emailOpened,
    })
  }

  getMarketingCampaignsByParentIdEmailsOpenedById(
    id: number,
    parentId: number,
    params: CommonParameters<EmailOpened> = {},
  ): Promise<EmailOpened> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/emailsOpened/${id}`,
      method: 'get',
      params,
    })
  }

  deleteMarketingCampaignsByParentIdEmailsOpenedById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/emailsOpened/${id}`,
      method: 'delete',
    })
  }

  putMarketingCampaignsByParentIdEmailsOpenedById(
    id: number,
    parentId: number,
    emailOpened: EmailOpened,
  ): Promise<EmailOpened> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/emailsOpened/${id}`,
      method: 'put',
      data: emailOpened,
    })
  }

  patchMarketingCampaignsByParentIdEmailsOpenedById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<EmailOpened> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/emailsOpened/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getMarketingCampaignsByParentIdEmailsOpenedCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/emailsOpened/count`,
      method: 'get',
      params,
    })
  }

  getMarketingCampaignsByParentIdFormsSubmitted(
    parentId: number,
    params: CommonParameters<FormSubmitted> = {},
  ): Promise<Array<FormSubmitted>> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/formsSubmitted`,
      method: 'get',
      params,
    })
  }

  postMarketingCampaignsByParentIdFormsSubmitted(
    parentId: number,
    formSubmitted: FormSubmitted,
  ): Promise<FormSubmitted> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/formsSubmitted`,
      method: 'post',
      data: formSubmitted,
    })
  }

  getMarketingCampaignsByParentIdFormsSubmittedById(
    id: number,
    parentId: number,
    params: CommonParameters<FormSubmitted> = {},
  ): Promise<FormSubmitted> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/formsSubmitted/${id}`,
      method: 'get',
      params,
    })
  }

  deleteMarketingCampaignsByParentIdFormsSubmittedById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/formsSubmitted/${id}`,
      method: 'delete',
    })
  }

  putMarketingCampaignsByParentIdFormsSubmittedById(
    id: number,
    parentId: number,
    formSubmitted: FormSubmitted,
  ): Promise<FormSubmitted> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/formsSubmitted/${id}`,
      method: 'put',
      data: formSubmitted,
    })
  }

  patchMarketingCampaignsByParentIdFormsSubmittedById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<FormSubmitted> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/formsSubmitted/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getMarketingCampaignsByParentIdFormsSubmittedCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/formsSubmitted/count`,
      method: 'get',
      params,
    })
  }

  getMarketingCampaignsByParentIdLinksClicked(
    parentId: number,
    params: CommonParameters<LinkClicked> = {},
  ): Promise<Array<LinkClicked>> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/linksClicked`,
      method: 'get',
      params,
    })
  }

  postMarketingCampaignsByParentIdLinksClicked(
    parentId: number,
    linkClicked: LinkClicked,
  ): Promise<LinkClicked> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/linksClicked`,
      method: 'post',
      data: linkClicked,
    })
  }

  getMarketingCampaignsByParentIdLinksClickedById(
    id: number,
    parentId: number,
    params: CommonParameters<LinkClicked> = {},
  ): Promise<LinkClicked> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/linksClicked/${id}`,
      method: 'get',
      params,
    })
  }

  deleteMarketingCampaignsByParentIdLinksClickedById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/linksClicked/${id}`,
      method: 'delete',
    })
  }

  putMarketingCampaignsByParentIdLinksClickedById(
    id: number,
    parentId: number,
    linkClicked: LinkClicked,
  ): Promise<LinkClicked> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/linksClicked/${id}`,
      method: 'put',
      data: linkClicked,
    })
  }

  patchMarketingCampaignsByParentIdLinksClickedById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<LinkClicked> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/linksClicked/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getMarketingCampaignsByParentIdLinksClickedCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/marketing/campaigns/${parentId}/linksClicked/count`,
      method: 'get',
      params,
    })
  }

  getMarketingCampaignsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/marketing/campaigns/count`,
      method: 'get',
      params,
    })
  }

  getMarketingCampaignsStatuses(
    params: CommonParameters<CampaignStatus> = {},
  ): Promise<Array<CampaignStatus>> {
    return this.request({
      path: `/marketing/campaigns/statuses`,
      method: 'get',
      params,
    })
  }

  postMarketingCampaignsStatuses(campaignStatus: CampaignStatus): Promise<CampaignStatus> {
    return this.request({
      path: `/marketing/campaigns/statuses`,
      method: 'post',
      data: campaignStatus,
    })
  }

  getMarketingCampaignsStatusesById(
    id: number,
    params: CommonParameters<CampaignStatus> = {},
  ): Promise<CampaignStatus> {
    return this.request({
      path: `/marketing/campaigns/statuses/${id}`,
      method: 'get',
      params,
    })
  }

  deleteMarketingCampaignsStatusesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/marketing/campaigns/statuses/${id}`,
      method: 'delete',
    })
  }

  putMarketingCampaignsStatusesById(
    id: number,
    campaignStatus: CampaignStatus,
  ): Promise<CampaignStatus> {
    return this.request({
      path: `/marketing/campaigns/statuses/${id}`,
      method: 'put',
      data: campaignStatus,
    })
  }

  patchMarketingCampaignsStatusesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<CampaignStatus> {
    return this.request({
      path: `/marketing/campaigns/statuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getMarketingCampaignsStatusesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/marketing/campaigns/statuses/count`,
      method: 'get',
      params,
    })
  }

  getMarketingCampaignsSubTypes(
    params: CommonParameters<CampaignSubTypeCampaignSubType> = {},
  ): Promise<Array<CampaignSubTypeCampaignSubType>> {
    return this.request({
      path: `/marketing/campaigns/subTypes`,
      method: 'get',
      params,
    })
  }

  postMarketingCampaignsSubTypes(
    campaignSubType: CampaignSubTypeCampaignSubType,
  ): Promise<CampaignSubTypeCampaignSubType> {
    return this.request({
      path: `/marketing/campaigns/subTypes`,
      method: 'post',
      data: campaignSubType,
    })
  }

  getMarketingCampaignsSubTypesById(
    id: number,
    params: CommonParameters<CampaignSubTypeCampaignSubType> = {},
  ): Promise<CampaignSubTypeCampaignSubType> {
    return this.request({
      path: `/marketing/campaigns/subTypes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteMarketingCampaignsSubTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/marketing/campaigns/subTypes/${id}`,
      method: 'delete',
    })
  }

  putMarketingCampaignsSubTypesById(
    id: number,
    campaignSubType: CampaignSubTypeCampaignSubType,
  ): Promise<CampaignSubTypeCampaignSubType> {
    return this.request({
      path: `/marketing/campaigns/subTypes/${id}`,
      method: 'put',
      data: campaignSubType,
    })
  }

  patchMarketingCampaignsSubTypesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<CampaignSubTypeCampaignSubType> {
    return this.request({
      path: `/marketing/campaigns/subTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getMarketingCampaignsSubTypesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/marketing/campaigns/subTypes/count`,
      method: 'get',
      params,
    })
  }

  getMarketingCampaignsTypes(
    params: CommonParameters<CampaignType> = {},
  ): Promise<Array<CampaignType>> {
    return this.request({
      path: `/marketing/campaigns/types`,
      method: 'get',
      params,
    })
  }

  postMarketingCampaignsTypes(campaignType: CampaignType): Promise<CampaignType> {
    return this.request({
      path: `/marketing/campaigns/types`,
      method: 'post',
      data: campaignType,
    })
  }

  getMarketingCampaignsTypesById(
    id: number,
    params: CommonParameters<CampaignType> = {},
  ): Promise<CampaignType> {
    return this.request({
      path: `/marketing/campaigns/types/${id}`,
      method: 'get',
      params,
    })
  }

  deleteMarketingCampaignsTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/marketing/campaigns/types/${id}`,
      method: 'delete',
    })
  }

  putMarketingCampaignsTypesById(id: number, campaignType: CampaignType): Promise<CampaignType> {
    return this.request({
      path: `/marketing/campaigns/types/${id}`,
      method: 'put',
      data: campaignType,
    })
  }

  patchMarketingCampaignsTypesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<CampaignType> {
    return this.request({
      path: `/marketing/campaigns/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getMarketingCampaignsTypesByIdInfo(
    id: number,
    params: CommonParameters<CampaignTypeInfo> = {},
  ): Promise<CampaignTypeInfo> {
    return this.request({
      path: `/marketing/campaigns/types/${id}/info`,
      method: 'get',
      params,
    })
  }

  getMarketingCampaignsTypesByParentIdSubTypes(
    parentId: number,
    params: CommonParameters<TypeSubTypeCampaignSubType> = {},
  ): Promise<Array<TypeSubTypeCampaignSubType>> {
    return this.request({
      path: `/marketing/campaigns/types/${parentId}/subTypes`,
      method: 'get',
      params,
    })
  }

  getMarketingCampaignsTypesByParentIdSubTypesById(
    id: number,
    parentId: number,
    params: CommonParameters<TypeSubTypeCampaignSubType> = {},
  ): Promise<TypeSubTypeCampaignSubType> {
    return this.request({
      path: `/marketing/campaigns/types/${parentId}/subTypes/${id}`,
      method: 'get',
      params,
    })
  }

  getMarketingCampaignsTypesByParentIdSubTypesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/marketing/campaigns/types/${parentId}/subTypes/count`,
      method: 'get',
      params,
    })
  }

  getMarketingCampaignsTypesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/marketing/campaigns/types/count`,
      method: 'get',
      params,
    })
  }

  getMarketingCampaignsTypesInfo(
    params: CommonParameters<CampaignTypeInfo> = {},
  ): Promise<Array<CampaignTypeInfo>> {
    return this.request({
      path: `/marketing/campaigns/types/info`,
      method: 'get',
      params,
    })
  }

  getMarketingCampaignsTypesInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/marketing/campaigns/types/info/count`,
      method: 'get',
      params,
    })
  }

  getMarketingGroups(params: CommonParameters<Group> = {}): Promise<Array<Group>> {
    return this.request({
      path: `/marketing/groups`,
      method: 'get',
      params,
    })
  }

  postMarketingGroups(group: Group): Promise<Group> {
    return this.request({
      path: `/marketing/groups`,
      method: 'post',
      data: group,
    })
  }

  getMarketingGroupsById(id: number, params: CommonParameters<Group> = {}): Promise<Group> {
    return this.request({
      path: `/marketing/groups/${id}`,
      method: 'get',
      params,
    })
  }

  deleteMarketingGroupsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/marketing/groups/${id}`,
      method: 'delete',
    })
  }

  putMarketingGroupsById(id: number, group: Group): Promise<Group> {
    return this.request({
      path: `/marketing/groups/${id}`,
      method: 'put',
      data: group,
    })
  }

  patchMarketingGroupsById(id: number, patchOperations: Array<PatchOperation>): Promise<Group> {
    return this.request({
      path: `/marketing/groups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getMarketingGroupsByIdInfo(
    id: number,
    params: CommonParameters<GroupInfo> = {},
  ): Promise<GroupInfo> {
    return this.request({
      path: `/marketing/groups/${id}/info`,
      method: 'get',
      params,
    })
  }

  getMarketingGroupsByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/marketing/groups/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getMarketingGroupsByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/marketing/groups/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getMarketingGroupsByParentIdCompanies(
    parentId: number,
    params: CommonParameters<MarketingCompany> = {},
  ): Promise<Array<MarketingCompany>> {
    return this.request({
      path: `/marketing/groups/${parentId}/companies`,
      method: 'get',
      params,
    })
  }

  postMarketingGroupsByParentIdCompanies(
    parentId: number,
    marketingCompany: MarketingCompany,
  ): Promise<MarketingCompany> {
    return this.request({
      path: `/marketing/groups/${parentId}/companies`,
      method: 'post',
      data: marketingCompany,
    })
  }

  getMarketingGroupsByParentIdCompaniesById(
    id: number,
    parentId: number,
    params: CommonParameters<MarketingCompany> = {},
  ): Promise<MarketingCompany> {
    return this.request({
      path: `/marketing/groups/${parentId}/companies/${id}`,
      method: 'get',
      params,
    })
  }

  deleteMarketingGroupsByParentIdCompaniesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/marketing/groups/${parentId}/companies/${id}`,
      method: 'delete',
    })
  }

  putMarketingGroupsByParentIdCompaniesById(
    id: number,
    parentId: number,
    marketingCompany: MarketingCompany,
  ): Promise<MarketingCompany> {
    return this.request({
      path: `/marketing/groups/${parentId}/companies/${id}`,
      method: 'put',
      data: marketingCompany,
    })
  }

  patchMarketingGroupsByParentIdCompaniesById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MarketingCompany> {
    return this.request({
      path: `/marketing/groups/${parentId}/companies/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getMarketingGroupsByParentIdCompaniesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/marketing/groups/${parentId}/companies/count`,
      method: 'get',
      params,
    })
  }

  getMarketingGroupsByParentIdContacts(
    parentId: number,
    params: CommonParameters<MarketingContact> = {},
  ): Promise<Array<MarketingContact>> {
    return this.request({
      path: `/marketing/groups/${parentId}/contacts`,
      method: 'get',
      params,
    })
  }

  postMarketingGroupsByParentIdContacts(
    parentId: number,
    marketingContact: MarketingContact,
  ): Promise<MarketingContact> {
    return this.request({
      path: `/marketing/groups/${parentId}/contacts`,
      method: 'post',
      data: marketingContact,
    })
  }

  getMarketingGroupsByParentIdContactsById(
    id: number,
    parentId: number,
    params: CommonParameters<MarketingContact> = {},
  ): Promise<MarketingContact> {
    return this.request({
      path: `/marketing/groups/${parentId}/contacts/${id}`,
      method: 'get',
      params,
    })
  }

  deleteMarketingGroupsByParentIdContactsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/marketing/groups/${parentId}/contacts/${id}`,
      method: 'delete',
    })
  }

  putMarketingGroupsByParentIdContactsById(
    id: number,
    parentId: number,
    marketingContact: MarketingContact,
  ): Promise<MarketingContact> {
    return this.request({
      path: `/marketing/groups/${parentId}/contacts/${id}`,
      method: 'put',
      data: marketingContact,
    })
  }

  patchMarketingGroupsByParentIdContactsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MarketingContact> {
    return this.request({
      path: `/marketing/groups/${parentId}/contacts/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getMarketingGroupsByParentIdContactsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/marketing/groups/${parentId}/contacts/count`,
      method: 'get',
      params,
    })
  }

  getMarketingGroupsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/marketing/groups/count`,
      method: 'get',
      params,
    })
  }

  getMarketingGroupsInfo(params: CommonParameters<GroupInfo> = {}): Promise<Array<GroupInfo>> {
    return this.request({
      path: `/marketing/groups/info`,
      method: 'get',
      params,
    })
  }

  getMarketingGroupsInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/marketing/groups/info/count`,
      method: 'get',
      params,
    })
  }
}
