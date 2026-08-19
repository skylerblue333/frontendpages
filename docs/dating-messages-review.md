# DatingMessages review

The `/dating-messages` route fetches matches and messages from unverified `/api/dating/*` endpoints, displays profile images, names, unread counts, last-message previews, an `Online` claim, and message timestamps, then POSTs message content to a match-specific endpoint. It also relies on an authenticated user ID to style messages.

Until the API contracts, authentication, authorization, moderation, delivery receipts, presence accuracy, retention, deletion, and rate limits are verified, the route must not claim real conversations or successful delivery. The safe replacement should provide a local draft-only composer and abstract conversation concepts, with send, attachment/emoji, profile, presence, and message-history actions explicit no-ops.
