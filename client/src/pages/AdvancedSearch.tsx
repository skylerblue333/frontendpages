import { useMemo, useState } from "react";
import {
  CircleSlash2,
  Database,
  Info,
  LockKeyhole,
  RotateCcw,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type SearchState = "Review" | "Planned" | "Unavailable";
type SearchFixture = {
  id: string;
  title: string;
  state: SearchState;
  summary: string;
  index: string;
  privacy: string;
  boundary: string;
};
const domains: SearchFixture[] = [
  {
    id: "docs",
    title: "Documentation search",
    state: "Review",
    summary:
      "A local domain concept for finding approved documentation without querying a live index.",
    index: "Index source unavailable",
    privacy: "Field filtering review required",
    boundary:
      "No documents, snippets, query log, user profile, tenant, or ranking service is connected.",
  },
  {
    id: "course",
    title: "Course discovery",
    state: "Planned",
    summary:
      "A local domain concept for structured learning discovery with privacy controls pending.",
    index: "Course index unavailable",
    privacy: "Personalization disabled",
    boundary:
      "No course record, learner identity, completion state, recommendation, or result source is available.",
  },
  {
    id: "ecosystem",
    title: "Ecosystem directory",
    state: "Unavailable",
    summary:
      "A restricted search concept pending ownership and external-record review.",
    index: "Directory index unavailable",
    privacy: "Tenant boundary unavailable",
    boundary:
      "No external directory, organization record, account, provider, query metric, or search result is available.",
  },
];
const states: Array<"All" | SearchState> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];

export default function AdvancedSearch() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] =
    useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(domains[0].id);
  const [status, setStatus] = useState(
    "Search service unavailable. Showing local search-policy fixtures only."
  );
  const filtered = useMemo(
    () =>
      domains.filter(
        domain =>
          (stateFilter === "All" || domain.state === stateFilter) &&
          `${domain.title} ${domain.summary}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [query, stateFilter]
  );
  const selected =
    domains.find(domain => domain.id === selectedId) ?? domains[0];
  const reset = () => {
    setQuery("");
    setStateFilter("All");
    setSelectedId(domains[0].id);
    setStatus(
      "Search preview reset locally. No query, index, result, personalization, or log state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No query, index, result, profile, external record, or analytics request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-400/10 text-sky-200">
              <Search aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Advanced search
                </h1>
                <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-xs font-medium text-sky-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review search-policy concepts without querying records, logging
                terms, personalizing results, or claiming live relevance.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset advanced search preview"
            className="self-start border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white"
            onClick={reset}
            variant="outline"
          >
            <RotateCcw aria-hidden="true" className="mr-2 h-4 w-4" />
            Reset preview
          </Button>
        </header>
        <section
          className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/[0.07] p-4 text-sm text-slate-300"
          role="note"
        >
          <div className="flex gap-3">
            <Info
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
            />
            <p>
              <strong className="font-semibold text-amber-100">
                Search service unavailable.
              </strong>{" "}
              No index, record store, query logger, personalization service,
              database, crawler, external provider, or result source is
              connected. The domains below are local fixtures.
            </p>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <label className="relative block flex-1">
                <span className="sr-only">
                  Search local search-policy fixtures
                </span>
                <Search
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                />
                <Input
                  className="border-slate-700 bg-slate-950/70 pl-9 text-slate-200 placeholder:text-slate-600"
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search policy fixtures"
                  value={query}
                />
              </label>
              <div
                aria-label="Filter search-policy state"
                className="flex flex-wrap gap-2"
                role="group"
              >
                {states.map(option => (
                  <Button
                    aria-pressed={stateFilter === option}
                    className={
                      stateFilter === option
                        ? "bg-sky-500 text-white hover:bg-sky-400"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={option}
                    onClick={() => {
                      setStateFilter(option);
                      setStatus(
                        `${option} search-policy state selected locally.`
                      );
                    }}
                    size="sm"
                    variant={stateFilter === option ? "default" : "outline"}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {filtered.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-8 text-center">
                  <Search
                    aria-hidden="true"
                    className="mx-auto h-8 w-8 text-slate-600"
                  />
                  <p className="mt-3 font-medium text-slate-300">
                    No matching local search domains
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Try another state or search term.
                  </p>
                </div>
              ) : (
                filtered.map(domain => (
                  <button
                    aria-pressed={domain.id === selectedId}
                    className={`flex w-full items-start gap-4 rounded-xl border p-5 text-left transition-colors ${domain.id === selectedId ? "border-sky-400/35 bg-sky-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-600"}`}
                    key={domain.id}
                    onClick={() => {
                      setSelectedId(domain.id);
                      setStatus(
                        `${domain.title} selected for local search-policy review.`
                      );
                    }}
                    type="button"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-sky-200">
                      <Search aria-hidden="true" className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-medium text-slate-200">
                          {domain.title}
                        </p>
                        <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-400">
                          {domain.state}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {domain.summary}
                      </p>
                      <p className="mt-2 text-xs text-slate-600">
                        {domain.index} · results unavailable
                      </p>
                    </div>
                  </button>
                ))
              )}
            </div>
            <p
              aria-live="polite"
              className="mt-6 rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Selected search domain
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {selected.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {selected.boundary}
              </p>
              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Index posture
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {selected.index}
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-lg border border-slate-800 p-3">
                    <p className="text-xs text-slate-500">Privacy</p>
                    <p className="mt-1 text-sm text-slate-200">
                      {selected.privacy}
                    </p>
                  </div>
                  <div className="rounded-lg border border-slate-800 p-3">
                    <p className="text-xs text-slate-500">Results</p>
                    <p className="mt-1 text-sm text-slate-200">Unavailable</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-600">
                  Query logs, rank, relevance, snippets, personalization, and
                  retention are unavailable.
                </p>
              </div>
              <Button
                className="mt-5 w-full border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                onClick={() => blocked("Search domain")}
                variant="outline"
              >
                <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                Search unavailable
              </Button>
            </Card>
            <Card className="border-slate-800 bg-slate-700/10 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-sky-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Privacy boundary
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No query, user, device, session, IP, tenant, index, result,
                    profile, snippet, provider, retention, deletion, or
                    analytics operation is available. Future search requires
                    field filtering, redaction, query privacy, authorization,
                    and auditability.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <ShieldCheck
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Search posture
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Index health, query volume, result count, relevance,
                    personalization, ranking, retention, and external-record
                    access are unavailable rather than estimated.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex gap-3 text-slate-600">
                <Database aria-hidden="true" className="h-5 w-5" />
                <Search aria-hidden="true" className="h-5 w-5" />
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
