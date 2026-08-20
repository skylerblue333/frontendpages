import { useMemo, useState } from "react";
import {
  FileSearch,
  Info,
  Landmark,
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
    title: "Provider, account, and ledger provenance",
    area: "Infrastructure",
    description:
      "No payment provider, merchant account, wallet, ledger, currency, balance, transaction source, or as-of timestamp is connected.",
  },
  {
    title: "Authorization, custody, and key boundaries",
    area: "Security",
    description:
      "No authenticated actor, payment permission, wallet custody model, private-key boundary, signing service, secret store, or transaction policy is verified.",
  },
  {
    title: "Idempotency, settlement, and reconciliation",
    area: "Controls",
    description:
      "No idempotency key, transaction state, settlement event, fee, balance impact, duplicate guard, reconciliation report, or correction workflow exists.",
  },
  {
    title: "Billing, escrow, refunds, and disputes",
    area: "Operations",
    description:
      "No subscription, invoice, escrow condition, release, refund, chargeback, dispute, payout, tax, or support audit record is connected.",
  },
  {
    title: "Observability and actions",
    area: "Safety",
    description:
      "No connect, authorize, transfer, charge, release, refund, reconcile, export, or financial-data mutation is connected or persisted.",
  },
];
export default function PaymentInfra() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Payment infrastructure is unavailable locally. No provider, ledger, wallet, balance, transaction, billing, escrow, refund, or financial record was loaded or saved."
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
      `${action} is unavailable locally. No provider, ledger, wallet, balance, transaction, billing, escrow, refund, privacy, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="payment-infra-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Landmark className="size-3.5" aria-hidden="true" />{" "}
                  Financial-infrastructure readiness workspace
                </Badge>
                <Badge variant="secondary">No financial data</Badge>
              </div>
              <h1
                id="payment-infra-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                PaymentInfra readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review provider and ledger provenance, authorization, custody,
                signing, idempotency, settlement, reconciliation, billing,
                escrow, refunds, disputes, observability, and financial-safety
                boundaries without implying that revenue, costs, balances,
                transactions, wallet credits, escrow states, or pricing exist.
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
                Payment infrastructure is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No provider, merchant account, ledger, wallet custody system,
                signing service, billing platform, escrow workflow,
                reconciliation service, monitoring, or persistence layer is
                connected. This workspace cannot connect, authorize, transfer,
                charge, release, refund, reconcile, export, or claim financial
                success.
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
              <h2 className="font-semibold">No financial data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No provider, account, wallet, ledger, currency, balance,
                transaction, revenue, cost, or pricing record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <WalletCards
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No custody state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No actor, permission, wallet custody, key boundary, signing,
                payment, settlement, or escrow state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No financial actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No connect, authorize, transfer, charge, release, refund,
                reconcile, export, or financial-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>
              Financial-infrastructure governance requirements
            </CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads balances, handles keys, moves funds, creates ledger entries,
              or saves financial records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search PaymentInfra readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter infrastructure requirements"
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
                  No infrastructure requirements match “{query}”.
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
                Production financial infrastructure requires authoritative
                providers and ledgers, explicit custody and key management,
                authenticated permissions, idempotent transaction processing,
                settlement and reconciliation, billing, escrow, refund and
                dispute workflows, audit history, monitoring, privacy controls,
                and clear non-advisory disclosures. No revenue, costs, margins,
                balances, transactions, wallet credits, escrow states,
                subscription pricing, or financial record is claimed here.
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
