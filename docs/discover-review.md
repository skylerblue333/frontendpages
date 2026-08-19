# Discover review

The `/discover` route fabricates creator identities, handles, avatars, categories, verification badges, follower counts, engagement percentages, trend titles, momentum scores, post counts, growth rates, and a recommendation to browse communities. Creator filtering is local, but the cards expose Follow buttons without handlers and imply live social graph state.

The safe replacement should preserve discovery planning as a local readiness preview, remove invented people, metrics, verification, trends, communities, and recommendation outcomes, disclose that discovery data and ranking providers are unavailable, and make follow, refresh, trend, and community actions explicit no-ops.
