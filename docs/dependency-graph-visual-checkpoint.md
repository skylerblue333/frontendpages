# DependencyGraph visual checkpoint

The route `/dependency-graph` was verified in the direct Vite client. It no longer gates on an unimplemented sign-in flow or claims a project graph. It discloses that graph nodes, tasks, owners, dependencies, cycle health, persistence, and collaboration are unavailable. Search and stage filters are local only.

`New task unavailable` was activated. The route reported: `New task is unavailable locally. No graph, task, dependency, user, or persistence mutation was started.` No task or dependency was created.

Initial screenshot: `/home/ubuntu/screenshots/localhost_2026-08-19_03-03-42_3652.webp`
Blocked-new-task screenshot: `/home/ubuntu/screenshots/localhost_2026-08-19_03-04-01_6271.webp`
Route text capture: `/home/ubuntu/page_texts/localhost_5175_dependency-graph.md`
