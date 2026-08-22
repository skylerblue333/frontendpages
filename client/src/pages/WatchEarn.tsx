import { useMemo, useState } from "react";
import {
  Award,
  CheckCircle2,
  Clock3,
  FileSearch,
  Gift,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  WalletCards,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Filter = "All" | "Content" | "Quizzes";
type RewardConcept = {
  id: string;
  name: string;
  category: Exclude<Filter, "All">;
  detail: string;
};
const concepts: readonly RewardConcept[] = [
  {
    id: "watch",
    name: "Verified watch activity concept",
    category: "Content",
    detail:
      "Content ownership, watch attribution, anti-fraud signals, eligibility, and reward rules are unavailable.",
  },
  {
    id: "quiz",
    name: "Learning checkpoint concept",
    category: "Quizzes",
    detail:
      "Question source, assessment integrity, completion proof, and reward eligibility are unavailable.",
  },
  {
    id: "streak",
    name: "Consistent participation concept",
    category: "Content",
    detail:
      "Session identity, streak calculation, timezone, consent, and reward-ledger rules are unavailable.",
  },
];

export default function WatchEarn() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "Watch-to-earn service unavailable locally. No content was played and no reward was accrued."
  );
  const selected = useMemo(
    () => concepts.find(item => item.id === selectedId) ?? concepts[0],
    [selectedId]
  );
  const visible =
    filter === "All"
      ? concepts
      : concepts.filter(item => item.category === filter);
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No content, watch attribution, anti-fraud check, reward ledger, payout, tax, or creator-settlement mutation was started.`
    );
  return (
    <div data-ui-polish="batch-205" className="min-h-screen bg-background">
      <PageHeader
        icon={Gift}
        title="Watch & earn"
        subtitle="Review rewards-readiness requirements without fabricating content views, watch attribution, eligibility, balances, SKY444 accrual, streaks, quiz rewards, payouts, tax, or settlement outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Watch and earn unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Watch-to-earn service unavailable.</strong> No verified
            content, authenticated watch attribution, anti-fraud service, reward
            ledger, payout rules, tax/compliance handling, or creator settlement
            is connected.
          </p>
          <Button
            onClick={() => blocked("Refresh rewards readiness")}
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1fr_370px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Rewards preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Watch-to-earn readiness
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  These local concepts describe evidence gates only. They do not
                  represent real content, playback, watch time, eligibility,
                  points, tokens, streaks, quiz results, payout balances, or
                  earnings.
                </p>
              </div>
              <Gift
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Reward concept filter"
            >
              {(["All", "Content", "Quizzes"] as const).map(item => (
                <Button
                  key={item}
                  type="button"
                  aria-pressed={filter === item}
                  onClick={() => {
                    setFilter(item);
                    setStatus(
                      `Reward concept filter changed locally to ${item}. No content or reward query was run.`
                    );
                  }}
                  size="sm"
                  variant={filter === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {visible.map(item => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected.id === item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === item.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{item.name}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {item.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.detail}
                  </p>
                </button>
              ))}
              <div className="mt-6 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Watch unavailable
                </Button>
                <Button disabled variant="outline">
                  Start quiz unavailable
                </Button>
                <Button disabled variant="outline">
                  <WalletCards className="mr-2 h-4 w-4" /> Claim unavailable
                </Button>
              </div>
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
                Reward boundary
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                No earnings state implied
              </h2>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Content", "Not selected"],
                  ["Viewer", "Not authenticated"],
                  ["Watch attribution", "Not recorded"],
                  ["Eligibility", "Not evaluated"],
                  ["Anti-fraud", "Service unavailable"],
                  ["Reward ledger", "Not connected"],
                  ["Balance", "Not calculated"],
                  ["Streak", "Not tracked"],
                  ["Payout", "Rules unavailable"],
                  ["Tax/compliance", "Not assessed"],
                  ["Creator settlement", "Not calculated"],
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
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production rewards program requires verified content
                  delivery, authenticated attribution, anti-fraud controls,
                  transparent eligibility, an auditable reward ledger,
                  deterministic idempotency, payout authorization, tax
                  reporting, jurisdiction controls, creator settlement, dispute
                  handling, and privacy-safe event retention. Reward points or
                  tokens must never be shown as earned without authoritative
                  records.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Gates visible</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No viewing started.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Earning blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No reward accrued.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileSearch
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Source absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No content provenance.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <Award className="h-5 w-5 text-rose-300" aria-hidden="true" />
                  <p className="mt-2 text-sm font-medium">Ledger absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No payout outcome.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No content view, watch attribution, eligibility, balance, SKY444
            accrual, streak, quiz reward, payout, tax, or creator-settlement
            outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
