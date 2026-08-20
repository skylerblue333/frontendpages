import { useMemo, useState } from "react";
import {
  Calculator,
  ClipboardCheck,
  Coins,
  FileSpreadsheet,
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

type AllocationCapability = {
  title: string;
  description: string;
  icon: typeof Calculator;
};

const allocationCapabilities: AllocationCapability[] = [
  {
    title: "Source ledger and period",
    description:
      "No ledger, account scope, reporting period, currency, cost center, transaction source, or freshness timestamp is connected.",
    icon: FileSpreadsheet,
  },
  {
    title: "Allocation basis and calculation",
    description:
      "No allocation rule, driver, weight, rounding policy, formula, denominator, tax treatment, adjustment, or calculated amount is verified.",
    icon: Calculator,
  },
  {
    title: "Approval and controls",
    description:
      "No preparer, reviewer, authorization, segregation of duties, version, lock, change history, or approval state is configured.",
    icon: ClipboardCheck,
  },
  {
    title: "Variance and export",
    description:
      "No budget, actual, variance, forecast, reconciliation, exception, report, export, or persisted allocation result is available.",
    icon: Coins,
  },
];

export default function CostAllocation() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      allocationCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="cost-allocation-title"
    >
      <div data-ui-polish="batch-184" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Financial-data boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="cost-allocation-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Cost allocation readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents controlled cost allocation without
                  pretending that budgets, ledger data, allocation rules,
                  calculated totals, or financial approvals are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load allocation data unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Cost allocation status"
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
                    Truthful allocation state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No ledger, budget, cost center, currency, allocation rule,
                    calculated amount, approval, variance, or saved result is
                    loaded or persisted.
                  </CardDescription>
                </div>
                <SlidersHorizontal
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified allocation service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must identify source ledger data, account
                  scope, period, currency, allocation drivers, calculation
                  rules, approvals, reconciliation, and reporting evidence
                  before this route can calculate or save an allocation.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable allocation actions"
              >
                {[
                  "Load ledger",
                  "Create allocation",
                  "Calculate totals",
                  "Export report",
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
                These safeguards must be verified before allocation controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Ledger, account scope, reporting period, currency, cost center,
                source, and freshness.
              </p>
              <p>
                Allocation driver, weights, formulas, rounding, denominator, tax
                treatment, and adjustments.
              </p>
              <p>
                Preparer, reviewer, authorization, segregation of duties,
                version, lock, and change history.
              </p>
              <p>
                Budget, actual, variance, forecast, reconciliation, exceptions,
                report generation, and export.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Allocation capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query financial data, calculate
              an amount, change a ledger, approve an allocation, export a
              report, or persist a result.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search allocation capability notes"
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
