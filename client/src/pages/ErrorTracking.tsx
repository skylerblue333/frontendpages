import { useMemo, useState } from "react";
import {
  AlertTriangle,
  BellRing,
  CheckCircle2,
  Search,
  ShieldCheck,
  Waypoints,
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

type ErrorBoundary = { title: string; description: string };
const boundaries: readonly ErrorBoundary[] = [
  {
    title: "Capture and issue grouping",
    description:
      "No error event stream, project, release, fingerprint, stack trace, source map, issue, or occurrence is connected.",
  },
  {
    title: "Privacy and retention",
    description:
      "No user context, sensitive-data scrubber, consent rule, redaction policy, retention period, or access role is configured.",
  },
  {
    title: "Alerting and triage",
    description:
      "No threshold, notification channel, assignee, severity, incident, acknowledgement, or escalation state is available.",
  },
  {
    title: "Reliability and evidence",
    description:
      "No delivery health, ingestion latency, replay protection, deduplication, audit trail, or recovery test is connected.",
  },
];

export default function ErrorTracking() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Error tracking is unavailable locally. No incidents, issues, stack traces, alerts, or operational events were queried or fabricated."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, description }) =>
      `${title} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No incidents, issues, stack traces, alerts, or operational events were queried or fabricated.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="error-tracking-title"
    >
      <div data-ui-polish="batch-188" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <AlertTriangle className="size-3.5" aria-hidden="true" />
                  Observability readiness
                </Badge>
                <Badge variant="secondary">No provider</Badge>
              </div>
              <h1
                id="error-tracking-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Error tracking readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review safe error capture, grouping, privacy, alerting, triage,
                and recovery contracts without claiming incidents, issues, stack
                traces, or production health.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Error provider is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No project, event stream, release, stack trace, source map, user
                context, notification channel, incident, or audit service is
                connected. This is a planning boundary, not a live incident
                console.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/70 p-5">
            <Waypoints
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">No issues loaded</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No incidents, fingerprints, occurrences, stack traces, releases,
              or source maps are presented.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <BellRing className="mb-3 size-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">No alerts configured</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No thresholds, channels, assignees, acknowledgements, or
              escalations can run.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <ShieldCheck
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">No sensitive context</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No user data, scrubber, consent, retention, access, or redaction
              state is loaded.
            </p>
          </div>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Error-tracking readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              incidents, stack traces, user context, alerts, or observability
              storage.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search error tracking readiness notes"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search observability requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(({ title, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Manage ${title}`)}
                  >
                    Manage unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No observability notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 size-5 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Production error tracking needs provider isolation, event
                contracts, grouping and deduplication, source-map controls,
                privacy scrubbing, retention, role access, alert delivery,
                incident workflow, audit logging, latency monitoring, and
                recovery tests.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      </div>
    </main>
  );
}
