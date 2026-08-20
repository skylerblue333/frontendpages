import { useState } from "react";
import {
  ArrowDownAZ,
  Check,
  Clock3,
  Filter,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ScreenFeatureGrid,
  ScreenHero,
  ScreenPreviewBanner,
  ScreenStatGrid,
} from "@/components/ScreenExperience";

type SortKey =
  | "Relevance intent"
  | "Newest intent"
  | "Alphabetical intent"
  | "Local priority intent";
const options: SortKey[] = [
  "Relevance intent",
  "Newest intent",
  "Alphabetical intent",
  "Local priority intent",
];
export default function SortOptions() {
  const [selected, setSelected] = useState<SortKey>(options[0]);
  const [tieBreak, setTieBreak] = useState("Stable local order");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const reset = () => {
    setSelected(options[0]);
    setTieBreak("Stable local order");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div
      data-ui-polish="batch-206"
      className="min-h-screen bg-[#070a16] text-white"
    >
      <ScreenHero
        icon={SlidersHorizontal}
        eyebrow="Statistics panel · Measurement preview"
        title="Review metric states without claiming a statistic exists."
        description="Explore a local statistics workspace with metric concepts, time-window intent, aggregation, provenance, uncertainty, privacy, accessibility, save/reset, and blocked calculate, export, and publish actions. No dataset, sample, statistic, trend, forecast, population, or business outcome is connected."
        badge="Evidence-bounded statistics workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save preference"}
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
            {showGates ? "Close gates" : "Review sort gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset options
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Options",
              value: `${options.length} local`,
              hint: "No result source",
              icon: ArrowDownAZ,
              tone: "cyan",
            },
            {
              label: "Data freshness",
              value: "Unknown",
              hint: "No timestamp source",
              icon: Clock3,
              tone: "violet",
            },
            {
              label: "Tie-breaker",
              value: "Local",
              hint: "User intent only",
              icon: SlidersHorizontal,
              tone: "amber",
            },
            {
              label: "Personalization",
              value: "Blocked",
              hint: "No profile source",
              icon: LockKeyhole,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Statistics evidence boundary">
          <strong>
            This is a local statistics-design preview, not evidence that any
            result set, ranking, relevance score, popularity signal, freshness
            timestamp, personalization profile, or recommendation exists.
          </strong>{" "}
          Sort choices, tie-breakers, local saved state, accessibility order,
          and disabled ranking actions are browser concepts. No result order,
          fairness claim, business outcome, or user profile is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Metric intent
              </p>
              <h2 className="mt-2 text-2xl font-black">
                Choose a local metric concept
              </h2>
              <div className="mt-6 space-y-3">
                {options.map(option => (
                  <button
                    key={option}
                    onClick={() => setSelected(option)}
                    className={`flex w-full items-center justify-between rounded-xl border p-4 text-left ${selected === option ? "border-cyan-300/40 bg-cyan-300/[0.06]" : "border-white/10"}`}
                  >
                    <span>
                      <span className="block font-semibold">{option}</span>
                      <span className="mt-1 block text-sm text-slate-500">
                        Local intent only; no result set is connected.
                      </span>
                    </span>
                    {selected === option && (
                      <Check className="size-5 text-cyan-300" />
                    )}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Selected metric concept
              </p>
              <h2 className="mt-2 text-2xl font-black">{selected}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                This preference is stored only in the browser preview. It does
                not reorder a server result, change a marketplace listing, alter
                a feed ranking, or infer what a user prefers.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Result source", value: "Unavailable" },
                  { label: "Freshness", value: "Unknown" },
                  { label: "Fairness review", value: "Required" },
                  { label: "Profile signal", value: "None" },
                  { label: "Accessibility", value: "Local order" },
                  { label: "Audit", value: "Not connected" },
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
              <label className="mt-6 block text-sm font-semibold text-slate-300">
                Tie-breaker intent
                <select
                  value={tieBreak}
                  onChange={event => setTieBreak(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                >
                  <option>Stable local order</option>
                  <option>Secondary alphabetical intent</option>
                  <option>Secondary recency intent</option>
                  <option>No tie-breaker configured</option>
                </select>
              </label>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Filter className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No statistics evidence loaded
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Connect the relevant result source, field definitions,
                  timestamp provenance, ranking methodology, personalization
                  consent, fairness review, accessibility requirements, and
                  audit before applying a consequential ordering claim.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Apply to results unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Personalize unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Recommend unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No ranking or recommendation claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A local sort preference does not prove relevance,
                    popularity, freshness, fairness, personalization,
                    recommendation quality, or user satisfaction.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Statistics-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real statistics surface must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Result source, schema, freshness, pagination, locale, timezone, null handling, duplicate handling, and stable tie-breakers",
                "Ranking methodology, relevance definitions, popularity signals, personalization consent, explainability, fairness, and abuse resistance",
                "Catalog, feed, search, marketplace, financial, crypto, education, AI, security, and account order claims require domain-specific evidence",
                "Sensitive identity, location, behavior, financial, wallet, health, minor, and private-content signals require minimization and consent",
                "Apply, personalize, recommend, export, reset, accessibility, retry, and accountable approval require governed operations",
                "A sort preview must not be presented as a live ranking, recommendation, popularity, freshness, fairness, or business outcome without evidence",
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-3"
                >
                  <LockKeyhole className="size-4 text-slate-500" />
                  <span className="flex-1 text-sm text-slate-300">{item}</span>
                  <Badge
                    variant="outline"
                    className="border-amber-300/20 text-amber-200"
                  >
                    Required
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <ScreenFeatureGrid
          features={[
            {
              title: "Statistics surface preserved",
              description:
                "Local sort options, tie-breakers, freshness and accessibility states, save/reset, and blocked apply/personalize/recommend actions remain visible.",
              icon: ArrowDownAZ,
              status: "Local preference",
            },
            {
              title: "No statistics theater",
              description:
                "Results, relevance, popularity, freshness, fairness, personalization, recommendations, and satisfaction are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before reporting",
              description:
                "Real ordering requires result provenance, methodology, consent, fairness review, accessibility, and accountable deployment.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
