# DistributionChannels review

The `/distribution-channels` route is a generic multi-platform publishing placeholder. It imports an unused tRPC client, gates on an unimplemented authentication flow, renders a nonfunctional Sign In button, exposes New and Settings controls without handlers, and shows an empty state controlled by a loading variable that never changes. No channel provider, audience, content, scheduling, delivery receipt, retry, analytics, permission, notification, or persistence contract is connected.

The safe replacement should preserve distribution planning as a local readiness preview, remove the misleading auth and empty creation workflow, disclose that platform connections, audience, content delivery, scheduling, metrics, and sync are unavailable, and make connect, publish, schedule, retry, cancel, settings, and export actions explicit no-ops. No provider token or publication success should be represented.
