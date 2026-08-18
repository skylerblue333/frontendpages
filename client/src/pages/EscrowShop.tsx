import { useState } from "react";
import {
  CircleSlash2,
  HandCoins,
  LockKeyhole,
  PackageOpen,
  ShieldAlert,
  ShoppingCart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Category = "All" | "Digital" | "Physical" | "Service";
type Listing = {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  summary: string;
  listing: string;
  price: string;
  stock: string;
  order: string;
  escrow: string;
};
const listings: Listing[] = [
  {
    id: "digital",
    title: "Digital creator listing",
    category: "Digital",
    summary:
      "Local marketplace concept pending verified catalog, seller authorization, fulfillment, and dispute controls.",
    listing: "Listing unavailable",
    price: "Price unavailable",
    stock: "Stock unavailable",
    order: "Order unavailable",
    escrow: "Escrow unavailable",
  },
  {
    id: "physical",
    title: "Physical goods listing",
    category: "Physical",
    summary:
      "Local goods concept pending inventory source, shipping, returns, seller verification, and payment settlement.",
    listing: "Listing unavailable",
    price: "Price unavailable",
    stock: "Stock unavailable",
    order: "Order unavailable",
    escrow: "Escrow unavailable",
  },
  {
    id: "service",
    title: "Community service listing",
    category: "Service",
    summary:
      "Local service concept pending provider identity, terms, scheduling, payment, moderation, and dispute handling.",
    listing: "Listing unavailable",
    price: "Price unavailable",
    stock: "Stock unavailable",
    order: "Order unavailable",
    escrow: "Escrow unavailable",
  },
];
export default function EscrowShop() {
  const [category, setCategory] = useState<Category>("All");
  const [selected, setSelected] = useState(listings[0]);
  const [status, setStatus] = useState(
    "Marketplace service unavailable. Showing local listing concepts only."
  );
  const visible = listings.filter(
    item => category === "All" || item.category === category
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No wallet connection, balance check, payment, order, transaction, escrow, seller listing, or account mutation was started.`
    );
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={ShoppingCart}
        title="Escrow marketplace"
        subtitle="Review local marketplace concepts without fabricated listings, prices, balances, stock, orders, escrow protection, or transaction success."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Marketplace service unavailable.</strong> No authoritative
          catalog, seller registry, inventory source, wallet connector, payment
          processor, blockchain network, order service, or escrow infrastructure
          is connected.
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-center gap-3">
              <PackageOpen className="h-5 w-5 text-cyan-200" />
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Catalog preview
                </p>
                <h2 className="mt-1 text-2xl font-semibold">
                  Review local listing concepts
                </h2>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Local fixtures describe marketplace structure only. They do not
              represent purchasable goods, prices, token balances, stock, seller
              identities, orders, payments, escrow, or fulfillment.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(["All", "Digital", "Physical", "Service"] as Category[]).map(
                item => (
                  <Button
                    key={item}
                    aria-pressed={category === item}
                    onClick={() => setCategory(item)}
                    size="sm"
                    variant={category === item ? "default" : "outline"}
                  >
                    {item}
                  </Button>
                )
              )}
            </div>
            <div className="mt-6 space-y-3">
              {visible.map(item => (
                <button
                  className={`w-full rounded-xl border p-5 text-left ${selected.id === item.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={item.id}
                  onClick={() => setSelected(item)}
                  type="button"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-medium">{item.title}</p>
                    <Badge variant="outline">{item.category}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{item.summary}</p>
                </button>
              ))}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected listing
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <div className="mt-5 grid gap-2">
                {(
                  [
                    ["Listing", selected.listing],
                    ["Price", selected.price],
                    ["Stock", selected.stock],
                    ["Order", selected.order],
                    ["Escrow", selected.escrow],
                  ] as Array<[string, string]>
                ).map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <Button
                className="mt-5 w-full"
                onClick={() => blocked("Purchase listing")}
                variant="outline"
              >
                <HandCoins className="mr-2 h-4 w-4" /> Purchase unavailable
              </Button>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Escrow requires verified order terms, payment authorization,
                  custody controls, release conditions, dispute handling, and
                  auditable transaction status.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldAlert className="h-5 w-5 text-amber-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No balances, prices, token conversions, stock levels, seller
                  identities, payment outcomes, or transaction hashes are
                  fabricated.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No wallet, payment, order, escrow, fulfillment, refund,
                  seller, or account mutation is available from this preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex items-start gap-3">
            <ShoppingCart className="mt-0.5 h-5 w-5 text-cyan-200" />
            <div>
              <h2 className="font-semibold">Seller listing</h2>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                Seller onboarding and listing creation are unavailable until
                identity, authorization, catalog, fulfillment, payment, and
                moderation services are connected.
              </p>
              <Button
                className="mt-4"
                onClick={() => blocked("Create seller listing")}
                variant="outline"
              >
                Create listing unavailable
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
