# DiscussionForums review

## Scope

The `/discussion-forums` route currently renders mock posts, authors, categories, tags, views, likes, replies, timestamps, pinned and resolved states, bookmarks, post creation, replies, and toast feedback. These surfaces are not backed by a verified community, identity, moderation, or persistence contract.

## Risks identified

Community content requires authenticated identity, provenance, moderation, abuse controls, privacy, rate limiting, retention, and durable state. View and engagement counts can fabricate social proof. Posting, replying, liking, saving, and resolving discussions must not report success without authorized persistence and moderation handling.

## Safe upgrade boundary

Replace the route with a strictly typed local discussion-readiness catalog. Preserve search, category selection, detail-view structure, and draft fields, but mark authors, timestamps, counts, content provenance, posting, replying, liking, saving, notifications, and moderation unavailable. All mutations must be explicit no-ops.

## Validation plan

Run Prettier, TypeScript diagnostics, diff checks, and browser verification at `/discussion-forums`. Open a local discussion concept and activate the blocked like or reply action to verify no community or account mutation starts.
