export interface paths {
    "/api/v1/Tickets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Tickets_GetTicketList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Tickets/{ticketId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Tickets_GetTicket"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/APIToken": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApiToken_Get"];
        put?: never;
        post: operations["ApiToken_Post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/APIToken/Refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ApiToken_RefreshBearerTokenAsync"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/System/ServerInformation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ServerInformation_GetServerInformationListAsync"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/DatabaseServerTime": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DatabaseServerTime_GetDatabaseServerDateTimeWithUtcOffset"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/ExternalSystemCredentials/Clients/{clientId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ExternalSystemCredentials_GetClientSystemCredentialsList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/FeatureFlags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FeatureFlags_GetFeatureFlagList"];
        put?: never;
        post: operations["FeatureFlags_PostFeatureFlag"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/LicensedProducts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["LicensedProducts_GetLicensedProducts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Links": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Links_GetLinkList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/PatchInformation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PatchInformation_GetPatchInformation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Permissions/Clients/{clientId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Permissions_GetClientPermissionList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Permissions/Users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Permissions_GetUserPermissionList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Plugins": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Plugins_GetPluginList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/RebootPolicies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RebootPolicies_GetRebootPolicyListAsync"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/UserAudits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UserAudits_GetUserAuditList"];
        put?: never;
        post: operations["UserAudits_PostUserAudit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/UserClasses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UserClasses_GetUserClassList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/UserClasses/{userClassId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UserClasses_GetUserClass"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/UserClasses/{userClassId}/WebExtensions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UserClasses_GetUserClassWebExtensionList"];
        put: operations["UserClasses_PutUserClassWebExtensionList"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Users_GetUserList"];
        put?: never;
        post: operations["Users_AddUser"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Users/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Users_GetUser"];
        put?: never;
        post?: never;
        delete: operations["Users_DeleteUser"];
        options?: never;
        head?: never;
        patch: operations["Users_PatchUser"];
        trace?: never;
    };
    "/api/v1/Users/{userId}/AuthLink": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["UserAuthLink_PostAuthorizationInitialLink"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Users/{userId}/ChangePassword": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["UserActions_ChangePassword"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Users/{userId}/Favorites": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UserFavorites_GetUserFavoriteList"];
        put?: never;
        post: operations["UserFavorites_PostUserFavorite"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Users/{userId}/UserAccess": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UserAccess_GetUserPermissionsAsync"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Users/{userId}/Settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UserSettings_GetUserSettingList"];
        put?: never;
        post: operations["UserSettings_PostUserSetting"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Users/Folders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UserFolders_GetUserFolderList"];
        put?: never;
        post: operations["UserFolders_PostUserFolder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Users/Folders/{userFolderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UserFolders_GetUserFolder"];
        put?: never;
        post?: never;
        delete: operations["UserFolders_DeleteUserFolder"];
        options?: never;
        head?: never;
        patch: operations["UserFolders_PatchUserFolder"];
        trace?: never;
    };
    "/api/v1/drives/{driveId}/drivestats/daily": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DriveStats_GetDailyDriveStats"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/drives/{driveId}/drivestats/weekly": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DriveStats_GetWeeklyDriveStats"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/drives/{driveId}/drivestats/yearly": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DriveStats_GetYearlyDriveStats"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/drives/{driveId}/drivestats/monthly": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DriveStats_GetMonthlyDriveStats"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Statistics/Drives": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Statistics_GetDriveStatisticsList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Searches": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Searches_GetSearchList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/SearchFolders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SearchFolders_GetSearchFolderList"];
        put?: never;
        post: operations["SearchFolders_PostSearchFolder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/ScriptFolders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ScriptFolders_GetScriptFolderList"];
        put?: never;
        post: operations["ScriptFolders_PostScriptFolder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/ScriptFolders/Hierarchy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ScriptFolders_GetScriptFolderHierarchy"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/ScriptFolders/{entityId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ScriptFolders_GetScriptFolder"];
        put?: never;
        post?: never;
        delete: operations["ScriptFolders_DeleteScriptFolder"];
        options?: never;
        head?: never;
        patch: operations["ScriptFolders_PatchScriptFolder"];
        trace?: never;
    };
    "/api/v1/Scripting/RunningScripts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RunningScript_GetRunningScripts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Scripting/ScriptSchedules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ScheduledScript_GetScheduledScripts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Scripting/ScriptSchedules/{scheduledId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["ScheduledScript_DeleteScriptSchedule"];
        options?: never;
        head?: never;
        patch: operations["ScheduledScript_PatchScriptSchedule"];
        trace?: never;
    };
    "/api/v1/Scripts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Scripts_GetScriptList"];
        put?: never;
        post: operations["Scripts_PostScript"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Scripts/{scriptId}/Copy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ScriptActions_GetScriptCopyAsync"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/Scripts/{scriptId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["V2Scripts_GetScript"];
        put: operations["V2Scripts_PutScript"];
        post?: never;
        delete: operations["V2Scripts_DeleteScript"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/Scripts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["V2Scripts_PostScriptSummary"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/Scripts/ScriptFolders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["V2ScriptFolders_PostRootScriptFolder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/Scripts/ScriptFolders/{scriptFolderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["V2ScriptFolders_PutRootScriptFolder"];
        post?: never;
        delete: operations["V2ScriptFolders_DeleteScriptFolder"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/Scripts/ScriptFolders/{parentFolderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["V2ScriptFolders_PostChildScriptFolder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/RemoteAgentSchedules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RemoteAgentSchedules_GetRemoteAgentScheduleList"];
        put?: never;
        post: operations["RemoteAgentSchedules_PostRemoteAgentSchedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/RemoteAgentTemplates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RemoteAgentTemplates_GetRemoteAgentTemplateListAsync"];
        put?: never;
        post: operations["RemoteAgentTemplates_PostRemoteAgentTemplateAsync"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Locations/{locationId}/ProbeConfiguration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProbeConfiguration_GetProbeConfiguration"];
        put?: never;
        post: operations["ProbeConfiguration_PostProbeConfiguration"];
        delete: operations["ProbeConfiguration_DeleteProbeConfiguration"];
        options?: never;
        head?: never;
        patch: operations["ProbeConfiguration_PatchProbeConfiguration"];
        trace?: never;
    };
    "/api/v1/Locations/{locationId}/UpgradeProbe": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ProbeConfiguration_UpgradeProbe"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Lookups/ProbeEventLevels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Lookups_GetProbeEventLevelList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Lookups/ScanFrequencies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Lookups_GetScanFrequencyList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Lookups/SnmpEncryptionMethods": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Lookups_GetSnmpEncryptionMethodList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Lookups/SnmpHashMethods": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Lookups_GetSnmpHashMethodList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Lookups/StatusScanNetworkPortOptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Lookups_GetStatusScanNetworkPortOptionList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/ProbeConfiguration/{probeConfigurationId}/AgentPushCredentials": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProbeConfiguration_GetAgentPushCredentialsList"];
        put: operations["ProbeConfiguration_PutAgentPushCredentialsList"];
        post?: never;
        delete: operations["ProbeConfiguration_DeleteAgentPushCredentials"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/ProbeConfiguration/{probeConfigurationId}/SnmpConfiguration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProbeConfiguration_GetProbeSnmpConfigurationAsync"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["ProbeConfiguration_PatchProbeSnmpConfigurationAsync"];
        trace?: never;
    };
    "/api/v1/ProbeConfiguration/EnableProbe/{computerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ProbeConfiguration_EnableProbe"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/ProbeEvents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProbeEvents_GetProbeEventList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/UserProfiles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UserProfiles_GetUserProfile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/ApprovalPolicies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApprovalPolicy_GetApprovalPolicyListAsync"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/GroupPatchingPolicies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GroupPatchingPolicies_GetGroupPatchingPolicyListAsync"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/MicrosoftUpdatePolicies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["MicrosoftUpdatePolicies_GetMicrosoftUpdatePolicyListAsync"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/PatchActions/DeployAllApproved": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PatchActions_DeployAllApproved"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/PatchActions/DeployAllSecurity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PatchActions_DeployAllSecurity"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/PatchActions/ReattemptFailed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PatchActions_ReattemptFailed"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/PatchActions/SetToPilotStage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PatchActions_SetToPilotStage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/PatchActions/SetToProductionStage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PatchActions_SetToProductionStage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/PatchActions/SetToTestStage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PatchActions_SetToTestStage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/PatchHistory": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PatchHistory_GetPatchHistoryListAsync"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/ThirdPartyUpdatePolicies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ThirdPartyUpdatePolicies_GetThirdPartyUpdatePolicyListAsync"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/NetworkDevices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["NetworkDevices_GetNetworkDeviceList"];
        put?: never;
        post: operations["NetworkDevices_PostNetworkDevice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/NetworkDevices/{deviceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["NetworkDevices_GetNetworkDevice"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["NetworkDevices_PatchNetworkDevice"];
        trace?: never;
    };
    "/api/v1/routers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Routers_GetRouters"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/InternalMonitorResults": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["InternalMonitorResults_GetInternalMonitorResultList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/MonitorHistory": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["MonitorsHistory_GetMonitorHistoryList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/MonitorHistory/{monitorId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["MonitorsHistory_GetMonitorHistoryListById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Monitors/{monitorId}/CollectedData/DailyAverages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["MonitorsCollectedData_GetDailyCollectedData"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Monitors/{monitorId}/CollectedData/MonthlyAverages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["MonitorsCollectedData_GetMonthlyCollectedData"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Monitors/{monitorId}/CollectedData/WeeklyAverages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["MonitorsCollectedData_GetWeeklyCollectedData"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Monitors/{monitorId}/CollectedData/YearlyAverages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["MonitorsCollectedData_GetYearlyCollectedData"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Monitors/{monitorId}/DataCollectionSettings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["MonitorDataCollectionSettings_GetDataCollectionSettingsForMonitorAsync"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/MonitorStatistics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["MonitorsStatistics_GetMonitorStatisticsList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/SensorChecks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SensorChecks_GetSensorCheckList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/MaintenanceWindowDefinitions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["MaintenanceWindowDefinition_GetDefinitionList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/AVTemplatePolicies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AVTemplatePolicies_GetAntivirusTemplatePolicyList"];
        put?: never;
        post: operations["AVTemplatePolicies_PostAntivirusTemplatePolicy"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/AVTemplatePolicyData": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AVTemplatePolicyData_GetAntivirusTemplatePolicyDataList"];
        put?: never;
        post: operations["AVTemplatePolicyData_PostAntivirusTemplatePolicyData"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/GroupComputers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GroupComputers_GetGroupComputerList"];
        put?: never;
        post: operations["GroupComputers_PostGroupComputer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/GroupComputers/{entityId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GroupComputers_GetGroupComputer"];
        put: operations["GroupComputers_PutGroupComputer"];
        post?: never;
        delete: operations["GroupComputers_DeleteGroupComputer"];
        options?: never;
        head?: never;
        patch: operations["GroupComputers_PatchGroupComputer"];
        trace?: never;
    };
    "/api/v1/GroupNetworkDevices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GroupNetworkDevices_GetGroupNetworkDeviceList"];
        put?: never;
        post: operations["GroupNetworkDevices_PostGroupNetworkDevice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/GroupNetworkDevices/{entityId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GroupNetworkDevices_GetGroupNetworkDevice"];
        put: operations["GroupNetworkDevices_PutGroupNetworkDevice"];
        post?: never;
        delete: operations["GroupNetworkDevices_DeleteGroupNetworkDevice"];
        options?: never;
        head?: never;
        patch: operations["GroupNetworkDevices_PatchGroupNetworkDevice"];
        trace?: never;
    };
    "/api/v1/Groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Groups_GetGroupList"];
        put?: never;
        post: operations["Groups_PostGroup"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Groups/{entityId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Groups_GetGroup"];
        put: operations["Groups_PutGroup"];
        post?: never;
        delete: operations["Groups_DeleteGroup"];
        options?: never;
        head?: never;
        patch: operations["Groups_PatchGroup"];
        trace?: never;
    };
    "/api/v1/TemplateAvailableProperties": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["TemplateAvailableProperties_GetTemplateAvailablePropertyList"];
        put?: never;
        post: operations["TemplateAvailableProperties_PostTemplateAvailableProperty"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/TemplateProperties": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["TemplateProperties_GetTemplatePropertyList"];
        put?: never;
        post: operations["TemplateProperties_PostTemplateProperty"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/EventLogs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["EventLog_GetEventLogsAsync"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/DataViewFolders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DataViewFolders_GetDataViewFolderList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/DataViews": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DataViews_GetDataViewList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Contacts_GetContactList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/SystemContacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SystemContacts_GetSystemContactList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/Contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["V2Contacts_GetContactList"];
        put?: never;
        post: operations["V2Contacts_PostContact"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/Contacts/{contactId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["V2Contacts_GetContact"];
        put: operations["V2Contacts_PutContact"];
        post?: never;
        delete: operations["V2Contacts_DeleteContact"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Alerts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Alerts_GetAlertsList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Alerts/{alertId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Alerts_GetAlert"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/ComputerMenus": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerMenus_GetComputerMenuList"];
        put?: never;
        post: operations["ComputerMenus_PostComputerMenu"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Computers_GetComputerList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/Alerts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerAlerts_GetComputerAlerts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/AlertSuspensions/MaintenanceWindow": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["MaintenanceAlertSuspensions_GetSuspensionList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/AlertSuspensions/TemplateDiversion": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["TemplateAlertSuspension_GetSuspensionList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/bios": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerBios_GetComputerBios"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/CommandExecute": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CommandExecute_GetCommandExecuteList"];
        put?: never;
        post: operations["CommandExecute_PostCommandExecute"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/CommandHistory": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CommandHistory_GetCommandHistoryList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/ComputerPatchingPolicies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerPatchingPolicies_GetComputerPatchingPolicyListAsync"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/Devices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Computers_GetComputerDeviceList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/computers/{computerId}/drivers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerDrivers_GetComputerDrivers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/Drives/{driveId}/SmartData": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerDrives_GetComputerDriveSmartDataList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/EffectivePatchingPolicy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerEffectivePatchingPolicy_GetComputerEffectivePatchingPolicy"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/MicrosoftUpdates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerMicrosoftUpdateData_GetComputerMicrosoftUpdateDataListAsync"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/MonitorAlertSuspensions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["MonitorAlertSuspensions_GetSuspensionList"];
        put?: never;
        post: operations["MonitorAlertSuspensions_PostSuspension"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/Monitors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerMonitors_GetComputerMonitorsList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/OperatingSystem": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerOperatingSystem_GetComputerOperatingSystem"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/PatchingStats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DevicePatchingStatistics_GetDevicePatchingStatisticsAsync"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/PatchJobs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["PatchJob_GetComputerPatchJobListAsync"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/Printers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerPrinters_GetComputerPrintersList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/Processors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Computers_GetComputerProcessorList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/RunningScripts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerRunningScripts_GetComputerRunningScripts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/ScheduledScripts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ScheduledScript_GetComputerScheduledScripts"];
        put?: never;
        post: operations["ScheduledScript_PostComputerScheduledScript"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/ScheduledScripts/{entityId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ScheduledScript_GetComputerScheduledScript"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/ScheduledTasks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerScheduledTasks_GetScheduledTaskList"];
        put?: never;
        post: operations["ComputerScheduledTasks_PostScheduledTask"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/ScriptHistory": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerScriptHistory_GetComputerScriptHistoryList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/Sensors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerSensor_GetComputerSensorListAsync"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/Services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Computers_GetComputerServiceList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/Software": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Computers_GetComputerSoftwareList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/computers/{computerId}/software/{softwareId}/uninstall": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ComputerSoftwareActions_UninstallSoftware"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/SystemSlots": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerSystemSlots_GetComputerSystemSlotList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/ThirdPartyPatches": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerThirdPartyPatches_GetComputerThirdPartyPatchListAsync"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/Ups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerUps_GetComputerUpsListAsync"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/{computerId}/VideoCards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Computers_GetComputerVideoCardList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/Chassis": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Chassis_GetComputerChassis"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/Drives": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ComputerDrives_GetComputerDriveList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/MaintenanceModes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Computers_GetComputerMaintenanceModeList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/MemorySlots": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Computers_GetComputerMemorySlotList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Computers/Software": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Computers_GetComputerSoftwareList__get_api_v1_Computers_Software"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Locations/{locationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Locations_GetLocation"];
        put: operations["Locations_PutLocation"];
        post?: never;
        delete: operations["Locations_DeleteLocation"];
        options?: never;
        head?: never;
        patch: operations["Locations_PatchLocation"];
        trace?: never;
    };
    "/api/v1/Locations/{locationId}/ExtraFields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ExtraFields_GetExtraFieldsForLocation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Locations/{locationId}/ExtraFields/{extraFieldDefinitionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["ExtraFields_ResetExtraFieldForLocation"];
        options?: never;
        head?: never;
        patch: operations["ExtraFields_PatchExtraFieldForLocation"];
        trace?: never;
    };
    "/api/v1/RetiredAssets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RetiredAssets_GetRetiredAssetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/RetiredAssets/{assetId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RetiredAssets_GetRetiredAsset"];
        put?: never;
        post?: never;
        delete: operations["RetiredAssets_DeleteRetiredAsset"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/services/{serviceId}/classify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["Services_ClassifyService"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/VirusScannerDefs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["VirusScannerDefs_GetVirusScannerDefinitionList"];
        put?: never;
        post: operations["VirusScannerDefs_PostVirusScannerDefinition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Clients": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Clients_GetClientList"];
        put?: never;
        post: operations["Clients_PostClient"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Clients/{clientId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Clients_GetClient"];
        put: operations["Clients_PutClient"];
        post?: never;
        delete: operations["Clients_DeleteClient"];
        options?: never;
        head?: never;
        patch: operations["Clients_PatchClient"];
        trace?: never;
    };
    "/api/v1/clients/{clientId}/documents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Documents_GetAllDocuments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Clients/{clientId}/ExtraFields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ExtraFields_GetExtraFieldsForClient"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/clients/{clientId}/licenses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ManagedLicenses_GetManagedLicenses"];
        put?: never;
        post: operations["ManagedLicenses_PostManagedLicense"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/clients/{clientId}/permissions/{userClassId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ClientPermissions_GetUserClassPermissions"];
        put: operations["ClientPermissions_PutUserClassPermissions"];
        post: operations["ClientPermissions_PostUserClassPermissions"];
        delete: operations["ClientPermissions_DeleteUserClassPermissions"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/clients/{clientId}/productkeys": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProductKeys_GetProductKeys"];
        put?: never;
        post: operations["ProductKeys_PostProductKey"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Locations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Locations_GetLocationList"];
        put?: never;
        post: operations["Locations_PostLocation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Commands": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Commands_GetCommandList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Commands/{entityId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Commands_GetCommand"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Batch/ProbeCommands/RunDeviceDetection": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["BatchProbeCommands_RunDeviceDetection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Batch/ScriptExecute": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["BatchScripts_ExecuteScript"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Batch/ScriptSchedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["BatchScripts_ScheduleScript"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Batch/Searches/SendTo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["BatchSearches_BatchSendToSearches"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "LabTech.RESTApi.QueryOptions": {
            OrderBy?: components["schemas"]["LabTech.RESTApi.QueryOptionOrderBy"];
            /** Format: int32 */
            Page?: number;
            /** Format: int32 */
            PageSize?: number;
            Condition?: string;
            Expands?: {
                [key: string]: components["schemas"]["LabTech.RESTApi.QueryOptionExpand"];
            };
            IncludedFields?: string[];
            ExcludedFields?: string[];
            Ids?: string[];
            /** Format: int32 */
            Timeout?: number;
        };
        "LabTech.RESTApi.QueryOptionOrderBy": {
            Name?: string;
            /** @enum {string} */
            Type?: "Undefined" | "Ascending" | "Descending";
        };
        "LabTech.RESTApi.QueryOptionExpand": {
            FieldName?: string;
            /** Format: int32 */
            Page?: number;
            /** Format: int32 */
            PageSize?: number;
            Condition?: string;
            Expands?: {
                [key: string]: components["schemas"]["LabTech.RESTApi.QueryOptionExpand"];
            };
            OrderBy?: components["schemas"]["LabTech.RESTApi.QueryOptionOrderBy"];
            IncludedFields?: string[];
            ExcludedFields?: string[];
        };
        "Automate.Api.Domain.Contracts.AccountInformation": {
            IsTrialAccount?: boolean;
        };
        "Automate.Api.Domain.Contracts.Alerts.Alert": {
            /** Format: int32 */
            AlertId?: number;
            Client?: components["schemas"]["Automate.Api.Domain.Contracts.Alerts.AlertClient"];
            Computer?: components["schemas"]["Automate.Api.Domain.Contracts.Alerts.AlertComputer"];
            Device?: components["schemas"]["Automate.Api.Domain.Contracts.Alerts.AlertDevice"];
            Location?: components["schemas"]["Automate.Api.Domain.Contracts.Alerts.AlertLocation"];
            Monitor?: components["schemas"]["Automate.Api.Domain.Contracts.Alerts.AlertMonitor"];
            /** Format: date-time */
            AlertDate?: string;
            Severity?: components["schemas"]["Automate.Api.Domain.Contracts.Alerts.AlertSeverityItem"];
            Source?: string;
            Message?: string;
            FieldName?: string;
            AlertAge?: string;
        };
        "Automate.Api.Domain.Contracts.Alerts.AlertClient": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Alerts.AlertComputer": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
            ComputerStatus?: string;
        };
        "Automate.Api.Domain.Contracts.Alerts.AlertDevice": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Alerts.AlertLocation": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Alerts.AlertMonitor": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Alerts.AlertSeverityItem": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Alerts.AlertTemplate": {
            /** Format: int32 */
            AlertTemplateId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Security.AuthInformation": {
            AllowDirect?: boolean;
            AllowServiceRegistration?: boolean;
            AutomateRedirectUri?: string;
            Services?: components["schemas"]["Automate.Api.Domain.Contracts.Security.AuthService"][];
        };
        "Automate.Api.Domain.Contracts.Security.AuthService": {
            /** Format: int32 */
            ServiceId?: number;
            ServiceName?: string;
            ServiceURI?: string;
            /** Format: int32 */
            ServiceType?: number;
            ClientId?: string;
            IsDefault?: boolean;
            IsAutomatic?: boolean;
            ServiceGuid?: string;
            IsEnabled?: boolean;
            IsLocalLoginEnabled?: boolean;
            /** Format: int32 */
            AuthenticationType?: number;
        };
        "Automate.Api.Domain.Contracts.Security.TokenCredentials": {
            Username?: string;
            Password?: string;
            TwoFactorPasscode?: string;
        };
        "Automate.Api.Domain.Contracts.Security.TokenResult": {
            AccessToken?: string;
            TokenType?: string;
            /** Format: date-time */
            ExpirationDate?: string;
            /** Format: date-time */
            AbsoluteExpirationDate?: string;
            UserId?: string;
            InternalUserName?: string;
            IsTwoFactorRequired?: boolean;
            IsInternalTwoFactorRequired?: boolean;
            SSOAccessToken?: string;
        };
        "Automate.Api.Domain.Contracts.Security.PkceRequest": {
            AuthorizationCode?: string;
            CodeVerifier?: string;
            ClientId?: string;
            RedirectUri?: string;
            IssueBearerToken?: boolean;
        };
        "Automate.Api.Domain.Contracts.Security.DisableTokenRequest": {
            SecurityToken?: string;
        };
        "LabTech.RESTApi.Security.AuthServiceCredentials": {
            /** Format: int32 */
            ServiceId?: number;
            ServiceToken?: string;
            /** @enum {string} */
            TokenType?: "Undefined" | "IdentityToken" | "AccessToken";
        };
        "Automate.Api.Domain.Contracts.Patching.ApprovalPolicy": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
            IsDefaultPolicy?: boolean;
            HasStaging?: boolean;
            /** Format: int32 */
            TestDuration?: number;
            /** Format: int32 */
            PilotDuration?: number;
            AutomaticApprovalSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.AutomaticApprovalSettings"];
            AutomaticIgnoreSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.AutomaticPolicySettings"];
            AutomaticDenySettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.AutomaticPolicySettings"];
        };
        "Automate.Api.Domain.Contracts.Patching.AutomaticApprovalSettings": {
            /** Format: int32 */
            CvssLowerBound?: number;
            Severities?: string[];
            Categories?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.WindowsUpdateCategory"][];
            Titles?: string[];
        };
        "Automate.Api.Domain.Contracts.Patching.AutomaticPolicySettings": {
            Severities?: string[];
            Categories?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.WindowsUpdateCategory"][];
            Titles?: string[];
        };
        "Automate.Api.Domain.Contracts.Patching.WindowsUpdateCategory": {
            /** Format: int32 */
            CategoryId?: number;
            CategoryName?: string;
        };
        "LabTech.RESTApi.Models.PatchOperation": {
            Op: "add" | "replace";
            Path: string;
            Value: unknown;
        } | {
            Op: "remove";
            Path: string;
            Value?: unknown;
        };
        "Automate.Api.Domain.Contracts.Patching.ApprovalPolicyStats": {
            /** Format: int32 */
            ApprovalPolicyId?: number;
            ApprovalPolicyName?: string;
            /** Format: int32 */
            PendingApprovalCount?: number;
        };
        "Automate.Api.Domain.Models.Asio.AsioConnectionsModel": {
            /** Format: int32 */
            Id?: number;
            OpenApiClientId?: string;
            OpenApiClientSecret?: string;
            Region?: string;
            APIURL?: string;
            /** Format: date-time */
            LastUpdated?: string;
        };
        "Automate.Api.Domain.Models.Asio.PartnerProducts": {
            vendor_id?: string;
            vendor_ref_name?: string;
            category_name?: string;
            product_category?: string;
            product_id?: string;
            enabled_by?: string;
            disabled_by?: string;
            product_name?: string;
            product_ref_name?: string;
            product_description?: string;
            /** Format: date-time */
            disabled_at?: string;
            /** Format: date-time */
            enabled_at?: string;
            status?: string;
            entitlements?: components["schemas"]["Automate.Api.Domain.Models.Asio.Entitlements"][];
            api_scopes?: string[];
            dev_scopes?: string[];
            is_enabled?: boolean;
            was_enabled?: boolean;
            is_product_enabled?: boolean;
            is_enabled_in_command_context?: boolean;
            metadata?: components["schemas"]["Automate.Api.Domain.Models.Asio.Metadata"];
            is_partner_originated?: boolean;
            widgets?: components["schemas"]["Automate.Api.Domain.Models.Asio.Widget"][];
        };
        "Automate.Api.Domain.Models.Asio.Entitlements": {
            type?: string;
            name?: string;
        };
        "Automate.Api.Domain.Models.Asio.Metadata": {
            is_internal?: boolean;
            token_authorization?: boolean;
            enable_open_api_credentials_sharing?: boolean;
            multiple_connections?: boolean;
            internal_notification_platform_context?: boolean;
            refresh_left_nav_menu?: boolean;
        };
        "Automate.Api.Domain.Models.Asio.Widget": {
            type?: string;
            id?: string;
            expandable?: boolean;
            name?: string;
            value?: components["schemas"]["Automate.Api.Domain.Models.Asio.NestedWidgetsValue"];
            layout?: components["schemas"]["Automate.Api.Domain.Models.Asio.Layout"];
            align?: components["schemas"]["Automate.Api.Domain.Models.Asio.NestedWidgetsAlign"];
            label?: components["schemas"]["Automate.Api.Domain.Models.Asio.NestedWidgetsLabel"];
            action?: components["schemas"]["Automate.Api.Domain.Models.Asio.WidgetAction"];
            nestedWidgets?: components["schemas"]["Automate.Api.Domain.Models.Asio.Widget"][];
            supportedWidgets?: Record<string, never>;
            lockedProperties?: Record<string, never>;
            options?: Record<string, never>;
        };
        "Automate.Api.Domain.Models.Asio.NestedWidgetsValue": {
            source?: string;
            value?: string;
            displayType?: string;
        };
        "Automate.Api.Domain.Models.Asio.Layout": {
            /** Format: double */
            width?: number;
            /** Format: double */
            height?: number;
            /** Format: int32 */
            gridSize?: number;
            type?: string;
        };
        "Automate.Api.Domain.Models.Asio.NestedWidgetsAlign": {
            /** Format: int32 */
            rowIndex?: number;
            /** Format: int32 */
            columnIndex?: number;
            /** Format: int32 */
            width?: number;
            /** Format: int32 */
            height?: number;
        };
        "Automate.Api.Domain.Models.Asio.NestedWidgetsLabel": {
            value?: string;
            position?: string;
        };
        "Automate.Api.Domain.Models.Asio.WidgetAction": {
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            TaskId?: string;
            TaskType?: string;
            TaskName?: string;
            Description?: string;
        };
        "Automate.Api.Domain.Models.Asio.DeviceSummaryVariables": {
            /** Format: int32 */
            First?: number;
            /** Format: int32 */
            After?: number;
            QueryFor?: string;
            GroupId?: string;
            SiteId?: string;
            DeviceType?: string;
            Sort?: string;
            Filter?: string;
            DVersion?: string;
            /** Format: int32 */
            LastTaskRangeDays?: number;
            ProductId?: string;
        };
        "Automate.Api.Domain.Models.Asio.DevicesSummaryRoot": {
            DevicesSummaryDataExtended?: components["schemas"]["Automate.Api.Domain.Models.Asio.DevicesSummaryDataExtended"];
        };
        "Automate.Api.Domain.Models.Asio.DevicesSummaryDataExtended": {
            DevicesSummaryDataList?: components["schemas"]["Automate.Api.Domain.Models.Asio.DevicesSummaryDataList"];
        };
        "Automate.Api.Domain.Models.Asio.DevicesSummaryDataList": {
            Edges?: components["schemas"]["Automate.Api.Domain.Models.Asio.Edge"][];
            PageInfo?: components["schemas"]["Automate.Api.Domain.Models.Asio.PageInfo"];
            StaticInfo?: string;
        };
        "Automate.Api.Domain.Models.Asio.Edge": {
            Cursor?: string;
            Node?: components["schemas"]["Automate.Api.Domain.Models.Asio.Node"];
        };
        "Automate.Api.Domain.Models.Asio.PageInfo": {
            StartCursor?: string;
            EndCursor?: string;
            HasNextPage?: boolean;
            HasPreviousPage?: boolean;
            /** Format: int32 */
            TotalCount?: number;
        };
        "Automate.Api.Domain.Models.Asio.Node": {
            RegId?: string;
            EndPointId?: string;
            ClientId?: string;
            SiteId?: string;
            SiteName?: string;
            MachineName?: string;
            FriendlyName?: string;
            DynamicFields?: components["schemas"]["Automate.Api.Domain.Models.Asio.DynamicField"][];
            ComputerName?: string;
        };
        "Automate.Api.Domain.Models.Asio.DynamicField": {
            Id?: string;
            Value?: string;
        };
        "Automate.Api.Domain.Models.Asio.EndpointExtendedAttributesVariables": {
            /** Format: int32 */
            ComputerId?: number;
            EndpointId?: string;
            Owner?: string;
            EntityType?: string;
            ClientId?: string;
            SiteId?: string;
            AttributeIds?: string[];
            OwnerId?: string;
        };
        "Automate.Api.Domain.Models.Asio.EndpointExtendedAttributes": {
            Endpoint?: components["schemas"]["Automate.Api.Domain.Models.Asio.Endpoint"];
        };
        "Automate.Api.Domain.Models.Asio.Endpoint": {
            ExtendedAttributes?: components["schemas"]["Automate.Api.Domain.Models.Asio.ExtendedAttribute"][];
        };
        "Automate.Api.Domain.Models.Asio.ExtendedAttribute": {
            AttributeId?: string;
            Type?: string;
            Value?: string;
        };
        "Automate.Api.Domain.Models.Asio.AsioTaskModel": {
            Name?: string;
            Description?: string;
            OriginId?: string;
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            DefinitionID?: string;
            Type?: string;
            Targets?: components["schemas"]["Automate.Api.Domain.Models.Asio.TargetsModel"];
            Schedule?: components["schemas"]["Automate.Api.Domain.Models.Asio.ScheduleModel"];
        };
        "Automate.Api.Domain.Models.Asio.TargetsModel": {
            Ids?: string[];
            Type?: string;
        };
        "Automate.Api.Domain.Models.Asio.ScheduleModel": {
            Regularity?: string;
        };
        "Automate.Api.Domain.Contracts.Computers.ContactAssociatedComputer": {
            /** Format: int32 */
            ComputerId?: number;
            ComputerName?: string;
            HasPrimaryContact?: boolean;
            IsPrimaryContact?: boolean;
            CanUserSetPrimaryStatus?: boolean;
            ClientName?: string;
            LocationName?: string;
        };
        "Automate.Api.Domain.Contracts.Computers.SetComputerPrimaryContactRequest": {
            IsPrimaryContact?: boolean;
        };
        "Automate.Api.Domain.Models.AuditAnalyticsBundle": {
            /** Format: int32 */
            AuditActionId?: number;
            /** Format: int32 */
            ExternalId?: number;
            SecondaryIdentifier?: string;
            UnsanitizedBaseMessage?: string;
            ExtraLogValues?: components["schemas"]["System.Collections.Generic.KeyValuePair_System.String_System.String_"][];
            SanitizedAnalyticsDescription?: string;
        };
        "LabTech.Repositories.MySQL.Domain.Models.AuthLink.UserAuthLinkStatus": {
            /** Format: int32 */
            ServiceId?: number;
            IsSsoEnabled?: boolean;
            IsLocalLoginEnabled?: boolean;
            IsEligibleForSso?: boolean;
            IsAccountLinked?: boolean;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.AvailableValues.ComputerServiceItem": {
            Id?: string;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.AvailableValues.ComputerProcessItem": {
            Id?: string;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.AvailableValues.ServerFileItem": {
            Id?: string;
            Name?: string;
            RelativePath?: string;
        };
        "LabTech.Models.AVTemplatePolicy": {
            TemplatePolicyId?: string;
            Name?: string;
            Description?: string;
            GUID?: string;
        };
        "LabTech.Models.AVTemplatePolicyData": {
            TemplatePolicyId?: string;
            PluginGUID?: string;
            Data?: string;
        };
        "Automate.Api.Domain.Contracts.AiSideKickSetting.AiSideKickSettingBatchRequest": {
            AiSideKickSettingGuids?: string[];
        };
        "Automate.Api.Domain.Contracts.Patching.BatchingContracts.AdvanceStageRequest": {
            HotfixesToAdvance?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.BatchingContracts.HotfixOperatingSystemCombination"][];
        };
        "Automate.Api.Domain.Contracts.Patching.BatchingContracts.HotfixOperatingSystemCombination": {
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            HotfixId?: string;
            OperatingSystem?: string;
        };
        "Automate.Api.Domain.Contracts.BatchApprovalPolicies.WindowsApprovalPolicyPatchBatchRequest": {
            PatchPolicies?: components["schemas"]["Automate.Api.Domain.Contracts.BatchApprovalPolicies.WindowsApprovalPolicyPatch"][];
        };
        "Automate.Api.Domain.Contracts.BatchApprovalPolicies.WindowsApprovalPolicyPatch": {
            /** Format: int32 */
            ApprovalActionId?: number;
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            HotfixId?: string;
            OperatingSystem?: string;
        };
        "Automate.Api.Domain.Contracts.BatchApprovalPolicies.ApprovalPolicyThirdPartyPatchRequest": {
            PatchPolicies?: components["schemas"]["Automate.Api.Domain.Contracts.BatchApprovalPolicies.ApprovalPolicyThirdPartyPatchSetting"][];
        };
        "Automate.Api.Domain.Contracts.BatchApprovalPolicies.ApprovalPolicyThirdPartyPatchSetting": {
            /** Format: int32 */
            PatchApproval?: number;
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            LTProductKey?: string;
            Version?: string;
        };
        "Automate.Api.Domain.Contracts.BatchBinaryExtension.BinaryExtensionBatchRequest": {
            BinaryExtensionIds?: number[];
        };
        "Automate.Api.Domain.Contracts.BatchRemoteMonitors.DeleteComputerRemoteMonitorsBatchRequest": {
            /** Format: int32 */
            ComputerId?: number;
            RemoteMonitorIds?: number[];
        };
        "Automate.Api.Domain.Contracts.BatchRemoteMonitors.DeleteRemoteMonitorBatchResponse": {
            RemoteMonitorResults?: components["schemas"]["Automate.Api.Domain.Contracts.BatchRemoteMonitors.DeleteRemoteMonitorBatchResult"][];
            ContainsUnsuccessfulResults?: boolean;
        };
        "Automate.Api.Domain.Contracts.BatchRemoteMonitors.DeleteRemoteMonitorBatchResult": {
            /** Format: int32 */
            RemoteMonitorId?: number;
            ResultDetails?: components["schemas"]["Automate.Api.Domain.Contracts.ResponseResult"];
        };
        "Automate.Api.Domain.Contracts.ResponseResult": {
            /** Format: int32 */
            ResultStatus?: number;
            /** Format: int32 */
            ReasonCode?: number;
            Message?: string;
        };
        "Automate.Api.Domain.Contracts.BatchRemoteMonitors.SendToAgentRemoteMonitorsBatchRequest": {
            RemoteMonitorIds?: number[];
            GroupIds?: number[];
        };
        "Automate.Api.Domain.Contracts.BatchRemoteMonitors.SendToAgentRemoteMonitorsBatchResponse": {
            RemoteMonitorResults?: components["schemas"]["Automate.Api.Domain.Contracts.BatchRemoteMonitors.SendToAgentRemoteMonitorsBatchResult"][];
            ContainsUnsuccessfulResults?: boolean;
        };
        "Automate.Api.Domain.Contracts.BatchRemoteMonitors.SendToAgentRemoteMonitorsBatchResult": {
            /** Format: int32 */
            RemoteMonitorId?: number;
            /** Format: int32 */
            GroupId?: number;
            ResultDetails?: components["schemas"]["Automate.Api.Domain.Contracts.ResponseResult"];
        };
        "Automate.Api.Domain.Contracts.BatchContacts.WebClientAccessBatchRequest": {
            /** @enum {string} */
            RequestType?: "Invite" | "Reset";
            /** @enum {string} */
            EntityType?: "System" | "Computer" | "Site" | "Company" | "Probe" | "NetworkDevice" | "Ticket" | "Group" | "MobileDevice" | "Vendor" | "VendorProduct" | "Possibility" | "Opportunity" | "Contact" | "User" | "Script" | "Plugin" | "Service" | "ServiceBundle" | "Search" | "SearchFolder" | "Dataview" | "DataviewFolder" | "UserFolder" | "UserClass" | "ScriptFolder" | "RemoteMonitorTemplate" | "ExtraField";
            EntityIds?: number[];
        };
        "Automate.Api.Domain.Contracts.BatchContacts.WebClientAccessBatchResponse": {
            WebClientAccessResults?: components["schemas"]["Automate.Api.Domain.Contracts.BatchContacts.WebClientAccessBatchResult"][];
            ContainsUnsuccessfulResults?: boolean;
        };
        "Automate.Api.Domain.Contracts.BatchContacts.WebClientAccessBatchResult": {
            /** Format: int32 */
            ContactId?: number;
            ResultDetails?: components["schemas"]["Automate.Api.Domain.Contracts.ResponseResult"];
        };
        "Automate.Api.Domain.Contracts.BatchContacts.ContactPermissionBatchRequest": {
            /** @enum {string} */
            RequestType?: "Add" | "Remove";
            ContactIds?: number[];
            Permissions?: string[];
        };
        "Automate.Api.Domain.Contracts.BatchContacts.ContactPermissionBatchResponse": {
            ContactPermissionResults?: components["schemas"]["Automate.Api.Domain.Contracts.BatchContacts.ContactPermissionBatchResult"][];
            ContainsUnsuccessfulResults?: boolean;
        };
        "Automate.Api.Domain.Contracts.BatchContacts.ContactPermissionBatchResult": {
            /** Format: int32 */
            ContactId?: number;
            ResultDetails?: components["schemas"]["Automate.Api.Domain.Contracts.ResponseResult"];
        };
        "Automate.Api.Domain.Contracts.BatchUsers.GeneratePasswordResetTokenBatchRequest": {
            UserIds?: number[];
        };
        "Automate.Api.Domain.Contracts.BatchCommands.Computer.ExecuteResendInventoryCommandBatchRequest": {
            InventoryTypes?: number[];
            /** @enum {string} */
            EntityType?: "System" | "Computer" | "Site" | "Company" | "Probe" | "NetworkDevice" | "Ticket" | "Group" | "MobileDevice" | "Vendor" | "VendorProduct" | "Possibility" | "Opportunity" | "Contact" | "User" | "Script" | "Plugin" | "Service" | "ServiceBundle" | "Search" | "SearchFolder" | "Dataview" | "DataviewFolder" | "UserFolder" | "UserClass" | "ScriptFolder" | "RemoteMonitorTemplate" | "ExtraField";
            EntityIds?: number[];
        };
        "Automate.Api.Domain.Contracts.BatchIpRestrictions.DeleteIpRestrictionsBatchRequest": {
            IpRestrictionsIds?: string[];
        };
        "Automate.Api.Domain.Contracts.BatchIpRestrictions.DeleteIpRestrictionsBatchResponse": {
            IpRestrictionsResults?: components["schemas"]["Automate.Api.Domain.Contracts.BatchIpRestrictions.DeleteIpRestrictionsBatchResult"][];
            ContainsUnsuccessfulResults?: boolean;
        };
        "Automate.Api.Domain.Contracts.BatchIpRestrictions.DeleteIpRestrictionsBatchResult": {
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            IpRestrictionsId?: string;
            ResultDetails?: components["schemas"]["Automate.Api.Domain.Contracts.ResponseResult"];
        };
        "Automate.Api.Domain.Contracts.BatchIpRestrictions.AddIpRestrictionsBatchRequest": {
            IpRestrictionRules?: components["schemas"]["Automate.Api.Domain.Contracts.IpRestrictions.IpRestrictionRule"][];
        };
        "Automate.Api.Domain.Contracts.IpRestrictions.IpRestrictionRule": {
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            IpAddressGuid?: string;
            Name?: string;
            IpAddress?: string;
            WindowsClientAccess?: boolean;
            WebClientAccess?: boolean;
            CreatedBy?: string;
            /** Format: date-time */
            CreateDate?: string;
            UpdatedBy?: string;
            /** Format: date-time */
            UpdateDate?: string;
        };
        "Automate.Api.Domain.Contracts.BatchIpRestrictions.AddIpRestrictionsBatchResponse": {
            IpRestrictionsResults?: components["schemas"]["Automate.Api.Domain.Contracts.BatchIpRestrictions.AddIpRestrictionsBatchResult"][];
            ContainsUnsuccessfulResults?: boolean;
        };
        "Automate.Api.Domain.Contracts.BatchIpRestrictions.AddIpRestrictionsBatchResult": {
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            IpAddressGuid?: string;
            Name?: string;
            IpAddress?: string;
            WindowsClientAccess?: boolean;
            WebClientAccess?: boolean;
            ResultDetails?: components["schemas"]["Automate.Api.Domain.Contracts.ResponseResult"];
        };
        "Automate.Api.Domain.Contracts.BatchMaintenanceModes.MaintenanceModes.MaintenanceModeQueueBatchRequest": {
            /** @enum {string} */
            EntityType?: "System" | "Computer" | "Site" | "Company" | "Probe" | "NetworkDevice" | "Ticket" | "Group" | "MobileDevice" | "Vendor" | "VendorProduct" | "Possibility" | "Opportunity" | "Contact" | "User" | "Script" | "Plugin" | "Service" | "ServiceBundle" | "Search" | "SearchFolder" | "Dataview" | "DataviewFolder" | "UserFolder" | "UserClass" | "ScriptFolder" | "RemoteMonitorTemplate" | "ExtraField";
            EntityIds?: number[];
            /** Format: date-time */
            StartDate?: string;
            /** Format: int32 */
            DurationInMinutes?: number;
            Mode?: string;
            Comments?: string;
        };
        "Automate.Api.Domain.Contracts.BatchCommands.SetMasterMode.SetMasterModeBatchRequest": {
            /** @enum {string} */
            EntityType?: "System" | "Computer" | "Site" | "Company" | "Probe" | "NetworkDevice" | "Ticket" | "Group" | "MobileDevice" | "Vendor" | "VendorProduct" | "Possibility" | "Opportunity" | "Contact" | "User" | "Script" | "Plugin" | "Service" | "ServiceBundle" | "Search" | "SearchFolder" | "Dataview" | "DataviewFolder" | "UserFolder" | "UserClass" | "ScriptFolder" | "RemoteMonitorTemplate" | "ExtraField";
            EntityIds?: number[];
            MasterModeType?: string;
        };
        "Automate.Api.Domain.Contracts.BatchRemoteMonitors.DeleteNetworkDevicesRemoteMonitorsBatchRequest": {
            /** Format: int32 */
            NetworkDeviceId?: number;
            RemoteMonitorIds?: number[];
        };
        "Automate.Api.Domain.Contracts.BatchCommands.Computer.ExecuteComputersBatchRequest": {
            /** @enum {string} */
            EntityType?: "System" | "Computer" | "Site" | "Company" | "Probe" | "NetworkDevice" | "Ticket" | "Group" | "MobileDevice" | "Vendor" | "VendorProduct" | "Possibility" | "Opportunity" | "Contact" | "User" | "Script" | "Plugin" | "Service" | "ServiceBundle" | "Search" | "SearchFolder" | "Dataview" | "DataviewFolder" | "UserFolder" | "UserClass" | "ScriptFolder" | "RemoteMonitorTemplate" | "ExtraField";
            EntityIds?: number[];
        };
        "Automate.Api.Domain.Contracts.BatchCommands.Probe.ExecuteProbeBatchRequest": {
            ProbeIds?: number[];
        };
        "Automate.Api.Domain.Contracts.BatchCommands.Probe.ExecuteProbeBatchResponse": {
            ProbeCommandResults?: components["schemas"]["Automate.Api.Domain.Contracts.BatchCommands.Probe.ExecuteProbeCommandResult"][];
            ContainsUnsuccessfulResults?: boolean;
        };
        "Automate.Api.Domain.Contracts.BatchCommands.Probe.ExecuteProbeCommandResult": {
            /** Format: int32 */
            ProbeId?: number;
            ResultDetails?: components["schemas"]["Automate.Api.Domain.Contracts.ResponseResult"];
        };
        "Automate.Api.Domain.Contracts.BatchRemoteMonitors.DeleteRemoteMonitorsBatchRequest": {
            /** Format: int32 */
            GroupId?: number;
            RemoteMonitorIds?: number[];
        };
        "Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchRequest": {
            /** @enum {string} */
            EntityType?: "System" | "Computer" | "Site" | "Company" | "Probe" | "NetworkDevice" | "Ticket" | "Group" | "MobileDevice" | "Vendor" | "VendorProduct" | "Possibility" | "Opportunity" | "Contact" | "User" | "Script" | "Plugin" | "Service" | "ServiceBundle" | "Search" | "SearchFolder" | "Dataview" | "DataviewFolder" | "UserFolder" | "UserClass" | "ScriptFolder" | "RemoteMonitorTemplate" | "ExtraField";
            EntityIds?: number[];
            /** Format: int32 */
            ScriptId?: number;
            ScriptGuid?: string;
            Schedule?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptScheduleSettings"];
            Parameters?: components["schemas"]["System.Collections.Generic.KeyValuePair_System.String_System.String_"][];
            UseAgentTime?: boolean;
            /** Format: date-time */
            StartDate?: string;
            /** Format: date-time */
            ExpireDate?: string;
            OfflineActionFlags?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScriptOfflineActionFlags"];
            DistributionWindow?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.DistributionWindow"];
            /** Format: int32 */
            Priority?: number;
            IncludeSubGroups?: boolean;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScriptScheduleSettings": {
            ScriptScheduleFrequency?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.ScriptScheduleFrequency"];
            MinutelySettings?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.MinutelyScheduleFrequency"];
            HourlySettings?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.HourlyScheduleFrequency"];
            DailySettings?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.DailyScheduleFrequency"];
            WeeklySettings?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.WeeklyScheduleFrequency"];
            MonthlySettings?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.MonthlyScheduleFrequency"];
        };
        "Automate.Api.Domain.Contracts.Scripts.ScheduledScriptOfflineActionFlags": {
            SkipsOfflineAgents?: boolean;
            WakesOfflineAgents?: boolean;
            OnlyRunsOnOfflineAgents?: boolean;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.DistributionWindow": {
            DistributionWindowType?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.DistributionWindowType"];
            /** Format: int32 */
            Amount?: number;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.ScriptScheduleFrequency": {
            /** Format: int32 */
            ScriptScheduleFrequencyId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.MinutelyScheduleFrequency": {
            /** Format: int32 */
            MinutelyInterval?: number;
            ExclusionStartTime?: string;
            ExclusionEndTime?: string;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.HourlyScheduleFrequency": {
            /** Format: int32 */
            HourlyInterval?: number;
            ExclusionStartTime?: string;
            ExclusionEndTime?: string;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.DailyScheduleFrequency": {
            RunsAt?: string;
            /** Format: int32 */
            DailyInterval?: number;
            DaysOfWeekSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.DaysOfWeekSettings"];
            DailyRepeatSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.DailyRepeatSettings"];
        };
        "Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.WeeklyScheduleFrequency": {
            RunsAt?: string;
            WeeksOfMonthSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.WeeksOfMonthSettings"];
            DaysOfWeekSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.DaysOfWeekSettings"];
        };
        "Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.MonthlyScheduleFrequency": {
            RunsAt?: string;
            /** Format: int32 */
            MonthlyInterval?: number;
            /** Format: int32 */
            Day?: number;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.DistributionWindowType": {
            /** Format: int32 */
            DistributionWindowTypeId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.DaysOfWeekSettings": {
            Sunday?: boolean;
            Monday?: boolean;
            Tuesday?: boolean;
            Wednesday?: boolean;
            Thursday?: boolean;
            Friday?: boolean;
            Saturday?: boolean;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.DailyRepeatSettings": {
            DailyScriptRepeatFrequency?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.DailyScriptRepeatFrequency"];
            /** Format: int32 */
            DailyRepeatInterval?: number;
            /** Format: int32 */
            MaximumRepetitions?: number;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.WeeksOfMonthSettings": {
            First?: boolean;
            Second?: boolean;
            Third?: boolean;
            Fourth?: boolean;
            Last?: boolean;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.Frequency.DailyScriptRepeatFrequency": {
            /** Format: int32 */
            DailyScriptRepeatFrequencyId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchResponse": {
            ScriptResults?: components["schemas"]["Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchResult"][];
            ContainsUnsuccessfulResults?: boolean;
        };
        "Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchResult": {
            /** Format: int32 */
            EntityId?: number;
            ResultDetails?: components["schemas"]["Automate.Api.Domain.Contracts.ResponseResult"];
        };
        "Automate.Api.Domain.Contracts.BatchScripts.DeleteScriptBatchRequest": {
            ScriptIds?: number[];
        };
        "Automate.Api.Domain.Contracts.BatchScripts.DeleteScriptBatchResponse": {
            ScriptResults?: components["schemas"]["Automate.Api.Domain.Contracts.BatchScripts.DeleteScriptBatchResult"][];
            ContainsUnsuccessfulResults?: boolean;
        };
        "Automate.Api.Domain.Contracts.BatchScripts.DeleteScriptBatchResult": {
            /** Format: int32 */
            ScriptId?: number;
            ResultDetails?: components["schemas"]["Automate.Api.Domain.Contracts.ResponseResult"];
        };
        "Automate.Api.Domain.Contracts.Searches.DeleteSearchesBatchRequest": {
            SearchIds?: number[];
        };
        "Automate.Api.Domain.Contracts.Searches.SearchesBatchResponse": {
            SearchesResults?: components["schemas"]["Automate.Api.Domain.Contracts.Searches.DeleteSearchesBatchResult"][];
            ContainsUnsuccessfulResults?: boolean;
        };
        "Automate.Api.Domain.Contracts.Searches.DeleteSearchesBatchResult": {
            /** Format: int32 */
            SearchId?: number;
            SearchName?: string;
            ResultDetails?: components["schemas"]["Automate.Api.Domain.Contracts.ResponseResult"];
        };
        "Automate.Api.Domain.Contracts.Searches.SendToSearchesBatchRequest": {
            SearchIds?: number[];
            /** Format: int32 */
            FolderId?: number;
        };
        "Automate.Api.Domain.Contracts.Searches.SendToSearchesBatchResponse": {
            SearchResults?: components["schemas"]["Automate.Api.Domain.Contracts.Searches.SendToBatchResult"][];
            ContainsUnsuccessfulResults?: boolean;
        };
        "Automate.Api.Domain.Contracts.Searches.SendToBatchResult": {
            /** Format: int32 */
            SearchId?: number;
            ResultDetails?: components["schemas"]["Automate.Api.Domain.Contracts.ResponseResult"];
        };
        "Automate.Api.Domain.Contracts.BatchCommands.SendTo.SendToCommandBatchRequest": {
            /** @enum {string} */
            EntityType?: "System" | "Computer" | "Site" | "Company" | "Probe" | "NetworkDevice" | "Ticket" | "Group" | "MobileDevice" | "Vendor" | "VendorProduct" | "Possibility" | "Opportunity" | "Contact" | "User" | "Script" | "Plugin" | "Service" | "ServiceBundle" | "Search" | "SearchFolder" | "Dataview" | "DataviewFolder" | "UserFolder" | "UserClass" | "ScriptFolder" | "RemoteMonitorTemplate" | "ExtraField";
            EntityIds?: number[];
            /** @enum {string} */
            TargetType?: "System" | "Computer" | "Site" | "Company" | "Probe" | "NetworkDevice" | "Ticket" | "Group" | "MobileDevice" | "Vendor" | "VendorProduct" | "Possibility" | "Opportunity" | "Contact" | "User" | "Script" | "Plugin" | "Service" | "ServiceBundle" | "Search" | "SearchFolder" | "Dataview" | "DataviewFolder" | "UserFolder" | "UserClass" | "ScriptFolder" | "RemoteMonitorTemplate" | "ExtraField";
            /** Format: int32 */
            TargetId?: number;
        };
        "Automate.Api.Domain.Contracts.BatchCommands.Computer.ExecuteRebootCommandBatchRequest": {
            /** Format: int32 */
            RebootType?: number;
            /** @enum {string} */
            EntityType?: "System" | "Computer" | "Site" | "Company" | "Probe" | "NetworkDevice" | "Ticket" | "Group" | "MobileDevice" | "Vendor" | "VendorProduct" | "Possibility" | "Opportunity" | "Contact" | "User" | "Script" | "Plugin" | "Service" | "ServiceBundle" | "Search" | "SearchFolder" | "Dataview" | "DataviewFolder" | "UserFolder" | "UserClass" | "ScriptFolder" | "RemoteMonitorTemplate" | "ExtraField";
            EntityIds?: number[];
        };
        "Automate.Api.Domain.Contracts.BatchCommands.Computer.ExecuteComputersBatchResponse": {
            ComputerCommandResultList?: components["schemas"]["Automate.Api.Domain.Contracts.BatchCommands.Computer.ExecuteComputerCommandResult"][];
            ContainsUnsuccessfulResults?: boolean;
        };
        "Automate.Api.Domain.Contracts.BatchCommands.Computer.ExecuteComputerCommandResult": {
            /** Format: int32 */
            ComputerId?: number;
            /** Format: int32 */
            CommandId?: number;
            ResultDetails?: components["schemas"]["Automate.Api.Domain.Contracts.ResponseResult"];
        };
        "Automate.Api.Domain.Contracts.BatchCommands.Probe.ExecuteToggleProbeCommandBatchRequest": {
            ComputerIds?: number[];
            EnableProbe?: boolean;
        };
        "Automate.Api.Domain.Contracts.BatchCommands.Computer.ExecuteToggleServiceUserCommandBatchRequest": {
            UseLocalAccount?: boolean;
            LocalAccountCredentials?: components["schemas"]["Automate.Api.Domain.Contracts.BatchCommands.Computer.ToggleServiceUserLocalAccountCredentials"];
            /** @enum {string} */
            EntityType?: "System" | "Computer" | "Site" | "Company" | "Probe" | "NetworkDevice" | "Ticket" | "Group" | "MobileDevice" | "Vendor" | "VendorProduct" | "Possibility" | "Opportunity" | "Contact" | "User" | "Script" | "Plugin" | "Service" | "ServiceBundle" | "Search" | "SearchFolder" | "Dataview" | "DataviewFolder" | "UserFolder" | "UserClass" | "ScriptFolder" | "RemoteMonitorTemplate" | "ExtraField";
            EntityIds?: number[];
        };
        "Automate.Api.Domain.Contracts.BatchCommands.Computer.ToggleServiceUserLocalAccountCredentials": {
            Username?: string;
            Password?: string;
        };
        "Automate.Api.Domain.Contracts.BatchUsers.UserClassMembership.UserClassMembershipRequest": {
            UserIds?: number[];
            UserClassIds?: number[];
        };
        "Automate.Api.Domain.Contracts.BatchUsers.UsersGroupMembership.UsersGroupMembershipBatchRequest": {
            UserIds?: number[];
            GroupIds?: number[];
        };
        "Automate.Api.Domain.Contracts.BatchUsers.UsersUnlock.UsersUnlockRequest": {
            UserIds?: number[];
        };
        "Automate.Api.Domain.Contracts.BatchWebExtension.WebExtensionBatchRequest": {
            WebExtensionIds?: number[];
        };
        "Automate.Api.Domain.Contracts.SystemExtensions.Binary.BinaryExtension": {
            Category?: string;
            Description?: string;
            /** Format: byte */
            FileData?: string;
            IsEnabled?: boolean;
            IsLoadedInAutomationServer?: boolean;
            IsLoadedInIIS?: boolean;
            IsRemoteAgentExtension?: boolean;
            /** Format: date-time */
            ReleaseDate?: string;
            RunStyle?: components["schemas"]["Automate.Api.Domain.Contracts.SystemExtensions.Binary.RunStyle"];
            Author?: string;
            FileChecksum?: string;
            FileName?: string;
            ExtensionName?: string;
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            ExtensionGuid?: string;
            /** Format: int32 */
            ExtensionId?: number;
            Version?: string;
        };
        "Automate.Api.Domain.Contracts.SystemExtensions.Binary.RunStyle": {
            /** Format: int32 */
            RunStyleId?: number;
            Name?: string;
        };
        "LabTech.Models.CacheControl": {
            CacheId?: string;
            /** Format: date-time */
            CustomCommands?: string;
            /** Format: date-time */
            CustomMenus?: string;
            /** Format: date-time */
            Huds?: string;
            /** Format: date-time */
            Apps?: string;
            /** Format: date-time */
            UserFolders?: string;
            /** Format: date-time */
            Users?: string;
            /** Format: date-time */
            Schedules?: string;
            /** Format: date-time */
            Templates?: string;
            /** Format: date-time */
            DataViewFolders?: string;
            /** Format: date-time */
            Dataviews?: string;
            /** Format: date-time */
            ReportFolders?: string;
            /** Format: date-time */
            Reports?: string;
            /** Format: date-time */
            Links?: string;
            /** Format: date-time */
            ScriptFolders?: string;
            /** Format: date-time */
            Scripts?: string;
            /** Format: date-time */
            SensorChecks?: string;
            /** Format: date-time */
            AuditActions?: string;
            /** Format: date-time */
            RemoteCommands?: string;
            /** Format: date-time */
            Contacts?: string;
            /** Format: date-time */
            TimeCategory?: string;
            /** Format: date-time */
            TicketData?: string;
            /** Format: date-time */
            TicketCategory?: string;
            /** Format: date-time */
            Functions?: string;
            /** Format: date-time */
            Redirectors?: string;
            /** Format: date-time */
            VirusScanners?: string;
            /** Format: date-time */
            ControlCenterConfig?: string;
            /** Format: date-time */
            Properties?: string;
            /** Format: date-time */
            Config?: string;
            /** Format: date-time */
            Regions?: string;
            /** Format: date-time */
            ConfigOutlook?: string;
            /** Format: date-time */
            Computers?: string;
            /** Format: date-time */
            Locations?: string;
            /** Format: date-time */
            Clients?: string;
            /** Format: date-time */
            Groups?: string;
            /** Format: date-time */
            Agents?: string;
            /** Format: date-time */
            Permissions?: string;
            /** Format: date-time */
            WriteConfigControl?: string;
            /** Format: date-time */
            AlertTemplates?: string;
            /** Format: date-time */
            RoleDefinitions?: string;
        };
        "LabTech.Models.ComputerChassis": {
            /** Format: int32 */
            ComputerId?: number;
            Manufacturer?: string;
            ProductName?: string;
            Version?: string;
            SerialNumber?: string;
            UUID?: string;
            SkuNumber?: string;
            Family?: string;
            ChassisType?: string;
            ChassisLock?: boolean;
            AssetTag?: string;
            /** Format: int32 */
            HeightUnits?: number;
            /** Format: int32 */
            SystemBootState?: number;
            /** Format: int32 */
            PowerSupplyBootState?: number;
            /** Format: int32 */
            ThermalBootState?: number;
            MainBoardProduct?: string;
            MainBoardSerialNumber?: string;
            MainBoardVersion?: string;
            MainBoardManufacturer?: string;
            /** Format: date-time */
            LastUpdate?: string;
        };
        "Automate.Api.Domain.Contracts.Clients.FilterByComputerPermissionsRequest": {
            ComputerPermissions?: string[];
        };
        "LabTech.Models.Client": {
            Id?: string;
            Name?: string;
            Company?: string;
            FirstName?: string;
            LastName?: string;
            Address1?: string;
            Address2?: string;
            City?: string;
            State?: string;
            ZipCode?: string;
            PhoneNumber?: string;
            FaxNumber?: string;
            Comment?: string;
            Country?: string;
            ExternalId?: string;
            UsesInHouseSupportStaff?: boolean;
            NewTicketNotificationEmail?: string;
            IsHiddenFromAllInclusiveGroup?: boolean;
            Locations?: components["schemas"]["LabTech.Models.Location"][];
        };
        "LabTech.Models.Location": {
            /** Format: int32 */
            Id?: number;
            Client?: components["schemas"]["LabTech.Models.Client"];
            Name?: string;
            Address1?: string;
            Address2?: string;
            City?: string;
            State?: string;
            ZipCode?: string;
            Country?: string;
            PhoneNumber?: string;
            FaxNumber?: string;
            Contact?: components["schemas"]["LabTech.Models.Contact"];
            Comments?: string;
            /** Format: int32 */
            RouterPort?: number;
            ScriptDrive?: string;
            ScriptUsername?: string;
            ScriptPassword?: string;
            ScriptRouterAddress?: string;
            ScriptExtra1?: string;
            ScriptExtra2?: string;
            /** Format: int32 */
            ProbeId?: number;
            /** Format: int32 */
            ExternalId?: number;
            Router?: components["schemas"]["LabTech.Models.Router"];
            DeploymentTemplate?: components["schemas"]["LabTech.Models.RemoteAgentTemplate"];
            MaintenanceWindow?: components["schemas"]["LabTech.Models.TemporaryApiContracts.MaintenanceWindowDefinition"];
            DefaultDeploymentGroup?: components["schemas"]["LabTech.Models.Group"];
            DefaultDeploymentLogin?: components["schemas"]["LabTech.Models.TemporaryApiContracts.DeploymentLogin"];
        };
        "LabTech.Models.Contact": {
            Id?: string;
            Location?: components["schemas"]["LabTech.Models.Location"];
            Client?: components["schemas"]["LabTech.Models.Client"];
            FirstName?: string;
            LastName?: string;
            Address1?: string;
            Address2?: string;
            City?: string;
            State?: string;
            ZipCode?: string;
            PhoneNumber?: string;
            MobileNumber?: string;
            FaxNumber?: string;
            PagerNumber?: string;
            Email?: string;
            ExternalId?: string;
            WebPermissions?: components["schemas"]["LabTech.Models.ContactWebPermissions"];
            /** Format: date-time */
            CreatedDate?: string;
            AssociatedComputers?: components["schemas"]["LabTech.Models.Computer"][];
        };
        "LabTech.Models.Router": {
            /** Format: int32 */
            Id?: number;
            ManufacturerName?: string;
            Model?: string;
            Version?: string;
            PortType?: string;
            Username?: string;
            Password?: string;
            Guid?: string;
        };
        "LabTech.Models.RemoteAgentTemplate": {
            Id?: string;
            Name?: string;
            TemplateGUID?: string;
            ServerAddress?: string;
            /** @enum {string} */
            EventLogInventoryMode?: "InventoryOnlyUsesSchedule" | "ImmediatelySendErrors" | "ImmediatelySendErrorsAndWarnings" | "ImmediatelySendAllButSecurity" | "ImmediatelySendAll";
            /** @enum {string} */
            WindowsUpdate?: "DoNothing" | "EnableWindowsUpdateDefaults" | "SetToDownloadOnly" | "DisableWindowsUpdate" | "LabtechModeLabtechModeUIAccessDisabled";
            SSLAcceptExpiredCertificates?: boolean;
            SSLAccessUntrustedCertificateAuthorities?: boolean;
            SSLAcceptMismatchedNames?: boolean;
            SSLAcceptRevokedCertificates?: boolean;
            SSLAcceptAll?: boolean;
            DefaultLanguagePack?: string;
            HeartbeatEnabled?: boolean;
            /** Format: int32 */
            HeartbeatFrequency?: number;
            RemoteAgentLogDebug?: boolean;
            Schedule?: components["schemas"]["LabTech.Models.RemoteAgentSchedule"];
            AgentUpdateWindow?: components["schemas"]["LabTech.Models.Schedule"];
            TempDirectory?: string;
            CacheDirectory?: string;
            CacheUsername?: string;
            CachePassword?: string;
            CachePatch?: boolean;
            CacheSoftware?: boolean;
            CacheUpdate?: boolean;
            TrayTitle?: string;
            RemoteAgentName?: string;
            ShowTray?: boolean;
            TrayDisablePoweredBy?: boolean;
            /** Format: byte */
            TrayIcon?: string;
            /** @enum {string} */
            AgentRebootMode?: "Now" | "Ask" | "AskThenAllow" | "AskThenDeny" | "Deny";
            /** @enum {string} */
            RemoteAccessMode?: "Silent" | "Ask" | "AskThenAllow" | "AskThenDeny" | "Deny";
            /** @enum {string} */
            FileExplorerAccessMode?: "Now" | "Ask" | "AskThenAllow" | "AskThenDeny" | "Deny";
            /** @enum {string} */
            RegistryEditorAccessMode?: "Now" | "Ask" | "AskThenAllow" | "AskThenDeny" | "Deny";
            /** @enum {string} */
            ScreenCaptureAccessMode?: "Now" | "Ask" | "AskThenAllow" | "AskThenDeny" | "Deny";
            DisallowUserCloseTray?: boolean;
            AllowUserDisableRemoteAccess?: boolean;
            TrayHelpURL?: string;
            TrayCustomMenuTitle?: string;
            TrayCustomMenuURL?: string;
            TrayShowCustomMenu?: boolean;
            TrayShowHelp?: boolean;
            TrayMenus?: components["schemas"]["LabTech.Models.ComputerMenu"][];
            TrayRebootLogOffNotificationText?: string;
            TrayShutdownNotificationText?: string;
            TrayRemoteAccessNotificationText?: string;
            TrayFileExplorerAccessNotificationText?: string;
            TrayRegistryEditorAccessNotificationText?: string;
            TrayScreenCaptureAccessNotificationText?: string;
            ServiceTicketTitle?: string;
            TrayTicketFromLabelText?: string;
            TrayTicketSubjectLabelText?: string;
            TrayShowServiceTicketMenu?: boolean;
            TrayShowMessagesAndTickets?: boolean;
            TrayTicketVerifyEmail?: boolean;
            /** Format: int32 */
            TrayTicketImportance?: number;
            TrayTicketImportanceIsForced?: boolean;
            SupportURL?: string;
            RSSFeedAddress1?: string;
            RSSFeedAddress2?: string;
            RSSFeedAddress3?: string;
            RSSFeedAddress4?: string;
            EnableRSS?: boolean;
            TrayChatNotificationText?: string;
            TrayChatNotificationTitle?: string;
            TrayInterruptUserWithChat?: boolean;
            ProxyServerURL?: string;
            ProxyServerUser?: string;
            ProxyServerPassword?: string;
            TrayNotificationTitle?: string;
            TrayNewMessageNotificationText?: string;
            TrayNewRSSFeedNotificationText?: string;
            TrayRemoteAccessNotificationTitle?: string;
            TraySystemMessageNotificationTitle?: string;
            BackupServerURL?: string;
            BackupServerUser?: string;
            BackupServerPassword?: string;
            NetworkAccessStoragePath?: string;
            TemplateProperties?: components["schemas"]["LabTech.Models.TemplateProperty"][];
            AntivirusTemplate?: components["schemas"]["LabTech.Models.AVTemplatePolicy"];
        };
        "LabTech.Models.TemporaryApiContracts.MaintenanceWindowDefinition": {
            /** Format: int32 */
            MaintenanceWindowDefinitionId?: number;
            Name?: string;
            Comment?: string;
        };
        "LabTech.Models.Group": {
            Id?: string;
            ParentId?: string;
            SubGroups?: number[];
            ParentGroups?: number[];
            Parents?: components["schemas"]["LabTech.Models.GroupPartial"][];
            /** Format: int32 */
            Depth?: number;
            Name?: string;
            FullName?: string;
            /** Format: int32 */
            TypeId?: number;
            TypeName?: string;
            /** Format: int32 */
            TemplatePriority?: number;
            GUID?: string;
            ComputersAutoJoinSearch?: components["schemas"]["LabTech.Models.Search"];
            NetworkDevicesAutoJoinSearch?: components["schemas"]["LabTech.Models.Search"];
            ContactsAutoJoinSearch?: components["schemas"]["LabTech.Models.Search"];
            MaintenanceWindow?: components["schemas"]["LabTech.Models.MaintenanceWindow"];
            /** Format: date-time */
            MaintenanceWindowLastApplied?: string;
            ComputersLimitToSearch?: boolean;
            NetworkDevicesLimitToSearch?: boolean;
            ContactsLimitToSearch?: boolean;
            ContactsJoinComputers?: boolean;
            RemoteAgentTemplate?: components["schemas"]["LabTech.Models.RemoteAgentTemplate"];
            ClientToSync?: components["schemas"]["LabTech.Models.Client"];
            LocationToSync?: components["schemas"]["LabTech.Models.Location"];
            Comments?: string;
            ComputerPermissions?: components["schemas"]["LabTech.Models.UserClassComputerPermissions"][];
            Computers?: components["schemas"]["LabTech.Models.Computer"][];
            NetworkDevices?: components["schemas"]["LabTech.Models.NetworkDevice"][];
            Contacts?: components["schemas"]["LabTech.Models.Contact"][];
        };
        "LabTech.Models.TemporaryApiContracts.DeploymentLogin": {
            /** Format: int32 */
            DeploymentLoginId?: number;
            Title?: string;
        };
        "LabTech.Models.ContactWebPermissions": {
            Tickets?: boolean;
            RemoteAccess?: boolean;
            InstallAgent?: boolean;
            Reboot?: boolean;
            Shutdown?: boolean;
            WakeOnLAN?: boolean;
            MultiFactorRequired?: boolean;
        };
        "LabTech.Models.Computer": {
            Id?: string;
            Location?: components["schemas"]["LabTech.Models.Location"];
            Client?: components["schemas"]["LabTech.Models.Client"];
            Contact?: components["schemas"]["LabTech.Models.Contact"];
            IsFasTalk?: boolean;
            IsMaster?: boolean;
            IsNetworkProbe?: boolean;
            IsHeartbeatEnabled?: boolean;
            IsMaintenanceModeEnabled?: boolean;
            IsTunnelSupported?: boolean;
            IsVirtualMachine?: boolean;
            ComputerName?: string;
            OperatingSystemName?: string;
            OperatingSystemVersion?: string;
            DomainName?: string;
            /** Format: date-time */
            RemoteAgentLastInventory?: string;
            /** Format: int32 */
            UTCOffset?: number;
            OpenPortsTCP?: number[];
            OpenPortsUDP?: number[];
            Comment?: string;
            RemoteAgentVersion?: string;
            /** Format: date-time */
            RemoteAgentLastContact?: string;
            DomainNameServers?: string[];
            /** Format: date-time */
            LastInventoryReceived?: string;
            /** Format: date-time */
            WindowsUpdateDate?: string;
            /** Format: date-time */
            AntivirusDefinitionDate?: string;
            /** Format: date-time */
            LastHeartbeat?: string;
            /** Format: int64 */
            TotalMemory?: number;
            /** Format: int64 */
            FreeMemory?: number;
            /** Format: int32 */
            CpuUsage?: number;
            LocalIPAddress?: string;
            GatewayIPAddress?: string;
            /** Format: int64 */
            SystemUptime?: number;
            /** Format: date-time */
            LastStartup?: string;
            MACAddress?: string;
            /** Format: date-time */
            DateAdded?: string;
            /** Format: int32 */
            UserIdleTime?: number;
            LoggedInUsers?: components["schemas"]["LabTech.Models.LoggedInUser"][];
            LastUserName?: string;
            Tickets?: components["schemas"]["LabTech.Models.Ticket"][];
            Groups?: components["schemas"]["LabTech.Models.Group"][];
            /** Format: int32 */
            Bandwidth?: number;
            BandwidthDisplay?: string;
            /** Format: date-time */
            AssetDate?: string;
            AssetTag?: string;
            /** Format: date-time */
            WarrantyEndDate?: string;
            Type?: string;
            Status?: string;
            MasterMode?: string;
            VirusScanner?: components["schemas"]["LabTech.Models.VirusScannerDef"];
            FriendlyName?: string;
            IsLockedDown?: boolean;
            IsSystemAccount?: boolean;
            IsRebootNeeded?: boolean;
            IsVirtualHost?: boolean;
            IsHeartbeatRunning?: boolean;
            HasIntelVPRO?: boolean;
            HasIntelAMT?: boolean;
            HasHPiLO?: boolean;
            TempFiles?: string;
            SerialNumber?: string;
            /** Format: double */
            CpuScore?: number;
            /** Format: double */
            D3DScore?: number;
            /** Format: double */
            DiskScore?: number;
            /** Format: double */
            GraphicsScore?: number;
            /** Format: double */
            MemoryScore?: number;
            PowerProfiles?: string[];
            CurrentPowerProfile?: string;
            BiosManufacturer?: string;
            BiosFlash?: string;
            PrimaryContactName?: string;
            CommentPriority?: components["schemas"]["LabTech.Models.CommentPriority"];
            IRQ?: number[];
            Address?: number[];
            DMA?: number[];
            HardwarePorts?: string[];
            UserAccounts?: string[];
        };
        "LabTech.Models.RemoteAgentSchedule": {
            Id?: string;
            Name?: string;
            UpdateConfig?: components["schemas"]["LabTech.Models.Schedule"];
            HardwareInventory?: components["schemas"]["LabTech.Models.Schedule"];
            SystemInventory?: components["schemas"]["LabTech.Models.Schedule"];
            DriveInventory?: components["schemas"]["LabTech.Models.Schedule"];
            ProcessInventory?: components["schemas"]["LabTech.Models.Schedule"];
            MalewareInventory?: components["schemas"]["LabTech.Models.Schedule"];
            SoftwareInventory?: components["schemas"]["LabTech.Models.Schedule"];
            EventInventory?: components["schemas"]["LabTech.Models.Schedule"];
            PrinterInventory?: components["schemas"]["LabTech.Models.Schedule"];
            NetworkInventory?: components["schemas"]["LabTech.Models.Schedule"];
            NetworkAnalysis?: components["schemas"]["LabTech.Models.Schedule"];
            HotfixInventory?: components["schemas"]["LabTech.Models.Schedule"];
            ServiceInventory?: components["schemas"]["LabTech.Models.Schedule"];
            NetworkProbeInventory?: components["schemas"]["LabTech.Models.Schedule"];
            /** Format: date-time */
            LastUpdate?: string;
            LastUser?: string;
        };
        "LabTech.Models.Schedule": {
            /** @enum {string} */
            DayId?: "Everyday" | "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
            DayName?: string;
            /** Format: int32 */
            RepeatEveryHour?: number;
            /** Format: date-time */
            Date?: string;
        };
        "LabTech.Models.ComputerMenu": {
            MenuID?: string;
            Name?: string;
            Description?: string;
            Text?: string;
            ImageURL?: string;
            /** Format: int32 */
            RootOnly?: number;
            Action?: string;
            MsgTitle?: string;
            MsgBody?: string;
            /** Format: int32 */
            MsgHeight?: number;
            /** Format: int32 */
            MsgWidth?: number;
            URLorEXE?: string;
            /** Format: int32 */
            ScriptID?: number;
            Parameters?: string;
        };
        "LabTech.Models.TemplateProperty": {
            TemplateID?: string;
            PropertyName?: string;
            PropertyValue?: string;
            PropertyDescription?: string;
        };
        "LabTech.Models.GroupPartial": {
            /** Format: int32 */
            ID?: number;
            /** Format: int32 */
            ParentId?: number;
            Name?: string;
        };
        "LabTech.Models.Search": {
            Id?: string;
            Name?: string;
            SearchFolder?: components["schemas"]["LabTech.Models.SearchFolder"];
            IsReadOnly?: boolean;
            /** @enum {string} */
            SearchType?: "AdvancedComputers" | "AdvancedNetDevices" | "AdvancedContacts" | "AdvancedMobileDevices";
        };
        "LabTech.Models.MaintenanceWindow": {
            Id?: string;
        };
        "LabTech.Models.UserClassComputerPermissions": {
            Id?: string;
            UserClass?: components["schemas"]["LabTech.Models.UserClass"];
            Permissions?: components["schemas"]["LabTech.Models.ComputerPermissions"];
        };
        "LabTech.Models.NetworkDevice": {
            Id?: string;
            Location?: components["schemas"]["LabTech.Models.Location"];
            LocalIPAddress?: string;
            Name?: string;
            FriendlyName?: string;
            OpenPortsTCP?: number[];
            DeviceType?: components["schemas"]["LabTech.Models.NetworkDeviceType"];
            DetectionTemplateName?: string;
            /** Format: date-time */
            LastUpdated?: string;
            MACAddress?: string;
            Status?: string;
            Contact?: components["schemas"]["LabTech.Models.Contact"];
            AlertAction?: components["schemas"]["LabTech.Models.AlertAction"];
            AlertMessage?: string;
            AlertWhenOffline?: boolean;
            /** Format: date-time */
            DateAdded?: string;
            SNMPCommunityGet?: string;
            SNMPCommunitySet?: string;
            IsSNMPv1Supported?: boolean;
            IsSNMPv2cSupported?: boolean;
            IsSNMPv3Supported?: boolean;
            IsLowOnToner?: boolean;
            IsLowOnPaper?: boolean;
            IsHighBandwidth?: boolean;
            FlagsDisplay?: string;
            ManufacturerName?: string;
            ModelName?: string;
            Description?: string;
            /** Format: int64 */
            Uptime?: number;
            UptimeDisplay?: string;
            /** Format: int64 */
            DataOut?: number;
            DataOutDisplay?: string;
            /** Format: int64 */
            DataIn?: number;
            DataInDisplay?: string;
            /** Format: date-time */
            AssetDate?: string;
            /** Format: date-time */
            LastContact?: string;
            NasPercent?: string;
            Groups?: components["schemas"]["LabTech.Models.Group"][];
            Client?: components["schemas"]["LabTech.Models.Client"];
            IsSyncedToManage?: boolean;
            SnmpTree?: number[];
            ExternalSystemCredentials?: components["schemas"]["LabTech.Models.ExternalSystemCredentials"];
            /** Format: int32 */
            InterfaceCount?: number;
            /** Format: int32 */
            ProbeId?: number;
            ProbeName?: string;
            AgentDeploymentReadinessCheck?: components["schemas"]["LabTech.Models.TemporaryApiContracts.AgentDeploymentReadinessCheck"];
        };
        "LabTech.Models.LoggedInUser": {
            LoggedInUserName?: string;
            /** Format: int32 */
            ConsoleId?: number;
        };
        "LabTech.Models.Ticket": {
            /** Format: int32 */
            TicketId?: number;
            Client?: components["schemas"]["LabTech.Models.Client"];
            Computer?: components["schemas"]["LabTech.Models.Computer"];
            Status?: components["schemas"]["LabTech.Models.TicketStatus"];
            Subject?: string;
            Priority?: components["schemas"]["LabTech.Models.TicketPriority"];
            User?: components["schemas"]["LabTech.Models.User"];
            /** Format: date-time */
            DueDate?: string;
            /** Format: date-time */
            StartDate?: string;
            /** Format: date-time */
            ContactDate?: string;
            /** Format: date-time */
            UpdateDate?: string;
            From?: string;
            CC?: string;
            /** Format: int32 */
            SupportLevel?: number;
            Category?: components["schemas"]["LabTech.Models.TicketCategory"];
            /** Format: int32 */
            CategoryId?: number;
            CategoryName?: string;
            Location?: components["schemas"]["LabTech.Models.Location"];
            /** Format: int32 */
            ExternalId?: number;
            /** Format: int32 */
            MonitorId?: number;
            Guid?: string;
            Agent?: components["schemas"]["LabTech.Models.ComputerMonitor"];
            NetworkDevice?: components["schemas"]["LabTech.Models.NetworkDevice"];
            Comments?: components["schemas"]["LabTech.Models.TicketComment"][];
        };
        "LabTech.Models.VirusScannerDef": {
            Id?: string;
            Name?: string;
        };
        "LabTech.Models.CommentPriority": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.SearchFolder": {
            Id?: string;
            Name?: string;
        };
        "LabTech.Models.UserClass": {
            Id?: string;
            Name?: string;
            Permissions?: components["schemas"]["LabTech.Models.UserPermissions"];
        };
        "LabTech.Models.ComputerPermissions": {
            EditConfig?: boolean;
            EditInfo?: boolean;
            SendCommands?: boolean;
            AllowRemoteControl?: boolean;
            AllowRedir?: boolean;
            AllowFileExplorer?: boolean;
            AllowRegistryEdit?: boolean;
            CommandPrompt?: boolean;
            SniffNetwork?: boolean;
            Install?: boolean;
            History?: boolean;
            ViewCommands?: boolean;
            MonitorDelete?: boolean;
            MonitorAdd?: boolean;
            MonitorEdit?: boolean;
            ClearAlerts?: boolean;
            ScheduleScripts?: boolean;
            DeleteScheduleScripts?: boolean;
        };
        "LabTech.Models.NetworkDeviceType": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.AlertAction": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
            Comment?: string;
        };
        "LabTech.Models.ExternalSystemCredentials": {
            /** Format: int32 */
            CredentialsId?: number;
            /** Format: int32 */
            ClientId?: number;
            Title?: string;
            /** Format: date-time */
            ExpirationDate?: string;
            IsActive?: boolean;
        };
        "LabTech.Models.TemporaryApiContracts.AgentDeploymentReadinessCheck": {
            /** Format: int32 */
            AgentDeploymentReadinessCheckId?: number;
            /** Format: int32 */
            NetworkDeviceId?: number;
            /** Format: int32 */
            AgentDeploymentReadinessCheckStatusId?: number;
            ReadinessCheckStatus?: string;
            /** Format: int32 */
            DeploymentAttemptCount?: number;
            /** Format: date-time */
            DateLastCheckedForReadiness?: string;
            /** Format: date-time */
            DateLastDeploymentAttempted?: string;
        };
        "LabTech.Models.TicketStatus": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.TicketPriority": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.User": {
            UserId?: string;
            Folder?: components["schemas"]["LabTech.Models.UserFolder"];
            Name?: string;
            EmailAddress?: string;
            SsoStatus?: components["schemas"]["LabTech.Models.UserSingleSignOnStatus"];
        };
        "LabTech.Models.TicketCategory": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
            /** Format: int32 */
            ParentCategoryId?: number;
            Keywords?: string;
            Description?: string;
            Image?: string;
            IsVisibleInList?: boolean;
        };
        "LabTech.Models.ComputerMonitor": {
            /** Format: int32 */
            MonitorId?: number;
            /** Format: int32 */
            ComputerId?: number;
            /** Format: int32 */
            DeviceId?: number;
            Name?: string;
            State?: string;
            /** Format: date-time */
            LastScanned?: string;
            /** Format: date-time */
            LastFailed?: string;
            /** Format: date-time */
            LastInventoryDate?: string;
            AlertAction?: components["schemas"]["LabTech.Models.AlertAction"];
            MonitorHistory?: components["schemas"]["LabTech.Models.ComputerMonitorHistory"];
        };
        "LabTech.Models.TicketComment": {
            Id?: string;
            Body?: string;
            /** Format: date-time */
            CreatedDate?: string;
            From?: string;
            User?: components["schemas"]["LabTech.Models.User"];
        };
        "LabTech.Models.UserPermissions": {
            SuperAdmin?: boolean;
            SystemConfig?: boolean;
            ClassConfig?: boolean;
            CreateTickets?: boolean;
            SharedLinks?: boolean;
            TemplateRead?: boolean;
            TemplateEdit?: boolean;
            TemplateDelete?: boolean;
            ClientRead?: boolean;
            ClientEdit?: boolean;
            ClientDelete?: boolean;
            ReportRead?: boolean;
            ReportEdit?: boolean;
            ReportDelete?: boolean;
            ContactRead?: boolean;
            ContactEdit?: boolean;
            ContactDelete?: boolean;
            UserRead?: boolean;
            UserEdit?: boolean;
            UserDelete?: boolean;
            ToolRead?: boolean;
            ToolEdit?: boolean;
            ToolDelete?: boolean;
            ScriptRead?: boolean;
            ScriptEdit?: boolean;
            ScriptDelete?: boolean;
            ManageGroups?: boolean;
            DashTicketing?: boolean;
            DashTime?: boolean;
            DashManage?: boolean;
            DashTrending?: boolean;
            DashOverview?: boolean;
            HUDUpdate?: boolean;
            HUDShowAll?: boolean;
            DataViewUpdate?: boolean;
            DataViewDelete?: boolean;
            DataViewShowAll?: boolean;
            UsersShowAll?: boolean;
            UserClassCreate?: boolean;
            UserClassUpdate?: boolean;
            PatchManagerConfig?: boolean;
            ReportsCreate?: boolean;
            ProbeTemplateExecute?: boolean;
            ScheduledScriptsUpdate?: boolean;
            ClientsShowAll?: boolean;
            ShowPasswords?: boolean;
            LocationsShowAll?: boolean;
            ComputersCreate?: boolean;
            ComputersUpdate?: boolean;
            ComputersDelete?: boolean;
            ComputersShowAll?: boolean;
            ComputersForceUpdate?: boolean;
            NetworkDeviceUpdate?: boolean;
            NetworkDeviceDelete?: boolean;
            NetworkDeviceShowAll?: boolean;
            RetiredAssetsDelete?: boolean;
            GroupsCreate?: boolean;
            GroupsDelete?: boolean;
            GroupsShowAll?: boolean;
            GroupsScheduleScript?: boolean;
            GroupMonitorsUpdate?: boolean;
            GroupInfoUpdate?: boolean;
            GroupManagedServices?: boolean;
            RemoteMonitorsCreate?: boolean;
            RemoteMonitorsDelete?: boolean;
            InternalMonitorsCreate?: boolean;
            InternalMonitorsUpdate?: boolean;
            InternalMonitorsDelete?: boolean;
            AlertsUpdate?: boolean;
            AlertsDeleteAll?: boolean;
            TicketsRead?: boolean;
            TicketsUpdate?: boolean;
            TicketsDelete?: boolean;
            TicketsRequest?: boolean;
            SearchesRead?: boolean;
            SearchesUpdate?: boolean;
            SearchesDelete?: boolean;
            PatchManagerRead?: boolean;
            PatchManagerUpdate?: boolean;
            LanguagePackEditor?: boolean;
            ManagedServiceCatalog?: boolean;
            NavigationMenuUpdate?: boolean;
            RSSFeedRead?: boolean;
            RSSFeedUpdate?: boolean;
            LinksDelete?: boolean;
            PluginManager?: boolean;
            SolutionCenter?: boolean;
            DatabaseExecute?: boolean;
            ServerStatus?: boolean;
            ManageAudits?: boolean;
            ManageRemoteCommands?: boolean;
            ManageServiceLogs?: boolean;
            ManageOutdated?: boolean;
            ManageOfflineComputers?: boolean;
            ManageScheduleClientScripts?: boolean;
            DashboardConfig?: boolean;
            ConfigApplicationList?: boolean;
            ConfigEventBlackList?: boolean;
            QuickConnect?: boolean;
            PermissionsUpdate?: boolean;
            UserClassRead?: boolean;
            UserClassDelete?: boolean;
            SQLScriptFunctions?: boolean;
        };
        "LabTech.Models.UserFolder": {
            UserFolderId?: string;
            Name?: string;
            IsSsoEnabled?: boolean;
        };
        "LabTech.Models.UserSingleSignOnStatus": {
            /** Format: int32 */
            SsoStatusId?: number;
            StatusName?: string;
        };
        "LabTech.Models.ComputerMonitorHistory": {
            /** Format: int32 */
            Id?: number;
            /** Format: double */
            FailureRate?: number;
            LastSuccessData?: string;
            LastWarningData?: string;
            LastFailData?: string;
        };
        "LabTech.Models.CommandExecute": {
            /** Format: int32 */
            Id?: number;
            /** Format: int32 */
            ComputerId?: number;
            Command?: components["schemas"]["LabTech.Models.Command"];
            Status?: string;
            Parameters?: string[];
            Output?: string;
            Fastalk?: boolean;
            /** Format: date-time */
            DateLastInventoried?: string;
        };
        "LabTech.Models.Command": {
            Id?: string;
            Name?: string;
            Description?: string;
            /** Format: int32 */
            Level?: number;
        };
        "Automate.Api.Domain.Contracts.Compatibility.CommandHistory": {
            /** Format: int32 */
            Id?: number;
            /** Format: int32 */
            ComputerId?: number;
            /** Format: date-time */
            DateExecuted?: string;
            /** Format: int32 */
            CommandId?: number;
            Command?: string;
            Status?: string;
            Output?: string;
            Parameters?: string;
            User?: string;
            /** Format: date-time */
            DateFinished?: string;
        };
        "Automate.Api.Domain.Contracts.CommandPromptCommand": {
            RunAsAdmin?: boolean;
            UsePowerShell?: boolean;
            CommandText?: string;
            Directory?: string;
        };
        "Automate.Api.Domain.Contracts.System.ClientPermissionsResult": {
            /** Format: int32 */
            ClientId?: number;
            Permissions?: string[];
        };
        "LabTech.Models.ComputerBios": {
            /** Format: int32 */
            ComputerId?: number;
            Vendor?: string;
            Version?: string;
            /** Format: date-time */
            Date?: string;
            /** Format: int32 */
            Size?: number;
            /** Format: double */
            SystemBiosVersion?: number;
            /** Format: double */
            EMBCTLVersion?: number;
            /** Format: double */
            SmBiosVersion?: number;
            /** Format: int32 */
            DmiVersion?: number;
            SupportsAcpi?: boolean;
            SupportsApm?: boolean;
            SupportsAgp?: boolean;
            SupportsPcmcia?: boolean;
            HasSmartBattery?: boolean;
            SupportsUefi?: boolean;
            SupportsLegacyUsb?: boolean;
            SupportsPci?: boolean;
            SupportsVlvesa?: boolean;
            SupportsEscd?: boolean;
            SupportsNetBoot?: boolean;
            SupportsI2OBoot?: boolean;
            IsVirtualMachine?: boolean;
            PowerOnReason?: string;
            /** Format: int32 */
            BiosChar?: number;
            IsPortable?: boolean;
            VmHost?: string;
            VmType?: string;
            VmName?: string;
            /** Format: date-time */
            DateUpdated?: string;
        };
        "LabTech.Repositories.MySQL.Domain.Models.ComputerDriver": {
            /** Format: int64 */
            Id?: number;
            /** Format: int32 */
            ComputerId?: number;
            Name?: string;
            Description?: string;
            State?: string;
            Startup?: string;
            PathName?: string;
            ServiceType?: string;
            Username?: string;
            /** Format: date-time */
            DateLastInventoried?: string;
            RunLevels?: string;
        };
        "LabTech.Models.ComputerDrive": {
            /** Format: int32 */
            DriveId?: number;
            /** Format: int32 */
            ComputerId?: number;
            Letter?: string;
            /** Format: int32 */
            Size?: number;
            /** Format: int32 */
            FreeSpace?: number;
            FileSystem?: string;
            Model?: string;
            SmartStatus?: string;
            IsMissing?: boolean;
            /** Format: date-time */
            DateLastInventoried?: string;
            VolumeName?: string;
            /** Format: int32 */
            BackupFlag?: number;
            IsSolidState?: boolean;
            IsInternal?: boolean;
            /** Format: int64 */
            MaximumHistoryDaysAvailable?: number;
        };
        "LabTech.Models.SmartData": {
            /** Format: int32 */
            DriveId?: number;
            /** Format: int32 */
            ComputerId?: number;
            Attribute?: components["schemas"]["LabTech.Models.SmartAttribute"];
            /** Format: int32 */
            Value?: number;
            /** Format: int32 */
            Worst?: number;
            /** Format: int32 */
            Threshold?: number;
            /** Format: int32 */
            RawValue?: number;
        };
        "LabTech.Models.SmartAttribute": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
            Description?: string;
        };
        "LabTech.Models.ComputerEffectivePatchingPolicy": {
            /** Format: int32 */
            ApprovalPolicyCount?: number;
            MicrosoftUpdatePolicyName?: string;
            /** Format: int32 */
            ComputerId?: number;
            RebootPolicyName?: string;
            ThirdPartyUpdatePolicyName?: string;
        };
        "Automate.Api.Domain.Contracts.Maintenance.MaintenanceModeQueueEntry": {
            /** Format: int32 */
            MaintenanceModeQueueId?: number;
            /** Format: int32 */
            ComputerId?: number;
            /** Format: date-time */
            StartDate?: string;
            /** Format: int32 */
            DurationInMinutes?: number;
            Mode?: string;
            /** Format: int32 */
            UserId?: number;
            Comments?: string;
        };
        "LabTech.Models.ComputerMicrosoftUpdateData": {
            Category?: string;
            /** Format: int32 */
            ComputerId?: number;
            /** Format: date-time */
            InstallDate?: string;
            InstallState?: string;
            IsCompliant?: boolean;
            IsFailed?: boolean;
            IsInstalled?: boolean;
            IsNonCompliant?: boolean;
            /** Format: int64 */
            KnowledgeBaseId?: number;
            MicrosoftUpdateId?: string;
            PolicyApproval?: components["schemas"]["LabTech.Models.PolicyApprovalSetting"];
            /** Format: date-time */
            ReleaseDate?: string;
            Severity?: string;
            Title?: string;
            /** Format: double */
            Cvss?: number;
        };
        "LabTech.Models.PolicyApprovalSetting": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "System.Threading.CancellationToken": {
            readonly IsCancellationRequested?: boolean;
            readonly CanBeCanceled?: boolean;
            WaitHandle?: components["schemas"]["System.Threading.WaitHandle"];
        };
        "System.Threading.WaitHandle": {
            SafeWaitHandle?: components["schemas"]["Microsoft.Win32.SafeHandles.SafeWaitHandle"];
        };
        "Microsoft.Win32.SafeHandles.SafeWaitHandle": {
            readonly IsInvalid?: boolean;
            readonly IsClosed?: boolean;
        };
        "LabTech.Models.ComputerOperatingSystem": {
            /** Format: int32 */
            ComputerId?: number;
            Name?: string;
            /** Format: int32 */
            MajorVersion?: number;
            /** Format: int32 */
            MinorVersion?: number;
            Version?: string;
            DotNetVersion?: string;
            ServicePack?: string;
            ServicePackName?: string;
            /** Format: int32 */
            ProductType?: number;
            /** Format: int32 */
            Suite?: number;
            /** Format: int32 */
            ProductInfo?: number;
            IsLicensed?: boolean;
            IsTablet?: boolean;
            IsStarter?: boolean;
            IsMediaCenter?: boolean;
            BaseFolder?: string;
            SystemDrive?: string;
            HasGui?: boolean;
            Is64Bit?: boolean;
            Domain?: string;
            IsDomainController?: boolean;
            IsServer?: boolean;
            /** Format: date-time */
            InstallDate?: string;
            /** Format: date-time */
            DateUpdated?: string;
            /** Format: int32 */
            ReleaseId?: number;
            Edition?: string;
            /** Format: int32 */
            BranchReadinessLevel?: number;
        };
        "LabTech.Models.ComputerPatchingPolicy": {
            /** Format: int32 */
            ApprovalPolicyCount?: number;
            /** Format: int32 */
            GroupId?: number;
            MicrosoftUpdatePolicyName?: string;
            Name?: string;
            /** Format: int32 */
            OverrideId?: number;
            /** Format: int32 */
            Priority?: number;
            RebootPolicyName?: string;
            ThirdPartyUpdatePolicyName?: string;
        };
        "LabTech.Models.ComputerPrinter": {
            /** Format: int32 */
            Id?: number;
            /** Format: int32 */
            ComputerId?: number;
            Name?: string;
            PortName?: string;
            Resolution?: string;
            PaperTypes?: string[];
            Features?: string[];
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.ComputerRemoteMonitor": {
            /** Format: int32 */
            ComputerId?: number;
            TargetType?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.TargetType"];
            SubType?: string;
            Details?: string;
            LastEditedBy?: string;
            /** Format: date-time */
            LastEditedTime?: string;
            OverrideSettings?: boolean;
            /** Format: int32 */
            RemoteMonitorId?: number;
            Name?: string;
            AlertingSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.AlertingSettings"];
            Configuration?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Configuration"];
        };
        "Automate.Api.Domain.Contracts.Monitors.TargetType": {
            /** Format: int32 */
            TargetTypeId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.AlertingSettings": {
            IsAlertingEnabled?: boolean;
            AlertTemplate?: components["schemas"]["Automate.Api.Domain.Contracts.Alerts.AlertTemplate"];
            AlertStyleType?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.AlertStyleType"];
            AlertSuccessSubject?: string;
            AlertSuccessMessage?: string;
            AlertFailureSubject?: string;
            AlertFailureMessage?: string;
            ShouldRunScript?: boolean;
            AlertScript?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.AlertScript"];
            TicketCategory?: components["schemas"]["Automate.Api.Domain.Contracts.Ticketing.TicketCategory"];
            ReportCategory?: components["schemas"]["Automate.Api.Domain.Contracts.Reporting.ReportCategory"];
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.Configuration": {
            CheckType?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.CheckType"];
            Interval?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.CheckInterval"];
            ComparerSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.ComparerSettings"];
            PingSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.PingSettings"];
            LatencySettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.LatencySettings"];
            TcpSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.TcpSettings"];
            UdpSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.UdpSettings"];
            SnmpSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.SnmpSettings"];
            PerformanceCounterSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.PerformanceCounterSettings"];
            FileOrDirectorySettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.FileOrDirectorySettings"];
            ServiceSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.ServiceSettings"];
            DiskSpaceSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.DiskSpaceSettings"];
            RegistrySettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.RegistrySettings"];
            ProcessSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.ProcessSettings"];
            EventLogSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.EventLogSettings"];
            ExecutableSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.ExecutableSettings"];
            WmiSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.WmiSettings"];
            BandwidthSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.BandwidthSettings"];
            SensorSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.SensorSettings"];
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.AlertStyleType": {
            /** Format: int32 */
            AlertStyleTypeId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.AlertScript": {
            /** Format: int32 */
            AlertScriptId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Ticketing.TicketCategory": {
            /** Format: int32 */
            CategoryId?: number;
            CategoryName?: string;
        };
        "Automate.Api.Domain.Contracts.Reporting.ReportCategory": {
            /** Format: int32 */
            CategoryId?: number;
            CategoryName?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.CheckType": {
            /** Format: int32 */
            CheckTypeId?: number;
            /** Format: int32 */
            LegacyCheckTypeId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.CheckInterval": {
            /** Format: int32 */
            IntervalInSeconds?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.ComparerSettings": {
            LanguageOverrides?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.LanguageOverride"][];
            ResultFormat?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.ResultFormat"];
            IsExpression?: boolean;
            /** Format: double */
            SmoothingCoefficient?: number;
            SmoothingStyle?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.ComparerSmoothingStyle"];
            Comparer?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.Comparer"];
            Value?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.ComparerValue"];
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.PingSettings": {
            ServerAddress?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.LatencySettings": {
            ServerAddress?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.TcpSettings": {
            ServerAddress?: string;
            /** Format: int32 */
            Port?: number;
            DataToSend?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.UdpSettings": {
            ServerAddress?: string;
            /** Format: int32 */
            Port?: number;
            DataToSend?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.SnmpSettings": {
            ServerAddress?: string;
            CommunityString?: string;
            Oid?: string;
            ShouldUseSnmpV2?: boolean;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.PerformanceCounterSettings": {
            PerformanceObject?: string;
            PerformanceCounter?: string;
            Instance?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.FileOrDirectorySettings": {
            Path?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.ServiceSettings": {
            ServiceName?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.DiskSpaceSettings": {
            DriveLetter?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.RegistrySettings": {
            /** Format: int32 */
            RegistryHiveTypeId?: number;
            RegistryKey?: string;
            ValueName?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.ProcessSettings": {
            ProcessName?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.EventLogSettings": {
            LogFileName?: string;
            /** Format: int32 */
            EventTypeId?: number;
            Source?: string;
            EventId?: string;
            MessageRegex?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.ExecutableSettings": {
            ExecutableInvocation?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.WmiSettings": {
            WmiQuery?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.BandwidthSettings": {
            IpAddress?: string;
            /** Format: int32 */
            SnmpVersionId?: number;
            CommunityString?: string;
            /** Format: int32 */
            DataToWatchId?: number;
            IndexToWatch?: string;
            SnmpV3UserName?: string;
            SnmpV3AuthPassword?: string;
            /** Format: int32 */
            SnmpV3AuthMethodId?: number;
            SnmpV3EncryptionPassword?: string;
            /** Format: int32 */
            SnmpV3EncryptionMethodId?: number;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.CheckSettings.SensorSettings": {
            /** Format: int32 */
            SensorNumber?: number;
            /** Format: int32 */
            SensorTypeId?: number;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.LanguageOverride": {
            Code?: string;
            Value?: string;
            NormalComparerValue?: string;
            WarningComparerValue?: string;
            ErrorComparerValue?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.ResultFormat": {
            /** Format: int32 */
            ResultFormatId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.ComparerSmoothingStyle": {
            /** Format: int32 */
            SmoothingStyleId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.Comparer": {
            /** Format: int32 */
            ComparerId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.ComparerValue": {
            Format?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.ComparerValueFormat"];
            SingleValueFormat?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.SingleValueFormat"];
            MultiValuesFormat?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.MultiValuesFormat"];
            StateBasedValueFormat?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.StateBasedValueFormat"];
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.ComparerValueFormat": {
            /** Format: int32 */
            ValueFormatId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.SingleValueFormat": {
            Value?: string;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.MultiValuesFormat": {
            Values?: string[];
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.StateBasedValueFormat": {
            NormalComparer?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.ComparerSettingsBase"];
            WarningComparer?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.ComparerSettingsBase"];
            ErrorComparer?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.ComparerSettingsBase"];
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.ComparerSettingsBase": {
            Comparer?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.Comparer"];
            Value?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Comparer.ComparerValue"];
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.OverrideSettings": {
            EnableGroupSync?: boolean;
        };
        "LabTech.Models.ComputerRunningScript": {
            /** Format: int32 */
            Id?: number;
            /** Format: int32 */
            ScriptId?: number;
            /** Format: int32 */
            ComputerId?: number;
            Name?: string;
            /** @enum {string} */
            Status?: "Running" | "Completed";
            /** Format: date-time */
            StartDate?: string;
        };
        "LabTech.Models.ComputerDevice": {
            /** Format: int32 */
            ComputerId?: number;
            PnpDeviceId?: string;
            DeviceName?: string;
            DeviceType?: string;
            DriverVersion?: string;
            /** Format: date-time */
            DriverDate?: string;
            DriverName?: string;
            DriverFile?: string;
            Manufacturer?: string;
            /** Format: date-time */
            UpdateDate?: string;
        };
        "LabTech.Models.MaintenanceMode": {
            /** Format: int32 */
            ComputerID?: number;
            /** Format: date-time */
            TimeStart?: string;
            /** Format: int32 */
            Duration?: number;
            /** Format: int32 */
            Mode?: number;
            /** Format: int32 */
            UserID?: number;
        };
        "LabTech.Models.ComputerMemorySlot": {
            /** Format: int32 */
            SlotHandle?: number;
            /** Format: int32 */
            ComputerId?: number;
            SlotName?: string;
            Bank?: string;
            FormFactor?: components["schemas"]["LabTech.Models.MemoryFormFactor"];
            /** Format: int32 */
            TotalWidth?: number;
            /** Format: int32 */
            DataWidth?: number;
            /** Format: int32 */
            Size?: number;
            Type?: components["schemas"]["LabTech.Models.MemoryType"];
            /** Format: int32 */
            Speed?: number;
            Manufacturer?: string;
            SerialNumber?: string;
            PartNumber?: string;
            AssetTag?: string;
            /** Format: date-time */
            UpdateDate?: string;
        };
        "LabTech.Models.MemoryFormFactor": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.MemoryType": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.ComputerProcessor": {
            /** Format: int32 */
            ComputerId?: number;
            /** Format: int32 */
            ProcessorHandle?: number;
            Socket?: components["schemas"]["LabTech.Models.ProcessorSocket"];
            IsEnabled?: boolean;
            Family?: components["schemas"]["LabTech.Models.ProcessorFamily"];
            Manufacturer?: string;
            /** Format: int32 */
            Speed?: number;
            CacheList?: components["schemas"]["LabTech.Models.ComputerProcessorCache"][];
            SerialNumber?: string;
            PartNumber?: string;
            /** Format: int32 */
            Cores?: number;
            /** Format: int32 */
            Threads?: number;
            Is64Bit?: boolean;
            DEP?: boolean;
            IsVirtualized?: boolean;
            HasPowerControl?: boolean;
            HasHardwareThread?: boolean;
            ProcessorName?: string;
            /** Format: date-time */
            UpdateDate?: string;
        };
        "LabTech.Models.ProcessorSocket": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.ProcessorFamily": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.ComputerProcessorCache": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
            /** Format: int32 */
            Size?: number;
        };
        "LabTech.Models.ComputerService": {
            /** Format: int64 */
            ComputerServiceId?: number;
            /** Format: int32 */
            ComputerId?: number;
            Name?: string;
            Description?: string;
            State?: string;
            Startup?: string;
            PathName?: string;
            ServiceType?: string;
            Username?: string;
            /** Format: date-time */
            DateLastInventoried?: string;
            RunLevels?: string;
            Classification?: components["schemas"]["LabTech.Models.ServiceClassification"];
        };
        "LabTech.Models.ServiceClassification": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.ComputerSoftware": {
            /** Format: int64 */
            ApplicationId?: number;
            /** Format: int32 */
            ComputerId?: number;
            Name?: string;
            InstallationPath?: string;
            /** Format: date-time */
            DateInstalled?: string;
            /** Format: int32 */
            Size?: number;
            UninstallerPath?: string;
            Version?: string;
            Classification?: components["schemas"]["LabTech.Models.SoftwareClassification"];
            /** Format: date-time */
            DateLastInventoried?: string;
            /** Format: int32 */
            ClientId?: number;
            ComputerName?: string;
        };
        "LabTech.Models.SoftwareClassification": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.ComputerVideoCard": {
            /** Format: int32 */
            ComputerId?: number;
            PnpDeviceId?: string;
            VideoProcessor?: string;
            Mode?: string;
            Memory?: string;
            Architecture?: components["schemas"]["LabTech.Models.VideoCardArchitecture"];
            MemoryType?: components["schemas"]["LabTech.Models.VideoCardMemory"];
            DACAdapter?: string;
            /** Format: int32 */
            BitsPerPixel?: number;
            /** Format: date-time */
            UpdateDate?: string;
        };
        "LabTech.Models.VideoCardArchitecture": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.VideoCardMemory": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.ComputerScheduledTask": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
            Command?: string;
            IsInteractive?: boolean;
            StartTime?: string;
            DoesRepeat?: boolean;
            DaysOfWeek?: string[];
        };
        "LabTech.Models.ComputerScriptHistory": {
            /** Format: int32 */
            Id?: number;
            /** Format: int32 */
            ScriptId?: number;
            /** Format: int32 */
            ComputerId?: number;
            Name?: string;
            User?: string;
            /** @enum {string} */
            Status?: "Running" | "Completed";
            /** @enum {string} */
            State?: "Failure" | "Information" | "Success";
            /** Format: date-time */
            HistoryDate?: string;
            DiagnosticMessage?: string;
        };
        "LabTech.Models.ComputerSensor": {
            /** Format: int32 */
            ComputerId?: number;
            /** Format: int32 */
            SensorId?: number;
            SensorName?: string;
            DeviceType?: components["schemas"]["LabTech.Models.SensorDeviceType"];
            Monitor?: string;
            /** Format: double */
            Value?: number;
            /** Format: double */
            MaxValue?: number;
        };
        "LabTech.Models.SensorDeviceType": {
            /** Format: int32 */
            DeviceType?: number;
            Name?: string;
            Indicator?: string;
        };
        "LabTech.RESTApi.RpcContracts.SoftwareUninstallInfo": {
            UninstallPath?: string;
        };
        "LabTech.RESTApi.RpcContracts.SoftwareClassificationInfo": {
            SoftwareNames?: string[];
        };
        "LabTech.Models.ComputerSystemSlot": {
            /** Format: int32 */
            ComputerId?: number;
            /** Format: int32 */
            Id?: number;
            /** Format: int32 */
            SlotHandle?: number;
            SlotName?: string;
            SlotType?: string;
            BusWidth?: string;
            InUse?: string;
            Length?: string;
            Supports3Volts?: boolean;
            Supports5Volts?: boolean;
            IsHotPluggable?: boolean;
            SupportsPowerManagement?: boolean;
        };
        "LabTech.Models.ComputerThirdPartyPatch": {
            ApprovedVersion?: string;
            AvailableVersion?: string;
            ComplianceState?: components["schemas"]["LabTech.Models.PatchComplianceState"];
            /** Format: int32 */
            ComputerId?: number;
            DisplayTitle?: string;
            InstallAction?: components["schemas"]["LabTech.Models.ThirdParyInstallAction"];
            /** Format: date-time */
            InstallDate?: string;
            InstallState?: string;
            InstalledVersion?: string;
            Is64Bit?: boolean;
            IsCompliant?: boolean;
            IsFailed?: boolean;
            IsInstalled?: boolean;
            IsNonCompliant?: boolean;
            Manufacturer?: string;
            PatchId?: string;
            PolicyApproval?: components["schemas"]["LabTech.Models.ThirdPartyPolicyApproval"];
            SoftwareId?: string;
            Title?: string;
        };
        "LabTech.Models.PatchComplianceState": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.ThirdParyInstallAction": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.ThirdPartyPolicyApproval": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.ComputerUps": {
            /** Format: int32 */
            ComputerId?: number;
            /** Format: int32 */
            UpsId?: number;
            UpsName?: string;
            /** Format: int32 */
            ChargeRemaining?: number;
            /** Format: int32 */
            RemainingRunTime?: number;
        };
        "Automate.Api.Domain.Contracts.DatabaseInformation": {
            /** Format: int32 */
            DatabaseId?: number;
            DatabaseVersion?: string;
            Uptime?: string;
            /** Format: int32 */
            CurrentConnections?: number;
            /** Format: int32 */
            MaxConnections?: number;
            /** Format: int32 */
            PeakConnections?: number;
            /** Format: int32 */
            RunningQueries?: number;
            LastBackupFilePath?: string;
            /** Format: date-time */
            LastBackupDate?: string;
            LastBackupSize?: string;
            /** Format: int32 */
            LastBackupStatus?: number;
        };
        "LabTech.Models.DataViewFolder": {
            Id?: string;
            Name?: string;
        };
        "LabTech.Models.DataView": {
            Id?: string;
            Name?: string;
            /** Format: int32 */
            FolderId?: number;
        };
        "Automate.Api.Domain.Contracts.Clients.DeploymentLogin": {
            /** Format: int32 */
            DeploymentLoginId?: number;
            Client?: components["schemas"]["Automate.Api.Domain.Contracts.Clients.Client"];
            Location?: components["schemas"]["Automate.Api.Domain.Contracts.Clients.Location"];
            Title?: string;
            Username?: string;
            Password?: string;
            Url?: string;
            Notes?: string;
        };
        "Automate.Api.Domain.Contracts.Clients.Client": {
            /** Format: int32 */
            ClientId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Clients.Location": {
            /** Format: int32 */
            Id?: number;
            /** Format: int32 */
            LocationId?: number;
            Name?: string;
            FaxNumber?: string;
            MaintenanceWindow?: components["schemas"]["LabTech.Models.TemporaryApiContracts.MaintenanceWindowDefinition"];
            DeploymentTemplate?: components["schemas"]["LabTech.Models.RemoteAgentTemplate"];
            Router?: components["schemas"]["LabTech.Models.Router"];
            /** Format: int32 */
            ProbeId?: number;
            /** Format: int32 */
            ExternalId?: number;
            ScriptExtra2?: string;
            ScriptExtra1?: string;
            ScriptRouterAddress?: string;
            ScriptPassword?: string;
            ScriptUsername?: string;
            ScriptDrive?: string;
            /** Format: int32 */
            RouterPort?: number;
            Comments?: string;
            Contact?: components["schemas"]["LabTech.Models.Contact"];
            DefaultDeploymentLogin?: components["schemas"]["LabTech.Models.TemporaryApiContracts.DeploymentLogin"];
            PhoneNumber?: string;
            Country?: string;
            ZipCode?: string;
            State?: string;
            City?: string;
            Address2?: string;
            Address1?: string;
            Client?: components["schemas"]["LabTech.Models.Client"];
            DefaultDeploymentGroup?: components["schemas"]["LabTech.Models.Group"];
            ExtraFields?: components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraField"][];
        };
        "Automate.Api.Domain.Contracts.ExtraFields.ExtraField": {
            /** Format: int32 */
            TargetId?: number;
            /** Format: int32 */
            ExtraFieldDefinitionId?: number;
            Title?: string;
            DisplayFormat?: components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraFieldDisplayFormat"];
            Location?: components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraFieldLocation"];
            TitleFormat?: components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraFieldTitleFormat"];
            Section?: string;
            Tooltip?: string;
            IsReadOnly?: boolean;
            TextFieldSettings?: components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.TextFieldSettings"];
            DropdownSettings?: components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.DropdownSettings"];
            CheckboxSettings?: components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.CheckboxSettings"];
            IsEncrypted?: boolean;
            IsDefaultValue?: boolean;
            LtGuid?: string;
        };
        "Automate.Api.Domain.Contracts.ExtraFields.ExtraFieldDisplayFormat": {
            /** Format: int32 */
            ExtraFieldDisplayFormatId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.ExtraFields.ExtraFieldLocation": {
            /** Format: int32 */
            ExtraFieldLocationId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.ExtraFields.ExtraFieldTitleFormat": {
            /** Format: int32 */
            ExtraFieldTitleFormatId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.ExtraFields.TextFieldSettings": {
            IsMasked?: boolean;
            Value?: string;
            DefaultValue?: string;
        };
        "Automate.Api.Domain.Contracts.ExtraFields.DropdownSettings": {
            AvailableOptions?: {
                [key: string]: string;
            };
            SelectedValue?: string;
            DefaultValue?: string;
            IsSqlDefined?: boolean;
            DynamicSqlQuery?: string;
        };
        "Automate.Api.Domain.Contracts.ExtraFields.CheckboxSettings": {
            IsChecked?: boolean;
            DefaultValue?: boolean;
        };
        "Automate.Api.Domain.Contracts.DeviceCommands.ExecuteDeviceCommandsRequest": {
            DeviceIdList?: number[];
        };
        "Automate.Api.Domain.Contracts.DeviceCommands.ExecuteDeviceCommandResponse": {
            CommandResultList?: components["schemas"]["Automate.Api.Domain.Contracts.DeviceCommands.ExecuteDeviceCommandResult"][];
            ContainsUnsuccessfulResults?: boolean;
        };
        "Automate.Api.Domain.Contracts.DeviceCommands.ExecuteDeviceCommandResult": {
            /** Format: int32 */
            DeviceId?: number;
            ResultDetails?: components["schemas"]["Automate.Api.Domain.Contracts.ResponseResult"];
        };
        "Automate.Api.Domain.Contracts.Patching.ComputerPatchingStats": {
            /** Format: int32 */
            ComputerId?: number;
            /** Format: double */
            OverallCompliance?: number;
            /** Format: int32 */
            InstalledPatchCount?: number;
            /** Format: int32 */
            MissingPatchCount?: number;
            /** Format: int32 */
            FailedPatchCount?: number;
            /** Format: int32 */
            CompliantSoftwareCount?: number;
            /** Format: int32 */
            NonCompliantSoftwareCount?: number;
            /** Format: int32 */
            FailedSoftwareCount?: number;
            /** Format: int32 */
            IncorrectSoftwareCount?: number;
            Stage?: string;
            NoPatchInventory?: boolean;
            WSUSEnabled?: boolean;
            PatchJobRunning?: boolean;
            DaytimePatchingEnabled?: boolean;
            WUAOutOfDate?: boolean;
            MissingBaselinePatches?: boolean;
            WUAVersion?: string;
            /** Format: date-time */
            LastInstallWindow?: string;
            /** Format: date-time */
            NextInstallWindow?: string;
            /** Format: date-time */
            LastSoftwareWindow?: string;
            /** Format: date-time */
            NextSoftwareWindow?: string;
            /** Format: date-time */
            LastPatchedDate?: string;
            /** Format: date-time */
            LastMicrosoftPatchedDate?: string;
            /** Format: date-time */
            LastThirdPartyPatchedDate?: string;
            /** Format: date-time */
            LastPatchInventory?: string;
            IsMicrosoftManaged?: boolean;
            IsThirdPartyManaged?: boolean;
        };
        "Automate.Api.Domain.Contracts.ExecuteDeviceScriptRequest": {
            /** Format: int32 */
            ScriptId?: number;
            ParameterList?: string[];
            DeviceIdList?: number[];
        };
        "Automate.Api.Domain.Contracts.ExecuteDeviceScriptResponse": {
            ScriptResultList?: components["schemas"]["Automate.Api.Domain.Contracts.ExecuteDeviceScriptResult"][];
            ContainsUnsuccessfulResults?: boolean;
        };
        "Automate.Api.Domain.Contracts.ExecuteDeviceScriptResult": {
            /** Format: int32 */
            DeviceId?: number;
            ResultDetails?: components["schemas"]["Automate.Api.Domain.Contracts.ResponseResult"];
        };
        "Automate.Api.Domain.Contracts.Patching.DevicesSummaryData": {
            /** Format: double */
            ComplianceScore?: number;
            /** Format: int32 */
            DevicesAffectingComplianceCount?: number;
            /** Format: int32 */
            DevicesAffectingPilotStageComplianceCount?: number;
            /** Format: int32 */
            DevicesAffectingProductionStageComplianceCount?: number;
            /** Format: int32 */
            DevicesAffectingTestStageComplianceCount?: number;
            /** Format: int32 */
            DevicesNeedingAttentionCount?: number;
            /** Format: int32 */
            EnabledWsusCount?: number;
            /** Format: int32 */
            EntityId?: number;
            EntityName?: string;
            /** Format: int32 */
            InDaytimePatchingCount?: number;
            /** Format: int32 */
            LastPatchJobFailedCount?: number;
            /** Format: int32 */
            MissingBaselinePatchesCount?: number;
            /** Format: int32 */
            MissingPatchInventoryCount?: number;
            /** Format: int32 */
            OutOfDateWuaCount?: number;
            /** Format: int32 */
            PendingRebootCount?: number;
            /** Format: int32 */
            PendingUpdateCount?: number;
            /** Format: double */
            PilotStageComplianceScore?: number;
            /** Format: double */
            ProductionStageComplianceScore?: number;
            /** Format: int32 */
            RunningPatchInstallationCount?: number;
            /** Format: int32 */
            ServersAffectingComplianceCount?: number;
            /** Format: double */
            ServersComplianceScore?: number;
            /** Format: double */
            TestStageComplianceScore?: number;
            /** Format: int32 */
            WorkstationsAffectingComplianceCount?: number;
            /** Format: double */
            WorkstationsComplianceScore?: number;
        };
        "LabTech.Models.Document": {
            /** Format: int32 */
            Id?: number;
            /** Format: int32 */
            ClientId?: number;
            Name?: string;
            /** Format: int32 */
            Size?: number;
            Data?: string;
            LastUser?: string;
            /** Format: date-time */
            LastEditDate?: string;
        };
        "LabTech.Repositories.MySQL.Domain.Models.DriveStats": {
            /** Format: int32 */
            DriveId?: number;
            /** Format: int32 */
            FreeSpacePercentage?: number;
            /** Format: int32 */
            FragmentedSpacePercentage?: number;
            /** Format: date-time */
            EventDate?: string;
            /** Format: int32 */
            SampleCount?: number;
            /** Format: int32 */
            Week?: number;
            /** Format: int32 */
            Month?: number;
            /** Format: int32 */
            Year?: number;
        };
        "LabTech.Models.EventLog": {
            /** Format: int32 */
            BlacklistId?: number;
            /** Format: int32 */
            ComputerId?: number;
            /** Format: int32 */
            EventId?: number;
            /** Format: date-time */
            LastDate?: string;
            LogName?: string;
            LogType?: components["schemas"]["LabTech.Models.EventLogType"];
            Message?: string;
            Source?: string;
            /** Format: date-time */
            TimeGenerated?: string;
        };
        "LabTech.Models.EventLogType": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.WebExtensions.SessionViewerSettings": {
            Domain?: string;
            /** Format: int32 */
            Port?: number;
            ApiToken?: string;
            InstanceId?: string;
            ExtensionId?: string;
            EnableWccElement?: boolean;
            User?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.SessionViewerUser"];
        };
        "Automate.Api.Domain.Contracts.WebExtensions.SessionViewerUser": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
            Permissions?: string;
        };
        "Automate.Api.Domain.Contracts.ExtraFields.ExtraFieldDefinition": {
            /** Format: int32 */
            SortOder?: number;
            IsEncrypted?: boolean;
            IsRestricted?: boolean;
            ReadUserClasses?: components["schemas"]["Automate.Api.Domain.Contracts.Users.UserClass"][];
            EditUserClasses?: components["schemas"]["Automate.Api.Domain.Contracts.Users.UserClass"][];
            /** Format: int32 */
            ExtraFieldDefinitionId?: number;
            Title?: string;
            DisplayFormat?: components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraFieldDisplayFormat"];
            Location?: components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraFieldLocation"];
            TitleFormat?: components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraFieldTitleFormat"];
            Section?: string;
            Tooltip?: string;
            IsReadOnly?: boolean;
            TextFieldSettings?: components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.TextFieldSettings"];
            DropdownSettings?: components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.DropdownSettings"];
            CheckboxSettings?: components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.CheckboxSettings"];
            IsDefaultValue?: boolean;
            LtGuid?: string;
        };
        "Automate.Api.Domain.Contracts.Users.UserClass": {
            /** Format: int32 */
            UserClassId?: number;
            Name?: string;
            Permissions?: components["schemas"]["Automate.Api.Domain.Contracts.Users.UserClassUserPermissions"];
            BinaryExtensionPermissions?: components["schemas"]["Automate.Api.Domain.Contracts.SystemExtensions.Binary.BinaryExtensionPermission"][];
            WebExtensionClaims?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.WebExtensionPermission"][];
        };
        "Automate.Api.Domain.Contracts.Users.UserClassUserPermissions": {
            SuperAdmin?: boolean;
            SystemConfig?: boolean;
            ClassConfig?: boolean;
            CreateTickets?: boolean;
            SharedLinks?: boolean;
            TemplateRead?: boolean;
            TemplateEdit?: boolean;
            TemplateDelete?: boolean;
            ClientRead?: boolean;
            ClientEdit?: boolean;
            ClientDelete?: boolean;
            ReportRead?: boolean;
            ReportEdit?: boolean;
            ReportDelete?: boolean;
            ContactRead?: boolean;
            ContactEdit?: boolean;
            ContactDelete?: boolean;
            UserRead?: boolean;
            UserEdit?: boolean;
            UserDelete?: boolean;
            ToolRead?: boolean;
            ToolEdit?: boolean;
            ToolDelete?: boolean;
            ScriptRead?: boolean;
            ScriptEdit?: boolean;
            ScriptDelete?: boolean;
            ManageGroups?: boolean;
            DashTicketing?: boolean;
            DashTime?: boolean;
            DashManage?: boolean;
            DashTrending?: boolean;
            DashOverview?: boolean;
            HUDUpdate?: boolean;
            HUDShowAll?: boolean;
            DataViewUpdate?: boolean;
            DataViewDelete?: boolean;
            DataViewShowAll?: boolean;
            UsersShowAll?: boolean;
            UserClassCreate?: boolean;
            UserClassUpdate?: boolean;
            PatchManagerConfig?: boolean;
            ReportsCreate?: boolean;
            ProbeTemplateExecute?: boolean;
            ScheduledScriptsUpdate?: boolean;
            ClientsShowAll?: boolean;
            ShowPasswords?: boolean;
            LocationsShowAll?: boolean;
            ComputersCreate?: boolean;
            ComputersUpdate?: boolean;
            ComputersDelete?: boolean;
            ComputersShowAll?: boolean;
            ComputersForceUpdate?: boolean;
            NetworkDeviceUpdate?: boolean;
            NetworkDeviceDelete?: boolean;
            NetworkDeviceShowAll?: boolean;
            RetiredAssetsDelete?: boolean;
            GroupsCreate?: boolean;
            GroupsDelete?: boolean;
            GroupsShowAll?: boolean;
            GroupsScheduleScript?: boolean;
            GroupMonitorsUpdate?: boolean;
            GroupInfoUpdate?: boolean;
            GroupManagedServices?: boolean;
            RemoteMonitorsCreate?: boolean;
            RemoteMonitorsDelete?: boolean;
            InternalMonitorsCreate?: boolean;
            InternalMonitorsUpdate?: boolean;
            InternalMonitorsDelete?: boolean;
            AlertsUpdate?: boolean;
            AlertsDeleteAll?: boolean;
            TicketsRead?: boolean;
            TicketsUpdate?: boolean;
            TicketsDelete?: boolean;
            TicketsRequest?: boolean;
            SearchesRead?: boolean;
            SearchesUpdate?: boolean;
            SearchesDelete?: boolean;
            PatchManagerRead?: boolean;
            PatchManagerUpdate?: boolean;
            LanguagePackEditor?: boolean;
            ManagedServiceCatalog?: boolean;
            NavigationMenuUpdate?: boolean;
            RSSFeedRead?: boolean;
            RSSFeedUpdate?: boolean;
            LinksDelete?: boolean;
            PluginManager?: boolean;
            SolutionCenter?: boolean;
            DatabaseExecute?: boolean;
            ServerStatus?: boolean;
            ManageAudits?: boolean;
            ManageRemoteCommands?: boolean;
            ManageServiceLogs?: boolean;
            ManageOutdated?: boolean;
            ManageOfflineComputers?: boolean;
            ManageScheduleClientScripts?: boolean;
            DashboardConfig?: boolean;
            ConfigApplicationList?: boolean;
            ConfigEventBlackList?: boolean;
            QuickConnect?: boolean;
            PermissionsUpdate?: boolean;
            UserClassRead?: boolean;
            UserClassDelete?: boolean;
            SQLScriptFunctions?: boolean;
        };
        "Automate.Api.Domain.Contracts.SystemExtensions.Binary.BinaryExtensionPermission": {
            /** Format: int32 */
            ExtensionPermissionId?: number;
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            ExtensionGuid?: string;
            ExtensionName?: string;
            /** Format: int32 */
            PermissionId?: number;
            PermissionName?: string;
        };
        "Automate.Api.Domain.Contracts.WebExtensions.WebExtensionPermission": {
            /** Format: int32 */
            WebExtensionPermissionId?: number;
            /** Format: int32 */
            WebExtensionId?: number;
            PermissionKey?: string;
            PermissionName?: string;
            Description?: string;
        };
        "Automate.Api.Domain.Contracts.ExtraFields.ExtraFieldSectionResetRequest": {
            Section?: string;
        };
        "LabTech.Models.FeatureFlag": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
            IsEnabled?: boolean;
        };
        "LabTech.Models.GroupComputer": {
            Id?: string;
            GroupId?: string;
            ComputerId?: string;
        };
        "LabTech.Models.GroupContact": {
            Id?: string;
            GroupId?: string;
            ContactId?: string;
        };
        "Automate.Api.Domain.Contracts.BatchCommands.Group.RemoveEntitiesFromGroupRequest": {
            /** Format: int32 */
            GroupId?: number;
            /** @enum {string} */
            EntityType?: "System" | "Computer" | "Site" | "Company" | "Probe" | "NetworkDevice" | "Ticket" | "Group" | "MobileDevice" | "Vendor" | "VendorProduct" | "Possibility" | "Opportunity" | "Contact" | "User" | "Script" | "Plugin" | "Service" | "ServiceBundle" | "Search" | "SearchFolder" | "Dataview" | "DataviewFolder" | "UserFolder" | "UserClass" | "ScriptFolder" | "RemoteMonitorTemplate" | "ExtraField";
            EntityIds?: number[];
        };
        "LabTech.Models.GroupNetworkDevice": {
            Id?: string;
            GroupId?: string;
            DeviceId?: string;
        };
        "Automate.Api.Domain.Contracts.Patching.GroupPatchingPolicy": {
            ApprovalPolicies?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.ApprovalPolicy"][];
            /** Format: int32 */
            GroupId?: number;
            GroupName?: string;
            IsManual?: boolean;
            IsPatchingGroup?: boolean;
            MicrosoftUpdatePolicy?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.MicrosoftUpdatePolicy"];
            /** Format: int32 */
            Priority?: number;
            RebootPolicy?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.RebootPolicy"];
            ThirdPartyUpdatePolicy?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.ThirdPartyUpdatePolicy"];
            AutoJoinSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Groups.GroupAutoJoinSettings"];
            /** Format: int32 */
            WindowsComputerCount?: number;
        };
        "Automate.Api.Domain.Contracts.Patching.MicrosoftUpdatePolicy": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
            UpdateMode?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.WindowsUpdateAgentMode"];
            CreateRestorePoint?: boolean;
            DaytimePatching?: boolean;
            /** Format: int32 */
            DaytimePatchingMinimumUptime?: number;
            InstallMissingBaselinePatches?: boolean;
            WakeSystem?: boolean;
            PatchingPolicySchedule?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.PatchingPolicySchedule"];
            Windows10UpdatePolicySettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.Windows10UpdatePolicySettings"];
            PatchingPolicyScriptOptions?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.PatchingPolicyScriptOptions"];
            ScheduleDay?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.UpdatePolicyScheduleDay"];
            ScheduleStartHour?: string;
            ScheduleTimeSpan?: string;
        };
        "Automate.Api.Domain.Contracts.Patching.RebootPolicy": {
            /** Format: int32 */
            Id?: number;
            /** Format: int32 */
            MinutesAfterInstallToReboot?: number;
            Name?: string;
            RebootAction?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.PatchRebootAction"];
            RebootMode?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.PatchRebootMode"];
            RebootPriorToFirstPatchInstall?: boolean;
            SetMaintenanceWindowForReboot?: boolean;
        };
        "Automate.Api.Domain.Contracts.Patching.ThirdPartyUpdatePolicy": {
            CreateRestorePoint?: boolean;
            DaytimePatching?: boolean;
            /** Format: int32 */
            Id?: number;
            Name?: string;
            ScheduleDay?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.UpdatePolicyScheduleDay"];
            ScheduleStartHour?: string;
            ScheduleTimeSpan?: string;
            WakeSystem?: boolean;
        };
        "Automate.Api.Domain.Contracts.Groups.GroupAutoJoinSettings": {
            ComputerAutoJoinSearch?: components["schemas"]["Automate.Api.Domain.Contracts.Searches.Search"];
            IsLimitedToComputerAutoJoin?: boolean;
        };
        "Automate.Api.Domain.Contracts.Patching.WindowsUpdateAgentMode": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Patching.PatchingPolicySchedule": {
            /** Format: int32 */
            StartTime?: number;
            Duration?: string;
            PolicyScheduleType?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.PolicyScheduleType"];
            DatesScheduleSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.DatesScheduleSettings"];
            DaysScheduleSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.DaysScheduleSettings"];
        };
        "Automate.Api.Domain.Contracts.Patching.Windows10UpdatePolicySettings": {
            ServiceBranch?: string;
            /** Format: int32 */
            FeatureUpdateDeferment?: number;
            /** Format: int32 */
            QualityUpdateDeferment?: number;
        };
        "Automate.Api.Domain.Contracts.Patching.PatchingPolicyScriptOptions": {
            BeforeScript?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.PatchingPolicyScript"];
            AfterScript?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.PatchingPolicyScript"];
            CancelActionOnBeforeScriptFailure?: boolean;
        };
        "Automate.Api.Domain.Contracts.Patching.UpdatePolicyScheduleDay": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Patching.PatchRebootAction": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Patching.PatchRebootMode": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Searches.Search": {
            /** Format: int32 */
            SearchId?: number;
            Name?: string;
            SearchTargetType?: components["schemas"]["Automate.Api.Domain.Contracts.Searches.SearchTargetType"];
            SearchFolder?: components["schemas"]["LabTech.Models.SearchFolder"];
            /** Format: date-time */
            UpdateDate?: string;
            UpdatedBy?: string;
            IsReadOnly?: boolean;
        };
        "Automate.Api.Domain.Contracts.Patching.PolicyScheduleType": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Patching.DatesScheduleSettings": {
            MonthlyOccurence?: string[];
            Dates?: number[];
            LastDayOfMonth?: boolean;
        };
        "Automate.Api.Domain.Contracts.Patching.DaysScheduleSettings": {
            MonthlyOccurence?: string[];
            WeeklyOccurence?: string[];
            DailyOccurence?: string[];
        };
        "Automate.Api.Domain.Contracts.Patching.PatchingPolicyScript": {
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            ScriptGuid?: string;
            ScriptName?: string;
        };
        "Automate.Api.Domain.Contracts.Searches.SearchTargetType": {
            /** Format: int32 */
            SearchTargetTypeId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupTreeItem": {
            /** Format: int32 */
            GroupId?: number;
            /** Format: int32 */
            ParentId?: number;
            Name?: string;
            FullName?: string;
            UserHasDirectAccess?: boolean;
            IsLimitedToComputerAutoJoinSearch?: boolean;
            IsLimitedToNetworkDeviceAutoJoinSearch?: boolean;
            IsLimitedToContactAutoJoinSearch?: boolean;
            ParentGroups?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupTreeItem"][];
            ChildGroups?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupTreeItem"][];
            /** Format: int32 */
            DirectComputerMembershipCount?: number;
            /** Format: int32 */
            IndirectComputerMembershipCount?: number;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.GroupConfigurationViewModel": {
            GroupTypeInformation?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.GroupTypeInformation"];
            RemoteAgentTemplateInformation?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.RemoteAgentTemplateInformation"];
            ComputerSearchInformation?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.ComputerSearchInformation"];
            NetworkDeviceSearches?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.Search"][];
            ContactSearches?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.Search"][];
            Clients?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.Client"][];
            Locations?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.Location"][];
            MaintenanceWindows?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.MaintenanceWindow"][];
            UserClasses?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.UserClass"][];
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.GroupTypeInformation": {
            /** Format: int32 */
            InheritedGroupTypeId?: number;
            IsModifiable?: boolean;
            GroupTypes?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.GroupType"][];
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.RemoteAgentTemplateInformation": {
            /** Format: int32 */
            InheritedRemoteAgentTemplateId?: number;
            IsModifiable?: boolean;
            RemoteAgentTemplates?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.RemoteAgentTemplate"][];
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.ComputerSearchInformation": {
            IsModifiable?: boolean;
            Searches?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.Search"][];
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.Search": {
            /** Format: int32 */
            SearchId?: number;
            Name?: string;
            FolderName?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.Client": {
            /** Format: int32 */
            ClientId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.Location": {
            /** Format: int32 */
            LocationId?: number;
            Name?: string;
            Client?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.Client"];
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.MaintenanceWindow": {
            /** Format: int32 */
            MaintenanceWindowId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.UserClass": {
            /** Format: int32 */
            UserClassId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.GroupType": {
            /** Format: int32 */
            GroupTypeId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Groups.GroupConfiguration.RemoteAgentTemplate": {
            /** Format: int32 */
            RemoteAgentTemplateId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Groups.InternalMonitor.InternalMonitorSubscriptionViewModel": {
            AlertTemplates?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.InternalMonitor.AlertTemplate"][];
            TicketCategories?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.InternalMonitor.TicketCategory"][];
            IsGroupSubscribed?: boolean;
            IsSubscriptionInherited?: boolean;
            IsOverrideApplied?: boolean;
            /** Format: int32 */
            MonitorAlertTemplateId?: number;
            /** Format: int32 */
            MonitorTicketCategoryId?: number;
            /** Format: int32 */
            OverriddenAlertTemplateId?: number;
            /** Format: int32 */
            OverriddenTicketCategoryId?: number;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Groups.InternalMonitor.AlertTemplate": {
            /** Format: int32 */
            AlertTemplateId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Groups.InternalMonitor.TicketCategory": {
            /** Format: int32 */
            TicketCategoryId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Groups.MembershipConfiguration": {
            MembershipType?: string;
            ComputerSearchName?: string;
            IsLimitedToComputerSearch?: boolean;
            NetworkDeviceSearchName?: string;
            IsLimitedToNetworkDeviceSearch?: boolean;
            ContactSearchName?: string;
            IsLimitedToContactSearch?: boolean;
            IncludesContactAssociatedComputers?: boolean;
        };
        "LabTech.Models.Monitors.InternalMonitorResult": {
            Monitor?: components["schemas"]["LabTech.Models.Monitors.Monitor"];
            /** Format: int32 */
            ComputerId?: number;
            /** Format: date-time */
            Timestamp?: string;
            Result?: string;
            IdentityField?: string;
        };
        "LabTech.Models.Monitors.Monitor": {
            AlertAction?: components["schemas"]["LabTech.Models.AlertAction"];
            AlertStyle?: components["schemas"]["LabTech.Models.Monitors.MonitorAlertStyle"];
            ComparerSettings?: components["schemas"]["LabTech.Models.Monitors.MonitorComparerSettings"];
            ControlGuid?: string;
            /** Format: int32 */
            FailureCount?: number;
            IdField?: string;
            /** Format: int32 */
            Interval?: number;
            Installed?: boolean;
            IsInternalMonitor?: boolean;
            IsNetworkDeviceMonitor?: boolean;
            /** Format: date-time */
            LastChecked?: string;
            /** Format: date-time */
            LastFailed?: string;
            LastStatus?: string;
            Guid?: string;
            MonitorAlertTarget?: components["schemas"]["LabTech.Models.Monitors.MonitorAlertTarget"];
            /** Format: int32 */
            MonitorId?: number;
            MonitorOwner?: components["schemas"]["LabTech.Models.Monitors.MonitorOwner"];
            MonitorState?: components["schemas"]["LabTech.Models.Monitors.MonitorState"];
            LocalState?: components["schemas"]["LabTech.Models.Monitors.MonitorState"];
            Name?: string;
            PendingUpdate?: boolean;
            ReportCategory?: components["schemas"]["LabTech.Models.ReportCategory"];
            TicketCategory?: components["schemas"]["LabTech.Models.TicketCategory"];
            /** Format: int32 */
            WarningCount?: number;
            Script?: components["schemas"]["LabTech.Models.Script"];
            /** Format: int64 */
            Version?: number;
            RoutineParameters?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.MonitorRoutineParameters"];
            Routine?: components["schemas"]["LabTech.Models.Monitors.MonitorRoutine"];
            AlertMessages?: components["schemas"]["LabTech.Models.Monitors.MonitorAlertMessages"];
            Targets?: components["schemas"]["LabTech.Models.Monitors.MonitorTarget"];
            IsGlobalMonitor?: boolean;
            IsOverridden?: boolean;
            IsCollectingData?: boolean;
            AffectedEntities?: components["schemas"]["LabTech.Models.Monitors.MonitorAffectedEntities"];
        };
        "LabTech.Models.Monitors.MonitorAlertStyle": {
            InternalMonitorAlertStyle?: components["schemas"]["LabTech.Models.Monitors.InternalMonitorAlertStyle"];
            RemoteMonitorAlertStyle?: components["schemas"]["LabTech.Models.Monitors.RemoteMonitorAlertStyle"];
        };
        "LabTech.Models.Monitors.MonitorComparerSettings": {
            Comparer?: components["schemas"]["LabTech.Models.Monitors.MonitorComparer"];
            Format?: components["schemas"]["LabTech.Models.Monitors.MonitorComparerSettingsFormat"];
            Value?: components["schemas"]["LabTech.Models.Monitors.MonitorComparerValue"];
            /** Format: double */
            SmoothingCoefficient?: number;
            IsExpression?: boolean;
            SmoothingStyle?: components["schemas"]["LabTech.Models.Monitors.MonitorComparerSettingsSmoothingStyle"];
            LanguageOverrides?: {
                [key: string]: string;
            };
            ResultFormat?: components["schemas"]["LabTech.Models.Monitors.MonitorComparerSettingsResultFormat"];
        };
        "LabTech.Models.Monitors.MonitorAlertTarget": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
            /** Format: int32 */
            CompId?: number;
        };
        "LabTech.Models.Monitors.MonitorOwner": {
            /** Format: int32 */
            OwnerType?: number;
            Description?: string;
            OwningGroup?: components["schemas"]["LabTech.Models.Group"];
            OwningScript?: components["schemas"]["LabTech.Models.Script"];
            OwningPlugin?: components["schemas"]["LabTech.Models.Monitors.MonitorPluginOwner"];
        };
        "LabTech.Models.Monitors.MonitorState": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.ReportCategory": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
            /** Format: byte */
            Icon?: string;
            TitleText?: string;
        };
        "LabTech.Models.Script": {
            Id?: string;
            Folder?: components["schemas"]["LabTech.Models.ScriptFolder"];
            Name?: string;
            Comments?: string;
            IsComputerScript?: boolean;
            IsLocationScript?: boolean;
            IsMaintenanceScript?: boolean;
            IsFunctionScript?: boolean;
            IsOffline?: boolean;
            IgnoreForMobileDevices?: boolean;
            IsPublicSharable?: boolean;
            IsUserResponse?: boolean;
            IsSystemScript?: boolean;
            IsMobileDeviceScript?: boolean;
            IsNetworkDeviceScript?: boolean;
            IsContactScript?: boolean;
            /** Format: int32 */
            Version?: number;
            GUID?: string;
            Parameters?: string[];
            EditPermission?: number[];
            Permission?: number[];
            /** Format: int32 */
            AutomationTime?: number;
            /** Format: date-time */
            UpdateDate?: string;
            UpdatedBy?: string;
            FullFolderPath?: string;
            ScriptData?: components["schemas"]["LabTech.Models.ScriptData"];
        };
        "LabTech.Models.Monitors.RoutineParameters.MonitorRoutineParameters": {
            Format?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.MonitorRoutineParametersFormat"];
            UnformattedMonitorParameters?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.UnformattedMonitorRoutineParameters"];
            InternalDatabaseQueryParameters?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.InternalDatabaseQueryParameters"];
            LatencyTarget?: string;
            GetNetworkResponseParameters?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.GetNetworkResponseParameters"];
            SnmpOidQueryParameters?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.SnmpOidQueryParameters"];
            PerformanceCounterQueryParameters?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.PerformanceCounterQueryParameters"];
            HardwareSensorQueryParameters?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.HardwareSensorQueryParameters"];
            NetworkDeviceWbemQueryParameters?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.NetworkDeviceWbemQueryParameters"];
            GetPluginCommandResultParameters?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.GetPluginCommandResultParameters"];
            FileOrDirectoryQueryParameters?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.FileOrDirectoryQueryParameters"];
            ServiceName?: string;
            VolumeMountpoint?: string;
            RegistryValueQueryParameters?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.RegistryValueQueryParameters"];
            ProcessName?: string;
            EventLogListenerParameters?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.EventLogQueryParameters"];
            GetExecutableResultParameters?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.GetExecutableResultParameters"];
            WmiQuery?: string;
        };
        "LabTech.Models.Monitors.MonitorRoutine": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.Monitors.MonitorAlertMessages": {
            SuccessSubject?: string;
            SuccessMessage?: string;
            FailureSubject?: string;
            FailureMessage?: string;
        };
        "LabTech.Models.Monitors.MonitorTarget": {
            Location?: components["schemas"]["LabTech.Models.Location"];
            Client?: components["schemas"]["LabTech.Models.Client"];
            Computer?: components["schemas"]["LabTech.Models.Computer"];
            NetworkDevice?: components["schemas"]["LabTech.Models.NetworkDevice"];
            GroupIds?: number[];
        };
        "LabTech.Models.Monitors.MonitorAffectedEntities": {
            RemoteMonitorAffectedLocation?: components["schemas"]["LabTech.Models.Location"];
            RemoteMonitorAffectedClient?: components["schemas"]["LabTech.Models.Client"];
            InternalMonitorAffectedLocations?: components["schemas"]["LabTech.Models.Location"][];
            InternalMonitorAffectedClients?: components["schemas"]["LabTech.Models.Client"][];
        };
        "LabTech.Models.Monitors.InternalMonitorAlertStyle": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.Monitors.RemoteMonitorAlertStyle": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.Monitors.MonitorComparer": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.Monitors.MonitorComparerSettingsFormat": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.Monitors.MonitorComparerValue": {
            Format?: components["schemas"]["LabTech.Models.Monitors.MonitorComparerValueFormat"];
            MultiValueFormat?: components["schemas"]["LabTech.Models.Monitors.MonitorComparerMultiValueFormat"];
            StateBasedValueFormat?: components["schemas"]["LabTech.Models.Monitors.MonitorComparerStateBasedValueFormat"];
            SingleValueFormat?: components["schemas"]["LabTech.Models.Monitors.MonitorComparerSingleValueFormat"];
        };
        "LabTech.Models.Monitors.MonitorComparerSettingsSmoothingStyle": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.Monitors.MonitorComparerSettingsResultFormat": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.Monitors.MonitorPluginOwner": {
            ControlGUID?: string;
            PluginName?: string;
            AlterationInstructions?: string;
        };
        "LabTech.Models.ScriptFolder": {
            Id?: string;
            ParentId?: string;
            Name?: string;
            GUID?: string;
            SubFolders?: components["schemas"]["LabTech.Models.ScriptFolder"][];
            ParentFolder?: components["schemas"]["LabTech.Models.ScriptFolder"];
        };
        "LabTech.Models.ScriptData": {
            ScriptMetadata?: components["schemas"]["LabTech.Models.ScriptMetadata"];
            ScriptSteps?: components["schemas"]["LabTech.Models.ScriptStep"][];
        };
        "LabTech.Models.Monitors.RoutineParameters.MonitorRoutineParametersFormat": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.Monitors.RoutineParameters.UnformattedMonitorRoutineParameters": {
            Where?: string;
            What?: string;
            DataOut?: string;
            IdField?: string;
        };
        "LabTech.Models.Monitors.RoutineParameters.InternalDatabaseQueryParameters": {
            FieldToCheck?: string;
            TableOrViewToQuery?: string;
            AdditionalConditions?: string;
            IdentityField?: string;
        };
        "LabTech.Models.Monitors.RoutineParameters.GetNetworkResponseParameters": {
            Target?: string;
            Port?: string;
            Payload?: string;
        };
        "LabTech.Models.Monitors.RoutineParameters.SnmpOidQueryParameters": {
            IpAddress?: string;
            SnmpVersion?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.SnmpOidQuerySnmpVersion"];
            Community?: string;
            Username?: string;
            EncryptionMethod?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.SnmpOidQueryEncryptionMethod"];
            EncryptionPassword?: string;
            AuthenticationMethod?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.SnmpOidQueryAuthenticationMethod"];
            AuthenticationPassword?: string;
            ObjectIdentifier?: string;
        };
        "LabTech.Models.Monitors.RoutineParameters.PerformanceCounterQueryParameters": {
            PerformanceObject?: string;
            PerformanceCounter?: string;
            Instance?: string;
        };
        "LabTech.Models.Monitors.RoutineParameters.HardwareSensorQueryParameters": {
            Sensor?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.HardwareSensorQuerySensor"];
            SensorNumber?: string;
        };
        "LabTech.Models.Monitors.RoutineParameters.NetworkDeviceWbemQueryParameters": {
            Namespace?: string;
            Query?: string;
        };
        "LabTech.Models.Monitors.RoutineParameters.GetPluginCommandResultParameters": {
            /** Format: int32 */
            CommandNumber?: number;
            Data?: string;
        };
        "LabTech.Models.Monitors.RoutineParameters.FileOrDirectoryQueryParameters": {
            Directory?: string;
            File?: string;
        };
        "LabTech.Models.Monitors.RoutineParameters.RegistryValueQueryParameters": {
            Hive?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.RegistryValueQueryRegistryHive"];
            Key?: string;
            Value?: string;
        };
        "LabTech.Models.Monitors.RoutineParameters.EventLogQueryParameters": {
            Log?: string;
            LevelFilter?: components["schemas"]["LabTech.Models.Monitors.RoutineParameters.EventLogQueryEventLevelFilter"];
            /** Format: int64 */
            Keywords?: number;
            Source?: string;
            /** Format: int32 */
            EventId?: number;
            RegularExpressionFilter?: string;
        };
        "LabTech.Models.Monitors.RoutineParameters.GetExecutableResultParameters": {
            FullyQualifiedExecutableString?: string;
            ResultTransformRegularExpression?: string;
        };
        "LabTech.Models.Monitors.MonitorComparerValueFormat": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.Monitors.MonitorComparerMultiValueFormat": {
            Values?: string[];
        };
        "LabTech.Models.Monitors.MonitorComparerStateBasedValueFormat": {
            NormalComparer?: components["schemas"]["LabTech.Models.Monitors.MonitorComparerSettings"];
            WarningComparer?: components["schemas"]["LabTech.Models.Monitors.MonitorComparerSettings"];
            ErrorComparer?: components["schemas"]["LabTech.Models.Monitors.MonitorComparerSettings"];
        };
        "LabTech.Models.Monitors.MonitorComparerSingleValueFormat": {
            Value?: string;
        };
        "LabTech.Models.ScriptMetadata": {
            ExtraDataFields?: string;
            Parameters?: string;
            Globals?: string;
            /** Format: int32 */
            ScriptVersion?: number;
            ScriptGuid?: string;
        };
        "LabTech.Models.ScriptStep": {
            /** Format: int32 */
            ScriptSection?: number;
            /** Format: int32 */
            FunctionId?: number;
            Param1?: string;
            Param2?: string;
            Param3?: string;
            Param4?: string;
            Param5?: string;
            /** Format: int32 */
            Sort?: number;
            /** Format: int32 */
            Continue?: number;
            /** Format: int32 */
            OsLimit?: number;
            /** Format: int32 */
            Indentation?: number;
        };
        "LabTech.Models.Monitors.RoutineParameters.SnmpOidQuerySnmpVersion": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.Monitors.RoutineParameters.SnmpOidQueryEncryptionMethod": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.Monitors.RoutineParameters.SnmpOidQueryAuthenticationMethod": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.Monitors.RoutineParameters.HardwareSensorQuerySensor": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.Monitors.RoutineParameters.RegistryValueQueryRegistryHive": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.Monitors.RoutineParameters.EventLogQueryEventLevelFilter": {
            MatchVerbose?: boolean;
            MatchInformational?: boolean;
            MatchWarning?: boolean;
            MatchError?: boolean;
            MatchCritical?: boolean;
        };
        "Automate.Api.Domain.Contracts.IpRestrictions.IpRestrictionStatus": {
            IsEnabled?: boolean;
        };
        "LabTech.Models.LicensedProduct": {
            CdKey?: string;
            /** Format: int32 */
            CurrentLicenseUsage?: number;
            Data?: string;
            IsLicenseActive?: boolean;
            LicenseFile?: string;
            /** Format: int32 */
            MaxLicenseUsage?: number;
            /** Format: int32 */
            ProductId?: number;
            ProductSku?: string;
        };
        "LabTech.Models.Link": {
            Id?: string;
            Name?: string;
            URL?: string;
            Category?: string;
        };
        "Automate.Api.Domain.Contracts.Patching.LocalOverridePolicy": {
            ApprovalPolicies?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.ApprovalPolicy"][];
            /** Format: int32 */
            ComputerId?: number;
            MicrosoftUpdatePolicy?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.MicrosoftUpdatePolicy"];
            RebootPolicy?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.RebootPolicy"];
            ThirdPartyUpdatePolicy?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.ThirdPartyUpdatePolicy"];
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkMapNode": {
            /** Format: int32 */
            DeviceId?: number;
            DeviceName?: string;
            DeviceFriendlyName?: string;
            Description?: string;
            DeviceType?: string;
            ChildNodeList?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkMapNode"][];
            DeviceMacAddress?: string;
            IpAddress?: string;
            Status?: string;
            /** @enum {string} */
            DeviceClassification?: "Unknown" | "Computer" | "NetworkDevice" | "InternetConnection" | "BlackBox";
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkMapNodeDetails": {
            /** Format: int32 */
            DeviceId?: number;
            DeviceType?: string;
            /** Format: int64 */
            Uptime?: number;
            IgnoreDeviceScan?: boolean;
            /** Format: date-time */
            AssetDate?: string;
            /** Format: date-time */
            DateLastInventoried?: string;
            /** Format: date-time */
            LastContactDate?: string;
            IpAddress?: string;
            DeviceMacAddress?: string;
            OperatingSystem?: string;
            Model?: string;
            LocationProbe?: string;
            Manufacturer?: string;
            UplinkPort?: string;
            UplinkName?: string;
            UplinkIpAddress?: string;
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.EncryptionMethod": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.HashMethod": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ScanFrequency": {
            /** Format: int32 */
            ScanFrequencyId?: number;
            /** Format: int32 */
            FrequencyInMinutes?: number;
            DisplayName?: string;
            FrequencyCategory?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ScanFrequencyCategory"];
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ScanFrequencyCategory": {
            /** Format: int32 */
            CategoryId?: number;
            Description?: string;
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.StatusScanNetworkPortOption": {
            /** Format: int32 */
            StatusScanNetworkPortOptionId?: number;
            Description?: string;
        };
        "LabTech.Repositories.MySQL.Domain.Models.ProbeEventLevel": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Maintenance.MaintenanceWindowDefinition": {
            /** Format: int32 */
            MaintenanceWindowDefinitionId?: number;
            Name?: string;
            Comment?: string;
        };
        "LabTech.Models.ManagedLicense": {
            /** Format: int32 */
            Id?: number;
            /** Format: int32 */
            ClientId?: number;
            Name?: string;
            SearchString?: string;
            /** Format: int32 */
            LicenseCount?: number;
            /** Format: int32 */
            InstalledCount?: number;
            ProductKey?: components["schemas"]["LabTech.Models.ProductKey"];
        };
        "LabTech.Models.ProductKey": {
            /** Format: int32 */
            Id?: number;
            /** Format: int32 */
            ClientId?: number;
            ProductName?: string;
            SerialNumber?: string;
            LicenseKey?: string;
            DoesExpire?: boolean;
            /** Format: date-time */
            ExpirationDate?: string;
            Notes?: string;
            /** Format: int32 */
            ComputerId?: number;
            ComputerName?: string;
        };
        "Automate.Api.Domain.Contracts.PresentationLayer.ManagementPacks.ManagementPackQuickSettingsRequest": {
            IsCoreServicesEnabled?: boolean;
            IsDatabaseEnabled?: boolean;
            IsMessagingServicesEnabled?: boolean;
            IsNetworkPortsEnabled?: boolean;
            IsWebsitesAndProxiesEnabled?: boolean;
            AlertLevel?: string;
        };
        "Automate.Api.Domain.Contracts.PresentationLayer.ManagementPacks.ManagementPackQuickSettingsResponse": {
            CoreServicesStatus?: components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.ManagementPacks.ManagementPackStatus"];
            DatabaseStatus?: components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.ManagementPacks.ManagementPackStatus"];
            MessagingServicesStatus?: components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.ManagementPacks.ManagementPackStatus"];
            NetworkPortStatus?: components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.ManagementPacks.ManagementPackStatus"];
            WebsitesAndProxiesStatus?: components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.ManagementPacks.ManagementPackStatus"];
        };
        "Automate.Api.Domain.Contracts.PresentationLayer.ManagementPacks.ManagementPackStatus": {
            IsInstalled?: boolean;
            IsEnabled?: boolean;
            AlertLevel?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Menus.ComputerCommands.CommandMenuItemBase": {
            CommandKey?: string;
            DisplayName?: string;
            /** Format: int32 */
            DisplayOrder?: number;
            Route?: string;
            RequireConfirmation?: boolean;
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.MicrosoftUpdatePolicy": {
            /** Format: int32 */
            PolicyId?: number;
            PolicyName?: string;
            ScheduleSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.Schedule.PatchingPolicySchedule"];
            WindowsUpdateAgentSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.WindowsUpdateAgentSettings"];
            PolicyOptions?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.MicrosoftUpdatePolicyOptions"];
            WorkstationOptions?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.PatchingPolicyWorkstationOptions"];
            Windows10UpdateOptions?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.MicrosoftUpdatePolicyWindows10Options"];
            ScriptOptions?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.PatchingPolicyScriptOptions"];
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.Schedule.PatchingPolicySchedule": {
            UseSchedule?: boolean;
            WindowStart?: string;
            WindowDuration?: string;
            PolicyScheduleType?: string;
            DatesSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.Schedule.DatesScheduleSettings"];
            DaysSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.Schedule.DaysScheduleSettings"];
            PatchTuesdaySettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.Schedule.PatchTuesdayScheduleSettings"];
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.WindowsUpdateAgentSettings": {
            UseWindowsUpdateAgentMode?: boolean;
            Mode?: string;
            DisableUserInterface?: boolean;
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.MicrosoftUpdatePolicyOptions": {
            InstallMissingBaselinePatches?: boolean;
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.PatchingPolicyWorkstationOptions": {
            SendWakeOnLanPacket?: boolean;
            CreateWindowsRestorePoint?: boolean;
            DaytimePatchingOptions?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.DaytimePatchingOptions"];
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.MicrosoftUpdatePolicyWindows10Options": {
            ServiceBranchSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.ServiceBranchSettings"];
            FeatureUpdateDefermentSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.UpdateDefermentSettings"];
            QualityUpdateDefermentSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.UpdateDefermentSettings"];
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.PatchingPolicyScriptOptions": {
            BeforeScriptOptions?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.PatchingPolicyScript"];
            AfterScriptOptions?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.PatchingPolicyScript"];
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.Schedule.DatesScheduleSettings": {
            MonthlyOccurrence?: string[];
            Dates?: number[];
            LastDayOfMonth?: boolean;
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.Schedule.DaysScheduleSettings": {
            MonthlyOccurrence?: string[];
            WeeklyOccurrence?: string[];
            DailyOccurrence?: string[];
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.Schedule.PatchTuesdayScheduleSettings": {
            /** Format: int32 */
            DelayInDays?: number;
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.DaytimePatchingOptions": {
            AllowDaytimePatching?: boolean;
            RequireMinimumUptime?: boolean;
            MinimumUptime?: string;
            UpdateOnly?: boolean;
            PromptInterval?: string;
            /** Format: int32 */
            PromptDeadline?: number;
            PromptMessage?: string;
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.ServiceBranchSettings": {
            UseServiceBranch?: boolean;
            IsTargeted?: boolean;
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.UpdateDefermentSettings": {
            UseDeferment?: boolean;
            /** Format: int32 */
            DefermentPeriodDays?: number;
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.PatchingPolicyScript": {
            RunScript?: boolean;
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            ScriptGuid?: string;
            ScriptName?: string;
            CancelActionOnScriptFailure?: boolean;
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.PatchingGroup": {
            /** Format: int32 */
            GroupId?: number;
            GroupName?: string;
        };
        "LabTech.Repositories.MySQL.Domain.Models.Alerting.MonitorAlertSuspension": {
            /** Format: int32 */
            Id?: number;
            /** Format: int32 */
            ComputerId?: number;
            Monitor?: components["schemas"]["LabTech.Models.Monitors.Monitor"];
            /** Format: date-time */
            SuspensionDate?: string;
        };
        "LabTech.Repositories.MySQL.Domain.Models.MonitorDataCollectionSettings": {
            /** Format: int32 */
            MonitorId?: number;
            /** Format: int32 */
            ComputerId?: number;
            UnitLabel?: string;
            GraphTitle?: string;
            /** Format: int32 */
            GraphVerticalLimit?: number;
        };
        "Automate.Api.Domain.Contracts.Monitors.MonitorCount": {
            /** Format: int32 */
            InternalMonitorTotalCount?: number;
            /** Format: int32 */
            InternalMonitorTotalDisableCount?: number;
            /** Format: int32 */
            InternalMonitorTotalDetectedCount?: number;
            /** Format: int32 */
            RemoteMonitorTotalCount?: number;
            /** Format: int32 */
            RemoteMonitorTotalFailureCount?: number;
            /** Format: int32 */
            RemoteMonitorTotalWarningCount?: number;
        };
        "LabTech.Models.PerformanceCounterData": {
            CategoryName?: string;
            Counters?: string[];
            Instances?: string[];
        };
        "LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapoint": {
            /** Format: int32 */
            MonitorId?: number;
            /** Format: int32 */
            ComputerId?: number;
            Format?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapointFormat"];
            IsAveraged?: boolean;
            /** Format: date-time */
            StartTimestamp?: string;
            /** Format: date-time */
            EndTimestamp?: string;
            /** Format: int32 */
            NumberOfSamples?: number;
            /** Format: double */
            Value?: number;
        };
        "LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapointFormat": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Repositories.MySQL.Domain.Models.MonitorHistory": {
            /** Format: int32 */
            MonitorId?: number;
            State?: components["schemas"]["LabTech.Models.Monitors.MonitorState"];
            Message?: string;
            /** Format: date-time */
            Timestamp?: string;
            RawResultMessage?: string;
            /** Format: int32 */
            ComputerId?: number;
        };
        "LabTech.Repositories.MySQL.Domain.Models.MonitorStatistic": {
            /** Format: int32 */
            MonitorId?: number;
            /** Format: date-time */
            LastFailTime?: string;
            LastFailMessage?: string;
            /** Format: date-time */
            LastSuccessTime?: string;
            LastSuccessMessage?: string;
            /** Format: date-time */
            LastWarningTime?: string;
            LastWarningMessage?: string;
            /** Format: date-time */
            MonitorStartTime?: string;
            /** Format: int32 */
            ComputerId?: number;
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.NetworkDevicesRemoteMonitor": {
            /** Format: int32 */
            NetworkDeviceId?: number;
            /** Format: date-time */
            LastFailed?: string;
            /** Format: date-time */
            LastScan?: string;
            Status?: string;
            /** Format: int32 */
            Flags?: number;
            MonitorState?: components["schemas"]["LabTech.Models.Monitors.MonitorState"];
            IsDataCollector?: boolean;
            MonitorOwner?: components["schemas"]["LabTech.Models.Monitors.MonitorOwner"];
            TargetType?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.TargetType"];
            SubType?: string;
            Details?: string;
            LastEditedBy?: string;
            /** Format: date-time */
            LastEditedTime?: string;
            OverrideSettings?: boolean;
            /** Format: int32 */
            RemoteMonitorId?: number;
            Name?: string;
            AlertingSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.AlertingSettings"];
            Configuration?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Configuration"];
        };
        "Automate.Api.Domain.Contracts.Patching.NonCompliantSummaryData": {
            /** Format: int32 */
            LowSeverityCount?: number;
            /** Format: int32 */
            ModerateSeverityCount?: number;
            /** Format: int32 */
            ImportantSeverityCount?: number;
            /** Format: int32 */
            CriticalSeverityCount?: number;
            /** Format: int32 */
            UnspecifiedSeverityCount?: number;
            /** Format: int32 */
            LowCvssCount?: number;
            /** Format: int32 */
            MediumCvssCount?: number;
            /** Format: int32 */
            HighCvssCount?: number;
            /** Format: int32 */
            TotalNonCompliantCount?: number;
        };
        "Automate.Api.Domain.Contracts.System.PasswordResetConfigurationResponse": {
            CanGeneratePasswordResetToken?: boolean;
        };
        "Automate.Api.Domain.Contracts.System.PasswordResetTokenRequest": {
            Username?: string;
            PasswordResetToken?: string;
        };
        "Automate.Api.Domain.Contracts.System.PasswordResetTokenResponse": {
            IsValid?: boolean;
        };
        "Automate.Api.Domain.Contracts.System.ValidatePasswordResetRequest": {
            PasswordResetToken?: string;
        };
        "LabTech.Models.PatchActionArgs": {
            /** Format: int32 */
            EntityType?: number;
            /** Format: int32 */
            EntityId?: number;
        };
        "Automate.Api.Domain.Contracts.Patching.RpcContracts.ExecutePatchActionRequest": {
            PatchActionDetailList?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.RpcContracts.PatchActionInformation"][];
        };
        "Automate.Api.Domain.Contracts.Patching.RpcContracts.PatchActionInformation": {
            /** Format: int32 */
            ComputerId?: number;
            ProductKeyIdList?: string[];
        };
        "LabTech.Repositories.MySQL.Domain.Models.Patching.PatchesSummaryData": {
            /** Format: int32 */
            EntityId?: number;
            EntityName?: string;
            /** Format: int32 */
            TestStageFailedPatchesCount?: number;
            /** Format: int32 */
            TestStageNotAttemptedPatchesCount?: number;
            /** Format: int32 */
            TestStageInstalledPatchesCount?: number;
            /** Format: int32 */
            PilotStageFailedPatchesCount?: number;
            /** Format: int32 */
            PilotStageNotAttemptedPatchesCount?: number;
            /** Format: int32 */
            PilotStageInstalledPatchesCount?: number;
            /** Format: int32 */
            ProductionStageFailedPatchesCount?: number;
            /** Format: int32 */
            ProductionStageNotAttemptedPatchesCount?: number;
            /** Format: int32 */
            ProductionStageInstalledPatchesCount?: number;
        };
        "Automate.Api.Domain.Contracts.Patching.PatchHistory": {
            /** Format: date-time */
            ActionDate?: string;
            /** Format: int32 */
            ComputerId?: number;
            OperationCode?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.MicrosoftUpdateOperationCode"];
            PatchHistoryClient?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.PatchHistoryClient"];
            PatchHistoryTitle?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.PatchHistoryTitle"];
            ResultCode?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.MicrosoftOperationResultCode"];
            UpdateId?: string;
        };
        "Automate.Api.Domain.Contracts.Patching.MicrosoftUpdateOperationCode": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Patching.PatchHistoryClient": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Patching.PatchHistoryTitle": {
            /** Format: int32 */
            Id?: number;
            Title?: string;
            /** Format: int32 */
            KnowledgeBaseId?: number;
        };
        "Automate.Api.Domain.Contracts.Patching.MicrosoftOperationResultCode": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.Models.PatchInformation": {
            WebServerPatchVersion?: string;
            DBAgentServerPatchVersion?: string;
            ControlCenterPatchVersion?: string;
            RemoteAgentPatchVersion?: string;
            LinuxAgentPatchVersion?: string;
            MacAgentPatchVersion?: string;
            /** Format: date-time */
            LastPatchedDate?: string;
        };
        "LabTech.Repositories.MySQL.Domain.Models.Patching.PatchManagerDevice": {
            /** Format: int32 */
            ComputerId?: number;
            ComputerName?: string;
            Stage?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Patching.PatchStage"];
            OperatingSystemName?: string;
            NormalizedOperatingSystemName?: string;
            Company?: components["schemas"]["LabTech.Models.Client"];
            Site?: components["schemas"]["LabTech.Models.Location"];
            /** Format: date-time */
            LastMicrosoftWindow?: string;
            /** Format: date-time */
            LastThirdPartyWindow?: string;
            /** Format: date-time */
            NextMicrosoftWindow?: string;
            /** Format: date-time */
            NextThirdPartyWindow?: string;
            DidLastPatchJobFail?: boolean;
            IsDaytimePatchingEnabled?: boolean;
            IsMissingBaseline?: boolean;
            IsMissingPatchInventory?: boolean;
            IsPatchJobRunning?: boolean;
            IsPendingUpdate?: boolean;
            IsRebootPending?: boolean;
            IsWsusEnabled?: boolean;
            IsWuaOutOfDate?: boolean;
            /** Format: int32 */
            MissingPatchCount?: number;
            /** Format: double */
            MicrosoftCompliancePercent?: number;
            /** Format: double */
            ThirdPartyCompliancePercent?: number;
            HasApprovedPatches?: boolean;
            HasApprovedMicrosoftPatches?: boolean;
            HasApprovedThirdPartyPatches?: boolean;
            /** Format: int32 */
            ReleaseId?: number;
        };
        "LabTech.Repositories.MySQL.Domain.Models.Patching.PatchStage": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Polling.PollingState": {
            SessionStateId?: string;
            Data?: string;
        };
        "LabTech.Repositories.MySQL.Domain.DatabaseEntities.ProbeCommand": {
            /** Format: int32 */
            ProbeCommandId?: number;
            /** Format: int32 */
            ProbeId?: number;
            Command?: components["schemas"]["Automate.Api.Domain.Contracts.ProbeRemoteCommand"];
            Status?: components["schemas"]["Automate.Api.Domain.Contracts.ProbeCommandStatus"];
            Parameters?: string[];
            Output?: string;
            IsFastalk?: boolean;
            /** Format: date-time */
            DateUpdated?: string;
        };
        "Automate.Api.Domain.Contracts.ProbeRemoteCommand": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
            Description?: string;
        };
        "Automate.Api.Domain.Contracts.ProbeCommandStatus": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.ProbeCommandHistoryEntry": {
            /** Format: int32 */
            ProbeCommandHistoryId?: number;
            /** Format: int32 */
            ProbeId?: number;
            /** Format: date-time */
            DateExecuted?: string;
            Status?: components["schemas"]["Automate.Api.Domain.Contracts.ProbeCommandStatus"];
            ProbeRemoteCommand?: components["schemas"]["Automate.Api.Domain.Contracts.ProbeRemoteCommand"];
            Output?: string;
            User?: string;
            /** Format: date-time */
            DateFinished?: string;
        };
        "LabTech.RESTApi.RpcContracts.NewProbeConfiguration": {
            IsAgentPushEnabled?: boolean;
            IsAutomatedDeploymentEnabled?: boolean;
            IsDataCollectionEnabled?: boolean;
            IsSnmpTrapServerEnabled?: boolean;
            IsSyslogServerEnabled?: boolean;
            IsTftpServerEnabled?: boolean;
            CredentialsList?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationCredentials"][];
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationCredentials": {
            /** Format: int32 */
            ProbeConfigurationCredentialsId?: number;
            /** Format: int32 */
            ProbeConfigurationId?: number;
            /** Format: int32 */
            CredentialId?: number;
            /** Format: int32 */
            AttemptSequence?: number;
            CredentialsAlias?: string;
            CredentialDetails?: components["schemas"]["LabTech.Models.ExternalSystemCredentials"];
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration": {
            /** Format: int32 */
            ProbeConfigurationId?: number;
            /** Format: int32 */
            LocationId?: number;
            /** Format: int32 */
            AgentDeploymentAttemptMaximum?: number;
            AutomatedDeploymentEnabled?: boolean;
            DiscoverySettings?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.DiscoveryScanSettings"];
            StatusSettings?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.StatusScanSettings"];
            SnmpSettings?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.SnmpSettings"];
            IsDataCollectionEnabled?: boolean;
            /** Format: int32 */
            SnmpTrapServerListeningPort?: number;
            SyslogSettings?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.SyslogServerSettings"];
            TftpSettings?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.TftpServerSettings"];
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.DiscoveryScanSettings": {
            DiscoveryScanFrequency?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ScanFrequency"];
            LimitDiscoveryToScanWindow?: boolean;
            DiscoveryWindowStart?: string;
            DiscoveryWindowEnd?: string;
            IsMacAddresScanningEnabled?: boolean;
            /** Format: int32 */
            ConcurrentThreadCount?: number;
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.StatusScanSettings": {
            StatusScanFrequency?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ScanFrequency"];
            StatusScanNetworkPortList?: string;
            NetworkPortOption?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.StatusScanNetworkPortOption"];
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.SnmpSettings": {
            CommunityStringsGet?: string;
            /** Format: int32 */
            TimeoutInSeconds?: number;
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.SyslogServerSettings": {
            /** Format: int32 */
            SyslogServerListeningPort?: number;
            SyslogServerIpFilter?: string;
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.TftpServerSettings": {
            TftpServerIpFilter?: string;
            /** Format: int32 */
            TftpServerListeningPort?: number;
            AllowTftpUploads?: boolean;
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationDefaults": {
            /** Format: int32 */
            ProbeDefaultSettingId?: number;
            CommunityStringGetList?: string;
            /** Format: int32 */
            SnmpTimeoutInSeconds?: number;
            /** Format: int32 */
            AgentDeploymentAttemptMaximum?: number;
            DiscoverySettings?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.DiscoveryScanSettings"];
            StatusSettings?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.StatusScanSettings"];
            SnmpSettings?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.SnmpSettings"];
            IsDataCollectionEnabled?: boolean;
            /** Format: int32 */
            SnmpTrapServerListeningPort?: number;
            SyslogSettings?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.SyslogServerSettings"];
            TftpSettings?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.TftpServerSettings"];
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSubnet": {
            /** Format: int32 */
            ProbeSubnetId?: number;
            /** Format: int32 */
            ProbeConfigurationId?: number;
            Network?: string;
            SubnetMask?: string;
            Label?: string;
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeExcludedIpAddressRange": {
            /** Format: int32 */
            ExcludedIpRangeId?: number;
            /** Format: int32 */
            ProbeSubnetId?: number;
            ExcludedIpRange?: string;
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSnmpConfiguration": {
            /** Format: int32 */
            ProbeSnmpConfigurationId?: number;
            /** Format: int32 */
            ProbeConfigurationId?: number;
            /** Format: int32 */
            SnmpTimeoutInSeconds?: number;
            CommunityStringGetList?: string;
            SnmpV3Settings?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSnmpV3Configuration"];
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSnmpV3Configuration": {
            /** Format: int32 */
            ProbeSnmpConfigurationId?: number;
            SnmpV3Username?: string;
            Authentication?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSnmpAuthentication"];
            Encryption?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSnmpEncryption"];
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSnmpAuthentication": {
            /** Format: int32 */
            SnmpAuthenticationId?: number;
            /** Format: int32 */
            ProbeSnmpConfigurationId?: number;
            AuthenticationSecret?: string;
            HashMethod?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.HashMethod"];
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSnmpEncryption": {
            /** Format: int32 */
            SnmpEncryptionId?: number;
            /** Format: int32 */
            ProbeSnmpConfigurationId?: number;
            EncryptionPassword?: string;
            EncryptionMethod?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.EncryptionMethod"];
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.NetMapPluginStatus": {
            /** Format: int32 */
            ComputerId?: number;
            IsNetMapPluginEnabled?: boolean;
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeDiscoveryScanStatus": {
            /** Format: int32 */
            ProbeDiscoveryScanStatusId?: number;
            /** Format: int32 */
            LocationId?: number;
            /** Format: int32 */
            ProbeId?: number;
            IsDiscoveryScanRunning?: boolean;
            /** Format: date-time */
            DiscoveryScanStart?: string;
            /** Format: date-time */
            LastDiscoveryScan?: string;
        };
        "LabTech.Repositories.MySQL.Domain.Models.ProbeEvent": {
            /** Format: int32 */
            ProbeId?: number;
            EventLevel?: components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.ProbeEventLevel"];
            Message?: string;
            /** Format: date-time */
            EventTime?: string;
        };
        "LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSummary": {
            /** Format: int32 */
            CurrentProbeId?: number;
            /** Format: int32 */
            TotalDevices?: number;
            /** Format: int32 */
            OfflineDevices?: number;
            /** Format: int32 */
            MissingAgents?: number;
            /** Format: date-time */
            LastDiscoveryScan?: string;
            AgentDeploymentEnabled?: boolean;
            HasMaxTilePermissions?: boolean;
            IsGenerationTwo?: boolean;
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.RebootPolicy.RebootPolicy": {
            /** Format: int32 */
            PolicyId?: number;
            PolicyName?: string;
            RebootPolicyType?: string;
            DisableServerPatchRebootSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.RebootPolicy.DisableServerPatchRebootSettings"];
            PromptWithoutDeadlineSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.RebootPolicy.PromptWithoutDeadlineSettings"];
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.RebootPolicy.DisableServerPatchRebootSettings": {
            ServerSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.RebootPolicy.DisableServerPatchRebootServerSettings"];
            WorkstationSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.RebootPolicy.DisableServerPatchRebootWorkstationSettings"];
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.RebootPolicy.PromptWithoutDeadlineSettings": {
            RebootTriggerType?: string;
            PostPatchInstallTriggerSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.RebootPolicy.PostPatchInstallTriggerSettings"];
            ScheduleTriggerSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.Schedule.PatchingPolicySchedule"];
            PromptSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.RebootPolicy.RebootPolicyPromptSettings"];
            RebootPriorToPatchJobInstalls?: boolean;
            MaintenanceModeOptions?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.RebootPolicy.RebootPolicyMaintenanceModeOptions"];
            ScriptOptions?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.PatchingPolicyScriptOptions"];
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.RebootPolicy.DisableServerPatchRebootServerSettings": {
            AlertTemplate?: components["schemas"]["Automate.Api.Domain.Contracts.AlertTemplates.AlertTemplate"];
            AlertMessage?: string;
            TicketCategory?: components["schemas"]["Automate.Api.Domain.Contracts.Ticketing.TicketCategory"];
            ReportCategory?: components["schemas"]["Automate.Api.Domain.Contracts.Reporting.ReportCategory"];
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.RebootPolicy.DisableServerPatchRebootWorkstationSettings": {
            PromptMessage?: string;
            PromptInterval?: string;
            RebootDeadline?: string;
            RebootDeadlinePromptMessage?: string;
            RebootDeadlinePromptDuration?: string;
            SendWakeOnLanPacket?: boolean;
            RebootIfNoUserLoggedIn?: boolean;
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.RebootPolicy.PostPatchInstallTriggerSettings": {
            LimitToMicrosoftUpdatePolicyWindow?: boolean;
            WindowExtension?: string;
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.RebootPolicy.RebootPolicyPromptSettings": {
            UsePrompt?: boolean;
            RequiresConfirmation?: boolean;
            RebootIfNoUserLoggedOn?: boolean;
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.RebootPolicy.RebootPolicyMaintenanceModeOptions": {
            SetWindow?: boolean;
            WindowIgnoreTypes?: string[];
            WindowDuration?: string;
        };
        "Automate.Api.Domain.Contracts.AlertTemplates.AlertTemplate": {
            /** Format: int32 */
            TemplateId?: number;
            TemplateName?: string;
        };
        "Automate.Api.Domain.Contracts.Analytics.RecordedAction": {
            Type?: components["schemas"]["Automate.Api.Domain.Contracts.Analytics.RecordedActionType"];
            /** Format: int32 */
            ObjectId?: number;
            SecondaryIdentifier?: string;
            Description?: string;
            Source?: components["schemas"]["Automate.Api.Domain.Contracts.Analytics.RecordedActionSource"];
        };
        "Automate.Api.Domain.Contracts.Analytics.RecordedActionType": {
            /** Format: int32 */
            RecordedActionTypeId?: number;
        };
        "Automate.Api.Domain.Contracts.Analytics.RecordedActionSource": {
            /** Format: int32 */
            RecordedActionSourceId?: number;
        };
        "Automate.Api.Domain.Contracts.InstallerRequest": {
            /** Format: int32 */
            LocationId?: number;
            /** Format: int32 */
            InstallerType?: number;
        };
        "LabTech.Models.RetiredAsset": {
            Id?: string;
            Client?: components["schemas"]["LabTech.Models.Client"];
            Location?: components["schemas"]["LabTech.Models.Location"];
            ComputerName?: string;
            OperatingSystemName?: string;
            OperatingSystemVersion?: string;
            Comment?: string;
            LocalIPAddress?: string;
            GatewayIPAddress?: string;
            AssetTag?: string;
            /** Format: date-time */
            AssetDate?: string;
            /** Format: date-time */
            RetiredDate?: string;
            RetireComment?: string;
            ComputerId?: string;
        };
        "Automate.Api.Domain.Contracts.Scripts.RunningScripts.RunningScript": {
            /** Format: int32 */
            ScriptInstanceId?: number;
            Target?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.RunningScripts.RunningScriptTarget"];
            Script?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
            Source?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptSource"];
            State?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptState"];
            /** Format: date-time */
            StartDate?: string;
        };
        "Automate.Api.Domain.Contracts.Scripts.RunningScripts.RunningScriptTarget": {
            TargetType?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.RunningScripts.RunningScriptTargetType"];
            Computer?: components["schemas"]["Automate.Api.Domain.Contracts.Computers.Computer"];
            Client?: components["schemas"]["Automate.Api.Domain.Contracts.Clients.Client"];
        };
        "Automate.Api.Domain.Contracts.Scripts.Script": {
            /** Format: int32 */
            ScriptId?: number;
            TicketEntrySettings?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Settings.TicketEntrySettings"];
            TimeEntrySettings?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Settings.TimeEntrySettings"];
            UserClassAccessSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Settings.UserClassAccess"][];
            IsProtected?: boolean;
            UsesEnhancedLogging?: boolean;
            Steps?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptStep"][];
            GlobalVariables?: {
                [key: string]: string;
            };
            Parameters?: string[];
            Name?: string;
            Description?: string;
            Folder?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptFolder"];
            ScriptTargetType?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptTarget"];
            ScriptOptions?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptOptions"];
            /** Format: int32 */
            AutomationMinutes?: number;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScriptSource": {
            SourceType?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.SourceType"];
            Name?: string;
            AlternativeName?: string;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScriptState": {
            /** Format: int32 */
            StateId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Scripts.RunningScripts.RunningScriptTargetType": {
            /** Format: int32 */
            TargetTypeId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Computers.Computer": {
            /** Format: int32 */
            ComputerId?: number;
            Name?: string;
            FriendlyName?: string;
            IsOnline?: boolean;
            Location?: components["schemas"]["Automate.Api.Domain.Contracts.Clients.Location"];
            Client?: components["schemas"]["Automate.Api.Domain.Contracts.Clients.Client"];
        };
        "Automate.Api.Domain.Contracts.Scripts.Settings.TicketEntrySettings": {
            TicketSubject?: string;
            TicketRequestor?: string;
            TicketCategory?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Settings.TicketEntryCategory"];
            CloseTicketTrigger?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Settings.CloseTicketTrigger"];
        };
        "Automate.Api.Domain.Contracts.Scripts.Settings.TimeEntrySettings": {
            TicketId?: string;
            MinutesToLog?: string;
            TimeCategory?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Settings.TimeEntryCategory"];
            StopTimerTrigger?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Settings.StopTimerTrigger"];
            Notes?: string;
            Technician?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Settings.TimeEntryTechnician"];
        };
        "Automate.Api.Domain.Contracts.Scripts.Settings.UserClassAccess": {
            /** Format: int32 */
            UserClassId?: number;
            Name?: string;
            CanExecute?: boolean;
            CanEdit?: boolean;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScriptStep": {
            /** Format: int32 */
            OperatingSystem?: number;
            IsEnabled?: boolean;
            ShouldContinueOnFailure?: boolean;
            /** Format: int32 */
            IndentationLevel?: number;
            Function?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Functions.ScriptFunctionBase"];
        };
        "Automate.Api.Domain.Contracts.Scripts.ScriptFolder": {
            /** Format: int32 */
            ScriptFolderId?: number;
            Name?: string;
            ChildFolders?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptFolder"][];
        };
        "Automate.Api.Domain.Contracts.Scripts.ScriptTarget": {
            /** Format: int32 */
            ScriptTargetTypeId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScriptOptions": {
            IsIsolatedScript?: boolean;
            IsMaintenanceScript?: boolean;
            IsFunctionScript?: boolean;
            IsOfflineScript?: boolean;
            IsSystemScript?: boolean;
        };
        "Automate.Api.Domain.Contracts.Scripts.SourceType": {
            /** Format: int32 */
            SourceTypeId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Scripts.Settings.TicketEntryCategory": {
            /** Format: int32 */
            TicketCategoryId?: number;
            Name?: string;
            IsOverridden?: boolean;
            CustomValue?: string;
        };
        "Automate.Api.Domain.Contracts.Scripts.Settings.CloseTicketTrigger": {
            /** Format: int32 */
            CloseTicketTriggerTypeId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Scripts.Settings.TimeEntryCategory": {
            /** Format: int32 */
            TimeCategoryId?: number;
            Name?: string;
            IsOverridden?: boolean;
            CustomValue?: string;
        };
        "Automate.Api.Domain.Contracts.Scripts.Settings.StopTimerTrigger": {
            /** Format: int32 */
            StopTimerTriggerTypeId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Scripts.Settings.TimeEntryTechnician": {
            /** Format: int32 */
            UserId?: number;
            Name?: string;
            IsOverridden?: boolean;
            CustomValue?: string;
        };
        "Automate.Api.Domain.Contracts.Scripts.Functions.ScriptFunctionBase": {
            /** Format: int32 */
            ScriptFunctionId?: number;
        };
        "LabTech.Models.ScheduledScript": {
            /** Format: int32 */
            Id?: number;
            /** Format: int32 */
            ScriptId?: number;
            /** Format: int32 */
            ClientId?: number;
            /** Format: int32 */
            LocationId?: number;
            /** Format: int32 */
            ComputerId?: number;
            /** Format: int32 */
            GroupId?: number;
            IncludeSubgroups?: boolean;
            /** Format: int32 */
            SearchId?: number;
            Disabled?: boolean;
            /** Format: date-time */
            EffectiveStartDate?: string;
            /** Format: date-time */
            EffectiveEndDate?: string;
            /** Format: int32 */
            EffectiveOccurrences?: number;
            /** Format: int32 */
            DistributionWindowType?: number;
            /** Format: int32 */
            DistributionWindowAmount?: number;
            /** Format: date-time */
            NextRun?: string;
            /** Format: date-time */
            NextSchedule?: string;
            /** Format: int32 */
            ScheduleType?: number;
            ExcludeTimeStart?: string;
            ExcludeTimeEnd?: string;
            /** Format: int32 */
            Interval?: number;
            /** Format: int32 */
            ScheduleWeekOfMonth?: number;
            /** Format: int32 */
            ScheduleDayOfWeek?: number;
            /** Format: int32 */
            RepeatType?: number;
            /** Format: int32 */
            RepeatAmount?: number;
            /** Format: int32 */
            RepeatStopAfter?: number;
            SkipOffline?: boolean;
            OfflineOnly?: boolean;
            WakeOffline?: boolean;
            WakeScript?: boolean;
            DisableTimeZone?: boolean;
            RunScriptOnProbe?: boolean;
            Parameters?: string;
            /** Format: int32 */
            Priority?: number;
            /** Format: double */
            TimeZoneAdd?: number;
            User?: string;
            /** Format: date-time */
            LastUpdate?: string;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScheduledScript": {
            /** Format: int32 */
            ScheduledScriptId?: number;
            Script?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
            ScheduleTarget?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScriptTarget"];
            Schedule?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptScheduleSettings"];
            LimitingSearch?: components["schemas"]["Automate.Api.Domain.Contracts.Searches.Search"];
            OfflineActionFlags?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScriptOfflineActionFlags"];
            DistributionWindow?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.DistributionWindow"];
            Parameters?: components["schemas"]["System.Collections.Generic.KeyValuePair_System.String_System.String_"][];
            UseAgentTime?: boolean;
            ScheduledBy?: string;
            /** Format: int32 */
            Occurrences?: number;
            /** Format: int32 */
            EffectiveOccurrences?: number;
            /** Format: date-time */
            StartDate?: string;
            /** Format: date-time */
            ExpireDate?: string;
            /** Format: date-time */
            NextRunDate?: string;
            IsDisabled?: boolean;
            /** Format: int32 */
            Priority?: number;
            IncludeSubGroups?: boolean;
            IsInherited?: boolean;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScheduledScriptTarget": {
            ScheduleTargetType?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.ScheduleTargetType"];
            Group?: components["schemas"]["Automate.Api.Domain.Contracts.Groups.Group"];
            Client?: components["schemas"]["Automate.Api.Domain.Contracts.Clients.Client"];
            Location?: components["schemas"]["Automate.Api.Domain.Contracts.Clients.Location"];
            Computer?: components["schemas"]["Automate.Api.Domain.Contracts.Computers.Computer"];
            NetworkDevice?: components["schemas"]["Automate.Api.Domain.Contracts.NetworkDevices.NetworkDevice"];
            Contact?: components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"];
        };
        "Automate.Api.Domain.Contracts.Scripts.ScheduledScripts.ScheduleTargetType": {
            /** Format: int32 */
            ScheduleTargetTypeId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Groups.Group": {
            /** Format: int32 */
            GroupId?: number;
            Name?: string;
            FullName?: string;
            Description?: string;
            GroupType?: components["schemas"]["Automate.Api.Domain.Contracts.Groups.GroupType"];
            TemplateSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Groups.TemplateSettings"];
            AutoJoinSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Groups.AutoJoinSettings"];
            LinkingSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Groups.LinkingSettings"];
            MasterStatus?: components["schemas"]["Automate.Api.Domain.Contracts.Groups.MasterStatus"];
            MaintenanceWindowSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Groups.MaintenanceWindowSettings"];
        };
        "Automate.Api.Domain.Contracts.NetworkDevices.NetworkDevice": {
            /** Format: int32 */
            NetworkDeviceId?: number;
            Name?: string;
            FriendlyName?: string;
        };
        "Automate.Api.Domain.Contracts.Clients.Contact": {
            /** Format: int32 */
            ContactId?: number;
            FirstName?: string;
            LastName?: string;
            EmailAddress?: string;
            PhoneNumber?: string;
            MobileNumber?: string;
            PagerNumber?: string;
            FaxNumber?: string;
            Address1?: string;
            Address2?: string;
            City?: string;
            State?: string;
            ZipCode?: string;
            Client?: components["schemas"]["Automate.Api.Domain.Contracts.Clients.Client"];
            Location?: components["schemas"]["Automate.Api.Domain.Contracts.Clients.Location"];
            Password?: string;
            Permissions?: string[];
            IsManaged?: boolean;
            IsActivated?: boolean;
            /** Format: date-time */
            DateCreated?: string;
            /** Format: date-time */
            LastUpdateDate?: string;
            PluginData?: {
                [key: string]: {
                    [key: string]: Record<string, never>;
                };
            };
            Source?: components["schemas"]["Automate.Api.Domain.Contracts.Clients.ContactSource"];
        };
        "Automate.Api.Domain.Contracts.Groups.GroupType": {
            /** Format: int32 */
            GroupTypeId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Groups.TemplateSettings": {
            RemoteAgentTemplate?: components["schemas"]["Automate.Api.Domain.Contracts.Groups.RemoteAgentTemplate"];
            /** Format: int32 */
            Priority?: number;
        };
        "Automate.Api.Domain.Contracts.Groups.AutoJoinSettings": {
            ComputerSearchSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Groups.SearchSettings"];
            NetworkDeviceSearchSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Groups.SearchSettings"];
            ContactSearchSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Groups.ContactSearchSettings"];
        };
        "Automate.Api.Domain.Contracts.Groups.LinkingSettings": {
            /** Format: int32 */
            GroupLinkTypeId?: number;
            GroupLinkTypeName?: string;
            /** Format: int32 */
            LinkedEntityId?: number;
            LinkedEntityName?: string;
            IsSynchronized?: boolean;
        };
        "Automate.Api.Domain.Contracts.Groups.MasterStatus": {
            /** Format: int32 */
            MasterStatusTypeId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Groups.MaintenanceWindowSettings": {
            /** Format: int32 */
            MaintenanceWindowId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Clients.ContactSource": {
            /** Format: int32 */
            ContactSourceTypeId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Groups.RemoteAgentTemplate": {
            /** Format: int32 */
            RemoteAgentTemplateId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Groups.SearchSettings": {
            /** Format: int32 */
            AutoJoinSearchId?: number;
            Name?: string;
            IsLimitedToSearch?: boolean;
        };
        "Automate.Api.Domain.Contracts.Groups.ContactSearchSettings": {
            ShouldIncludeAssociatedComputers?: boolean;
            /** Format: int32 */
            AutoJoinSearchId?: number;
            Name?: string;
            IsLimitedToSearch?: boolean;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScriptFunction": {
            /** Format: int32 */
            FunctionId?: number;
            Name?: string;
            IsConditionalFunction?: boolean;
            Description?: string;
            TargetType?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptFunctionTarget"];
            Parameters?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptFunctionParameter"][];
        };
        "Automate.Api.Domain.Contracts.Scripts.ScriptFunctionTarget": {
            /** Format: int32 */
            TargetTypeId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScriptFunctionParameter": {
            Name?: string;
            Description?: string;
            Type?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.DataLists.GroupItem": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.DataLists.TicketPriorityItem": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.DataLists.RoleDefinitionItem": {
            Id?: string;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.DataLists.ReportItem": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.DataLists.ServerFileItem": {
            Id?: string;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.DataLists.TemplatePropertyItem": {
            Id?: string;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.DataLists.UserItem": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.DataLists.HotfixDataItem": {
            Id?: string;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.DataLists.StartupDefinitionItem": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.DataLists.SmartAttributeItem": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.DataLists.LicenseTypeItem": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.DataLists.ExtraFieldDefinitionItem": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Scripts.ScriptReferences": {
            /** Format: int32 */
            ScheduleCount?: number;
            InternalMonitors?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Monitor"][];
            RemoteMonitors?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Monitor"][];
            AlertTemplates?: components["schemas"]["Automate.Api.Domain.Contracts.Alerts.AlertTemplate"][];
        };
        "Automate.Api.Domain.Contracts.Monitors.Monitor": {
            /** Format: int32 */
            MonitorId?: number;
            Name?: string;
            Groups?: components["schemas"]["Automate.Api.Domain.Contracts.Groups.Group"][];
            TargetComputer?: components["schemas"]["Automate.Api.Domain.Contracts.Computers.Computer"];
        };
        "Automate.Api.Domain.Models.Searches.AdvancedSearchLookUp": {
            LookUpNodes?: components["schemas"]["Automate.Api.Domain.Models.Searches.SearchLookUpBase"][];
            CollectionNodes?: string[];
        };
        "Automate.Api.Domain.Models.Searches.SearchLookUpBase": {
            SearchNode?: string;
            IsLeafNode?: boolean;
            ChildNodes?: components["schemas"]["Automate.Api.Domain.Models.Searches.SearchLookUpBase"][];
            Attributes?: components["schemas"]["Automate.Api.Domain.Models.Searches.SearchAttributes"];
        };
        "Automate.Api.Domain.Models.Searches.SearchAttributes": {
            Key?: string;
            Text?: string;
            Description?: string;
            /** @enum {string} */
            DataType?: "TypeBoolean" | "TypeNumber" | "TypeText" | "TypeVersion" | "TypeDate" | "TypeAssigned" | "TypeEquality" | "TypeRole";
            /** @enum {string} */
            DataLookUpType?: "None" | "Static" | "Dynamic";
            DataLookup?: components["schemas"]["Automate.Api.Domain.Models.Searches.SearchValueLookUp"][];
            CollectionNode?: string;
        };
        "Automate.Api.Domain.Models.Searches.SearchValueLookUp": {
            Id?: string;
            Name?: string;
        };
        "Automate.Api.Domain.Models.Searches.AdvancedSearchDynamicLookup": {
            SearchKey?: string;
            AdvancedSearchDataLookups?: components["schemas"]["Automate.Api.Domain.Models.Searches.AdvancedSearchDataLookup"][];
        };
        "Automate.Api.Domain.Models.Searches.AdvancedSearchDataLookup": {
            Id?: string;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Searches.AdvancedSearchFilter": {
            /** @enum {string} */
            NodeType?: "AndNode" | "OrNode" | "ComparisonNode" | "AnyMeetsNode" | "NotNode";
            NodeName?: string;
            FilterCriterias?: components["schemas"]["Automate.Api.Domain.Contracts.Searches.FilterCriteria"][];
            ChildNodes?: components["schemas"]["Automate.Api.Domain.Contracts.Searches.AdvancedSearchFilter"][];
        };
        "Automate.Api.Domain.Contracts.Searches.FilterCriteria": {
            LeftOperand?: string;
            /** @enum {string} */
            Operator?: "IsTrue" | "IsFalse" | "Equals" | "GreaterThan" | "GreaterThanEqual" | "LessThan" | "LessThanEqual" | "TextLike" | "NotEqual" | "NotTextLike" | "Contains" | "NotContains" | "IsAssigned" | "IsNotAssigned" | "HasRole" | "NotHasRole";
            RightOperand?: Record<string, never>;
        };
        "Automate.Api.Domain.Models.Searches.AdvancedSearchDetails": {
            Search?: components["schemas"]["Automate.Api.Domain.Contracts.Searches.Search"];
            AdvancedSearchFilter?: components["schemas"]["Automate.Api.Domain.Contracts.Searches.AdvancedSearchFilter"];
        };
        "LabTech.Models.SensorCheck": {
            Id?: string;
            Name?: string;
            /** @enum {string} */
            SensorCheckType?: "SystemAverages" | "SystemCounts" | "Trends" | "PerDayCounts";
        };
        "Automate.Api.Domain.Contracts.System.ServerInformation": {
            /** Format: int32 */
            ServerId?: number;
            OperatingSystem?: string;
            MacAddress?: string;
            MachineName?: string;
            CPUName?: string;
            /** Format: int32 */
            CPUSockets?: number;
            /** Format: int32 */
            CPUCores?: number;
            /** Format: int32 */
            LogicalProcessors?: number;
            /** Format: int64 */
            MemoryTotal?: number;
            IsDatabaseServer?: boolean;
            IsWebServer?: boolean;
        };
        "Automate.Api.Domain.Contracts.Security.ImplicitClientUpgradeRequest": {
            ImplicitToken?: string;
        };
        "Automate.Api.Domain.Contracts.SingleSignOn.RegisterSsoRequest": {
            RegistrationToken?: string;
            EnabledUserFolders?: number[];
        };
        "Automate.Api.Domain.Contracts.SingleSignOn.UnregisterSsoRequest": {
            ClientId?: string;
        };
        "LabTech.Repositories.MySQL.Domain.Models.DriveStatistics": {
            /** Format: int32 */
            DriveId?: number;
            /** Format: double */
            PercentageUsedDifference?: number;
        };
        "Automate.Api.Domain.Contracts.Statistics.AgentStatistics": {
            /** Format: int32 */
            TotalAgentsPurchased?: number;
            /** Format: int32 */
            TotalAgentsDeployed?: number;
        };
        "Automate.Api.Domain.Contracts.Statistics.ScriptAutomationTimeCategoryResponse": {
            Total?: components["schemas"]["Automate.Api.Domain.Contracts.Statistics.ScriptAutomationTimeResult"];
            System?: components["schemas"]["Automate.Api.Domain.Contracts.Statistics.ScriptAutomationTimeResult"];
            Users?: components["schemas"]["Automate.Api.Domain.Contracts.Statistics.ScriptAutomationTimeResult"];
            /** Format: int32 */
            MaximumHistoryDaysAvailable?: number;
        };
        "Automate.Api.Domain.Contracts.Statistics.ScriptAutomationTimeResult": {
            /** Format: int32 */
            SuccessfulScripts?: number;
            /** Format: int32 */
            AutomationTimeMinutes?: number;
            /** Format: int32 */
            AutomationValue?: number;
        };
        "Automate.Api.Domain.Contracts.Statistics.ScriptAutomationTimeUserResponse": {
            UserList?: components["schemas"]["Automate.Api.Domain.Contracts.Statistics.ScriptAutomationTimeUserResult"][];
            /** Format: int32 */
            MaximumHistoryDaysAvailable?: number;
        };
        "Automate.Api.Domain.Contracts.Statistics.ScriptAutomationTimeUserResult": {
            Name?: string;
            /** Format: int32 */
            SuccessfulScripts?: number;
            /** Format: int32 */
            AutomationTimeMinutes?: number;
            /** Format: int32 */
            AutomationValue?: number;
        };
        "Automate.Api.Domain.Contracts.Statistics.GetComputerStatisticsRequest": {
            /** Format: int32 */
            NumberOfDays?: number;
            EntityIds?: number[];
            EntityType?: string;
        };
        "Automate.Api.Domain.Contracts.Statistics.GetScriptStatisticsResponse": {
            /** Format: int64 */
            ScriptHistoryCount?: number;
            /** Format: int64 */
            ScriptPendingCount?: number;
            /** Format: int64 */
            ScriptRunningCount?: number;
            /** Format: int64 */
            ScriptFailureCount?: number;
            /** Format: int64 */
            ScriptSuccessCount?: number;
        };
        "Automate.Api.Domain.Contracts.Statistics.GetCommandStatisticsResponse": {
            /** Format: int64 */
            CommandPendingCount?: number;
            /** Format: int64 */
            CommandFailureCount?: number;
        };
        "Automate.Api.Domain.Contracts.Statistics.IndividualScriptStatisticsResponse": {
            /** Format: int32 */
            SuccessCount?: number;
            /** Format: int32 */
            TotalRunCount?: number;
            LastRunTarget?: string;
            /** Format: date-time */
            LastRunDate?: string;
            /** Format: int32 */
            TotalValue?: number;
            /** Format: date-time */
            LastHistoryDateAvailable?: string;
            LastRunStatus?: string;
        };
        "Automate.Api.Domain.Contracts.Workflows.SystemWorkflowProgressEntry": {
            /** Format: int32 */
            SystemWorkflowProgressId?: number;
            Description?: string;
            WorkflowStep?: components["schemas"]["Automate.Api.Domain.Contracts.Workflows.WorkflowStep"];
            WorkflowStatus?: components["schemas"]["Automate.Api.Domain.Contracts.Workflows.WorkflowStatus"];
            WorkflowMetadata?: components["schemas"]["Automate.Api.Domain.Contracts.Workflows.WorkflowMetadata"][];
        };
        "Automate.Api.Domain.Contracts.Workflows.WorkflowStep": {
            /** Format: int32 */
            WorkflowStepId?: number;
            Description?: string;
            IsRequired?: boolean;
            /** Format: int32 */
            PrerequisiteId?: number;
        };
        "Automate.Api.Domain.Contracts.Workflows.WorkflowStatus": {
            /** Format: int32 */
            WorkflowStatusId?: number;
            Description?: string;
        };
        "Automate.Api.Domain.Contracts.Workflows.WorkflowMetadata": {
            /** Format: int32 */
            SystemWorkflowProgressMetadataId?: number;
            MetadataKey?: string;
            MetadataValue?: string;
        };
        "LabTech.Models.TemplateAvailableProperty": {
            PropertyId?: string;
            PropertyName?: string;
            PropertyDescription?: string;
            PropertyGuid?: string;
        };
        "Automate.Api.Domain.Contracts.Patching.ThirdPartyPatchesSummaryData": {
            /** Format: double */
            ThirdPartyComplianceScore?: number;
            /** Format: double */
            ThirdPartyServerComplianceScore?: number;
            /** Format: double */
            ThirdPartyWorkstationComplianceScore?: number;
            /** Format: int32 */
            DevicesAffectingComplianceCount?: number;
            /** Format: int32 */
            ServersAffectingComplianceCount?: number;
            /** Format: int32 */
            WorkstationsAffectingComplianceCount?: number;
            /** Format: int32 */
            ApprovedCount?: number;
            /** Format: int32 */
            CompliantCount?: number;
            /** Format: int32 */
            FailedCount?: number;
            /** Format: int32 */
            IncorrectVersionCount?: number;
            /** Format: int32 */
            NonCompliantCount?: number;
            /** Format: int32 */
            NotAttemptedCount?: number;
        };
        "Automate.Api.Domain.Contracts.Patching.ThirdPartyPatchVersion": {
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            LTProductKey?: string;
            Versions?: string[];
        };
        "Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.ThirdPartyUpdatePolicy": {
            /** Format: int32 */
            PolicyId?: number;
            PolicyName?: string;
            PatchingPolicySchedule?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.Schedule.PatchingPolicySchedule"];
            WorkstationOptions?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.PatchingPolicyWorkstationOptions"];
            ScriptOptions?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.PatchingPolicyScriptOptions"];
        };
        "Automate.Api.Domain.Contracts.Users.UserAccess": {
            /** Format: int32 */
            UserId?: number;
            UserPermissions?: string[];
            PluginPermissions?: components["schemas"]["Automate.Api.Domain.Contracts.SystemExtensions.Binary.UserBinaryExtensionPermission"][];
            WebExtensionClaims?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.UserExtensionClaimType"][];
        };
        "Automate.Api.Domain.Contracts.SystemExtensions.Binary.UserBinaryExtensionPermission": {
            HasPermission?: boolean;
            /** Format: int32 */
            ExtensionPermissionId?: number;
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            ExtensionGuid?: string;
            ExtensionName?: string;
            /** Format: int32 */
            PermissionId?: number;
            PermissionName?: string;
        };
        "Automate.Api.Domain.Contracts.WebExtensions.UserExtensionClaimType": {
            HasClaim?: boolean;
            /** Format: int32 */
            ExtensionClaimTypeId?: number;
            /** Format: int32 */
            WebExtensionId?: number;
            DisplayName?: string;
            ClaimKey?: string;
            Description?: string;
        };
        "Automate.Api.Domain.ExternalContracts.ConnectWiseSso.SsoUser": {
            PartnerId?: string;
            Id?: string;
            UserName?: string;
            Email?: string;
            FirstName?: string;
            LastName?: string;
            LoginScheme?: string;
            EmailConfirmed?: boolean;
            IsDisabled?: boolean;
            /** Format: int64 */
            Created?: number;
            /** Format: int64 */
            Updated?: number;
        };
        "Automate.Api.Domain.Contracts.SingleSignOn.LinkToSsoRequest": {
            ServiceIdentifier?: string;
        };
        "Automate.Api.Domain.Contracts.Users.ChangePasswordRequest": {
            OldPassword?: string;
            NewPassword?: string;
        };
        "Automate.Api.Domain.Contracts.Users.UserPasswordResetRequest": {
            Username?: string;
            PasswordResetToken?: string;
            NewPassword?: string;
        };
        "LabTech.Models.UserAudit": {
            /** Format: int32 */
            Id?: number;
            User?: components["schemas"]["LabTech.Models.User"];
            Message?: string;
            /** Format: date-time */
            DateCreated?: string;
            /** Format: int32 */
            ExternalId?: number;
            AuditAction?: components["schemas"]["LabTech.Models.AuditAction"];
            Source?: components["schemas"]["LabTech.Models.AuditSource"];
            SecondaryIdentifier?: string;
        };
        "LabTech.Models.AuditAction": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
            /** Format: int32 */
            Level?: number;
            ExtensionName?: string;
        };
        "LabTech.Models.AuditSource": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
        "LabTech.RESTApi.Security.APIAuthLinkInformation": {
            Nonce?: string;
        };
        "Automate.Api.Domain.Contracts.Users.UserAvatar": {
            /** Format: byte */
            FileData?: string;
        };
        "Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionViewModel": {
            /** Format: int32 */
            WebExtensionId?: number;
            WebExtensionName?: string;
            ExtensionClaims?: components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.ExtensionClaimViewModel"][];
        };
        "Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.ExtensionClaimViewModel": {
            /** Format: int32 */
            ExtensionClaimTypeId?: number;
            DisplayName?: string;
            Description?: string;
            IsAssigned?: boolean;
            IsDefaultClaim?: boolean;
        };
        "Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionRequest": {
            AssignedExtensions?: components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.AssignedWebExtension"][];
        };
        "Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.AssignedWebExtension": {
            /** Format: int32 */
            WebExtensionId?: number;
            AssignedClaims?: number[];
        };
        "LabTech.Models.UserFavorite": {
            /** Format: int32 */
            Id?: number;
            /** Format: int32 */
            UserId?: number;
            AdditionalIdentifier?: string;
            /** Format: int32 */
            Order?: number;
            ItemGUID?: string;
        };
        "Automate.Api.Domain.Contracts.Users.UserFolder": {
            /** Format: int32 */
            UserFolderId?: number;
            Name?: string;
            IsSsoEnabled?: boolean;
        };
        "LabTech.Repositories.MySQL.Domain.Models.PresentationLayer.UserProfile": {
            IsSuperAdmin?: boolean;
            IsFolderLimited?: boolean;
            UserClassIdList?: number[];
        };
        "Automate.Api.Domain.Contracts.Users.User": {
            /** Format: int32 */
            UserId?: number;
            Name?: string;
            FirstName?: string;
            LastName?: string;
            /** Format: date-time */
            LastSuccessfulLogin?: string;
            Password?: string;
            Folder?: components["schemas"]["Automate.Api.Domain.Contracts.Users.UserFolder"];
            EmailAddress?: string;
            /** Format: int32 */
            AuditingLevel?: number;
            /** Format: int32 */
            CommandLevel?: number;
            UsesTicketBasedSecurity?: boolean;
            /** Format: int32 */
            NewTicketDisplayLimit?: number;
            /** Format: int32 */
            OpenTicketLimit?: number;
            IsIntegrator?: boolean;
            IsLocked?: boolean;
            IsTicketRouter?: boolean;
            IsTicketSupervisor?: boolean;
            TicketLevel?: components["schemas"]["Automate.Api.Domain.Contracts.Ticketing.TicketLevel"];
            RequiresLoginReport?: boolean;
            RequiresLogoutReport?: boolean;
            /** Format: date-time */
            LastUpdated?: string;
            PrimaryClients?: components["schemas"]["Automate.Api.Domain.Contracts.Clients.Client"][];
            UserClasses?: components["schemas"]["Automate.Api.Domain.Contracts.Users.UserClass"][];
            AssociatedGroups?: components["schemas"]["Automate.Api.Domain.Contracts.Groups.Group"][];
            SsoStatus?: components["schemas"]["Automate.Api.Domain.Contracts.Users.UserSingleSignOnStatus"];
            SsoEmail?: string;
            AllowLegacyApiAccess?: boolean;
        };
        "Automate.Api.Domain.Contracts.Ticketing.TicketLevel": {
            /** Format: int32 */
            TicketLevelId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.Contracts.Users.UserSingleSignOnStatus": {
            /** Format: int32 */
            SsoStatusId?: number;
            StatusName?: string;
        };
        "LabTech.Models.UserSetting": {
            /** Format: int32 */
            UserId?: number;
            Name?: string;
            Value?: string;
        };
        "Automate.Api.Domain.Contracts.Users.UserLockoutInfo": {
            UserName?: string;
            /** Format: int32 */
            UserId?: number;
            LastIPAddress?: string;
            IsLocked?: boolean;
            /** Format: int32 */
            FailedLoginCount?: number;
            /** Format: date-time */
            LastFailDateUtc?: string;
            /** Format: date-time */
            LockOutExpirationDateUtc?: string;
        };
        "Automate.Api.Domain.Contracts.Groups.Permissions.GroupPermissionSettings": {
            IsInherited?: boolean;
            ComputerPermissionSettings?: {
                [key: string]: string[];
            };
        };
        "Automate.Api.Domain.Contracts.Groups.InternalMonitors.GroupInternalMonitorInfo": {
            /** Format: int32 */
            MonitorId?: number;
            MonitorName?: string;
            IsMonitorGloballyApplied?: boolean;
            IsSubscriptionInherited?: boolean;
            IsGroupSubscribed?: boolean;
            MonitorInterval?: string;
            /** Format: date-time */
            MonitorNextScanDate?: string;
            EffectiveAlertPolicy?: components["schemas"]["Automate.Api.Domain.Contracts.Groups.InternalMonitors.MonitorAlertPolicy"];
        };
        "Automate.Api.Domain.Contracts.Groups.InternalMonitors.MonitorAlertPolicy": {
            /** Format: int32 */
            EffectivePolicyTypeId?: number;
            EffectivePolicyTypeName?: string;
            IsAlertTemplateOverridden?: boolean;
            /** Format: int32 */
            AlertTemplateId?: number;
            AlertTemplateName?: string;
            AlertTemplateDescription?: string;
            IsTicketCategoryOverridden?: boolean;
            /** Format: int32 */
            TicketCategoryId?: number;
            TicketCategoryName?: string;
            InheritanceSourceName?: string;
        };
        "Automate.Api.Domain.Contracts.Groups.InternalMonitors.UpdateGroupMonitorSubscriptionRequest": {
            IsSubscribed?: boolean;
            Overrides?: components["schemas"]["Automate.Api.Domain.Contracts.Groups.InternalMonitors.AlertingOverride"];
        };
        "Automate.Api.Domain.Contracts.Groups.InternalMonitors.AlertingOverride": {
            AlertTemplate?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.InternalMonitor.AlertTemplate"];
            TicketCategory?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Groups.InternalMonitor.TicketCategory"];
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.RemoteMonitorTemplate": {
            LimitingSearch?: components["schemas"]["Automate.Api.Domain.Contracts.Searches.Search"];
            /** Format: int32 */
            GroupId?: number;
            TargetType?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.TargetType"];
            /** Format: int32 */
            InstallCount?: number;
            SubType?: string;
            Details?: string;
            LastEditedBy?: string;
            /** Format: date-time */
            LastEditedTime?: string;
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            RemoteMonitorGuid?: string;
            /** Format: int32 */
            RemoteMonitorId?: number;
            Name?: string;
            AlertingSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.AlertingSettings"];
            Configuration?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Configuration"];
        };
        "Automate.Api.Domain.Contracts.Groups.PatchingPolicies": {
            MicrosoftUpdatePolicy?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.MicrosoftUpdatePolicy"];
            RebootPolicy?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.RebootPolicy"];
            ThirdPartyUpdatePolicy?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.ThirdPartyUpdatePolicy"];
            ApprovalPolicies?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.ApprovalPolicy"][];
        };
        "Automate.Api.Domain.Contracts.Groups.GroupRemoteMonitorTemplate": {
            GroupFullName?: string;
            LimitingSearch?: components["schemas"]["Automate.Api.Domain.Contracts.Searches.Search"];
            /** Format: int32 */
            GroupId?: number;
            TargetType?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.TargetType"];
            /** Format: int32 */
            InstallCount?: number;
            SubType?: string;
            Details?: string;
            LastEditedBy?: string;
            /** Format: date-time */
            LastEditedTime?: string;
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            RemoteMonitorGuid?: string;
            /** Format: int32 */
            RemoteMonitorId?: number;
            Name?: string;
            AlertingSettings?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.AlertingSettings"];
            Configuration?: components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.Configuration"];
        };
        "Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder": {
            /** Format: int32 */
            ScriptFolderId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.ScriptSettings.ScriptSettingsViewModel": {
            UserClasses?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.ScriptSettings.UserClass"][];
            TicketCategories?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.ScriptSettings.TicketEntryCategory"][];
            CloseTicketTriggers?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.ScriptSettings.CloseTicketTrigger"][];
            Users?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.ScriptSettings.TimeEntryTechnician"][];
            StopTimerTriggers?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.ScriptSettings.StopTimerTrigger"][];
            TicketTimeCategories?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.ScriptSettings.TimeEntryCategory"][];
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.ScriptSettings.UserClass": {
            /** Format: int32 */
            UserClassId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.ScriptSettings.TicketEntryCategory": {
            /** Format: int32 */
            TicketCategoryId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.ScriptSettings.CloseTicketTrigger": {
            /** Format: int32 */
            CloseTicketTriggerTypeId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.ScriptSettings.TimeEntryTechnician": {
            /** Format: int32 */
            UserId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.ScriptSettings.StopTimerTrigger": {
            /** Format: int32 */
            StopTimerTriggerTypeId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.ScriptSettings.TimeEntryCategory": {
            /** Format: int32 */
            TimeCategoryId?: number;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.ScriptSteps.ScriptStepsViewModel": {
            DisallowedScriptFunctionIds?: number[];
        };
        "Automate.Api.Domain.Contracts.Scripts.ScriptSummary": {
            Name?: string;
            Description?: string;
            Folder?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptFolder"];
            ScriptTargetType?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptTarget"];
            ScriptOptions?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptOptions"];
            /** Format: int32 */
            AutomationMinutes?: number;
        };
        "Automate.Api.Domain.Contracts.Scripts.Specialized.CreateScriptFromCommandsRequest": {
            /** Format: int32 */
            ScriptFolderId?: number;
            Commands?: components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Specialized.RemoteCommand"][];
        };
        "Automate.Api.Domain.Contracts.Scripts.Specialized.RemoteCommand": {
            /** Format: int32 */
            RemoteCommandId?: number;
            Parameters?: string;
        };
        "Automate.Api.Domain.Contracts.WebExtensions.WebExtensionAreaControls": {
            WebExtensionArea?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.WebExtensionArea"];
            ClickButtons?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.WebExtensionClickButton"][];
            MenuButtons?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.WebExtensionMenuButton"][];
            Tiles?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.WebExtensionTile"][];
            Redirects?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.WebExtensionRedirect"][];
            InlineFrames?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.WebExtensionInlineFrame"][];
        };
        "Automate.Api.Domain.Contracts.WebExtensions.WebExtensionArea": {
            /** Format: int32 */
            WebExtensionAreaId?: number;
            WebExtensionAreaName?: string;
            /** Format: int32 */
            WebExtensionScreenId?: number;
        };
        "Automate.Api.Domain.Contracts.WebExtensions.WebExtensionClickButton": {
            IconUrl?: string;
            ButtonText?: string;
            ClickAction?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.WebExtensionClickAction"];
            AllowsMultiSelect?: boolean;
            /** Format: int32 */
            WebExtensionControlId?: number;
            WebExtensionControlName?: string;
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            WebExtensionGuid?: string;
            ExtensionClaimType?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.ExtensionClaimType"];
            IsCoreExtension?: boolean;
            WebExtensionAreaControlTypeIds?: number[];
        };
        "Automate.Api.Domain.Contracts.WebExtensions.WebExtensionMenuButton": {
            IconUrl?: string;
            ButtonText?: string;
            MenuItems?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.WebExtensionMenuItem"][];
            AllowsMultiSelect?: boolean;
            /** Format: int32 */
            WebExtensionControlId?: number;
            WebExtensionControlName?: string;
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            WebExtensionGuid?: string;
            ExtensionClaimType?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.ExtensionClaimType"];
            IsCoreExtension?: boolean;
            WebExtensionAreaControlTypeIds?: number[];
        };
        "Automate.Api.Domain.Contracts.WebExtensions.WebExtensionTile": {
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            TileGuid?: string;
            NormalTileSourceUrl?: string;
            NormalTileHeaderUrl?: string;
            MaxTileSourceUrl?: string;
            TileTitle?: string;
            TileSize?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.WebExtensionTileSize"];
            /** Format: int32 */
            WebExtensionControlId?: number;
            WebExtensionControlName?: string;
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            WebExtensionGuid?: string;
            ExtensionClaimType?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.ExtensionClaimType"];
            IsCoreExtension?: boolean;
            WebExtensionAreaControlTypeIds?: number[];
        };
        "Automate.Api.Domain.Contracts.WebExtensions.WebExtensionRedirect": {
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            RedirectGuid?: string;
            SourceUrl?: string;
            /** Format: int32 */
            WebExtensionControlId?: number;
            WebExtensionControlName?: string;
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            WebExtensionGuid?: string;
            ExtensionClaimType?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.ExtensionClaimType"];
            IsCoreExtension?: boolean;
            WebExtensionAreaControlTypeIds?: number[];
        };
        "Automate.Api.Domain.Contracts.WebExtensions.WebExtensionInlineFrame": {
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            InlineFrameGuid?: string;
            SourceUrl?: string;
            /** Format: int32 */
            WebExtensionControlId?: number;
            WebExtensionControlName?: string;
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            WebExtensionGuid?: string;
            ExtensionClaimType?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.ExtensionClaimType"];
            IsCoreExtension?: boolean;
            WebExtensionAreaControlTypeIds?: number[];
        };
        "Automate.Api.Domain.Contracts.WebExtensions.WebExtensionClickAction": {
            /** Format: int32 */
            ClickActionId?: number;
            Url?: string;
            UrlOpenType?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.WebExtensionUrlOpenType"];
        };
        "Automate.Api.Domain.Contracts.WebExtensions.ExtensionClaimType": {
            /** Format: int32 */
            ExtensionClaimTypeId?: number;
            /** Format: int32 */
            WebExtensionId?: number;
            DisplayName?: string;
            ClaimKey?: string;
            Description?: string;
        };
        "Automate.Api.Domain.Contracts.WebExtensions.WebExtensionMenuItem": {
            /** Format: int32 */
            WebExtensionMenuItemId?: number;
            /** Format: int32 */
            WebExtensionMenuItemParentId?: number;
            MenuText?: string;
            ClickAction?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.WebExtensionClickAction"];
            MenuItems?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.WebExtensionMenuItem"][];
        };
        "Automate.Api.Domain.Contracts.WebExtensions.WebExtensionTileSize": {
            /** Format: int32 */
            TileSizeId?: number;
            Description?: string;
        };
        "Automate.Api.Domain.Contracts.WebExtensions.WebExtensionUrlOpenType": {
            /** Format: int32 */
            UrlOpenTypeId?: number;
            Description?: string;
        };
        "Automate.Api.Domain.Contracts.WebExtensions.WebExtension": {
            /** Format: int32 */
            WebExtensionId?: number;
            ExtensionSolution?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.ExtensionSolution"];
            ExtensionStatus?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.ExtensionStatus"];
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            WebExtensionGuid?: string;
            WebExtensionName?: string;
            Author?: string;
            Description?: string;
            Version?: string;
            FileUrl?: string;
            Filename?: string;
            FileCheckSum?: string;
            HasStaticFiles?: boolean;
            HasGraphFiles?: boolean;
            IsCoreExtension?: boolean;
            ExtensionClaimTypes?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.ExtensionClaimType"][];
            Redirects?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.WebExtensionRedirect"][];
            Tiles?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.WebExtensionTile"][];
            InlineFrames?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.WebExtensionInlineFrame"][];
            MenuButtons?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.WebExtensionMenuButton"][];
            ClickButtons?: components["schemas"]["Automate.Api.Domain.Contracts.WebExtensions.WebExtensionClickButton"][];
        };
        "Automate.Api.Domain.Contracts.WebExtensions.ExtensionSolution": {
            /** Format: int32 */
            ExtensionSolutionId?: number;
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            SolutionGuid?: string;
            SolutionName?: string;
            IsInstalled?: boolean;
            InstalledVersion?: string;
            LatestVersion?: string;
        };
        "Automate.Api.Domain.Contracts.WebExtensions.ExtensionStatus": {
            /** Format: int32 */
            ExtensionStatusId?: number;
            Description?: string;
        };
        "Automate.Api.Domain.Contracts.Patching.WindowsServiceBranchStats": {
            ServerReleaseCounts?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.WindowsReleaseStats"][];
            /** Format: int32 */
            ServerNoChannelCount?: number;
            /** Format: int32 */
            ServerSemiAnnualChannelCount?: number;
            /** Format: int32 */
            ServerSemiAnnualChannelTargetedCount?: number;
            WorkstationReleaseCounts?: components["schemas"]["Automate.Api.Domain.Contracts.Patching.WindowsReleaseStats"][];
            /** Format: int32 */
            WorkstationNoChannelCount?: number;
            /** Format: int32 */
            WorkstationSemiAnnualChannelCount?: number;
            /** Format: int32 */
            WorkstationSemiAnnualChannelTargetedCount?: number;
        };
        "Automate.Api.Domain.Contracts.Patching.WindowsReleaseStats": {
            /** Format: int32 */
            ReleaseId?: number;
            /** Format: int32 */
            ReleaseCount?: number;
        };
        "System.Collections.Generic.KeyValuePair_System.String_System.String_": {
            readonly Key?: string;
            readonly Value?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Menus.Menu_Automate.Api.Domain.PresentationLayer.ViewModels.Menus.ComputerCommands.CommandMenuItemBase_": {
            MenuKey?: string;
            SubMenus?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Menus.SubMenu_Automate.Api.Domain.PresentationLayer.ViewModels.Menus.ComputerCommands.CommandMenuItemBase_"][];
            MenuItems?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Menus.ComputerCommands.CommandMenuItemBase"][];
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Menus.SubMenu_Automate.Api.Domain.PresentationLayer.ViewModels.Menus.ComputerCommands.CommandMenuItemBase_": {
            DisplayName?: string;
            /** Format: int32 */
            DisplayOrder?: number;
            MenuKey?: string;
            SubMenus?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Menus.SubMenu_Automate.Api.Domain.PresentationLayer.ViewModels.Menus.ComputerCommands.CommandMenuItemBase_"][];
            MenuItems?: components["schemas"]["Automate.Api.Domain.PresentationLayer.ViewModels.Menus.ComputerCommands.CommandMenuItemBase"][];
        };
        "LabTech.Database.ResultSetWithCount_Automate.Api.Domain.Contracts.ProbeCommandHistoryEntry_": {
            ResultSet?: components["schemas"]["Automate.Api.Domain.Contracts.ProbeCommandHistoryEntry"][];
            /** Format: int32 */
            TotalRecordCount?: number;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.ScriptDataListItem_System.String_": {
            Id?: string;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.ScriptDataListItem_System.Guid_": {
            /**
             * Format: uuid
             * @example 00000000-0000-0000-0000-000000000000
             */
            Id?: string;
            Name?: string;
        };
        "Automate.Api.Domain.PresentationLayer.ViewModels.Scripts.ScriptDataListItem_System.Int32_": {
            /** Format: int32 */
            Id?: number;
            Name?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: {
        "LabTech.Models.RemoteAgentTemplate": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.RemoteAgentTemplate"];
                "text/json": components["schemas"]["LabTech.Models.RemoteAgentTemplate"];
                "application/xml": components["schemas"]["LabTech.Models.RemoteAgentTemplate"];
                "text/xml": components["schemas"]["LabTech.Models.RemoteAgentTemplate"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.RemoteAgentTemplate"];
            };
        };
        "Automate.Api.Domain.Contracts.Groups.Group": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Groups.Group"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Groups.Group"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Groups.Group"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Groups.Group"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Groups.Group"];
            };
        };
        ApiToken_RefreshBearerTokenAsyncTokentext: {
            content: {
                "application/json": string;
                "text/json": string;
                "application/xml": string;
                "text/xml": string;
                "application/x-www-form-urlencoded": string;
            };
        };
        "Automate.Api.Domain.Contracts.Patching.LocalOverridePolicy": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Patching.LocalOverridePolicy"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Patching.LocalOverridePolicy"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Patching.LocalOverridePolicy"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Patching.LocalOverridePolicy"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Patching.LocalOverridePolicy"];
            };
        };
        "LabTech.Models.Script": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.Script"];
                "text/json": components["schemas"]["LabTech.Models.Script"];
                "application/xml": components["schemas"]["LabTech.Models.Script"];
                "text/xml": components["schemas"]["LabTech.Models.Script"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.Script"];
            };
        };
        "LabTech.Models.AVTemplatePolicyData": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.AVTemplatePolicyData"];
                "text/json": components["schemas"]["LabTech.Models.AVTemplatePolicyData"];
                "application/xml": components["schemas"]["LabTech.Models.AVTemplatePolicyData"];
                "text/xml": components["schemas"]["LabTech.Models.AVTemplatePolicyData"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.AVTemplatePolicyData"];
            };
        };
        "LabTech.Models.GroupComputer": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.GroupComputer"];
                "text/json": components["schemas"]["LabTech.Models.GroupComputer"];
                "application/xml": components["schemas"]["LabTech.Models.GroupComputer"];
                "text/xml": components["schemas"]["LabTech.Models.GroupComputer"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.GroupComputer"];
            };
        };
        "Automate.Api.Domain.Contracts.Patching.RpcContracts.ExecutePatchActionRequest": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Patching.RpcContracts.ExecutePatchActionRequest"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Patching.RpcContracts.ExecutePatchActionRequest"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Patching.RpcContracts.ExecutePatchActionRequest"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Patching.RpcContracts.ExecutePatchActionRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Patching.RpcContracts.ExecutePatchActionRequest"];
            };
        };
        "LabTech.Models.TemplateAvailableProperty": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.TemplateAvailableProperty"];
                "text/json": components["schemas"]["LabTech.Models.TemplateAvailableProperty"];
                "application/xml": components["schemas"]["LabTech.Models.TemplateAvailableProperty"];
                "text/xml": components["schemas"]["LabTech.Models.TemplateAvailableProperty"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.TemplateAvailableProperty"];
            };
        };
        "Automate.Api.Domain.Contracts.DeviceCommands.ExecuteDeviceCommandsRequest": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.DeviceCommands.ExecuteDeviceCommandsRequest"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.DeviceCommands.ExecuteDeviceCommandsRequest"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.DeviceCommands.ExecuteDeviceCommandsRequest"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.DeviceCommands.ExecuteDeviceCommandsRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.DeviceCommands.ExecuteDeviceCommandsRequest"];
            };
        };
        "Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
            };
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.RemoteMonitorTemplate": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.RemoteMonitorTemplate"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.RemoteMonitorTemplate"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.RemoteMonitorTemplate"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.RemoteMonitorTemplate"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.RemoteMonitorTemplate"];
            };
        };
        "Automate.Api.Domain.Contracts.BatchUsers.UserClassMembership.UserClassMembershipRequest": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchUsers.UserClassMembership.UserClassMembershipRequest"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchUsers.UserClassMembership.UserClassMembershipRequest"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchUsers.UserClassMembership.UserClassMembershipRequest"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchUsers.UserClassMembership.UserClassMembershipRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.BatchUsers.UserClassMembership.UserClassMembershipRequest"];
            };
        };
        "LabTech.RESTApi.Models.PatchOperationArray": {
            content: {
                "application/json": components["schemas"]["LabTech.RESTApi.Models.PatchOperation"][];
                "text/json": components["schemas"]["LabTech.RESTApi.Models.PatchOperation"][];
                "application/xml": components["schemas"]["LabTech.RESTApi.Models.PatchOperation"][];
                "text/xml": components["schemas"]["LabTech.RESTApi.Models.PatchOperation"][];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.RESTApi.Models.PatchOperation"][];
            };
        };
        "LabTech.Models.Client": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.Client"];
                "text/json": components["schemas"]["LabTech.Models.Client"];
                "application/xml": components["schemas"]["LabTech.Models.Client"];
                "text/xml": components["schemas"]["LabTech.Models.Client"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.Client"];
            };
        };
        "Automate.Api.Domain.Contracts.Security.PkceRequest": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Security.PkceRequest"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Security.PkceRequest"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Security.PkceRequest"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Security.PkceRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Security.PkceRequest"];
            };
        };
        "LabTech.Models.GroupNetworkDevice": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                "text/json": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                "application/xml": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                "text/xml": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
            };
        };
        "LabTech.Models.RemoteAgentSchedule": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.RemoteAgentSchedule"];
                "text/json": components["schemas"]["LabTech.Models.RemoteAgentSchedule"];
                "application/xml": components["schemas"]["LabTech.Models.RemoteAgentSchedule"];
                "text/xml": components["schemas"]["LabTech.Models.RemoteAgentSchedule"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.RemoteAgentSchedule"];
            };
        };
        "Automate.Api.Domain.Contracts.BatchUsers.UsersGroupMembership.UsersGroupMembershipBatchRequest": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchUsers.UsersGroupMembership.UsersGroupMembershipBatchRequest"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchUsers.UsersGroupMembership.UsersGroupMembershipBatchRequest"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchUsers.UsersGroupMembership.UsersGroupMembershipBatchRequest"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchUsers.UsersGroupMembership.UsersGroupMembershipBatchRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.BatchUsers.UsersGroupMembership.UsersGroupMembershipBatchRequest"];
            };
        };
        "Automate.Api.Domain.Contracts.AiSideKickSetting.AiSideKickSettingBatchRequest": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.AiSideKickSetting.AiSideKickSettingBatchRequest"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.AiSideKickSetting.AiSideKickSettingBatchRequest"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.AiSideKickSetting.AiSideKickSettingBatchRequest"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.AiSideKickSetting.AiSideKickSettingBatchRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.AiSideKickSetting.AiSideKickSettingBatchRequest"];
            };
        };
        "Automate.Api.Domain.Contracts.ExtraFields.ExtraFieldSectionResetRequest": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraFieldSectionResetRequest"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraFieldSectionResetRequest"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraFieldSectionResetRequest"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraFieldSectionResetRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraFieldSectionResetRequest"];
            };
        };
        "LabTech.RESTApi.Security.AuthServiceCredentials": {
            content: {
                "application/json": components["schemas"]["LabTech.RESTApi.Security.AuthServiceCredentials"];
                "text/json": components["schemas"]["LabTech.RESTApi.Security.AuthServiceCredentials"];
                "application/xml": components["schemas"]["LabTech.RESTApi.Security.AuthServiceCredentials"];
                "text/xml": components["schemas"]["LabTech.RESTApi.Security.AuthServiceCredentials"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.RESTApi.Security.AuthServiceCredentials"];
            };
        };
        "Automate.Api.Domain.Contracts.Patching.ApprovalPolicy": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Patching.ApprovalPolicy"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Patching.ApprovalPolicy"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Patching.ApprovalPolicy"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Patching.ApprovalPolicy"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Patching.ApprovalPolicy"];
            };
        };
        "LabTech.Models.AVTemplatePolicy": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.AVTemplatePolicy"];
                "text/json": components["schemas"]["LabTech.Models.AVTemplatePolicy"];
                "application/xml": components["schemas"]["LabTech.Models.AVTemplatePolicy"];
                "text/xml": components["schemas"]["LabTech.Models.AVTemplatePolicy"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.AVTemplatePolicy"];
            };
        };
        "Automate.Api.Domain.Contracts.BatchBinaryExtension.BinaryExtensionBatchRequest": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchBinaryExtension.BinaryExtensionBatchRequest"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchBinaryExtension.BinaryExtensionBatchRequest"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchBinaryExtension.BinaryExtensionBatchRequest"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchBinaryExtension.BinaryExtensionBatchRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.BatchBinaryExtension.BinaryExtensionBatchRequest"];
            };
        };
        "Automate.Api.Domain.Contracts.BatchMaintenanceModes.MaintenanceModes.MaintenanceModeQueueBatchRequest": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchMaintenanceModes.MaintenanceModes.MaintenanceModeQueueBatchRequest"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchMaintenanceModes.MaintenanceModes.MaintenanceModeQueueBatchRequest"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchMaintenanceModes.MaintenanceModes.MaintenanceModeQueueBatchRequest"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchMaintenanceModes.MaintenanceModes.MaintenanceModeQueueBatchRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.BatchMaintenanceModes.MaintenanceModes.MaintenanceModeQueueBatchRequest"];
            };
        };
        "Automate.Api.Domain.Contracts.BatchCommands.Computer.ExecuteComputersBatchRequest": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchCommands.Computer.ExecuteComputersBatchRequest"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchCommands.Computer.ExecuteComputersBatchRequest"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchCommands.Computer.ExecuteComputersBatchRequest"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchCommands.Computer.ExecuteComputersBatchRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.BatchCommands.Computer.ExecuteComputersBatchRequest"];
            };
        };
        "Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchRequest": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchRequest"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchRequest"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchRequest"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchRequest"];
            };
        };
        "Automate.Api.Domain.Contracts.BatchWebExtension.WebExtensionBatchRequest": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchWebExtension.WebExtensionBatchRequest"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchWebExtension.WebExtensionBatchRequest"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchWebExtension.WebExtensionBatchRequest"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchWebExtension.WebExtensionBatchRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.BatchWebExtension.WebExtensionBatchRequest"];
            };
        };
        ClientPermissions_PutUserClassPermissionsPermissions: {
            content: {
                "application/json": string[];
                "text/json": string[];
                "application/xml": string[];
                "text/xml": string[];
                "application/x-www-form-urlencoded": string[];
            };
        };
        "LabTech.Models.ComputerMenu": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.ComputerMenu"];
                "text/json": components["schemas"]["LabTech.Models.ComputerMenu"];
                "application/xml": components["schemas"]["LabTech.Models.ComputerMenu"];
                "text/xml": components["schemas"]["LabTech.Models.ComputerMenu"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.ComputerMenu"];
            };
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.ComputerRemoteMonitor": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.ComputerRemoteMonitor"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.ComputerRemoteMonitor"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.ComputerRemoteMonitor"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.ComputerRemoteMonitor"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.ComputerRemoteMonitor"];
            };
        };
        "LabTech.RESTApi.RpcContracts.SoftwareClassificationInfo": {
            content: {
                "application/json": components["schemas"]["LabTech.RESTApi.RpcContracts.SoftwareClassificationInfo"];
                "text/json": components["schemas"]["LabTech.RESTApi.RpcContracts.SoftwareClassificationInfo"];
                "application/xml": components["schemas"]["LabTech.RESTApi.RpcContracts.SoftwareClassificationInfo"];
                "text/xml": components["schemas"]["LabTech.RESTApi.RpcContracts.SoftwareClassificationInfo"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.RESTApi.RpcContracts.SoftwareClassificationInfo"];
            };
        };
        "Automate.Api.Domain.Contracts.Clients.DeploymentLogin": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Clients.DeploymentLogin"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Clients.DeploymentLogin"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Clients.DeploymentLogin"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Clients.DeploymentLogin"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Clients.DeploymentLogin"];
            };
        };
        "LabTech.Models.GroupContact": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.GroupContact"];
                "text/json": components["schemas"]["LabTech.Models.GroupContact"];
                "application/xml": components["schemas"]["LabTech.Models.GroupContact"];
                "text/xml": components["schemas"]["LabTech.Models.GroupContact"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.GroupContact"];
            };
        };
        "LabTech.Models.Group": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.Group"];
                "text/json": components["schemas"]["LabTech.Models.Group"];
                "application/xml": components["schemas"]["LabTech.Models.Group"];
                "text/xml": components["schemas"]["LabTech.Models.Group"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.Group"];
            };
        };
        "LabTech.Models.Location": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.Location"];
                "text/json": components["schemas"]["LabTech.Models.Location"];
                "application/xml": components["schemas"]["LabTech.Models.Location"];
                "text/xml": components["schemas"]["LabTech.Models.Location"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.Location"];
            };
        };
        "LabTech.Models.ManagedLicense": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.ManagedLicense"];
                "text/json": components["schemas"]["LabTech.Models.ManagedLicense"];
                "application/xml": components["schemas"]["LabTech.Models.ManagedLicense"];
                "text/xml": components["schemas"]["LabTech.Models.ManagedLicense"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.ManagedLicense"];
            };
        };
        "Automate.Api.Domain.Contracts.Monitors.Remote.NetworkDevicesRemoteMonitor": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.NetworkDevicesRemoteMonitor"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.NetworkDevicesRemoteMonitor"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.NetworkDevicesRemoteMonitor"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.NetworkDevicesRemoteMonitor"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Monitors.Remote.NetworkDevicesRemoteMonitor"];
            };
        };
        "LabTech.Models.PatchActionArgs": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.PatchActionArgs"];
                "text/json": components["schemas"]["LabTech.Models.PatchActionArgs"];
                "application/xml": components["schemas"]["LabTech.Models.PatchActionArgs"];
                "text/xml": components["schemas"]["LabTech.Models.PatchActionArgs"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.PatchActionArgs"];
            };
        };
        "LabTech.Models.ProductKey": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.ProductKey"];
                "text/json": components["schemas"]["LabTech.Models.ProductKey"];
                "application/xml": components["schemas"]["LabTech.Models.ProductKey"];
                "text/xml": components["schemas"]["LabTech.Models.ProductKey"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.ProductKey"];
            };
        };
        "LabTech.Models.ScriptFolder": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.ScriptFolder"];
                "text/json": components["schemas"]["LabTech.Models.ScriptFolder"];
                "application/xml": components["schemas"]["LabTech.Models.ScriptFolder"];
                "text/xml": components["schemas"]["LabTech.Models.ScriptFolder"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.ScriptFolder"];
            };
        };
        "Automate.Api.Domain.Contracts.Searches.AdvancedSearchFilter": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Searches.AdvancedSearchFilter"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Searches.AdvancedSearchFilter"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Searches.AdvancedSearchFilter"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Searches.AdvancedSearchFilter"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Searches.AdvancedSearchFilter"];
            };
        };
        "LabTech.Models.SearchFolder": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.SearchFolder"];
                "text/json": components["schemas"]["LabTech.Models.SearchFolder"];
                "application/xml": components["schemas"]["LabTech.Models.SearchFolder"];
                "text/xml": components["schemas"]["LabTech.Models.SearchFolder"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.SearchFolder"];
            };
        };
        "Automate.Api.Domain.Contracts.Statistics.GetComputerStatisticsRequest": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Statistics.GetComputerStatisticsRequest"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Statistics.GetComputerStatisticsRequest"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Statistics.GetComputerStatisticsRequest"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Statistics.GetComputerStatisticsRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Statistics.GetComputerStatisticsRequest"];
            };
        };
        "LabTech.Models.TemplateProperty": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.TemplateProperty"];
                "text/json": components["schemas"]["LabTech.Models.TemplateProperty"];
                "application/xml": components["schemas"]["LabTech.Models.TemplateProperty"];
                "text/xml": components["schemas"]["LabTech.Models.TemplateProperty"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.TemplateProperty"];
            };
        };
        "Automate.Api.Domain.Contracts.Users.UserPasswordResetRequest": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserPasswordResetRequest"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserPasswordResetRequest"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserPasswordResetRequest"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserPasswordResetRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserPasswordResetRequest"];
            };
        };
        "Automate.Api.Domain.Contracts.Clients.Contact": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"];
            };
        };
        "Automate.Api.Domain.Contracts.Searches.Search": {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Searches.Search"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Searches.Search"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Searches.Search"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Searches.Search"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Searches.Search"];
            };
        };
        "LabTech.Models.VirusScannerDef": {
            content: {
                "application/json": components["schemas"]["LabTech.Models.VirusScannerDef"];
                "text/json": components["schemas"]["LabTech.Models.VirusScannerDef"];
                "application/xml": components["schemas"]["LabTech.Models.VirusScannerDef"];
                "text/xml": components["schemas"]["LabTech.Models.VirusScannerDef"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.VirusScannerDef"];
            };
        };
    };
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    Tickets_GetTicketList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Ticket"][];
                    "text/json": components["schemas"]["LabTech.Models.Ticket"][];
                    "application/xml": components["schemas"]["LabTech.Models.Ticket"][];
                    "text/xml": components["schemas"]["LabTech.Models.Ticket"][];
                };
            };
        };
    };
    Tickets_GetTicket: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                ticketId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Ticket"];
                    "text/json": components["schemas"]["LabTech.Models.Ticket"];
                    "application/xml": components["schemas"]["LabTech.Models.Ticket"];
                    "text/xml": components["schemas"]["LabTech.Models.Ticket"];
                };
            };
        };
    };
    ApiToken_Get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Security.AuthInformation"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Security.AuthInformation"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Security.AuthInformation"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Security.AuthInformation"];
                };
            };
        };
    };
    ApiToken_Post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Security.TokenCredentials"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Security.TokenCredentials"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Security.TokenCredentials"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Security.TokenCredentials"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Security.TokenCredentials"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Security.TokenResult"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Security.TokenResult"];
                };
            };
        };
    };
    ApiToken_RefreshBearerTokenAsync: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["ApiToken_RefreshBearerTokenAsyncTokentext"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Security.TokenResult"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Security.TokenResult"];
                };
            };
        };
    };
    ServerInformation_GetServerInformationListAsync: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.System.ServerInformation"][];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.System.ServerInformation"][];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.System.ServerInformation"][];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.System.ServerInformation"][];
                };
            };
        };
    };
    DatabaseServerTime_GetDatabaseServerDateTimeWithUtcOffset: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                    "text/json": string;
                    "application/xml": string;
                    "text/xml": string;
                };
            };
        };
    };
    ExternalSystemCredentials_GetClientSystemCredentialsList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                clientId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ExternalSystemCredentials"][];
                    "text/json": components["schemas"]["LabTech.Models.ExternalSystemCredentials"][];
                    "application/xml": components["schemas"]["LabTech.Models.ExternalSystemCredentials"][];
                    "text/xml": components["schemas"]["LabTech.Models.ExternalSystemCredentials"][];
                };
            };
        };
    };
    FeatureFlags_GetFeatureFlagList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                    "text/json": Record<string, never>;
                    "application/xml": Record<string, never>;
                    "text/xml": Record<string, never>;
                };
            };
        };
    };
    FeatureFlags_PostFeatureFlag: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LabTech.Models.FeatureFlag"];
                "text/json": components["schemas"]["LabTech.Models.FeatureFlag"];
                "application/xml": components["schemas"]["LabTech.Models.FeatureFlag"];
                "text/xml": components["schemas"]["LabTech.Models.FeatureFlag"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.FeatureFlag"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.FeatureFlag"];
                    "text/json": components["schemas"]["LabTech.Models.FeatureFlag"];
                    "application/xml": components["schemas"]["LabTech.Models.FeatureFlag"];
                    "text/xml": components["schemas"]["LabTech.Models.FeatureFlag"];
                };
            };
        };
    };
    LicensedProducts_GetLicensedProducts: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.LicensedProduct"][];
                    "text/json": components["schemas"]["LabTech.Models.LicensedProduct"][];
                    "application/xml": components["schemas"]["LabTech.Models.LicensedProduct"][];
                    "text/xml": components["schemas"]["LabTech.Models.LicensedProduct"][];
                };
            };
        };
    };
    Links_GetLinkList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Link"][];
                    "text/json": components["schemas"]["LabTech.Models.Link"][];
                    "application/xml": components["schemas"]["LabTech.Models.Link"][];
                    "text/xml": components["schemas"]["LabTech.Models.Link"][];
                };
            };
        };
    };
    PatchInformation_GetPatchInformation: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.PatchInformation"];
                    "text/json": components["schemas"]["LabTech.Models.PatchInformation"];
                    "application/xml": components["schemas"]["LabTech.Models.PatchInformation"];
                    "text/xml": components["schemas"]["LabTech.Models.PatchInformation"];
                };
            };
        };
    };
    Permissions_GetClientPermissionList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                clientId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                    "text/json": string[];
                    "application/xml": string[];
                    "text/xml": string[];
                };
            };
        };
    };
    Permissions_GetUserPermissionList: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                    "text/json": string[];
                    "application/xml": string[];
                    "text/xml": string[];
                };
            };
        };
    };
    Plugins_GetPluginList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                    "text/json": Record<string, never>;
                    "application/xml": Record<string, never>;
                    "text/xml": Record<string, never>;
                };
            };
        };
    };
    RebootPolicies_GetRebootPolicyListAsync: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                    "text/json": Record<string, never>;
                    "application/xml": Record<string, never>;
                    "text/xml": Record<string, never>;
                };
            };
        };
    };
    UserAudits_GetUserAuditList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.UserAudit"][];
                    "text/json": components["schemas"]["LabTech.Models.UserAudit"][];
                    "application/xml": components["schemas"]["LabTech.Models.UserAudit"][];
                    "text/xml": components["schemas"]["LabTech.Models.UserAudit"][];
                };
            };
        };
    };
    UserAudits_PostUserAudit: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LabTech.Models.UserAudit"];
                "text/json": components["schemas"]["LabTech.Models.UserAudit"];
                "application/xml": components["schemas"]["LabTech.Models.UserAudit"];
                "text/xml": components["schemas"]["LabTech.Models.UserAudit"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.UserAudit"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.UserAudit"];
                    "text/json": components["schemas"]["LabTech.Models.UserAudit"];
                    "application/xml": components["schemas"]["LabTech.Models.UserAudit"];
                    "text/xml": components["schemas"]["LabTech.Models.UserAudit"];
                };
            };
        };
    };
    UserClasses_GetUserClassList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserClass"][];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserClass"][];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserClass"][];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserClass"][];
                };
            };
        };
    };
    UserClasses_GetUserClass: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                userClassId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserClass"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserClass"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserClass"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserClass"];
                };
            };
        };
    };
    UserClasses_GetUserClassWebExtensionList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userClassId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionViewModel"][];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionViewModel"][];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionViewModel"][];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionViewModel"][];
                };
            };
        };
    };
    UserClasses_PutUserClassWebExtensionList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userClassId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionRequest"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionRequest"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionRequest"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionViewModel"][];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionViewModel"][];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionViewModel"][];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionViewModel"][];
                };
            };
        };
    };
    Users_GetUserList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                    "text/json": Record<string, never>;
                    "application/xml": Record<string, never>;
                    "text/xml": Record<string, never>;
                };
            };
        };
    };
    Users_AddUser: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.User"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.User"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.User"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.User"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Users.User"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.User"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.User"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.User"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.User"];
                };
            };
        };
    };
    Users_GetUser: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.User"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.User"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.User"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.User"];
                };
            };
        };
    };
    Users_DeleteUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Users_PatchUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.RESTApi.Models.PatchOperationArray"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.User"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.User"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.User"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.User"];
                };
            };
        };
    };
    UserAuthLink_PostAuthorizationInitialLink: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.RESTApi.Security.AuthServiceCredentials"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.RESTApi.Security.AuthServiceCredentials"];
                    "text/json": components["schemas"]["LabTech.RESTApi.Security.AuthServiceCredentials"];
                    "application/xml": components["schemas"]["LabTech.RESTApi.Security.AuthServiceCredentials"];
                    "text/xml": components["schemas"]["LabTech.RESTApi.Security.AuthServiceCredentials"];
                };
            };
        };
    };
    UserActions_ChangePassword: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.ChangePasswordRequest"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.ChangePasswordRequest"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.ChangePasswordRequest"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.ChangePasswordRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Users.ChangePasswordRequest"];
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserFavorites_GetUserFavoriteList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                    "text/json": Record<string, never>;
                    "application/xml": Record<string, never>;
                    "text/xml": Record<string, never>;
                };
            };
        };
    };
    UserFavorites_PostUserFavorite: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LabTech.Models.UserFavorite"];
                "text/json": components["schemas"]["LabTech.Models.UserFavorite"];
                "application/xml": components["schemas"]["LabTech.Models.UserFavorite"];
                "text/xml": components["schemas"]["LabTech.Models.UserFavorite"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.UserFavorite"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.UserFavorite"];
                    "text/json": components["schemas"]["LabTech.Models.UserFavorite"];
                    "application/xml": components["schemas"]["LabTech.Models.UserFavorite"];
                    "text/xml": components["schemas"]["LabTech.Models.UserFavorite"];
                };
            };
        };
    };
    UserAccess_GetUserPermissionsAsync: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserAccess"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserAccess"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserAccess"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserAccess"];
                };
            };
        };
    };
    UserSettings_GetUserSettingList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                    "text/json": Record<string, never>;
                    "application/xml": Record<string, never>;
                    "text/xml": Record<string, never>;
                };
            };
        };
    };
    UserSettings_PostUserSetting: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LabTech.Models.UserSetting"];
                "text/json": components["schemas"]["LabTech.Models.UserSetting"];
                "application/xml": components["schemas"]["LabTech.Models.UserSetting"];
                "text/xml": components["schemas"]["LabTech.Models.UserSetting"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.UserSetting"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.UserSetting"];
                    "text/json": components["schemas"]["LabTech.Models.UserSetting"];
                    "application/xml": components["schemas"]["LabTech.Models.UserSetting"];
                    "text/xml": components["schemas"]["LabTech.Models.UserSetting"];
                };
            };
        };
    };
    UserFolders_GetUserFolderList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                    "text/json": Record<string, never>;
                    "application/xml": Record<string, never>;
                    "text/xml": Record<string, never>;
                };
            };
        };
    };
    UserFolders_PostUserFolder: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserFolder"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserFolder"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserFolder"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserFolder"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserFolder"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserFolder"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserFolder"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserFolder"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserFolder"];
                };
            };
        };
    };
    UserFolders_GetUserFolder: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                userFolderId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserFolder"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserFolder"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserFolder"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserFolder"];
                };
            };
        };
    };
    UserFolders_DeleteUserFolder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userFolderId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserFolders_PatchUserFolder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userFolderId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.RESTApi.Models.PatchOperationArray"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserFolder"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserFolder"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserFolder"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Users.UserFolder"];
                };
            };
        };
    };
    DriveStats_GetDailyDriveStats: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                driveId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStats"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStats"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStats"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStats"][];
                };
            };
        };
    };
    DriveStats_GetWeeklyDriveStats: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                driveId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStats"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStats"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStats"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStats"][];
                };
            };
        };
    };
    DriveStats_GetYearlyDriveStats: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                driveId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStats"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStats"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStats"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStats"][];
                };
            };
        };
    };
    DriveStats_GetMonthlyDriveStats: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                driveId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStats"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStats"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStats"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStats"][];
                };
            };
        };
    };
    Statistics_GetDriveStatisticsList: {
        parameters: {
            query: {
                numberOfDays: number;
                driveId: number[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStatistics"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStatistics"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStatistics"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.DriveStatistics"][];
                };
            };
        };
    };
    Searches_GetSearchList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Search"][];
                    "text/json": components["schemas"]["LabTech.Models.Search"][];
                    "application/xml": components["schemas"]["LabTech.Models.Search"][];
                    "text/xml": components["schemas"]["LabTech.Models.Search"][];
                };
            };
        };
    };
    SearchFolders_GetSearchFolderList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.SearchFolder"][];
                    "text/json": components["schemas"]["LabTech.Models.SearchFolder"][];
                    "application/xml": components["schemas"]["LabTech.Models.SearchFolder"][];
                    "text/xml": components["schemas"]["LabTech.Models.SearchFolder"][];
                };
            };
        };
    };
    SearchFolders_PostSearchFolder: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.SearchFolder"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.SearchFolder"];
                    "text/json": components["schemas"]["LabTech.Models.SearchFolder"];
                    "application/xml": components["schemas"]["LabTech.Models.SearchFolder"];
                    "text/xml": components["schemas"]["LabTech.Models.SearchFolder"];
                };
            };
        };
    };
    ScriptFolders_GetScriptFolderList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ScriptFolder"][];
                    "text/json": components["schemas"]["LabTech.Models.ScriptFolder"][];
                    "application/xml": components["schemas"]["LabTech.Models.ScriptFolder"][];
                    "text/xml": components["schemas"]["LabTech.Models.ScriptFolder"][];
                };
            };
        };
    };
    ScriptFolders_PostScriptFolder: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.ScriptFolder"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ScriptFolder"];
                    "text/json": components["schemas"]["LabTech.Models.ScriptFolder"];
                    "application/xml": components["schemas"]["LabTech.Models.ScriptFolder"];
                    "text/xml": components["schemas"]["LabTech.Models.ScriptFolder"];
                };
            };
        };
    };
    ScriptFolders_GetScriptFolderHierarchy: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ScriptFolder"][];
                    "text/json": components["schemas"]["LabTech.Models.ScriptFolder"][];
                    "application/xml": components["schemas"]["LabTech.Models.ScriptFolder"][];
                    "text/xml": components["schemas"]["LabTech.Models.ScriptFolder"][];
                };
            };
        };
    };
    ScriptFolders_GetScriptFolder: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                entityId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ScriptFolder"];
                    "text/json": components["schemas"]["LabTech.Models.ScriptFolder"];
                    "application/xml": components["schemas"]["LabTech.Models.ScriptFolder"];
                    "text/xml": components["schemas"]["LabTech.Models.ScriptFolder"];
                };
            };
        };
    };
    ScriptFolders_DeleteScriptFolder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entityId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ScriptFolders_PatchScriptFolder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entityId: string;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.RESTApi.Models.PatchOperationArray"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ScriptFolder"];
                    "text/json": components["schemas"]["LabTech.Models.ScriptFolder"];
                    "application/xml": components["schemas"]["LabTech.Models.ScriptFolder"];
                    "text/xml": components["schemas"]["LabTech.Models.ScriptFolder"];
                };
            };
        };
    };
    RunningScript_GetRunningScripts: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.RunningScripts.RunningScript"][];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.RunningScripts.RunningScript"][];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.RunningScripts.RunningScript"][];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.RunningScripts.RunningScript"][];
                };
            };
        };
    };
    ScheduledScript_GetScheduledScripts: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScript"][];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScript"][];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScript"][];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScript"][];
                };
            };
        };
    };
    ScheduledScript_DeleteScriptSchedule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                scheduledId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ScheduledScript_PatchScriptSchedule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                scheduledId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.RESTApi.Models.PatchOperationArray"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScript"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScript"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScript"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScheduledScript"];
                };
            };
        };
    };
    Scripts_GetScriptList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Script"][];
                    "text/json": components["schemas"]["LabTech.Models.Script"][];
                    "application/xml": components["schemas"]["LabTech.Models.Script"][];
                    "text/xml": components["schemas"]["LabTech.Models.Script"][];
                };
            };
        };
    };
    Scripts_PostScript: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.Script"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Script"];
                    "text/json": components["schemas"]["LabTech.Models.Script"];
                    "application/xml": components["schemas"]["LabTech.Models.Script"];
                    "text/xml": components["schemas"]["LabTech.Models.Script"];
                };
            };
        };
    };
    ScriptActions_GetScriptCopyAsync: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                scriptId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": number;
                    "text/json": number;
                    "application/xml": number;
                    "text/xml": number;
                };
            };
        };
    };
    V2Scripts_GetScript: {
        parameters: {
            query?: {
                includeSteps?: boolean;
            };
            header?: never;
            path: {
                scriptId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
                };
            };
        };
    };
    V2Scripts_PutScript: {
        parameters: {
            query?: {
                includeSteps?: boolean;
            };
            header?: never;
            path: {
                scriptId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
                };
            };
        };
    };
    V2Scripts_DeleteScript: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                scriptId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    V2Scripts_PostScriptSummary: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptSummary"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptSummary"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptSummary"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptSummary"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.ScriptSummary"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.Script"];
                };
            };
        };
    };
    V2ScriptFolders_PostRootScriptFolder: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
                };
            };
        };
    };
    V2ScriptFolders_PutRootScriptFolder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                scriptFolderId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
                };
            };
        };
    };
    V2ScriptFolders_DeleteScriptFolder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                scriptFolderId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    V2ScriptFolders_PostChildScriptFolder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                parentFolderId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder"];
                };
            };
        };
    };
    RemoteAgentSchedules_GetRemoteAgentScheduleList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.RemoteAgentSchedule"][];
                    "text/json": components["schemas"]["LabTech.Models.RemoteAgentSchedule"][];
                    "application/xml": components["schemas"]["LabTech.Models.RemoteAgentSchedule"][];
                    "text/xml": components["schemas"]["LabTech.Models.RemoteAgentSchedule"][];
                };
            };
        };
    };
    RemoteAgentSchedules_PostRemoteAgentSchedule: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.RemoteAgentSchedule"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.RemoteAgentSchedule"];
                    "text/json": components["schemas"]["LabTech.Models.RemoteAgentSchedule"];
                    "application/xml": components["schemas"]["LabTech.Models.RemoteAgentSchedule"];
                    "text/xml": components["schemas"]["LabTech.Models.RemoteAgentSchedule"];
                };
            };
        };
    };
    RemoteAgentTemplates_GetRemoteAgentTemplateListAsync: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.RemoteAgentTemplate"][];
                    "text/json": components["schemas"]["LabTech.Models.RemoteAgentTemplate"][];
                    "application/xml": components["schemas"]["LabTech.Models.RemoteAgentTemplate"][];
                    "text/xml": components["schemas"]["LabTech.Models.RemoteAgentTemplate"][];
                };
            };
        };
    };
    RemoteAgentTemplates_PostRemoteAgentTemplateAsync: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.RemoteAgentTemplate"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.RemoteAgentTemplate"];
                    "text/json": components["schemas"]["LabTech.Models.RemoteAgentTemplate"];
                    "application/xml": components["schemas"]["LabTech.Models.RemoteAgentTemplate"];
                    "text/xml": components["schemas"]["LabTech.Models.RemoteAgentTemplate"];
                };
            };
        };
    };
    ProbeConfiguration_GetProbeConfiguration: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                locationId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration"];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration"];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration"];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration"];
                };
            };
        };
    };
    ProbeConfiguration_PostProbeConfiguration: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                locationId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LabTech.RESTApi.RpcContracts.NewProbeConfiguration"];
                "text/json": components["schemas"]["LabTech.RESTApi.RpcContracts.NewProbeConfiguration"];
                "application/xml": components["schemas"]["LabTech.RESTApi.RpcContracts.NewProbeConfiguration"];
                "text/xml": components["schemas"]["LabTech.RESTApi.RpcContracts.NewProbeConfiguration"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.RESTApi.RpcContracts.NewProbeConfiguration"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration"];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration"];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration"];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration"];
                };
            };
        };
    };
    ProbeConfiguration_DeleteProbeConfiguration: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                locationId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ProbeConfiguration_PatchProbeConfiguration: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                locationId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.RESTApi.Models.PatchOperationArray"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration"];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration"];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration"];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration"];
                };
            };
        };
    };
    ProbeConfiguration_UpgradeProbe: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                locationId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Lookups_GetProbeEventLevelList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.ProbeEventLevel"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.ProbeEventLevel"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.ProbeEventLevel"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.ProbeEventLevel"][];
                };
            };
        };
    };
    Lookups_GetScanFrequencyList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ScanFrequency"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ScanFrequency"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ScanFrequency"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ScanFrequency"][];
                };
            };
        };
    };
    Lookups_GetSnmpEncryptionMethodList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.EncryptionMethod"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.EncryptionMethod"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.EncryptionMethod"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.EncryptionMethod"][];
                };
            };
        };
    };
    Lookups_GetSnmpHashMethodList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.HashMethod"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.HashMethod"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.HashMethod"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.HashMethod"][];
                };
            };
        };
    };
    Lookups_GetStatusScanNetworkPortOptionList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.StatusScanNetworkPortOption"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.StatusScanNetworkPortOption"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.StatusScanNetworkPortOption"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.StatusScanNetworkPortOption"][];
                };
            };
        };
    };
    ProbeConfiguration_GetAgentPushCredentialsList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                probeConfigurationId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationCredentials"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationCredentials"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationCredentials"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationCredentials"][];
                };
            };
        };
    };
    ProbeConfiguration_PutAgentPushCredentialsList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                probeConfigurationId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationCredentials"][];
                "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationCredentials"][];
                "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationCredentials"][];
                "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationCredentials"][];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationCredentials"][];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationCredentials"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationCredentials"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationCredentials"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationCredentials"][];
                };
            };
        };
    };
    ProbeConfiguration_DeleteAgentPushCredentials: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                probeConfigurationId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ProbeConfiguration_GetProbeSnmpConfigurationAsync: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                probeConfigurationId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSnmpConfiguration"];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSnmpConfiguration"];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSnmpConfiguration"];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSnmpConfiguration"];
                };
            };
        };
    };
    ProbeConfiguration_PatchProbeSnmpConfigurationAsync: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                probeConfigurationId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.RESTApi.Models.PatchOperationArray"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSnmpConfiguration"];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSnmpConfiguration"];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSnmpConfiguration"];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSnmpConfiguration"];
                };
            };
        };
    };
    ProbeConfiguration_EnableProbe: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration"];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration"];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration"];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration"];
                };
            };
        };
    };
    ProbeEvents_GetProbeEventList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.ProbeEvent"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.ProbeEvent"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.ProbeEvent"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.ProbeEvent"][];
                };
            };
        };
    };
    UserProfiles_GetUserProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.PresentationLayer.UserProfile"];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.PresentationLayer.UserProfile"];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.PresentationLayer.UserProfile"];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.PresentationLayer.UserProfile"];
                };
            };
        };
    };
    ApprovalPolicy_GetApprovalPolicyListAsync: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Patching.ApprovalPolicy"][];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Patching.ApprovalPolicy"][];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Patching.ApprovalPolicy"][];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Patching.ApprovalPolicy"][];
                };
            };
        };
    };
    GroupPatchingPolicies_GetGroupPatchingPolicyListAsync: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Patching.GroupPatchingPolicy"][];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Patching.GroupPatchingPolicy"][];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Patching.GroupPatchingPolicy"][];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Patching.GroupPatchingPolicy"][];
                };
            };
        };
    };
    MicrosoftUpdatePolicies_GetMicrosoftUpdatePolicyListAsync: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.MicrosoftUpdatePolicy"][];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.MicrosoftUpdatePolicy"][];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.MicrosoftUpdatePolicy"][];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.MicrosoftUpdatePolicy"][];
                };
            };
        };
    };
    PatchActions_DeployAllApproved: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.PatchActionArgs"];
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PatchActions_DeployAllSecurity: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.PatchActionArgs"];
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PatchActions_ReattemptFailed: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.PatchActionArgs"];
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PatchActions_SetToPilotStage: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.PatchActionArgs"];
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PatchActions_SetToProductionStage: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.PatchActionArgs"];
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PatchActions_SetToTestStage: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.PatchActionArgs"];
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PatchHistory_GetPatchHistoryListAsync: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Patching.PatchHistory"][];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Patching.PatchHistory"][];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Patching.PatchHistory"][];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Patching.PatchHistory"][];
                };
            };
        };
    };
    ThirdPartyUpdatePolicies_GetThirdPartyUpdatePolicyListAsync: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Patching.ThirdPartyUpdatePolicy"][];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Patching.ThirdPartyUpdatePolicy"][];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Patching.ThirdPartyUpdatePolicy"][];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Patching.ThirdPartyUpdatePolicy"][];
                };
            };
        };
    };
    NetworkDevices_GetNetworkDeviceList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.NetworkDevice"][];
                    "text/json": components["schemas"]["LabTech.Models.NetworkDevice"][];
                    "application/xml": components["schemas"]["LabTech.Models.NetworkDevice"][];
                    "text/xml": components["schemas"]["LabTech.Models.NetworkDevice"][];
                };
            };
        };
    };
    NetworkDevices_PostNetworkDevice: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LabTech.Models.NetworkDevice"];
                "text/json": components["schemas"]["LabTech.Models.NetworkDevice"];
                "application/xml": components["schemas"]["LabTech.Models.NetworkDevice"];
                "text/xml": components["schemas"]["LabTech.Models.NetworkDevice"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.NetworkDevice"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.NetworkDevice"];
                    "text/json": components["schemas"]["LabTech.Models.NetworkDevice"];
                    "application/xml": components["schemas"]["LabTech.Models.NetworkDevice"];
                    "text/xml": components["schemas"]["LabTech.Models.NetworkDevice"];
                };
            };
        };
    };
    NetworkDevices_GetNetworkDevice: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                deviceId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.NetworkDevice"];
                    "text/json": components["schemas"]["LabTech.Models.NetworkDevice"];
                    "application/xml": components["schemas"]["LabTech.Models.NetworkDevice"];
                    "text/xml": components["schemas"]["LabTech.Models.NetworkDevice"];
                };
            };
        };
    };
    NetworkDevices_PatchNetworkDevice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                deviceId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.RESTApi.Models.PatchOperationArray"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.NetworkDevice"];
                    "text/json": components["schemas"]["LabTech.Models.NetworkDevice"];
                    "application/xml": components["schemas"]["LabTech.Models.NetworkDevice"];
                    "text/xml": components["schemas"]["LabTech.Models.NetworkDevice"];
                };
            };
        };
    };
    Routers_GetRouters: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Router"][];
                    "text/json": components["schemas"]["LabTech.Models.Router"][];
                    "application/xml": components["schemas"]["LabTech.Models.Router"][];
                    "text/xml": components["schemas"]["LabTech.Models.Router"][];
                };
            };
        };
    };
    InternalMonitorResults_GetInternalMonitorResultList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Monitors.InternalMonitorResult"][];
                    "text/json": components["schemas"]["LabTech.Models.Monitors.InternalMonitorResult"][];
                    "application/xml": components["schemas"]["LabTech.Models.Monitors.InternalMonitorResult"][];
                    "text/xml": components["schemas"]["LabTech.Models.Monitors.InternalMonitorResult"][];
                };
            };
        };
    };
    MonitorsHistory_GetMonitorHistoryList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.MonitorHistory"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.MonitorHistory"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.MonitorHistory"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.MonitorHistory"][];
                };
            };
        };
    };
    MonitorsHistory_GetMonitorHistoryListById: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                monitorId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.MonitorHistory"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.MonitorHistory"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.MonitorHistory"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.MonitorHistory"][];
                };
            };
        };
    };
    MonitorsCollectedData_GetDailyCollectedData: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                monitorId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapoint"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapoint"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapoint"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapoint"][];
                };
            };
        };
    };
    MonitorsCollectedData_GetMonthlyCollectedData: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                monitorId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapoint"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapoint"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapoint"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapoint"][];
                };
            };
        };
    };
    MonitorsCollectedData_GetWeeklyCollectedData: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                monitorId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapoint"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapoint"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapoint"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapoint"][];
                };
            };
        };
    };
    MonitorsCollectedData_GetYearlyCollectedData: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                monitorId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapoint"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapoint"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapoint"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapoint"][];
                };
            };
        };
    };
    MonitorDataCollectionSettings_GetDataCollectionSettingsForMonitorAsync: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                monitorId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.MonitorDataCollectionSettings"];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.MonitorDataCollectionSettings"];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.MonitorDataCollectionSettings"];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.MonitorDataCollectionSettings"];
                };
            };
        };
    };
    MonitorsStatistics_GetMonitorStatisticsList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.MonitorStatistic"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.MonitorStatistic"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.MonitorStatistic"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.MonitorStatistic"][];
                };
            };
        };
    };
    SensorChecks_GetSensorCheckList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.SensorCheck"][];
                    "text/json": components["schemas"]["LabTech.Models.SensorCheck"][];
                    "application/xml": components["schemas"]["LabTech.Models.SensorCheck"][];
                    "text/xml": components["schemas"]["LabTech.Models.SensorCheck"][];
                };
            };
        };
    };
    MaintenanceWindowDefinition_GetDefinitionList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Maintenance.MaintenanceWindowDefinition"][];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Maintenance.MaintenanceWindowDefinition"][];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Maintenance.MaintenanceWindowDefinition"][];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Maintenance.MaintenanceWindowDefinition"][];
                };
            };
        };
    };
    AVTemplatePolicies_GetAntivirusTemplatePolicyList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.AVTemplatePolicy"][];
                    "text/json": components["schemas"]["LabTech.Models.AVTemplatePolicy"][];
                    "application/xml": components["schemas"]["LabTech.Models.AVTemplatePolicy"][];
                    "text/xml": components["schemas"]["LabTech.Models.AVTemplatePolicy"][];
                };
            };
        };
    };
    AVTemplatePolicies_PostAntivirusTemplatePolicy: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.AVTemplatePolicy"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.AVTemplatePolicy"];
                    "text/json": components["schemas"]["LabTech.Models.AVTemplatePolicy"];
                    "application/xml": components["schemas"]["LabTech.Models.AVTemplatePolicy"];
                    "text/xml": components["schemas"]["LabTech.Models.AVTemplatePolicy"];
                };
            };
        };
    };
    AVTemplatePolicyData_GetAntivirusTemplatePolicyDataList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.AVTemplatePolicyData"][];
                    "text/json": components["schemas"]["LabTech.Models.AVTemplatePolicyData"][];
                    "application/xml": components["schemas"]["LabTech.Models.AVTemplatePolicyData"][];
                    "text/xml": components["schemas"]["LabTech.Models.AVTemplatePolicyData"][];
                };
            };
        };
    };
    AVTemplatePolicyData_PostAntivirusTemplatePolicyData: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.AVTemplatePolicyData"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.AVTemplatePolicyData"];
                    "text/json": components["schemas"]["LabTech.Models.AVTemplatePolicyData"];
                    "application/xml": components["schemas"]["LabTech.Models.AVTemplatePolicyData"];
                    "text/xml": components["schemas"]["LabTech.Models.AVTemplatePolicyData"];
                };
            };
        };
    };
    GroupComputers_GetGroupComputerList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.GroupComputer"][];
                    "text/json": components["schemas"]["LabTech.Models.GroupComputer"][];
                    "application/xml": components["schemas"]["LabTech.Models.GroupComputer"][];
                    "text/xml": components["schemas"]["LabTech.Models.GroupComputer"][];
                };
            };
        };
    };
    GroupComputers_PostGroupComputer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.GroupComputer"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.GroupComputer"];
                    "text/json": components["schemas"]["LabTech.Models.GroupComputer"];
                    "application/xml": components["schemas"]["LabTech.Models.GroupComputer"];
                    "text/xml": components["schemas"]["LabTech.Models.GroupComputer"];
                };
            };
        };
    };
    GroupComputers_GetGroupComputer: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                entityId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.GroupComputer"];
                    "text/json": components["schemas"]["LabTech.Models.GroupComputer"];
                    "application/xml": components["schemas"]["LabTech.Models.GroupComputer"];
                    "text/xml": components["schemas"]["LabTech.Models.GroupComputer"];
                };
            };
        };
    };
    GroupComputers_PutGroupComputer: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entityId: string;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.GroupComputer"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.GroupComputer"];
                    "text/json": components["schemas"]["LabTech.Models.GroupComputer"];
                    "application/xml": components["schemas"]["LabTech.Models.GroupComputer"];
                    "text/xml": components["schemas"]["LabTech.Models.GroupComputer"];
                };
            };
        };
    };
    GroupComputers_DeleteGroupComputer: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entityId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GroupComputers_PatchGroupComputer: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entityId: string;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.RESTApi.Models.PatchOperationArray"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.GroupComputer"];
                    "text/json": components["schemas"]["LabTech.Models.GroupComputer"];
                    "application/xml": components["schemas"]["LabTech.Models.GroupComputer"];
                    "text/xml": components["schemas"]["LabTech.Models.GroupComputer"];
                };
            };
        };
    };
    GroupNetworkDevices_GetGroupNetworkDeviceList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.GroupNetworkDevice"][];
                    "text/json": components["schemas"]["LabTech.Models.GroupNetworkDevice"][];
                    "application/xml": components["schemas"]["LabTech.Models.GroupNetworkDevice"][];
                    "text/xml": components["schemas"]["LabTech.Models.GroupNetworkDevice"][];
                };
            };
        };
    };
    GroupNetworkDevices_PostGroupNetworkDevice: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.GroupNetworkDevice"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                    "text/json": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                    "application/xml": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                    "text/xml": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                };
            };
        };
    };
    GroupNetworkDevices_GetGroupNetworkDevice: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                entityId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                    "text/json": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                    "application/xml": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                    "text/xml": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                };
            };
        };
    };
    GroupNetworkDevices_PutGroupNetworkDevice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entityId: string;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.GroupNetworkDevice"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                    "text/json": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                    "application/xml": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                    "text/xml": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                };
            };
        };
    };
    GroupNetworkDevices_DeleteGroupNetworkDevice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entityId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GroupNetworkDevices_PatchGroupNetworkDevice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entityId: string;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.RESTApi.Models.PatchOperationArray"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                    "text/json": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                    "application/xml": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                    "text/xml": components["schemas"]["LabTech.Models.GroupNetworkDevice"];
                };
            };
        };
    };
    Groups_GetGroupList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Group"][];
                    "text/json": components["schemas"]["LabTech.Models.Group"][];
                    "application/xml": components["schemas"]["LabTech.Models.Group"][];
                    "text/xml": components["schemas"]["LabTech.Models.Group"][];
                };
            };
        };
    };
    Groups_PostGroup: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.Group"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Group"];
                    "text/json": components["schemas"]["LabTech.Models.Group"];
                    "application/xml": components["schemas"]["LabTech.Models.Group"];
                    "text/xml": components["schemas"]["LabTech.Models.Group"];
                };
            };
        };
    };
    Groups_GetGroup: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                entityId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Group"];
                    "text/json": components["schemas"]["LabTech.Models.Group"];
                    "application/xml": components["schemas"]["LabTech.Models.Group"];
                    "text/xml": components["schemas"]["LabTech.Models.Group"];
                };
            };
        };
    };
    Groups_PutGroup: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entityId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.Group"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Group"];
                    "text/json": components["schemas"]["LabTech.Models.Group"];
                    "application/xml": components["schemas"]["LabTech.Models.Group"];
                    "text/xml": components["schemas"]["LabTech.Models.Group"];
                };
            };
        };
    };
    Groups_DeleteGroup: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entityId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Groups_PatchGroup: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entityId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.RESTApi.Models.PatchOperationArray"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Group"];
                    "text/json": components["schemas"]["LabTech.Models.Group"];
                    "application/xml": components["schemas"]["LabTech.Models.Group"];
                    "text/xml": components["schemas"]["LabTech.Models.Group"];
                };
            };
        };
    };
    TemplateAvailableProperties_GetTemplateAvailablePropertyList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.TemplateAvailableProperty"][];
                    "text/json": components["schemas"]["LabTech.Models.TemplateAvailableProperty"][];
                    "application/xml": components["schemas"]["LabTech.Models.TemplateAvailableProperty"][];
                    "text/xml": components["schemas"]["LabTech.Models.TemplateAvailableProperty"][];
                };
            };
        };
    };
    TemplateAvailableProperties_PostTemplateAvailableProperty: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.TemplateAvailableProperty"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.TemplateAvailableProperty"];
                    "text/json": components["schemas"]["LabTech.Models.TemplateAvailableProperty"];
                    "application/xml": components["schemas"]["LabTech.Models.TemplateAvailableProperty"];
                    "text/xml": components["schemas"]["LabTech.Models.TemplateAvailableProperty"];
                };
            };
        };
    };
    TemplateProperties_GetTemplatePropertyList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.TemplateProperty"][];
                    "text/json": components["schemas"]["LabTech.Models.TemplateProperty"][];
                    "application/xml": components["schemas"]["LabTech.Models.TemplateProperty"][];
                    "text/xml": components["schemas"]["LabTech.Models.TemplateProperty"][];
                };
            };
        };
    };
    TemplateProperties_PostTemplateProperty: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.TemplateProperty"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.TemplateProperty"];
                    "text/json": components["schemas"]["LabTech.Models.TemplateProperty"];
                    "application/xml": components["schemas"]["LabTech.Models.TemplateProperty"];
                    "text/xml": components["schemas"]["LabTech.Models.TemplateProperty"];
                };
            };
        };
    };
    EventLog_GetEventLogsAsync: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.EventLog"][];
                    "text/json": components["schemas"]["LabTech.Models.EventLog"][];
                    "application/xml": components["schemas"]["LabTech.Models.EventLog"][];
                    "text/xml": components["schemas"]["LabTech.Models.EventLog"][];
                };
            };
        };
    };
    DataViewFolders_GetDataViewFolderList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.DataViewFolder"][];
                    "text/json": components["schemas"]["LabTech.Models.DataViewFolder"][];
                    "application/xml": components["schemas"]["LabTech.Models.DataViewFolder"][];
                    "text/xml": components["schemas"]["LabTech.Models.DataViewFolder"][];
                };
            };
        };
    };
    DataViews_GetDataViewList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.DataView"][];
                    "text/json": components["schemas"]["LabTech.Models.DataView"][];
                    "application/xml": components["schemas"]["LabTech.Models.DataView"][];
                    "text/xml": components["schemas"]["LabTech.Models.DataView"][];
                };
            };
        };
    };
    Contacts_GetContactList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Contact"][];
                    "text/json": components["schemas"]["LabTech.Models.Contact"][];
                    "application/xml": components["schemas"]["LabTech.Models.Contact"][];
                    "text/xml": components["schemas"]["LabTech.Models.Contact"][];
                };
            };
        };
    };
    SystemContacts_GetSystemContactList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Contact"][];
                    "text/json": components["schemas"]["LabTech.Models.Contact"][];
                    "application/xml": components["schemas"]["LabTech.Models.Contact"][];
                    "text/xml": components["schemas"]["LabTech.Models.Contact"][];
                };
            };
        };
    };
    V2Contacts_GetContactList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"][];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"][];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"][];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"][];
                };
            };
        };
    };
    V2Contacts_PostContact: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["Automate.Api.Domain.Contracts.Clients.Contact"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"];
                };
            };
        };
    };
    V2Contacts_GetContact: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                contactId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"];
                };
            };
        };
    };
    V2Contacts_PutContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contactId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["Automate.Api.Domain.Contracts.Clients.Contact"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Contact"];
                };
            };
        };
    };
    V2Contacts_DeleteContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contactId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Alerts_GetAlertsList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Alerts.Alert"][];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Alerts.Alert"][];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Alerts.Alert"][];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Alerts.Alert"][];
                };
            };
        };
    };
    Alerts_GetAlert: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                alertId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Alerts.Alert"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Alerts.Alert"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Alerts.Alert"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Alerts.Alert"];
                };
            };
        };
    };
    ComputerMenus_GetComputerMenuList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerMenu"][];
                    "text/json": components["schemas"]["LabTech.Models.ComputerMenu"][];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerMenu"][];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerMenu"][];
                };
            };
        };
    };
    ComputerMenus_PostComputerMenu: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.ComputerMenu"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerMenu"];
                    "text/json": components["schemas"]["LabTech.Models.ComputerMenu"];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerMenu"];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerMenu"];
                };
            };
        };
    };
    Computers_GetComputerList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Computer"][];
                    "text/json": components["schemas"]["LabTech.Models.Computer"][];
                    "application/xml": components["schemas"]["LabTech.Models.Computer"][];
                    "text/xml": components["schemas"]["LabTech.Models.Computer"][];
                };
            };
        };
    };
    ComputerAlerts_GetComputerAlerts: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                    "text/json": Record<string, never>;
                    "application/xml": Record<string, never>;
                    "text/xml": Record<string, never>;
                };
            };
        };
    };
    MaintenanceAlertSuspensions_GetSuspensionList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                    "text/json": Record<string, never>;
                    "application/xml": Record<string, never>;
                    "text/xml": Record<string, never>;
                };
            };
        };
    };
    TemplateAlertSuspension_GetSuspensionList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                    "text/json": Record<string, never>;
                    "application/xml": Record<string, never>;
                    "text/xml": Record<string, never>;
                };
            };
        };
    };
    ComputerBios_GetComputerBios: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerBios"];
                    "text/json": components["schemas"]["LabTech.Models.ComputerBios"];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerBios"];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerBios"];
                };
            };
        };
    };
    CommandExecute_GetCommandExecuteList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.CommandExecute"][];
                    "text/json": components["schemas"]["LabTech.Models.CommandExecute"][];
                    "application/xml": components["schemas"]["LabTech.Models.CommandExecute"][];
                    "text/xml": components["schemas"]["LabTech.Models.CommandExecute"][];
                };
            };
        };
    };
    CommandExecute_PostCommandExecute: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LabTech.Models.CommandExecute"];
                "text/json": components["schemas"]["LabTech.Models.CommandExecute"];
                "application/xml": components["schemas"]["LabTech.Models.CommandExecute"];
                "text/xml": components["schemas"]["LabTech.Models.CommandExecute"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.CommandExecute"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.CommandExecute"];
                    "text/json": components["schemas"]["LabTech.Models.CommandExecute"];
                    "application/xml": components["schemas"]["LabTech.Models.CommandExecute"];
                    "text/xml": components["schemas"]["LabTech.Models.CommandExecute"];
                };
            };
        };
    };
    CommandHistory_GetCommandHistoryList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Compatibility.CommandHistory"][];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Compatibility.CommandHistory"][];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Compatibility.CommandHistory"][];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Compatibility.CommandHistory"][];
                };
            };
        };
    };
    ComputerPatchingPolicies_GetComputerPatchingPolicyListAsync: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerPatchingPolicy"][];
                    "text/json": components["schemas"]["LabTech.Models.ComputerPatchingPolicy"][];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerPatchingPolicy"][];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerPatchingPolicy"][];
                };
            };
        };
    };
    Computers_GetComputerDeviceList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerDevice"][];
                    "text/json": components["schemas"]["LabTech.Models.ComputerDevice"][];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerDevice"][];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerDevice"][];
                };
            };
        };
    };
    ComputerDrivers_GetComputerDrivers: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.ComputerDriver"][];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.ComputerDriver"][];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.ComputerDriver"][];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.ComputerDriver"][];
                };
            };
        };
    };
    ComputerDrives_GetComputerDriveSmartDataList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
                driveId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.SmartData"][];
                    "text/json": components["schemas"]["LabTech.Models.SmartData"][];
                    "application/xml": components["schemas"]["LabTech.Models.SmartData"][];
                    "text/xml": components["schemas"]["LabTech.Models.SmartData"][];
                };
            };
        };
    };
    ComputerEffectivePatchingPolicy_GetComputerEffectivePatchingPolicy: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerEffectivePatchingPolicy"];
                    "text/json": components["schemas"]["LabTech.Models.ComputerEffectivePatchingPolicy"];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerEffectivePatchingPolicy"];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerEffectivePatchingPolicy"];
                };
            };
        };
    };
    ComputerMicrosoftUpdateData_GetComputerMicrosoftUpdateDataListAsync: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                    "text/json": Record<string, never>;
                    "application/xml": Record<string, never>;
                    "text/xml": Record<string, never>;
                };
            };
        };
    };
    MonitorAlertSuspensions_GetSuspensionList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                    "text/json": Record<string, never>;
                    "application/xml": Record<string, never>;
                    "text/xml": Record<string, never>;
                };
            };
        };
    };
    MonitorAlertSuspensions_PostSuspension: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": number;
                "text/json": number;
                "application/xml": number;
                "text/xml": number;
                "application/x-www-form-urlencoded": number;
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Alerting.MonitorAlertSuspension"];
                    "text/json": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Alerting.MonitorAlertSuspension"];
                    "application/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Alerting.MonitorAlertSuspension"];
                    "text/xml": components["schemas"]["LabTech.Repositories.MySQL.Domain.Models.Alerting.MonitorAlertSuspension"];
                };
            };
        };
    };
    ComputerMonitors_GetComputerMonitorsList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                    "text/json": Record<string, never>;
                    "application/xml": Record<string, never>;
                    "text/xml": Record<string, never>;
                };
            };
        };
    };
    ComputerOperatingSystem_GetComputerOperatingSystem: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerOperatingSystem"];
                    "text/json": components["schemas"]["LabTech.Models.ComputerOperatingSystem"];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerOperatingSystem"];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerOperatingSystem"];
                };
            };
        };
    };
    DevicePatchingStatistics_GetDevicePatchingStatisticsAsync: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Patching.ComputerPatchingStats"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Patching.ComputerPatchingStats"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Patching.ComputerPatchingStats"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Patching.ComputerPatchingStats"];
                };
            };
        };
    };
    PatchJob_GetComputerPatchJobListAsync: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                    "text/json": Record<string, never>;
                    "application/xml": Record<string, never>;
                    "text/xml": Record<string, never>;
                };
            };
        };
    };
    ComputerPrinters_GetComputerPrintersList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerPrinter"][];
                    "text/json": components["schemas"]["LabTech.Models.ComputerPrinter"][];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerPrinter"][];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerPrinter"][];
                };
            };
        };
    };
    Computers_GetComputerProcessorList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerProcessor"][];
                    "text/json": components["schemas"]["LabTech.Models.ComputerProcessor"][];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerProcessor"][];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerProcessor"][];
                };
            };
        };
    };
    ComputerRunningScripts_GetComputerRunningScripts: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerRunningScript"][];
                    "text/json": components["schemas"]["LabTech.Models.ComputerRunningScript"][];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerRunningScript"][];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerRunningScript"][];
                };
            };
        };
    };
    ScheduledScript_GetComputerScheduledScripts: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ScheduledScript"][];
                    "text/json": components["schemas"]["LabTech.Models.ScheduledScript"][];
                    "application/xml": components["schemas"]["LabTech.Models.ScheduledScript"][];
                    "text/xml": components["schemas"]["LabTech.Models.ScheduledScript"][];
                };
            };
        };
    };
    ScheduledScript_PostComputerScheduledScript: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LabTech.Models.ScheduledScript"];
                "text/json": components["schemas"]["LabTech.Models.ScheduledScript"];
                "application/xml": components["schemas"]["LabTech.Models.ScheduledScript"];
                "text/xml": components["schemas"]["LabTech.Models.ScheduledScript"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.ScheduledScript"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ScheduledScript"];
                    "text/json": components["schemas"]["LabTech.Models.ScheduledScript"];
                    "application/xml": components["schemas"]["LabTech.Models.ScheduledScript"];
                    "text/xml": components["schemas"]["LabTech.Models.ScheduledScript"];
                };
            };
        };
    };
    ScheduledScript_GetComputerScheduledScript: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
                entityId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ScheduledScript"];
                    "text/json": components["schemas"]["LabTech.Models.ScheduledScript"];
                    "application/xml": components["schemas"]["LabTech.Models.ScheduledScript"];
                    "text/xml": components["schemas"]["LabTech.Models.ScheduledScript"];
                };
            };
        };
    };
    ComputerScheduledTasks_GetScheduledTaskList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                    "text/json": Record<string, never>;
                    "application/xml": Record<string, never>;
                    "text/xml": Record<string, never>;
                };
            };
        };
    };
    ComputerScheduledTasks_PostScheduledTask: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LabTech.Models.ComputerScheduledTask"];
                "text/json": components["schemas"]["LabTech.Models.ComputerScheduledTask"];
                "application/xml": components["schemas"]["LabTech.Models.ComputerScheduledTask"];
                "text/xml": components["schemas"]["LabTech.Models.ComputerScheduledTask"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.ComputerScheduledTask"];
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComputerScriptHistory_GetComputerScriptHistoryList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerScriptHistory"][];
                    "text/json": components["schemas"]["LabTech.Models.ComputerScriptHistory"][];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerScriptHistory"][];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerScriptHistory"][];
                };
            };
        };
    };
    ComputerSensor_GetComputerSensorListAsync: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerSensor"][];
                    "text/json": components["schemas"]["LabTech.Models.ComputerSensor"][];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerSensor"][];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerSensor"][];
                };
            };
        };
    };
    Computers_GetComputerServiceList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerService"][];
                    "text/json": components["schemas"]["LabTech.Models.ComputerService"][];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerService"][];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerService"][];
                };
            };
        };
    };
    Computers_GetComputerSoftwareList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerSoftware"][];
                    "text/json": components["schemas"]["LabTech.Models.ComputerSoftware"][];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerSoftware"][];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerSoftware"][];
                };
            };
        };
    };
    ComputerSoftwareActions_UninstallSoftware: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                computerId: number;
                softwareId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LabTech.RESTApi.RpcContracts.SoftwareUninstallInfo"];
                "text/json": components["schemas"]["LabTech.RESTApi.RpcContracts.SoftwareUninstallInfo"];
                "application/xml": components["schemas"]["LabTech.RESTApi.RpcContracts.SoftwareUninstallInfo"];
                "text/xml": components["schemas"]["LabTech.RESTApi.RpcContracts.SoftwareUninstallInfo"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.RESTApi.RpcContracts.SoftwareUninstallInfo"];
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ComputerSystemSlots_GetComputerSystemSlotList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerSystemSlot"][];
                    "text/json": components["schemas"]["LabTech.Models.ComputerSystemSlot"][];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerSystemSlot"][];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerSystemSlot"][];
                };
            };
        };
    };
    ComputerThirdPartyPatches_GetComputerThirdPartyPatchListAsync: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                    "text/json": Record<string, never>;
                    "application/xml": Record<string, never>;
                    "text/xml": Record<string, never>;
                };
            };
        };
    };
    ComputerUps_GetComputerUpsListAsync: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerUps"][];
                    "text/json": components["schemas"]["LabTech.Models.ComputerUps"][];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerUps"][];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerUps"][];
                };
            };
        };
    };
    Computers_GetComputerVideoCardList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                computerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerVideoCard"][];
                    "text/json": components["schemas"]["LabTech.Models.ComputerVideoCard"][];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerVideoCard"][];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerVideoCard"][];
                };
            };
        };
    };
    Chassis_GetComputerChassis: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerChassis"][];
                    "text/json": components["schemas"]["LabTech.Models.ComputerChassis"][];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerChassis"][];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerChassis"][];
                };
            };
        };
    };
    ComputerDrives_GetComputerDriveList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerDrive"][];
                    "text/json": components["schemas"]["LabTech.Models.ComputerDrive"][];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerDrive"][];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerDrive"][];
                };
            };
        };
    };
    Computers_GetComputerMaintenanceModeList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.MaintenanceMode"][];
                    "text/json": components["schemas"]["LabTech.Models.MaintenanceMode"][];
                    "application/xml": components["schemas"]["LabTech.Models.MaintenanceMode"][];
                    "text/xml": components["schemas"]["LabTech.Models.MaintenanceMode"][];
                };
            };
        };
    };
    Computers_GetComputerMemorySlotList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerMemorySlot"][];
                    "text/json": components["schemas"]["LabTech.Models.ComputerMemorySlot"][];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerMemorySlot"][];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerMemorySlot"][];
                };
            };
        };
    };
    Computers_GetComputerSoftwareList__get_api_v1_Computers_Software: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ComputerSoftware"][];
                    "text/json": components["schemas"]["LabTech.Models.ComputerSoftware"][];
                    "application/xml": components["schemas"]["LabTech.Models.ComputerSoftware"][];
                    "text/xml": components["schemas"]["LabTech.Models.ComputerSoftware"][];
                };
            };
        };
    };
    Locations_GetLocation: {
        parameters: {
            query?: {
                isContactPermissionValidationRequired?: boolean;
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                locationId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Location"];
                    "text/json": components["schemas"]["LabTech.Models.Location"];
                    "application/xml": components["schemas"]["LabTech.Models.Location"];
                    "text/xml": components["schemas"]["LabTech.Models.Location"];
                };
            };
        };
    };
    Locations_PutLocation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                locationId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.Location"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Location"];
                    "text/json": components["schemas"]["LabTech.Models.Location"];
                    "application/xml": components["schemas"]["LabTech.Models.Location"];
                    "text/xml": components["schemas"]["LabTech.Models.Location"];
                };
            };
        };
    };
    Locations_DeleteLocation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                locationId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Locations_PatchLocation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                locationId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.RESTApi.Models.PatchOperationArray"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Location"];
                    "text/json": components["schemas"]["LabTech.Models.Location"];
                    "application/xml": components["schemas"]["LabTech.Models.Location"];
                    "text/xml": components["schemas"]["LabTech.Models.Location"];
                };
            };
        };
    };
    ExtraFields_GetExtraFieldsForLocation: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                locationId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraField"][];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraField"][];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraField"][];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraField"][];
                };
            };
        };
    };
    ExtraFields_ResetExtraFieldForLocation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                locationId: number;
                extraFieldDefinitionId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraField"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraField"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraField"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraField"];
                };
            };
        };
    };
    ExtraFields_PatchExtraFieldForLocation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                locationId: number;
                extraFieldDefinitionId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.RESTApi.Models.PatchOperationArray"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraField"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraField"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraField"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraField"];
                };
            };
        };
    };
    RetiredAssets_GetRetiredAssetList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.RetiredAsset"][];
                    "text/json": components["schemas"]["LabTech.Models.RetiredAsset"][];
                    "application/xml": components["schemas"]["LabTech.Models.RetiredAsset"][];
                    "text/xml": components["schemas"]["LabTech.Models.RetiredAsset"][];
                };
            };
        };
    };
    RetiredAssets_GetRetiredAsset: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                assetId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.RetiredAsset"];
                    "text/json": components["schemas"]["LabTech.Models.RetiredAsset"];
                    "application/xml": components["schemas"]["LabTech.Models.RetiredAsset"];
                    "text/xml": components["schemas"]["LabTech.Models.RetiredAsset"];
                };
            };
        };
    };
    RetiredAssets_DeleteRetiredAsset: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                assetId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Services_ClassifyService: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                serviceId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LabTech.Models.ServiceClassification"];
                "text/json": components["schemas"]["LabTech.Models.ServiceClassification"];
                "application/xml": components["schemas"]["LabTech.Models.ServiceClassification"];
                "text/xml": components["schemas"]["LabTech.Models.ServiceClassification"];
                "application/x-www-form-urlencoded": components["schemas"]["LabTech.Models.ServiceClassification"];
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    VirusScannerDefs_GetVirusScannerDefinitionList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.VirusScannerDef"][];
                    "text/json": components["schemas"]["LabTech.Models.VirusScannerDef"][];
                    "application/xml": components["schemas"]["LabTech.Models.VirusScannerDef"][];
                    "text/xml": components["schemas"]["LabTech.Models.VirusScannerDef"][];
                };
            };
        };
    };
    VirusScannerDefs_PostVirusScannerDefinition: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.VirusScannerDef"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.VirusScannerDef"];
                    "text/json": components["schemas"]["LabTech.Models.VirusScannerDef"];
                    "application/xml": components["schemas"]["LabTech.Models.VirusScannerDef"];
                    "text/xml": components["schemas"]["LabTech.Models.VirusScannerDef"];
                };
            };
        };
    };
    Clients_GetClientList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Client"][];
                    "text/json": components["schemas"]["LabTech.Models.Client"][];
                    "application/xml": components["schemas"]["LabTech.Models.Client"][];
                    "text/xml": components["schemas"]["LabTech.Models.Client"][];
                };
            };
        };
    };
    Clients_PostClient: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.Client"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Client"];
                    "text/json": components["schemas"]["LabTech.Models.Client"];
                    "application/xml": components["schemas"]["LabTech.Models.Client"];
                    "text/xml": components["schemas"]["LabTech.Models.Client"];
                };
            };
        };
    };
    Clients_GetClient: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                clientId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Client"];
                    "text/json": components["schemas"]["LabTech.Models.Client"];
                    "application/xml": components["schemas"]["LabTech.Models.Client"];
                    "text/xml": components["schemas"]["LabTech.Models.Client"];
                };
            };
        };
    };
    Clients_PutClient: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                clientId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.Client"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Client"];
                    "text/json": components["schemas"]["LabTech.Models.Client"];
                    "application/xml": components["schemas"]["LabTech.Models.Client"];
                    "text/xml": components["schemas"]["LabTech.Models.Client"];
                };
            };
        };
    };
    Clients_DeleteClient: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                clientId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Clients_PatchClient: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                clientId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.RESTApi.Models.PatchOperationArray"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Client"];
                    "text/json": components["schemas"]["LabTech.Models.Client"];
                    "application/xml": components["schemas"]["LabTech.Models.Client"];
                    "text/xml": components["schemas"]["LabTech.Models.Client"];
                };
            };
        };
    };
    Documents_GetAllDocuments: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                clientId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Document"][];
                    "text/json": components["schemas"]["LabTech.Models.Document"][];
                    "application/xml": components["schemas"]["LabTech.Models.Document"][];
                    "text/xml": components["schemas"]["LabTech.Models.Document"][];
                };
            };
        };
    };
    ExtraFields_GetExtraFieldsForClient: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                clientId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraField"][];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraField"][];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraField"][];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.ExtraFields.ExtraField"][];
                };
            };
        };
    };
    ManagedLicenses_GetManagedLicenses: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                clientId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ManagedLicense"][];
                    "text/json": components["schemas"]["LabTech.Models.ManagedLicense"][];
                    "application/xml": components["schemas"]["LabTech.Models.ManagedLicense"][];
                    "text/xml": components["schemas"]["LabTech.Models.ManagedLicense"][];
                };
            };
        };
    };
    ManagedLicenses_PostManagedLicense: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                clientId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.ManagedLicense"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ManagedLicense"];
                    "text/json": components["schemas"]["LabTech.Models.ManagedLicense"];
                    "application/xml": components["schemas"]["LabTech.Models.ManagedLicense"];
                    "text/xml": components["schemas"]["LabTech.Models.ManagedLicense"];
                };
            };
        };
    };
    ClientPermissions_GetUserClassPermissions: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                clientId: number;
                userClassId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                    "text/json": string[];
                    "application/xml": string[];
                    "text/xml": string[];
                };
            };
        };
    };
    ClientPermissions_PutUserClassPermissions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                clientId: number;
                userClassId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["ClientPermissions_PutUserClassPermissionsPermissions"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                    "text/json": string[];
                    "application/xml": string[];
                    "text/xml": string[];
                };
            };
        };
    };
    ClientPermissions_PostUserClassPermissions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                clientId: number;
                userClassId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["ClientPermissions_PutUserClassPermissionsPermissions"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                    "text/json": string[];
                    "application/xml": string[];
                    "text/xml": string[];
                };
            };
        };
    };
    ClientPermissions_DeleteUserClassPermissions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                clientId: number;
                userClassId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ProductKeys_GetProductKeys: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                clientId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ProductKey"][];
                    "text/json": components["schemas"]["LabTech.Models.ProductKey"][];
                    "application/xml": components["schemas"]["LabTech.Models.ProductKey"][];
                    "text/xml": components["schemas"]["LabTech.Models.ProductKey"][];
                };
            };
        };
    };
    ProductKeys_PostProductKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                clientId: number;
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.ProductKey"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.ProductKey"];
                    "text/json": components["schemas"]["LabTech.Models.ProductKey"];
                    "application/xml": components["schemas"]["LabTech.Models.ProductKey"];
                    "text/xml": components["schemas"]["LabTech.Models.ProductKey"];
                };
            };
        };
    };
    Locations_GetLocationList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Location"][];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Location"][];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Location"][];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Clients.Location"][];
                };
            };
        };
    };
    Locations_PostLocation: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["LabTech.Models.Location"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Location"];
                    "text/json": components["schemas"]["LabTech.Models.Location"];
                    "application/xml": components["schemas"]["LabTech.Models.Location"];
                    "text/xml": components["schemas"]["LabTech.Models.Location"];
                };
            };
        };
    };
    Commands_GetCommandList: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Command"][];
                    "text/json": components["schemas"]["LabTech.Models.Command"][];
                    "application/xml": components["schemas"]["LabTech.Models.Command"][];
                    "text/xml": components["schemas"]["LabTech.Models.Command"][];
                };
            };
        };
    };
    Commands_GetCommand: {
        parameters: {
            query?: {
                "options.orderBy.name"?: string;
                "options.orderBy.type"?: "Undefined" | "Ascending" | "Descending";
                "options.page"?: number;
                "options.pageSize"?: number;
                "options.condition"?: string;
                "options.expands"?: string;
                "options.includedFields"?: string[];
                "options.excludedFields"?: string[];
                "options.ids"?: string[];
                "options.timeout"?: number;
            };
            header?: never;
            path: {
                entityId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LabTech.Models.Command"];
                    "text/json": components["schemas"]["LabTech.Models.Command"];
                    "application/xml": components["schemas"]["LabTech.Models.Command"];
                    "text/xml": components["schemas"]["LabTech.Models.Command"];
                };
            };
        };
    };
    BatchProbeCommands_RunDeviceDetection: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchCommands.Probe.ExecuteProbeBatchRequest"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchCommands.Probe.ExecuteProbeBatchRequest"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchCommands.Probe.ExecuteProbeBatchRequest"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchCommands.Probe.ExecuteProbeBatchRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.BatchCommands.Probe.ExecuteProbeBatchRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchCommands.Probe.ExecuteProbeBatchResponse"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchCommands.Probe.ExecuteProbeBatchResponse"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchCommands.Probe.ExecuteProbeBatchResponse"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchCommands.Probe.ExecuteProbeBatchResponse"];
                };
            };
        };
    };
    BatchScripts_ExecuteScript: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchRequest"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchResponse"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchResponse"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchResponse"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchResponse"];
                };
            };
        };
    };
    BatchScripts_ScheduleScript: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: components["requestBodies"]["Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchRequest"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchResponse"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchResponse"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchResponse"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchResponse"];
                };
            };
        };
    };
    BatchSearches_BatchSendToSearches: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Searches.SendToSearchesBatchRequest"];
                "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Searches.SendToSearchesBatchRequest"];
                "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Searches.SendToSearchesBatchRequest"];
                "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Searches.SendToSearchesBatchRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["Automate.Api.Domain.Contracts.Searches.SendToSearchesBatchRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Automate.Api.Domain.Contracts.Searches.SendToSearchesBatchResponse"];
                    "text/json": components["schemas"]["Automate.Api.Domain.Contracts.Searches.SendToSearchesBatchResponse"];
                    "application/xml": components["schemas"]["Automate.Api.Domain.Contracts.Searches.SendToSearchesBatchResponse"];
                    "text/xml": components["schemas"]["Automate.Api.Domain.Contracts.Searches.SendToSearchesBatchResponse"];
                };
            };
        };
    };
}
