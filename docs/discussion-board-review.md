# DiscussionBoard review

The `/discussion-board` route is a generic Q&A placeholder. It imports an unused tRPC client, gates on an unimplemented authentication flow, renders a nonfunctional Sign In button, exposes New and Settings controls without handlers, and shows an empty state controlled by a loading variable that never changes. No author, question, answer, vote, accepted-answer, tag, moderation, notification, search, or persistence contract is connected.

The safe replacement should preserve Q&A planning as a local readiness preview, remove the misleading auth and empty creation workflow, disclose that users, threads, replies, voting, moderation, notifications, and search results are unavailable, and make new question, answer, vote, report, subscribe, and settings actions explicit no-ops.
