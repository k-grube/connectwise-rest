# API Spec Errors

Known issues in the ConnectWise-published OpenAPI specs that our generator has to
work around or that consumers should be aware of.

## Automate (swagger 25.0.5)

**Computers.getComputerSoftwareList (duplicate)**  
`Computers_GetComputerSoftwareList` is used as the operationId for two distinct
paths (`/api/v1/Computers/{computerId}/Software` and `/api/v1/Computers/Software`).
Our generator auto-disambiguates the globally-unique form for type emission and the
section-local method name by appending a path-derived suffix, so both endpoints are
reachable but under slightly different TypeScript method names.

**System.ApiToken_Get (renamed in 2025.16)**  
Previously `System.ApiToken_Get`; now exposed as `System.apiToken_GetAuthInformation`
in the new spec. Consumers on v1.x should expect the rename in v2.

## Manage (2026.11)

**Member identifier routes**

Three paths under `/system/info/members/`, `/system/info/members/memberhash/`, and
`/system/members/` end with the truncated placeholder
`{memberIdentifier:regex(^(types. |(`. Before emitting types and clients, the
Manage generator normalizes constrained placeholders on any route to `{name}`.
Complete constraints (including regex quantifiers) are stripped. Truncated regex
constraints are recovered only at the end of a path without slashes in the
truncated text; ambiguous templates and normalized path collisions fail generation.
Operation IDs containing the leaked constraint are rebuilt from the normalized
path, and missing constrained path parameters are supplied as strings. Existing
parameter schemas and intentional operation IDs are preserved. Valid upstream
paths pass through unchanged. Normalization applies to both generated types and
clients without modifying the source JSON.

The recovered member routes are inferred from the placeholders and have not been
verified against a live server.

**Finance.getFinanceCompanyFinanceByIdStatementPdf**

The successful response describes a PDF attachment but omits `content` and its
schema. The generator selects the successful response instead of the 502 error
response and emits `PDFResponse` with binary decoding.

**System.postSystemWorkflowsTestDraft**

The request-body description is prose (`Draft workflow and event`), so the
generator uses the schema name as the parameter name.

**Company.deleteCompanyContactsById**  
Defines `transferContactId` but its `in` location changed between spec versions. v1
treated it as a distinct parameter; v2 collapses it into the `params` query object.

**Company.postCompanyCompanyPickerItemsClear**  
Specifies `clearPickerRequest` as a `path` variable but it is not present in the URL
template. Our generator resolves the schema `$ref` to a typed body-shaped parameter.

**Project.postProjectTicketNoteByIdMarkAs**  
Missing explicit return type in the spec. Generator falls back to `unknown`/`any`.

**System.getSystemAudittrail / System.getSystemAudittrailCount**  
"Audittrail" is a typo in the spec (should be "AuditTrail"); `getRequest` specified
as `path` but should be `query`.

**System.getSystemWorkflowsByParentIdEventsByIdTest**  
Missing return type.

**System.getSystemWorkflowsUserdefinedfieldsByGrandparentIdActionsByParentId**  
Missing slash in path definition.
