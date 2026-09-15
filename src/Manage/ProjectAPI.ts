/* This file was auto-generated, do not manually edit. */
import { ManageBaseAPI } from '../BaseAPI'
import { components } from '../ManageTypes'
import { CommonParameters } from '../ManageAPI'
import { NoContentResponse } from '../types'
type schemas = components['schemas']
/** {@link ActivityReference} */
export type ActivityReference = schemas['ActivityReference']
/** {@link ConfigurationReference} */
export type ConfigurationReference = schemas['ConfigurationReference']
/** {@link ConvertItem} */
export type ConvertItem = schemas['ConvertItem']
/** {@link Count} */
export type Count = schemas['Count']
/** {@link DocumentReference} */
export type DocumentReference = schemas['DocumentReference']
/** {@link FilterValues} */
export type FilterValues = schemas['FilterValues']
/** {@link PatchOperation} */
export type PatchOperation = schemas['PatchOperation']
/** {@link PhaseStatus} */
export type PhaseStatus = schemas['PhaseStatus']
/** {@link PhaseStatusInfo} */
export type PhaseStatusInfo = schemas['PhaseStatusInfo']
/** {@link ProductReference} */
export type ProductReference = schemas['ProductReference']
/** {@link Project} */
export type Project = schemas['Project']
/** {@link ProjectBillingRate} */
export type ProjectBillingRate = schemas['ProjectBillingRate']
/** {@link ProjectBoardKanbanSetting} */
export type ProjectBoardKanbanSetting = schemas['ProjectBoardKanbanSetting']
/** {@link ProjectBoardTeam} */
export type ProjectBoardTeam = schemas['ProjectBoardTeam']
/** {@link ProjectBoardTeamInfo} */
export type ProjectBoardTeamInfo = schemas['ProjectBoardTeamInfo']
/** {@link ProjectBoardTeamMember} */
export type ProjectBoardTeamMember = schemas['ProjectBoardTeamMember']
/** {@link ProjectContact} */
export type ProjectContact = schemas['ProjectContact']
/** {@link ProjectNote} */
export type ProjectNote = schemas['ProjectNote']
/** {@link ProjectPhase} */
export type ProjectPhase = schemas['ProjectPhase']
/** {@link ProjectRecap} */
export type ProjectRecap = schemas['ProjectRecap']
/** {@link ProjectSecurityRole} */
export type ProjectSecurityRole = schemas['ProjectSecurityRole']
/** {@link ProjectSecurityRoleInfo} */
export type ProjectSecurityRoleInfo = schemas['ProjectSecurityRoleInfo']
/** {@link ProjectSecurityRoleSetting} */
export type ProjectSecurityRoleSetting = schemas['ProjectSecurityRoleSetting']
/** {@link ProjectStatus} */
export type ProjectStatus = schemas['ProjectStatus']
/** {@link ProjectStatusInfo} */
export type ProjectStatusInfo = schemas['ProjectStatusInfo']
/** {@link ProjectTeamMember} */
export type ProjectTeamMember = schemas['ProjectTeamMember']
/** {@link ProjectTemplate} */
export type ProjectTemplate = schemas['ProjectTemplate']
/** {@link ProjectTemplatePhase} */
export type ProjectTemplatePhase = schemas['ProjectTemplatePhase']
/** {@link ProjectTemplateTask} */
export type ProjectTemplateTask = schemas['ProjectTemplateTask']
/** {@link ProjectTemplateTicket} */
export type ProjectTemplateTicket = schemas['ProjectTemplateTicket']
/** {@link ProjectTemplateWorkPlan} */
export type ProjectTemplateWorkPlan = schemas['ProjectTemplateWorkPlan']
/** {@link ProjectTicket} */
export type ProjectTicket = schemas['ProjectTicket']
/** {@link ProjectTicketNote} */
export type ProjectTicketNote = schemas['ProjectTicketNote']
/** {@link ProjectType} */
export type ProjectType = schemas['ProjectType']
/** {@link ProjectTypeInfo} */
export type ProjectTypeInfo = schemas['ProjectTypeInfo']
/** {@link ProjectWorkplan} */
export type ProjectWorkplan = schemas['ProjectWorkplan']
/** {@link ScheduleEntryReference} */
export type ScheduleEntryReference = schemas['ScheduleEntryReference']
/** {@link StatusIndicator} */
export type StatusIndicator = schemas['StatusIndicator']
/** {@link SuccessResponse} */
export type SuccessResponse = schemas['SuccessResponse']
/** {@link TicketNote} */
export type TicketNote = schemas['TicketNote']
/** {@link TicketTask} */
export type TicketTask = schemas['TicketTask']
/** {@link TimeEntryReference} */
export type TimeEntryReference = schemas['TimeEntryReference']
/** {@link Usage} */
export type Usage = schemas['Usage']

/**
 * Project module
 * @public
 */
export class ProjectAPI extends ManageBaseAPI {
  getProjectByParentIdBillingRates(
    parentId: number,
    params: CommonParameters<ProjectBillingRate> = {},
  ): Promise<Array<ProjectBillingRate>> {
    return this.request({
      path: `/project/${parentId}/billingRates`,
      method: 'get',
      params,
    })
  }

  postProjectByParentIdBillingRates(
    parentId: number,
    billingRate: ProjectBillingRate,
  ): Promise<ProjectBillingRate> {
    return this.request({
      path: `/project/${parentId}/billingRates`,
      method: 'post',
      data: billingRate,
    })
  }

  getProjectByParentIdBillingRatesById(
    id: number,
    parentId: number,
    params: CommonParameters<ProjectBillingRate> = {},
  ): Promise<ProjectBillingRate> {
    return this.request({
      path: `/project/${parentId}/billingRates/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectByParentIdBillingRatesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/${parentId}/billingRates/${id}`,
      method: 'delete',
    })
  }

  putProjectByParentIdBillingRatesById(
    id: number,
    parentId: number,
    billingRate: ProjectBillingRate,
  ): Promise<ProjectBillingRate> {
    return this.request({
      path: `/project/${parentId}/billingRates/${id}`,
      method: 'put',
      data: billingRate,
    })
  }

  getProjectByParentIdBillingRatesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/${parentId}/billingRates/count`,
      method: 'get',
      params,
    })
  }

  patchProjectBillingRatesByParentIdBillingRatesById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProjectBillingRate> {
    return this.request({
      path: `/project/billingRates/${parentId}/billingRates/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectBoardsByGrandparentIdTeamsByParentIdMembers(
    parentId: number,
    grandparentId: number,
    params: CommonParameters<ProjectBoardTeamMember> = {},
  ): Promise<Array<ProjectBoardTeamMember>> {
    return this.request({
      path: `/project/boards/${grandparentId}/teams/${parentId}/members`,
      method: 'get',
      params,
    })
  }

  postProjectBoardsByGrandparentIdTeamsByParentIdMembers(
    parentId: number,
    grandparentId: number,
    teamMember: ProjectBoardTeamMember,
  ): Promise<ProjectBoardTeamMember> {
    return this.request({
      path: `/project/boards/${grandparentId}/teams/${parentId}/members`,
      method: 'post',
      data: teamMember,
    })
  }

  getProjectBoardsByGrandparentIdTeamsByParentIdMembersById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters<ProjectBoardTeamMember> = {},
  ): Promise<ProjectBoardTeamMember> {
    return this.request({
      path: `/project/boards/${grandparentId}/teams/${parentId}/members/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectBoardsByGrandparentIdTeamsByParentIdMembersById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/boards/${grandparentId}/teams/${parentId}/members/${id}`,
      method: 'delete',
    })
  }

  putProjectBoardsByGrandparentIdTeamsByParentIdMembersById(
    id: number,
    parentId: number,
    grandparentId: number,
    teamMember: ProjectBoardTeamMember,
  ): Promise<ProjectBoardTeamMember> {
    return this.request({
      path: `/project/boards/${grandparentId}/teams/${parentId}/members/${id}`,
      method: 'put',
      data: teamMember,
    })
  }

  patchProjectBoardsByGrandparentIdTeamsByParentIdMembersById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProjectBoardTeamMember> {
    return this.request({
      path: `/project/boards/${grandparentId}/teams/${parentId}/members/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectBoardsByParentIdKanbanSettings(
    parentId: number,
    params: CommonParameters<ProjectBoardKanbanSetting> = {},
  ): Promise<Array<ProjectBoardKanbanSetting>> {
    return this.request({
      path: `/project/boards/${parentId}/kanbanSettings`,
      method: 'get',
      params,
    })
  }

  postProjectBoardsByParentIdKanbanSettings(
    parentId: number,
    kanbanSettings: ProjectBoardKanbanSetting,
  ): Promise<ProjectBoardKanbanSetting> {
    return this.request({
      path: `/project/boards/${parentId}/kanbanSettings`,
      method: 'post',
      data: kanbanSettings,
    })
  }

  getProjectBoardsByParentIdKanbanSettingsById(
    id: number,
    parentId: number,
    params: CommonParameters<ProjectBoardKanbanSetting> = {},
  ): Promise<ProjectBoardKanbanSetting> {
    return this.request({
      path: `/project/boards/${parentId}/kanbanSettings/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectBoardsByParentIdKanbanSettingsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/boards/${parentId}/kanbanSettings/${id}`,
      method: 'delete',
    })
  }

  putProjectBoardsByParentIdKanbanSettingsById(
    id: number,
    parentId: number,
    Kanban: ProjectBoardKanbanSetting,
  ): Promise<ProjectBoardKanbanSetting> {
    return this.request({
      path: `/project/boards/${parentId}/kanbanSettings/${id}`,
      method: 'put',
      data: Kanban,
    })
  }

  patchProjectBoardsByParentIdKanbanSettingsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProjectBoardKanbanSetting> {
    return this.request({
      path: `/project/boards/${parentId}/kanbanSettings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectBoardsByParentIdTeams(
    parentId: number,
    params: CommonParameters<ProjectBoardTeam> = {},
  ): Promise<Array<ProjectBoardTeam>> {
    return this.request({
      path: `/project/boards/${parentId}/teams`,
      method: 'get',
      params,
    })
  }

  postProjectBoardsByParentIdTeams(
    parentId: number,
    team: ProjectBoardTeam,
  ): Promise<ProjectBoardTeam> {
    return this.request({
      path: `/project/boards/${parentId}/teams`,
      method: 'post',
      data: team,
    })
  }

  getProjectBoardsByParentIdTeamsById(
    id: number,
    parentId: number,
    params: CommonParameters<ProjectBoardTeam> = {},
  ): Promise<ProjectBoardTeam> {
    return this.request({
      path: `/project/boards/${parentId}/teams/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectBoardsByParentIdTeamsById(id: number, parentId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/project/boards/${parentId}/teams/${id}`,
      method: 'delete',
    })
  }

  putProjectBoardsByParentIdTeamsById(
    id: number,
    parentId: number,
    team: ProjectBoardTeam,
  ): Promise<ProjectBoardTeam> {
    return this.request({
      path: `/project/boards/${parentId}/teams/${id}`,
      method: 'put',
      data: team,
    })
  }

  patchProjectBoardsByParentIdTeamsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProjectBoardTeam> {
    return this.request({
      path: `/project/boards/${parentId}/teams/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectBoardsByParentIdTeamsByIdInfo(
    id: number,
    parentId: number,
    params: CommonParameters<ProjectBoardTeamInfo> = {},
  ): Promise<ProjectBoardTeamInfo> {
    return this.request({
      path: `/project/boards/${parentId}/teams/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProjectBoardsByParentIdTeamsByIdInfoCount(
    id: number,
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/boards/${parentId}/teams/${id}/info/count`,
      method: 'get',
      params,
    })
  }

  getProjectBoardsByParentIdTeamsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/boards/${parentId}/teams/count`,
      method: 'get',
      params,
    })
  }

  getProjectBoardsByParentIdTeamsInfo(
    parentId: number,
    params: CommonParameters<ProjectBoardTeamInfo> = {},
  ): Promise<Array<ProjectBoardTeamInfo>> {
    return this.request({
      path: `/project/boards/${parentId}/teams/info`,
      method: 'get',
      params,
    })
  }

  getProjectPhaseStatuses(params: CommonParameters<PhaseStatus> = {}): Promise<Array<PhaseStatus>> {
    return this.request({
      path: `/project/phaseStatuses`,
      method: 'get',
      params,
    })
  }

  postProjectPhaseStatuses(phaseStatus: PhaseStatus): Promise<PhaseStatus> {
    return this.request({
      path: `/project/phaseStatuses`,
      method: 'post',
      data: phaseStatus,
    })
  }

  getProjectPhaseStatusesById(
    id: number,
    params: CommonParameters<PhaseStatus> = {},
  ): Promise<PhaseStatus> {
    return this.request({
      path: `/project/phaseStatuses/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectPhaseStatusesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/project/phaseStatuses/${id}`,
      method: 'delete',
    })
  }

  putProjectPhaseStatusesById(id: number, phaseStatus: PhaseStatus): Promise<PhaseStatus> {
    return this.request({
      path: `/project/phaseStatuses/${id}`,
      method: 'put',
      data: phaseStatus,
    })
  }

  patchProjectPhaseStatusesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<PhaseStatus> {
    return this.request({
      path: `/project/phaseStatuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectPhaseStatusesByIdInfo(
    id: number,
    params: CommonParameters<PhaseStatusInfo> = {},
  ): Promise<PhaseStatusInfo> {
    return this.request({
      path: `/project/phaseStatuses/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProjectPhaseStatusesByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/project/phaseStatuses/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getProjectPhaseStatusesByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/project/phaseStatuses/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getProjectPhaseStatusesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/project/phaseStatuses/count`,
      method: 'get',
      params,
    })
  }

  getProjectPhaseStatusesInfo(
    params: CommonParameters<PhaseStatusInfo> = {},
  ): Promise<Array<PhaseStatusInfo>> {
    return this.request({
      path: `/project/phaseStatuses/info`,
      method: 'get',
      params,
    })
  }

  getProjectProjects(params: CommonParameters<Project> = {}): Promise<Array<Project>> {
    return this.request({
      path: `/project/projects`,
      method: 'get',
      params,
    })
  }

  postProjectProjects(project: Project): Promise<Project> {
    return this.request({
      path: `/project/projects`,
      method: 'post',
      data: project,
    })
  }

  getProjectProjectsById(id: number, params: CommonParameters<Project> = {}): Promise<Project> {
    return this.request({
      path: `/project/projects/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectProjectsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/project/projects/${id}`,
      method: 'delete',
    })
  }

  putProjectProjectsById(id: number, project: Project): Promise<Project> {
    return this.request({
      path: `/project/projects/${id}`,
      method: 'put',
      data: project,
    })
  }

  patchProjectProjectsById(id: number, patchOperations: Array<PatchOperation>): Promise<Project> {
    return this.request({
      path: `/project/projects/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectProjectsByIdProjectRecap(
    id: number,
    params: CommonParameters<ProjectRecap> = {},
  ): Promise<ProjectRecap> {
    return this.request({
      path: `/project/projects/${id}/projectRecap`,
      method: 'get',
      params,
    })
  }

  getProjectProjectsByIdProjectWorkplan(
    id: number,
    params: CommonParameters<ProjectWorkplan> = {},
  ): Promise<ProjectWorkplan> {
    return this.request({
      path: `/project/projects/${id}/projectWorkplan`,
      method: 'get',
      params,
    })
  }

  postProjectProjectsByParentIdApplyTemplateById(
    id: number,
    parentId: number,
  ): Promise<ProjectWorkplan> {
    return this.request({
      path: `/project/projects/${parentId}/applyTemplate/${id}`,
      method: 'post',
    })
  }

  postProjectProjectsByParentIdApplyTemplates(
    parentId: number,
    projectTemplates: Array<ProjectTemplate>,
  ): Promise<ProjectWorkplan> {
    return this.request({
      path: `/project/projects/${parentId}/applyTemplates`,
      method: 'post',
      data: projectTemplates,
    })
  }

  getProjectProjectsByParentIdContacts(
    parentId: number,
    params: CommonParameters<ProjectContact> = {},
  ): Promise<Array<ProjectContact>> {
    return this.request({
      path: `/project/projects/${parentId}/contacts`,
      method: 'get',
      params,
    })
  }

  postProjectProjectsByParentIdContacts(
    parentId: number,
    contact: ProjectContact,
  ): Promise<ProjectContact> {
    return this.request({
      path: `/project/projects/${parentId}/contacts`,
      method: 'post',
      data: contact,
    })
  }

  getProjectProjectsByParentIdContactsById(
    id: number,
    parentId: number,
    params: CommonParameters<ProjectContact> = {},
  ): Promise<ProjectContact> {
    return this.request({
      path: `/project/projects/${parentId}/contacts/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectProjectsByParentIdContactsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/projects/${parentId}/contacts/${id}`,
      method: 'delete',
    })
  }

  getProjectProjectsByParentIdNotes(
    parentId: number,
    params: CommonParameters<ProjectNote> = {},
  ): Promise<Array<ProjectNote>> {
    return this.request({
      path: `/project/projects/${parentId}/notes`,
      method: 'get',
      params,
    })
  }

  postProjectProjectsByParentIdNotes(parentId: number, note: ProjectNote): Promise<ProjectNote> {
    return this.request({
      path: `/project/projects/${parentId}/notes`,
      method: 'post',
      data: note,
    })
  }

  getProjectProjectsByParentIdNotesById(
    id: number,
    parentId: number,
    params: CommonParameters<ProjectNote> = {},
  ): Promise<ProjectNote> {
    return this.request({
      path: `/project/projects/${parentId}/notes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectProjectsByParentIdNotesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/projects/${parentId}/notes/${id}`,
      method: 'delete',
    })
  }

  putProjectProjectsByParentIdNotesById(
    id: number,
    parentId: number,
    note: ProjectNote,
  ): Promise<ProjectNote> {
    return this.request({
      path: `/project/projects/${parentId}/notes/${id}`,
      method: 'put',
      data: note,
    })
  }

  patchProjectProjectsByParentIdNotesById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProjectNote> {
    return this.request({
      path: `/project/projects/${parentId}/notes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectProjectsByParentIdNotesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/projects/${parentId}/notes/count`,
      method: 'get',
      params,
    })
  }

  getProjectProjectsByParentIdPhases(
    parentId: number,
    params: CommonParameters<ProjectPhase> = {},
  ): Promise<Array<ProjectPhase>> {
    return this.request({
      path: `/project/projects/${parentId}/phases`,
      method: 'get',
      params,
    })
  }

  postProjectProjectsByParentIdPhases(
    parentId: number,
    projectPhase: ProjectPhase,
  ): Promise<ProjectPhase> {
    return this.request({
      path: `/project/projects/${parentId}/phases`,
      method: 'post',
      data: projectPhase,
    })
  }

  getProjectProjectsByParentIdPhasesById(
    id: number,
    parentId: number,
    params: CommonParameters<ProjectPhase> = {},
  ): Promise<ProjectPhase> {
    return this.request({
      path: `/project/projects/${parentId}/phases/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectProjectsByParentIdPhasesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/projects/${parentId}/phases/${id}`,
      method: 'delete',
    })
  }

  putProjectProjectsByParentIdPhasesById(
    id: number,
    parentId: number,
    projectPhase: ProjectPhase,
  ): Promise<ProjectPhase> {
    return this.request({
      path: `/project/projects/${parentId}/phases/${id}`,
      method: 'put',
      data: projectPhase,
    })
  }

  patchProjectProjectsByParentIdPhasesById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProjectPhase> {
    return this.request({
      path: `/project/projects/${parentId}/phases/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectProjectsByParentIdPhasesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/projects/${parentId}/phases/count`,
      method: 'get',
      params,
    })
  }

  getProjectProjectsByParentIdTeamMembers(
    parentId: number,
    params: CommonParameters<ProjectTeamMember> = {},
  ): Promise<Array<ProjectTeamMember>> {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers`,
      method: 'get',
      params,
    })
  }

  postProjectProjectsByParentIdTeamMembers(
    parentId: number,
    teamMember: ProjectTeamMember,
  ): Promise<ProjectTeamMember> {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers`,
      method: 'post',
      data: teamMember,
    })
  }

  getProjectProjectsByParentIdTeamMembersById(
    id: number,
    parentId: number,
    params: CommonParameters<ProjectTeamMember> = {},
  ): Promise<ProjectTeamMember> {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectProjectsByParentIdTeamMembersById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers/${id}`,
      method: 'delete',
    })
  }

  putProjectProjectsByParentIdTeamMembersById(
    id: number,
    parentId: number,
    teamMember: ProjectTeamMember,
  ): Promise<ProjectTeamMember> {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers/${id}`,
      method: 'put',
      data: teamMember,
    })
  }

  patchProjectProjectsByParentIdTeamMembersById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProjectTeamMember> {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectProjectsByParentIdTeamMembersCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers/count`,
      method: 'get',
      params,
    })
  }

  getProjectProjectsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/project/projects/count`,
      method: 'get',
      params,
    })
  }

  getProjectProjectTemplates(
    params: CommonParameters<ProjectTemplate> = {},
  ): Promise<Array<ProjectTemplate>> {
    return this.request({
      path: `/project/projectTemplates/`,
      method: 'get',
      params,
    })
  }

  postProjectProjectTemplates(ProjectTemplate: ProjectTemplate): Promise<ProjectTemplate> {
    return this.request({
      path: `/project/projectTemplates/`,
      method: 'post',
      data: ProjectTemplate,
    })
  }

  getProjectProjectTemplatesByGrandParentIdProjectTemplateTicketsByParentIdTasks(
    grandParentId: number,
    parentId: number,
    params: CommonParameters<ProjectTemplateTask> = {},
  ): Promise<Array<ProjectTemplateTask>> {
    return this.request({
      path: `/project/projectTemplates/${grandParentId}/projectTemplateTickets/${parentId}/tasks`,
      method: 'get',
      params,
    })
  }

  postProjectProjectTemplatesByGrandParentIdProjectTemplateTicketsByParentIdTasks(
    grandParentId: number,
    parentId: number,
    ProjectTemplateTask: ProjectTemplateTask,
  ): Promise<ProjectTemplateTask> {
    return this.request({
      path: `/project/projectTemplates/${grandParentId}/projectTemplateTickets/${parentId}/tasks`,
      method: 'post',
      data: ProjectTemplateTask,
    })
  }

  getProjectProjectTemplatesByGrandParentIdProjectTemplateTicketsByParentIdTasksById(
    id: number,
    grandParentId: number,
    parentId: number,
    params: CommonParameters<ProjectTemplateTask> = {},
  ): Promise<ProjectTemplateTask> {
    return this.request({
      path: `/project/projectTemplates/${grandParentId}/projectTemplateTickets/${parentId}/tasks/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectProjectTemplatesByGrandParentIdProjectTemplateTicketsByParentIdTasksById(
    id: number,
    grandParentId: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/projectTemplates/${grandParentId}/projectTemplateTickets/${parentId}/tasks/${id}`,
      method: 'delete',
    })
  }

  putProjectProjectTemplatesByGrandParentIdProjectTemplateTicketsByParentIdTasksById(
    id: number,
    grandParentId: number,
    parentId: number,
    companyTypeAssociation: ProjectTemplateTask,
  ): Promise<ProjectTemplateTask> {
    return this.request({
      path: `/project/projectTemplates/${grandParentId}/projectTemplateTickets/${parentId}/tasks/${id}`,
      method: 'put',
      data: companyTypeAssociation,
    })
  }

  patchProjectProjectTemplatesByGrandParentIdProjectTemplateTicketsByParentIdTasksById(
    id: number,
    grandParentId: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProjectTemplateTask> {
    return this.request({
      path: `/project/projectTemplates/${grandParentId}/projectTemplateTickets/${parentId}/tasks/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectProjectTemplatesByGrandParentIdProjectTemplateTicketsByParentIdTasksCount(
    grandParentId: number,
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/projectTemplates/${grandParentId}/projectTemplateTickets/${parentId}/tasks/count`,
      method: 'get',
      params,
    })
  }

  getProjectProjectTemplatesById(
    id: number,
    params: CommonParameters<ProjectTemplate> = {},
  ): Promise<ProjectTemplate> {
    return this.request({
      path: `/project/projectTemplates/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectProjectTemplatesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/project/projectTemplates/${id}`,
      method: 'delete',
    })
  }

  putProjectProjectTemplatesById(
    id: number,
    companyTypeAssociation: ProjectTemplate,
  ): Promise<ProjectTemplate> {
    return this.request({
      path: `/project/projectTemplates/${id}`,
      method: 'put',
      data: companyTypeAssociation,
    })
  }

  patchProjectProjectTemplatesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProjectTemplate> {
    return this.request({
      path: `/project/projectTemplates/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectProjectTemplatesByIdWorkplan(
    id: number,
    params: CommonParameters<ProjectTemplateWorkPlan> = {},
  ): Promise<Array<ProjectTemplateWorkPlan>> {
    return this.request({
      path: `/project/projectTemplates/${id}/workplan`,
      method: 'get',
      params,
    })
  }

  getProjectProjectTemplatesByParentIdProjectTemplatePhases(
    parentId: number,
    params: CommonParameters<ProjectTemplatePhase> = {},
  ): Promise<Array<ProjectTemplatePhase>> {
    return this.request({
      path: `/project/projectTemplates/${parentId}/projectTemplatePhases`,
      method: 'get',
      params,
    })
  }

  postProjectProjectTemplatesByParentIdProjectTemplatePhases(
    parentId: number,
    ProjectTemplatePhase: ProjectTemplatePhase,
  ): Promise<ProjectTemplatePhase> {
    return this.request({
      path: `/project/projectTemplates/${parentId}/projectTemplatePhases`,
      method: 'post',
      data: ProjectTemplatePhase,
    })
  }

  getProjectProjectTemplatesByParentIdProjectTemplatePhasesById(
    id: number,
    parentId: number,
    params: CommonParameters<ProjectTemplatePhase> = {},
  ): Promise<ProjectTemplatePhase> {
    return this.request({
      path: `/project/projectTemplates/${parentId}/projectTemplatePhases/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectProjectTemplatesByParentIdProjectTemplatePhasesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/projectTemplates/${parentId}/projectTemplatePhases/${id}`,
      method: 'delete',
    })
  }

  putProjectProjectTemplatesByParentIdProjectTemplatePhasesById(
    id: number,
    parentId: number,
    projectTemplatePhase: ProjectTemplatePhase,
  ): Promise<ProjectTemplatePhase> {
    return this.request({
      path: `/project/projectTemplates/${parentId}/projectTemplatePhases/${id}`,
      method: 'put',
      data: projectTemplatePhase,
    })
  }

  patchProjectProjectTemplatesByParentIdProjectTemplatePhasesById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProjectTemplatePhase> {
    return this.request({
      path: `/project/projectTemplates/${parentId}/projectTemplatePhases/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectProjectTemplatesByParentIdProjectTemplateTickets(
    parentId: number,
    params: CommonParameters<ProjectTemplateTicket> = {},
  ): Promise<Array<ProjectTemplateTicket>> {
    return this.request({
      path: `/project/projectTemplates/${parentId}/projectTemplateTickets`,
      method: 'get',
      params,
    })
  }

  postProjectProjectTemplatesByParentIdProjectTemplateTickets(
    parentId: number,
    ProjectTemplateTicket: ProjectTemplateTicket,
  ): Promise<ProjectTemplateTicket> {
    return this.request({
      path: `/project/projectTemplates/${parentId}/projectTemplateTickets`,
      method: 'post',
      data: ProjectTemplateTicket,
    })
  }

  getProjectProjectTemplatesByParentIdProjectTemplateTicketsById(
    id: number,
    parentId: number,
    params: CommonParameters<ProjectTemplateTicket> = {},
  ): Promise<ProjectTemplateTicket> {
    return this.request({
      path: `/project/projectTemplates/${parentId}/projectTemplateTickets/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectProjectTemplatesByParentIdProjectTemplateTicketsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/projectTemplates/${parentId}/projectTemplateTickets/${id}`,
      method: 'delete',
    })
  }

  putProjectProjectTemplatesByParentIdProjectTemplateTicketsById(
    id: number,
    parentId: number,
    companyTypeAssociation: ProjectTemplateTicket,
  ): Promise<ProjectTemplateTicket> {
    return this.request({
      path: `/project/projectTemplates/${parentId}/projectTemplateTickets/${id}`,
      method: 'put',
      data: companyTypeAssociation,
    })
  }

  patchProjectProjectTemplatesByParentIdProjectTemplateTicketsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProjectTemplateTicket> {
    return this.request({
      path: `/project/projectTemplates/${parentId}/projectTemplateTickets/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectProjectTemplatesByParentIdProjectTemplateTicketsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/projectTemplates/${parentId}/projectTemplateTickets/count`,
      method: 'get',
      params,
    })
  }

  getProjectProjectTemplatesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/project/projectTemplates/count`,
      method: 'get',
      params,
    })
  }

  postProjectProjectTemplatesCreateFromProjectById(
    id: number,
    ProjectTemplate: ProjectTemplate,
  ): Promise<ProjectTemplate> {
    return this.request({
      path: `/project/projectTemplates/createFromProject/${id}`,
      method: 'post',
      data: ProjectTemplate,
    })
  }

  getProjectProjectTemplatesProjectTemplatePhases(
    params: CommonParameters<ProjectTemplatePhase> = {},
  ): Promise<Array<ProjectTemplatePhase>> {
    return this.request({
      path: `/project/projectTemplates/projectTemplatePhases`,
      method: 'get',
      params,
    })
  }

  getProjectProjectTemplatesProjectTemplateTickets(
    params: CommonParameters<ProjectTemplateTicket> = {},
  ): Promise<Array<ProjectTemplateTicket>> {
    return this.request({
      path: `/project/projectTemplates/projectTemplateTickets`,
      method: 'get',
      params,
    })
  }

  getProjectProjectTemplatesProjectTemplateTicketsTasks(
    params: CommonParameters<ProjectTemplateTask> = {},
  ): Promise<Array<ProjectTemplateTask>> {
    return this.request({
      path: `/project/projectTemplates/projectTemplateTickets/tasks`,
      method: 'get',
      params,
    })
  }

  getProjectProjectTypes(params: CommonParameters<ProjectType> = {}): Promise<Array<ProjectType>> {
    return this.request({
      path: `/project/projectTypes`,
      method: 'get',
      params,
    })
  }

  postProjectProjectTypes(projectType: ProjectType): Promise<ProjectType> {
    return this.request({
      path: `/project/projectTypes`,
      method: 'post',
      data: projectType,
    })
  }

  getProjectProjectTypesById(
    id: number,
    params: CommonParameters<ProjectType> = {},
  ): Promise<ProjectType> {
    return this.request({
      path: `/project/projectTypes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectProjectTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/project/projectTypes/${id}`,
      method: 'delete',
    })
  }

  putProjectProjectTypesById(id: number, projectType: ProjectType): Promise<ProjectType> {
    return this.request({
      path: `/project/projectTypes/${id}`,
      method: 'put',
      data: projectType,
    })
  }

  patchProjectProjectTypesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProjectType> {
    return this.request({
      path: `/project/projectTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectProjectTypesByIdInfo(
    id: number,
    params: CommonParameters<ProjectTypeInfo> = {},
  ): Promise<ProjectTypeInfo> {
    return this.request({
      path: `/project/projectTypes/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProjectProjectTypesByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/project/projectTypes/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getProjectProjectTypesByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/project/projectTypes/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getProjectProjectTypesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/project/projectTypes/count`,
      method: 'get',
      params,
    })
  }

  getProjectProjectTypesInfo(
    params: CommonParameters<ProjectTypeInfo> = {},
  ): Promise<Array<ProjectTypeInfo>> {
    return this.request({
      path: `/project/projectTypes/info`,
      method: 'get',
      params,
    })
  }

  getProjectProjectTypesInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/project/projectTypes/info/count`,
      method: 'get',
      params,
    })
  }

  getProjectSecurityRoles(
    params: CommonParameters<ProjectSecurityRole> = {},
  ): Promise<Array<ProjectSecurityRole>> {
    return this.request({
      path: `/project/securityRoles`,
      method: 'get',
      params,
    })
  }

  postProjectSecurityRoles(projectSecurityRole: ProjectSecurityRole): Promise<ProjectSecurityRole> {
    return this.request({
      path: `/project/securityRoles`,
      method: 'post',
      data: projectSecurityRole,
    })
  }

  getProjectSecurityRolesById(
    id: number,
    params: CommonParameters<ProjectSecurityRole> = {},
  ): Promise<ProjectSecurityRole> {
    return this.request({
      path: `/project/securityRoles/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectSecurityRolesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/project/securityRoles/${id}`,
      method: 'delete',
    })
  }

  putProjectSecurityRolesById(
    id: number,
    projectSecurityRole: ProjectSecurityRole,
  ): Promise<ProjectSecurityRole> {
    return this.request({
      path: `/project/securityRoles/${id}`,
      method: 'put',
      data: projectSecurityRole,
    })
  }

  patchProjectSecurityRolesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProjectSecurityRole> {
    return this.request({
      path: `/project/securityRoles/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectSecurityRolesByIdInfo(
    id: number,
    params: CommonParameters<ProjectSecurityRoleInfo> = {},
  ): Promise<ProjectSecurityRoleInfo> {
    return this.request({
      path: `/project/securityRoles/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProjectSecurityRolesByParentIdSettings(
    parentId: number,
    params: CommonParameters<ProjectSecurityRoleSetting> = {},
  ): Promise<Array<ProjectSecurityRoleSetting>> {
    return this.request({
      path: `/project/securityRoles/${parentId}/settings`,
      method: 'get',
      params,
    })
  }

  getProjectSecurityRolesByParentIdSettingsById(
    id: number,
    parentId: number,
    params: CommonParameters<ProjectSecurityRoleSetting> = {},
  ): Promise<ProjectSecurityRoleSetting> {
    return this.request({
      path: `/project/securityRoles/${parentId}/settings/${id}`,
      method: 'get',
      params,
    })
  }

  putProjectSecurityRolesByParentIdSettingsById(
    id: number,
    parentId: number,
    projectSecurityRoleSetting: ProjectSecurityRoleSetting,
  ): Promise<ProjectSecurityRoleSetting> {
    return this.request({
      path: `/project/securityRoles/${parentId}/settings/${id}`,
      method: 'put',
      data: projectSecurityRoleSetting,
    })
  }

  patchProjectSecurityRolesByParentIdSettingsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProjectSecurityRoleSetting> {
    return this.request({
      path: `/project/securityRoles/${parentId}/settings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectSecurityRolesByParentIdSettingsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/securityRoles/${parentId}/settings/count`,
      method: 'get',
      params,
    })
  }

  getProjectSecurityRolesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/project/securityRoles/count`,
      method: 'get',
      params,
    })
  }

  getProjectSecurityRolesInfo(
    params: CommonParameters<ProjectSecurityRoleInfo> = {},
  ): Promise<Array<ProjectSecurityRoleInfo>> {
    return this.request({
      path: `/project/securityRoles/info`,
      method: 'get',
      params,
    })
  }

  getProjectStatuses(params: CommonParameters<ProjectStatus> = {}): Promise<Array<ProjectStatus>> {
    return this.request({
      path: `/project/statuses`,
      method: 'get',
      params,
    })
  }

  postProjectStatuses(projectStatus: ProjectStatus): Promise<ProjectStatus> {
    return this.request({
      path: `/project/statuses`,
      method: 'post',
      data: projectStatus,
    })
  }

  getProjectStatusesById(
    id: number,
    params: CommonParameters<ProjectStatus> = {},
  ): Promise<ProjectStatus> {
    return this.request({
      path: `/project/statuses/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectStatusesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/project/statuses/${id}`,
      method: 'delete',
    })
  }

  putProjectStatusesById(id: number, projectStatus: ProjectStatus): Promise<ProjectStatus> {
    return this.request({
      path: `/project/statuses/${id}`,
      method: 'put',
      data: projectStatus,
    })
  }

  patchProjectStatusesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProjectStatus> {
    return this.request({
      path: `/project/statuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectStatusesByIdInfo(
    id: number,
    params: CommonParameters<ProjectStatusInfo> = {},
  ): Promise<ProjectStatusInfo> {
    return this.request({
      path: `/project/statuses/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProjectStatusesByIdUsages(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/project/statuses/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getProjectStatusesByIdUsagesList(
    id: number,
    params: CommonParameters<Usage> = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/project/statuses/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getProjectStatusesCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/project/statuses/count`,
      method: 'get',
      params,
    })
  }

  getProjectStatusesInfo(
    params: CommonParameters<ProjectStatusInfo> = {},
  ): Promise<Array<ProjectStatusInfo>> {
    return this.request({
      path: `/project/statuses/info`,
      method: 'get',
      params,
    })
  }

  getProjectStatusesInfoCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/project/statuses/info/count`,
      method: 'get',
      params,
    })
  }

  getProjectStatusIndicators(
    params: CommonParameters<StatusIndicator> = {},
  ): Promise<Array<StatusIndicator>> {
    return this.request({
      path: `/project/statusIndicators`,
      method: 'get',
      params,
    })
  }

  getProjectStatusIndicatorsById(
    id: number,
    params: CommonParameters<StatusIndicator> = {},
  ): Promise<StatusIndicator> {
    return this.request({
      path: `/project/statusIndicators/${id}`,
      method: 'get',
      params,
    })
  }

  getProjectStatusIndicatorsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/project/statusIndicators/count`,
      method: 'get',
      params,
    })
  }

  postProjectTicketNoteByIdMarkAs(id: number, item: ProjectTicketNote): Promise<any> {
    return this.request({
      path: `/project/ticketNote/${id}/markAs/`,
      method: 'post',
      data: item,
    })
  }

  getProjectTickets(params: CommonParameters<ProjectTicket> = {}): Promise<Array<ProjectTicket>> {
    return this.request({
      path: `/project/tickets`,
      method: 'get',
      params,
    })
  }

  postProjectTickets(ticket: ProjectTicket): Promise<ProjectTicket> {
    return this.request({
      path: `/project/tickets`,
      method: 'post',
      data: ticket,
    })
  }

  getProjectTicketsById(
    id: number,
    params: CommonParameters<ProjectTicket> = {},
  ): Promise<ProjectTicket> {
    return this.request({
      path: `/project/tickets/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectTicketsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/project/tickets/${id}`,
      method: 'delete',
    })
  }

  putProjectTicketsById(id: number, ticket: ProjectTicket): Promise<ProjectTicket> {
    return this.request({
      path: `/project/tickets/${id}`,
      method: 'put',
      data: ticket,
    })
  }

  patchProjectTicketsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ProjectTicket> {
    return this.request({
      path: `/project/tickets/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectTicketsByParentIdActivities(
    parentId: number,
    params: CommonParameters<ActivityReference> = {},
  ): Promise<Array<ActivityReference>> {
    return this.request({
      path: `/project/tickets/${parentId}/activities`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdActivitiesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/tickets/${parentId}/activities/count`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdAllNotes(
    parentId: number,
    params: CommonParameters<ProjectTicketNote> = {},
  ): Promise<Array<ProjectTicketNote>> {
    return this.request({
      path: `/project/tickets/${parentId}/allNotes`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdConfigurations(
    parentId: number,
    params: CommonParameters<ConfigurationReference> = {},
  ): Promise<Array<ConfigurationReference>> {
    return this.request({
      path: `/project/tickets/${parentId}/configurations`,
      method: 'get',
      params,
    })
  }

  postProjectTicketsByParentIdConfigurations(
    parentId: number,
    configuration: ConfigurationReference,
  ): Promise<ConfigurationReference> {
    return this.request({
      path: `/project/tickets/${parentId}/configurations`,
      method: 'post',
      data: configuration,
    })
  }

  getProjectTicketsByParentIdConfigurationsById(
    id: number,
    parentId: number,
    params: CommonParameters<ConfigurationReference> = {},
  ): Promise<ConfigurationReference> {
    return this.request({
      path: `/project/tickets/${parentId}/configurations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectTicketsByParentIdConfigurationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/tickets/${parentId}/configurations/${id}`,
      method: 'delete',
    })
  }

  getProjectTicketsByParentIdConfigurationsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/tickets/${parentId}/configurations/count`,
      method: 'get',
      params,
    })
  }

  postProjectTicketsByParentIdConvert(
    parentId: number,
    item: ConvertItem,
  ): Promise<SuccessResponse> {
    return this.request({
      path: `/project/tickets/${parentId}/convert`,
      method: 'post',
      data: item,
    })
  }

  getProjectTicketsByParentIdDocuments(
    parentId: number,
    params: CommonParameters<DocumentReference> = {},
  ): Promise<Array<DocumentReference>> {
    return this.request({
      path: `/project/tickets/${parentId}/documents`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdDocumentsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/tickets/${parentId}/documents/count`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdNotes(
    parentId: number,
    params: CommonParameters<TicketNote> = {},
  ): Promise<Array<TicketNote>> {
    return this.request({
      path: `/project/tickets/${parentId}/notes`,
      method: 'get',
      params,
    })
  }

  postProjectTicketsByParentIdNotes(parentId: number, ticketNote: TicketNote): Promise<TicketNote> {
    return this.request({
      path: `/project/tickets/${parentId}/notes`,
      method: 'post',
      data: ticketNote,
    })
  }

  getProjectTicketsByParentIdNotesById(
    id: number,
    parentId: number,
    params: CommonParameters<TicketNote> = {},
  ): Promise<TicketNote> {
    return this.request({
      path: `/project/tickets/${parentId}/notes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectTicketsByParentIdNotesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/tickets/${parentId}/notes/${id}`,
      method: 'delete',
    })
  }

  putProjectTicketsByParentIdNotesById(
    id: number,
    parentId: number,
    ticketNote: TicketNote,
  ): Promise<TicketNote> {
    return this.request({
      path: `/project/tickets/${parentId}/notes/${id}`,
      method: 'put',
      data: ticketNote,
    })
  }

  patchProjectTicketsByParentIdNotesById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TicketNote> {
    return this.request({
      path: `/project/tickets/${parentId}/notes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectTicketsByParentIdNotesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/tickets/${parentId}/notes/count`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdProducts(
    parentId: number,
    params: CommonParameters<ProductReference> = {},
  ): Promise<Array<ProductReference>> {
    return this.request({
      path: `/project/tickets/${parentId}/products`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdProductsCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/tickets/${parentId}/products/count`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdScheduleentries(
    parentId: number,
    params: CommonParameters<ScheduleEntryReference> = {},
  ): Promise<Array<ScheduleEntryReference>> {
    return this.request({
      path: `/project/tickets/${parentId}/scheduleentries`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdScheduleentriesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/tickets/${parentId}/scheduleentries/count`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdTasks(
    parentId: number,
    params: CommonParameters<TicketTask> = {},
  ): Promise<Array<TicketTask>> {
    return this.request({
      path: `/project/tickets/${parentId}/tasks`,
      method: 'get',
      params,
    })
  }

  postProjectTicketsByParentIdTasks(parentId: number, ticketTask: TicketTask): Promise<TicketTask> {
    return this.request({
      path: `/project/tickets/${parentId}/tasks`,
      method: 'post',
      data: ticketTask,
    })
  }

  getProjectTicketsByParentIdTasksById(
    id: number,
    parentId: number,
    params: CommonParameters<TicketTask> = {},
  ): Promise<TicketTask> {
    return this.request({
      path: `/project/tickets/${parentId}/tasks/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectTicketsByParentIdTasksById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/tickets/${parentId}/tasks/${id}`,
      method: 'delete',
    })
  }

  putProjectTicketsByParentIdTasksById(
    id: number,
    parentId: number,
    ticketTask: TicketTask,
  ): Promise<TicketTask> {
    return this.request({
      path: `/project/tickets/${parentId}/tasks/${id}`,
      method: 'put',
      data: ticketTask,
    })
  }

  patchProjectTicketsByParentIdTasksById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TicketTask> {
    return this.request({
      path: `/project/tickets/${parentId}/tasks/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectTicketsByParentIdTasksCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/tickets/${parentId}/tasks/count`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdTimeentries(
    parentId: number,
    params: CommonParameters<TimeEntryReference> = {},
  ): Promise<Array<TimeEntryReference>> {
    return this.request({
      path: `/project/tickets/${parentId}/timeentries`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdTimeentriesCount(
    parentId: number,
    params: CommonParameters<Count> = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/tickets/${parentId}/timeentries/count`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsCount(params: CommonParameters<Count> = {}): Promise<Count> {
    return this.request({
      path: `/project/tickets/count`,
      method: 'get',
      params,
    })
  }

  postProjectTicketsSearch(filterValues: FilterValues): Promise<Array<ProjectTicket>> {
    return this.request({
      path: `/project/tickets/search`,
      method: 'post',
      data: filterValues,
    })
  }
}
