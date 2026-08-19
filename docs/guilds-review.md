# Guilds review

The `/guilds` route combines guild membership, active wars, leaderboards, XP, levels, reputation, wins, and action controls backed by untyped data. These values can fabricate community, competitive, or game-state outcomes without verified identity, authorization, persistence, moderation, or game services.

The safe replacement is a strictly typed local guild-readiness view. Preserve guild, wars, and leaderboard concepts, but mark membership, scores, rankings, activity, invites, and actions unavailable. No join, create, war, leaderboard, or reward mutation should be claimed.
