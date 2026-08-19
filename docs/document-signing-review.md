# DocumentSigning review

The `/document-signing` route is a generic e-signature placeholder. It imports an unused tRPC client, gates on an unimplemented authentication flow, renders a nonfunctional Sign In button, exposes New and Settings controls without handlers, and shows an empty state controlled by a loading variable that never changes. No document provenance, signer identity, consent, signing order, signature evidence, certificate, timestamp, audit trail, revocation, legal jurisdiction, notification, or persistence contract is connected.

The safe replacement should preserve signature-planning as a local readiness preview, remove the misleading auth and empty creation workflow, disclose that documents, signers, consent, certificates, audit evidence, verification, revocation, and notifications are unavailable, and make upload, request signature, sign, verify, revoke, download, and settings actions explicit no-ops. No signature or legal execution outcome should be represented.
