# SchoolCourse review

The `/school-course` route was upgraded into a local course-detail governance preview without connecting curriculum, instructor, learner, enrollment, or progress systems. It preserves course concept selection, category filtering, lesson and assessment intent, local save/reset behavior, instructor/prerequisite/accessibility gates, and disabled consequential actions.

| Area | Result |
|---|---|
| Data boundary | No course content, lesson, instructor, learner, enrollment, progress, grade, rating, price, reward, completion, certificate, or educational outcome is asserted. |
| Safety | Real activation requires curriculum provenance, lesson quality, objective alignment, instructor authorization, prerequisites, learner privacy, accessibility, safeguarding, assessment, progress persistence, support, and audit. Blockchain and AI content requires accurate sources, privacy, safety evaluation, copyright review, and no investment promises. |
| Mutations | Save and reset are local-only. Start, enroll, preview, and share remain disabled. |
| Validation | Prettier, strict TypeScript, production build, and desktop/mobile captures completed. The existing large-chunk advisory remains non-blocking. |

The route is not a live course catalogue, class-access system, enrollment workflow, paid product, reward program, credential service, or learning-outcome claim.
