# SchoolQuiz review

The `/school-quiz` route was upgraded into a local assessment-governance preview without connecting question banks, learner records, grading services, certificates, or reward ledgers. It preserves quiz concept selection, category filtering, attempt and grading intent, local save/reset behavior, integrity/accessibility/appeal gates, and disabled consequential actions.

| Area | Result |
|---|---|
| Data boundary | No question, answer, learner, attempt, grade, pass/fail result, accuracy, certificate, XP, reward, or educational outcome is asserted. |
| Safety | Real activation requires question provenance, secure delivery, answer privacy, attempt limits, integrity controls, accessibility, server-side grading, feedback, appeals, certificate/reward policy, privacy, and audit. Wallet-safety and AI assessments require accurate sources and explicit risk boundaries. |
| Mutations | Save and reset are local-only. Start, submit, review, and certificate remain disabled. |
| Validation | Prettier, strict TypeScript, production build, and desktop/mobile captures completed. The existing large-chunk advisory remains non-blocking. |

The route is not a live assessment engine, gradebook, certificate issuer, reward ledger, academic record, or educational-outcome service.
