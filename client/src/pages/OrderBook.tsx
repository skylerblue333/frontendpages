import { useMemo, useState } from "react";
import {
  Activity,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Venue, instrument, and market provenance",
    area: "Market",
    description:
      "No venue, instrument, symbol, network, quote currency, trading pair, market status, source, or as-of timestamp is connected.",
  },
  {
    title: "Bid/ask data and freshness",
    area: "Data",
    description:
      "No bid, ask, price, size, depth, spread, sequence, aggregation rule, latency, stale-data indicator, or market-data provider is verified.",
  },
  {
    title: "Order and account authorization",
    area: "Security",
    description:
      "No account, balance, buying power, permissions, risk limit, order type, time-in-force, suitability, or authorization state is available.",
  },
  {
    title: "Integrity, execution, and auditability",
    area: "Reliability",
    description:
      "No duplicate guard, nonce, submission state, fill, partial fill, cancellation, rejection, transaction ID, reconciliation, or audit event exists.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No connect, refresh, place, modify, cancel, simulate, calculate, export, or order-book or trading mutation is connected or persisted.",
  },
];
export default function OrderBook() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Order-book data is unavailable locally. No venue, instrument, bid, ask, balance, order, fill, or market record was loaded or saved."
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
      `${action} is unavailable locally. No market, price, liquidity, account, order, fill, or trading-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="order-book-title"
    >
      <div data-ui-polish="batch-197" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Activity className="size-3.5" aria-hidden="true" />{" "}
                  Market-data readiness workspace
                </Badge>
                <Badge variant="secondary">No order-book data</Badge>
              </div>
              <h1
                id="order-book-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                OrderBook readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review venue and instrument provenance, bid/ask freshness,
                account authorization, execution integrity, auditability, and
                trading boundaries without implying that prices, liquidity,
                orders, balances, or fills exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Order-book data is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No market-data provider, venue, account service, balance source,
                order router, execution service, or persistence layer is
                connected. This workspace cannot fetch prices, estimate
                liquidity, place, modify, cancel, simulate, or claim orders or
                market data.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Activity
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No market data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No venue, instrument, symbol, bid, ask, size, depth, spread,
                source, or market record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No order state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No account, balance, order type, submission, fill, cancellation,
                rejection, or transaction state exists.
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
                No refresh, place, modify, cancel, simulate, calculate, export,
                or trading mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Order-book governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              connects market data, displays prices, estimates liquidity,
              handles orders, or saves trading records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search OrderBook readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter order-book requirements"
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
                  No order-book requirements match “{query}”.
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
                Production order-book and trading functionality requires
                authoritative market data, venue and instrument validation,
                stale-data handling, authenticated account permissions, risk
                controls, duplicate-safe submission, verified fills and
                failures, transaction identifiers, reconciliation, audit
                history, and clear non-advisory disclosures. No market, price,
                liquidity, account, order, fill, or trading record is claimed
                here.
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
