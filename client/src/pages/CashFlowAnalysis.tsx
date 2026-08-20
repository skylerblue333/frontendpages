import { useMemo, useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  BarChart3,
  FileCheck2,
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

type CashFlowCapability = {
  title: string;
  description: string;
  icon: typeof BarChart3;
};

const cashFlowCapabilities: CashFlowCapability[] = [
  {
    title: "Transaction lineage",
    description:
      "No account, transaction, timestamp, currency, source, duplicate, or import lineage is connected to this analysis.",
    icon: WalletCards,
  },
  {
    title: "Classification and periods",
    description:
      "Income/expense classification, categories, recurring rules, period boundaries, and timezone semantics are not configured.",
    icon: FileCheck2,
  },
  {
    title: "Reconciliation and scenarios",
    description:
      "Opening/closing reconciliation, transfers, pending items, forecasts, scenarios, and variance logic are unavailable.",
    icon: BarChart3,
  },
  {
    title: "Privacy and non-advisory safety",
    description:
      "Account-scoped access, redaction, retention, export, audit evidence, and non-advisory review are not verified.",
    icon: ShieldCheck,
  },
];

export default function CashFlowAnalysis() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      cashFlowCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="cash-flow-analysis-title"
    >
      <div data-ui-polish="batch-182" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Financial boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="cash-flow-analysis-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Cash-flow analysis readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a careful cash-flow analysis workflow
                  without presenting unverified balances, transactions,
                  forecasts, or financial advice as authoritative.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load cash-flow data unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Cash-flow analysis status"
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
                    Truthful cash-flow state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No account, transaction, balance, inflow, outflow, forecast,
                    variance, or recommendation is loaded or calculated.
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
                  No verified cash-flow analysis service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define transaction lineage,
                  classifications, periods, reconciliation, transfers, scenario
                  logic, account scope, privacy controls, and review states
                  before this route can analyze financial data.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable cash-flow actions"
              >
                {[
                  "Select account",
                  "Choose period",
                  "Analyze cash flow",
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
                These safeguards must be verified before analysis controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Account and transaction sources with timestamp, currency,
                duplicate, import, and lineage semantics.
              </p>
              <p>
                Typed income/expense categories, recurring rules, period
                boundaries, transfers, pending items, and timezone.
              </p>
              <p>
                Opening/closing reconciliation, variance, forecast, scenario,
                and failure/empty-state behavior.
              </p>
              <p>
                Account-scoped authorization, redaction, retention, export,
                audit evidence, and non-advisory review.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Cash-flow capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not read accounts, import
              transactions, calculate figures, or persist analysis.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search cash-flow capability notes"
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
