import { useMemo, useState } from "react";
import {
  Accessibility,
  BarChart3,
  Database,
  Filter,
  LockKeyhole,
  Search,
  ShieldCheck,
  Sigma,
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

type ChartCapability = {
  title: string;
  description: string;
  icon: typeof BarChart3;
};

const chartCapabilities: ChartCapability[] = [
  {
    title: "Source lineage and schema",
    description:
      "No data source, field schema, timestamp, units, provenance, freshness, or account scope is connected to this chart view.",
    icon: Database,
  },
  {
    title: "Aggregation and analysis",
    description:
      "Grouping, aggregation, filters, denominators, missing values, uncertainty, comparisons, and statistical semantics are not configured.",
    icon: Sigma,
  },
  {
    title: "Chart rendering",
    description:
      "Axes, scales, legends, tooltips, responsive behavior, export, empty states, error states, and visual regression evidence are unavailable.",
    icon: BarChart3,
  },
  {
    title: "Accessibility and privacy",
    description:
      "Data tables, keyboard access, screen-reader summaries, redaction, authorization, retention, and audit controls are not verified.",
    icon: Accessibility,
  },
];

export default function ChartAnalysis() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      chartCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="chart-analysis-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Analytics boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="chart-analysis-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Chart analysis readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents trustworthy chart analysis without
                  pretending that data, metrics, trends, comparisons, or
                  conclusions are live or authoritative.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load chart data unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Chart analysis status"
        >
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck
                      className="size-5 text-primary"
                      aria-hidden="true"
                    />
                    Truthful chart state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No dataset, series, metric, filter, calculation, trend,
                    comparison, or insight is loaded or generated.
                  </CardDescription>
                </div>
                <BarChart3
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified chart-analysis service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define source lineage, dimensions, units,
                  aggregation, missing values, uncertainty, rendering,
                  accessibility, privacy, and review semantics before this route
                  can analyze or visualize data.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable chart actions"
              >
                {[
                  "Choose dataset",
                  "Add series",
                  "Apply filters",
                  "Export chart",
                ].map(label => (
                  <Button
                    key={label}
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled
                    aria-disabled="true"
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Release requirements</CardTitle>
              <CardDescription>
                These safeguards must be verified before chart controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Source schema, fields, timestamps, units, provenance, freshness,
                account scope, and query boundaries.
              </p>
              <p>
                Dimensions, aggregation, denominators, filters, missing values,
                uncertainty, comparisons, and statistical semantics.
              </p>
              <p>
                Axes, scales, legends, tooltips, responsive layout, export,
                loading/empty/error states, and visual regression.
              </p>
              <p>
                Data tables, keyboard access, screen-reader summaries,
                redaction, authorization, retention, and audit controls.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Chart analysis capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not read datasets, calculate
              metrics, render results, export data, or persist analysis.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search chart analysis capability notes"
                placeholder="Search capability notes"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            {visibleCapabilities.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {visibleCapabilities.map(
                  ({ title, description, icon: Icon }) => (
                    <div
                      key={title}
                      className="rounded-xl border border-border/70 p-4"
                    >
                      <div className="flex items-center gap-2 font-medium">
                        <Icon
                          className="size-4 text-primary"
                          aria-hidden="true"
                        />
                        {title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div
                className="rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground"
                role="status"
              >
                No capability notes match “{searchQuery}”.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
