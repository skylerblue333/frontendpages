# AffiliateDashboard visual checkpoint

## Route and environment

The screen was verified at `/affiliate-dashboard` using the direct Vite client because the repository development server remains blocked by a pre-existing `cookie` ESM export mismatch in `server/_core/sdk.ts`. The direct client rendered the route without any referral, account, payout, or external-sharing dependency.

## Rendered checkpoint

The page presents a responsive dark SKYCOIN4444 affiliate layout with a local-preview badge, reset control, prominent unavailable-state notice, accessible `Overview`, `Referral link`, and `Program rules` tabs, unavailable verified-referrals/earnings/payout cards, local program-component state filters, account and financial safety panels, and an aria-live status region.

## Interaction evidence

The `Referral link` tab shows only the explanatory placeholder `Referral link unavailable — local preview only`. The copy control is explicitly scoped to copying that explanatory text. The `Share unavailable` action was activated and changed the live status to: `Social sharing is unavailable locally. No identity, attribution, account, payment, wallet, external share, or payout request was started.` No external window opened and no share or payout request was emitted.

## Safety result

No authentication, user identity, referral code, click attribution, participant, conversion, earnings, commission, token balance, payout, wallet, payment, notification, analytics, or external URL operation was observed. No financial value or referral performance was represented as live.

## Artifacts

- Overview screenshot: `/home/ubuntu/screenshots/localhost_2026-08-17_14-35-15_4024.webp`
- Referral-link screenshot: `/home/ubuntu/screenshots/localhost_2026-08-17_14-35-21_9055.webp`
- Blocked-share screenshot: `/home/ubuntu/screenshots/localhost_2026-08-17_14-35-27_6995.webp`
- Route text capture: `/home/ubuntu/page_texts/localhost_5175_affiliate-dashboard.md`
