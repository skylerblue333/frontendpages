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
    title: "Account, portfolio, and holding provenance",
    area: "Ownership",
    description:
      "No user, account, portfolio, wallet or broker connection, holding, asset, quantity, cost basis, currency, or ownership timestamp is connected.",
  },
  {
    title: "Market data, valuation, and performance freshness",
    area: "Data",
    description:
      "No price source, market, exchange, valuation time, return period, cash-flow treatment, fee treatment, currency conversion, or freshness timestamp is verified.",
  },
  {
    title: "Tracking, alerts, and discrepancy handling",
    area: "Controls",
    description:
      "No sync cadence, stale-data threshold, threshold alert, duplicate guard, discrepancy, correction history, failed-sync recovery, or notification state exists.",
  },
  {
    title: "Privacy, authorization, and reconciliation",
    area: "Safety",
    description:
      "No account authorization, sensitive financial-data boundary, access role, balance reconciliation, audit event, tax context, suitability context, or non-advisory disclosure is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No connect, sync, import, refresh, track, alert, reconcile, export, save, or portfolio or financial-data mutation is connected or persisted.",
  },
];
export default function PortfolioTracker() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Portfolio tracking is unavailable locally. No account, portfolio, holding, price, valuation, performance, alert, reconciliation, or financial record was loaded or saved."
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
      `${action} is unavailable locally. No account, portfolio, holding, price, valuation, performance, alert, reconciliation, privacy, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="portfolio-tracker-title"
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
                id="portfolio-tracker-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                PortfolioTracker readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review account and holdings provenance, market-data and
                performance freshness, tracking cadence, alerts, discrepancies,
                reconciliation, privacy, authorization, and tracking-action
                boundaries without implying that portfolios, balances, returns,
                alerts, or financial records exist.
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
                No wallet or broker connection, holdings source, market-data
                provider, tracking scheduler, alert service, reconciliation
                layer, authorization control, or persistence layer is connected.
                This workspace cannot connect, sync, import, refresh, track,
                alert, reconcile, export, save, or claim financial performance.
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
                No account, portfolio, holding, asset, quantity, cost basis,
                currency, price, valuation, or update record is loaded.
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
                No freshness, sync, performance, cadence, alert, discrepancy,
                reconciliation, or calculation state exists.
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
                export, save, or financial-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Portfolio-tracking governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads holdings, displays a balance, calculates performance, sends
              an alert, or saves financial records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search PortfolioTracker readiness notes"
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
                Production portfolio tracking requires authoritative account and
                holdings connections, current price provenance, valuation and
                performance definitions, freshness and stale-data handling,
                cadence and alert semantics, reconciliation, discrepancy
                recovery, privacy and authorization controls, audit history, and
                clear non-advisory disclosures. No portfolio, holding, price,
                valuation, performance, alert, reconciliation, or financial
                record is claimed here.
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
