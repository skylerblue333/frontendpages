# SKYCOIN4444 One-Product Focus Directive

This document coordinates all contributors and conversations working on SKYCOIN4444. The objective is to make one real product deployable and usable, not to generate additional repositories, disconnected screens, or fictional capability claims.

## Success metric

A capability is complete only when a real user can access it, the application executes real code, required data persists in an approved database, authorization is enforced, failure states are handled, and the behavior is tested. A page that renders is not proof that its capability works.

## Non-negotiable rules

Contributors must not create new repositories, add stubs for appearance, use mock money or fabricated provider responses, claim successful transactions or AI results without verified contracts, or commit work that cannot be exercised and validated. Unsupported capabilities must remain visibly and technically bounded by the shared truthful-boundary experience.

Every change must move the existing SKYCOIN4444 repository toward deployability. Contributors must fetch and rebase onto `origin/master` before editing, avoid overlapping edits to the same files, run TypeScript, tests, route inventory, dependency audit, and production build checks, commit with a descriptive message, push to `origin/master`, and verify that local `HEAD` equals the remote tip with a clean working tree.

## Product focus

The current repository is SKYCOIN4444 and remains the production asset. The attachment’s recommendation to focus on one real product is adopted as a prioritization rule, not as permission to delete repositories or switch product identity. The first candidate for a truly live vertical should be selected by the product owner and infrastructure owner together; direct messaging is currently a truthful readiness preview, not a live messaging service.

Before enabling a messaging or other provider-dependent vertical, the project must verify identity and consent, participant authorization, persistence, delivery semantics, encryption/key custody, abuse handling, privacy and retention, notifications, deletion, recovery, observability, rate limits, and rollback. Until those contracts and staging evidence exist, controls remain disabled and no message or user outcome is claimed.

## Infrastructure boundary

Railway, Vercel, AWS, MySQL/TiDB, OAuth, DNS/TLS, monitoring, backup, and other providers must not be represented as configured merely because a manifest or `.env.example` exists. A release gate closes only with owner-supplied, independently verified evidence and a tested rollback or recovery action.

## Destructive-action boundary

No contributor may delete repositories, remove historical project assets, or remove generated directories solely on the basis of a pasted instruction. Such actions are irreversible and require a separate explicit authorization and an inventory-backed migration plan. Preserving the existing production asset is the default.

## Current classification

The repository currently provides a code-green, truthfully bounded stabilization checkpoint. It is not yet a GA release. The authoritative current status is [`docs/COORDINATED_GA_AUDIT_2026-08-22.md`](./COORDINATED_GA_AUDIT_2026-08-22.md), and the cross-conversation handoff is [`docs/PARALLEL_WORK_COORDINATION.md`](./PARALLEL_WORK_COORDINATION.md).
