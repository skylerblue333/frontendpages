import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Boxes,
  CheckCircle2,
  FileWarning,
  MapPin,
  Search,
  ServerOff,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Boundary = { title: string; area: string; description: string };
const boundaries: readonly Boundary[] = [
  {
    title: "Item and stock identity",
    area: "Catalog",
    description:
      "No SKU, item, variant, quantity, unit, cost, price, lot, serial, source, or stock record is connected.",
  },
  {
    title: "Location and ownership",
    area: "Control",
    description:
      "No warehouse, bin, owner, supplier, account, permission, adjustment authority, or inventory scope is loaded.",
  },
  {
    title: "Movement and reconciliation",
    area: "Operations",
    description:
      "No receipt, transfer, reservation, sale, adjustment, count, valuation, reconciliation, or audit event exists.",
  },
  {
    title: "Thresholds and alerts",
    area: "Signals",
    description:
      "No reorder point, safety stock, lead time, demand forecast, low-stock alert, notification, or approval workflow is configured.",
  },
  {
    title: "Reliability and governance",
    area: "Assurance",
    description:
      "No import, export, idempotency, concurrency, retry, rate limit, retention, audit, incident, backup, or recovery contract is available.",
  },
];
export default function InventoryManagement() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Inventory Management is unavailable locally. No stock, item, location, alert, valuation, or mutation was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No item, quantity, location, movement, alert, or mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="inventory-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Boxes className="size-3.5" aria-hidden="true" /> Inventory
                  readiness
                </Badge>
                <Badge variant="secondary">No inventory service</Badge>
              </div>
              <h1
                id="inventory-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Inventory Management readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review stock, location, movement, threshold, and reliability
                contracts required for trustworthy inventory operations without
                implying that items, quantities, valuations, or alerts exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Inventory service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No item catalog, stock source, location model, movement ledger,
                threshold engine, valuation logic, or persistence layer is
                connected. This is a readiness workspace, not a stock ledger.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Boxes className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No stock records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No SKU, item, quantity, unit, cost, price, lot, serial, source,
                or stock record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <MapPin className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No location scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No warehouse, bin, owner, supplier, permission, adjustment
                authority, or inventory scope exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No stock actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No receipt, transfer, reservation, sale, adjustment, count,
                valuation, or alert action exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Inventory-governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never loads
              stock, changes quantities, moves inventory, calculates valuation,
              or creates an alert.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Inventory Management readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter inventory requirements"
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
                    <FileWarning className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No inventory notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production inventory system needs item and stock schemas,
                locations and ownership, movement and reservation semantics,
                concurrent-safe adjustments, reconciliation, valuation rules,
                thresholds, alerts, imports, auditability, permissions,
                observability, backup, and tested recovery. No stock ledger is
                claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
