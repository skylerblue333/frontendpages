import {
  Activity,
  CheckCircle2,
  Cpu,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  Trophy,
  WalletCards,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const metrics = [
  ["Network", "Network identity unavailable", "No chain or mining provider"],
  ["Hashrate", "Not measured", "No miner telemetry"],
  ["Blocks", "Unavailable", "No block source"],
  ["Rewards", "Unavailable", "No reward accounting"],
  ["Profitability", "Not calculated", "No price, fee, or energy inputs"],
  ["Payouts", "Unavailable", "No custody or payout ledger"],
] as const;

export default function TrumpMining() {
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={Cpu}
        title="Token mining"
        subtitle="Review mining readiness without fabricating hashrate, blocks, rewards, profitability, payouts, rig balances, boosts, or leaderboard outcomes."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="Mining service unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Mining service unavailable.</strong> No chain identity,
            mining provider, rig telemetry, reward contract, price feed, energy
            model, account authorization, or payout ledger is connected. This
            page cannot mine.
          </p>
          <Button onClick={() => undefined} size="sm" variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Read-only mining preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Verify mining evidence before display
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This workspace identifies the evidence a production mining
                  surface must verify. It does not start a miner, estimate
                  rewards, calculate USD value, connect a rig, or claim a
                  successful payout.
                </p>
              </div>
              <Cpu
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {metrics.map(([label, value, source]) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-2 text-sm font-semibold">{value}</p>
                  <p className="mt-1 text-xs text-slate-500">{source}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button disabled className="bg-slate-700 text-slate-400">
                Start mining unavailable
              </Button>
              <Button disabled variant="outline">
                Claim rewards unavailable
              </Button>
            </div>
            <p
              aria-live="polite"
              className="mt-5 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
            >
              No miner, rig, block, reward, payout, balance, or performance
              state is loaded.
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Mining readiness gates
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                Operations stay withheld
              </h2>
              <div className="mt-5 space-y-3">
                {[
                  [
                    Activity,
                    "Telemetry and accounting",
                    "No hashrate, uptime, block, share, reward, or reconciliation evidence.",
                  ],
                  [
                    WalletCards,
                    "Wallet and payout",
                    "No authenticated wallet, custody scope, reward address, or payout ledger.",
                  ],
                  [
                    Trophy,
                    "Boosts and leaderboards",
                    "No verified boost policy, participant set, ranking source, or eligibility rule.",
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
                  Real mining infrastructure requires validated network and
                  provider identity, miner authentication, telemetry integrity,
                  reward accounting, duplicate protection, safe wallet
                  boundaries, payout verification, fee and energy inputs, rate
                  limits, failure recovery, and auditability. It must not imply
                  yield or profitability.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Readiness visible</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Evidence gaps are named.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Mining blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No rig or reward mutation.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No hashrate, block, reward, balance, payout, boost, leaderboard,
            return, or profitability outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
