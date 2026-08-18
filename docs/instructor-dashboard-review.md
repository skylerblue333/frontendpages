# InstructorDashboard review

## Scope

The `/instructor-dashboard` route currently presents mock courses, student progress, analytics, settings, and a new-course form. It reports course and student metrics and allows local creation flows without a verified education API, authorization model, curriculum service, or persistence contract.

## Risks identified

Mock enrollment, completion, revenue, student, analytics, and course data can be mistaken for real education outcomes. Course creation and publishing need instructor authorization, validation, moderation, versioning, ownership, and durable storage. Student progress is sensitive and requires access control and provenance.

## Safe upgrade boundary

Replace the dashboard with a strictly typed local education-readiness view. Preserve course-management concepts and tabs, but label course catalog, student progress, analytics, settings, course creation, publishing, and certification outcomes unavailable. Keep local form interaction only if it cannot imply persistence or publication.

## Validation plan

Run Prettier, TypeScript diagnostics, diff checks, and browser verification at `/instructor-dashboard`. Activate the blocked course-creation action and verify no course, student, analytics, publication, or account mutation starts.
