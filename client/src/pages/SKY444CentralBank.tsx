import { useMemo, useState } from "react";
import {
  Banknote,
  Check,
  Coins,
  Filter,
  Landmark,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  Vote,
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
const controls = [
  {
    id: 1,
    name: "Token registry",
    category: "Supply",
    detail:
      "A local registry concept requiring chain identity, contract address, decimals, authority, network, and independently verified state.",
    state: "No chain source",
  },
  {
    id: 2,
    name: "Emission and burn policy",
    category: "Monetary policy",
    detail:
      "A policy concept requiring signed rules, execution authority, events, limits, timelocks, audit, and reconciliation.",
    state: "Blocked",
  },
  {
    id: 3,
    name: "Staking policy",
    category: "Staking",
    detail:
      "A staking concept requiring validator or contract state, lock periods, reward semantics, slashing, custody, and settlement evidence.",
    state: "Unconnected",
  },
  {
    id: 4,
    name: "Treasury and reserves",
    category: "Treasury",
    detail:
      "A treasury concept requiring wallet provenance, balances, multisig policy, reserves, allocations, approvals, and independent review.",
    state: "Review needed",
  },
  {
    id: 5,
    name: "Governance weights",
    category: "Governance",
    detail:
      "A governance concept requiring token-holder identity, delegation, snapshot rules, quorum, voting power, and execution evidence.",
    state: "Unmeasured",
  },
];
export default function SKY444CentralBank() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [network, setNetwork] = useState("Network not configured");
  const [policy, setPolicy] = useState("Policy authority not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(controls.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      controls.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const control = controls.find(item => item.id === selected) ?? controls[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setNetwork("Network not configured");
    setPolicy("Policy authority not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-201" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Landmark}
        eyebrow="SKY444 Central Bank · Token-economics preview"
        title="Govern the policy before displaying the balance."
        description="Explore local registry, monetary policy, staking, treasury, and governance concepts with search, category filters, network and authority intent, save/reset, and blocked chain and financial actions. No live chain state, supply, balance, price, APY, reserve, treasury, protocol revenue, or monetary-policy outcome is connected."
        badge="High-risk financial governance"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save control locally"}
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
            {showGates ? "Close gates" : "Review chain gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset control
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Controls",
              value: `${controls.length} local`,
              hint: "No chain source",
              icon: Landmark,
              tone: "cyan",
            },
            {
              label: "Supply",
              value: "Unavailable",
              hint: "No registry state",
              icon: Coins,
              tone: "violet",
            },
            {
              label: "Treasury",
              value: "Unconnected",
              hint: "No wallet source",
              icon: Banknote,
              tone: "amber",
            },
            {
              label: "APY",
              value: "Not claimed",
              hint: "No staking source",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Token-economics evidence boundary">
          <strong>
            This is a local governance preview, not a central bank, token
            registry, reserve report, staking dashboard, or financial product.
          </strong>{" "}
          Policy cards, filters, network and authority intent, saved state, and
          disabled chain/financial actions are browser concepts. No chain,
          contract, supply, balance, price, APY, reserve, treasury, protocol
          revenue, governance weight, or monetary-policy result is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local token-economics controls"
                  className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-3 text-sm text-white outline-none"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map(entry => (
                  <Button
                    key={entry}
                    onClick={() => setCategory(entry)}
                    size="sm"
                    variant="outline"
                    className={
                      category === entry
                        ? "border-cyan-300/40 bg-cyan-300/[0.08] text-cyan-100"
                        : "border-white/10 text-slate-400"
                    }
                  >
                    {entry}
                  </Button>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {filtered.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item.id)}
                    className={`w-full rounded-xl border p-4 text-left ${selected === item.id ? "border-cyan-300/40 bg-cyan-300/[0.06]" : "border-white/10"}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="mt-1 text-sm text-slate-500">
                          {item.detail}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-amber-300/20 text-amber-200"
                      >
                        {item.state}
                      </Badge>
                    </div>
                    <div className="mt-4">
                      <Badge
                        variant="outline"
                        className="border-white/10 text-slate-500"
                      >
                        {item.category}
                      </Badge>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                    Selected governance control
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{control.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {control.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {control.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: control.category },
                  { label: "Network", value: network },
                  { label: "Authority", value: policy },
                  { label: "Supply", value: "Unavailable" },
                  { label: "Balances", value: "Unconnected" },
                  { label: "Audit", value: "Required" },
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
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <label className="text-sm text-slate-400">
                  Network intent
                  <select
                    value={network}
                    onChange={event => setNetwork(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Network not configured</option>
                    <option>Testnet intent</option>
                    <option>Mainnet intent</option>
                    <option>Private-network intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Policy authority intent
                  <select
                    value={policy}
                    onChange={event => setPolicy(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Policy authority not configured</option>
                    <option>Multisig intent</option>
                    <option>Timelock intent</option>
                    <option>Governance-vote intent</option>
                    <option>Independent-review intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Coins className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No verified chain evidence loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed chain RPC, contract registry, signed policy,
                  wallet provenance, balances, events, staking state, treasury
                  controls, governance snapshots, and reconciliation before
                  displaying monetary data.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Read chain unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Publish policy unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Execute unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Export audit unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No financial or blockchain claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A policy concept does not prove chain state, contract
                    ownership, supply, balances, reserves, treasury, APY,
                    governance power, token value, transaction status, or
                    financial return.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Central-bank governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What real token economics must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Network, chain ID, contract, decimals, owner, deployment, upgrade authority, timestamp, RPC source, and verified state",
                "Supply, emission, burn, inflation, caps, events, timelocks, signed policy, execution, reconciliation, and audit",
                "Staking, validator, lock, reward, slashing, custody, wallet, APY, fee, settlement, and transaction semantics",
                "Treasury, reserves, multisig, wallet provenance, balances, allocations, approvals, conflicts, and independent review",
                "Governance identity, delegation, snapshots, quorum, voting power, proposals, execution, appeals, and accessibility",
                "Financial, investment, legal, tax, reserve, monetary, token-value, and security claims require accountable domain review",
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-3"
                >
                  <LockKeyhole className="size-4 text-slate-500" />
                  <span className="flex-1 text-sm text-slate-300">{item}</span>
                  <span className="text-xs text-amber-200">Required</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <ScreenFeatureGrid
          features={[
            {
              title: "Token-governance surface preserved",
              description:
                "Registry, supply, emission, burn, staking, treasury, reserves, governance, network, policy, chain read, execution, audit, save/reset, and gates remain interactive.",
              icon: Landmark,
              status: "Local controls",
            },
            {
              title: "No monetary theater",
              description:
                "Chain state, supply, balances, prices, APY, reserves, treasury, protocol revenue, governance weights, token value, and financial outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Proof before policy",
              description:
                "Real token economics requires authoritative chain state, signed policies, custody boundaries, reconciliation, independent review, and domain accountability.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
