import { useMemo, useState } from "react";
import {
  BadgeDollarSign,
  FileSearch,
  Info,
  LockKeyhole,
  PackageSearch,
  Search,
  ShieldCheck,
  Star,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Catalog, seller, and product provenance",
    area: "Evidence",
    description:
      "No product identifier, title, description, seller, ownership, category, image, source, availability, or catalog timestamp is connected.",
  },
  {
    title: "Inventory, price, currency, and tax",
    area: "Commerce",
    description:
      "No stock quantity, reservation, price, currency, tax, shipping, discount, regional rule, or calculation source is verified.",
  },
  {
    title: "Reviews, ratings, and trust",
    area: "Trust",
    description:
      "No verified purchaser, review, rating, moderation, fraud signal, disclosure, or aggregate calculation exists.",
  },
  {
    title: "Checkout, payment, fulfillment, and refunds",
    area: "Operations",
    description:
      "No cart, order, payment provider, authorization, fulfillment, cancellation, return, refund, receipt, or customer-support workflow is connected.",
  },
  {
    title: "Privacy, security, and actions",
    area: "Safety",
    description:
      "No personal-data boundary, consent, authorization, rate limit, audit trail, or product, cart, order, payment, review, or commerce mutation is connected or persisted.",
  },
];
export default function ProductDetail() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Product details are unavailable locally. No product, seller, inventory, price, currency, review, rating, cart, order, payment, fulfillment, refund, or personal-data record was loaded or changed."
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
      `${action} is unavailable locally. No product, inventory, pricing, review, cart, order, payment, fulfillment, refund, or personal-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="product-detail-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <PackageSearch className="size-3.5" aria-hidden="true" />{" "}
                  Product-detail readiness workspace
                </Badge>
                <Badge variant="secondary">No product data</Badge>
              </div>
              <h1
                id="product-detail-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                ProductDetail readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review catalog provenance, seller authorization, inventory,
                pricing and currency, reviews and ratings, checkout, payment,
                fulfillment, refunds, privacy, and security boundaries without
                implying that a product or commerce workflow exists.
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
                Product details are unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No catalog, seller, inventory, pricing, review, checkout,
                payment, fulfillment, refunds, privacy, authorization, or
                persistence service is connected. This workspace cannot add to
                cart, purchase, review, rate, checkout, pay, order, cancel,
                return, refund, or claim product availability.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <PackageSearch
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No product state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No identifier, title, seller, category, image, source,
                availability, inventory, price, currency, or product record is
                loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <BadgeDollarSign
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No commerce state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No cart, order, payment, fulfillment, cancellation, return,
                refund, receipt, or support state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No product actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No purchase, review, rate, checkout, pay, order, cancel, return,
                refund, or commerce mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Product-detail governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads a catalog item, calculates a price, submits checkout, or
              saves product, review, cart, order, or payment records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search ProductDetail readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter product requirements"
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
                  No product requirements match “{query}”.
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
                Production commerce requires sourced catalog data, seller
                authorization, inventory reservation, price and currency
                correctness, tax and regional rules, review integrity and
                moderation, secure checkout, payment authorization, order and
                fulfillment state, cancellation and refund recovery, privacy
                controls, and auditable support evidence. No product, price,
                review, cart, order, payment, fulfillment, refund, or
                personal-data record is claimed here.
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
