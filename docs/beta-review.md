# Beta screen review

## Scope

The `/beta` route currently presents a beta-program marketing page with hard-coded feature statuses, token rewards, fee discounts, membership thresholds, trading signals, and an application flow. It links to staking and crypto routes without establishing eligibility, custody, pricing, market-data, or beta-service contracts.

## Risks identified

The existing page makes unverified claims including `500 SKY444 bonus tokens`, `Lifetime 30% fee discount`, `AI Trading Signals` marked live, a `100+ SKY444 tokens` application threshold, and invite-only access. These values could be interpreted as financial, promotional, or production availability claims. The feature list is not backed by a typed service response or an availability contract.

## Safe upgrade boundary

Replace the page with a strictly typed local beta-readiness catalog. Every feature is labeled by a local review state and explicitly avoids claiming live access, token balances, rewards, fee discounts, trading signals, or eligibility. The interface may filter concepts and disclose unavailable application, eligibility, reward, and access operations, but it must not mutate accounts, issue assets, submit applications, or query financial data.

## Validation plan

Run Prettier, TypeScript diagnostics, diff checks, and a browser checkpoint at `/beta`. Activate the blocked application action and capture the explicit no-op status. Preserve the route and SKYCOIN4444 visual language.
