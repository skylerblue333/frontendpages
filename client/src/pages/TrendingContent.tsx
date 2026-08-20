import { useMemo, useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  Clock3,
  Eye,
  FileSearch,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  UsersRound,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Window = "Recent" | "This week" | "This month";
type Content = {
  id: string;
  title: string;
  category: string;
  evidence: string;
};
const content: readonly Content[] = [
  {
    id: "one",
    title: "Community content concept",
    category: "Community",
    evidence:
      "Source, views, engagement, moderation, and audience scope are unavailable.",
  },
  {
    id: "two",
    title: "Education content concept",
    category: "Education",
    evidence:
      "Publication date, enrollment context, completion signals, and source provenance are unavailable.",
  },
  {
    id: "three",
    title: "Market content concept",
    category: "Finance",
    evidence:
      "Market source, timestamp, engagement, and recommendation controls are unavailable.",
  },
];

export default function TrendingContent() {
  const [window, setWindow] = useState<Window>("Recent");
  const [selectedId, setSelectedId] = useState(content[0].id);
  const [status, setStatus] = useState(
    "Trending-content service unavailable locally. No content ranking is loaded."
  );
  const selected = useMemo(
    () => content.find(item => item.id === selectedId) ?? content[0],
    [selectedId]
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No content ranking, engagement, audience, moderation, or recommendation mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={BookOpen}
        title="Trending content"
        subtitle="Review content-discovery structure without fabricating views, engagement, recency, authorship, moderation, audience, rankings, or recommendations."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Trending content unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Trending-content service unavailable.</strong> No content
            registry, publication source, engagement stream, moderation state,
            privacy scope, or timestamped ranking input is connected. Concepts
            below are not ranked content.
          </p>
          <Button
            onClick={() => blocked("Refresh content")}
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
                  Content preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review local content concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  Typed local fixtures demonstrate category, recency intent, and
                  evidence notes only. They do not represent published content,
                  popularity, views, engagement, creator identity,
                  recommendation, or moderation outcomes.
                </p>
              </div>
              <BookOpen
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Content recency filter"
            >
              {(["Recent", "This week", "This month"] as const).map(item => (
                <Button
                  key={item}
                  type="button"
                  aria-pressed={window === item}
                  onClick={() => {
                    setWindow(item);
                    setStatus(
                      `Recency intent changed locally to ${item}. No content query or ranking was run.`
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
              {content.map(item => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected.id === item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === item.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{item.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {item.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.evidence}
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
                Selected content concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.category} · {window}
              </p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Rank", "Unavailable"],
                  ["Published", "Date unavailable"],
                  ["Author", "Identity unavailable"],
                  ["Views", "Unavailable"],
                  ["Engagement", "Unavailable"],
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
                No content rank, publication, author, views, engagement,
                moderation, audience, or recommendation is available.
              </p>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production content-discovery system requires source
                  provenance, publication and recency definitions, duplicate and
                  bot controls, moderation policy, creator authorization,
                  privacy-safe engagement aggregation, ranking auditability,
                  report handling, and clear separation between discovery and
                  recommendation.
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
                    No source or score.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileSearch
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Moderation absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No review state.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <Eye className="h-5 w-5 text-rose-300" aria-hidden="true" />
                  <p className="mt-2 text-sm font-medium">Privacy boundary</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No audience inference.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No content rank, author, views, engagement, moderation, audience,
            recommendation, or real activity is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
