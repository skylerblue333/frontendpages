import { useMemo, useState } from "react";
import {
  Activity,
  ArrowDownUp,
  CheckCircle2,
  Clock3,
  Download,
  FileSearch,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Status = "All" | "Pending" | "Confirmed" | "Failed";
type RecordPreview = {
  id: string;
  label: string;
  status: Exclude<Status, "All">;
  date: string;
  summary: string;
};
const records: readonly RecordPreview[] = [
  {
    id: "one",
    label: "Transfer record concept",
    status: "Pending",
    date: "Timestamp unavailable",
    summary:
      "Local record structure pending authenticated wallet, chain, transaction hash, amount, fee, and confirmation evidence.",
  },
  {
    id: "two",
    label: "Swap record concept",
    status: "Confirmed",
    date: "Timestamp unavailable",
    summary:
      "Local record structure pending venue, asset pair, quote, slippage, settlement, and reconciliation evidence.",
  },
  {
    id: "three",
    label: "Order record concept",
    status: "Failed",
    date: "Timestamp unavailable",
    summary:
      "Local record structure pending exchange identity, order lifecycle, error provenance, and audit evidence.",
  },
];

export default function TradingHistory() {
  const [filter, setFilter] = useState<Status>("All");
  const [selectedId, setSelectedId] = useState(records[0].id);
  const [status, setStatus] = useState(
    "Trading history service unavailable locally. No transaction records are loaded."
  );
  const filtered = useMemo(
    () =>
      filter === "All"
        ? records
        : records.filter(record => record.status === filter),
    [filter]
  );
  const selected =
    filtered.find(record => record.id === selectedId) ??
    filtered[0] ??
    records[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No transaction, export, refresh, or financial record mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={ArrowDownUp}
        title="Trading history"
        subtitle="Review transaction-record structure without fabricating trades, balances, fees, timestamps, counterparties, confirmations, or financial outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Trading history unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Trading history unavailable.</strong> No wallet, exchange,
            chain indexer, transaction store, price source, reconciliation
            service, or authenticated account is connected. The concepts below
            are not financial records.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => blocked("Refresh history")}
              size="sm"
              variant="outline"
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
            </Button>
            <Button
              onClick={() => blocked("Export history")}
              size="sm"
              variant="outline"
            >
              <Download className="mr-2 h-4 w-4" /> Export unavailable
            </Button>
          </div>
        </section>
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  History preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review local record concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  Typed local fixtures show record type and lifecycle shape
                  only. They do not represent a wallet transaction, exchange
                  order, fill, price, fee, balance change, tax lot, or settled
                  result.
                </p>
              </div>
              <Activity
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="History status filter"
            >
              {(["All", "Pending", "Confirmed", "Failed"] as const).map(
                item => (
                  <Button
                    key={item}
                    type="button"
                    aria-pressed={filter === item}
                    onClick={() => setFilter(item)}
                    size="sm"
                    variant={filter === item ? "default" : "outline"}
                  >
                    {item}
                  </Button>
                )
              )}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(record => (
                <button
                  key={record.id}
                  type="button"
                  aria-pressed={selected.id === record.id}
                  onClick={() => setSelectedId(record.id)}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === record.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{record.label}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {record.status}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{record.date}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {record.summary}
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
                Selected record concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.label}</h2>
              <p className="mt-1 text-sm text-cyan-200">{selected.status}</p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Transaction hash", "Unavailable"],
                  ["Network or venue", "Unavailable"],
                  ["From / to", "Counterparties unavailable"],
                  ["Asset and amount", "Unavailable"],
                  ["Fee", "Unavailable"],
                  ["Timestamp", "Timestamp authority unavailable"],
                  ["Confirmation", "Unavailable"],
                  ["Reconciliation", "Not performed"],
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
                No transaction hash, balance movement, fee, tax lot,
                confirmation, or financial result is available.
              </p>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production history requires authenticated scope, validated
                  addresses and networks, immutable transaction identifiers,
                  status transitions, source timestamps, fee and amount units,
                  privacy-safe counterparties, reconciliation, duplicate
                  protection, and error recovery.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Read-only intent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No wallet or order mutation.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Record blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No verified transaction source.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileSearch
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Audit unavailable</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No immutable activity log.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <Clock3
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Time unavailable</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No source timestamp.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No trade, order, fill, balance, fee, timestamp, confirmation, tax
            lot, or financial outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
