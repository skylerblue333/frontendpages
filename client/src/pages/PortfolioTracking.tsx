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
    title: "Account-scoped holdings and tax-lot provenance",
    area: "Ownership",
    description:
      "No user, account, portfolio, wallet or broker connection, holding, lot, quantity, cost basis, currency, or ownership timestamp is connected.",
  },
  {
    title: "Authoritative prices and performance history",
    area: "Data",
    description:
      "No price source, market, exchange, valuation time, return period, cash-flow treatment, fee treatment, currency conversion, or historical series is verified.",
  },
  {
    title: "Alerts, freshness, and reconciliation",
    area: "Controls",
    description:
      "No sync cadence, stale-data threshold, performance alert, duplicate guard, balance reconciliation, discrepancy, correction history, or failed-sync recovery exists.",
  },
  {
    title: "Privacy, authorization, and rebalance boundaries",
    area: "Safety",
    description:
      "No account authorization, sensitive financial-data boundary, access role, audit event, tax context, suitability context, rebalance guard, or non-advisory disclosure is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No connect, sync, import, refresh, track, alert, reconcile, export, save, rebalance, or portfolio or financial-data mutation is connected or persisted.",
  },
];
export default function PortfolioTracking() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Portfolio tracking is unavailable locally. No account, holding, price, performance, alert, tax lot, reconciliation, rebalance, or financial record was loaded or saved."
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
      `${action} is unavailable locally. No account, holding, price, performance, alert, tax lot, reconciliation, rebalance, privacy, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="portfolio-tracking-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Activity className="size-3.5" aria-hidden="true" />{" "}
                  Portfolio-tracking readiness workspace
                </Badge>
                <Badge variant="secondary">No tracking data</Badge>
              </div>
              <h1
                id="portfolio-tracking-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                PortfolioTracking readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review account-scoped holdings and tax-lot provenance,
                authoritative prices, performance history, freshness, alerts,
                reconciliation, privacy, authorization, and rebalance boundaries
                without implying that returns, alerts, tax data, or financial
                records exist.
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
                Portfolio tracking is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No account-scoped holdings source, price provider, performance
                history, alert service, tax-lot ledger, reconciliation layer,
                authorization control, rebalance guard, or persistence layer is
                connected. This workspace cannot connect, sync, import, refresh,
                track, alert, reconcile, export, save, rebalance, or claim
                financial performance.
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
              <h2 className="font-semibold">No tracking data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No account, holding, asset, tax lot, quantity, cost basis,
                currency, price, performance, or update record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No tracking state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No price history, performance period, freshness, cadence, alert,
                discrepancy, reconciliation, or rebalance state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No tracking actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No connect, sync, import, refresh, track, alert, reconcile,
                export, save, rebalance, or financial-data mutation is
                available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Portfolio-tracking governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads holdings, displays returns, sends an alert, creates a tax
              lot, executes a rebalance, or saves financial records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search PortfolioTracking readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter tracking requirements"
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
                  No tracking requirements match “{query}”.
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
                Production tracking requires authoritative account-scoped
                holdings and tax lots, current price provenance, historical
                performance definitions, freshness and stale-data handling,
                alert semantics, reconciliation, discrepancy recovery, privacy
                and authorization controls, safe rebalance separation, audit
                history, and clear non-advisory disclosures. No holding, price,
                performance, alert, tax lot, reconciliation, rebalance, or
                financial record is claimed here.
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
