import { useMemo, useState } from "react";
import {
  BarChart3,
  Check,
  Filter,
  LockKeyhole,
  MessageCircleQuestion,
  RefreshCw,
  ShieldAlert,
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
const surveys = [
  {
    id: 1,
    name: "Product satisfaction",
    category: "CSAT",
    detail:
      "A local satisfaction-survey concept requiring audience, question wording, scale definition, consent, anonymity, sampling, and review.",
    state: "Unconfigured",
  },
  {
    id: 2,
    name: "Support follow-up",
    category: "Support",
    detail:
      "A support-feedback concept requiring case provenance, respondent consent, accessibility, redaction, retention, and ownership.",
    state: "Needs evidence",
  },
  {
    id: 3,
    name: "Learning experience",
    category: "Education",
    detail:
      "An education-survey concept requiring learner safeguarding, consent, curriculum context, privacy, accessibility, and appeals.",
    state: "Blocked",
  },
  {
    id: 4,
    name: "Community pulse",
    category: "Community",
    detail:
      "A community-feedback concept requiring moderator scope, anti-abuse handling, anonymity, language support, and public-claim review.",
    state: "Preview",
  },
];
export default function SatisfactionSurvey() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [audience, setAudience] = useState("Audience not configured");
  const [privacy, setPrivacy] = useState("Privacy mode not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(surveys.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      surveys.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const survey = surveys.find(item => item.id === selected) ?? surveys[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setAudience("Audience not configured");
    setPrivacy("Privacy mode not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={MessageCircleQuestion}
        eyebrow="Satisfaction survey · Feedback preview"
        title="Design the question before interpreting the answer."
        description="Explore local product, support, education, and community survey concepts with search, category filters, audience and privacy intent, question and response gates, save/reset, and blocked publish/export actions. No respondent, answer, score, satisfaction result, customer identity, or business outcome is connected."
        badge="Feedback governance workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save survey locally"}
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
            {showGates ? "Close gates" : "Review survey gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset survey
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Survey concepts",
              value: `${surveys.length} local`,
              hint: "No response source",
              icon: MessageCircleQuestion,
              tone: "cyan",
            },
            {
              label: "Respondents",
              value: "Unavailable",
              hint: "No audience source",
              icon: UsersRound,
              tone: "violet",
            },
            {
              label: "Responses",
              value: "Unavailable",
              hint: "No answer source",
              icon: BarChart3,
              tone: "amber",
            },
            {
              label: "CSAT",
              value: "Not claimed",
              hint: "No score source",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Survey evidence boundary">
          <strong>
            This is a local feedback-design preview, not evidence that
            respondents, answers, scores, or satisfaction outcomes exist.
          </strong>{" "}
          Survey cards, filters, audience and privacy intent, saved state,
          question gates, and disabled publish/export actions are browser
          concepts. No respondent, identity, answer, sample, score,
          satisfaction, support outcome, retention, conversion, or business
          result is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local satisfaction surveys"
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
                    Selected survey concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{survey.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {survey.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {survey.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: survey.category },
                  { label: "Audience", value: audience },
                  { label: "Privacy", value: privacy },
                  { label: "Questions", value: "Unconfigured" },
                  { label: "Responses", value: "Unavailable" },
                  { label: "Score", value: "Not claimed" },
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
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <label className="text-sm text-slate-400">
                  Audience intent
                  <select
                    value={audience}
                    onChange={event => setAudience(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Audience not configured</option>
                    <option>Opted-in customer intent</option>
                    <option>Support-case intent</option>
                    <option>Learner-cohort intent</option>
                    <option>Community-member intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Privacy mode
                  <select
                    value={privacy}
                    onChange={event => setPrivacy(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Privacy mode not configured</option>
                    <option>Anonymous intent</option>
                    <option>Pseudonymous intent</option>
                    <option>Identified-with-consent intent</option>
                    <option>Redacted-review intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <MessageCircleQuestion className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No survey evidence loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed audience, consent, question wording, scale,
                  sampling, response storage, privacy, retention, analysis,
                  accessibility, moderation, and review before publishing.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Publish unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Collect unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Analyze unavailable
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
                    No respondent or score claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A survey concept does not prove a respondent, answer,
                    sample, score, CSAT result, customer identity, support
                    outcome, satisfaction, retention, conversion, or business
                    impact.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Survey governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real satisfaction survey must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated audience, respondent, tenant, consent, purpose, locale, sampling frame, timestamp, and source provenance",
                "Question wording, scale, anchors, branching, localization, accessibility, bias review, randomization, and moderation",
                "Anonymous/pseudonymous/identified handling, privacy, sensitive data, retention, deletion, export, access, and lawful basis",
                "Response delivery, collection, duplicate prevention, rate limits, storage, retries, analysis, suppression, and support",
                "CSAT, NPS, rating, satisfaction, retention, conversion, revenue, education, health, legal, and user-impact claims require domain review",
                "Publish, collect, pause, remind, analyze, report, share, rollback, notifications, and accountable approval require governed controls",
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
              title: "Survey surface preserved",
              description:
                "Product, support, education, community surveys, filters, audiences, consent, privacy, questions, collection, analysis, export, save/reset, and gates remain interactive.",
              icon: MessageCircleQuestion,
              status: "Local surveys",
            },
            {
              title: "No score theater",
              description:
                "Respondents, answers, samples, scores, CSAT, satisfaction, support outcomes, retention, conversions, and business impact are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Consent before insight",
              description:
                "Real surveys require governed audience, question design, privacy, consent, response provenance, analysis semantics, accessibility, and review.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
