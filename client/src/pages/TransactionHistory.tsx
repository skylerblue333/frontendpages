import { useMemo, useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  CircleSlash2,
  Download,
  FileClock,
  Filter,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  WalletCards,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/PageHeader";

type TransactionType =
  "All" | "Send" | "Receive" | "Stake" | "Swap" | "Purchase";
type TransactionStatus = "All" | "Completed" | "Pending" | "Failed";
type TransactionConcept = {
  id: string;
  type: Exclude<TransactionType, "All">;
  summary: string;
};
const concepts: TransactionConcept[] = [
  {
    id: "send",
    type: "Send",
    summary:
      "Outbound transaction concept pending wallet ownership, signing, network, and receipt verification.",
  },
  {
    id: "receive",
    type: "Receive",
    summary:
      "Inbound transaction concept pending indexed ledger data, address ownership, and confirmation status.",
  },
  {
    id: "stake",
    type: "Stake",
    summary:
      "Staking concept pending chain support, lock terms, validator data, and verified rewards.",
  },
  {
    id: "swap",
    type: "Swap",
    summary:
      "Swap concept pending exchange routing, quote freshness, slippage, signing, and settlement.",
  },
  {
    id: "purchase",
    type: "Purchase",
    summary:
      "Purchase concept pending merchant, payment, order, and fulfillment contracts.",
  },
];
export default function TransactionHistory() {
  const [type, setType] = useState<TransactionType>("All");
  const [statusFilter, setStatusFilter] = useState<TransactionStatus>("All");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Ledger service unavailable. Showing local transaction concepts only."
  );
  const filtered = useMemo(
    () =>
      concepts.filter(
        item =>
          (type === "All" || item.type === type) &&
          `${item.type} ${item.summary}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [query, type]
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No wallet, ledger, balance, signing, transaction, order, export, or account operation was started.`
    );
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={FileClock}
        title="Transaction history"
        subtitle="Review local financial transaction concepts without fabricated balances, amounts, counterparties, hashes, timestamps, statuses, or settlement outcomes."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Ledger service unavailable.</strong> No verified wallet,
          blockchain indexer, exchange, merchant, payment, staking, or
          transaction receipt service is connected.
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Local ledger structure
              </p>
              <h2 className="mt-1 text-2xl font-semibold">
                Transaction concepts
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => blocked("Export transaction history")}
                size="sm"
                variant="outline"
              >
                <Download className="mr-2 h-4 w-4" /> Export unavailable
              </Button>
              <Button
                onClick={() => blocked("Refresh transaction history")}
                size="sm"
                variant="outline"
              >
                <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
              </Button>
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Filters are local controls. No real transaction query, wallet
            lookup, balance calculation, or receipt verification occurs.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto_auto]">
            <div className="relative">
              <Filter className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
              <Input
                aria-label="Search transactions"
                className="pl-9"
                onChange={event => setQuery(event.target.value)}
                placeholder="Search local concepts"
                value={query}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {(
                [
                  "All",
                  "Send",
                  "Receive",
                  "Stake",
                  "Swap",
                  "Purchase",
                ] as TransactionType[]
              ).map(item => (
                <Button
                  aria-pressed={type === item}
                  key={item}
                  onClick={() => setType(item)}
                  size="sm"
                  variant={type === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {(
                ["All", "Completed", "Pending", "Failed"] as TransactionStatus[]
              ).map(item => (
                <Button
                  aria-pressed={statusFilter === item}
                  key={item}
                  onClick={() => setStatusFilter(item)}
                  size="sm"
                  variant={statusFilter === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </Card>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Ledger
              </p>
              <h2 className="mt-1 text-xl font-semibold">
                {filtered.length} local concepts
              </h2>
            </div>
            <Badge variant="outline">Status source unavailable</Badge>
          </div>
          <div className="space-y-3">
            {filtered.map(item => (
              <div
                className="rounded-xl border border-slate-800 bg-slate-950/50 p-5"
                key={item.id}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
                      {item.type === "Receive" ? (
                        <ArrowDownLeft className="h-5 w-5 text-emerald-300" />
                      ) : (
                        <ArrowUpRight className="h-5 w-5 text-cyan-200" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">
                        {item.type} transaction concept
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">Unavailable</Badge>
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-4">
                  {(
                    [
                      ["Amount", "Unavailable"],
                      ["Counterparty", "Unavailable"],
                      ["Timestamp", "Unavailable"],
                      ["Hash / receipt", "Unavailable"],
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
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="rounded-xl border border-slate-800 p-8 text-center text-sm text-slate-400">
                No local concepts match the current filters.
              </div>
            )}
          </div>
        </Card>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <WalletCards className="h-5 w-5 text-cyan-200" />
            <h2 className="mt-3 font-semibold">No balance claims</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No balance, token amount, fiat value, fee, reward, or portfolio
              effect is calculated.
            </p>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <ShieldAlert className="h-5 w-5 text-amber-200" />
            <h2 className="mt-3 font-semibold">No settlement claims</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No transaction status, hash, confirmation, failure, order, or
              receipt is fabricated.
            </p>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <CircleSlash2 className="h-5 w-5 text-slate-500" />
            <h2 className="mt-3 font-semibold">No financial mutation</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No wallet connection, signing, transfer, swap, stake, purchase,
              export, or account operation is available locally.
            </p>
          </Card>
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-5">
          <div className="flex gap-3">
            <LockKeyhole className="h-5 w-5 text-cyan-200" />
            <p className="text-sm leading-6 text-slate-400">
              Production transaction history requires network validation,
              address ownership, receipt verification, replay protection,
              immutable audit records, and secure key boundaries.
            </p>
          </div>
        </Card>
        <p
          aria-live="polite"
          className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400"
        >
          {status}
        </p>
      </div>
    </div>
  );
}
