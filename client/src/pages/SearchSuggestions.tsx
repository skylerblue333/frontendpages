import { useMemo, useState } from "react";
import {
  Check,
  Filter,
  Lightbulb,
  LockKeyhole,
  RefreshCw,
  Search,
  ShieldAlert,
  SlidersHorizontal,
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
const suggestions = [
  {
    id: 1,
    phrase: "digital foundations",
    category: "School",
    detail:
      "A local suggestion concept requiring source provenance, curriculum authority, privacy, accessibility, and no enrollment assumption.",
    state: "Preview",
  },
  {
    id: 2,
    phrase: "governance proposal",
    category: "Governance",
    detail:
      "A local suggestion concept requiring scope, author, evidence, permission, moderation, and approval semantics.",
    state: "Unconfigured",
  },
  {
    id: 3,
    phrase: "developer sdk",
    category: "Marketplace",
    detail:
      "A local suggestion concept requiring package-index provenance, version, integrity, compatibility, and support evidence.",
    state: "Needs evidence",
  },
  {
    id: 4,
    phrase: "community discussions",
    category: "Social",
    detail:
      "A local suggestion concept requiring consent, moderation, anti-abuse controls, privacy, language, and safe sharing.",
    state: "Blocked",
  },
];
export default function SearchSuggestions() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [source, setSource] = useState("Suggestion source not configured");
  const [personalization, setPersonalization] = useState(
    "Personalization not configured"
  );
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(suggestions.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      suggestions.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.phrase} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const suggestion =
    suggestions.find(item => item.id === selected) ?? suggestions[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setSource("Suggestion source not configured");
    setPersonalization("Personalization not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-202" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Lightbulb}
        eyebrow="Search suggestions · Discovery preview"
        title="Suggest only what the source and privacy policy support."
        description="Explore local suggestion concepts with query and category filters, source and personalization intent, privacy/ranking/dismissal gates, save/reset, and blocked apply/publish actions. No learned user behavior, suggestion count, ranking, recommendation, account, result, or search outcome is connected."
        badge="Suggestion-governance workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save suggestion policy"}
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
            {showGates ? "Close gates" : "Review suggestion gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset suggestions
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Suggestion concepts",
              value: `${suggestions.length} local`,
              hint: "No behavior source",
              icon: Lightbulb,
              tone: "cyan",
            },
            {
              label: "Source",
              value: "Unconfigured",
              hint: "No index source",
              icon: Search,
              tone: "violet",
            },
            {
              label: "Personalization",
              value: "Blocked",
              hint: "No consent source",
              icon: SlidersHorizontal,
              tone: "amber",
            },
            {
              label: "Dismissal",
              value: "Required",
              hint: "No user source",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Suggestion evidence boundary">
          <strong>
            This is a local suggestion-design preview, not evidence that a user
            searched, that a suggestion was learned, or that a recommendation is
            relevant.
          </strong>{" "}
          Suggestion cards, filters, source and personalization intent, saved
          state, privacy/ranking gates, and disabled apply/publish actions are
          browser concepts. No user identity, history, behavior, suggestion
          count, ranking, recommendation, result, price, or business outcome is
          asserted.
        </ScreenPreviewBanner>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Filter local suggestion concepts"
                  className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-3 text-sm text-white outline-none"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:w-[32rem]">
                <label className="text-sm text-slate-400">
                  Source intent
                  <select
                    value={source}
                    onChange={event => setSource(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Suggestion source not configured</option>
                    <option>Curated taxonomy intent</option>
                    <option>Public index intent</option>
                    <option>Private history intent</option>
                    <option>Federated source intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Personalization intent
                  <select
                    value={personalization}
                    onChange={event => setPersonalization(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Personalization not configured</option>
                    <option>Context-only intent</option>
                    <option>Consent-based intent</option>
                    <option>Anonymous aggregate intent</option>
                    <option>No-personalization intent</option>
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
                  <Filter className="mr-1 size-3" />
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
                    Local suggestions
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    {filtered.length} preview{filtered.length === 1 ? "" : "s"}
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  No learned behavior
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
                        <p className="font-semibold">{item.phrase}</p>
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
                    Selected suggestion concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    {suggestion.phrase}
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {suggestion.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {suggestion.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: suggestion.category },
                  { label: "Source", value: source },
                  { label: "Personalization", value: personalization },
                  { label: "Ranking", value: "Unverified" },
                  { label: "Dismissal", value: "Required" },
                  { label: "Result", value: "Unavailable" },
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
                <Lightbulb className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No suggestion evidence loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed suggestion source, query context,
                  permissions, privacy/consent, ranking, dismissal, freshness,
                  abuse controls, and audit before applying a suggestion.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Apply unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Dismiss unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Share unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Publish unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No recommendation or user claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A suggestion concept does not prove a user, behavior, query
                    history, relevance, ranking, recommendation, result, price,
                    account, or search outcome.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Suggestion-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real suggestion system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated context, query, category, source, user/tenant, locale, timestamp, permission, and provenance",
                "Personalization consent, data minimization, sensitive inference safeguards, opt-out, dismissal, retention, deletion, and audit",
                "Ranking, relevance, freshness, diversity, deduplication, abuse controls, quality, explanation, and safe destination semantics",
                "Marketplace, property, education, community, AI, crypto, financial, health, and user-impact claims require domain review",
                "Apply, dismiss, save, share, publish, notify, accessibility, and accountable approval require governed suggestion operations",
                "Suggestions must not be presented as personalized recommendations, endorsements, search results, or business outcomes without evidence",
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
              title: "Suggestion surface preserved",
              description:
                "Query, categories, source, personalization, ranking, dismissal, apply, share, publish, save/reset, and gates remain interactive.",
              icon: Lightbulb,
              status: "Local suggestions",
            },
            {
              title: "No recommendation theater",
              description:
                "Users, behavior, history, relevance, rankings, recommendations, results, prices, accounts, and outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Consent before personalization",
              description:
                "Real suggestions require governed context, privacy, consent, ranking, dismissal, freshness, abuse controls, safe destinations, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
