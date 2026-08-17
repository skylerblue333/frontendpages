# Comments visual checkpoint

## Route and environment

The screen was verified at `/comments` using the direct Vite client because the repository development server remains blocked by a pre-existing `cookie` ESM export mismatch in `server/_core/sdk.ts`. The direct client rendered the route without comment source, identity, moderation, notification, or engagement dependencies.

## Rendered checkpoint

The page presents a responsive dark SKYCOIN4444 comment-feed layout with a local-preview badge, reset control, prominent unavailable-state notice, topic filters, comment-state filters, three typed comment fixtures, selected comment author/timestamp/message/reactions/moderation fields, abuse-control guidance, and an aria-live status region.

## Interaction evidence

The `Reply unavailable` action was activated for the selected Release feedback comment. The live status changed to: `Reply is unavailable locally. No author, timestamp, message, reaction, moderation, notification, or engagement request was started.` No author lookup, message creation, reply, moderation, notification, or engagement operation was observed.

## Safety result

No author identity, timestamp, message, reaction count, moderation outcome, notification, engagement metric, or live-data claim was fabricated or queried.

## Artifacts

- Initial screenshot: `/home/ubuntu/screenshots/localhost_2026-08-17_15-29-27_8060.webp`
- Blocked-reply screenshot: `/home/ubuntu/screenshots/localhost_2026-08-17_15-29-37_9889.webp`
- Route text capture: `/home/ubuntu/page_texts/localhost_5175_comments.md`
