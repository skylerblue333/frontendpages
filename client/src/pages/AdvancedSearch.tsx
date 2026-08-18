import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";
import { Database, LockKeyhole, Search, ShieldCheck } from "lucide-react";

type SearchState = "All" | "Review" | "Planned" | "Unavailable";
type SearchConcept = {
  title: string;
  state: Exclude<SearchState, "All">;
  summary: string;
  query: string;
  index: string;
  privacy: string;
  retention: string;
  results: string;
  logging: string;
};
const concepts: SearchConcept[] = [
  {
    title: "Documentation search",
    state: "Review",
    summary:
      "Local search-policy concept pending tenant isolation, field filtering, redaction, query privacy, and auditable index ownership.",
    query: "Query execution unavailable",
    index: "Index ownership unavailable",
    privacy: "Privacy policy unavailable",
    retention: "Retention policy unavailable",
    results: "Search results unavailable",
    logging: "Query logging unavailable",
  },
  {
    title: "Community search",
    state: "Planned",
    summary:
      "Local community search concept pending authorization, moderation-aware visibility, result redaction, and abuse controls.",
    query: "Query execution unavailable",
    index: "Index ownership unavailable",
    privacy: "Privacy policy unavailable",
    retention: "Retention policy unavailable",
    results: "Search results unavailable",
    logging: "Query logging unavailable",
  },
  {
    title: "Financial search",
    state: "Unavailable",
    summary:
      "Local financial search concept pending sensitive-field filtering, authorization, tenant boundaries, and audit review.",
    query: "Query execution unavailable",
    index: "Index ownership unavailable",
    privacy: "Privacy policy unavailable",
    retention: "Retention policy unavailable",
    results: "Search results unavailable",
    logging: "Query logging unavailable",
  },
];
export default function AdvancedSearch() {
  const [state, setState] = useState<SearchState>("All");
  const [selected, setSelected] = useState(concepts[0]);
  const [status, setStatus] = useState(
    "Search service unavailable. Showing local search-policy concepts only."
  );
  const visible = concepts.filter(
    item => state === "All" || item.state === state
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No query, index, profile, result, ranking, personalization, external record, or analytics request was started.`
    );
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Search}
        title="Advanced search"
        subtitle="Review local search-policy concepts without fabricated queries, indexes, records, rankings, personalization, snippets, or search metrics."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Search service unavailable.</strong> No index, record, result,
          personalization, query logging, or search provider is connected.
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Search preview
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Review search policies
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Typed local fixtures show search structure only; they do not
              represent real queries, indexes, records, results, rank,
              relevance, personalization, or logs.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(
                ["All", "Review", "Planned", "Unavailable"] as SearchState[]
              ).map(item => (
                <Button
                  key={item}
                  aria-pressed={state === item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {visible.map(item => (
                <button
                  className={`w-full rounded-xl border p-5 text-left ${selected.title === item.title ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={item.title}
                  onClick={() => setSelected(item)}
                  type="button"
                >
                  <div className="flex justify-between gap-3">
                    <p className="font-medium">{item.title}</p>
                    <span className="text-xs text-slate-400">{item.state}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{item.summary}</p>
                </button>
              ))}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected policy
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <div className="mt-5 grid gap-2">
                {(
                  [
                    ["Query", selected.query],
                    ["Index", selected.index],
                    ["Privacy", selected.privacy],
                    ["Retention", selected.retention],
                    ["Results", selected.results],
                    ["Logging", selected.logging],
                  ] as Array<[string, string]>
                ).map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Search domain")}
                  variant="outline"
                >
                  <Search className="mr-2 h-4 w-4" /> Search unavailable
                </Button>
                <Button
                  onClick={() => blocked("Index domain")}
                  variant="outline"
                >
                  <Database className="mr-2 h-4 w-4" /> Index unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Search requires authorization, tenant isolation, field-level
                  filtering, redaction, retention, deletion, abuse controls,
                  query privacy, and auditable index ownership.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No query, index, record, result, rank, profile,
                  personalization, or external provider operation is available
                  from this preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
