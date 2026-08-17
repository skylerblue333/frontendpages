import { useMemo, useState } from "react";
import {
  CircleSlash2,
  CreditCard,
  Info,
  LockKeyhole,
  PackageCheck,
  RotateCcw,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type OrderState = "Review" | "Planned" | "Unavailable";
type OrderFixture = {
  id: string;
  title: string;
  state: OrderState;
  summary: string;
  fulfillment: string;
  payment: string;
  boundary: string;
};
const orders: OrderFixture[] = [
  {
    id: "digital",
    title: "Digital access order",
    state: "Review",
    summary:
      "A local order concept for reviewing entitlement and fulfillment controls.",
    fulfillment: "Entitlement fulfillment unavailable",
    payment: "Amount and payment state unavailable",
    boundary:
      "No customer, product, entitlement, order, payment, or fulfillment record is connected.",
  },
  {
    id: "physical",
    title: "Physical goods order",
    state: "Planned",
    summary:
      "A local order concept for reviewing inventory and shipment dependencies.",
    fulfillment: "Inventory and shipping source unavailable",
    payment: "Tax, total, and payment provider unavailable",
    boundary:
      "No address, inventory, warehouse, carrier, tax, payment, or customer data is available.",
  },
  {
    id: "subscription",
    title: "Subscription renewal",
    state: "Unavailable",
    summary:
      "A restricted order concept pending billing, cancellation, and reconciliation controls.",
    fulfillment: "Renewal and access state unavailable",
    payment: "Billing account and invoice unavailable",
    boundary:
      "No billing account, invoice, balance, renewal, refund, notification, or financial record is available.",
  },
];
const states: Array<"All" | OrderState> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];

export default function AdvancedOrders() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] =
    useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(orders[0].id);
  const [status, setStatus] = useState(
    "Order service unavailable. Showing local order fixtures only."
  );
  const filtered = useMemo(
    () =>
      orders.filter(
        order =>
          (stateFilter === "All" || order.state === stateFilter) &&
          `${order.title} ${order.summary}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [query, stateFilter]
  );
  const selected = orders.find(order => order.id === selectedId) ?? orders[0];
  const reset = () => {
    setQuery("");
    setStateFilter("All");
    setSelectedId(orders[0].id);
    setStatus(
      "Order preview reset locally. No customer, amount, payment, fulfillment, or financial state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No order, customer, payment, inventory, fulfillment, notification, or financial request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-400/25 bg-orange-400/10 text-orange-200">
              <ShoppingCart aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Advanced orders
                </h1>
                <span className="rounded-full border border-orange-400/20 bg-orange-400/10 px-2.5 py-1 text-xs font-medium text-orange-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review order concepts without reading customers, inventing
                amounts, charging payments, or changing fulfillment state.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset advanced orders preview"
            className="self-start border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white"
            onClick={reset}
            variant="outline"
          >
            <RotateCcw aria-hidden="true" className="mr-2 h-4 w-4" />
            Reset preview
          </Button>
        </header>
        <section
          className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/[0.07] p-4 text-sm text-slate-300"
          role="note"
        >
          <div className="flex gap-3">
            <Info
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
            />
            <p>
              <strong className="font-semibold text-amber-100">
                Order service unavailable.
              </strong>{" "}
              No catalog, customer store, payment provider, inventory system,
              tax service, fulfillment system, notification channel, or
              financial record is connected. The records below are local
              fixtures.
            </p>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <label className="relative block flex-1">
                <span className="sr-only">Search local order fixtures</span>
                <ShoppingCart
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                />
                <Input
                  className="border-slate-700 bg-slate-950/70 pl-9 text-slate-200 placeholder:text-slate-600"
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search order fixtures"
                  value={query}
                />
              </label>
              <div
                aria-label="Filter order state"
                className="flex flex-wrap gap-2"
                role="group"
              >
                {states.map(option => (
                  <Button
                    aria-pressed={stateFilter === option}
                    className={
                      stateFilter === option
                        ? "bg-orange-500 text-white hover:bg-orange-400"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={option}
                    onClick={() => {
                      setStateFilter(option);
                      setStatus(`${option} order state selected locally.`);
                    }}
                    size="sm"
                    variant={stateFilter === option ? "default" : "outline"}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {filtered.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-8 text-center">
                  <ShoppingCart
                    aria-hidden="true"
                    className="mx-auto h-8 w-8 text-slate-600"
                  />
                  <p className="mt-3 font-medium text-slate-300">
                    No matching local orders
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Try another state or search term.
                  </p>
                </div>
              ) : (
                filtered.map(order => (
                  <button
                    aria-pressed={order.id === selectedId}
                    className={`flex w-full items-start gap-4 rounded-xl border p-5 text-left transition-colors ${order.id === selectedId ? "border-orange-400/35 bg-orange-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-600"}`}
                    key={order.id}
                    onClick={() => {
                      setSelectedId(order.id);
                      setStatus(
                        `${order.title} selected for local order review.`
                      );
                    }}
                    type="button"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-orange-200">
                      <ShoppingCart aria-hidden="true" className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-medium text-slate-200">
                          {order.title}
                        </p>
                        <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-400">
                          {order.state}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {order.summary}
                      </p>
                      <p className="mt-2 text-xs text-slate-600">
                        {order.fulfillment} · amount unavailable
                      </p>
                    </div>
                  </button>
                ))
              )}
            </div>
            <p
              aria-live="polite"
              className="mt-6 rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Selected order
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {selected.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {selected.boundary}
              </p>
              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Fulfillment
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {selected.fulfillment}
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-lg border border-slate-800 p-3">
                    <p className="text-xs text-slate-500">Payment</p>
                    <p className="mt-1 text-sm text-slate-200">
                      {selected.payment}
                    </p>
                  </div>
                  <div className="rounded-lg border border-slate-800 p-3">
                    <p className="text-xs text-slate-500">Customer</p>
                    <p className="mt-1 text-sm text-slate-200">Unavailable</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-600">
                  Subtotal, tax, total, refund, inventory, and delivery details
                  are unavailable.
                </p>
              </div>
              <Button
                className="mt-5 w-full border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                onClick={() => blocked("Open order action")}
                variant="outline"
              >
                <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                Action unavailable
              </Button>
            </Card>
            <Card className="border-slate-800 bg-slate-700/10 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-orange-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Financial boundary
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No customer, address, payment method, price, tax, inventory,
                    fulfillment, refund, notification, or financial operation is
                    available. Future orders require authorization, idempotency,
                    amount validation, reconciliation, and auditability.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <ShieldCheck
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Order posture
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Order count, customer state, amounts, payment status,
                    inventory, shipment status, refund state, and financial
                    metrics are unavailable rather than estimated.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex gap-3 text-slate-600">
                <CreditCard aria-hidden="true" className="h-5 w-5" />
                <PackageCheck aria-hidden="true" className="h-5 w-5" />
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
