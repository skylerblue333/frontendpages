# UserProfiles review

The `/user-profiles` route was upgraded from a generic placeholder into an evidence-bounded profile-directory readiness workspace. It provides typed local All, Community, and Education profile concepts, selected profile detail, unavailable refresh behavior, disabled follow/open actions, and explicit profile ID, identity, display name, avatar, biography, verification, activity, visibility, follow relationship, moderation, privacy, and source boundaries.

| Area | Result |
|---|---|
| Profile boundary | No profile identity, avatar, biography, verification, activity, visibility, follow relationship, moderation, or public-profile outcome is asserted. |
| Provenance | Authenticated profile source, directory index, avatar store, verification service, privacy policy, activity stream, moderation state, source timestamps, and account scope remain unavailable rather than estimated. |
| Mutations | Category filter, profile selection, and status are browser-local; refresh is an unavailable no-op; follow and open are disabled. No profile, relationship, privacy, moderation, or account mutation is started. |
| Validation | Prettier, strict TypeScript, production build, and final desktop/mobile captures completed. The existing large-chunk advisory remains non-blocking. |

The route is not a public-profile directory, identity provider, verification authority, social graph, activity service, moderation console, or follow workflow.
