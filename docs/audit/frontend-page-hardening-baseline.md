# SKYCOIN4444 frontend page-hardening baseline

## Repository synchronization

The local branch is synchronized with `origin/master` at commit `0397dc2` (`feat: harden retention analytics preview`). The preceding local work, including the DataRetention upgrade, was preserved by rebasing onto the concurrent remote commit. The branch is clean after reconciliation.

## Inventory

The repository contains **1,064 page component files** under `client/src/pages`, with **1,067 route declarations** and **1,062 lazy page imports** in `client/src/App.tsx`. There are currently **70 review documents** and **70 visual checkpoints**. The difference between page files and routes reflects route aliases, non-page route components, and architecture-specific registrations that require contract review rather than blind rewriting.

| Baseline signal | Current observation | Hardening implication |
|---|---:|---|
| Page component files | 1,064 | Remaining work must be batched and non-overlapping. |
| Route declarations | 1,067 | Route aliases and duplicate registrations need reconciliation. |
| Lazy page imports | 1,062 | Import coverage is high but not equivalent to functional coverage. |
| Review documents | 70 | Completed screens have documented scope boundaries. |
| Visual checkpoints | 70 | Completed screens have browser evidence. |
| `useAuth` page imports | 258 | Authentication patterns need consistency and behavior review. |
| `trpc` page imports | 261 | API contracts and unused imports require audit; no frontend mutation should be assumed safe. |
| Generic placeholder signals | Broadly present across the remaining inventory | Prioritize replacement with truthful unavailable-state interfaces or real contract-backed behavior. |
| Repository TypeScript baseline | 402 errors | Existing shared-infrastructure debt must be tracked separately from screen-specific regressions. |
| Repository-wide Prettier baseline | 993 files need formatting | Formatting must be targeted by hardening batch to avoid noisy cross-agent diffs. |

## Initial risk classification

The remaining screens fall into four primary hardening groups. Generic authenticated-only placeholders are the largest group and should be upgraded to typed, accessible, local-only previews unless authoritative services already exist. Existing custom screens with `trpc` or authentication imports require API-contract, authorization, error-state, and secret-boundary review. Financial, wallet, blockchain, identity, admin, security, and personal-data pages require high-risk review before any interaction is enabled. Large custom screens require focused regression and accessibility checks rather than generic replacement.

The first hardening batch will use a small, non-overlapping group of generic data/administration screens, beginning with DataVisualization, DatabaseManagement, and DepartmentManagement. Each screen will receive an individual review scope, implementation change, targeted formatting and diagnostics, browser verification, visual checkpoint, and GitHub commit.

## Safety boundaries

No cryptocurrency balance, market price, transaction, wallet ownership, mining result, NFT ownership, financial statistic, personal-data record, privacy preference, legal conclusion, compliance certification, production metric, or external API result may be fabricated. Where authoritative services are unavailable, the interface must state that limitation clearly and block mutating or sensitive actions. Secrets, credentials, private keys, tokens, and database access must remain server-side.
