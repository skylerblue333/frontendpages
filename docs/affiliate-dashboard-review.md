# AffiliateDashboard review

## Shared-progress selection

The pushed `skylerblue333/frontendpages` repository now contains the prior frontend screen upgrades through AgentMarketplace (`bc25f52`). AffiliateDashboard is registered in the application router and currently depends on authenticated referral queries, derives a referral code from the user ID, exposes referral links, presents unsupported earnings and tier values, opens external share windows, lists untyped referred users, and submits a withdrawal toast without a payout service.

## Upgrade scope

Replace the live-looking affiliate dashboard with a local affiliate-program preview. Provide typed program and referral fixtures, clearly unavailable totals, status and attribution explanations, accessible tabs for overview, referral link, and program rules, a copy action that only copies a local preview string, and blocked share and withdrawal actions that do not open windows, post links, move funds, or mutate account state.

## Safety boundaries

No authentication, referral tree, user identity, attribution, conversion, earnings, commission, token balance, payout, payment, wallet, network, share, notification, analytics, or external URL request is made. No referral code is presented as a real personal code. No conversion, earnings, tier, payout, participant, or performance metrics are fabricated. Future affiliate functionality requires verified program terms, consent, attribution provenance, anti-abuse controls, payout reconciliation, tax handling, identity controls, and auditable wallet/payment operations.
