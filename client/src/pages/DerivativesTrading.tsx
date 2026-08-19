import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Activity,
  Calculator,
  CircleDollarSign,
  Info,
  LockKeyhole,
  ShieldAlert,
  TrendingUp,
  XCircle,
} from "lucide-react";

type Requirement = {
  title: string;
  description: string;
  icon: typeof TrendingUp;
};
const REQUIREMENTS: readonly Requirement[] = [
  {
    title: "Instrument and market source",
    description:
      "Contracts, symbols, quotes, funding, settlement, and market hours need a verified provider and provenance.",
    icon: TrendingUp,
  },
  {
    title: "Risk and margin controls",
    description:
      "Leverage, collateral, liquidation, suitability, limits, and loss disclosures must be calculated server-side.",
    icon: ShieldAlert,
  },
  {
    title: "Order lifecycle",
    description:
      "Simulation, authorization, idempotency, execution, partial fills, rejection, cancellation, and receipts require a real venue.",
    icon: Activity,
  },
  {
    title: "Custody and reconciliation",
    description:
      "Balances, positions, PnL, fees, settlement, withdrawal, and audit records must reconcile with authorized accounts.",
    icon: LockKeyhole,
  },
];

export default function DerivativesTrading() {
  const [status, setStatus] = useState(
    "Derivatives service unavailable locally. No market data, account, order, position, margin, PnL, payment, or transaction mutation was started."
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No market data, account, order, position, margin, PnL, payment, or transaction mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="derivatives-title"
    >
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge
            variant="outline"
            className="border-fuchsia-400/30 text-fuchsia-200"
          >
            FINANCIAL READINESS PREVIEW
          </Badge>
          <h1
            id="derivatives-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <TrendingUp
              className="h-7 w-7 text-fuchsia-300"
              aria-hidden="true"
            />
            Derivatives trading
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review derivatives infrastructure requirements without inventing
            instruments, prices, leverage, positions, orders, margin, PnL, or
            execution outcomes.
          </p>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Derivatives service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No market venue, price feed, account authorization, risk engine,
                margin service, custody boundary, settlement provider, or
                monitoring system is connected. No trade or financial result is
                represented.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/50 p-5">
            <CircleDollarSign
              className="mb-3 h-5 w-5 text-sky-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Market data unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No contract, quote, funding rate, volume, or price is displayed.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Calculator
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Risk metrics unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No leverage, margin, liquidation, collateral, or PnL is
              calculated.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Activity
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Execution unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No order, position, fill, settlement, fee, or transaction status
              exists.
            </p>
          </Card>
        </section>
        <section aria-labelledby="requirements-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="requirements-title" className="text-xl font-semibold">
                Production requirements
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                These are planning requirements, not trading records.
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => announceUnavailable("Market refresh")}
            >
              Refresh unavailable
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {REQUIREMENTS.map(item => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-border/40 bg-card/40 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-secondary/60 p-3">
                      <Icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{item.title}</h3>
                        <Badge
                          variant="outline"
                          className="border-muted-foreground/30 text-muted-foreground"
                        >
                          Unavailable
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/30 p-5">
            <h2 className="font-semibold">Connect account unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No wallet, brokerage, or custody account can be linked.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Account connection")}
            >
              Connect unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <h2 className="font-semibold">Simulate order unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No contract, price, slippage, margin, or risk estimate is
              generated.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Order simulation")}
            >
              Simulate unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <h2 className="font-semibold">Place order unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No order, authorization, payment, or transaction can be submitted.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Order placement")}
            >
              Place unavailable
            </Button>
          </Card>
        </section>
        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">No financial claim</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Derivatives are high-risk instruments. A production
                implementation needs venue and contract verification,
                suitability, authorization, simulation, slippage and liquidation
                controls, custody separation, monitoring, reconciliation, clear
                risk disclosures, and failure recovery.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
        <div className="sr-only">
          <XCircle aria-hidden="true" /> No derivatives operation is active.
        </div>
      </div>
    </main>
  );
}
