import React from 'react'
 export const importsMap = {
  "/home": React.lazy(() => import('./views/home/Home')), 
  "/cipp/logs": React.lazy(() => import('./views/cipp/Logs')), 
  "/cipp/scheduler": React.lazy(() => import('./views/cipp/Scheduler')), 
  "/cipp/statistics": React.lazy(() => import('./views/cipp/Statistics')), 
  "/cipp/404": React.lazy(() => import('./views/pages/page404/Page404')), 
  "/cipp/403": React.lazy(() => import('./views/pages/page403/Page403')), 
  "/cipp/500": React.lazy(() => import('./views/pages/page500/Page500')), 
  "/identity/administration/users/add": React.lazy(() => import('./views/identity/administration/AddUser')), 
  "/identity/administration/users/addbulk": React.lazy(() => import('./views/identity/administration/AddUserBulk')), 
  "/identity/administration/users/edit": React.lazy(() => import('./views/identity/administration/EditUser')), 
  "/identity/administration/users/view": React.lazy(() => import('./views/identity/administration/ViewUser')), 
  "/identity/administration/users/InviteGuest": React.lazy(() => import('./views/identity/administration/InviteGuest')), 
  "/identity/administration/jit-admin": React.lazy(() => import('./views/identity/administration/DeployJITAdmin')), 
  "/identity/administration/ViewBec": React.lazy(() => import('./views/identity/administration/ViewBEC')), 
  "/identity/administration/users": React.lazy(() => import('./views/identity/administration/Users')), 
  "/identity/administration/risky-users": React.lazy(() => import('./views/identity/administration/RiskyUsers')), 
  "/identity/administration/devices": React.lazy(() => import('./views/identity/administration/Devices')), 
  "/identity/administration/groups/add": React.lazy(() => import('./views/identity/administration/AddGroup')), 
  "/identity/administration/group-templates": React.lazy(() => import('./views/identity/administration/GroupTemplates')), 
  "/identity/administration/group-add-template": React.lazy(() => import('./views/identity/administration/AddGroupTemplate')), 
  "/identity/administration/deploy-group-template": React.lazy(() => import('./views/identity/administration/DeployGroupTemplate')), 
  "/identity/administration/groups/edit": React.lazy(() => import('./views/identity/administration/EditGroup')), 
  "/identity/administration/groups/view": React.lazy(() => import('./views/identity/administration/ViewGroup')), 
  "/identity/administration/groups": React.lazy(() => import('./views/identity/administration/Groups')), 
  "/identity/administration/roles": React.lazy(() => import('./views/identity/administration/Roles')), 
  "/identity/administration/deleted-items": React.lazy(() => import('./views/identity/administration/Deleted')), 
  "/teams-share/teams/business-voice": React.lazy(() => import('./views/teams-share/teams/BusinessVoice')), 
  "/identity/administration/offboarding-wizard": React.lazy(() => import('./views/identity/administration/OffboardingWizard')), 
  "/endpoint/reports/devices": React.lazy(() => import('./views/endpoint/intune/Devices')), 
  "/identity/reports/mfa-report": React.lazy(() => import('./views/identity/reports/MFAReport')), 
  "/identity/reports/inactive-users-report": React.lazy(() => import('./views/identity/reports/InactiveUsers')), 
  "/identity/reports/Signin-report": React.lazy(() => import('./views/identity/reports/SignIns')), 
  "/identity/reports/azure-ad-connect-report": React.lazy(() => import('./views/identity/reports/AzureADConnectReport')), 
  "/identity/reports/risk-detections": React.lazy(() => import('./views/identity/reports/RiskDetections')), 
  "/tenant/backup/backup-wizard": React.lazy(() => import('./views/tenant/backup/CreateBackup')), 
  "/tenant/backup/restore-wizard": React.lazy(() => import('./views/tenant/backup/RestoreBackup')), 
  "/tenant/administration/tenants": React.lazy(() => import('./views/tenant/administration/Tenants')), 
  "/tenant/administration/tenants/edit": React.lazy(() => import('./views/tenant/administration/EditTenant')), 
  "/tenant/administration/partner-relationships": React.lazy(() => import('./views/tenant/administration/PartnerRelationships')), 
  "/tenant/administration/domains": React.lazy(() => import('./views/tenant/administration/Domains')), 
  "/tenant/administration/alertswizard": React.lazy(() => import('./views/tenant/administration/AlertWizard')), 
  "/tenant/administration/alertrules": React.lazy(() => import('./views/tenant/administration/AlertRules')), 
  "/tenant/administration/alertsqueue": React.lazy(() => import('./views/tenant/administration/ListAlertsQueue')), 
  "/tenant/administration/graph-explorer": React.lazy(() => import('./views/tenant/administration/GraphExplorer')), 
  "/tenant/administration/service-health": React.lazy(() => import('./views/tenant/administration/ServiceHealth')), 
  "/tenant/administration/enterprise-apps": React.lazy(() => import('./views/tenant/administration/ListEnterpriseApps')), 
  "/tenant/administration/app-consent-requests": React.lazy(() => import('./views/tenant/administration/ListAppConsentRequests')), 
  "/tenant/conditional/list-policies": React.lazy(() => import('./views/tenant/conditional/ConditionalAccess')), 
  "/tenant/administration/authentication-methods": React.lazy(() => import('./views/tenant/administration/AuthMethods')), 
  "/tenant/conditional/deploy-vacation": React.lazy(() => import('./views/tenant/conditional/DeployVacation')), 
  "/tenant/conditional/test-policy": React.lazy(() => import('./views/tenant/conditional/TestCAPolicy')), 
  "/tenant/conditional/list-named-locations": React.lazy(() => import('./views/tenant/conditional/NamedLocations')), 
  "/tenant/conditional/deploy": React.lazy(() => import('./views/tenant/conditional/DeployCA')), 
  "/tenant/conditional/deploy-named-location": React.lazy(() => import('./views/tenant/conditional/DeployNamedLocation')), 
  "/tenant/conditional/list-template": React.lazy(() => import('./views/tenant/conditional/ListCATemplates')), 
  "/tenant/conditional/add-template": React.lazy(() => import('./views/tenant/conditional/AddCATemplate')), 
  "/tenant/administration/list-licenses": React.lazy(() => import('./views/tenant/administration/ListLicences')), 
  "/tenant/administration/application-consent": React.lazy(() => import('./views/tenant/administration/ListOauthApps')), 
  "/tenant/standards/list-applied-standards": React.lazy(() => import('./views/tenant/standards/ListAppliedStandards')), 
  "/tenant/standards/bpa-report": React.lazy(() => import('./views/tenant/standards/BestPracticeAnalyser')), 
  "/tenant/standards/domains-analyser": React.lazy(() => import('./views/tenant/standards/DomainsAnalyser')), 
  "/tenant/standards/individual-domains": React.lazy(() => import('./views/tenant/standards/IndividualDomain')), 
  "/tenant/administration/tenantlookup": React.lazy(() => import('./views/tenant/administration/TenantLookup')), 
  "/tenant/tools/geoiplookup": React.lazy(() => import('./views/tenant/administration/GeoIPLookup')), 
  "/tenant/tools/bpa-report-builder": React.lazy(() => import('./views/tenant/standards/BPAReportBuilder')), 
  "/tenant/standards/alert-list": React.lazy(() => import('./views/security/incidents/ListAlerts')), 
  "/endpoint/applications/list": React.lazy(() => import('./views/endpoint/applications/ApplicationsList')), 
  "/endpoint/applications/queue": React.lazy(() => import('./views/endpoint/applications/ListApplicationQueue')), 
  "/endpoint/applications/add-choco-app": React.lazy(() => import('./views/endpoint/applications/ApplicationsAddChocoApp')), 
  "/endpoint/applications/add-winget-app": React.lazy(() => import('./views/endpoint/applications/ApplicationsAddWinGet')), 
  "/endpoint/applications/add-office-app": React.lazy(() => import('./views/endpoint/applications/ApplicationsAddOffice')), 
  "/endpoint/applications/add-rmm-app": React.lazy(() => import('./views/endpoint/applications/ApplicationsAddRMM')), 
  "/endpoint/autopilot/add-device": React.lazy(() => import('./views/endpoint/autopilot/AutopilotAddDevice')), 
  "/endpoint/autopilot/add-profile": React.lazy(() => import('./views/endpoint/autopilot/AutopilotAddProfile')), 
  "/endpoint/autopilot/add-status-page": React.lazy(() => import('./views/endpoint/autopilot/AutopilotAddStatusPage')), 
  "/endpoint/autopilot/list-devices": React.lazy(() => import('./views/endpoint/autopilot/AutopilotListDevices')), 
  "/endpoint/autopilot/list-profiles": React.lazy(() => import('./views/endpoint/autopilot/AutopilotListProfiles')), 
  "/endpoint/autopilot/list-status-pages": React.lazy(() => import('./views/endpoint/autopilot/AutopilotListStatusPages')), 
  "/endpoint/MEM/list-policies": React.lazy(() => import('./views/endpoint/intune/MEMListPolicies')), 
  "/endpoint/MEM/list-compliance-policies": React.lazy(() => import('./views/endpoint/intune/MEMListCompliance')), 
  "/endpoint/MEM/list-appprotection-policies": React.lazy(() => import('./views/endpoint/intune/MEMListAppProtection')), 
  "/endpoint/MEM/edit-policy": React.lazy(() => import('./views/endpoint/intune/MEMEditPolicy')), 
  "/endpoint/MEM/ca-policies": React.lazy(() => import('./views/endpoint/intune/MEMCAPolicies')), 
  "/endpoint/MEM/add-policy": React.lazy(() => import('./views/endpoint/intune/MEMAddPolicy')), 
  "/endpoint/MEM/add-policy-template": React.lazy(() => import('./views/endpoint/intune/MEMAddPolicyTemplate')), 
  "/endpoint/MEM/list-templates": React.lazy(() => import('./views/endpoint/intune/MEMListPolicyTemplates')), 
  "/security/defender/deployment": React.lazy(() => import('./views/security/defender/DeployDefender')), 
  "/security/defender/list-defender": React.lazy(() => import('./views/security/defender/ListDefender')), 
  "/security/defender/list-defender-tvm": React.lazy(() => import('./views/security/defender/ListVuln')), 
  "/teams-share/onedrive/list": React.lazy(() => import('./views/teams-share/onedrive/OneDriveList')), 
  "/teams-share/sharepoint/list-sharepoint": React.lazy(() => import('./views/teams-share/sharepoint/SharepointList')), 
  "/teams-share/sharepoint/addsite": React.lazy(() => import('./views/teams-share/sharepoint/AddSite')), 
  "/teams-share/sharepoint/addsitebulk": React.lazy(() => import('./views/teams-share/sharepoint/AddSiteBulk')), 
  "/teams-share/teams/list-team": React.lazy(() => import('./views/teams-share/teams/TeamsListTeam')), 
  "/teams-share/teams/view-team-settings": React.lazy(() => import('./views/teams-share/teams/ViewTeamSettings')), 
  "/teams-share/teams/add-team": React.lazy(() => import('./views/teams-share/teams/TeamsAddTeam')), 
  "/teams-share/teams/teams-activity": React.lazy(() => import('./views/teams-share/teams/TeamsActivity')), 
  "/email/administration/contacts": React.lazy(() => import('./views/email-exchange/administration/ContactsList')), 
  "/email/connectors/list-connectors": React.lazy(() => import('./views/email-exchange/connectors/ConnectorList')), 
  "/email/connectors/deploy-connector": React.lazy(() => import('./views/email-exchange/connectors/DeployConnector')), 
  "/email/connectors/add-connector-templates": React.lazy(() => import('./views/email-exchange/connectors/AddConnectorTemplate')), 
  "/email/connectors/list-connector-templates": React.lazy(() => import('./views/email-exchange/connectors/ListConnectorTemplates')), 
  "/email/transport/list-rules": React.lazy(() => import('./views/email-exchange/transport/TransportRules')), 
  "/email/transport/deploy-rules": React.lazy(() => import('./views/email-exchange/transport/DeployTransport')), 
  "/email/transport/list-templates": React.lazy(() => import('./views/email-exchange/transport/ListTransportTemplates')), 
  "/email/transport/add-template": React.lazy(() => import('./views/email-exchange/transport/AddTransportTemplate')), 
  "/email/spamfilter/list-spamfilter": React.lazy(() => import('./views/email-exchange/spamfilter/Spamfilter')), 
  "/email/spamfilter/deploy": React.lazy(() => import('./views/email-exchange/spamfilter/DeploySpamfilter')), 
  "/email/spamfilter/list-templates": React.lazy(() => import('./views/email-exchange/spamfilter/ListSpamfilterTemplates')), 
  "/resources/management/list-rooms": React.lazy(() => import('./views/email-exchange/rooms/ListRooms')), 
  "/resources/management/room-lists": React.lazy(() => import('./views/email-exchange/rooms/ListRoomLists')), 
  "/resources/management/add-room": React.lazy(() => import('./views/email-exchange/rooms/AddRoomMailbox')), 
  "/email/tools/mailbox-restore-wizard": React.lazy(() => import('./views/email-exchange/tools/MailboxRestoreWizard')), 
  "/email/tools/mailbox-restores": React.lazy(() => import('./views/email-exchange/tools/MailboxRestores')), 
  "/email/tools/mail-test": React.lazy(() => import('./views/email-exchange/tools/MailTest')), 
  "/email/spamfilter/add-template": React.lazy(() => import('./views/email-exchange/spamfilter/AddSpamfilterTemplate')), 
  "/email/administration/edit-mailbox-permissions": React.lazy(() => import('./views/email-exchange/administration/EditMailboxPermissions')), 
  "/email/administration/add-shared-mailbox": React.lazy(() => import('./views/email-exchange/administration/AddSharedMailbox')), 
  "/email/administration/add-contact": React.lazy(() => import('./views/email-exchange/administration/AddContact')), 
  "/email/administration/edit-calendar-permissions": React.lazy(() => import('./views/email-exchange/administration/EditCalendarPermissions')), 
  "/email/administration/view-mobile-devices": React.lazy(() => import('./views/email-exchange/administration/ViewMobileDevices')), 
  "/email/administration/edit-contact": React.lazy(() => import('./views/email-exchange/administration/EditContact')), 
  "/email/administration/mailboxes": React.lazy(() => import('./views/email-exchange/administration/MailboxesList')), 
  "/email/administration/deleted-mailboxes": React.lazy(() => import('./views/email-exchange/administration/DeletedMailboxes')), 
  "/email/administration/mailbox-rules": React.lazy(() => import('./views/email-exchange/administration/MailboxRuleList')), 
  "/email/administration/Quarantine": React.lazy(() => import('./views/email-exchange/administration/QuarantineList')), 
  "/email/administration/tenant-allow-block-lists": React.lazy(() => import('./views/email-exchange/administration/ListTenantAllowBlockList')), 
  "/email/administration/add-tenant-allow-block-list": React.lazy(() => import('./views/email-exchange/administration/AddTenantAllowBlockList')), 
  "/email/reports/mailbox-statistics": React.lazy(() => import('./views/email-exchange/reports/MailboxStatisticsList')), 
  "/email/reports/SharedMailboxEnabledAccount": React.lazy(() => import('./views/email-exchange/reports/SharedMailboxEnabledAccount')), 
  "/email/reports/mailbox-cas-settings": React.lazy(() => import('./views/email-exchange/reports/MailboxClientAccessSettingsList')), 
  "/email/reports/message-trace": React.lazy(() => import('./views/email-exchange/reports/MessageTrace')), 
  "/cipp/user-settings": React.lazy(() => import('./views/cipp/UserSettings')), 
  "/email/reports/phishing-policies": React.lazy(() => import('./views/email-exchange/reports/PhishingPoliciesList')), 
  "/email/reports/malware-filters": React.lazy(() => import('./views/email-exchange/reports/MalwareFilters')), 
  "/email/reports/safelinks-filters": React.lazy(() => import('./views/email-exchange/reports/SafeLinksFilters')), 
  "/email/reports/safeattachments-filters": React.lazy(() => import('./views/email-exchange/reports/SafeAttachmentsFilters')), 
  "/security/incidents/list-alerts": React.lazy(() => import('./views/security/incidents/ListAlerts')), 
  "/security/incidents/list-incidents": React.lazy(() => import('./views/security/incidents/ListIncidents')), 
  "/security/reports/list-device-compliance": React.lazy(() => import('./views/security/reports/ListDeviceComplianceReport')), 
  "/license": React.lazy(() => import('./views/pages/license/License')), 
  "/cipp/settings": React.lazy(() => import('./views/cipp/app-settings/CIPPSettings')), 
  "/cipp/extensions": React.lazy(() => import('./views/cipp/Extensions')), 
  "/cipp/extension-sync": React.lazy(() => import('./views/cipp/ExtensionSync')), 
  "/cipp/setup": React.lazy(() => import('./views/cipp/Setup')), 
  "/tenant/administration/securescore": React.lazy(() => import('./views/tenant/administration/SecureScore')), 
  "/tenant/administration/gdap": React.lazy(() => import('./views/tenant/administration/GDAPWizard')), 
  "/tenant/administration/gdap-invite": React.lazy(() => import('./views/tenant/administration/GDAPInviteWizard')), 
  "/tenant/administration/gdap-role-wizard": React.lazy(() => import('./views/tenant/administration/GDAPRoleWizard')), 
  "/tenant/administration/gdap-roles": React.lazy(() => import('./views/tenant/administration/ListGDAPRoles')), 
  "/tenant/administration/gdap-relationships": React.lazy(() => import('././views/tenant/administration/ListGDAPRelationships')), 
  "/tenant/administration/appapproval": React.lazy(() => import('./views/cipp/AppApproval')), 
  "/tenant/administration/gdap-status": React.lazy(() => import('./views/tenant/administration/ListGDAPQueue')), 
  "/tenant/standards/list-standards": React.lazy(() => import('./views/tenant/standards/ListStandards')), 
  "/tenant/administration/tenant-offboarding-wizard": React.lazy(() => import('./views/tenant/administration/TenantOffboardingWizard')), 
  "/tenant/administration/tenant-onboarding": React.lazy(() => import('./views/tenant/administration/TenantOnboarding')), 
  "/tenant/administration/tenant-onboarding-wizard": React.lazy(() => import('./views/tenant/administration/TenantOnboardingWizard')), 
}
export default importsMap