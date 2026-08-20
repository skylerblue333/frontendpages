# SKYCOIN4444 Deployment Evidence Runbook

This runbook defines the order for a controlled staging-to-production release. It is procedural guidance, not evidence that any environment exists or has been accepted.

## Preconditions

The infrastructure owner must first provide a traceable isolated staging resource, a secret-manager reference, production-data exclusion confirmation, network/TLS controls, credential-lifecycle evidence, backup/restore evidence, connection capacity, and least-privilege authorization evidence. The release operator must independently verify the target before retrieving any secret.

## Staging execution

The release operator records only sanitized metadata, verifies the host, port, database name, staging-only account, TLS requirement, and production exclusion, then runs the repository migration command against the approved staging target. The operator inspects the actual schema, generates a reproducible checksum, executes bounded connection and synthetic authorization tests, captures a sanitized transcript, and performs an isolated encrypted restore. No production endpoint may be contacted during this procedure.

## Deployment evidence

The deployment owner supplies an immutable artifact reference, compute/resource ID, health endpoint result, process-supervision evidence, secret-injection evidence, capacity result, and rollback rehearsal. The rollback record must show the pre-deployment artifact restored, health verified, application state checked, and temporary credentials revoked where applicable.

## DNS, TLS, and edge

The network owner supplies hostname ownership/configuration evidence, DNS records, certificate issuance and renewal evidence, HTTPS redirect results, security-header results, and an external edge-to-origin test. A domain name alone is not acceptance evidence.

## Monitoring and operations

The operations owner supplies structured error samples with sensitive values redacted, uptime checks, database/API alerts, escalation ownership, acknowledgement evidence, and an incident drill. Logs must not contain passwords, access tokens, private keys, seed phrases, or unnecessary personal information.

## Backup and restore

The database/operations owner supplies encrypted backup schedule and retention evidence, an isolated restore transcript, integrity verification, and measured recovery objectives. A configured schedule without an actual restore drill is not sufficient.

## Release decision

The release remains **GA not authorized** until each gate has a named owner, verifiable artifact, tested rollback or recovery action, and explicit acceptance. Local checks establish code quality only; they do not establish external infrastructure readiness.
