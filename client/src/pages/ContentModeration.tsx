import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  FileSearch,
  Flag,
  Gavel,
  LockKeyhole,
  MessageSquareWarning,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ReviewPolicy = "All" | "Safety" | "Community" | "Copyright";
type ReviewState = "All" | "Review" | "Appeal" | "Unavailable";

type ModerationReview = {
  id: string;
  title: string;
  policy: Exclude<ReviewPolicy, "All">;
  state: Exclude<ReviewState, "All">;
  summary: string;
  content: string;
  report: string;
  policyVersion: string;
  reviewer: string;
  decision: string;
  appeal: string;
};

const reviews: ModerationReview[] = [
  {
    id: "safety-review",
    title: "Safety review concept",
    policy: "Safety",
    state: "Review",
    summary:
      "A local review structure for safety-sensitive content with evidence, escalation, and due-process boundaries.",
    content: "Content evidence unavailable",
    report: "Report context unavailable",
    policyVersion: "Policy version unavailable",
    reviewer: "Reviewer or model unavailable",
    decision: "Moderation decision unavailable",
    appeal: "Appeal state unavailable",
  },
  {
    id: "community-review",
    title: "Community review concept",
    policy: "Community",
    state: "Appeal",
    summary:
      "A local review structure for community reports pending policy provenance, notice, and appeal controls.",
    content: "Content evidence unavailable",
    report: "Report context unavailable",
    policyVersion: "Policy version unavailable",
    reviewer: "Reviewer or model unavailable",
    decision: "Moderation decision unavailable",
    appeal: "Appeal state unavailable",
  },
  {
    id: "copyright-review",
    title: "Copyright review concept",
    policy: "Copyright",
    state: "Unavailable",
    summary:
      "A local review concept for rights claims pending evidence validation, jurisdiction, and dispute handling.",
    content: "Content evidence unavailable",
    report: "Report context unavailable",
    policyVersion: "Policy version unavailable",
    reviewer: "Reviewer or model unavailable",
    decision: "Moderation decision unavailable",
    appeal: "Appeal state unavailable",
  },
];

const policies: ReviewPolicy[] = ["All", "Safety", "Community", "Copyright"];
const states: ReviewState[] = ["All", "Review", "Appeal", "Unavailable"];

export default function ContentModeration() {
  const [policy, setPolicy] = useState<ReviewPolicy>("All");
  const [state, setState] = useState<ReviewState>("All");
  const [selectedId, setSelectedId] = useState(reviews[0].id);
  const [status, setStatus] = useState(
    "Moderation service unavailable. Showing local review concepts only."
  );

  const filtered = useMemo(
    () =>
      reviews.filter(
        review =>
          (policy === "All" || review.policy === policy) &&
          (state === "All" || review.state === state)
      ),
    [policy, state]
  );
  const selected =
    filtered.find(review => review.id === selectedId) ??
    filtered[0] ??
    reviews[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No content classification, report, sanction, appeal, notification, or moderation decision was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Shield}
        title="Content moderation"
        subtitle="Review local moderation concepts without fabricated reports, classifications, sanctions, policy decisions, appeals, or safety metrics."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Moderation service unavailable.</strong> No policy registry,
            evidence store, reviewer or model service, report intake, appeal
            workflow, or safety escalation channel is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Moderation service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset reviews
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Review preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review moderation concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show review structure only. They do
                  not represent real content, reports, policy outcomes, user
                  sanctions, safety classifications, or appeals.
                </p>
              </div>
              <FileSearch className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Moderation policy filter"
            >
              {policies.map(item => (
                <Button
                  aria-pressed={policy === item}
                  key={item}
                  onClick={() => setPolicy(item)}
                  size="sm"
                  variant={policy === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Moderation review state filter"
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
              {filtered.map(review => (
                <button
                  aria-pressed={selected.id === review.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === review.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={review.id}
                  onClick={() => setSelectedId(review.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{review.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {review.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{review.policy}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {review.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local moderation fixtures match these filters.
                </p>
              )}
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
                Selected review
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.policy} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Content", selected.content],
                  ["Report", selected.report],
                  ["Policy", selected.policyVersion],
                  ["Reviewer", selected.reviewer],
                  ["Decision", selected.decision],
                  ["Appeal", selected.appeal],
                ].map(([label, value]) => (
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
                No content, evidence, report, policy version, reviewer,
                decision, sanction, notice, or appeal state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Assess content")}
                  variant="outline"
                >
                  <Shield className="mr-2 h-4 w-4" /> Assess unavailable
                </Button>
                <Button
                  onClick={() => blocked("Apply moderation action")}
                  variant="outline"
                >
                  <Gavel className="mr-2 h-4 w-4" /> Action unavailable
                </Button>
                <Button
                  onClick={() => blocked("Escalate review")}
                  variant="outline"
                >
                  <AlertTriangle className="mr-2 h-4 w-4" /> Escalate
                  unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Moderation requires policy versioning, evidence retention,
                  trained reviewers or validated models, privacy controls, due
                  process, and appeals.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Decisions, sanctions, notices, and escalations must be
                  auditable and isolated from fabricated safety outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <MessageSquareWarning className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No report intake, user notification, appeal, emergency
                  escalation, or enforcement operation is available from this
                  preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Review state remains explicitly unavailable until
                  authoritative services are connected.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
