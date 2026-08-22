# frontendpages Screen Inventory

**Repository:** `skylerblue333/frontendpages`  
**Branch audited:** `master`  
**Audit date:** 2026-08-22

## Verified counts

| Measure | Count | Meaning |
|---|---:|---|
| Tracked files | 7,593 | All files in the shallow checkout |
| TypeScript React files | 1,160 | Includes screens, shared components, layouts, and entry points |
| Files under `client/src/pages` | 1,086 | All page-directory files, including nested section components |
| Unique page basenames | 1,073 | Basenames collapse nested duplicates such as `AiCore` |
| Lazy-loaded page imports in `App.tsx` | 1,055 | Files referenced by the current lazy-import registry |
| Route elements in `App.tsx` | 1,060 | Includes `/`, the registered pages, and the fallback route |
| Missing lazy-import targets | 0 | Every current lazy import resolves to a file |

## Interpretation

The current checkout does **not** prove that 1,155 distinct screens are implemented. It contains 1,086 files beneath the pages directory, 1,073 unique page basenames, and 1,055 lazy-loaded page imports. The remaining page-directory files include nested Mission Control sections, shared helpers, duplicate-name variants, and pages that are not currently registered in `App.tsx`.

The repository’s `App.tsx` comment claims “1057 pages,” while the measured lazy-import count is 1,055 and the measured route-element count is 1,060. These are different concepts and should not be presented as equivalent. The correct next action is to classify the unregistered files and wire only genuine default-export screens after checking their intended paths and behavior.

## Unregistered-file review

The audit found 18 basename-level entries absent from the lazy-import registry. Several are clearly shared Mission Control sections (`MarketplaceSection`, `MissionsSection`, `OpportunitiesSection`, `ReputationSection`, `StartupSection`, `TodaySection`, and `shared`) rather than standalone screens. `Home` and `NotFound` are statically imported. `AiCore` also has a nested variant under `client/src/pages/wave2/` in addition to the registered top-level `AICore` screen. The remaining candidates require route ownership review before being exposed.

## Integrity and safety conclusion

No new screens were fabricated to reach a target number. Existing source files remain the source of truth. Any screen that depends on unavailable financial, blockchain, AI, or operational integrations must continue to expose an unavailable, test, or local-preview state rather than inventing production data.
