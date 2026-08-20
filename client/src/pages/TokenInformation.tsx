import {
  BadgeInfo,
  CheckCircle2,
  CircleDollarSign,
  FileKey2,
  Globe2,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  UsersRound,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const facts = [
  ["Network", "Network identity unavailable"],
  ["Contract", "Contract address unavailable"],
  ["Symbol", "Metadata source unavailable"],
  ["Decimals", "Token metadata unavailable"],
  ["Total supply", "Supply data unavailable"],
  ["Holders", "Holder index unavailable"],
  ["Market price", "Verified market feed unavailable"],
  ["Wallet ownership", "Authenticated wallet unavailable"],
] as const;

export default function TokenInformation() {
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={BadgeInfo}
        title="Token information"
        subtitle="Review token metadata provenance without fabricating a contract, supply, holders, balances, market price, ownership, or investment outcome."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="Token information unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Verified token information unavailable.</strong> No chain
            provider, contract registry, metadata source, wallet session, holder
            index, or market-data feed is connected. Values below are
            unavailable rather than estimated.
          </p>
          <Button onClick={() => undefined} size="sm" variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Read-only token preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Verify metadata before display
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This workspace shows the evidence categories a
                  token-information screen must verify. It does not create a
                  wallet, query a chain, calculate a balance, infer market
                  value, or recommend a financial action.
                </p>
              </div>
              <CircleDollarSign
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              {facts.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <dt className="text-xs text-slate-500">{label}</dt>
                  <dd className="mt-2 text-sm font-medium">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 rounded-xl border border-dashed border-slate-700 p-5">
              <p className="font-medium">No verified token record loaded</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                A real token record requires network and contract identity,
                provenance, decimals, supply semantics, holder indexing, wallet
                authorization, timestamp freshness, and reconciliation. None is
                available here.
              </p>
            </div>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Evidence gates
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                Display stays withheld
              </h2>
              <div className="mt-5 space-y-3">
                {[
                  [
                    Globe2,
                    "Network identity",
                    "No chain or network provider is connected.",
                  ],
                  [
                    FileKey2,
                    "Contract provenance",
                    "No verified contract address or source is available.",
                  ],
                  [
                    UsersRound,
                    "Ownership context",
                    "No authenticated wallet or holder index is available.",
                  ],
                  [
                    CircleDollarSign,
                    "Market context",
                    "No verified price, liquidity, volume, or valuation feed is available.",
                  ],
                ].map(([Icon, label, description]) => (
                  <div
                    key={label as string}
                    className="flex gap-3 rounded-xl border border-slate-800 p-4"
                  >
                    <Icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium">{label as string}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {description as string}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production token-information view requires server-side
                  provider validation, address and network checks, safe wallet
                  boundaries, freshness and reconciliation, rate limits, error
                  recovery, and privacy-safe handling. It must never imply
                  custody, liquidity, profitability, or investment suitability.
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
                    No wallet or transaction mutation.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">
                    Financial data blocked
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    No price, value, supply, or balance.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No token ownership, balance, supply, price, market, custody, or
            financial outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
