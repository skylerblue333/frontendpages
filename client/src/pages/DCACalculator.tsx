import { useMemo, useState } from "react";
import {
  CalendarClock,
  Calculator,
  FileCheck2,
  LockKeyhole,
  Search,
  ShieldCheck,
  TrendingUp,
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

type DcaCapability = {
  title: string;
  description: string;
  icon: typeof Calculator;
};

const dcaCapabilities: DcaCapability[] = [
  {
    title: "Asset and price inputs",
    description:
      "No asset, network, price source, timestamp, currency, contribution amount, minimum order, precision, or fee schedule is connected.",
    icon: Calculator,
  },
  {
    title: "Schedule and execution",
    description:
      "No frequency, start date, duration, funding source, wallet authorization, order instruction, execution window, failure retry, or pause state is configured.",
    icon: CalendarClock,
  },
  {
    title: "Custody and accounting",
    description:
      "No wallet, account, balance, holdings, cost basis, transaction, tax lot, custody boundary, ledger, or reconciliation record is available.",
    icon: WalletCards,
  },
  {
    title: "Performance and risk",
    description:
      "No historical series, forecast, return, yield, benchmark, volatility, downside, scenario, guarantee, recommendation, or audit evidence is verified.",
    icon: TrendingUp,
  },
];

export default function DCACalculator() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      dcaCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="dca-calculator-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Investment-calculation boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="dca-calculator-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  DCA calculator readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a transparent dollar-cost-averaging
                  contract without pretending that prices, schedules, returns,
                  execution, or investment outcomes are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load DCA service unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="DCA calculator status"
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
                    Truthful DCA state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No asset, price, contribution, schedule, wallet, balance,
                    order, holding, cost basis, return, or saved plan is loaded
                    or persisted.
                  </CardDescription>
                </div>
                <Calculator
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified DCA-calculation service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must source time-stamped prices, validate
                  inputs and fees, define schedule and funding rules, authorize
                  execution, reconcile custody and tax lots, and distinguish
                  historical illustrations from uncertain future outcomes before
                  this route can calculate or place a plan.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable DCA actions"
              >
                {[
                  "Load asset",
                  "Set schedule",
                  "Review estimate",
                  "Create plan",
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
                These safeguards must be verified before DCA controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Asset, network, price source, timestamp, currency, contribution,
                minimum order, precision, and fees.
              </p>
              <p>
                Frequency, start date, duration, funding, wallet authorization,
                order instruction, execution, retry, and pause.
              </p>
              <p>
                Wallet, account, balance, holdings, cost basis, transactions,
                tax lots, custody, ledger, and reconciliation.
              </p>
              <p>
                History, forecasts, returns, yields, benchmarks, volatility,
                downside, scenarios, guarantees, advice, and audit.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>DCA capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query prices, calculate returns,
              access wallets, schedule orders, move funds, or persist a plan.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search DCA capability notes"
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
