# BrowserExtension review

## Scope

The `/browser-extension` route currently markets a ShadowChat browser extension with store installation claims, wallet connection, page monitoring, local AI, encrypted tunnels, open-source and audit claims, zero data collection, and a `500 SKY444` beta reward.

## Risks identified

The page presents security and privacy guarantees without a verified extension package, manifest, store listing, telemetry configuration, cryptographic design, audit report, wallet connector, or reward ledger. The phrase that the extension silently monitors every page is especially sensitive and conflicts with least-privilege browser-extension design. The CTA reports successful beta enrollment without collecting or submitting any user data.

## Safe upgrade boundary

Replace the marketing flow with a strictly typed local extension-readiness catalog. Explicitly mark store, package, permissions, wallet, overlay, privacy review, security audit, telemetry posture, and beta enrollment as unavailable. Do not claim local AI, encryption, audits, zero telemetry, page monitoring behavior, wallet access, or token rewards. Any action must be a no-op with clear status.

## Validation plan

Run Prettier, TypeScript diagnostics, diff checks, and a browser checkpoint at `/browser-extension`. Activate the blocked enrollment action and verify no wallet, browser, account, telemetry, email, reward, or extension installation operation starts.
