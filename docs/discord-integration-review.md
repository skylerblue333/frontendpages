# DiscordIntegration review

The `/discord-integration` route is a generic connector placeholder. It imports an unused tRPC client, gates on an unimplemented authentication flow, renders a nonfunctional Sign In button, exposes New and Settings controls without handlers, and shows an empty state controlled by a loading variable that never changes. No Discord OAuth, bot token, guild, role, channel, message, webhook, permission, notification, or synchronization contract is connected.

The safe replacement should preserve connector planning as a local integration-readiness preview, remove the misleading auth and empty creation workflow, disclose that Discord identity, guilds, permissions, channels, events, webhooks, and sync are unavailable, and make connect, invite, configure, sync, and disconnect actions explicit no-ops. No bot token or credential may be rendered in the client.
