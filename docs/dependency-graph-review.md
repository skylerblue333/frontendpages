# DependencyGraph review

The `/dependency-graph` route currently imports an unused tRPC client, gates the screen on authentication, renders a nonfunctional Sign In button, provides New and Settings controls without handlers, and shows a generic empty state with a local loading variable that is never activated. No graph, task, dependency, persistence, authorization, or API contract is connected.

The safe replacement should preserve the concept as a local planning preview, remove the misleading sign-in gate and empty create workflow, clearly disclose that graph data and task operations are unavailable, and keep search, stage selection, and action buttons as safe local/no-op controls.
