# EscrowShop review

## Scope

The `/escrow-shop` route currently presents marketplace listings, hard-coded multi-token price fields, stock, user-dependent purchase buttons, and a create-listing action. The implementation uses untyped listing data and invokes a purchase mutation while describing the marketplace as protected by secure escrow transactions.

## Risks identified

Marketplace, token, stock, wallet, payment, and escrow claims require authoritative listing data, network validation, wallet authorization, order lifecycle handling, transaction verification, dispute handling, custody controls, and auditability. None is established by the screen. A purchase button must never imply transaction success or mutate balances without a verified backend contract.

## Safe upgrade boundary

Replace the page with a strictly typed local marketplace-readiness catalog. Keep category and selected-listing interactions local, but mark listings, prices, balances, stock, orders, wallet connection, escrow, purchase, and seller listing as unavailable. All marketplace actions must be explicit no-ops and must not initiate transactions, payments, account mutations, or token operations.

## Validation plan

Run Prettier, TypeScript diagnostics, diff checks, and a browser checkpoint at `/escrow-shop`. Activate blocked purchase and seller actions and verify no transaction or account mutation starts.
