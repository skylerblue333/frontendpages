# UnifiedMessaging review

## Scope

The `/unified-messaging` route currently renders mock conversations, participant presence, unread counts, message history, timestamps, calls, video, settings, and message sending. The data is not backed by a verified messaging, identity, presence, notification, or moderation contract.

## Risks identified

Messaging can expose personal data and create durable communications. Conversation membership, message identity, presence, read state, timestamps, attachments, calls, notifications, retention, moderation, and delivery status require authenticated authorization and auditable service behavior. Local send behavior must not imply delivery or notification.

## Safe upgrade boundary

Replace the screen with a strictly typed local messaging-readiness view. Preserve conversation selection and message-composer structure, but mark identity, presence, history, delivery, calls, video, attachments, notifications, and settings unavailable. Sending must be an explicit no-op.

## Validation plan

Run Prettier, TypeScript diagnostics, diff checks, and browser verification at `/unified-messaging`. Activate the blocked send and call controls and verify no message, notification, presence, call, or account mutation starts.
