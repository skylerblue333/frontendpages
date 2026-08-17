# SKYCOIN4444 Claim-to-Proof Engineering Checklist

A frontend claim is not complete because a card, button, animation, or route exists. It becomes a true capability only when the full implementation can be demonstrated and its failure behavior is understood.

## Proof requirements

| Proof area | What must be true before the claim is marked verified |
|---|---|
| Route | The intended route is registered, navigable, and not shadowed by a dead or duplicate path. |
| UI contract | The screen explains what the capability does, its prerequisites, current availability, and the result the user should expect. |
| Backend contract | The required API or tRPC procedure exists with typed input and output schemas that match the frontend. |
| Data source | Every displayed live value has a named authoritative source, freshness behavior, and unavailable state. Demo and practice values are labeled. |
| Authentication | The capability requires the correct session state and does not expose private data or actions while unauthenticated. |
| Authorization | Role and ownership checks are enforced server-side, not only hidden in the UI. |
| Validation | User input is validated at the boundary, including ranges, formats, ownership, network, and state prerequisites. |
| Persistence | Writes are transactional or idempotent where needed, have uniqueness and relationship protection, and expose a confirmed result. |
| Failure behavior | Timeouts, permission failures, rejected writes, unavailable services, and retry paths are represented clearly. |
| Security | Secrets remain server-side; sensitive actions have appropriate CSRF, rate, audit, upload, and logging controls. |
| Testing | Unit, integration, and critical end-to-end coverage exists for the claim’s important success and failure paths. |
| Runtime evidence | The authenticated and unauthenticated browser states have been reviewed, and no error boundary or blank state hides a failure. |
| Operations | Logging, monitoring, metrics, deployment configuration, and rollback behavior are defined for production-critical capabilities. |

## Status vocabulary

`VERIFIED` means the claim has sufficient implementation and runtime evidence. `PARTIAL` means the frontend experience and some supporting code exist, but one or more proof areas remain incomplete. `DEMO` means the capability is intentionally local or illustrative and cannot be mistaken for a production result. `UNAVAILABLE` means the required integration is absent or disabled. `BLOCKED` means the route, contract, or prerequisite does not exist and engineering work cannot safely proceed without it.

## Examples

A wallet screen may expose address, balance, transaction, and send sections while remaining `PARTIAL` until custody, network validation, signing, transaction submission, confirmation, and failure recovery are implemented and tested. A market screen may show a chart container while remaining `UNAVAILABLE` until the price source, freshness, symbols, rate limits, and error behavior are proven. An AI screen may preserve tone, history, persona, and analysis controls while marking model availability, safety behavior, privacy, and persistence according to actual service responses.

The product should expand toward verified capability. It should never delete the visible product area merely because the backend is incomplete, and it should never present an attractive placeholder as proof that the capability works.
