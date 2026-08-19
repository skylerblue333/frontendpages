# AddBankAccount review

The `/add-bank-account` route is currently a shared `FeatureUnavailable` boundary rather than a working bank-linking workflow. It correctly discloses that the backend contract, authorization, persistence, loading and error states, tests, and operational evidence are incomplete. No bank, account number, routing detail, verification result, balance, transfer, funding status, consent, credential, or financial success outcome is fabricated.

This route should remain unavailable until a compliant provider, account-scoped authorization, secure token handling, verification and failure states, consent records, transaction controls, redaction, and operational acceptance evidence exist. The remaining task is visual verification at desktop and 390×844 mobile widths.
