import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Filter,
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
const resultItems = [
  {
    id: 1,
    title: "Digital foundations",
    category: "School",
    type: "Course concept",
    detail:
      "A local result concept requiring source authority, course version, access, learner privacy, and accessibility evidence.",
    state: "Unverified",
  },
  {
    id: 2,
    title: "Governance proposal",
    category: "Governance",
    type: "Proposal concept",
    detail:
      "A local result concept requiring author identity, scope, decision process, evidence, moderation, and approval.",
    state: "Preview",
  },
  {
    id: 3,
    title: "Developer SDK",
    category: "Marketplace",
    type: "Package concept",
    detail:
      "A local result concept requiring registry provenance, version, integrity, compatibility, support, and release evidence.",
    state: "Needs source",
  },
  {
    id: 4,
    title: "Community discussion",
    category: "Social",
    type: "Discussion concept",
    detail:
      "A local result concept requiring moderation, privacy, anti-abuse controls, language support, and appeals.",
    state: "Blocked",
  },
];
export default function SearchResults() {
  const [query, setQuery] = useState("ecosystem concepts");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [ranking, setRanking] = useState("Ranking not configured");
  const [freshness, setFreshness] = useState("Freshness not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(resultItems.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      resultItems.filter(
        item =>
          ((category === "All" || item.category === category) &&
            `${item.title} ${item.category} ${item.type} ${item.detail}`
              .toLowerCase()
              .includes(query.toLowerCase())) ||
          category === "All" ||
          item.category === category
      ),
    [category, query]
  );
  const result =
    resultItems.find(item => item.id === selected) ?? resultItems[0];
  const reset = () => {
    setQuery("ecosystem concepts");
    setCategory("All");
    setSelected(1);
    setRanking("Ranking not configured");
    setFreshness("Freshness not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-202" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Search}
        eyebrow="Search results · Review preview"
        title="Review the result before trusting the route."
        description="Explore local result-review concepts with query context, category filters, ranking and freshness intent, source/privacy/navigation gates, save/reset, and blocked open/share/export actions. No index, result, ranking, price, user, listing, course, package, post, recommendation, or business outcome is connected."
        badge="Result-review workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save result set locally"}
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
            {showGates ? "Close gates" : "Review result gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset results
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Result concepts",
              value: `${resultItems.length} local`,
              hint: "No index source",
              icon: Search,
              tone: "cyan",
            },
            {
              label: "Query",
              value: "Preview",
              hint: query,
              icon: SlidersHorizontal,
              tone: "violet",
            },
            {
              label: "Freshness",
              value: "Unverified",
              hint: "No source timestamp",
              icon: RefreshCw,
              tone: "amber",
            },
            {
              label: "Navigation",
              value: "Blocked",
              hint: "No route source",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Search-result evidence boundary">
          <strong>
            This is a local result-review preview, not evidence that an indexed
            record, ranking, price, listing, package, course, post, or
            recommendation exists.
          </strong>{" "}
          Query context, result cards, filters, ranking and freshness intent,
          saved state, navigation/privacy gates, and disabled open/share/export
          actions are browser concepts. No source, user, result count, ranking,
          price, availability, recommendation, or business outcome is asserted.
        </ScreenPreviewBanner>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Review local result query"
                  className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-3 text-sm text-white outline-none"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:w-[32rem]">
                <label className="text-sm text-slate-400">
                  Ranking intent
                  <select
                    value={ranking}
                    onChange={event => setRanking(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Ranking not configured</option>
                    <option>Relevance intent</option>
                    <option>Freshness intent</option>
                    <option>Curated intent</option>
                    <option>Human-review intent</option>
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
                    Local results
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    {filtered.length} preview result
                    {filtered.length === 1 ? "" : "s"}
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  No live data
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
                          {item.detail}
                        </p>
                      </div>
                      <ArrowUpRight className="mt-1 size-4 text-slate-500" />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-white/10 text-slate-500"
                      >
                        {item.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-amber-300/20 text-amber-200"
                      >
                        {item.state}
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
                    Selected result concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{result.title}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {result.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {result.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: result.category },
                  { label: "Ranking", value: ranking },
                  { label: "Freshness", value: freshness },
                  { label: "Source", value: "Unavailable" },
                  { label: "Price", value: "Not claimed" },
                  { label: "Route", value: "Blocked" },
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
                <Search className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No result evidence loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed index, result schema, source provenance,
                  ranking, freshness, permissions, privacy, destination routes,
                  and audit before opening a live result.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Open unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Save unavailable
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
                    No result or price claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A result concept does not prove an indexed record, source,
                    ranking, user, listing, price, availability, package,
                    course, post, recommendation, or business outcome.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Result-review gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real result surface must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated source, query, result, category, tenant, permission, timestamp, freshness, index version, and provenance",
                "Result semantics, ranking, deduplication, pagination, quality, moderation, recommendation, source link, and destination navigation",
                "Marketplace price, property availability, course access, financial, crypto, AI, social, video, charity, and user-impact claims require domain review",
                "Privacy, consent, sensitive data, redaction, retention, deletion, export, sharing, notification, and support",
                "Open and view actions require a safe destination, access checks, loading/error states, not-found handling, and audit",
                "Save, share, export, report, navigate, notify, accessibility, and accountable approval require governed result operations",
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
              title: "Result surface preserved",
              description:
                "Query context, categories, result concepts, ranking, freshness, source, open, save, share, export, filters, save/reset, and gates remain interactive.",
              icon: Search,
              status: "Local results",
            },
            {
              title: "No navigation theater",
              description:
                "Live indexes, records, rankings, prices, listings, packages, courses, posts, recommendations, destinations, and outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before opening",
              description:
                "Real result surfaces require governed indexing, permissions, semantics, freshness, privacy, safe routes, error states, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
