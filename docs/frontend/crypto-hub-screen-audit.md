# Crypto Hub Screen Audit

## Screen

Crypto Hub

## Route

`/crypto-hub`, registered in `client/src/App.tsx` and linked from `DashboardLayout`.

## Current status

**BLOCKED for capability-complete modernization; PARTIAL for visual modernization.** The screen has a substantial tabbed interface, but its declared token procedures are not present in the current backend router.

## Files and dependencies

The primary screen is `client/src/pages/CryptoHub.tsx`. It imports the tRPC client, the canonical auth hook, shared buttons, inputs, badges, cards, tabs, selects, progress, sliders, toast notifications, login URL helpers, and Lucide icons. The application router is defined in `server/routers.ts`.

## Declared capabilities in the screen

The current UI exposes mining, swap, stake, burn, wallet, and transaction-history tabs. It also exposes token selectors, hash-power controls, mining progress, a mining terminal, balances, portfolio value, live-price ticker, slippage controls, estimated swap output, staking lock periods, burn confirmation, and transaction history.

## Actual API contract findings

The current `server/routers.ts` contains generic routers such as `blockchain`, `staking`, `economy`, and `gamefi`, each with only generic `list`, `get`, `create`, `update`, and `delete` procedures. It does **not** contain a `token` router. The screen currently references `trpc.token.allBalances`, `trpc.token.transactions`, `trpc.token.priceHistory`, `trpc.token.mine`, `trpc.token.multiSwap`, `trpc.token.multiStake`, and `trpc.token.burn`. These procedures are absent from the actual router registry and must not be invented in the frontend.

## Immediate defects identified

The screen references `isAuthenticated` without calling `useAuth()` in the component. It uses multiple `as any` casts for token mutations and a cast for price history data. It defines fallback prices for SKY444 and USDT while presenting a `LIVE` badge, which can misrepresent unavailable market data. It presents operational controls for mining, swaps, staking, and burning even though the corresponding backend procedures are missing. The login button in the unauthenticated branch does not use `getLoginUrl()` and therefore does not currently initiate the configured authentication flow. Several labels, including instant payout, pool fee, minimum payout, and token-value implications of burning, require backend and financial-domain verification before they can be presented as facts.

## Required states

The screen needs explicit loading, empty, error, unavailable, authentication-required, configuration-required, and success states. Until a real token router exists, mining, swap, staking, burning, balances, prices, and transaction history should be labeled **Backend Required**, **Live Data Unavailable**, or **Integration Required** as appropriate. No simulated reward, fake balance, fallback market price, fake transaction, or fabricated blockchain confirmation may be presented as live functionality.

## Responsive and accessibility requirements

The tab bar must remain usable on mobile through horizontal scrolling or a deliberate responsive layout. Token selectors and action controls need semantic button labels, visible focus states, keyboard operation, and clear status announcements. Mining progress and mutation feedback should use accessible status semantics. Destructive burn actions require a clear confirmation dialog or equivalent accessible confirmation pattern. Error and unavailable states need readable explanations and retry guidance where retry is technically possible.

## Modernization strategy

First repair the component’s auth hook usage and remove runtime/type hazards without creating backend procedures. Then convert unsupported token operations to honest integration-state cards while preserving the existing visual structure and future extension points. Keep the tab architecture, shared components, and route. Replace hardcoded live/financial claims with source/status badges. Add a context-specific live tip, such as: “Verify network and transaction details before submitting.” Any future operational action must be re-enabled only after the corresponding actual router procedure, authentication requirement, input schema, output schema, and error behavior are verified.

## Completion gate

Crypto Hub cannot be marked complete until the route renders without runtime exceptions, the actual API contract is documented, the unavailable states are tested, the page is visually reviewed at desktop/tablet/mobile widths, accessibility behavior is reviewed, and the production build succeeds.

## Next screen

After Crypto Hub is recorded, the next screen is **Wallet — `/wallet`**.

## Browser review

The `/crypto-hub` route renders successfully in the frontend-only preview. With OAuth unavailable, it presents a centered authentication-required card and an explicit configuration message rather than attempting private queries or showing fake balances. The rendered state has clear hierarchy, readable contrast, and a compact responsive card layout. Authenticated tab-state review remains blocked until a real session and token backend are available.
