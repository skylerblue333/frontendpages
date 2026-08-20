import { useMemo, useState } from "react";
import {
  Bell,
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
const searches = [
  {
    id: 1,
    name: "Residential properties",
    category: "Property",
    detail:
      "A local search concept requiring source, jurisdiction, address privacy, price freshness, availability, and professional review.",
    state: "Unconfigured",
  },
  {
    id: 2,
    name: "SDK release updates",
    category: "Developer",
    detail:
      "A package search concept requiring registry provenance, version, integrity, compatibility, support, and deprecation evidence.",
    state: "Needs evidence",
  },
  {
    id: 3,
    name: "Learning opportunities",
    category: "Education",
    detail:
      "An education-search concept requiring source authority, learner privacy, accessibility, freshness, and safeguarding.",
    state: "Preview",
  },
  {
    id: 4,
    name: "Community discussions",
    category: "Community",
    detail:
      "A community-search concept requiring moderation, anti-abuse, privacy, language support, and appeals.",
    state: "Blocked",
  },
];
export default function SavedSearches() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [frequency, setFrequency] = useState("Frequency not configured");
  const [privacy, setPrivacy] = useState("Privacy mode not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(searches.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      searches.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const search = searches.find(item => item.id === selected) ?? searches[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setFrequency("Frequency not configured");
    setPrivacy("Privacy mode not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-202" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Search}
        eyebrow="Saved searches · Alert preview"
        title="Save the criteria before trusting the result."
        description="Explore local property, developer, education, and community search concepts with search, category filters, frequency and privacy intent, freshness and notification gates, save/reset, and blocked run/share actions. No source, result, listing, package, course, post, price, availability, or alert is connected."
        badge="Search-governance workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save search locally"}
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
              label: "Search concepts",
              value: `${searches.length} local`,
              hint: "No source index",
              icon: Search,
              tone: "cyan",
            },
            {
              label: "Results",
              value: "Unavailable",
              hint: "No query source",
              icon: SlidersHorizontal,
              tone: "violet",
            },
            {
              label: "Alerts",
              value: "Unconfigured",
              hint: "No notification source",
              icon: Bell,
              tone: "amber",
            },
            {
              label: "Freshness",
              value: "Unverified",
              hint: "No source timestamp",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Saved-search evidence boundary">
          <strong>
            This is a local search-alert preview, not evidence that a result,
            listing, package, course, community post, price, or notification
            exists.
          </strong>{" "}
          Search cards, filters, frequency and privacy intent, saved state,
          freshness gates, and disabled run/share actions are browser concepts.
          No source, result, user, address, price, availability, package,
          course, post, ranking, market outcome, or alert delivery is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local saved searches"
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
                    Selected search concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{search.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {search.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {search.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: search.category },
                  { label: "Frequency", value: frequency },
                  { label: "Privacy", value: privacy },
                  { label: "Criteria", value: "Unconfigured" },
                  { label: "Results", value: "Unavailable" },
                  { label: "Freshness", value: "Unverified" },
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
                  Alert frequency
                  <select
                    value={frequency}
                    onChange={event => setFrequency(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Frequency not configured</option>
                    <option>Manual intent</option>
                    <option>Daily intent</option>
                    <option>Weekly intent</option>
                    <option>Source-change intent</option>
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
                    <option>Private search intent</option>
                    <option>Redacted-sharing intent</option>
                    <option>Anonymous alert intent</option>
                    <option>Consent-required intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Search className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No search evidence loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed source index, query semantics, freshness
                  timestamps, permissions, privacy, ranking, deduplication,
                  notification, retention, deletion, and audit before running a
                  search.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Run search unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  <Bell className="mr-2 size-4" />
                  Create alert unavailable
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
                  Remove unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No result or market claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A saved-search concept does not prove a source, result,
                    ranking, listing, address, price, availability, package,
                    course, post, alert delivery, or market outcome.
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
              What a real saved-search system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated user, source, query, criteria, tenant, jurisdiction, timestamp, freshness, permissions, and provenance",
                "Property, package, education, community, financial, crypto, AI, and marketplace result semantics, ranking, deduplication, and source review",
                "Privacy, consent, address and sensitive-data redaction, retention, deletion, export, sharing, notification, and support",
                "Alert frequency, event source, quiet hours, retries, suppression, delivery, stale-result handling, and audit",
                "Price, availability, valuation, revenue, ranking, recommendation, quality, safety, and user-impact claims require domain review",
                "Run, save, remove, share, alert, compare, export, refresh, accessibility, and accountable approval require governed controls",
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
              title: "Search surface preserved",
              description:
                "Property, developer, education, community searches, filters, criteria, privacy, freshness, alerts, run, share, remove, save/reset, and gates remain interactive.",
              icon: Search,
              status: "Local searches",
            },
            {
              title: "No result theater",
              description:
                "Sources, results, rankings, listings, addresses, prices, packages, courses, posts, alerts, and market outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Fresh source before alert",
              description:
                "Real saved searches require governed source data, semantics, permissions, privacy, freshness, notifications, retention, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
