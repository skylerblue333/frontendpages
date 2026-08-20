import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  FileSearch,
  Info,
  LockKeyhole,
  ReceiptText,
  Search,
  ShieldCheck,
  WalletCards,
  XCircle,
} from "lucide-react";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Order, payment, and entitlement provenance",
    area: "Evidence",
    description:
      "No order, payment, invoice, item, service, customer, merchant, entitlement, transaction ID, source, or refund request record is connected.",
  },
  {
    title: "Eligibility, authorization, and calculation",
    area: "Controls",
    description:
      "No policy, time window, amount, currency, tax, fee, proration, approval role, ownership check, or refund calculation is verified.",
  },
  {
    title: "Status, settlement, and reconciliation",
    area: "Finance",
    description:
      "No request status, payment processor, destination, settlement, ledger entry, reconciliation, duplicate guard, or failed-refund state exists.",
  },
  {
    title: "Privacy, disputes, and recovery",
    area: "Reliability",
    description:
      "No personal or financial-data classification, redaction, dispute path, evidence record, retry, correction, audit event, or support recovery is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No request, cancel, approve, reject, submit, retry, dispute, export, share, or refund, payment, order, account, or personal-data mutation is connected or persisted.",
  },
];
export default function RefundRequests() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Refund Requests is unavailable locally. No order, payment, item, customer, amount, currency, refund, settlement, or personal-data record was loaded or changed."
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
      `${action} is unavailable locally. No refund, payment, order, amount, settlement, dispute, account, or personal-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="refund-requests-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <ReceiptText className="size-3.5" aria-hidden="true" />{" "}
                  Refund-readiness workspace
                </Badge>
                <Badge variant="secondary">No refund state</Badge>
              </div>
              <h1
                id="refund-requests-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                RefundRequests readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review order and payment provenance, eligibility, authorization,
                refund calculations, processor settlement, reconciliation,
                privacy, disputes, recovery, and persistence boundaries without
                implying that refunds, amounts, payments, or request records
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
                Refund Requests is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No order or payment source, refund policy, processor, ledger,
                approval workflow, dispute path, privacy control, or persistence
                layer is connected. This workspace cannot request, cancel,
                approve, reject, submit, retry, dispute, export, or claim a
                refund.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <ReceiptText
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No refund state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No order, payment, invoice, item, service, customer, merchant,
                entitlement, transaction ID, or request record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <WalletCards
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No settlement state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No amount, currency, fee, processor, destination, status,
                settlement, ledger entry, or reconciliation exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No refund actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No request, cancel, approve, reject, submit, retry, dispute,
                export, share, or refund mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Refund governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads orders, computes amounts, contacts payment processors, or
              saves refund records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search RefundRequests readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter refund requirements"
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
                  No refund requirements match “{query}”.
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
                Production refunds require authoritative order and payment
                sources, explicit eligibility and policy windows, verified
                purchaser authorization, precise amount and currency
                calculations, processor idempotency, settlement and ledger
                reconciliation, privacy safeguards, approval and dispute
                workflows, audit history, and clear pending or failed-refund
                handling. No refund, payment, order, amount, settlement,
                dispute, account, or personal-data record is claimed here.
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
