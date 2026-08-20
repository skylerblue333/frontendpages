import { useMemo, useState } from "react";
import {
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Tag,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Type catalog and eligibility",
    area: "Catalog",
    description:
      "No product or service type, seller, market, instrument, eligibility rule, region, customer segment, version, or publication state is connected.",
  },
  {
    title: "Terms, pricing, and constraints",
    area: "Terms",
    description:
      "No quantity, price, currency, tax, fee, time-in-force, fulfillment method, cancellation rule, refund rule, or expiration is verified.",
  },
  {
    title: "Authorization and risk",
    area: "Security",
    description:
      "No customer or account permission, inventory check, payment method, trading authorization, risk limit, suitability, or consent state is available.",
  },
  {
    title: "Execution and lifecycle",
    area: "Operations",
    description:
      "No order submission, acceptance, fill, fulfillment, cancellation, refund, rejection, reconciliation, audit event, or failure state exists.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No select, configure, create, submit, cancel, refund, export, or order-type or financial-data mutation is connected or persisted.",
  },
];
export default function OrderTypes() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Order-type catalog is unavailable locally. No product, service, instrument, eligibility, pricing, fulfillment, payment, order, or financial record was loaded or saved."
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
      `${action} is unavailable locally. No type, product, service, eligibility, pricing, order, payment, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="order-types-title"
    >
      <div data-ui-polish="batch-198" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Tag className="size-3.5" aria-hidden="true" /> Order-type
                  readiness workspace
                </Badge>
                <Badge variant="secondary">No type catalog</Badge>
              </div>
              <h1
                id="order-types-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                OrderTypes readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review order-type catalog ownership, terms, pricing,
                eligibility, authorization, risk, execution, cancellation,
                refund, and lifecycle boundaries without implying that product,
                service, instrument, commerce, or trading types exist.
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
                Order-type catalog is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No type registry, product or service contract, pricing source,
                inventory system, payment provider, trading venue, fulfillment
                workflow, or persistence layer is connected. This workspace
                cannot select, configure, create, submit, cancel, refund,
                export, or claim an order type.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Tag className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No type catalog</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No product, service, instrument, seller, market, eligibility,
                region, version, or publication state is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No terms state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No quantity, price, currency, tax, fee, time-in-force,
                fulfillment, cancellation, refund, or expiration rule exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No type actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No select, configure, create, submit, cancel, refund, export, or
                order-type mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Order-type governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads a type catalog, configures an order, changes pricing, or
              saves commerce or trading records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search OrderTypes readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter order-type requirements"
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
                  No order-type requirements match “{query}”.
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
                Production order types require versioned catalog ownership,
                explicit terms and pricing, eligibility and authorization rules,
                inventory or trading constraints, payment and fulfillment
                semantics, cancellation and refund handling, lifecycle state,
                audit history, and clear financial-safety boundaries. No type,
                product, service, eligibility, order, payment, or financial
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
