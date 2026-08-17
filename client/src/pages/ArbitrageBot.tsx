import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Bot,
  CircleSlash2,
  Coins,
  Gauge,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type StrategyState = "Review" | "Planned" | "Unavailable";
type StrategyFixture = {
  id: string;
  title: string;
  venue: string;
  state: StrategyState;
  description: string;
  marketData: string;
  wallet: string;
  risk: string;
  execution: string;
};
const strategies: StrategyFixture[] = [
  {
    id: "cross-venue",
    title: "Cross-venue spread review",
    venue: "Multiple venues",
    state: "Review",
    description:
      "A local strategy concept for comparing venues after verified price, fee, depth, and freshness data are connected.",
    marketData: "Market data unavailable",
    wallet: "Wallet unavailable",
    risk: "Risk limits undefined",
    execution: "Execution disabled",
  },
  {
    id: "latency",
    title: "Latency-aware routing",
    venue: "Venue connector",
    state: "Planned",
    description:
      "A strategy concept pending deterministic latency, order-book, failure, and idempotency controls.",
    marketData: "Order book unavailable",
    wallet: "Wallet unavailable",
    risk: "Risk limits undefined",
    execution: "Execution disabled",
  },
  {
    id: "rebalance",
    title: "Inventory rebalance",
    venue: "Portfolio connector",
    state: "Unavailable",
    description:
      "A restricted strategy concept requiring verified balances, custody, network, and transaction state.",
    marketData: "Balance data unavailable",
    wallet: "Custody unavailable",
    risk: "Risk limits undefined",
    execution: "Execution disabled",
  },
];
const states: Array<"All" | StrategyState> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];
const venues = [
  "All",
  ...Array.from(new Set(strategies.map(strategy => strategy.venue))),
];

export default function ArbitrageBot() {
  const [venueFilter, setVenueFilter] = useState("All");
  const [stateFilter, setStateFilter] =
    useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(strategies[0].id);
  const [status, setStatus] = useState(
    "Arbitrage automation unavailable. Showing local strategy fixtures only."
  );
  const filtered = useMemo(
    () =>
      strategies.filter(
        strategy =>
          (venueFilter === "All" || strategy.venue === venueFilter) &&
          (stateFilter === "All" || strategy.state === stateFilter)
      ),
    [stateFilter, venueFilter]
  );
  const selected =
    strategies.find(strategy => strategy.id === selectedId) ?? strategies[0];
  const reset = () => {
    setVenueFilter("All");
    setStateFilter("All");
    setSelectedId(strategies[0].id);
    setStatus(
      "Arbitrage preview reset locally. No market data, wallet, order, trade, profit, or execution state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No market query, wallet lookup, order, trade, transaction, signing, exchange, or execution request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-200">
              <Bot aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Arbitrage bot
                </h1>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review strategy concepts without fabricated prices, balances,
                orders, trades, profits, wallet actions, or automated execution
                claims.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset arbitrage bot preview"
            className="self-start border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white"
            onClick={reset}
            variant="outline"
          >
            <RotateCcw aria-hidden="true" className="mr-2 h-4 w-4" />
            Reset preview
          </Button>
        </header>
        <section
          className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/[0.07] p-4 text-sm text-slate-300"
          role="note"
        >
          <div className="flex gap-3">
            <AlertTriangle
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
            />
            <p>
              <strong className="font-semibold text-amber-100">
                Arbitrage automation unavailable.
              </strong>{" "}
              No verified market-data source, exchange connector, wallet
              custody, balance feed, order book, risk engine, signing service,
              or transaction monitor is connected. The strategies below are
              local fixtures.
            </p>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="border-b border-slate-800 pb-6">
              <div className="flex items-center gap-2">
                <Gauge aria-hidden="true" className="h-4 w-4 text-slate-500" />
                <p className="text-sm font-medium text-slate-300">
                  Filter strategy fixtures
                </p>
              </div>
              <div
                className="mt-4 flex flex-wrap gap-2"
                role="group"
                aria-label="Filter strategy venue"
              >
                {venues.map(venue => (
                  <Button
                    aria-pressed={venueFilter === venue}
                    className={
                      venueFilter === venue
                        ? "bg-cyan-500 text-white hover:bg-cyan-400"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={venue}
                    onClick={() => {
                      setVenueFilter(venue);
                      setStatus(`${venue} strategy venue selected locally.`);
                    }}
                    size="sm"
                    variant={venueFilter === venue ? "default" : "outline"}
                  >
                    {venue}
                  </Button>
                ))}
              </div>
              <div
                className="mt-3 flex flex-wrap gap-2"
                role="group"
                aria-label="Filter strategy state"
              >
                {states.map(state => (
                  <Button
                    aria-pressed={stateFilter === state}
                    className={
                      stateFilter === state
                        ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-100"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={state}
                    onClick={() => {
                      setStateFilter(state);
                      setStatus(`${state} strategy state selected locally.`);
                    }}
                    size="sm"
                    variant="outline"
                  >
                    {state}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {filtered.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-8 text-center">
                  <Bot
                    aria-hidden="true"
                    className="mx-auto h-8 w-8 text-slate-600"
                  />
                  <p className="mt-3 font-medium text-slate-300">
                    No matching strategy fixtures
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Try another venue or state.
                  </p>
                </div>
              ) : (
                filtered.map(strategy => (
                  <button
                    aria-pressed={selectedId === strategy.id}
                    className={`w-full rounded-xl border p-5 text-left transition-colors ${selectedId === strategy.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-600"}`}
                    key={strategy.id}
                    onClick={() => {
                      setSelectedId(strategy.id);
                      setStatus(
                        `${strategy.title} selected for local strategy review.`
                      );
                    }}
                    type="button"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-cyan-200">
                        <Sparkles aria-hidden="true" className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <p className="font-medium text-slate-200">
                              {strategy.title}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {strategy.venue}
                            </p>
                          </div>
                          <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                            {strategy.state}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {strategy.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>
            <p
              aria-live="polite"
              className="mt-6 rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Selected strategy
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {selected.title}
              </h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.venue} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Market data</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.marketData}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Wallet</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.wallet}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Risk</p>
                  <p className="mt-1 text-sm text-slate-200">{selected.risk}</p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Execution</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.execution}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No spread, balance, fee, order, fill, slippage, gas, profit,
                loss, or transaction state is available.
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Simulate")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                  Simulate unavailable
                </Button>
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Arm")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                  Arm unavailable
                </Button>
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Execute")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                  Execute unavailable
                </Button>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Financial boundary
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No exchange, wallet, market-data, order, signing,
                    transaction, or execution operation is available. Filters
                    and selection are local only.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <ShieldCheck
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Risk posture
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Production automation requires venue validation, price
                    freshness, deterministic risk limits, idempotency, custody
                    controls, failure handling, auditability, and explicit
                    confirmation.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex gap-3 text-slate-600">
                <Coins aria-hidden="true" className="h-5 w-5" />
                <WalletCards aria-hidden="true" className="h-5 w-5" />
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
