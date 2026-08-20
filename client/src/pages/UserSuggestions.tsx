import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Eye,
  FileSearch,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  Sparkles,
  UserRound,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Filter = "All" | "People" | "Content";
type Suggestion = {
  id: string;
  name: string;
  category: string;
  evidence: string;
};
const suggestions: readonly Suggestion[] = [
  {
    id: "one",
    name: "Community connection concept",
    category: "People",
    evidence:
      "Identity, relationship context, personalization source, privacy, and ranking are unavailable.",
  },
  {
    id: "two",
    name: "Learning resource concept",
    category: "Content",
    evidence:
      "Catalog provenance, freshness, audience scope, moderation, and recommendation logic are unavailable.",
  },
  {
    id: "three",
    name: "Ecosystem discovery concept",
    category: "Content",
    evidence:
      "User preference history, eligibility, feedback, and explanation source are unavailable.",
  },
];

export default function UserSuggestions() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedId, setSelectedId] = useState(suggestions[0].id);
  const [status, setStatus] = useState(
    "Suggestion service unavailable locally. No personalized suggestions are loaded."
  );
  const selected = useMemo(
    () => suggestions.find(item => item.id === selectedId) ?? suggestions[0],
    [selectedId]
  );
  const visible =
    filter === "All"
      ? suggestions
      : suggestions.filter(item => item.category === filter);
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No recommendation query, personalization, feedback, privacy, moderation, or relationship mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={Sparkles}
        title="User suggestions"
        subtitle="Review discovery-readiness structure without fabricating recommendations, personalization, ranking, identity, feedback, privacy, moderation, or eligibility outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Suggestions unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Suggestion service unavailable.</strong> No authenticated
            profile, preference history, catalog source, ranking model, privacy
            policy, moderation state, or explanation provider is connected.
          </p>
          <Button
            onClick={() => blocked("Refresh suggestions")}
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
                  Discovery preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review local suggestion concepts
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Typed local fixtures demonstrate discovery categories and
                  evidence notes only. They do not represent personalized
                  recommendations, real people, content, rankings, preferences,
                  or suitability.
                </p>
              </div>
              <Sparkles
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Suggestion category filter"
            >
              {(["All", "People", "Content"] as const).map(item => (
                <Button
                  key={item}
                  type="button"
                  aria-pressed={filter === item}
                  onClick={() => {
                    setFilter(item);
                    setStatus(
                      `Suggestion category changed locally to ${item}. No recommendation query was run.`
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
                Selected suggestion concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.name}</h2>
              <p className="mt-1 text-sm text-cyan-200">{selected.category}</p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Suggestion ID", "Unavailable"],
                  ["Reason", "Explanation unavailable"],
                  ["Profile/context", "Not resolved"],
                  ["Source", "Catalog unavailable"],
                  ["Freshness", "Timestamp unavailable"],
                  ["Personalization", "Preference source unavailable"],
                  ["Rank", "Not calculated"],
                  ["Privacy", "Scope unavailable"],
                  ["Moderation", "Review state unavailable"],
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
                  Save unavailable
                </Button>
                <Button disabled size="sm" variant="outline">
                  Not interested unavailable
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
                  A production suggestion system requires explicit preference
                  consent, identity and relationship authorization, source
                  provenance, freshness, explainable ranking, privacy-safe
                  personalization, moderation, blocked-user handling, feedback
                  controls, abuse resistance, and clear distinction between
                  discovery and suitability or safety judgments.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Filter local</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No recommendation query.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Feedback blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No preference mutation.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileSearch
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Source absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No catalog provenance.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <Eye className="h-5 w-5 text-rose-300" aria-hidden="true" />
                  <p className="mt-2 text-sm font-medium">Privacy boundary</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No preference inference.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No recommendation, identity, content, preference, ranking,
            suitability, privacy, moderation, or discovery outcome is claimed as
            real.
          </strong>
        </p>
      </main>
    </div>
  );
}
