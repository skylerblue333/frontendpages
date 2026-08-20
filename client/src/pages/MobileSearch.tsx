import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Database,
  FileSearch,
  Filter,
  LockKeyhole,
  Search,
  ShieldCheck,
  Smartphone,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Index and source provenance",
    area: "Data",
    description:
      "No searchable source, index version, document, route, owner, timestamp, freshness policy, or indexing status is connected.",
  },
  {
    title: "Query semantics and ranking",
    area: "Search",
    description:
      "No tokenization, language, typo tolerance, filters, facets, ranking rule, relevance test, empty state, or result contract is verified.",
  },
  {
    title: "Authorization and private content",
    area: "Access",
    description:
      "No account, role, workspace, private-content boundary, redaction rule, permission filter, or access audit is available.",
  },
  {
    title: "Privacy and telemetry",
    area: "Governance",
    description:
      "No search-history policy, sensitive-query handling, consent, retention, deletion, analytics event, or data minimization rule exists.",
  },
  {
    title: "Mobile reliability and accessibility",
    area: "UX",
    description:
      "No offline behavior, loading state, retry, stale-index policy, keyboard path, screen-reader announcement, focus handling, or touch target is tested.",
  },
];
export default function MobileSearch() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Mobile search is unavailable locally. No index, source, query history, result, account, or search record was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No index, source, query, result, history, account, private-content, or search-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="mobile-search-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Search className="size-3.5" aria-hidden="true" />{" "}
                  Search-readiness workspace
                </Badge>
                <Badge variant="secondary">No index connected</Badge>
              </div>
              <h1
                id="mobile-search-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MobileSearch readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review search-index provenance, query semantics, result ranking,
                authorization, privacy, telemetry, offline behavior,
                accessibility, and recovery without implying that searchable
                content, results, or search history exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Search service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No index, source registry, query service, authorization filter,
                privacy boundary, analytics pipeline, offline cache, or
                persistence layer is connected. This workspace cannot search,
                rank, reveal, save, or claim a result.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Database
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No index records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No source, document, route, index version, freshness state, or
                searchable record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Filter className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No result state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No query, filter, facet, rank, result, relevance score, empty
                state, or history is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No search actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No search, filter, open, save, share, delete, analytics, or
                search-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Search-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              queries an index, reveals a result, reads private content, saves
              history, or records telemetry.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search mobile search readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter search requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(item => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${item.title}`)}
                  >
                    <FileSearch className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No search notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Production search requires authoritative indexed sources,
                versioned freshness, tested query and ranking semantics,
                permission-aware results, sensitive-query handling, privacy and
                history controls, accessibility, offline and failure recovery,
                and auditable indexing. No index, query, result,
                private-content, history, or search record is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <ShieldCheck
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
