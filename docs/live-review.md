# Live review

## Scope

The `/live` route currently presents mock live streams, active-stream selection, viewer counts, stream timestamps, chat comments, likes, and share controls. It uses local state to add comments and displays relative timestamps derived from the browser clock.

## Risks identified

Live presence, viewer counts, stream status, comment identity, timestamps, likes, and sharing require authoritative realtime services, moderation, rate limiting, content policy, privacy controls, and provenance. Local comments and success-like interactions can be mistaken for durable community activity.

## Safe upgrade boundary

Replace the screen with a strictly typed local streaming-readiness catalog. Preserve stream selection and chat surface structure, but mark streams, viewers, chat, likes, timestamps, sharing, broadcasting, and moderation unavailable. Local controls must be read-only or explicit no-ops and must not imply realtime activity or durable community data.

## Validation plan

Run Prettier, TypeScript diagnostics, diff checks, and browser verification at `/live`. Activate blocked chat/share controls and verify no stream, comment, like, moderation, notification, or social mutation starts.
