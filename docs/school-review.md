# School review

The `/school` route was upgraded into a local SkySchool learning-governance preview without connecting external education data or inventing learner outcomes. It preserves course concept selection, category filtering, learning-path and assessment intent, local save/reset behavior, privacy/accessibility/safeguarding gates, and disabled consequential actions.

| Area | Result |
|---|---|
| Data boundary | No course, instructor, learner, enrollment, progress, grade, certificate, price, employment, earnings, or educational outcome is asserted. |
| Safety | Real activation requires curriculum provenance, instructor authorization, course access, learner privacy, accessibility, safeguarding, assessment, persistence, appeals, certificate rules, support, and audit. Blockchain and AI learning content requires accurate sources and explicit risk boundaries. |
| Mutations | Save and reset are local-only. Enroll, start, submit, and certificate remain disabled. |
| Validation | Prettier, strict TypeScript, production build, and desktop/mobile captures completed. The existing large-chunk advisory remains non-blocking. |

The route is not a live course catalogue, enrollment service, grading system, credential issuer, employment predictor, earnings promise, or educational certification service.
