# TwoFactorSetup review

The `/two-factor-setup` route currently embeds a hard-coded TOTP secret, sends it to an external QR image service, displays static backup codes, accepts any six-digit numeric code locally, copies backup codes to the clipboard, and ends with a false `2FA Enabled` state. It imports authentication and tRPC context but does not perform an enrollment mutation or verify a server-side challenge.

The safe replacement must never expose a reusable secret or fake backup codes. It should explain that 2FA enrollment is unavailable until a server-side secret, issuer/account binding, QR generation boundary, challenge verification, encrypted backup-code storage, recovery policy, and authenticated enrollment endpoint are connected. Any entered code must remain a local example only, and completion must not claim account protection.
