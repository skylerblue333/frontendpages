import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Database,
  KeyRound,
  Network,
  Search,
  ShieldCheck,
  TimerReset,
  UploadCloud,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type RecoveryControl = {
  title: string;
  area: string;
  description: string;
  icon: typeof Database;
};

const recoveryControls: readonly RecoveryControl[] = [
  {
    title: "Backup and restore contract",
    area: "Data",
    description:
      "No database snapshot, object version, backup schedule, restore point, integrity check, or recovery owner is connected.",
    icon: Database,
  },
  {
    title: "Secrets and key recovery",
    area: "Security",
    description:
      "No key escrow, secret rotation, recovery material, wallet custody, credential inventory, or break-glass authorization is available.",
    icon: KeyRound,
  },
  {
    title: "Dependency and failover map",
    area: "Continuity",
    description:
      "No service dependency, region, DNS, queue, provider, failover target, RTO, or RPO has been verified for this environment.",
    icon: Network,
  },
  {
    title: "Incident response and evidence",
    area: "Operations",
    description:
      "No incident runbook, alert, escalation, status update, recovery test, audit trail, or post-incident record is connected.",
    icon: ShieldCheck,
  },
];

export default function DisasterRecovery() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Disaster recovery operations are unavailable locally. No backup, restore, failover, credential, or notification action was started."
  );
  const visibleControls = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return recoveryControls.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(normalizedQuery)
    );
  }, [query]);
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No backup, restore, failover, credential, or notification action was started.`
    );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="disaster-recovery-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <TimerReset className="size-3.5" aria-hidden="true" />
                  Continuity readiness
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="disaster-recovery-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Disaster recovery readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  Review the contracts and evidence required for safe recovery
                  without claiming that backups, restore points, failover
                  infrastructure, recovery keys, or incident operations are
                  live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => announceUnavailable("Recovery status refresh")}
            >
              <TimerReset className="mr-2 size-4" aria-hidden="true" />
              Refresh unavailable
            </Button>
          </div>
        </header>

        <section
          className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
          aria-labelledby="recovery-boundary-title"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2
                id="recovery-boundary-title"
                className="font-semibold text-amber-100"
              >
                Recovery operations are unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No backup catalog, restore point, failover target, recovery
                credential, incident channel, alert, or operational runbook is
                connected. This page is a planning and evidence boundary, not a
                disaster-recovery control plane.
              </p>
            </div>
          </div>
        </section>

        <section
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Recovery availability status"
        >
          {[
            {
              title: "Backups unavailable",
              text: "No snapshot, object version, schedule, or restore point is loaded.",
              icon: Database,
            },
            {
              title: "Restore unavailable",
              text: "No restore job, integrity check, recovery owner, or outcome exists.",
              icon: UploadCloud,
            },
            {
              title: "Failover unavailable",
              text: "No dependency map, region, DNS, queue, provider, RTO, or RPO is verified.",
              icon: Network,
            },
            {
              title: "Incident response unavailable",
              text: "No alert, escalation, status update, test, or audit event is active.",
              icon: ShieldCheck,
            },
          ].map(({ title, text, icon: Icon }) => (
            <Card key={title} className="border-border/40 bg-card/50 p-5">
              <Icon className="mb-3 size-5 text-primary" aria-hidden="true" />
              <p className="text-lg font-semibold">{title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </Card>
          ))}
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Recovery control map</CardTitle>
            <CardDescription>
              Search filters local planning notes only. It does not inspect
              backups, infrastructure, secrets, incidents, logs, or production
              status.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search recovery control notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search recovery controls"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visibleControls.map(
                ({ title, area, description, icon: Icon }) => (
                  <div
                    key={title}
                    className="rounded-xl border border-border/70 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-secondary/60 p-3">
                        <Icon
                          className="size-5 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold">{title}</h3>
                          <Badge variant="outline">{area}</Badge>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {description}
                        </p>
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          className="mt-4"
                          onClick={() => announceUnavailable(`Manage ${title}`)}
                        >
                          Manage unavailable
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              )}
              {visibleControls.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No recovery control notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <section
          className="grid gap-4 md:grid-cols-3"
          aria-label="Unavailable recovery actions"
        >
          <Card className="border-border/40 bg-card/30 p-5">
            <Database className="mb-3 size-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">Backup catalog unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No backup listing, checksum, retention policy, or storage provider
              is exposed.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Backup catalog")}
            >
              Open unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <UploadCloud
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Restore test unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No restore, replay, migration, integrity check, or recovery claim
              can be started.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Restore test")}
            >
              Test unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <KeyRound className="mb-3 size-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">Break-glass access unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No secret, private key, wallet seed, token, or emergency
              credential is rendered or stored.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Break-glass access")}
            >
              Configure unavailable
            </Button>
          </Card>
        </section>

        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Recovery evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production recovery program needs authorized owners, backup
                integrity verification, tested restore procedures, dependency
                and failover mapping, RTO/RPO definitions, secret recovery
                controls, alerting and escalation, incident communications,
                audit logs, and documented recovery drills.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
