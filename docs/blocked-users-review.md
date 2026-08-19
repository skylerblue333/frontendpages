# BlockedUsers review

The `/blocked-users` route is currently a shared `FeatureUnavailable` boundary rather than a working moderation-list workflow. It correctly discloses that the backend contract, authorization, persistence, loading and error states, tests, and operational evidence are incomplete. No user identity, block list, reason, timestamp, enforcement state, search result, permission, unblock action, appeal, audit event, or moderation success outcome is fabricated.

This route should remain unavailable until account-scoped or privileged moderation data, policy enforcement, authorization, reversible actions, appeals, audit logging, persistence, failure and retry states, and acceptance evidence exist. The remaining task is visual verification at desktop and 390×844 mobile widths.
