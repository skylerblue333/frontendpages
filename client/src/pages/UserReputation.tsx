import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileSearch,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  Star,
  UserRound,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Filter = "Overview" | "Reviews" | "Endorsements";
type Signal = { id: string; name: string; category: string; evidence: string };
const signals: readonly Signal[] = [
  {
    id: "one",
    name: "Community trust concept",
    category: "Reviews",
    evidence:
      "Reviewer identity, content, score methodology, recency, and moderation are unavailable.",
  },
  {
    id: "two",
    name: "Professional endorsement concept",
    category: "Endorsements",
    evidence:
      "Endorser authorization, relationship, evidence, privacy scope, and source provenance are unavailable.",
  },
  {
    id: "three",
    name: "Participation signal concept",
    category: "Overview",
    evidence:
      "Activity history, ranking logic, identity binding, and anti-abuse controls are unavailable.",
  },
];

export default function UserReputation() {
  const [filter, setFilter] = useState<Filter>("Overview");
  const [selectedId, setSelectedId] = useState(signals[0].id);
  const [status, setStatus] = useState(
    "Reputation service unavailable locally. No trust signals are loaded."
  );
  const selected = useMemo(
    () => signals.find(signal => signal.id === selectedId) ?? signals[0],
    [selectedId]
  );
  const visible =
    filter === "Overview"
      ? signals
      : signals.filter(
          signal => signal.category === filter || signal.category === "Overview"
        );
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No reputation query, review, endorsement, ranking, moderation, or profile mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={Star}
        title="User reputation"
        subtitle="Review trust-signal readiness without fabricating scores, reviews, endorsements, rankings, identity, moderation, or reputation outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Reputation unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Reputation service unavailable.</strong> No authenticated
            profile, review store, endorsement source, scoring methodology,
            moderation queue, privacy policy, or anti-abuse system is connected.
          </p>
          <Button
            onClick={() => blocked("Refresh reputation")}
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <div className="grid gap-6 lg:grid-cols-[1fr_370px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Trust preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review local reputation concepts
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Typed local fixtures demonstrate signal categories and
                  evidence notes only. They do not represent a person’s
                  trustworthiness, score, reviews, endorsements, rank,
                  eligibility, or safety.
                </p>
              </div>
              <Star
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Reputation signal filter"
            >
              {(["Overview", "Reviews", "Endorsements"] as const).map(item => (
                <Button
                  key={item}
                  type="button"
                  aria-pressed={filter === item}
                  onClick={() => {
                    setFilter(item);
                    setStatus(
                      `Reputation view changed locally to ${item}. No score or trust query was run.`
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
              {visible.map(signal => (
                <button
                  key={signal.id}
                  type="button"
                  aria-pressed={selected.id === signal.id}
                  onClick={() => setSelectedId(signal.id)}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === signal.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{signal.name}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {signal.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {signal.evidence}
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
                Selected signal concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.name}</h2>
              <p className="mt-1 text-sm text-cyan-200">{selected.category}</p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Profile", "Identity unavailable"],
                  ["Score", "Not calculated"],
                  ["Methodology", "Scoring policy unavailable"],
                  ["Reviews", "Review store unavailable"],
                  ["Endorsements", "Not verified"],
                  ["Rank", "Ranking source unavailable"],
                  ["Recency", "Timestamp unavailable"],
                  ["Moderation", "Review state unavailable"],
                  ["Privacy", "Scope unavailable"],
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
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled size="sm">
                  Leave review unavailable
                </Button>
                <Button disabled size="sm" variant="outline">
                  Endorse unavailable
                </Button>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production trust system requires identity binding, consent,
                  review authenticity, anti-brigading controls, scoring
                  methodology, recency and weighting rules, moderation and
                  appeals, privacy-safe aggregation, dispute handling,
                  auditability, and clear separation between informational
                  signals and suitability or safety judgments.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Scope visible</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Method gaps are named.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Trust blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No review mutation.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileSearch
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Source absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No score provenance.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <UserRound
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Identity absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No person inference.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No reputation score, review, endorsement, rank, identity, safety,
            eligibility, or trust outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
