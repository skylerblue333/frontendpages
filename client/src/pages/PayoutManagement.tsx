import { useMemo, useState } from "react";
import {
  Banknote,
  FileSearch,
  Info,
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
    title: "Beneficiary, account, and payout provenance",
    area: "Ownership",
    description:
      "No beneficiary, merchant, seller, account, payout method, currency, amount, provider, destination, or requested-at timestamp is connected.",
  },
  {
    title: "Authorization, approval, and risk controls",
    area: "Security",
    description:
      "No authenticated actor, permission, approval chain, sanctions or fraud review, payout limit, hold, consent, or dual-control state is verified.",
  },
  {
    title: "Execution, settlement, and reconciliation",
    area: "Settlement",
    description:
      "No payout intent, submission, acceptance, failure, fee, settlement, transaction reference, balance impact, duplicate guard, or reconciliation report exists.",
  },
  {
    title: "Refunds, disputes, privacy, and auditability",
    area: "Operations",
    description:
      "No reversal, chargeback, dispute, sensitive-data boundary, notification, correction event, audit record, or support trace is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No add beneficiary, request, approve, release, cancel, retry, reconcile, export, or payout or financial-data mutation is connected or persisted.",
  },
];
export default function PayoutManagement() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Payout management is unavailable locally. No beneficiary, account, payout method, amount, authorization, transaction, settlement, fee, balance, refund, dispute, or financial record was loaded or saved."
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
      `${action} is unavailable locally. No beneficiary, payout, authorization, transaction, settlement, fee, balance, refund, dispute, privacy, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="payout-management-title"
    >
      <div data-ui-polish="batch-198" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Banknote className="size-3.5" aria-hidden="true" />{" "}
                  Payout-readiness workspace
                </Badge>
                <Badge variant="secondary">No payout data</Badge>
              </div>
              <h1
                id="payout-management-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                PayoutManagement readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review beneficiary and account provenance, payout authorization,
                approval, risk controls, execution, settlement, reconciliation,
                refunds, disputes, privacy, and audit boundaries without
                implying that payouts, balances, fees, or financial records
                exist.
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
                Payout management is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No payout provider, beneficiary or merchant account,
                authorization service, approval workflow, fraud or sanctions
                control, settlement source, reconciliation service, refund or
                dispute system, or persistence layer is connected. This
                workspace cannot add, request, approve, release, cancel, retry,
                reconcile, export, or claim payout success.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Banknote
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No payout data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No beneficiary, merchant, seller, account, method, currency,
                amount, provider, destination, or payout record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <WalletCards
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No approval state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No actor, permission, approval, sanctions, fraud, limit, hold,
                consent, execution, settlement, or reconciliation state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No payout actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No add beneficiary, request, approve, release, cancel, retry,
                reconcile, export, or financial-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Payout-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              adds a beneficiary, requests funds, moves money, verifies
              settlement, or saves financial records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search PayoutManagement readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter payout requirements"
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
                  No payout requirements match “{query}”.
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
                Production payouts require verified beneficiary ownership,
                authenticated permissions, approval and dual-control, sanctions
                and fraud controls, payout limits and holds, idempotent
                execution, settlement and transaction evidence, fee and balance
                reconciliation, refunds and disputes, audit history, and clear
                non-advisory disclosures. No payout, balance, fee, transaction,
                refund, dispute, or financial record is claimed here.
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
