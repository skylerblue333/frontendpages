# CertificateManager review

The former route used a shared unavailable boundary with a broad credential description. It has been replaced with a stricter, strictly typed, local-only certificate-management readiness workspace.

The new screen explicitly states that no course completion, learner identity, certificate, signature, verification, or revocation state is loaded or persisted. All completion review, issuance, verification, and revocation actions are disabled. The route documents assessment integrity, completion evidence, learner identity and consent, issuer authorization, credential schema, signing-key custody and rotation, expiry and metadata, public verification, revocation reasons, privacy redaction, offline/error behavior, role permissions, approvals, audit history, retention, rate limits, and least-privilege access. Its capability search filters static local notes only and never inspects learner records, signs credentials, reveals keys, or persists certificate state.

`prettier`, `tsc --noEmit`, and the production build completed successfully. Desktop evidence shows balanced credential-state/release cards and a capability map. Mobile evidence stacks the same content cleanly at 390×844 without clipping; credential-security, privacy, and unavailable-action disclosures remain readable.
