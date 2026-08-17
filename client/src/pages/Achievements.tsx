import { useMemo, useState } from "react";
import {
  Award,
  CircleSlash2,
  Info,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type AchievementState = "Available" | "Review" | "Unavailable";
type Achievement = {
  id: string;
  title: string;
  state: AchievementState;
  description: string;
  criteria: string;
  reward: string;
  boundary: string;
};
const achievements: Achievement[] = [
  {
    id: "learning",
    title: "Learning pathway",
    state: "Available",
    description:
      "A local recognition concept for completing a guided learning pathway.",
    criteria: "Course completion evidence required",
    reward: "Recognition badge fixture",
    boundary:
      "No learner record, course progress, certificate, or completion event is connected.",
  },
  {
    id: "community",
    title: "Community contributor",
    state: "Review",
    description:
      "A local recognition concept for constructive ecosystem participation.",
    criteria: "Verified contribution review required",
    reward: "Community recognition fixture",
    boundary:
      "No profile, post history, moderation decision, score, rank, or reward issuance is available.",
  },
  {
    id: "milestone",
    title: "Milestone explorer",
    state: "Unavailable",
    description:
      "A restricted recognition concept pending eligibility and privacy review.",
    criteria: "Eligibility rules unavailable",
    reward: "Reward entitlement unavailable",
    boundary:
      "No activity history, streak, balance, entitlement, certificate, or account mutation is available.",
  },
];
const states: Array<"All" | AchievementState> = [
  "All",
  "Available",
  "Review",
  "Unavailable",
];

export default function Achievements() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] =
    useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(achievements[0].id);
  const [status, setStatus] = useState(
    "Achievement service unavailable. Showing local recognition fixtures only."
  );
  const filtered = useMemo(
    () =>
      achievements.filter(
        achievement =>
          (stateFilter === "All" || achievement.state === stateFilter) &&
          `${achievement.title} ${achievement.description}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [query, stateFilter]
  );
  const selected =
    achievements.find(achievement => achievement.id === selectedId) ??
    achievements[0];
  const reset = () => {
    setQuery("");
    setStateFilter("All");
    setSelectedId(achievements[0].id);
    setStatus(
      "Achievement preview reset locally. No profile, progress, reward, certificate, rank, or claim state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No user, eligibility, reward, certificate, notification, or account request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-400/25 bg-amber-400/10 text-amber-200">
              <Trophy aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Achievements
                </h1>
                <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 text-xs font-medium text-amber-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review recognition concepts without reading user activity,
                claiming rewards, issuing certificates, or changing account
                state.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset achievements preview"
            className="self-start border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white"
            onClick={reset}
            variant="outline"
          >
            <RotateCcw aria-hidden="true" className="mr-2 h-4 w-4" />
            Reset preview
          </Button>
        </header>
        <section
          className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/[0.07] p-4 text-sm text-slate-300"
          role="note"
        >
          <div className="flex gap-3">
            <Info
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
            />
            <p>
              <strong className="font-semibold text-amber-100">
                Achievement service unavailable.
              </strong>{" "}
              No profile, activity history, progress ledger, eligibility engine,
              reward issuer, certificate service, leaderboard, or account
              mutation is connected. The records below are local fixtures.
            </p>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <label className="relative block flex-1">
                <span className="sr-only">
                  Search local achievement fixtures
                </span>
                <Award
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                />
                <Input
                  className="border-slate-700 bg-slate-950/70 pl-9 text-slate-200 placeholder:text-slate-600"
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search achievement fixtures"
                  value={query}
                />
              </label>
              <div
                aria-label="Filter achievement state"
                className="flex flex-wrap gap-2"
                role="group"
              >
                {states.map(option => (
                  <Button
                    aria-pressed={stateFilter === option}
                    className={
                      stateFilter === option
                        ? "bg-amber-500 text-white hover:bg-amber-400"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={option}
                    onClick={() => {
                      setStateFilter(option);
                      setStatus(
                        `${option} achievement state selected locally.`
                      );
                    }}
                    size="sm"
                    variant={stateFilter === option ? "default" : "outline"}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {filtered.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-8 text-center">
                  <Award
                    aria-hidden="true"
                    className="mx-auto h-8 w-8 text-slate-600"
                  />
                  <p className="mt-3 font-medium text-slate-300">
                    No matching local achievements
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Try another state or search term.
                  </p>
                </div>
              ) : (
                filtered.map(achievement => (
                  <button
                    aria-pressed={achievement.id === selectedId}
                    className={`flex w-full items-start gap-4 rounded-xl border p-5 text-left transition-colors ${achievement.id === selectedId ? "border-amber-400/35 bg-amber-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-600"}`}
                    key={achievement.id}
                    onClick={() => {
                      setSelectedId(achievement.id);
                      setStatus(
                        `${achievement.title} selected for local recognition review.`
                      );
                    }}
                    type="button"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-amber-200">
                      <Award aria-hidden="true" className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-medium text-slate-200">
                          {achievement.title}
                        </p>
                        <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-400">
                          {achievement.state}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {achievement.description}
                      </p>
                      <p className="mt-2 text-xs text-slate-600">
                        Progress unavailable · recognition fixture only
                      </p>
                    </div>
                  </button>
                ))
              )}
            </div>
            <p
              aria-live="polite"
              className="mt-6 rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Selected achievement
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {selected.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {selected.boundary}
              </p>
              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Criteria
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {selected.criteria}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-500">
                  Reward concept
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {selected.reward}
                </p>
                <p className="mt-4 text-xs text-slate-600">
                  Completion, progress, eligibility, reward value, rank, and
                  certificate status are unavailable.
                </p>
              </div>
              <Button
                className="mt-5 w-full border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                onClick={() => blocked("Claim achievement")}
                variant="outline"
              >
                <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                Claim unavailable
              </Button>
            </Card>
            <Card className="border-slate-800 bg-slate-700/10 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Eligibility boundary
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No user, activity, course, contribution, score, streak,
                    rank, entitlement, certificate, notification, or account
                    operation is available. Future recognition requires
                    verifiable events, duplicate-claim protection, eligibility
                    rules, auditability, and revocation policy.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <ShieldCheck
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Recognition posture
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    User progress, completion rate, streak, rank, reward
                    balance, certificate, and issued-claim status are
                    unavailable rather than estimated.
                  </p>
                </div>
              </div>
              <Sparkles
                aria-hidden="true"
                className="mt-5 h-5 w-5 text-slate-600"
              />
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
