import { useMemo, useState } from "react";
import {
  AlertTriangle,
  FileWarning,
  KeyRound,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  TrendingUp,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Account, asset, and venue authorization",
    area: "Access",
    description:
      "No authenticated trader, account, venue, market, network, asset, custody mode, or permission record is connected.",
  },
  {
    title: "Collateral, leverage, and risk",
    area: "Risk",
    description:
      "No collateral balance, maintenance margin, leverage limit, position size, funding rate, risk tier, or liquidation threshold is verified.",
  },
  {
    title: "Pricing and order integrity",
    area: "Market",
    description:
      "No order book, index price, mark price, spread, slippage limit, fee, nonce, order ID, or execution source is loaded.",
  },
  {
    title: "Transaction and custody security",
    area: "Custody",
    description:
      "No approval, signed order, private key, seed phrase, transaction hash, confirmation, failed order, or settlement record exists.",
  },
  {
    title: "Reconciliation and liquidation controls",
    area: "Operations",
    description:
      "No position ledger, funding reconciliation, duplicate guard, liquidation engine, alert, audit event, incident, or recovery evidence is available.",
  },
];
export default function MarginTrading() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "MarginTrading is unavailable locally. No trader, venue, asset, price, collateral, leverage, position, order, or transaction was loaded or saved."
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
      `${action} is unavailable locally. No collateral, leverage, position, order, approval, liquidation, settlement, or financial mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="margin-trading-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <TrendingUp className="size-3.5" aria-hidden="true" />{" "}
                  Leveraged-trading risk readiness
                </Badge>
                <Badge variant="secondary">No trading service</Badge>
              </div>
              <h1
                id="margin-trading-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MarginTrading readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review account authorization, collateral, leverage, pricing,
                orders, custody, liquidation, and reconciliation contracts
                without implying that margin balances, positions, prices,
                orders, or transaction outcomes exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Trading service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No venue connector, market feed, wallet custody boundary,
                collateral ledger, risk engine, order gateway, liquidation
                process, or persistence layer is connected. This is a readiness
                workspace, not a margin-trading console.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <KeyRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No account or position</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No trader, venue, market, asset, collateral, leverage, position,
                funding, or maintenance state is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <AlertTriangle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No risk or pricing</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No order book, mark price, index price, spread, fee, liquidation
                threshold, slippage, or risk signal is verified.
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
                No order, approval, open, close, increase, reduce, repay,
                liquidate, sign, or financial mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Leveraged-trading governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              connects a venue, loads a price, calculates leverage, creates an
              order, signs a transaction, changes collateral, or saves a
              position.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search MarginTrading readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter leveraged-trading requirements"
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
                    <FileWarning className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No leveraged-trading notes match “{query}”.
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
                A production margin-trading system needs verified venue and
                account authorization, collateral and leverage controls,
                reliable pricing, deterministic order and transaction handling,
                custody security, funding and liquidation controls,
                reconciliation, auditability, and tested failure recovery. No
                position, order, balance, price, or liquidation state is claimed
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
