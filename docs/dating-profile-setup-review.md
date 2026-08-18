# DatingProfileSetup review

## Scope

The `/dating-profile-setup` route currently collects name, age, location, gender, photos, bio, body type, interests, and verification status in a multi-step form. It creates local object URLs for images, uses an untyped verification cast, and claims verified profiles get higher search placement and three times more matches.

## Risks identified

Dating profiles contain sensitive personal data and photos. The current form has no consent, retention, deletion, upload validation, identity provider, moderation, authorization, or server contract. The verification options and ranking/match claims are not connected to an actual service. A completion action could be interpreted as publishing a profile even if no backend exists.

## Safe upgrade boundary

Replace the form with a strictly typed local draft review. Allow selection of non-sensitive demo preferences and progress navigation without collecting or persisting real personal data, uploading photos, verifying identity, publishing a profile, or claiming match/ranking outcomes. Explicitly mark identity verification, photo upload, profile publication, discovery, and matching unavailable. Preserve accessible controls and a completion no-op.

## Validation plan

Run Prettier, TypeScript diagnostics, diff checks, and browser verification at `/dating-profile-setup`. Activate the blocked completion action and confirm no profile, photo, identity, discovery, matching, or verification operation starts.
