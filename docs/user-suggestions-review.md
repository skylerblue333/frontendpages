# UserSuggestions review

The `/user-suggestions` route was upgraded from a generic placeholder into an evidence-bounded discovery-readiness workspace. It provides typed local All, People, and Content suggestion concepts, selected suggestion detail, unavailable refresh behavior, disabled save/not-interested actions, and explicit suggestion ID, reason, profile/context, source, freshness, personalization, rank, privacy, moderation, preference, and suitability boundaries.

| Area | Result |
|---|---|
| Discovery boundary | No recommendation, identity, content, preference, ranking, suitability, privacy, moderation, or discovery outcome is asserted. |
| Provenance | Authenticated profile, preference history, catalog source, ranking model, privacy policy, moderation state, explanation provider, source timestamps, and immutable IDs remain unavailable rather than estimated. |
| Mutations | Category filter, suggestion selection, and status are browser-local; refresh is an unavailable no-op; save and not-interested are disabled. No recommendation query, personalization, feedback, privacy, moderation, or relationship mutation is started. |
| Validation | Prettier, strict TypeScript, production build, and final desktop/mobile captures completed. The existing large-chunk advisory remains non-blocking. |

The route is not a recommendation engine, social graph authority, personalized eligibility service, content catalog, moderation console, or suitability advisor.
