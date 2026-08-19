# DocumentEditor review

The `/document-editor` route is a generic collaborative-document placeholder. It imports an unused tRPC client, gates on an unimplemented authentication flow, renders a nonfunctional Sign In button, exposes New and Settings controls without handlers, and shows an empty state controlled by a loading variable that never changes. No document content, collaborator identity, comments, cursors, autosave, version history, sharing, export, notifications, or persistence contract is connected.

The safe replacement should preserve editor planning as a local readiness preview, remove the misleading auth and empty creation workflow, disclose that document content, collaborators, comments, autosave, versions, export, and sharing are unavailable, and make new document, edit, save, comment, share, export, and settings actions explicit no-ops.
