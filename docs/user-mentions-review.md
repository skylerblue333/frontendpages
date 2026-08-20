# UserMentions review

The `/user-mentions` route was upgraded from a generic placeholder into an evidence-bounded mention-notification readiness workspace. It provides typed local All, Unread, and Read mention concepts, selected mention detail, unavailable refresh behavior, disabled mark-read/open-content actions, and explicit mention ID, actor, content, target, timestamp, delivery, read state, privacy, moderation, and recipient-scope boundaries.

| Area | Result |
|---|---|
| Notification boundary | No mention, actor, content, recipient, notification, read receipt, privacy, moderation, or account-activity outcome is asserted. |
| Provenance | Authenticated recipient, mention stream, content source, notification provider, privacy policy, moderation state, read-state store, source timestamps, and immutable IDs remain unavailable rather than estimated. |
| Mutations | Mention-state filter, selection, and status are browser-local; refresh is an unavailable no-op; mark-read and open-content are disabled. No mention, notification, privacy, moderation, or account mutation is started. |
| Validation | Prettier, strict TypeScript, production build, and final desktop/mobile captures completed. The existing large-chunk advisory remains non-blocking. |

The route is not a notification provider, social graph, content viewer, moderation console, read-receipt authority, or recipient activity archive.
