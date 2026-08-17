# AnalyticsReports visual checkpoint

## Route and environment

The screen was verified at `/analytics-reports` using the direct Vite client because the repository development server remains blocked by a pre-existing `cookie` ESM export mismatch in `server/_core/sdk.ts`. The direct client rendered the route without report, source, identity, scheduler, export, recipient, or delivery dependencies.

## Rendered checkpoint

The page presents a responsive dark SKYCOIN4444 reporting layout with a local-preview badge, reset control, prominent reporting-unavailable notice, search input, `New unavailable` action, report-state filters, three typed report fixtures, selected report metadata for source/freshness/recipients/schedule, report boundary guidance, trust posture guidance, and an aria-live status region.

## Interaction evidence

The `Export unavailable` action was activated for the selected Content performance fixture. The live status changed to: `Export is unavailable locally. No source, report, identity, query, export, recipient, schedule, notification, or delivery request was started.` No report, file, source query, recipient notification, or delivery operation was observed.

## Safety result

No report, metric, identity, source, recipient, schedule, export, query, notification, or file was created. No user count, conversion, revenue, audience, freshness timestamp, delivery state, or business conclusion was fabricated.

## Artifacts

- Initial screenshot: `/home/ubuntu/screenshots/localhost_2026-08-17_14-39-56_1924.webp`
- Blocked-export screenshot: `/home/ubuntu/screenshots/localhost_2026-08-17_14-40-03_3873.webp`
- Route text capture: `/home/ubuntu/page_texts/localhost_5175_analytics-reports.md`
