import { useMemo, useState } from "react";
import {
  BarChart3,
  CheckCircle2,
  Fingerprint,
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

type AnalyticsBoundary = { title: string; description: string };
const boundaries: readonly AnalyticsBoundary[] = [
  {
    title: "Event and attendance identity",
    description:
      "No event record, attendee identity, registration, check-in, consent, or attribution source is connected.",
  },
  {
    title: "Funnel and cohort logic",
    description:
      "No funnel step, conversion definition, cohort, denominator, deduplication rule, or comparison baseline is available.",
  },
  {
    title: "Privacy and retention",
    description:
      "No permission model, anonymization, sensitive-data handling, retention period, or audit trail is configured.",
  },
  {
    title: "Exports and operational data",
    description:
      "No attendance count, trend, chart, report, CSV export, alert, or analytics query is connected.",
  },
];

export default function EventAnalytics() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Event analytics are unavailable locally. No events, attendees, attendance counts, funnels, cohorts, or exports were queried or fabricated."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, description }) =>
      `${title} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No events, attendees, attendance counts, funnels, cohorts, or exports were queried or fabricated.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="event-analytics-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BarChart3 className="size-3.5" aria-hidden="true" />
                  Event analytics readiness
                </Badge>
                <Badge variant="secondary">No data source</Badge>
              </div>
              <h1
                id="event-analytics-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Event analytics readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful event, attendance, funnel, cohort, privacy, and
                export contracts without claiming live event participation or
                analytics values.
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
                Event data source is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No event catalog, attendee identity, registration, check-in,
                analytics query, permission, or export is connected. This is a
                planning boundary, not a live attendance dashboard.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/70 p-5">
            <Fingerprint
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">No attendee data</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No event, attendee, registration, check-in, consent, or identity
              record is loaded.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <UsersRound
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">No cohort values</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No funnel, conversion, cohort, denominator, or attribution value
              is presented.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <BarChart3
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">No analytics output</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No count, trend, chart, report, export, alert, or query result is
              connected.
            </p>
          </div>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Event analytics readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              events, attendees, cohorts, counts, charts, or analytics storage.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search event analytics readiness notes"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search event analytics requirements"
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
                  No event analytics notes match “{query}”.
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
                Production event analytics needs event contracts, identity and
                consent controls, reliable attendance semantics, reproducible
                funnels, cohort definitions, privacy safeguards, retention,
                access review, data-quality checks, export controls, and tests
                for missing or duplicated events.
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
