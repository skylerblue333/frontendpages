# SchoolCertificate review

The `/school-certificate` route was upgraded into a local credential-governance preview without connecting learner data, issuer systems, registries, chains, or employment claims. It preserves credential concept selection, category filtering, issuer and verification intent, local save/reset behavior, assessment/revocation gates, and disabled consequential actions.

| Area | Result |
|---|---|
| Data boundary | No learner, course, completion, score, issuer, certificate, hash, registry, blockchain verification, employment, earnings, or educational-recognition outcome is asserted. |
| Safety | Real activation requires course version, learner identity, completion evidence, assessment, issuer authority, privacy, revocation, accessibility, appeals, signed representation, registry/chain provenance, and audit. Blockchain literacy content must not imply investment promises. |
| Mutations | Save and reset are local-only. Issue, verify, share, and revoke remain disabled. |
| Validation | Prettier, strict TypeScript, production build, and desktop/mobile captures completed. The existing large-chunk advisory remains non-blocking. |

The route is not a live certificate issuer, verification registry, blockchain credential service, regulated qualification, license authority, employment proof, earnings predictor, or financial product.
