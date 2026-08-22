import { useState } from "react";
import {
  Coins,
  Droplets,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  Sprout,
  WalletCards,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type PoolGate = { label: string; state: string; detail: string };
const poolGates: readonly PoolGate[] = [
  {
    label: "Pool registry",
    state: "Not connected",
    detail:
      "No protocol, chain, contract address, or verified pool is selected.",
  },
  {
    label: "Liquidity",
    state: "Not observed",
    detail: "No reserve, TVL, utilization, or liquidity source is read.",
  },
  {
    label: "Yield rate",
    state: "Not calculated",
    detail:
      "No APY, APR, emissions schedule, fee, or compounding assumption is shown.",
  },
  {
    label: "Wallet position",
    state: "Not connected",
    detail: "No wallet balance, LP token, stake, or deposited amount is read.",
  },
  {
    label: "Transaction state",
    state: "Not available",
    detail: "No approval, deposit, harvest, withdraw, or signature exists.",
  },
];

export default function YieldFarming() {
  const [status, setStatus] = useState(
    "Yield-farming service unavailable locally. No pool, wallet position, yield rate, transaction, or reward was read or created."
  );
  const notify = (action: string) =>
    setStatus(
      `${action} unavailable locally. No wallet connection, pool lookup, balance read, transaction, harvest, withdrawal, or reward calculation was started.`
    );
  return (
    <div data-ui-polish="batch-210" className="min-h-screen bg-background">
      <PageHeader
        icon={Sprout}
        title="Yield farming"
        subtitle="Review DeFi integration readiness without fabricating APY, liquidity, wallet positions, rewards, protocol safety, or transaction outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Yield farming unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Yield-farming service unavailable.</strong> No verified
            protocol, chain, pool registry, RPC source, wallet connection, price
            source, risk review, or transaction engine is connected.
          </p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => notify("Refresh yield-farming readiness")}
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1fr_380px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  DeFi preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">Pool readiness</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  A production yield workflow needs verified contracts, chain
                  and network validation, authoritative pool data, wallet
                  address validation, slippage and fee disclosures, transaction
                  simulation, signature confirmation, confirmation monitoring,
                  and failed-transaction handling. This workspace shows the
                  gates without connecting a wallet or chain.
                </p>
              </div>
              <Sprout
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 space-y-3">
              {poolGates.map(gate => (
                <div
                  key={gate.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{gate.label}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {gate.state}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {gate.detail}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button disabled className="bg-slate-700 text-slate-400">
                <WalletCards className="mr-2 h-4 w-4" /> Connect wallet
                unavailable
              </Button>
              <Button disabled variant="outline">
                Select pool unavailable
              </Button>
              <Button disabled variant="outline">
                Stake unavailable
              </Button>
              <Button disabled variant="outline">
                Harvest unavailable
              </Button>
            </div>
            <p
              aria-live="polite"
              className="mt-5 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Risk boundary
              </p>
              <h2 className="mt-2 text-xl font-semibold">No yield implied</h2>
              <div className="mt-5 space-y-3">
                {[
                  ["Protocol / chain", "Not selected"],
                  ["Pool", "Not verified"],
                  ["Liquidity", "Not observed"],
                  ["APY / APR", "Not calculated"],
                  ["Wallet", "Not connected"],
                  ["Position", "Not read"],
                  ["Rewards", "Not accrued"],
                  ["Transaction", "Not signed"],
                  ["Risk review", "Not performed"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-3 rounded-lg border border-slate-800 p-3"
                  >
                    <span className="text-sm text-slate-500">{label}</span>
                    <span className="text-right text-sm">{value}</span>
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
                  Yield farming can involve smart-contract, market, oracle,
                  liquidity, bridge, counterparty, impermanent-loss, and
                  transaction risks. This preview does not connect a wallet,
                  sign or broadcast a transaction, read a balance, estimate
                  returns, or recommend a pool.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <Droplets
                    className="h-5 w-5 text-cyan-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Liquidity absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No pool data read.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <Coins
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Rewards absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No yield accrued.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">
                    Transactions blocked
                  </p>
                  <p className="mt-1 text-xs text-slate-500">Nothing signed.</p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No APY, APR, liquidity, wallet balance, stake, harvest, withdrawal,
            reward, transaction, or yield outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
