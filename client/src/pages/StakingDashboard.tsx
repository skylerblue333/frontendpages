import { useState } from "react";
import {
  Check,
  Coins,
  Gauge,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  WalletCards,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ScreenFeatureGrid,
  ScreenHero,
  ScreenPreviewBanner,
  ScreenStatGrid,
} from "@/components/ScreenExperience";

const items = [
  "Protocol identity",
  "Network and validator",
  "Wallet ownership",
  "Lockup and exit rules",
  "Reward accounting",
  "Transaction verification",
];
export default function StakingDashboard() {
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const [network, setNetwork] = useState("Network not verified");
  const reset = () => {
    setSaved(false);
    setShowGates(false);
    setNetwork("Network not verified");
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Coins}
        eyebrow="Staking dashboard · Readiness preview"
        title="Review staking requirements without inventing yield or rewards."
        description="Explore a read-only staking readiness workspace with protocol, network, validator, wallet ownership, lockup, reward, transaction, custody, privacy, save/reset, and disabled stake, unstake, claim, delegate, and transfer actions. No balance, APY, APR, reward, validator, position, transaction, or financial outcome is connected."
        badge="Evidence-bounded staking workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save readiness view"}
          </Button>
          <Button
            onClick={() => setShowGates(value => !value)}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            {showGates ? (
              <X className="mr-2 size-4" />
            ) : (
              <ShieldAlert className="mr-2 size-4" />
            )}
            {showGates ? "Close gates" : "Review staking gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset view
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Position",
              value: "Unavailable",
              hint: "No wallet source",
              icon: WalletCards,
              tone: "cyan",
            },
            {
              label: "Protocol",
              value: "Unverified",
              hint: "No chain source",
              icon: ShieldCheck,
              tone: "violet",
            },
            {
              label: "Rewards",
              value: "Blocked",
              hint: "No accounting",
              icon: Coins,
              tone: "amber",
            },
            {
              label: "Yield",
              value: "Not shown",
              hint: "No financial claim",
              icon: Gauge,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Staking evidence boundary">
          <strong>
            This is a read-only staking-design preview, not evidence that a
            wallet, validator, protocol, position, balance, yield, reward,
            transaction, or financial outcome exists.
          </strong>{" "}
          Readiness cards, network selection, saved state, and disabled staking
          actions are browser concepts. No APY, APR, return, reward, balance,
          fee, validator performance, or transaction success is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Readiness checklist
              </p>
              <h2 className="mt-2 text-2xl font-black">Required evidence</h2>
              <div className="mt-6 space-y-3">
                {items.map(item => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 p-4"
                  >
                    <LockKeyhole className="size-4 text-slate-500" />
                    <span className="flex-1 text-sm font-semibold">{item}</span>
                    <Badge
                      variant="outline"
                      className="border-amber-300/20 text-amber-200"
                    >
                      Unavailable
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Selected staking readiness
              </p>
              <h2 className="mt-2 text-2xl font-black">
                No live position loaded
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Connect an authenticated wallet, verified chain and protocol,
                validator registry, position state, lockup and exit rules,
                reward accounting, fee schedule, transaction status, custody
                policy, and reconciliation before displaying or changing a
                staking position.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Wallet", value: "Unavailable" },
                  { label: "Address", value: "Unverified" },
                  { label: "Network", value: network },
                  { label: "Validator", value: "No registry" },
                  { label: "Position", value: "No source" },
                  { label: "Rewards", value: "No accounting" },
                ].map(item => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 p-3"
                  >
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold text-amber-200">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <label className="mt-6 block text-sm font-semibold text-slate-300">
                Network intent
                <select
                  value={network}
                  onChange={event => setNetwork(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                >
                  <option>Network not verified</option>
                  <option>Ethereum intent</option>
                  <option>Solana intent</option>
                  <option>Test network intent</option>
                </select>
              </label>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Coins className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No staking evidence loaded</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  A staking dashboard must verify network, wallet address,
                  protocol terms, validator status, lockup, slashing, reward
                  source, fees, transaction hash, custody, reconciliation, and
                  risk disclosures before showing a position or outcome.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Stake unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Unstake unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Claim rewards unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Delegate unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No yield or reward claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A staking concept does not prove APY, APR, return, balance,
                    reward, validator performance, transaction success, custody,
                    or financial safety.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Staking-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real staking surface must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated wallet ownership, address validation, network/chain identity, protocol contract, validator registry, and supported asset",
                "Lockup, cooldown, exit, slashing, delegation, fee, inflation, reward, tax, custody, and counterparty terms from authoritative sources",
                "Unsigned and signed transaction parameters, gas/fee estimate, nonce/replay controls, hash, pending/confirmed/failed status, and reconciliation",
                "Private keys and seed phrases must remain protected; no plaintext custody or custodial-security claim is permitted",
                "Stake, unstake, claim, delegate, transfer, export, retry, and accountable approval require governed financial operations",
                "A staking preview must not be presented as APY/APR, yield, reward, return, balance, validator performance, or safe investment without evidence",
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-3"
                >
                  <LockKeyhole className="size-4 text-slate-500" />
                  <span className="flex-1 text-sm text-slate-300">{item}</span>
                  <Badge
                    variant="outline"
                    className="border-amber-300/20 text-amber-200"
                  >
                    Required
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <ScreenFeatureGrid
          features={[
            {
              title: "Staking surface preserved",
              description:
                "Readiness, wallet, network, validator, lockup, rewards, transactions, save/reset, and blocked stake/unstake/claim/delegate actions remain visible.",
              icon: Coins,
              status: "Read-only",
            },
            {
              title: "No yield theater",
              description:
                "Balances, APY, APR, rewards, returns, validator performance, transaction success, and financial outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before transaction",
              description:
                "Real staking requires verified chain and wallet controls, signed status, reconciliation, key protection, and risk disclosures.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
