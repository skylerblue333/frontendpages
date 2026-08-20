import { useMemo, useState } from "react";
import {
  Calculator,
  CircleAlert,
  FileText,
  LockKeyhole,
  Search,
  ShieldCheck,
  WalletCards,
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

type PlanningCapability = {
  title: string;
  description: string;
  icon: typeof Calculator;
};

const planningCapabilities: PlanningCapability[] = [
  {
    title: "Plan structure",
    description:
      "Categories, periods, allocations, and version rules are not connected to a persistence contract.",
    icon: FileText,
  },
  {
    title: "Verified inputs",
    description:
      "No income, expense, account, balance, or transaction data is loaded on this route.",
    icon: WalletCards,
  },
  {
    title: "Calculation policy",
    description:
      "Totals, forecasts, alerts, and recommendations require a documented calculation policy and tests.",
    icon: Calculator,
  },
  {
    title: "Privacy and access",
    description:
      "Account ownership, authorization, redaction, export, and audit requirements are not verified.",
    icon: ShieldCheck,
  },
];

export default function BudgetPlanner() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      planningCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="budget-planner-title"
    >
      <div data-ui-polish="batch-182" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Local planning boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="budget-planner-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Budget planning readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  The route explains what a safe budgeting workflow needs
                  without presenting personal financial data, calculations,
                  forecasts, or recommendations as real.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Create budget unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Budget planning status"
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
                    Truthful planning state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No budget, balance, income, expense, or recommendation is
                    loaded or calculated.
                  </CardDescription>
                </div>
                <CircleAlert
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified budget data is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real budgeting contract must define data sources, currency
                  and period rules, validation, calculations, consent, storage,
                  and access controls before this route can display or save a
                  plan.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable budget actions"
              >
                {[
                  "New plan",
                  "Add category",
                  "Calculate totals",
                  "Export plan",
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
                These safeguards must be verified before financial planning
                controls are enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Explicit currency, time-period, rounding, category, and version
                semantics.
              </p>
              <p>
                Validated user inputs with clear loading, failure, retry, and
                empty states.
              </p>
              <p>
                Deterministic, tested calculations with no implied financial
                advice or guarantees.
              </p>
              <p>
                Authorization, privacy, redacted logs, export controls, and
                deletion behavior.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Planning capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not read accounts, query markets, or
              persist changes.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search planning capability notes"
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
