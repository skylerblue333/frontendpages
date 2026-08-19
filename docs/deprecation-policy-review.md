# DeprecationPolicy review

The `/deprecation-policy` route is a generic governance placeholder. It imports an unused tRPC client, gates on an unimplemented authentication flow, renders a nonfunctional Sign In button, exposes New and Settings controls without handlers, and shows an empty state controlled by a loading variable that never changes. No version, owner, notice, migration, compatibility, communication, archive, or persistence contract is connected.

The safe replacement should preserve deprecation planning as a local readiness preview, remove the misleading auth and empty create workflow, disclose that notices and migration records are unavailable, and make create, publish, acknowledge, archive, and settings actions explicit no-ops.
