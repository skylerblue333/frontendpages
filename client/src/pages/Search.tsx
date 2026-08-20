import { useMemo, useState } from "react";
import {
  Check,
  Filter,
  LockKeyhole,
  RefreshCw,
  Search as SearchIcon,
  ShieldAlert,
  TrendingUp,
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
const results = [
  {
    id: 1,
    title: "Digital foundations",
    type: "Course concept",
    category: "school",
    description:
      "A local education result concept requiring curriculum provenance, instructor authority, accessibility, learner privacy, and enrollment evidence.",
  },
  {
    id: 2,
    title: "Governance proposal",
    type: "Governance concept",
    category: "governance",
    description:
      "A local governance result concept requiring scope, author identity, voting rules, evidence, moderation, and approval.",
  },
  {
    id: 3,
    title: "Developer SDK",
    type: "Developer concept",
    category: "marketplace",
    description:
      "A local package result concept requiring registry provenance, version, integrity, compatibility, support, and release evidence.",
  },
  {
    id: 4,
    title: "Community discussion",
    type: "Community concept",
    category: "social",
    description:
      "A local community result concept requiring moderation, privacy, anti-abuse controls, language support, and appeals.",
  },
];
const categories = [
  { value: "all", label: "All" },
  { value: "marketplace", label: "Marketplace" },
  { value: "school", label: "School" },
  { value: "governance", label: "Governance" },
  { value: "charity", label: "Charity" },
  { value: "social", label: "Social" },
  { value: "video", label: "Video" },
];
export default function Search() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState(1);
  const [source, setSource] = useState("Source index not configured");
  const [freshness, setFreshness] = useState("Freshness not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const filtered = useMemo(
    () =>
      results.filter(
        item =>
          (category === "all" || item.category === category) &&
          `${item.title} ${item.type} ${item.description}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const result = results.find(item => item.id === selected) ?? results[0];
  const suggestions = [
    "education",
    "governance",
    "developer tools",
    "community",
  ];
  const reset = () => {
    setQuery("");
    setCategory("all");
    setSelected(1);
    setSource("Source index not configured");
    setFreshness("Freshness not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-202" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={SearchIcon}
        eyebrow="Global search · Discovery preview"
        title="Search the ecosystem without inventing the index."
        description="Explore local cross-ecosystem result concepts with query, category, suggestion, trend, source, freshness, save/reset, and blocked view/export actions. No search index, result, ranking, price, user, listing, course, package, post, recommendation, or business outcome is connected."
        badge="Evidence-bounded discovery workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save query locally"}
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
            {showGates ? "Close gates" : "Review search gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset search
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Result concepts",
              value: `${results.length} local`,
              hint: "No index source",
              icon: SearchIcon,
              tone: "cyan",
            },
            {
              label: "Sources",
              value: "Unconfigured",
              hint: "No catalog source",
              icon: Filter,
              tone: "violet",
            },
            {
              label: "Trending",
              value: "Not claimed",
              hint: "No aggregate source",
              icon: TrendingUp,
              tone: "amber",
            },
            {
              label: "Ranking",
              value: "Blocked",
              hint: "No search evidence",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Global-search evidence boundary">
          <strong>
            This is a local discovery preview, not evidence that an index,
            result, trend, ranking, price, listing, package, course, post, or
            recommendation exists.
          </strong>{" "}
          Query, category filters, suggestions, trend intent, selected result,
          saved state, and disabled view/export actions are browser concepts. No
          source index, user, result, count, ranking, price, availability,
          recommendation, notification, or business outcome is asserted.
        </ScreenPreviewBanner>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local ecosystem concepts"
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
                    <option>Source index not configured</option>
                    <option>Curated catalog intent</option>
                    <option>Public content intent</option>
                    <option>Private workspace intent</option>
                    <option>Federated index intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Freshness intent
                  <select
                    value={freshness}
                    onChange={event => setFreshness(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Freshness not configured</option>
                    <option>Live-source intent</option>
                    <option>Daily snapshot intent</option>
                    <option>Versioned index intent</option>
                    <option>Manual-review intent</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map(item => (
                <Button
                  key={item.value}
                  onClick={() => setCategory(item.value)}
                  size="sm"
                  variant="outline"
                  className={
                    category === item.value
                      ? "border-cyan-300/40 bg-cyan-300/[0.08] text-cyan-100"
                      : "border-white/10 text-slate-400"
                  }
                >
                  <Filter className="mr-1 size-3" />
                  {item.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        {query && (
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Suggestions
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {suggestions
                  .filter(item => item.includes(query.toLowerCase()) || !query)
                  .map(item => (
                    <Button
                      key={item}
                      onClick={() => setQuery(item)}
                      size="sm"
                      variant="outline"
                      className="border-white/10 text-slate-300"
                    >
                      {item}
                    </Button>
                  ))}
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Suggestion concepts are local labels, not learned search
                behavior.
              </p>
            </CardContent>
          </Card>
        )}
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                    Local result concepts
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    {filtered.length} visible preview
                    {filtered.length === 1 ? "" : "s"}
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  No live results
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
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-semibold">{item.title}</p>
                          <Badge
                            variant="outline"
                            className="border-white/10 text-slate-500"
                          >
                            {item.type}
                          </Badge>
                        </div>
                        <p className="mt-2 text-sm text-slate-500">
                          {item.description}
                        </p>
                      </div>
                      <SearchIcon className="mt-1 size-4 text-slate-500" />
                    </div>
                  </button>
                ))}
                {filtered.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center">
                    <SearchIcon className="mx-auto size-8 text-slate-600" />
                    <p className="mt-3 font-semibold">
                      No local preview matches
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                      Change the query or category. This does not represent a
                      live empty result.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                    Selected result concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{result.title}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {result.type}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {result.description}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: result.category },
                  { label: "Source", value: source },
                  { label: "Freshness", value: freshness },
                  { label: "Ranking", value: "Unverified" },
                  { label: "Price", value: "Not claimed" },
                  { label: "View", value: "Blocked" },
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
                <SearchIcon className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No search evidence loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed index, query semantics, permissions, source
                  freshness, ranking, deduplication, privacy, result navigation,
                  and audit before exposing live discovery.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  View unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Run unavailable
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
                  Export unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No live-result or price claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A local result concept does not prove an indexed record,
                    result ranking, user, listing, price, availability, course,
                    package, post, recommendation, or business outcome.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Search-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real global-search system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated source, tenant, query, category, permission, locale, timestamp, freshness, index version, and provenance",
                "Result semantics, ranking, deduplication, pagination, source link, quality, recommendation, moderation, and navigation",
                "Marketplace price, property availability, course access, financial, crypto, AI, social, video, charity, and user-impact claims require domain review",
                "Privacy, consent, sensitive data, redaction, retention, deletion, export, sharing, notification, and support",
                "Search suggestions and trend counts require measurement semantics, aggregation, privacy, abuse controls, and freshness",
                "Run, view, save, remove, share, export, notify, and accountable approval require governed search operations",
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
              title: "Global search surface preserved",
              description:
                "Query, categories, suggestions, trends, result concepts, source, freshness, view, share, export, save/reset, and gates remain interactive.",
              icon: SearchIcon,
              status: "Local discovery",
            },
            {
              title: "No index theater",
              description:
                "Live indexes, result counts, rankings, prices, listings, courses, packages, posts, recommendations, and outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Source before discovery",
              description:
                "Real search requires governed indexing, permissions, semantics, freshness, deduplication, privacy, navigation, moderation, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
