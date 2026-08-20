import { useMemo, useState } from "react";
import {
  Check,
  Eye,
  Filter,
  Gavel,
  LockKeyhole,
  RefreshCw,
  Search,
  ShieldAlert,
  ShieldCheck,
  UsersRound,
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
const queues = [
  {
    id: 1,
    name: "Content review queue",
    category: "Content",
    detail:
      "A local queue concept requiring content provenance, policy version, reviewer role, context, appeal, and audit.",
    severity: "Unclassified",
    state: "No items loaded",
  },
  {
    id: 2,
    name: "Safety escalation queue",
    category: "Safety",
    detail:
      "A safety workflow concept requiring calibrated signals, human review, safeguarding, emergency handling, and false-positive controls.",
    severity: "Review needed",
    state: "Blocked",
  },
  {
    id: 3,
    name: "Marketplace review queue",
    category: "Marketplace",
    detail:
      "A commerce-review concept requiring listing provenance, seller authorization, transaction context, fraud controls, and appeal.",
    severity: "Unmeasured",
    state: "No source",
  },
  {
    id: 4,
    name: "Community report queue",
    category: "Community",
    detail:
      "A report-review concept requiring reporter privacy, target context, evidence, abuse prevention, notification, and retention.",
    severity: "Unclassified",
    state: "Preview",
  },
];
export default function ReviewModeration() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [decision, setDecision] = useState("Decision not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(queues.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      queues.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const queue = queues.find(item => item.id === selected) ?? queues[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setDecision("Decision not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={ShieldCheck}
        eyebrow="Review moderation · Governance preview"
        title="Review the evidence before enforcing a decision."
        description="Explore local moderation-review queues with search, category filters, severity and decision intent, safety and privacy gates, save/reset, and blocked enforcement actions. No live content, report, user, safety event, model score, enforcement, or legal outcome is connected."
        badge="Trust & safety workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save queue locally"}
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
            {showGates ? "Close gates" : "Review safety gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset review
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Queues",
              value: `${queues.length} local`,
              hint: "No item source",
              icon: Eye,
              tone: "cyan",
            },
            {
              label: "Items",
              value: "Unavailable",
              hint: "No review source",
              icon: UsersRound,
              tone: "violet",
            },
            {
              label: "Safety",
              value: "Review needed",
              hint: "No signal source",
              icon: ShieldAlert,
              tone: "amber",
            },
            {
              label: "Enforcement",
              value: "Blocked",
              hint: "No authorization",
              icon: Gavel,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Moderation evidence boundary">
          <strong>
            This is a local moderation-policy preview, not evidence that
            content, users, reports, safety events, model scores, or enforcement
            actions exist.
          </strong>{" "}
          Queue cards, filters, severity, decision intent, saved state, policy
          gates, and disabled enforcement actions are browser concepts. No
          content, report, account, score, violation, suspension, removal,
          notification, or legal conclusion is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local review queues"
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
                    <Filter className="mr-1 size-3" />
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
                    <div className="mt-4 flex gap-2">
                      <Badge
                        variant="outline"
                        className="border-white/10 text-slate-500"
                      >
                        {item.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-red-300/20 text-red-200"
                      >
                        {item.severity}
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
                    Selected queue concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{queue.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {queue.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {queue.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: queue.category },
                  { label: "Items", value: "Unavailable" },
                  { label: "Severity", value: queue.severity },
                  { label: "Decision", value: decision },
                  { label: "Reviewer", value: "Unassigned" },
                  { label: "Appeal", value: "Required" },
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
                Decision intent
                <select
                  value={decision}
                  onChange={event => setDecision(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                >
                  <option>Decision not configured</option>
                  <option>Request context intent</option>
                  <option>Allow intent</option>
                  <option>Escalate intent</option>
                  <option>Restrict intent</option>
                  <option>Appeal review intent</option>
                </select>
              </label>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <ShieldCheck className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No moderation evidence loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed content, report, account, policy, signal,
                  reviewer, appeal, notification, privacy, and audit sources
                  before enforcement.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Review unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Enforce unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Notify unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Export audit unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No safety or enforcement claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A queue concept does not prove harmful content, user
                    identity, model accuracy, policy violation, reviewer
                    decision, enforcement authority, or legal compliance.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Moderation gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real review workflow must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated content, account, report, event, timestamp, tenant, provenance, and access boundaries",
                "Policy version, taxonomy, severity, context, model signal, uncertainty, false-positive controls, and human review",
                "Privacy, reporter safety, sensitive data, minors, safeguarding, redaction, retention, deletion, and lawful access",
                "Reviewer role, separation of duties, appeal, notification, transparency, reversibility, and audit trail",
                "Rate limits, abuse prevention, adversarial testing, incident response, accessibility, localization, and support",
                "Enforcement, legal, safety, AI, marketplace, wallet, financial, and user-impact claims require separate evidence",
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
              title: "Moderation surface preserved",
              description:
                "Queues, search, categories, severity, reviewer, appeals, decisions, enforcement, notifications, audit, save/reset, and gates remain interactive.",
              icon: ShieldCheck,
              status: "Local concepts",
            },
            {
              title: "No enforcement theater",
              description:
                "Content, users, reports, model scores, violations, suspensions, removals, notifications, and legal outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before action",
              description:
                "Real moderation requires governed signals, human review, privacy safeguards, appeals, authorization, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
