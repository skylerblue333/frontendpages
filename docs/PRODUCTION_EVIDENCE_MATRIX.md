# SKYCOIN4444 Production Evidence Matrix

**Assessment state:** Code-green stabilization checkpoint; GA not authorized.

**Repository checkpoint:** Updated by the release operator after the associated commit is pushed.

This matrix is an evidence template, not proof of infrastructure. A gate may be marked **VERIFIED** only when the named owner supplies traceable artifacts and the release operator independently validates them. Secrets, complete connection strings, private keys, access tokens, passwords, and personal data must never be recorded here.

| Gate | Required evidence | Current status | Owner | Evidence reference | Rollback / recovery evidence | Acceptance result |
|---|---|---|---|---|---|---|
| Staging database | Isolated MySQL/TiDB resource, resource ID, staging-only database, secret-manager reference, production exclusion, TLS/network proof, least-privilege grants, migration transcript, schema checksum, bounded connection test, authorization denial tests, encrypted snapshot, isolated restore drill | **NOT VERIFIED / BLOCKED** | Infrastructure/database owner | Not supplied | Not supplied | Not accepted |
| OAuth and sessions | Provider configuration, exact redirect URIs, state validation, secure cookie attributes, browser login/logout evidence, revocation and failure-path tests | **NOT VERIFIED / BLOCKED** | Identity owner | Not supplied | Not supplied | Not accepted |
| Deployment and rollback | Immutable artifact, approved compute target, health endpoint, process supervision, secret injection, capacity evidence, rollback rehearsal, post-rollback verification | **NOT VERIFIED / BLOCKED** | Operations owner | Not supplied | Not supplied | Not accepted |
| DNS, TLS, reverse proxy | Approved hostnames, DNS records, certificate issuance/renewal, HTTPS redirect, security headers, external edge-to-origin test | **NOT VERIFIED / BLOCKED** | Network owner | Not supplied | Not supplied | Not accepted |
| Monitoring and alerting | Structured error collection, uptime checks, database/API alerts, sensitive-data redaction, escalation owner, acknowledgement, incident drill | **NOT VERIFIED / BLOCKED** | Operations owner | Not supplied | Not supplied | Not accepted |
| Backup and restore | Encrypted schedule, retention, isolated restore execution, integrity verification, measured recovery objectives | **NOT VERIFIED / BLOCKED** | Database/operations owner | Not supplied | Not supplied | Not accepted |
| Critical workflows | Registration, login, logout, profile, wallet ledger, AI unavailable states, education, admin authorization, representative integrations against approved staging services | **PARTIALLY TESTED LOCALLY / NOT VERIFIED IN STAGING** | Application/release owner | Local test run only | Not supplied | Not accepted |
| Security and least privilege | Independent grant review, authorization denial tests, secret lifecycle, upload controls, rate limits, redaction evidence, accepted rollback | **PARTIALLY TESTED LOCALLY / NOT VERIFIED IN STAGING** | Security owner | Local contract tests only | Not supplied | Not accepted |

## Infrastructure-owner handoff

The infrastructure owner should return metadata and traceable evidence references only:

| Item | Required value |
|---|---|
| Provider and resource ID | Not supplied |
| Environment classification | Approved isolated staging — not verified |
| Endpoint and port | Not supplied; do not paste credentials |
| Database name | Not supplied |
| Secret-manager reference | Reference/path only; never the secret value |
| Production-data exclusion | Explicit confirmation required |
| Network and TLS controls | Provider evidence required |
| Credential lifecycle | Creation, rotation, grants review, revocation evidence required |
| Backup and restore | Encrypted snapshot and isolated restore evidence required |
| Connection capacity | Provider limit, pool configuration, bounded test required |
| Authorization | Least-privilege grants and synthetic denial tests required |
| Approval | Named owner and approval reference required |

## Release rule

> A successful local build, local test, repository schema, or deployment manifest does not substitute for authenticated staging or production evidence.

Until every no-go gate has an owner, artifact, rollback plan, and acceptance result, the public release label remains **code-green stabilization checkpoint; GA not authorized**.
