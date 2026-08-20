import { useMemo, useState } from "react";
import {
  Accessibility,
  BarChart3,
  Database,
  LayoutDashboard,
  LockKeyhole,
  RefreshCw,
  Search,
  ShieldCheck,
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

type DashboardCapability = {
  title: string;
  description: string;
  icon: typeof LayoutDashboard;
};

const dashboardCapabilities: DashboardCapability[] = [
  {
    title: "Widget and metric contracts",
    description:
      "No typed widget schema, metric definition, source lineage, units, ownership, freshness, or empty/error state is connected.",
    icon: BarChart3,
  },
  {
    title: "Layout and persistence",
    description:
      "Grid layout, responsive density, resize rules, ordering, saved views, URL state, and persistence are not configured.",
    icon: LayoutDashboard,
  },
  {
    title: "Refresh and reliability",
    description:
      "Refresh cadence, cache semantics, partial failures, loading state, retry behavior, and consistency are unavailable.",
    icon: RefreshCw,
  },
  {
    title: "Access and accessibility",
    description:
      "Account-scoped authorization, redaction, keyboard navigation, screen-reader summaries, and audit controls are not verified.",
    icon: Accessibility,
  },
];

export default function ChartDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      dashboardCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="chart-dashboard-title"
    >
      <div data-ui-polish="batch-183" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Dashboard boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="chart-dashboard-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Chart dashboard readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a dependable chart dashboard without
                  pretending that widgets, metrics, saved layouts, refreshes, or
                  account-scoped data are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load dashboard unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Chart dashboard status"
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
                    Truthful dashboard state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No widget, metric, source, layout, refresh, saved view, or
                    dashboard value is loaded or persisted.
                  </CardDescription>
                </div>
                <LayoutDashboard
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified chart-dashboard service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define widget and metric schemas, source
                  lineage, responsive layout, refresh and cache behavior,
                  partial failures, accessibility, authorization, and privacy
                  before this route can render a dashboard.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable dashboard actions"
              >
                {[
                  "Choose dashboard",
                  "Add widget",
                  "Refresh data",
                  "Save layout",
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
                These safeguards must be verified before dashboard controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Typed widget schema, metric definition, source lineage, units,
                ownership, freshness, and empty/error states.
              </p>
              <p>
                Responsive grid, density, resize and ordering rules, saved
                views, URL state, and persistence semantics.
              </p>
              <p>
                Refresh cadence, cache correctness, partial failures, loading,
                retry, and consistency behavior.
              </p>
              <p>
                Account-scoped access, redaction, keyboard navigation,
                screen-reader summaries, and audit controls.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Chart dashboard capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not load widgets, calculate metrics,
              refresh providers, or persist layouts.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search chart dashboard capability notes"
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
