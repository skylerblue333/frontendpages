# Favorites review

The `/favorites` route was upgraded from a generic unavailable placeholder into a truthful **favorites-readiness workspace**. It does not claim that saved articles, courses, products, posts, profiles, media, collections, counts, identities, or sync state exist.

| Area | Result |
|---|---|
| Saved items | No saved item, collection, or favorite count is loaded. |
| Favorite actions | No favorite, unfavorite, reorder, tag, collection, or undo mutation is connected. |
| Identity and sync | No authenticated subject, device state, cross-device sync, privacy scope, or offline reconciliation is available. |
| Search and retention | No local index, ranking, retention, deletion, export, or audit state is configured. |
| Interaction boundary | Search filters immutable local notes; management buttons update only an `aria-live` unavailable status. |
| Accessibility | Semantic landmarks, labelled search, keyboard-safe controls, decorative icon hiding, and live status feedback are included. |

The implementation was formatted with Prettier, passed `pnpm exec tsc --noEmit`, and passed the production build. The existing large-chunk advisory remains non-blocking. Desktop evidence was captured at 1440×1000 and mobile evidence at 390×844. Mobile review confirms the personal-collections boundary and no-saved-items status remain readable without horizontal overflow.

Production activation requires authenticated ownership, item identity, idempotent add/remove behavior, collection rules, sync conflict handling, privacy and deletion controls, export correctness, retention, offline safety, and appropriate auditability.
