import { useMemo, useState } from "react";
import {
  BarChart3,
  CalendarDays,
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

type StatsBoundary = { title: string; description: string };
const boundaries: readonly StatsBoundary[] = [
  {
    title: "Trend and aggregate data",
    description:
      "No daily, weekly, monthly, total, average, change, percentile, or distribution value is loaded.",
  },
  {
    title: "Cohort and denominator rules",
    description:
      "No user cohort, active definition, denominator, deduplication rule, or attribution window is available.",
  },
  {
    title: "Time range and timezone",
    description:
      "No reporting period, timezone, calendar boundary, comparison period, or freshness timestamp is connected.",
  },
  {
    title: "Privacy and export safety",
    description:
      "No permission model, anonymization, retention policy, export, chart snapshot, alert, or audit record is configured.",
  },
];

export default function EngagementStats() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Engagement statistics are unavailable locally. No values, cohorts, trends, or exports were queried or fabricated."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, description }) =>
      `${title} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No values, cohorts, trends, or exports were queried or fabricated.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="engagement-stats-title"
    >
      <div data-ui-polish="batch-188" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BarChart3 className="size-3.5" aria-hidden="true" />
                  Statistics readiness
                </Badge>
                <Badge variant="secondary">No data source</Badge>
              </div>
              <h1
                id="engagement-stats-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Engagement statistics readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful aggregate, cohort, denominator, time-range,
                privacy, and export contracts without claiming live engagement
                statistics or trends.
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
                Statistics data source is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No event stream, aggregate query, cohort definition, period,
                timezone, metric value, chart, or export is connected. This is a
                planning boundary, not a live statistics dashboard.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/70 p-5">
            <BarChart3
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">No trend values</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No counts, percentages, changes, averages, or chart points are
              presented.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <UsersRound
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">No cohort values</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No users, segments, denominators, or activity definitions are
              loaded.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <CalendarDays
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">No reporting period</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No date range, timezone, comparison, or freshness timestamp is
              connected.
            </p>
          </div>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Statistics readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              events, users, cohorts, values, charts, or analytics storage.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search statistics readiness notes"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search statistics requirements"
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
                  No statistics notes match “{query}”.
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
                Production statistics need event contracts, reproducible
                aggregation, denominator discipline, timezone handling, privacy
                safeguards, access review, data-quality checks, observability,
                export controls, and tests for missing or duplicated events.
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
