import { useMemo, useState } from "react";
import {
  Award,
  CheckCircle2,
  FileSearch,
  GraduationCap,
  LockKeyhole,
  PlaySquare,
  RefreshCw,
  ShieldAlert,
  UsersRound,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Filter = "All" | "Courses" | "Guides";
type Tutorial = {
  id: string;
  name: string;
  category: string;
  evidence: string;
};
const tutorials: readonly Tutorial[] = [
  {
    id: "one",
    name: "Platform orientation concept",
    category: "Courses",
    evidence:
      "Author, source media, access policy, duration, progress, and completion criteria are unavailable.",
  },
  {
    id: "two",
    name: "Security fundamentals concept",
    category: "Guides",
    evidence:
      "Curriculum version, instructor authority, transcript, quiz, and certificate rules are unavailable.",
  },
  {
    id: "three",
    name: "Ecosystem walkthrough concept",
    category: "Courses",
    evidence:
      "Catalog freshness, recommendations, learner identity, and privacy scope are unavailable.",
  },
];

export default function VideoTutorials() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedId, setSelectedId] = useState(tutorials[0].id);
  const [status, setStatus] = useState(
    "Video-tutorial service unavailable locally. No tutorial catalog or learner progress is loaded."
  );
  const selected = useMemo(
    () => tutorials.find(item => item.id === selectedId) ?? tutorials[0],
    [selectedId]
  );
  const visible =
    filter === "All"
      ? tutorials
      : tutorials.filter(item => item.category === filter);
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No catalog query, playback, progress, quiz, certificate, recommendation, or learner mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={GraduationCap}
        title="Video tutorials"
        subtitle="Review learning-content readiness without fabricating tutorials, instructors, playback, progress, quizzes, completion, certificates, recommendations, or learner outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Video tutorials unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Video-tutorial service unavailable.</strong> No catalog,
            media source, instructor registry, learner identity, progress store,
            assessment service, certificate authority, or recommendation
            provider is connected.
          </p>
          <Button
            onClick={() => blocked("Refresh tutorials")}
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
                  Learning preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review local tutorial concepts
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Typed local fixtures demonstrate catalog categories and
                  evidence notes only. They do not represent real lessons,
                  instructors, media, learner progress, assessment results,
                  certificates, or recommendations.
                </p>
              </div>
              <GraduationCap
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Tutorial category filter"
            >
              {(["All", "Courses", "Guides"] as const).map(item => (
                <Button
                  key={item}
                  type="button"
                  aria-pressed={filter === item}
                  onClick={() => {
                    setFilter(item);
                    setStatus(
                      `Tutorial category changed locally to ${item}. No catalog query was run.`
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
                Selected tutorial concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.name}</h2>
              <p className="mt-1 text-sm text-cyan-200">{selected.category}</p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Tutorial ID", "Unavailable"],
                  ["Source", "Media source unavailable"],
                  ["Instructor", "Authority unavailable"],
                  ["Access", "Entitlement unavailable"],
                  ["Playback", "Not loaded"],
                  ["Progress", "Not tracked"],
                  ["Quiz", "Assessment unavailable"],
                  ["Completion", "Not determined"],
                  ["Certificate", "Authority unavailable"],
                  ["Recommendations", "Provider unavailable"],
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
                  <PlaySquare className="mr-2 h-4 w-4" /> Watch unavailable
                </Button>
                <Button disabled size="sm" variant="outline">
                  Start course unavailable
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
                  A production learning catalog requires trusted curriculum
                  versions, instructor authorization, safe media delivery,
                  accessibility metadata, learner identity scope, progress
                  persistence, assessment integrity, certificate issuance,
                  recommendation consent, moderation, privacy, and clear
                  separation between preview and completed learning outcomes.
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
                    No catalog query.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Learning blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No progress mutation.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileSearch
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Curriculum absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No source provenance.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <Award className="h-5 w-5 text-rose-300" aria-hidden="true" />
                  <p className="mt-2 text-sm font-medium">Certificate absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No completion inference.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No tutorial, instructor, playback, progress, quiz, completion,
            certificate, recommendation, or learner outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
