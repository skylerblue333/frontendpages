# AnomalyDetection review

## Shared-progress selection

The pushed `skylerblue333/frontendpages` repository now contains the prior frontend screen upgrades through AlertConfiguration (`fbbe1dd`). AnomalyDetection is registered at `/anomaly-detection` and is still a generic authenticated-looking page with a New action, search, settings control, loading state, and an empty data state. It has no anomaly source, detection model, score semantics, identity boundary, incident workflow, or remediation contract.

## Upgrade scope

Replace the generic page with a local anomaly-review preview. Provide typed anomaly-signal fixtures, category and state filters, selected signal details, explicit source/score/confidence/identity fields, and blocked create, investigate, and remediate actions. Preserve anomaly-review intent while making the absence of data and operational systems visible.

## Safety boundaries

No anomaly signal, score, confidence, event, source, user identity, incident, alert, remediation, query, report, or operational change is created or queried. No anomaly count, severity, probability, baseline, detection result, incident, or remediation outcome is fabricated. Future anomaly functionality requires verified source provenance, model semantics, baseline windows, false-positive handling, privacy controls, access policy, human review, incident linkage, and auditable remediation.
