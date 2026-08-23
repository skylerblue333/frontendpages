# SKYCOIN4444 Frontend Integration Master Plan

Status: active integration contract
Canonical frontend: `skylerblue333/frontendpages`
Canonical branch: `master`

## Mission

`frontendpages` is the canonical product frontend. Other repositories are source repositories for additional capabilities, screens, workflows, and infrastructure patterns. Integration must preserve genuinely unique functionality while removing obsolete, duplicate, placeholder, or weaker implementations.

## Integration pipeline

1. Inventory source repositories and frontend routes.
2. Compare implementations by route, capability, completeness, and quality.
3. Score competing implementations.
4. Harvest unique and higher-quality functionality.
5. Integrate into the canonical frontend without destructive replacement.
6. Upgrade imported code to canonical conventions and shared components.
7. Test affected routes and packages.
8. Apply CI, dependency, and security checks.
9. Verify the resulting commit and changed paths.
10. Commit/push and record evidence.

## Primary source families

### Frontend/application sources

- `ShadowChat-Core`
- `ShadowChat-Pro-Edition`
- `ShadowChat-Final-Build`
- `ShadowChat-Legacy`
- `ShadowChat`
- `Skycoin-Legacy-Core`
- `Skycoin-Next-Gen`
- `Skycoin-Protocol-v44`
- `Skycoin-Reference-Implementation`
- `Skycoin-Stable-Release`
- `Skycoin-Protocol-Upgrade`

### Platform services

- `TS-Express-API`
- `TS-Auth-Service`
- `TS-Payment-Gateway`
- `TS-WebSocket-Chat`
- `TS-GraphQL-Server`
- `AI-Agent-Orchestrator`
- `Event-Sourcing-System`

### Infrastructure and reliability

- `Go-Load-Balancer`
- `Go-Rate-Limiter`
- `Go-gRPC-Service`
- `Rust-Circuit-Breaker`
- `Distributed-Tracing-Setup`
- `CI-CD-Pipeline-Templates`
- `Zero-Trust-Network`
- `Auto-Scaling-Manager`

## Non-negotiable migration rules

- Never overwrite a stronger implementation with a weaker one.
- Never delete a unique screen merely because another repository has a similarly named route.
- Never treat a draft, mock, stub, or generated page as production functionality without verification.
- Preserve source attribution in migration notes where useful.
- Prefer shared canonical components over duplicated local UI primitives.
- Keep backend contracts explicit; do not invent API behavior to make a page appear complete.
- Record verification status separately from architectural intent.

## Current integration target

The next implementation passes should prioritize unique frontend capabilities from the ShadowChat and Skycoin application families, followed by API/service contract alignment and then automated quality gates.

## Completion definition

Integration is complete only when the canonical frontend contains the best verified functionality available across the source repositories, affected routes build successfully, tests pass or known blockers are documented, and the GitHub commit contains auditable evidence of what changed.
