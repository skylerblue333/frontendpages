# CohortAnalysis visual checkpoint

## Route and environment

The screen was verified at `/cohort-analysis` using the direct Vite client because the repository development server remains blocked by a pre-existing `cookie` ESM export mismatch in `server/_core/sdk.ts`. The direct client rendered the route without identity events, membership rules, aggregation, time-window, or analytics dependencies.

## Rendered checkpoint

The page presents a responsive dark SKYCOIN4444 cohort-review layout with a local-preview badge, reset control, prominent unavailable-state notice, lifecycle filters, cohort-state filters, three typed cohort fixtures, selected cohort identity/membership/count/dates/retention fields, privacy and aggregation guidance, and an aria-live status region.

## Interaction evidence

The `Calculate unavailable` action was activated for the selected Onboarding cohort. The live status changed to: `Calculate is unavailable locally. No identity, membership, count, date, retention, conversion, revenue, or analytics request was started.` No identity resolution, membership count, retention, conversion, revenue, or analytics operation was observed.

## Safety result

No user identity, cohort membership, count, date, retention rate, conversion, revenue, or analytics conclusion was fabricated or queried.

## Artifacts

- Initial screenshot: `/home/ubuntu/screenshots/localhost_2026-08-17_15-24-24_5070.webp`
- Blocked-calculate screenshot: `/home/ubuntu/screenshots/localhost_2026-08-17_15-24-34_6635.webp`
- Route text capture: `/home/ubuntu/page_texts/localhost_5175_cohort-analysis.md`
