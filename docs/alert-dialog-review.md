# AlertDialog review

The `/alert-dialog` route is currently a shared `FeatureUnavailable` boundary rather than a working alert workflow. It correctly discloses that the backend contract, authorization, persistence, loading and error states, tests, and operational evidence are incomplete. No alert content, recipient, channel, delivery status, read status, schedule, permission, notification event, retry, or operational success outcome is fabricated.

This route should remain unavailable until account-scoped notification contracts, delivery providers, consent and permission handling, deduplication, persistence, failure and retry states, redaction, and acceptance evidence exist. The remaining task is visual verification at desktop and 390×844 mobile widths.
