# Settings review

The `/settings` route was upgraded into a local evidence-bounded account-preferences workspace without connecting account identity, persistence APIs, email providers, authentication, MFA, session management, wallet custody, notification delivery, or deletion services. It preserves profile, privacy, notification, security, session, wallet, and danger-zone controls, local save/reset behavior, and evidence gates.

| Area | Result |
|---|---|
| Data boundary | No personal data, account identity, email delivery, login history, 2FA enrollment, active session, wallet address, balance, seed phrase, message delivery, deletion, or security outcome is asserted. |
| Safety | Real activation requires authenticated APIs, authorization, CSRF protection, validation, persistence, optimistic failure handling, retry, audit, notification behavior, privacy rights, retention/export/deletion contracts, MFA/recovery/device/session controls, and separate wallet/custody evidence. |
| Mutations | Save and reset are local-only. Revoke sessions, connect wallet, transaction notifications, and delete account remain disabled. |
| Validation | Prettier, strict TypeScript, production build, and desktop/mobile captures completed. The existing large-chunk advisory remains non-blocking. |

The route is not a persisted settings service, identity verifier, MFA enrollment flow, session manager, wallet connector, notification delivery system, or account-deletion system.
