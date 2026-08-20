import { useMemo, useState } from "react";
import {
  CalendarClock,
  Check,
  Eraser,
  Filter,
  History,
  LockKeyhole,
  RefreshCw,
  Search,
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
const history = [
  {
    id: 1,
    query: "digital foundations",
    category: "School",
    detail:
      "A local query-history concept requiring account scope, timestamp, source, privacy, retention, and deletion semantics.",
    state: "Local concept",
  },
  {
    id: 2,
    query: "governance proposal",
    category: "Governance",
    detail:
      "A governance search-history concept requiring workspace permission, sensitive-content handling, audit, and export controls.",
    state: "Privacy review",
  },
  {
    id: 3,
    query: "developer sdk",
    category: "Developer",
    detail:
      "A developer search-history concept requiring query provenance, package index scope, access, retention, and re-run policy.",
    state: "Unconfigured",
  },
  {
    id: 4,
    query: "community discussions",
    category: "Community",
    detail:
      "A community query-history concept requiring consent, moderation, abuse handling, privacy, and safe sharing.",
    state: "Blocked",
  },
];
export default function SearchHistory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [source, setSource] = useState("Source not configured");
  const [retention, setRetention] = useState("Retention not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(history.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      history.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.query} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const entry = history.find(item => item.id === selected) ?? history[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setSource("Source not configured");
    setRetention("Retention not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-202" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={History}
        eyebrow="Search history · Privacy preview"
        title="Keep history only when the user and policy are clear."
        description="Explore local query-history concepts with search and category filters, source and retention intent, timestamps, privacy/deletion/export gates, save/reset, and blocked re-run/share actions. No user history, query log, identity, source, retention operation, analytics, or result is connected."
        badge="Privacy-first history workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save policy locally"}
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
            {showGates ? "Close gates" : "Review history gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset history
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "History concepts",
              value: `${history.length} local`,
              hint: "No user source",
              icon: History,
              tone: "cyan",
            },
            {
              label: "Queries",
              value: "Unavailable",
              hint: "No log source",
              icon: Search,
              tone: "violet",
            },
            {
              label: "Retention",
              value: "Unconfigured",
              hint: "No policy source",
              icon: CalendarClock,
              tone: "amber",
            },
            {
              label: "Deletion",
              value: "Blocked",
              hint: "No account source",
              icon: Eraser,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Search-history evidence boundary">
          <strong>
            This is a local privacy-policy preview, not evidence that a user
            searched, that a query was stored, or that a history deletion/export
            occurred.
          </strong>{" "}
          History cards, filters, source and retention intent, saved state,
          privacy gates, and disabled rerun/share/delete/export actions are
          browser concepts. No user identity, query, timestamp, source, result,
          retention, analytics, recommendation, or privacy outcome is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Filter local query concepts"
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
                        <p className="font-semibold">{item.query}</p>
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
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-white/10 text-slate-500"
                      >
                        {item.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-white/10 text-slate-500"
                      >
                        Timestamp unconfigured
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
                    Selected history concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{entry.query}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {entry.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {entry.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: entry.category },
                  { label: "Source", value: source },
                  { label: "Retention", value: retention },
                  { label: "Timestamp", value: "Unavailable" },
                  { label: "Identity", value: "Not claimed" },
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
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <label className="text-sm text-slate-400">
                  Source intent
                  <select
                    value={source}
                    onChange={event => setSource(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Source not configured</option>
                    <option>Private search index intent</option>
                    <option>Public index intent</option>
                    <option>Workspace history intent</option>
                    <option>Federated source intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Retention intent
                  <select
                    value={retention}
                    onChange={event => setRetention(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Retention not configured</option>
                    <option>Session-only intent</option>
                    <option>Short-retention intent</option>
                    <option>User-controlled retention</option>
                    <option>Explicit-consent intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <History className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No history evidence loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed account scope, query storage, consent,
                  sensitive-data handling, retention, deletion, export, source
                  freshness, access control, and audit before displaying
                  history.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Rerun unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Delete unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Export unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Share unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No user-history or privacy claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A history concept does not prove a user, query, timestamp,
                    result, retention policy, deletion, export, consent, privacy
                    outcome, or search analytics.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Search-history gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real history system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated account, user, query, category, source, timestamp, device, locale, tenant, permission, and provenance",
                "Consent, sensitive-query detection, redaction, minimization, retention, deletion, export, recovery, legal hold, and support",
                "Rerun semantics, source freshness, result provenance, ranking, recommendation, analytics, and notification boundaries",
                "Access, IDOR prevention, encryption, secure cookies, audit, incident response, abuse controls, and administrator scope",
                "Search, property, marketplace, education, community, AI, crypto, financial, health, and user-impact claims require domain review",
                "Rerun, delete, export, share, clear all, notify, accessibility, and accountable approval require governed privacy controls",
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
              title: "History surface preserved",
              description:
                "Query concepts, categories, sources, timestamps, retention, rerun, delete, export, share, save/reset, and gates remain interactive.",
              icon: History,
              status: "Local history",
            },
            {
              title: "No privacy theater",
              description:
                "Users, queries, timestamps, results, retention, deletion, export, consent, analytics, and privacy outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Consent before memory",
              description:
                "Real history requires account scope, privacy-safe storage, user control, deletion/export, access controls, source provenance, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
