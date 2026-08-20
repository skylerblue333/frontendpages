import { useMemo, useState } from "react";
import {
  Activity,
  AlertTriangle,
  BadgeDollarSign,
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

type DerivativesCapability = {
  title: string;
  description: string;
  icon: typeof BadgeDollarSign;
};

const derivativesCapabilities: DerivativesCapability[] = [
  {
    title: "Instrument and market provenance",
    description:
      "No underlying, contract specification, venue, index, oracle, price feed, mark, funding, expiry, liquidity, or market-hours source is verified.",
    icon: BadgeDollarSign,
  },
  {
    title: "Margin, leverage, and liquidation",
    description:
      "No collateral, initial or maintenance margin, leverage limit, cross or isolated mode, liquidation trigger, insurance fund, or risk engine is connected.",
    icon: AlertTriangle,
  },
  {
    title: "Authorization and execution",
    description:
      "No account, suitability check, order, quote, approval, signature, slippage, fee, transaction, fill, position, or settlement is available.",
    icon: WalletCards,
  },
  {
    title: "Custody, compliance, and audit",
    description:
      "No custody boundary, loss disclosure, sanctions or jurisdiction review, monitoring, reconciliation, incident recovery, notification, or audit record is configured.",
    icon: FileCheck2,
  },
];

export default function DerivativeTrading() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      derivativesCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="derivative-trading-title"
    >
      <div data-ui-polish="batch-186" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Leveraged-trading boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="derivative-trading-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Derivative trading readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a high-risk derivatives contract without
                  pretending that instruments, prices, margin, leverage,
                  liquidation, orders, positions, or financial outcomes are
                  live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load derivatives service unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Derivative trading status"
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
                    Truthful derivatives state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No instrument, market, account, margin, leverage, order,
                    position, liquidation, transaction, or saved trading record
                    is loaded or persisted.
                  </CardDescription>
                </div>
                <Activity
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified derivatives-trading service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must establish instrument and venue
                  provenance, market and price sources, account authorization,
                  suitability and jurisdiction checks, margin and liquidation
                  rules, execution and settlement status, custody, monitoring,
                  recovery, and loss disclosures before this route can represent
                  or place a leveraged trade.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable derivatives actions"
              >
                {[
                  "Load instruments",
                  "Review margin",
                  "Preview order",
                  "Place trade",
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
                These safeguards must be verified before derivatives controls
                are enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Underlying assets, contracts, venues, indexes, oracles, price
                feeds, marks, funding, expiry, liquidity, and market hours.
              </p>
              <p>
                Collateral, initial and maintenance margin, leverage, position
                mode, liquidation, insurance, and risk-engine rules.
              </p>
              <p>
                Accounts, suitability, jurisdiction, orders, quotes, approvals,
                signatures, slippage, fees, fills, positions, and settlement.
              </p>
              <p>
                Custody, losses, sanctions, monitoring, reconciliation,
                incidents, notifications, audit, and non-advice disclosures.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Derivatives capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query instruments or prices,
              calculate margin or leverage, access an account, preview an order,
              or execute a trade.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search derivatives capability notes"
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
