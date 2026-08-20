import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Banknote,
  FileSearch,
  Landmark,
  LockKeyhole,
  Search,
  ShieldCheck,
  Scale,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Asset, liability, and account provenance",
    area: "Data",
    description:
      "No account, asset, liability, ownership, balance, loan, property, security, wallet, provider, source, or as-of timestamp is connected.",
  },
  {
    title: "Valuation, currency, and methodology",
    area: "Valuation",
    description:
      "No price, exchange rate, valuation method, currency, cost basis, market close, appraisal, confidence, rounding, or stale-data policy is verified.",
  },
  {
    title: "Privacy, consent, and authorization",
    area: "Privacy",
    description:
      "No account owner, permission, connected institution, sensitive financial detail, consent purpose, retention, export, deletion, or sharing rule is available.",
  },
  {
    title: "Reconciliation, corrections, and history",
    area: "Integrity",
    description:
      "No duplicate guard, balance reconciliation, adjustment, transaction history, missing-data rule, audit trail, or correction workflow exists.",
  },
  {
    title: "Tax, risk, and non-advisory boundaries",
    area: "Safety",
    description:
      "No tax jurisdiction, reporting basis, realized or unrealized classification, debt treatment, risk disclosure, financial plan, recommendation, or professional review state is connected.",
  },
];
export default function NetWorthTracker() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Net worth tracking is unavailable locally. No account, asset, liability, balance, valuation, currency, tax, or financial record was loaded or saved."
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
      `${action} is unavailable locally. No account, asset, liability, balance, valuation, currency, tax, privacy, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="net-worth-tracker-title"
    >
      <div data-ui-polish="batch-197" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Scale className="size-3.5" aria-hidden="true" />{" "}
                  Wealth-readiness workspace
                </Badge>
                <Badge variant="secondary">No financial records</Badge>
              </div>
              <h1
                id="net-worth-tracker-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                NetWorthTracker readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review asset and liability provenance, valuation methodology,
                currency and timestamps, privacy, tax boundaries,
                reconciliation, corrections, and non-advisory disclosures
                without implying that accounts, balances, or net worth exist.
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
                Net worth tracking is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No financial account aggregator, asset and liability registry,
                market-data provider, valuation service, currency source,
                privacy control, tax context, reconciliation store, or
                persistence layer is connected. This workspace cannot calculate,
                import, value, reconcile, recommend, or claim net worth.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Landmark
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No financial records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No account, asset, liability, owner, balance, loan, property,
                security, wallet, or provider record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Banknote
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No valuation state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No price, exchange rate, currency, cost basis, valuation
                timestamp, reconciliation, tax basis, or net-worth result
                exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No finance actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No connect, import, calculate, adjust, export, share, recommend,
                or financial-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Wealth-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              connects an account, imports balances, fetches prices, calculates
              net worth, classifies tax data, or saves financial records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search NetWorthTracker readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter wealth requirements"
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
                  No wealth notes match “{query}”.
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
                Production wealth tracking requires authorized account
                connections, complete asset and liability provenance, dated
                valuation methodology and currency sources, duplicate-safe
                reconciliation, privacy and retention controls,
                jurisdiction-aware tax boundaries, correction history, and clear
                non-advisory disclosures. No account, asset, liability, balance,
                valuation, currency, tax, or financial record is claimed here.
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
