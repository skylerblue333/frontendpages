# UserProfile review

## Scope

The `/user-profile` route currently renders mock social posts, activity timestamps, followers, likes, badges, engagement counts, and follow controls. The data is not sourced from a verified profile, social, moderation, or activity service.

## Risks identified

The screen can fabricate social proof, engagement, follower relationships, activity history, timestamps, badges, and user identity. Follow actions may imply a durable relationship mutation without authorization, privacy, moderation, or notification controls. Profile activity is sensitive and requires provenance and access control.

## Safe upgrade boundary

Replace the screen with a strictly typed local profile-review view that marks posts, activity, followers, likes, badges, engagement, timestamps, and relationships unavailable. Keep read-only tabs and explicit no-op relationship controls, but do not claim user statistics, social outcomes, or activity provenance.

## Validation plan

Run Prettier, TypeScript diagnostics, diff checks, and browser verification at `/user-profile`. Activate the blocked follow action and verify no relationship, notification, profile, or social mutation starts.
