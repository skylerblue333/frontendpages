# MobileApp review

## Scope

The `/mobile-app` route currently markets a mobile application with platform feature comparisons, iOS and Android requirements, store/download language, a waitlist count, and a promised `1,000 SKY444` bonus.

## Risks identified

The page claims production feature availability, system requirements, `50,000+` waitlist members, launch notification, and token rewards without a connected mobile package, store listing, release channel, waitlist service, or reward ledger. The waitlist CTA reports success without collecting or submitting an address.

## Safe upgrade boundary

Replace the page with a strictly typed local mobile-readiness catalog. Preserve platform comparison and iOS/Android tabs as local documentation, but mark package, store, download, waitlist, release, feature availability, and reward states unavailable. Do not claim user counts, launch timing, token rewards, or mobile production support. All actions are no-ops.

## Validation plan

Run Prettier, TypeScript diagnostics, diff checks, and a browser checkpoint at `/mobile-app`. Activate the blocked waitlist action and verify no email, notification, account, reward, store, or download operation starts.
