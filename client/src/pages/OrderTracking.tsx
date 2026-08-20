import { useMemo, useState } from "react";
import {
  FileSearch,
  Info,
  LockKeyhole,
  MapPin,
  PackageSearch,
  Search,
  ShieldCheck,
  Truck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Order ownership and fulfillment provenance",
    area: "Integrity",
    description:
      "No order, customer, item, fulfillment center, shipment, carrier, tracking identifier, or ownership timestamp is connected.",
  },
  {
    title: "Status semantics and event ordering",
    area: "Status",
    description:
      "No status vocabulary, event source, timezone, sequence, location, estimated delivery, stale-state rule, or last-verified timestamp is available.",
  },
  {
    title: "Privacy and address protection",
    area: "Privacy",
    description:
      "No delivery address, recipient permission, sensitive order detail, redaction, retention, export, deletion, or sharing control exists.",
  },
  {
    title: "Exceptions, cancellation, and refunds",
    area: "Operations",
    description:
      "No delay, loss, damage, carrier failure, cancellation, return, refund, dispute, support trace, or reconciliation workflow is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No refresh, track, notify, cancel, return, refund, export, or shipment or order-data mutation is connected or persisted.",
  },
];
export default function OrderTracking() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Order tracking is unavailable locally. No order, customer, shipment, carrier, tracking, delivery, cancellation, refund, or fulfillment record was loaded or saved."
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
      `${action} is unavailable locally. No order, shipment, carrier, tracking, delivery, cancellation, refund, privacy, or fulfillment-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="order-tracking-title"
    >
      <div data-ui-polish="batch-198" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Truck className="size-3.5" aria-hidden="true" />{" "}
                  Fulfillment-readiness workspace
                </Badge>
                <Badge variant="secondary">No tracking data</Badge>
              </div>
              <h1
                id="order-tracking-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                OrderTracking readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review order ownership, shipment and carrier provenance, status
                semantics, delivery privacy, exceptions, cancellation, returns,
                refunds, and tracking boundaries without implying that orders,
                shipments, locations, or fulfillment records exist.
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
                Order tracking is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No order service, fulfillment system, carrier integration,
                tracking provider, address protection, cancellation workflow,
                refund service, or persistence layer is connected. This
                workspace cannot refresh, track, notify, cancel, return, refund,
                export, or claim delivery status.
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
              <h2 className="font-semibold">No shipment data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No order, item, fulfillment center, shipment, carrier, tracking
                ID, location, or delivery record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <MapPin className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No status state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No status vocabulary, event sequence, timezone, estimated
                delivery, stale-state, or verified timestamp exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No tracking actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No refresh, track, notify, cancel, return, refund, export, or
                shipment mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Fulfillment-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              connects a carrier, displays tracking, exposes an address, changes
              status, or saves fulfillment records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search OrderTracking readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter fulfillment requirements"
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
                  No fulfillment requirements match “{query}”.
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
                Production tracking requires authenticated order ownership,
                authoritative fulfillment and carrier events, stable status
                semantics, timezone and stale-state handling, address privacy,
                exception management, cancellation and return workflows, refund
                reconciliation, audit history, and clear feedback for every
                action. No order, shipment, carrier, tracking, delivery,
                cancellation, refund, or fulfillment record is claimed here.
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
