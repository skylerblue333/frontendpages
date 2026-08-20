import { useMemo, useState } from "react";
import {
  Activity,
  Bell,
  Check,
  Filter,
  LockKeyhole,
  MessageSquare,
  RefreshCw,
  ShieldAlert,
  SlidersHorizontal,
  Sparkles,
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
const sources = [
  {
    id: 1,
    name: "Community discussion text",
    category: "Community",
    detail:
      "A local text-source concept requiring consent, moderation, language handling, retention, redaction, and source provenance.",
    state: "Unconfigured",
  },
  {
    id: 2,
    name: "Course feedback text",
    category: "Education",
    detail:
      "A feedback-source concept requiring learner privacy, survey context, accessibility, bias review, and no learner-outcome assumption.",
    state: "Needs evidence",
  },
  {
    id: 3,
    name: "Product review text",
    category: "Marketplace",
    detail:
      "A review-source concept requiring purchase context, moderation, abuse controls, privacy, appeals, and no seller-performance assumption.",
    state: "Preview",
  },
  {
    id: 4,
    name: "Governance proposal text",
    category: "Governance",
    detail:
      "A proposal-source concept requiring author identity, decision context, scope, privacy, moderation, and audit.",
    state: "Blocked",
  },
];
export default function SentimentPipeline() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [model, setModel] = useState("Model not configured");
  const [threshold, setThreshold] = useState("Threshold not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(sources.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      sources.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const source = sources.find(item => item.id === selected) ?? sources[0];
  const bars = [33, 56, 44, 67, 39, 72, 51];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setModel("Model not configured");
    setThreshold("Threshold not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Sparkles}
        eyebrow="Sentiment pipeline · NLP preview"
        title="Define the text and model before showing the sentiment score."
        description="Explore local community, education, marketplace, and governance text-source concepts with search, category filters, model and threshold intent, illustrative-only trends, privacy/moderation gates, save/reset, and blocked scan/webhook actions. No live text, user, sentiment score, volume, alert, model output, business outcome, or AI performance is connected."
        badge="Evidence-bounded NLP workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save pipeline locally"}
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
            {showGates ? "Close gates" : "Review NLP gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset pipeline
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Source concepts",
              value: `${sources.length} local`,
              hint: "No text source",
              icon: MessageSquare,
              tone: "cyan",
            },
            {
              label: "Model",
              value: "Unconfigured",
              hint: "No inference source",
              icon: Sparkles,
              tone: "violet",
            },
            {
              label: "Score",
              value: "Unavailable",
              hint: "No text output",
              icon: Activity,
              tone: "amber",
            },
            {
              label: "Alerts",
              value: "Blocked",
              hint: "No trigger source",
              icon: Bell,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Sentiment evidence boundary">
          <strong>
            This is a local NLP pipeline-design preview, not evidence that text,
            users, sentiment, volume, alerts, or AI outputs exist.
          </strong>{" "}
          Source cards, filters, model/threshold intent, illustrative trend
          bars, saved state, privacy/moderation gates, and disabled scan/webhook
          actions are browser concepts. No text content, user identity, score,
          classification, volume, alert, model accuracy, Kafka throughput,
          business outcome, or automated decision is asserted.
        </ScreenPreviewBanner>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="relative flex-1">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local sentiment sources"
                  className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-3 text-sm text-white outline-none"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:w-[32rem]">
                <label className="text-sm text-slate-400">
                  Model intent
                  <select
                    value={model}
                    onChange={event => setModel(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Model not configured</option>
                    <option>Lexicon baseline intent</option>
                    <option>Classifying model intent</option>
                    <option>Human-review assist intent</option>
                    <option>Multilingual model intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Threshold intent
                  <select
                    value={threshold}
                    onChange={event => setThreshold(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Threshold not configured</option>
                    <option>Human-review threshold</option>
                    <option>Alert threshold</option>
                    <option>Moderation threshold</option>
                    <option>No-automated-action intent</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
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
                  {entry}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                    Local text sources
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    {filtered.length} preview source
                    {filtered.length === 1 ? "" : "s"}
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  No live text
                </Badge>
              </div>
              <div className="mt-6 space-y-3">
                {filtered.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item.id)}
                    className={`w-full rounded-xl border p-4 text-left ${selected === item.id ? "border-cyan-300/40 bg-cyan-300/[0.06]" : "border-white/10"}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="mt-2 text-sm text-slate-500">
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
                    <div className="mt-4">
                      <Badge
                        variant="outline"
                        className="border-white/10 text-slate-500"
                      >
                        {item.category}
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
                    Selected source concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{source.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {source.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {source.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: source.category },
                  { label: "Model", value: model },
                  { label: "Threshold", value: threshold },
                  { label: "Text volume", value: "Unavailable" },
                  { label: "Score", value: "Unavailable" },
                  { label: "Alerts", value: "Not configured" },
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
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      Illustrative-only trend
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      Bars are design scaffolding, not measured sentiment or
                      message volume.
                    </p>
                  </div>
                  <Activity className="size-6 text-cyan-300" />
                </div>
                <div className="mt-6 flex h-32 items-end gap-2">
                  {bars.map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-violet-400/40 to-cyan-300/70"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <MessageSquare className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No sentiment evidence loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed text source, consent, redaction, language,
                  model, threshold, bias review, moderation, retention,
                  alerting, human review, and audit before scanning.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Scan unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Send webhook unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Publish alert unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Export unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No sentiment or AI claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A source concept does not prove text, users, sentiment,
                    volume, alerts, model quality, moderation decisions, webhook
                    delivery, or business outcome.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Sentiment-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real sentiment pipeline must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated source, text, user, tenant, language, timestamp, permission, redaction, retention, and provenance",
                "Model version, labels, calibration, threshold, language coverage, bias, drift, explainability, false positives, and human review",
                "Moderation, privacy, safety, abuse, protected characteristics, sensitive inference, appeals, alerts, and accountable decision-making",
                "Education, marketplace, governance, community, AI, financial, security, health, legal, and user-impact claims require domain review",
                "Scan, classify, alert, webhook, notify, publish, export, accessibility, and accountable approval require governed NLP operations",
                "A sentiment preview must not be presented as live text analysis, sentiment score, alert stream, model performance, or automated decision without evidence",
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
              title: "Sentiment surface preserved",
              description:
                "Community, education, marketplace, governance sources, models, thresholds, trends, alerts, webhooks, save/reset, and gates remain interactive.",
              icon: Sparkles,
              status: "Local NLP",
            },
            {
              title: "No AI theater",
              description:
                "Text, users, scores, volumes, alerts, model quality, moderation decisions, webhooks, and outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Consent before inference",
              description:
                "Real sentiment analysis requires governed source, redaction, model evidence, bias review, moderation, human review, alerting, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
