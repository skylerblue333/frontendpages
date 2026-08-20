import { useMemo, useState } from "react";
import {
  BarChart3,
  BookOpenCheck,
  FileCheck2,
  LockKeyhole,
  Search,
  ShieldCheck,
  WalletCards,
  Workflow,
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

type ExchangeCapability = {
  title: string;
  description: string;
  icon: typeof BookOpenCheck;
};

const exchangeCapabilities: ExchangeCapability[] = [
  {
    title: "Market and instrument identity",
    description:
      "No exchange provider, market, instrument, symbol, precision, price feed, order book, liquidity source, or market-status record is connected.",
    icon: BookOpenCheck,
  },
  {
    title: "Account, balance, and risk",
    description:
      "No user identity, account, balance, margin, collateral, limit, fee schedule, risk check, custody scope, or ledger entry is verified.",
    icon: WalletCards,
  },
  {
    title: "Order and settlement lifecycle",
    description:
      "No order, side, amount, price, time-in-force, submission, match, fill, cancellation, withdrawal, deposit, settlement, or transaction status exists.",
    icon: Workflow,
  },
  {
    title: "Controls, reporting, and compliance",
    description:
      "No market surveillance, rate limit, sanctions screen, jurisdiction rule, reconciliation, statement, tax record, incident response, or audit evidence is available.",
    icon: FileCheck2,
  },
];

export default function CryptoExchange() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      exchangeCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="crypto-exchange-title"
    >
      <div data-ui-polish="batch-185" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Exchange-execution boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="crypto-exchange-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Crypto exchange readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe exchange contract without
                  pretending that markets, prices, balances, orders, deposits,
                  withdrawals, or settlement are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load exchange service unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Crypto exchange status"
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
                    Truthful exchange state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No provider, market, price, order book, account, balance,
                    ledger entry, order, fill, deposit, withdrawal, or saved
                    settlement is loaded or persisted.
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
                  No verified exchange service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must identify the provider and market data
                  source, authorize an account, reconcile a ledger, apply risk
                  and compliance controls, process order and custody events, and
                  provide settlement and audit evidence before this route can
                  trade.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable exchange actions"
              >
                {[
                  "Load markets",
                  "View balance",
                  "Place order",
                  "Deposit or withdraw",
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
                These safeguards must be verified before exchange controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Provider, market, instrument, symbol, precision, price feed,
                order book, liquidity, and market status.
              </p>
              <p>
                Identity, account, balance, margin, collateral, limits, fees,
                risk checks, custody, and ledger.
              </p>
              <p>
                Order, side, amount, price, time-in-force, submission, match,
                fill, cancellation, deposit, withdrawal, and settlement.
              </p>
              <p>
                Surveillance, rate limits, sanctions, jurisdiction,
                reconciliation, statements, tax, incidents, and audit.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Exchange capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query markets, load prices,
              access accounts, read balances, submit orders, move funds, or
              persist a ledger event.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search exchange capability notes"
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
