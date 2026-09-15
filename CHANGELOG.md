# Changelog

## 2.0.0

### Features

#### Binary endpoints typed as `Buffer`

`getFinanceInvoicesByIdPdf`, `getSystemDocumentsByIdDownload`, and
`getSystemDocumentsByIdThumbnail` return `Promise<PDFResponse>` /
`Promise<OctetStreamResponse>` (both `Buffer`), matching what axios actually
hands back for `arraybuffer` responses.

#### JSON-patch types on both products

Manage and Automate `PatchOperation` schemas generate as discriminated unions
(`add`/`replace` require a value, `remove` doesn't) instead of shapes that
rejected every real value.

#### Typed `fields` and `orderBy` on Manage common parameters

`CommonParameters` is now generic over the endpoint's response model. `fields`
accepts an array of model field paths (nested via `/`, e.g. `company/id`) and
`orderBy` accepts `{ field, direction }` objects, both with autocomplete and
compile-time validation. Arrays are serialized to the comma-separated strings the
Manage API expects at request time.

The plain-string forms (`fields: 'id,summary'`, `orderBy: 'id asc'`) remain
accepted, both at the type level and at runtime, so existing code compiles
unchanged. Bare `CommonParameters` (no type argument) stays valid and
unconstrained.

### Breaking changes

#### Axios instance count (correctness fix)

In v1.x, every generated sub-API class extended `Automate` or `Manage` directly, which
meant each sub-API instance ran its own parent constructor and called
`axios.create()`. A single `new AutomateAPI(options)` or `new ManageAPI(options)` call
could allocate ~19 Automate + 12 Manage axios instances, each with independent auth
state, interceptor chains, and connection pools. Token refreshes could go out of sync
across sub-APIs.

v2.0.0 reworks this: sub-API classes now extend `AutomateBaseAPI` / `ManageBaseAPI`,
which hold a private reference to a single parent client instance. Every
`new AutomateAPI(options)` allocates exactly one axios client per product; all
sub-APIs share it.

If you were (knowingly or accidentally) relying on per-sub-API interceptors or
per-sub-API auth isolation, your behavior will change.

#### Lazy sub-API instantiation

Sub-APIs are now exposed as lazy getters on the aggregator. First access creates the
instance and caches it via `Object.defineProperty`; subsequent accesses return the
cached value. Behavior is the same as before for normal use; only detectable via
`Object.keys(cwa)` before first access (no enumerable properties until touched).

#### Automate spec re-grouping (new swagger 25.0.5)

The published Automate spec was reorganized. Some v1 classes disappear and new classes
appear:

| v1 class                            | v2 class                                      |
| ----------------------------------- | --------------------------------------------- |
| `AVTemplatePoliciesAPI`             | merged into `GroupsAPI`                       |
| `ClientsAPI`                        | `CompanyAPI`                                  |
| `DrivesAPI`                         | `StatisticsAPI`                               |
| `LocationsAPI`                      | merged into `ProbeAPI`                        |
| `MaintenanceWindowDefinitionsAPI`   | `MaintenanceWindowsAPI`                       |
| `ScriptingAPI`                      | `ScriptsAPI`                                  |
| `UserProfilesAPI`                   | `PresentationLayerAPI`                        |
| (new)                               | `BatchAPI`                                    |

Method names within unchanged classes (`CommandsAPI`, `ComputersAPI`, `ContactsAPI`,
`DataViewsAPI`, `EventLogsAPI`, `MonitorsAPI`, `NetworkDevicesAPI`, `PatchingAPI`,
`RemoteAgentAPI`, `SearchesAPI`, `SystemAPI`, `TicketsAPI`) are preserved where the
underlying operation is preserved. New endpoints appear as new methods; removed
endpoints are gone.

**Automate Tickets path fix.** The v1 `TicketsAPI` pointed at
`/cwa/api/v1/Tickets`, which produced `https://host/cwa/cwa/api/v1/Tickets` (double
`/cwa` prefix) because the client base URL already includes `/cwa`. The new spec
corrects this. If you were manually stripping the duplicate `/cwa`, stop, it's now
correct by default.

#### Manage spec update (2022.1 -> 2025.16)

Manage upgraded from spec 2022.1 to 2025.16. Path count: 1,647 -> 1,838 (+191). Class
shape is unchanged (same 12 classes: `CompanyAPI`, `ConfigurationsAPI`, `ExpenseAPI`,
`FinanceAPI`, `MarketingAPI`, `ProcurementAPI`, `ProjectAPI`, `SalesAPI`,
`ScheduleAPI`, `ServiceAPI`, `SystemAPI`, `TimeAPI`). Most changes are additive (+91
methods on the public surface), with a handful of parameter-shape changes.

Notable method signature change:
- `CompanyAPI.deleteCompanyContactsById(id, transferContactId)` ->
  `CompanyAPI.deleteCompanyContactsById(id, params)`. `transferContactId` now lives
  inside the `params` query object.

#### Top-level `CommonParameters` export removed

`CommonParameters` is now defined per product (different shapes for Automate and
Manage), so it is no longer re-exported from the top-level `connectwise-rest` module.
Import it from the product namespace instead:

```ts
// before
import { CommonParameters } from 'connectwise-rest'
// after
import type { Manage } from 'connectwise-rest'
type CommonParameters = Manage.CommonParameters
```

### Added

- **File upload and download support.** Endpoints that accept
  `multipart/form-data` (e.g. `SystemAPI.postSystemDocuments`) now accept either a
  typed object or a pre-built `FormData`. The runtime converts the object to
  FormData automatically and sets `Content-Type: multipart/form-data`. Endpoints
  that return `application/octet-stream`, `application/pdf`, or `text/html` now
  configure axios with the correct `responseType` so the consumer gets a proper
  `Buffer` / binary payload / string instead of a corrupted JSON-parse result. The
  previously hand-rolled interceptor for `/system/documents/{id}/download` has been
  removed; the generic mechanism covers every binary endpoint in both products.
- `RequestOptions` (the untyped `client.request()` API) gains two optional fields:
  `contentType?: 'json' | 'multipart'` and `responseType?: 'json' | 'arraybuffer' |
  'blob' | 'stream' | 'text' | 'document'`. Useful if you need to hit an endpoint
  without typings or override the generator's choice.
- `toFormData(input)` helper exported from `BaseAPI`. Converts a plain object into
  a `FormData`. Primitives get stringified; `Blob` / `Buffer` / `File` /
  `ReadStream` pass through. The generator emits this for multipart endpoints, but
  you can call it directly too.
- `SECTIONS` constants: `AutomateSECTIONS` and `ManageSECTIONS` are exported from the
  top-level module. Each is a readonly tuple of section property names (e.g.
  `'TicketsAPI'`). Useful for tests and introspection.
- `AutomateBaseAPI` / `ManageBaseAPI` exported classes that generated sub-APIs extend.

### Tooling

- Node.js `>= 18` required (was `>= 12`).
- TypeScript upgraded to `^5.9` (was `^4.6`).
- ESLint upgraded to 9.x with flat config (`eslint.config.mjs`)
- `tsconfig.json` target bumped to `ES2022`, `sourceMap: true` added, `strict: true` preserved.

### Generator

- Unified orchestrator pattern mirroring `halopsa`: `generator/automate-generator.js`
  and `generator/manage-generator.js` each run openapi-typescript for types, then call
  shared codegen in `generator/generator.js` for per-section files, then emit the
  aggregator with lazy getters, then run `eslint --fix`.
- Automate operationId disambiguation: when two distinct paths share an operationId
  (e.g. `Computers_GetComputerSoftwareList`), the merged spec receives a
  path-derived suffix so openapi-typescript sees globally-unique ids; the emitted
  method name is also disambiguated at the section-local level.
- Path parameters with `$ref` schemas are now resolved to the referenced type
  (previously produced an empty type annotation for certain spec shapes).

## 1.3.0 and earlier

See git history.
