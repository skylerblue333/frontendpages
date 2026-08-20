import { useMemo, useState } from "react";
import {
  Award,
  Check,
  CircleDollarSign,
  Filter,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  UsersRound,
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
const rewards = [
  {
    id: 1,
    name: "Participation reward",
    category: "Engagement",
    detail:
      "A local reward definition requiring an eligible event, policy authority, abuse controls, accounting treatment, and user disclosure.",
    state: "Unconfigured",
  },
  {
    id: 2,
    name: "Learning milestone",
    category: "Education",
    detail:
      "An education reward concept requiring completion evidence, identity, safeguarding, eligibility, and approval ownership.",
    state: "Needs evidence",
  },
  {
    id: 3,
    name: "Referral reward",
    category: "Growth",
    detail:
      "A referral concept requiring attribution, consent, anti-fraud controls, duplicate handling, and destination policy.",
    state: "Blocked",
  },
  {
    id: 4,
    name: "Token incentive",
    category: "Financial",
    detail:
      "A sensitive incentive concept that must not imply token issuance, balance, value, custody, exchange, or financial return.",
    state: "Review needed",
  },
];
export default function RewardSystem() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [eligibility, setEligibility] = useState("Eligibility not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(rewards.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      rewards.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const reward = rewards.find(item => item.id === selected) ?? rewards[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setEligibility("Eligibility not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-179" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Award}
        eyebrow="Reward system · Governance preview"
        title="Prove eligibility before issuing a reward."
        description="Explore local reward definitions with search, category filters, eligibility intent, approvals, audit, save/reset, and blocked issuance and transfer actions. No live reward, user, balance, token, wallet, payment, value, or financial outcome is connected."
        badge="Incentive workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save reward locally"}
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
            {showGates ? "Close gates" : "Review reward gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset reward
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Definitions",
              value: `${rewards.length} local`,
              hint: "No event source",
              icon: Award,
              tone: "cyan",
            },
            {
              label: "Users",
              value: "Unavailable",
              hint: "No identity source",
              icon: UsersRound,
              tone: "violet",
            },
            {
              label: "Balances",
              value: "Unconnected",
              hint: "No ledger source",
              icon: CircleDollarSign,
              tone: "amber",
            },
            {
              label: "Issuance",
              value: "Blocked",
              hint: "No authorization",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Reward evidence boundary">
          <strong>
            This is a local reward-governance preview, not evidence that a
            reward, balance, token, user, wallet, payment, value, or financial
            return exists.
          </strong>{" "}
          Reward cards, filters, eligibility intent, saved state, approvals,
          audit gates, and disabled issuance/transfer actions are browser
          concepts. No reward amount, balance, token, transaction, value, tax,
          or financial outcome is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local reward definitions"
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
                    Selected reward definition
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{reward.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {reward.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {reward.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: reward.category },
                  { label: "Eligibility", value: eligibility },
                  { label: "Users", value: "Unavailable" },
                  { label: "Balance", value: "Unconnected" },
                  { label: "Approval", value: "Required" },
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
              <label className="mt-5 block text-sm text-slate-400">
                Eligibility intent
                <select
                  value={eligibility}
                  onChange={event => setEligibility(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                >
                  <option>Eligibility not configured</option>
                  <option>Event-based intent</option>
                  <option>Completion-based intent</option>
                  <option>Referral-based intent</option>
                  <option>Review-required intent</option>
                </select>
              </label>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Award className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No reward evidence loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed events, identity, eligibility rules,
                  anti-abuse controls, ledger, wallet, payment, approvals,
                  notifications, privacy, and audit before issuance.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Issue unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Claim unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Transfer unavailable
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
                    No financial or token claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A reward definition does not prove eligibility, issuance,
                    balance, token ownership, wallet custody, payment
                    settlement, value, tax treatment, or financial return.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Reward gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real reward system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated user, event, eligibility, tenant, timestamp, policy version, provenance, and duplicate handling",
                "Reward definition, amount/unit, currency/token semantics, expiry, clawback, taxes, fees, and disclosures",
                "Ledger integrity, idempotency, settlement, wallet/address validation, transaction status, reconciliation, and audit",
                "Anti-abuse, anti-fraud, referral attribution, rate limits, eligibility appeals, support, notifications, and reversibility",
                "Privacy, consent, sensitive financial data, retention, deletion, export, role separation, and incident response",
                "Token, financial, user, educational, marketplace, AI, and business claims require separate evidence and review",
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
              title: "Reward surface preserved",
              description:
                "Engagement, learning, referral, token concepts, filters, eligibility, issuance, claiming, transfer, approvals, audit, save/reset, and gates remain interactive.",
              icon: Award,
              status: "Local definitions",
            },
            {
              title: "No balance theater",
              description:
                "Rewards, users, balances, tokens, wallets, payments, values, taxes, ownership, and financial outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Eligibility before issuance",
              description:
                "Real rewards require governed events, authorization, anti-abuse controls, ledger integrity, settlement, privacy, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
