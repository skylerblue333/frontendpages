import { useMemo, useState } from "react";
import {
  BadgeCheck,
  CreditCard,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Payment intent and customer provenance",
    area: "Integrity",
    description:
      "No customer, order, payment intent, amount, currency, merchant, provider, purpose, or created-at timestamp is connected.",
  },
  {
    title: "Authorization, capture, and settlement",
    area: "Settlement",
    description:
      "No authorization, capture, decline, refund, chargeback, settlement status, provider reference, or confirmation source is verified.",
  },
  {
    title: "Security and duplicate safety",
    area: "Security",
    description:
      "No payment method, tokenization boundary, PCI scope, idempotency key, fraud result, 3DS result, or duplicate-submission guard is available.",
  },
  {
    title: "Reconciliation, privacy, and failure handling",
    area: "Reliability",
    description:
      "No fee, balance impact, discrepancy, retry policy, notification, sensitive-data boundary, audit event, or support trace exists.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No confirm, authorize, capture, cancel, refund, retry, receipt, export, or payment or financial-data mutation is connected or persisted.",
  },
];
export default function PaymentConfirmation() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Payment confirmation is unavailable locally. No customer, order, payment intent, authorization, capture, settlement, refund, fee, balance, or financial record was loaded or saved."
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
      `${action} is unavailable locally. No payment intent, authorization, capture, settlement, refund, fee, balance, privacy, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="payment-confirmation-title"
    >
      <div data-ui-polish="batch-198" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <CreditCard className="size-3.5" aria-hidden="true" />{" "}
                  Payment-readiness workspace
                </Badge>
                <Badge variant="secondary">No payment data</Badge>
              </div>
              <h1
                id="payment-confirmation-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                PaymentConfirmation readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review payment intent and customer provenance, authorization,
                capture, settlement, refunds, security, reconciliation, privacy,
                and confirmation boundaries without implying that a payment,
                balance, fee, or financial record exists.
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
                Payment confirmation is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No payment provider, customer or order service, payment-intent
                workflow, authentication boundary, fraud control, settlement
                source, refund service, or persistence layer is connected. This
                workspace cannot confirm, authorize, capture, cancel, refund,
                retry, display a receipt, or claim payment success.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <CreditCard
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No payment record</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No customer, order, intent, amount, currency, merchant,
                provider, or payment record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <BadgeCheck
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No settlement evidence</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No authorization, capture, decline, refund, chargeback,
                settlement, fee, balance impact, or provider reference exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No payment actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No confirm, authorize, capture, cancel, refund, retry, receipt,
                export, or financial-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Payment-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              initiates payment, handles a payment method, verifies settlement,
              displays a receipt, or saves financial records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search PaymentConfirmation readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter payment requirements"
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
                  No payment requirements match “{query}”.
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
                Production payment confirmation requires authoritative intent
                and customer provenance, explicit authorization and capture
                states, provider verification, tokenized payment handling, PCI
                and fraud controls, idempotency, refund and chargeback handling,
                fee and balance reconciliation, audit history, and clear
                non-advisory payment disclosures. No payment, settlement, fee,
                balance, or financial record is claimed here.
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
