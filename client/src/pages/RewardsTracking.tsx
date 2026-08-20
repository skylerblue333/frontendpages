import { useMemo, useState } from "react";
import {
  Check,
  Clock3,
  Filter,
  History,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
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
const events = [
  {
    id: 1,
    name: "Eligibility event",
    category: "Eligibility",
    detail:
      "A local event concept requiring a governed source, identity, policy version, timestamp, and duplicate handling.",
    state: "Unconnected",
  },
  {
    id: 2,
    name: "Issuance event",
    category: "Issuance",
    detail:
      "A reward-history concept requiring an authorized ledger event, idempotency, settlement, and transaction status.",
    state: "Unavailable",
  },
  {
    id: 3,
    name: "Claim event",
    category: "Claim",
    detail:
      "A claim concept requiring user authorization, eligibility evidence, destination validation, and audit.",
    state: "Blocked",
  },
  {
    id: 4,
    name: "Reversal event",
    category: "Reversal",
    detail:
      "A reversal concept requiring a reason, source transaction, approval, reconciliation, notification, and recovery path.",
    state: "Needs review",
  },
];
export default function RewardsTracking() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [status, setStatus] = useState("Status not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(events.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      events.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const event = events.find(item => item.id === selected) ?? events[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setStatus("Status not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={History}
        eyebrow="Rewards tracking · Preview"
        title="Trace the event before showing the reward history."
        description="Explore local reward-event concepts with search, category filters, status intent, provenance and reconciliation gates, save/reset, and blocked balance, claim, and transfer actions. No live reward, user, balance, token, wallet, payment, transaction, or financial outcome is connected."
        badge="History workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save tracking locally"}
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
            {showGates ? "Close gates" : "Review tracking gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset tracking
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Event concepts",
              value: `${events.length} local`,
              hint: "No history source",
              icon: History,
              tone: "cyan",
            },
            {
              label: "Rewards",
              value: "Unavailable",
              hint: "No ledger source",
              icon: WalletCards,
              tone: "violet",
            },
            {
              label: "Balances",
              value: "Unconnected",
              hint: "No wallet source",
              icon: WalletCards,
              tone: "amber",
            },
            {
              label: "Audit",
              value: "Required",
              hint: "No event log",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Reward-history evidence boundary">
          <strong>
            This is a local tracking preview, not evidence that a reward event,
            balance, token, wallet, payment, claim, or reversal exists.
          </strong>{" "}
          Event cards, filters, status intent, saved state, provenance gates,
          and disabled actions are browser concepts. No user, amount, token,
          balance, timestamp, transaction, ownership, or financial outcome is
          asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local reward events"
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
                    Selected event concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{event.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {event.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {event.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: event.category },
                  { label: "Status", value: status },
                  { label: "User", value: "Unavailable" },
                  { label: "Amount", value: "Unavailable" },
                  { label: "Source", value: "Unconnected" },
                  { label: "Reconciliation", value: "Required" },
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
                Status intent
                <select
                  value={status}
                  onChange={event => setStatus(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                >
                  <option>Status not configured</option>
                  <option>Pending intent</option>
                  <option>Settled intent</option>
                  <option>Failed intent</option>
                  <option>Reversed intent</option>
                  <option>Appeal intent</option>
                </select>
              </label>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Clock3 className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No reward history loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed events, identity, eligibility, ledger,
                  wallet, payment, authorization, transaction status,
                  notifications, privacy, and audit before displaying history.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Refresh unavailable
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
                  Export unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No tracking or financial claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    An event concept does not prove a reward, user, amount,
                    balance, wallet, token transaction, settlement, ownership,
                    or financial return.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Tracking gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real reward-history system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated user, event, policy, tenant, timestamp, provenance, duplicate handling, and source authority",
                "Ledger, wallet, balance, issuance, claim, transfer, settlement, idempotency, retry, reversal, and reconciliation integrity",
                "Status semantics, failure handling, retry, appeals, notifications, recovery, rollback, support, and audit history",
                "Anti-abuse, fraud, rate limits, privacy, sensitive financial data, retention, deletion, export, and access control",
                "Blockchain, token, payment, financial, user, educational, marketplace, AI, and business claims require separate evidence",
                "Accessibility, localization, incident response, operational monitoring, costs, on-call ownership, and policy changes",
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
              title: "Tracking surface preserved",
              description:
                "Eligibility, issuance, claim, reversal, filters, statuses, history, balances, transfers, exports, save/reset, and gates remain interactive.",
              icon: History,
              status: "Local concepts",
            },
            {
              title: "No balance theater",
              description:
                "Rewards, users, amounts, balances, wallets, tokens, transactions, ownership, settlement, and financial outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Provenance before history",
              description:
                "Real tracking requires authoritative events, ledger integrity, identity, authorization, transaction states, privacy, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
