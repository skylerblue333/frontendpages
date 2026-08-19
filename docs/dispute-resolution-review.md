# DisputeResolution review

The `/dispute-resolution` route is a generic dispute-handling placeholder. It imports an unused tRPC client, gates on an unimplemented authentication flow, renders a nonfunctional Sign In button, exposes New and Settings controls without handlers, and shows an empty state controlled by a loading variable that never changes. No claimant, respondent, order, evidence, deadline, status, mediator, arbitration, legal notice, refund, payment, notification, or persistence contract is connected.

The safe replacement should preserve dispute-planning as a local legal and commerce-readiness preview, remove the misleading auth and empty creation workflow, disclose that case identities, evidence, legal process, arbitration, payments, refunds, and outcomes are unavailable, and make new case, upload evidence, submit, escalate, settle, refund, and settings actions explicit no-ops. The interface must not imply legal advice or a case outcome.
