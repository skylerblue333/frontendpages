import { useMemo, useState } from "react";
import {
  Activity,
  Check,
  ChevronRight,
  Filter,
  Gauge,
  GitBranch,
  LockKeyhole,
  RefreshCw,
  RotateCcw,
  Share2,
  ShieldAlert,
  Sparkles,
  Target,
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
const tabs = [
  { id: "loop", label: "Core loop", icon: RotateCcw },
  { id: "metrics", label: "Metric definitions", icon: Gauge },
  { id: "sticky", label: "Sticky features", icon: Sparkles },
  { id: "viral", label: "Sharing concepts", icon: Share2 },
];
const metrics = [
  {
    name: "Return event",
    definition:
      "A governed event that marks a user returning within a declared window.",
    state: "Needs event schema",
  },
  {
    name: "Activation cohort",
    definition:
      "A cohort grouped by a declared activation event and timestamp policy.",
    state: "Definition only",
  },
  {
    name: "Churn threshold",
    definition:
      "An inactivity threshold that requires a source, time zone, exclusions, and review.",
    state: "Unconfigured",
  },
  {
    name: "Repeat action",
    definition:
      "A repeated action definition requiring identity, deduplication, consent, and provenance.",
    state: "Unmeasured",
  },
];
const stickyFeatures = [
  {
    name: "Conversation memory",
    detail:
      "A product concept for context continuity; no memory storage, user profile, or AI behavior is asserted.",
    state: "Concept",
  },
  {
    name: "Action history feed",
    detail:
      "A product concept for showing governed activity; no payment, match, task, earning, or transaction history is connected.",
    state: "Needs source",
  },
  {
    name: "Feedback state",
    detail:
      "A UX pattern for success and failure feedback; no reward, outcome, or business value is implied.",
    state: "Local pattern",
  },
  {
    name: "Personalized suggestions",
    detail:
      "A personalization concept requiring consent, model behavior, evaluation, safety, and explainability evidence.",
    state: "Blocked",
  },
  {
    name: "Share cards",
    detail:
      "A sharing concept requiring user choice, redaction, attribution, abuse controls, and destination integrations.",
    state: "Preview",
  },
];
export default function RetentionEngine() {
  const [active, setActive] = useState("loop");
  const [selectedMetric, setSelectedMetric] = useState(0);
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const [loopEnabled, setLoopEnabled] = useState([
    true,
    true,
    false,
    false,
    false,
  ]);
  const visibleFeatures = useMemo(
    () =>
      stickyFeatures.filter(
        item =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.detail.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );
  const toggleStep = (index: number) =>
    setLoopEnabled(current =>
      current.map((value, step) => (step === index ? !value : value))
    );
  const reset = () => {
    setActive("loop");
    setSelectedMetric(0);
    setQuery("");
    setSaved(false);
    setShowGates(false);
    setLoopEnabled([true, true, false, false, false]);
  };
  return (
    <div data-ui-polish="batch-200" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Activity}
        eyebrow="Retention engine · Design preview"
        title="Design the return loop before claiming retention."
        description="Explore a local retention-engine design surface for core loops, metric definitions, sticky features, sharing concepts, save/reset, and evidence gates. Live retention, revenue, AI, wallet, viral-growth, user, or business outcomes are not connected."
        badge="Engine workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save design locally"}
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
            {showGates ? "Close gates" : "Review evidence gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset design
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Loop steps",
              value: "5 local",
              hint: "No outcome source",
              icon: RotateCcw,
              tone: "cyan",
            },
            {
              label: "Metrics",
              value: `${metrics.length} definitions`,
              hint: "No event source",
              icon: Gauge,
              tone: "violet",
            },
            {
              label: "Features",
              value: `${stickyFeatures.length} concepts`,
              hint: "No live status",
              icon: Sparkles,
              tone: "amber",
            },
            {
              label: "Network",
              value: "Unmeasured",
              hint: "No sharing source",
              icon: UsersRound,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Retention-engine evidence boundary">
          <strong>
            This is a product-design preview, not proof of retention or growth.
          </strong>{" "}
          Loop steps, metric definitions, sticky features, sharing concepts,
          saved state, and evidence gates are local UX concepts. No users,
          events, percentages, revenue, rewards, AI capability, wallet activity,
          viral coefficient, or business result is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {tabs.map(tab => (
                  <Button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    size="sm"
                    variant="outline"
                    className={
                      active === tab.id
                        ? "border-cyan-300/40 bg-cyan-300/[0.08] text-cyan-100"
                        : "border-white/10 text-slate-400"
                    }
                  >
                    <tab.icon className="mr-1 size-3" />
                    {tab.label}
                  </Button>
                ))}
              </div>
              {active === "loop" && (
                <div className="mt-6 space-y-3">
                  {[
                    "User intent is declared",
                    "A governed event is emitted",
                    "An action state is returned",
                    "The user chooses what happens next",
                    "A return hypothesis is measured later",
                  ].map((step, index) => (
                    <button
                      key={step}
                      onClick={() => toggleStep(index)}
                      className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left ${loopEnabled[index] ? "border-cyan-300/30 bg-cyan-300/[0.05]" : "border-white/10"}`}
                    >
                      <span
                        className={`flex size-8 items-center justify-center rounded-full text-sm font-bold ${loopEnabled[index] ? "bg-cyan-300 text-slate-950" : "bg-white/10 text-slate-500"}`}
                      >
                        {index + 1}
                      </span>
                      <span className="flex-1">
                        <span className="block font-semibold">{step}</span>
                        <span className="mt-1 block text-xs text-slate-500">
                          {loopEnabled[index]
                            ? "Included in local design"
                            : "Not configured"}
                        </span>
                      </span>
                      <ChevronRight className="size-4 text-slate-500" />
                    </button>
                  ))}
                </div>
              )}
              {active === "metrics" && (
                <div className="mt-6 space-y-3">
                  {metrics.map((metric, index) => (
                    <button
                      key={metric.name}
                      onClick={() => setSelectedMetric(index)}
                      className={`w-full rounded-xl border p-4 text-left ${selectedMetric === index ? "border-violet-300/30 bg-violet-300/[0.05]" : "border-white/10"}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-semibold">{metric.name}</span>
                        <Badge
                          variant="outline"
                          className="border-amber-300/20 text-amber-200"
                        >
                          {metric.state}
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {metric.definition}
                      </p>
                    </button>
                  ))}
                </div>
              )}
              {active === "sticky" && (
                <div className="mt-6">
                  <div className="relative">
                    <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                    <input
                      value={query}
                      onChange={event => setQuery(event.target.value)}
                      placeholder="Filter local feature concepts"
                      className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-3 text-sm text-white outline-none"
                    />
                  </div>
                  <div className="mt-5 space-y-3">
                    {visibleFeatures.map(feature => (
                      <div
                        key={feature.name}
                        className="rounded-xl border border-white/10 p-4"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="font-semibold">{feature.name}</p>
                          <Badge
                            variant="outline"
                            className="border-amber-300/20 text-amber-200"
                          >
                            {feature.state}
                          </Badge>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {feature.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {active === "viral" && (
                <div className="mt-6 space-y-3">
                  {[
                    "User chooses to share",
                    "Content is redacted and previewed",
                    "Destination consent is confirmed",
                    "Abuse and attribution controls apply",
                    "Outcome is measured only from governed events",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 rounded-xl border border-white/10 p-4"
                    >
                      <Share2 className="size-4 text-cyan-200" />
                      <span className="flex-1 text-sm text-slate-300">
                        {step}
                      </span>
                      <span className="text-xs text-amber-200">Required</span>
                    </div>
                  ))}
                  <div className="rounded-xl border border-dashed border-white/10 p-5 text-center">
                    <GitBranch className="mx-auto size-7 text-slate-600" />
                    <p className="mt-3 font-semibold">
                      No sharing destination connected
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                      Social, referral, wallet, payment, AI, or marketplace
                      outcomes remain unavailable until integrations and
                      evidence exist.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Design status
              </p>
              <h2 className="mt-2 text-2xl font-black">
                {active === "metrics"
                  ? metrics[selectedMetric].name
                  : active === "sticky"
                    ? "Sticky feature registry"
                    : active === "viral"
                      ? "Sharing concepts"
                      : "Daily return loop"}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {active === "metrics"
                  ? metrics[selectedMetric].definition
                  : "Local design intent is available for review; production telemetry and feature status are not connected."}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Source", value: "No governed source" },
                  { label: "Status", value: "Preview only" },
                  { label: "Users", value: "Unavailable" },
                  { label: "Outcome", value: "Unmeasured" },
                  { label: "Security", value: "Review needed" },
                  { label: "Export", value: "Blocked" },
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
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Target className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No retention telemetry loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed events, identity, consent, privacy, metric
                  definitions, experimentation, and audit before showing a
                  retention outcome.
                </p>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No live retention claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    The prior screen's percentages, trends, revenue, rewards,
                    APY, and user outcomes have been replaced by definitions and
                    blocked states because no engineering evidence was
                    available.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Hardening gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real retention engine must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated event schema, identity stitching, consent, privacy, deletion, and provenance",
                "Metric definitions, denominators, windows, time zones, deduplication, late events, and backfills",
                "Feature status, rollout, experiments, guardrails, accessibility, error states, and support ownership",
                "Sharing, referral, attribution, destination permissions, abuse prevention, redaction, and audit",
                "AI, wallet, payments, rewards, revenue, financial, and marketplace claims need separate evidence",
                "Retention and growth conclusions require reproducible queries, review, monitoring, and incident response",
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
              title: "Retention surface preserved",
              description:
                "Core loop, metrics, sticky features, viral concepts, filters, tabs, save/reset, and evidence gates remain interactive.",
              icon: Activity,
              status: "Local design",
            },
            {
              title: "Unsupported claims blocked",
              description:
                "Live percentages, revenue, rewards, APY, user outcomes, AI behavior, wallet activity, and viral growth are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Telemetry before insight",
              description:
                "Real retention requires governed events, identity, privacy, reproducible metrics, experiments, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
