import { useMemo, useState } from "react";
import {
  Accessibility,
  Check,
  FileSearch,
  Filter,
  Globe2,
  LockKeyhole,
  RefreshCw,
  SearchCheck,
  ShieldAlert,
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
const audits = [
  {
    id: 1,
    name: "Landing page metadata",
    category: "Metadata",
    detail:
      "A local audit concept for title, description, canonical, Open Graph, robots, sitemap, locale, and content intent.",
    state: "Unscanned",
  },
  {
    id: 2,
    name: "Structured data review",
    category: "Schema",
    detail:
      "A structured-data concept requiring declared entity type, source truth, validation, privacy, and search-engine interpretation.",
    state: "Needs evidence",
  },
  {
    id: 3,
    name: "Accessibility content audit",
    category: "Accessibility",
    detail:
      "A content-quality concept for headings, link labels, alt text, language, contrast, keyboard access, and assistive technology.",
    state: "Unmeasured",
  },
  {
    id: 4,
    name: "Search-content alignment",
    category: "Content",
    detail:
      "A content concept requiring query intent, factual source, freshness, authorship, review, and no manipulative claims.",
    state: "Preview",
  },
];
export default function SEOOptimizer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [keyword, setKeyword] = useState("Keyword intent not configured");
  const [mode, setMode] = useState("Audit mode not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(audits.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      audits.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const audit = audits.find(item => item.id === selected) ?? audits[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setKeyword("Keyword intent not configured");
    setMode("Audit mode not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={SearchCheck}
        eyebrow="SEO optimizer · Content preview"
        title="Improve discoverability without promising a ranking."
        description="Explore local metadata, schema, accessibility, and content-alignment audit concepts with search, category filters, keyword and audit-mode intent, save/reset, quality gates, and blocked publishing actions. No search ranking, traffic, indexing, conversion, authority, or business outcome is connected."
        badge="Content quality workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save audit locally"}
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
            {showGates ? "Close gates" : "Review SEO gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset audit
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Audit concepts",
              value: `${audits.length} local`,
              hint: "No crawl source",
              icon: SearchCheck,
              tone: "cyan",
            },
            {
              label: "Indexing",
              value: "Unavailable",
              hint: "No search source",
              icon: Globe2,
              tone: "violet",
            },
            {
              label: "Accessibility",
              value: "Unmeasured",
              hint: "No scanner source",
              icon: Accessibility,
              tone: "amber",
            },
            {
              label: "Ranking",
              value: "Not claimed",
              hint: "No search evidence",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="SEO evidence boundary">
          <strong>
            This is a local content-quality preview, not a search-engine report
            or marketing-performance claim.
          </strong>{" "}
          Audit cards, filters, keyword and mode intent, quality gates, saved
          state, and disabled publishing actions are browser concepts. No crawl,
          index status, ranking position, impressions, clicks, traffic,
          authority, conversion, or revenue outcome is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local SEO audits"
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
                    Selected SEO audit concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{audit.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {audit.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {audit.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: audit.category },
                  { label: "Keyword", value: keyword },
                  { label: "Mode", value: mode },
                  { label: "Indexing", value: "Unavailable" },
                  { label: "Quality", value: "Unmeasured" },
                  { label: "Ranking", value: "Not claimed" },
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
                  Keyword intent
                  <select
                    value={keyword}
                    onChange={event => setKeyword(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Keyword intent not configured</option>
                    <option>Informational intent</option>
                    <option>Navigational intent</option>
                    <option>Transactional intent</option>
                    <option>Educational intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Audit mode
                  <select
                    value={mode}
                    onChange={event => setMode(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Audit mode not configured</option>
                    <option>Metadata intent</option>
                    <option>Schema intent</option>
                    <option>Accessibility intent</option>
                    <option>Content-quality intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <FileSearch className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No SEO evidence loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed page content, crawler, search console, schema
                  validator, accessibility scanner, source citations,
                  authorship, freshness, privacy, and review before making
                  performance claims.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Run audit unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Publish metadata unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Submit sitemap unavailable
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
                    No ranking or traffic claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A content audit concept does not prove indexing, ranking,
                    traffic, authority, conversion, search-engine
                    interpretation, or revenue impact.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              SEO quality gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real SEO-quality system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated page source, URL, canonical, locale, title, description, links, ownership, timestamp, and change history",
                "Crawler, robots, sitemap, index status, structured data, search-console, freshness, and search-engine evidence",
                "Accessibility headings, labels, alt text, language, contrast, keyboard access, focus, semantics, and assistive technology",
                "Content source, authorship, factual review, citations, privacy, legal claims, regulated topics, and user intent",
                "Rate limits, secret handling, sensitive analytics, redaction, retention, deletion, access, and incident response",
                "Ranking, traffic, conversion, revenue, authority, recommendation, and business outcomes require accountable domain review",
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
              title: "SEO surface preserved",
              description:
                "Metadata, schema, accessibility, content, filters, keyword intent, audit mode, crawl, publishing, sitemap, export, save/reset, and gates remain interactive.",
              icon: SearchCheck,
              status: "Local audits",
            },
            {
              title: "No marketing theater",
              description:
                "Indexing, rankings, traffic, clicks, authority, conversions, revenue, and search-engine outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before optimization",
              description:
                "Real SEO work requires source content, crawler/search evidence, schema validation, accessibility review, citations, and accountable claims.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
