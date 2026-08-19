# BanSuspendUser review

The `/ban-suspend-user` route is currently a shared `FeatureUnavailable` boundary rather than a working moderation workflow. It correctly discloses that the backend contract, authorization, persistence, loading and error states, tests, and operational evidence are incomplete. No user, moderation decision, reason, duration, enforcement status, notification, appeal, audit event, permission, or account-security outcome is fabricated.

This route should remain unavailable until authenticated moderation data, policy and reason validation, privileged authorization, reversible enforcement, user notice and appeal handling, audit logging, persistence, failure/retry states, and acceptance evidence exist. The remaining task is visual verification at desktop and 390×844 mobile widths.
