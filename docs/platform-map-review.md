# PlatformMap review

## Scope

The `/platform-map` route currently presents a large hard-coded inventory of platform groups and routes, with live/coming labels, rarity values, aggregate feature counts, and direct links. It treats route presence as proof of live feature availability.

## Risks identified

The map can overstate product availability by reporting totals, live counts, legendary counts, feature rarity, and operational status without service health or route capability evidence. Direct links may lead to unavailable, read-only, or unsupported screens. Hard-coded inventories also drift as routes change.

## Safe upgrade boundary

Preserve the map as a local navigation catalog, but label route registration separately from feature availability. Replace aggregate live and rarity claims with explicit unavailable or review states, make the catalog strictly typed, and disclose that route presence is not a production guarantee. Links may remain for navigation, but no platform action, entitlement, or operational conclusion is implied.

## Validation plan

Run Prettier, TypeScript diagnostics, diff checks, and a browser checkpoint at `/platform-map`. Verify search/filter interactions remain local and that the page makes no fabricated live-feature, count, rarity, or readiness claim.
