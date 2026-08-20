import { useMemo, useState } from "react";
import {
  AlertTriangle,
  FileSearch,
  Gavel,
  LockKeyhole,
  Search,
  ShieldCheck,
  UsersRound,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Report provenance and evidence",
    area: "Reports",
    description:
      "No report, reporter, target, content snapshot, timestamp, context, evidence, severity, duplicate, or source channel is connected.",
  },
  {
    title: "Policy versioning and decision rubric",
    area: "Policy",
    description:
      "No policy version, jurisdiction, category, confidence threshold, rationale, precedent, reviewer guidance, or decision record is available.",
  },
  {
    title: "Reviewer roles and privacy",
    area: "Access",
    description:
      "No reviewer identity, queue, permission, conflict check, sensitive-content boundary, redaction, retention, or access audit is verified.",
  },
  {
    title: "Enforcement, notification, and appeals",
    area: "Enforcement",
    description:
      "No warning, restriction, takedown, account action, notification, appeal, reversal, expiration, or affected-user support workflow exists.",
  },
  {
    title: "Quality, safety, and auditability",
    area: "Governance",
    description:
      "No consistency review, bias check, escalation, abuse prevention, rate limit, incident response, metrics, or immutable audit trail is configured.",
  },
];
export default function ModerationDashboard() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Moderation is unavailable locally. No report, content, reviewer, policy, enforcement, appeal, notification, or audit record was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No report, content, reviewer, policy, enforcement, appeal, notification, privacy, or moderation-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="moderation-dashboard-title"
    >
      <div data-ui-polish="batch-196" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Gavel className="size-3.5" aria-hidden="true" />{" "}
                  Moderation-governance workspace
                </Badge>
                <Badge variant="secondary">No review queue</Badge>
              </div>
              <h1
                id="moderation-dashboard-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                ModerationDashboard readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review report provenance, policy versioning, reviewer roles,
                privacy, enforcement, notification, appeals, reversibility,
                quality, safety, and auditability without implying that reports,
                content decisions, or enforcement records exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Moderation is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No report source, policy registry, reviewer queue, privacy
                control, enforcement service, appeal workflow, notification
                channel, or audit store is connected. This workspace cannot
                review, classify, restrict, remove, notify, or claim a
                moderation decision.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <FileSearch
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No review records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No report, reporter, target, content snapshot, evidence, policy,
                severity, or queue item is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <UsersRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No reviewer state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No reviewer, role, permission, assignment, conflict check,
                decision, appeal, or notification state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No enforcement actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No warn, restrict, remove, ban, notify, appeal, reverse,
                escalate, or moderation-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Moderation-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              opens a report, reveals content, assigns a reviewer, changes
              policy, applies enforcement, sends a notice, or saves moderation
              data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search moderation readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter moderation requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(item => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${item.title}`)}
                  >
                    <FileSearch className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No moderation notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Production moderation requires report provenance, policy
                versions, trained and authorized reviewers, privacy and
                sensitive-content protections, consistent decision rubrics,
                reversible and time-bounded enforcement, affected-user
                notification and appeals, quality and bias checks, escalation,
                and immutable audit history. No report, content, reviewer,
                policy, enforcement, appeal, or audit record is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <ShieldCheck
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
