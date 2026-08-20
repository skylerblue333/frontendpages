import { useMemo, useState } from "react";
import {
  AlertTriangle,
  BarChart3,
  FileSearch,
  LockKeyhole,
  Search,
  ShieldCheck,
  WalletCards,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Market-data and instrument provenance",
    area: "Data",
    description:
      "No asset, venue, order book, quote, candle, timestamp, liquidity, fee, settlement, or independently verified market source is connected.",
  },
  {
    title: "Account authorization and suitability",
    area: "Access",
    description:
      "No account, role, jurisdiction, KYC status, trading permission, risk profile, leverage limit, or suitability review is available.",
  },
  {
    title: "Order validation and execution",
    area: "Execution",
    description:
      "No order type, quantity, price, precision, balance check, idempotency key, signature, execution report, rejection, or cancellation state exists.",
  },
  {
    title: "Custody, balances, and reconciliation",
    area: "Finance",
    description:
      "No wallet, exchange balance, private-key boundary, deposit, withdrawal, transaction hash, ledger, fee, tax, or reconciliation record is verified.",
  },
  {
    title: "Risk, compliance, and recovery",
    area: "Safety",
    description:
      "No volatility guard, circuit breaker, rate limit, fraud control, audit log, incident, dispute, recovery, or clear non-advisory disclosure workflow is configured.",
  },
];
export default function MobileTrading() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Mobile trading is unavailable locally. No market data, account, order, balance, wallet, execution, or financial record was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No asset, quote, order, balance, wallet, execution, custody, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="mobile-trading-title"
    >
      <div data-ui-polish="batch-196" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BarChart3 className="size-3.5" aria-hidden="true" />{" "}
                  Trading-readiness workspace
                </Badge>
                <Badge variant="secondary">No venue connected</Badge>
              </div>
              <h1
                id="mobile-trading-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MobileTrading readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review market-data provenance, account authorization, order
                validation, execution, custody, balances, risk, compliance,
                privacy, and recovery without implying that trades, prices,
                portfolios, or financial results exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Mobile trading is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No venue, market-data provider, account authorization service,
                order router, custody layer, compliance system, risk engine, or
                persistence layer is connected. This workspace cannot quote,
                buy, sell, cancel, transfer, or claim a trade.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <BarChart3
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No market state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No asset, venue, quote, order book, price, candle, timestamp,
                liquidity, fee, or market source is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <WalletCards
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No account state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No account, balance, order, execution, wallet, transaction,
                portfolio, or custody record exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No trading actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No quote, buy, sell, cancel, transfer, deposit, withdrawal,
                leverage, or financial-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Trading-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              fetches prices, opens an account, submits an order, signs a
              transaction, changes a balance, or gives a financial
              recommendation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search mobile trading readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter trading requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(item => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${item.title}`)}
                  >
                    <FileSearch className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No trading notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Production trading requires independently verified market data,
                account and jurisdiction controls, validated and idempotent
                order execution, secure custody, balance and ledger
                reconciliation, risk and compliance controls, rate limits,
                incident recovery, and clear non-advisory disclosures. No asset,
                order, balance, wallet, execution, custody, or financial record
                is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <ShieldCheck
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
