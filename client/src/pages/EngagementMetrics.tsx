import { useMemo, useState } from "react";
import {
  BarChart3,
  CheckCircle2,
  Search,
  ShieldCheck,
  UsersRound,
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

type MetricBoundary = { title: string; description: string };
const boundaries: readonly MetricBoundary[] = [
  {
    title: "Event and identity data",
    description:
      "No authenticated identity, event stream, session, consent state, cohort, or attribution source is connected.",
  },
  {
    title: "Time range and calculation",
    description:
      "No reporting window, timezone, denominator, scoring formula, sampling rule, or comparison baseline is available.",
  },
  {
    title: "Privacy and access",
    description:
      "No role permission, anonymization, retention policy, sensitive attribute handling, or audit trail is configured.",
  },
  {
    title: "Export and operations",
    description:
      "No metric result, dashboard snapshot, CSV export, alert, cache, query, or mutation is connected.",
  },
];

export default function EngagementMetrics() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Engagement metrics are unavailable locally. No events, identities, scores, counts, or exports were queried or fabricated."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, description }) =>
      `${title} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No events, identities, scores, counts, or exports were queried or fabricated.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="engagement-metrics-title"
    >
      <div data-ui-polish="batch-188" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BarChart3 className="size-3.5" aria-hidden="true" />
                  Metrics readiness
                </Badge>
                <Badge variant="secondary">No data source</Badge>
              </div>
              <h1
                id="engagement-metrics-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Engagement metrics readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review event, identity, time-range, privacy, calculation, and
                export contracts without claiming live engagement counts,
                scores, cohorts, or user activity.
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
                Analytics data source is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No event stream, identity source, reporting window, calculation,
                permission, metric result, or export is connected. This page is
                a planning boundary, not a live analytics dashboard.
              </p>
            </div>
          </div>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Metrics readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              events, users, cohorts, scores, counts, or analytics storage.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search metrics readiness notes"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search metrics requirements"
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
                  <UsersRound
                    className="mb-3 size-5 text-primary"
                    aria-hidden="true"
                  />
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
                  No metrics notes match “{query}”.
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
                Production metrics need event contracts, consent, identity
                controls, reproducible calculations, timezone discipline,
                privacy safeguards, access review, data quality checks,
                observability, export controls, and tests for missing or
                duplicated events.
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
