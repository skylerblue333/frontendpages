import { useMemo, useState } from "react";
import {
  BarChart3,
  CheckCircle2,
  CreditCard,
  FileText,
  Receipt,
  Search,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type BillingBoundary = { title: string; description: string };
const boundaries: readonly BillingBoundary[] = [
  {
    title: "Provider and account ownership",
    description:
      "No billing provider, authenticated customer, organization owner, account identifier, or secret is connected.",
  },
  {
    title: "Plans, invoices, and tax",
    description:
      "No subscription plan, invoice, balance, currency, tax calculation, payment status, or receipt is loaded.",
  },
  {
    title: "Payment methods and changes",
    description:
      "No card, bank method, checkout session, charge, payout, refund, cancellation, or plan mutation is available.",
  },
  {
    title: "Webhook reconciliation",
    description:
      "No signed event, idempotency key, dispute, retry, audit log, or reconciliation state is configured.",
  },
];

export default function EnterpriseBilling() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Enterprise billing is unavailable locally. No charge, subscription, payment method, invoice, refund, or checkout action was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, description }) =>
      `${title} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No charge, subscription, payment method, invoice, refund, or checkout action was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="enterprise-billing-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <CreditCard className="size-3.5" aria-hidden="true" />
                  Billing readiness
                </Badge>
                <Badge variant="secondary">Not connected</Badge>
              </div>
              <h1
                id="enterprise-billing-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Enterprise billing readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review safe billing, invoice, tax, payment, webhook, refund, and
                reconciliation contracts without claiming financial data or
                payment capability.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Billing provider is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No provider account, customer identity, plan, invoice, balance,
                payment method, checkout session, charge, refund, tax result, or
                webhook event is connected. This is a planning boundary, not a
                billing console.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/70 p-5">
            <Receipt className="mb-3 size-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">No financial records</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No plan, invoice, balance, amount, currency, tax, receipt, or
              payment status is presented.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <CreditCard
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">No payment actions</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No checkout, charge, payment method, payout, cancellation, or
              refund can be created.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <FileText className="mb-3 size-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">No reconciliation</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No signed webhook, idempotency, dispute, retry, or audit state is
              loaded.
            </p>
          </div>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Billing readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              customers, plans, invoices, payment methods, charges, or financial
              storage.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search billing readiness notes"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search billing requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(({ title, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Manage ${title}`)}
                  >
                    Manage unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No billing notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 size-5 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Production billing needs provider isolation, authenticated
                ownership, authorization, idempotency, webhook verification,
                invoice and tax correctness, refund/dispute handling, privacy
                controls, audit logging, reconciliation, and tested failure
                recovery.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      </div>
    </main>
  );
}
