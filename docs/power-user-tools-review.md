# PowerUserTools review

The `/power-user-tools` route currently queries the authenticated user, displays identity and role data, copies a user ID to the clipboard, toggles feature flags with success toasts, and produces a downloadable JSON export that claims to contain user datasets. These operations require authorization, data minimization, export provenance, rate limits, auditability, and verified backend contracts.

The safe replacement should preserve shortcut and tool concepts as a local readiness view, but must not expose authoritative identity, role, or user IDs, claim feature-flag persistence, copy sensitive identifiers, or generate an export that implies real data. Dataset selections and toggles may remain local-only with explicit unavailable status.
