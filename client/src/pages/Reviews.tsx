import { useMemo, useState } from "react";
import {
  Check,
  Filter,
  LockKeyhole,
  MessageSquareQuote,
  RefreshCw,
  Search,
  ShieldAlert,
  Star,
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
const concepts = [
  {
    id: 1,
    name: "Product review",
    category: "Product",
    detail:
      "A local review concept requiring verified purchase or usage provenance, content policy, user choice, moderation, and edit/delete controls.",
    state: "No reviews loaded",
  },
  {
    id: 2,
    name: "Service feedback",
    category: "Service",
    detail:
      "A feedback concept requiring interaction context, privacy, consent, response ownership, and transparent resolution status.",
    state: "Needs source",
  },
  {
    id: 3,
    name: "Seller review",
    category: "Marketplace",
    detail:
      "A marketplace concept requiring transaction provenance, seller identity, fraud controls, appeals, and anti-manipulation safeguards.",
    state: "Blocked",
  },
  {
    id: 4,
    name: "Verified experience",
    category: "Trust",
    detail:
      "A trust label concept requiring a verifiable event and clear eligibility semantics; no verification is asserted here.",
    state: "Unmeasured",
  },
];
export default function Reviews() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [rating, setRating] = useState("Rating definition not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(concepts.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      concepts.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const concept = concepts.find(item => item.id === selected) ?? concepts[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setRating("Rating definition not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={MessageSquareQuote}
        eyebrow="Reviews · Trust preview"
        title="Define the review standard before showing the score."
        description="Explore local product, service, marketplace, and verified-experience review concepts with search, category filters, rating intent, moderation and trust boundaries, save/reset, and evidence gates. No live review, user, purchase, seller, rating, sentiment, or trust claim is connected."
        badge="Feedback workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save concept locally"}
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
            {showGates ? "Close gates" : "Review trust gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset reviews
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Concepts",
              value: `${concepts.length} local`,
              hint: "No review source",
              icon: MessageSquareQuote,
              tone: "cyan",
            },
            {
              label: "Reviews",
              value: "Unavailable",
              hint: "No content source",
              icon: MessageSquareQuote,
              tone: "violet",
            },
            {
              label: "Rating",
              value: "Unmeasured",
              hint: "No denominator",
              icon: Star,
              tone: "amber",
            },
            {
              label: "Trust",
              value: "Review needed",
              hint: "No verification source",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Review evidence boundary">
          <strong>
            This is a local review-design preview, not proof that reviews,
            ratings, users, purchases, sellers, or verified experiences exist.
          </strong>{" "}
          Concept cards, filters, rating intent, moderation states, saved state,
          and evidence gates are browser concepts. No review text, user
          identity, purchase, average score, sentiment, ranking, verification,
          or business outcome is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local review concepts"
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
                    Selected review concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{concept.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {concept.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {concept.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: concept.category },
                  { label: "Reviews", value: "Unavailable" },
                  { label: "Rating", value: rating },
                  { label: "Verified", value: "Unconnected" },
                  { label: "Moderation", value: "Required" },
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
                Rating definition
                <select
                  value={rating}
                  onChange={event => setRating(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                >
                  <option>Rating definition not configured</option>
                  <option>Binary intent</option>
                  <option>Five-point intent</option>
                  <option>Multi-axis intent</option>
                  <option>Verified-only intent</option>
                </select>
              </label>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Star className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No review evidence loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed review content, identity, purchase or usage
                  event, rating rules, moderation, appeals, privacy, and audit
                  sources before displaying or publishing reviews.
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
                  Moderate unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Report unavailable
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
                    No trust or rating claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A review concept does not prove user identity, purchase,
                    seller quality, rating distribution, sentiment,
                    authenticity, or safe publication.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Review gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real review system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated reviewer, product, service, seller, purchase/usage event, timestamp, tenant, and provenance",
                "Rating definitions, denominator, weighting, aggregation, edits, deletion, sampling, time zone, and missing data",
                "Moderation taxonomy, policy version, context, fraud/manipulation controls, abuse prevention, and appeals",
                "Privacy, consent, sensitive data, reporter safety, redaction, retention, deletion, export, and access controls",
                "Verified labels, disclosure, ranking, recommendation, search, attribution, and business claims require evidence",
                "Notifications, accessibility, localization, audit, incident response, support ownership, and reversible enforcement",
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
              title: "Review surface preserved",
              description:
                "Product, service, seller, verified concepts, filters, ratings, moderation, reports, appeals, export, save/reset, and gates remain interactive.",
              icon: MessageSquareQuote,
              status: "Local concepts",
            },
            {
              title: "No review theater",
              description:
                "Reviews, users, purchases, sellers, scores, sentiment, verification, rankings, and business outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Trust before score",
              description:
                "Real reviews require provenance, rating definitions, moderation, fraud controls, appeals, privacy, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
