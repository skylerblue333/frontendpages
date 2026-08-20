import { useMemo, useState } from "react";
import {
  CheckSquare,
  ClipboardCheck,
  Eye,
  LockKeyhole,
  Search,
  ShieldCheck,
  Undo2,
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

type OperationsCapability = {
  title: string;
  description: string;
  icon: typeof CheckSquare;
};

const operationsCapabilities: OperationsCapability[] = [
  {
    title: "Scoped selection",
    description:
      "Target filters, ownership boundaries, exclusions, and pagination are not connected to a verified data contract.",
    icon: CheckSquare,
  },
  {
    title: "Preview and validation",
    description:
      "Dry-run previews, counts, field validation, conflict checks, and approval gates are not configured.",
    icon: Eye,
  },
  {
    title: "Idempotent execution",
    description:
      "Per-item results, retry policy, rate limits, concurrency, and duplicate protection require a real service.",
    icon: ClipboardCheck,
  },
  {
    title: "Rollback and audit",
    description:
      "Compensation, rollback limits, authorization, redacted logs, and operator evidence are not verified.",
    icon: Undo2,
  },
];

export default function BulkOperations() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      operationsCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="bulk-operations-title"
    >
      <div data-ui-polish="batch-182" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Mutation boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="bulk-operations-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Bulk operations readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route describes safe high-volume operations without
                  pretending that records were selected, changed, queued, or
                  completed.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Create operation unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Bulk operations status"
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
                    Truthful mutation state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No records are selected, previewed, mutated, queued, or
                    reported as successful.
                  </CardDescription>
                </div>
                <LockKeyhole
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified bulk-operation service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define target scope, authorization,
                  preview, validation, confirmation, idempotency, rate limits,
                  per-item outcomes, failure recovery, and audit evidence before
                  any mutation control can be enabled.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable bulk operation actions"
              >
                {[
                  "Select records",
                  "Preview changes",
                  "Run operation",
                  "Rollback",
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
                These safeguards must be verified before mutation controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Least-privilege authorization with explicit scope, approval, and
                confirmation.
              </p>
              <p>
                Dry-run preview with deterministic validation and an immutable
                operation plan.
              </p>
              <p>
                Idempotent execution, bounded concurrency, rate limits, retries,
                and per-item results.
              </p>
              <p>
                Compensation or rollback policy with structured redacted audit
                events and operator visibility.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Operations capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not select records, call APIs, or
              mutate data.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search operations capability notes"
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
