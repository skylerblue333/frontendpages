# AttributionModeling visual checkpoint

## Route and environment

The screen was verified at `/attribution-modeling` using the direct Vite client because the repository development server remains blocked by a pre-existing `cookie` ESM export mismatch in `server/_core/sdk.ts`. The direct client rendered the route without identity, campaign, conversion, revenue, model, or report dependencies.

## Rendered checkpoint

The page presents a responsive dark SKYCOIN4444 attribution-review layout with a local-preview badge, reset control, prominent unavailable-state notice, channel filters, journey-state filters, three typed journey fixtures, selected journey source/identity/conversion/revenue fields, boundary guidance, posture guidance, and an aria-live status region.

## Interaction evidence

The `Export unavailable` action was activated for the selected Cross-channel journey. The live status changed to: `Export is unavailable locally. No source, identity, journey, conversion, revenue, attribution, export, or report request was started.` No identity resolution, conversion query, revenue report, file, or marketing operation was observed.

## Safety result

No source, campaign, user identity, journey, touchpoint, conversion, revenue, attribution credit, audience, report, export, or marketing conclusion was created or queried. No conversion rate, revenue, campaign winner, channel credit, or user journey was fabricated.

## Artifacts

- Initial screenshot: `/home/ubuntu/screenshots/localhost_2026-08-17_14-58-20_8856.webp`
- Blocked-export screenshot: `/home/ubuntu/screenshots/localhost_2026-08-17_14-58-28_2284.webp`
- Route text capture: `/home/ubuntu/page_texts/localhost_5175_attribution-modeling.md`
