import { useMemo, useState } from "react";
import {
  Award,
  CircleSlash2,
  Gift,
  LockKeyhole,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type AchievementArea = "All" | "Learning" | "Community" | "Builder";
type AchievementState = "All" | "In progress" | "Unavailable" | "Planned";
type AchievementConcept = {
  id: string;
  title: string;
  area: Exclude<AchievementArea, "All">;
  state: Exclude<AchievementState, "All">;
  summary: string;
  criteria: string;
  progress: string;
  verification: string;
  reward: string;
  issued: string;
  audit: string;
};
const concepts: AchievementConcept[] = [
  {
    id: "learning-path",
    title: "Learning path milestone",
    area: "Learning",
    state: "In progress",
    summary:
      "A local achievement concept pending an authoritative course record, deterministic criteria, progress validation, and reward policy.",
    criteria: "Criteria unavailable",
    progress: "User progress unavailable",
    verification: "Verification unavailable",
    reward: "Reward definition unavailable",
    issued: "Issuance state unavailable",
    audit: "Achievement audit unavailable",
  },
  {
    id: "community-builder",
    title: "Community builder milestone",
    area: "Community",
    state: "Planned",
    summary:
      "A local community achievement concept pending consent-aware activity sourcing, anti-abuse controls, moderation context, and issuance review.",
    criteria: "Criteria unavailable",
    progress: "User progress unavailable",
    verification: "Verification unavailable",
    reward: "Reward definition unavailable",
    issued: "Issuance state unavailable",
    audit: "Achievement audit unavailable",
  },
  {
    id: "builder-release",
    title: "Builder release milestone",
    area: "Builder",
    state: "Unavailable",
    summary:
      "A local builder achievement concept pending verifiable release events, identity authorization, duplicate-claim protection, and revocation policy.",
    criteria: "Criteria unavailable",
    progress: "User progress unavailable",
    verification: "Verification unavailable",
    reward: "Reward definition unavailable",
    issued: "Issuance state unavailable",
    audit: "Achievement audit unavailable",
  },
];
const areas: AchievementArea[] = ["All", "Learning", "Community", "Builder"];
const states: AchievementState[] = [
  "All",
  "In progress",
  "Unavailable",
  "Planned",
];
export default function Achievements() {
  const [area, setArea] = useState<AchievementArea>("All");
  const [state, setState] = useState<AchievementState>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "Achievement service unavailable. Showing local milestone concepts only."
  );
  const filtered = useMemo(
    () =>
      concepts.filter(
        item =>
          (area === "All" || item.area === area) &&
          (state === "All" || item.state === state)
      ),
    [area, state]
  );
  const selected =
    filtered.find(item => item.id === selectedId) ?? filtered[0] ?? concepts[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No profile, activity history, progress, verification, reward, badge, issuance, notification, or persistence operation was started.`
    );
  const metadata: Array<[string, string]> = [
    ["Criteria", selected.criteria],
    ["Progress", selected.progress],
    ["Verification", selected.verification],
    ["Reward", selected.reward],
    ["Issued", selected.issued],
    ["Audit", selected.audit],
  ];
  return (
    <div data-ui-polish="batch-180" className="min-h-screen bg-background">
      <PageHeader
        icon={Trophy}
        title="Achievements"
        subtitle="Review local milestone concepts without fabricated profiles, progress, completion, verification, rewards, badges, rankings, or issuance state."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Achievement service unavailable.</strong> No achievement
            catalog, user-progress source, eligibility rules, verification
            service, reward ledger, badge issuance, or completion history is
            connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Achievement service remains unavailable. Local milestones were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset milestones
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Achievement preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review milestone concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show achievement structure only.
                  They do not represent real profiles, activity, progress,
                  completion, rewards, badges, ranks, certificates, or issuance.
                </p>
              </div>
              <Award className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Achievement area filter"
            >
              {areas.map(item => (
                <Button
                  aria-pressed={area === item}
                  key={item}
                  onClick={() => setArea(item)}
                  size="sm"
                  variant={area === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Achievement state filter"
            >
              {states.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(item => (
                <button
                  aria-pressed={selected.id === item.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === item.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{item.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {item.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{item.area}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.summary}
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
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected milestone
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.area} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {metadata.map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No criteria, progress, verification, reward, issuance, or audit
                state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Claim achievement")}
                  variant="outline"
                >
                  <Gift className="mr-2 h-4 w-4" /> Claim unavailable
                </Button>
                <Button
                  onClick={() => blocked("Issue achievement")}
                  variant="outline"
                >
                  <Award className="mr-2 h-4 w-4" /> Issue unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Achievements require deterministic criteria, server-side
                  progress validation, idempotent reward issuance, anti-abuse
                  controls, privacy-aware history, and auditable changes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Progress, verification, reward, badge, issuance, notification,
                  and revocation transitions must be auditable and isolated from
                  fabricated outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No profile lookup, activity read, progress update, reward
                  issuance, badge claim, notification, or achievement mutation
                  is available from this preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
