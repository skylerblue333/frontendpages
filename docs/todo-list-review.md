# TodoList review

The `/todo-list` route currently consists of an authentication gate, an unconnected search input, a fake loading state, an empty placeholder message, and New/Settings controls without verified task persistence or contracts. It does not provide a production-quality task workflow.

The safe replacement is a strictly typed local task-readiness view. Preserve search and local draft controls, but label authentication, task data, persistence, collaboration, settings, and New behavior unavailable. No task, account, notification, or synchronization mutation should be claimed.
