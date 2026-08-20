import { useMemo, useState } from "react";
import {
  Database,
  FileCheck2,
  Filter,
  Grid2X2,
  LockKeyhole,
  Search,
  ShieldCheck,
  SlidersHorizontal,
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

type GridCapability = {
  title: string;
  description: string;
  icon: typeof Grid2X2;
};

const gridCapabilities: GridCapability[] = [
  {
    title: "Schema and row provenance",
    description:
      "No dataset, schema, columns, row identity, source, freshness, authorization, validation result, or record count is loaded.",
    icon: Database,
  },
  {
    title: "Sort, filter, and pagination",
    description:
      "No query, sort order, filter expression, page cursor, total count, aggregation, timezone, or consistency boundary is connected.",
    icon: Filter,
  },
  {
    title: "Selection and mutation safety",
    description:
      "No selected record, bulk action, edit, delete, optimistic update, conflict check, permission, transaction, or recovery state is available.",
    icon: SlidersHorizontal,
  },
  {
    title: "Export and audit",
    description:
      "No export format, column policy, redaction, download, retention, access log, audit event, or privacy review is configured.",
    icon: FileCheck2,
  },
];

export default function DataGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      gridCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="data-grid-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Data-operation boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="data-grid-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Data grid readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe, accessible tabular-data contract
                  without pretending that datasets, rows, queries, exports, or
                  mutations are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load dataset unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Data grid status"
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
                    Truthful grid state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No dataset, schema, columns, rows, source, query, selection,
                    export, or saved mutation state is loaded or persisted.
                  </CardDescription>
                </div>
                <Grid2X2 className="size-5 text-amber-500" aria-hidden="true" />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified tabular-data service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define schema and row provenance,
                  validate queries, enforce authorization, preserve consistency,
                  protect sensitive columns, handle edits and conflicts, and
                  record export and mutation audit evidence before this route
                  can operate on data.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable grid actions"
              >
                {[
                  "Load dataset",
                  "Apply filter",
                  "Export rows",
                  "Edit record",
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
                These safeguards must be verified before grid controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Dataset, schema, columns, row identity, source, freshness,
                authorization, validation, and record counts.
              </p>
              <p>
                Queries, sort order, filters, cursors, totals, aggregates,
                timezones, and consistency boundaries.
              </p>
              <p>
                Selections, bulk actions, edits, deletes, updates, conflicts,
                permissions, transactions, and recovery.
              </p>
              <p>
                Formats, columns, redaction, downloads, retention, access logs,
                audit, privacy, and sensitive data handling.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Data-grid capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query datasets, load rows, apply
              filters, select records, export data, edit cells, or persist a
              mutation.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search data-grid capability notes"
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
