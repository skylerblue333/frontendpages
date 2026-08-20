import { useMemo, useState } from "react";
import {
  BarChart3,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  TrendingUp,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Metric provenance and ownership",
    area: "Evidence",
    description:
      "No metric identifier, source, owner, event stream, subject, cohort, permission, observation time, or statistics record is connected.",
  },
  {
    title: "Definitions, periods, and calculations",
    area: "Method",
    description:
      "No numerator, denominator, unit, currency, period, aggregation, comparison, ranking, trend, baseline, or calculation definition is verified.",
  },
  {
    title: "Privacy, visibility, and authorization",
    area: "Controls",
    description:
      "No user consent, audience, role, sensitive-data classification, ownership check, visibility rule, or access decision exists.",
  },
  {
    title: "Freshness, quality, and recovery",
    area: "Reliability",
    description:
      "No source freshness, completeness, validation, anomaly handling, correction workflow, retry, stale-data rule, or audit event is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No refresh, filter, compare, export, share, annotate, subscribe, reset, or metric, account, financial, or personal-data mutation is connected or persisted.",
  },
];
export default function QuickStats() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Quick Stats is unavailable locally. No metric, source, subject, count, trend, ranking, comparison, period, calculation, or personal-data record was loaded or changed."
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
      `${action} is unavailable locally. No metric, count, trend, ranking, comparison, financial, account, or personal-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="quick-stats-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BarChart3 className="size-3.5" aria-hidden="true" />{" "}
                  Statistics-readiness workspace
                </Badge>
                <Badge variant="secondary">No metrics state</Badge>
              </div>
              <h1
                id="quick-stats-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                QuickStats readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review metric provenance and ownership, definitions, calculation
                periods, privacy and authorization, freshness, quality,
                recovery, and persistence boundaries without implying that
                counts, trends, rankings, comparisons, or user metrics exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Quick Stats is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No metric source, event stream, calculation definition, privacy
                policy, authorization control, freshness signal, quality check,
                or persistence layer is connected. This workspace cannot
                refresh, filter, compare, export, share, annotate, subscribe,
                reset, or claim statistics.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <BarChart3
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No metric state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No identifier, source, owner, subject, cohort, permission,
                observation time, or statistics record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <TrendingUp
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No calculation state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No count, trend, ranking, comparison, period, baseline, unit, or
                aggregation is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No statistics actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No refresh, filter, compare, export, share, annotate, subscribe,
                reset, or metric mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Statistics governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads metrics, calculates counts, exposes profiles, or saves
              statistics records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search QuickStats readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter statistics requirements"
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
                  No statistics requirements match “{query}”.
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
                Production statistics require authoritative event or metric
                sources, explicit definitions and period discipline, transparent
                calculations, privacy and audience controls, role authorization,
                freshness and completeness signals, anomaly and correction
                handling, audit history, and clear user-facing explanations for
                each value. No metric, count, trend, ranking, comparison,
                financial, account, or personal-data record is claimed here.
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
