# BookPage review

## Scope

The `/book-page` route currently presents a book landing page with hard-coded publication statistics, chapter previews, endorsements, preorder volume, an email waitlist, and a promised signed copy plus SKY444 airdrop.

## Risks identified

The screen currently presents `4,444` pre-orders, `12` languages, named early-reader endorsements, a limited first edition, and an exclusive token airdrop without typed service data, publication records, consent handling, email delivery, or token issuance infrastructure. The waitlist form mutates only local React state while displaying a success message that implies a durable subscription.

## Safe upgrade boundary

Preserve the book concept and visual identity, but present a local editorial preview. Replace unsupported metrics with unavailable states, label chapter entries as local previews, remove unverified endorsements and token claims, and make the notify action an explicit no-op that does not collect, transmit, subscribe, or retain an email address. Use strict types and accessible interaction states.

## Validation plan

Run Prettier, TypeScript diagnostics, diff checks, and a browser checkpoint at `/book-page`. Verify the blocked notification action and ensure the page makes no publication, preorder, email, payment, token, or marketing claim.
