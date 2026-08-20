import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  AlertTriangle,
  ClipboardCheck,
  CreditCard,
  FileSearch,
  LockKeyhole,
  Search,
  ShieldCheck,
  Store,
  XCircle,
} from "lucide-react";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Catalog and product provenance",
    area: "Catalog",
    description:
      "No product, price, inventory, image, rating, review, seller, category, license, availability, or source record is connected.",
  },
  {
    title: "Seller and buyer verification",
    area: "Trust",
    description:
      "No seller onboarding, identity verification, sanctions screening, buyer account, dispute history, or marketplace role is available.",
  },
  {
    title: "Age-gated and sensitive commerce",
    area: "Safety",
    description:
      "No age assertion, jurisdiction rule, parental control, restricted category review, content moderation, or escalation workflow is configured.",
  },
  {
    title: "Checkout and fulfillment",
    area: "Commerce",
    description:
      "No cart, payment method, order, tax, shipping, fulfillment, delivery, cancellation, refund, chargeback, or customer-support state exists.",
  },
  {
    title: "Charity and settlement accounting",
    area: "Finance",
    description:
      "No charitable recipient, allocation rule, custody flow, settlement ledger, reconciliation, receipt, or audit evidence is connected.",
  },
  {
    title: "Privacy, security, and audit",
    area: "Governance",
    description:
      "No consent, data minimization, encryption boundary, retention, access log, fraud control, incident workflow, or deletion policy is verified.",
  },
];
export default function MegaMarketplace() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Mega marketplace is unavailable locally. No catalog, seller, cart, order, payment, charity, or financial record was loaded or saved."
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
      `${action} is unavailable locally. No product, price, cart, seller, order, payment, refund, charity, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="mega-marketplace-title"
    >
      <div data-ui-polish="batch-195" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Store className="size-3.5" aria-hidden="true" /> Marketplace
                  readiness
                </Badge>
                <Badge variant="secondary">No live catalog</Badge>
              </div>
              <h1
                id="mega-marketplace-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MegaMarketplace readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review catalog provenance, seller and buyer trust, age controls,
                checkout, fulfillment, refunds, charitable settlement, privacy,
                and auditability without implying that products, prices, buyers,
                sales, revenue, or payments exist.
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
                Marketplace is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No catalog, seller network, age-control service, payment
                processor, order system, fulfillment partner, refund process,
                charitable ledger, or production data source is connected. This
                workspace cannot sell, purchase, reserve, price, or settle
                anything.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Store className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No catalog records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No products, prices, inventory, ratings, reviews, images,
                sellers, or availability are loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <CreditCard
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No commerce flow</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No cart, payment, tax, order, delivery, refund, chargeback, or
                customer-support state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No financial claims</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No sales, revenue, active buyers, charity amount, settlement, or
                transaction success is represented.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Marketplace readiness requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              opens a catalog, creates a cart, prices a product, verifies a
              seller, submits payment, creates an order, or records financial
              data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search marketplace readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter marketplace requirements"
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
                  No marketplace notes match “{query}”.
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
                Production activation requires catalog provenance, seller
                verification, age and jurisdiction controls, payment and order
                integrity, fulfillment and refund handling, charity accounting
                and reconciliation, privacy, fraud prevention, and auditable
                support workflows. No product, buyer, seller, order, payment, or
                financial record is claimed here.
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
