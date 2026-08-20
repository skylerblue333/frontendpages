import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Clock3,
  FileSearch,
  Hash,
  LockKeyhole,
  MessageCircle,
  RefreshCw,
  ShieldAlert,
  UsersRound,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Window = "Recent" | "This week" | "This month";
type Topic = { id: string; label: string; category: string; evidence: string };
const topics: readonly Topic[] = [
  {
    id: "one",
    label: "Community discussion concept",
    category: "Community",
    evidence:
      "Discussion source, message count, sentiment, moderation, and audience scope are unavailable.",
  },
  {
    id: "two",
    label: "Education topic concept",
    category: "Education",
    evidence:
      "Course context, search volume, engagement, publication, and source provenance are unavailable.",
  },
  {
    id: "three",
    label: "Market topic concept",
    category: "Finance",
    evidence:
      "Market source, timestamp, sentiment methodology, and recommendation controls are unavailable.",
  },
];

export default function TrendingTopics() {
  const [window, setWindow] = useState<Window>("Recent");
  const [selectedId, setSelectedId] = useState(topics[0].id);
  const [status, setStatus] = useState(
    "Trending-topics service unavailable locally. No topic ranking is loaded."
  );
  const selected = useMemo(
    () => topics.find(topic => topic.id === selectedId) ?? topics[0],
    [selectedId]
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No topic ranking, discussion, sentiment, audience, moderation, or refresh mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={Hash}
        title="Trending topics"
        subtitle="Review topic-discovery structure without fabricating discussion volume, sentiment, engagement, audience, rankings, moderation, or recommendations."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Trending topics unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Trending-topics service unavailable.</strong> No discussion
            index, search stream, sentiment model, moderation state, privacy
            scope, or timestamped ranking source is connected. Concepts below
            are not ranked topics.
          </p>
          <Button
            onClick={() => blocked("Refresh topics")}
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Topic preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review local topic concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  Typed local fixtures demonstrate category, recency intent, and
                  evidence notes only. They do not represent discussion volume,
                  search demand, sentiment, popularity, engagement,
                  recommendation, or social activity.
                </p>
              </div>
              <MessageCircle
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Topic recency filter"
            >
              {(["Recent", "This week", "This month"] as const).map(item => (
                <Button
                  key={item}
                  type="button"
                  aria-pressed={window === item}
                  onClick={() => {
                    setWindow(item);
                    setStatus(
                      `Recency intent changed locally to ${item}. No topic query or ranking was run.`
                    );
                  }}
                  size="sm"
                  variant={window === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {topics.map(topic => (
                <button
                  key={topic.id}
                  type="button"
                  aria-pressed={selected.id === topic.id}
                  onClick={() => setSelectedId(topic.id)}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === topic.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{topic.label}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {topic.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {topic.evidence}
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
                Selected topic concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.label}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.category} · {window}
              </p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Rank", "Unavailable"],
                  ["Discussion volume", "Unavailable"],
                  ["Sentiment", "Not calculated"],
                  ["Source", "Source registry unavailable"],
                  ["Freshness", "Timestamp unavailable"],
                  ["Moderation", "Review state unavailable"],
                  ["Audience", "Privacy-safe scope unavailable"],
                  ["Recommendation", "Not provided"],
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
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No topic rank, discussion volume, sentiment, source, moderation,
                audience, or recommendation is available.
              </p>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production topic-discovery system requires source
                  provenance, recency definitions, language and sentiment
                  methodology, bot and abuse controls, privacy-safe aggregation,
                  moderation and report handling, ranking auditability, and
                  clear separation between discovery and recommendation.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Recency intent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Local selection only.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Ranking blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No index or score.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <Clock3
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Freshness absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No timestamp authority.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <UsersRound
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Audience boundary</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No user inference.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No topic rank, discussion volume, sentiment, engagement, audience,
            recommendation, or real activity is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
