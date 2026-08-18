# Profile review

## Scope

The `/profile` route currently combines user identity, social posts, media, follow state, post creation, and network mutations. It uses broad casts for user and post data and can report publishing or relationship actions without a verified profile/social contract.

## Risks identified

Profile and social data require authenticated access, provenance, moderation, privacy controls, relationship authorization, and durable mutation semantics. A post publish or follow interaction must not report success without verified persistence, notifications, audit, and failure handling. Broad `any` casts hide contract drift.

## Safe upgrade boundary

Replace the route with a strictly typed local profile read-only preview. Mark identity, posts, media, followers, likes, follow, publishing, notifications, and wallet-sensitive data unavailable. Keep only local tab and draft interactions, with explicit no-op actions and no network or account mutation.

## Validation plan

Run Prettier, TypeScript diagnostics, diff checks, and browser verification at `/profile`. Verify the blocked post and follow actions and confirm no profile, social, notification, wallet, or account operation starts.
