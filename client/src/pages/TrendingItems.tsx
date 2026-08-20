import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Clock3,
  Eye,
  FileSearch,
  LockKeyhole,
  PackageSearch,
  RefreshCw,
  ShieldAlert,
  ShoppingBag,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Window = "Recent" | "This week" | "This month";
type Item = { id: string; title: string; category: string; evidence: string };
const items: readonly Item[] = [
  {
    id: "one",
    title: "Featured item concept",
    category: "Store",
    evidence:
      "Catalog source, price, stock, views, and ranking evidence are unavailable.",
  },
  {
    id: "two",
    title: "Collectible item concept",
    category: "Collectibles",
    evidence:
      "Ownership, provenance, availability, and marketplace activity are unavailable.",
  },
  {
    id: "three",
    title: "Learning item concept",
    category: "Education",
    evidence:
      "Publication, enrollment, completion, and popularity evidence are unavailable.",
  },
];

export default function TrendingItems() {
  const [window, setWindow] = useState<Window>("Recent");
  const [selectedId, setSelectedId] = useState(items[0].id);
  const [status, setStatus] = useState(
    "Trending-items service unavailable locally. No item ranking is loaded."
  );
  const selected = useMemo(
    () => items.find(item => item.id === selectedId) ?? items[0],
    [selectedId]
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No item ranking, stock, price, ownership, or purchase mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={PackageSearch}
        title="Trending items"
        subtitle="Review item-discovery structure without fabricating popularity, prices, stock, views, ownership, availability, rankings, or purchase outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Trending items unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Trending-items service unavailable.</strong> No catalog,
            marketplace, inventory, ownership, view, privacy, or timestamped
            ranking source is connected. Concepts below are not ranked or
            purchasable items.
          </p>
          <Button
            onClick={() => blocked("Refresh items")}
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Item preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review local item concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  Typed local fixtures demonstrate category, recency intent, and
                  evidence notes only. They do not represent catalog listings,
                  popularity, views, stock, price, ownership, recommendation, or
                  purchase availability.
                </p>
              </div>
              <ShoppingBag
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Item recency filter"
            >
              {(["Recent", "This week", "This month"] as const).map(item => (
                <Button
                  key={item}
                  type="button"
                  aria-pressed={window === item}
                  onClick={() => {
                    setWindow(item);
                    setStatus(
                      `Recency intent changed locally to ${item}. No item query or ranking was run.`
                    );
                  }}
                  size="sm"
                  variant={window === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {items.map(item => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected.id === item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === item.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{item.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {item.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.evidence}
                  </p>
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
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected item concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.category} · {window}
              </p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Rank", "Unavailable"],
                  ["Catalog source", "Unavailable"],
                  ["Price", "Unavailable"],
                  ["Stock", "Availability unavailable"],
                  ["Views", "Unavailable"],
                  ["Ownership", "Identity unavailable"],
                  ["Recommendation", "Not provided"],
                  ["Purchase", "Not available"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-slate-800 p-3"
                  >
                    <dt className="text-xs text-slate-500">{label}</dt>
                    <dd className="mt-1 text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No item rank, catalog record, price, stock, views, owner,
                recommendation, or purchase state is available.
              </p>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production item-discovery system requires catalog and
                  marketplace provenance, inventory freshness, price units,
                  ownership authorization, duplicate and bot controls,
                  privacy-safe views, ranking auditability, fulfillment state,
                  and clear separation between discovery and purchase.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Recency intent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Local selection only.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Purchase blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No catalog or stock.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileSearch
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Source absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No item provenance.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <Eye className="h-5 w-5 text-rose-300" aria-hidden="true" />
                  <p className="mt-2 text-sm font-medium">Views absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No audience inference.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No item rank, price, stock, views, ownership, recommendation,
            availability, or purchase outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
