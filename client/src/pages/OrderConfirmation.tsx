import { useMemo, useState } from "react";
import {
  BadgeCheck,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  ReceiptText,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Order and account provenance",
    area: "Integrity",
    description:
      "No order ID, account, venue, instrument, side, quantity, price, currency, time-in-force, or submitted-at timestamp is connected.",
  },
  {
    title: "Execution and settlement evidence",
    area: "Settlement",
    description:
      "No acceptance, rejection, fill, partial fill, cancellation, transaction hash, settlement status, fee, balance change, or confirmation source is verified.",
  },
  {
    title: "Authorization and user safety",
    area: "Security",
    description:
      "No authenticated actor, permission, confirmation, risk disclosure, suitability context, replay guard, nonce, or duplicate-submission control is available.",
  },
  {
    title: "Failure and reconciliation",
    area: "Reliability",
    description:
      "No failure reason, retry policy, stale state, discrepancy, reconciliation event, support trace, audit record, or correction workflow exists.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No confirm, submit, cancel, retry, refresh, receipt, export, or order or financial-data mutation is connected or persisted.",
  },
];
export default function OrderConfirmation() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Order confirmation is unavailable locally. No order, account, fill, transaction, settlement, fee, balance, or financial record was loaded or saved."
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
      `${action} is unavailable locally. No order, confirmation, fill, transaction, settlement, fee, balance, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="order-confirmation-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <ReceiptText className="size-3.5" aria-hidden="true" />{" "}
                  Settlement-readiness workspace
                </Badge>
                <Badge variant="secondary">No order data</Badge>
              </div>
              <h1
                id="order-confirmation-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                OrderConfirmation readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review order and account provenance, execution evidence,
                settlement, authorization, risk, reconciliation, and
                confirmation boundaries without implying that an order, fill,
                transaction, fee, balance, or trade success exists.
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
                Order confirmation is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No order router, execution service, account authorization,
                settlement source, transaction verifier, or persistence layer is
                connected. This workspace cannot confirm, submit, cancel, retry,
                refresh, display a receipt, or claim successful execution.
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
              <h2 className="font-semibold">No order record</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No order ID, account, venue, instrument, quantity, price, side,
                currency, or submission timestamp is loaded.
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
                No acceptance, fill, transaction hash, fee, balance change,
                settlement status, or confirmation source exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No confirmation actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No confirm, submit, cancel, retry, refresh, receipt, export, or
                financial-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Confirmation-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              confirms execution, displays a transaction, verifies settlement,
              or saves financial records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search OrderConfirmation readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter confirmation requirements"
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
                  No confirmation requirements match “{query}”.
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
                Production order confirmation requires authenticated actor and
                order provenance, explicit confirmation, venue and instrument
                validation, duplicate-safe submission, verified acceptance and
                fills, transaction and settlement evidence, fee and balance
                reconciliation, audit history, and clear non-advisory
                disclosures. No order, fill, transaction, settlement, fee,
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
