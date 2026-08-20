import { useMemo, useState } from "react";
import {
  Database,
  FileSearch,
  Filter,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type SearchBoundary = {
  title: string;
  area: string;
  description: string;
};

const boundaries: readonly SearchBoundary[] = [
  {
    title: "Index and source availability",
    area: "Infrastructure",
    description:
      "No searchable index, source catalog, freshness timestamp, schema version, or provenance record is connected.",
  },
  {
    title: "Query and result semantics",
    area: "Discovery",
    description:
      "No query parser, ranking model, result count, pagination, deduplication, or source navigation is evaluated.",
  },
  {
    title: "Permissions and privacy",
    area: "Safety",
    description:
      "No authenticated identity, tenant scope, visibility rule, consent state, redaction policy, or retention boundary is loaded.",
  },
  {
    title: "Domain-specific claims",
    area: "Governance",
    description:
      "Prices, balances, listings, course access, AI output, recommendations, social content, and business outcomes are not asserted.",
  },
  {
    title: "Search operations",
    area: "Operations",
    description:
      "View, save, share, export, notify, moderation, audit, support, and accountable approval workflows are not connected.",
  },
  {
    title: "Suggestions and trends",
    area: "Measurement",
    description:
      "No trend count, autocomplete signal, popularity metric, abuse control, aggregation rule, or measurement definition exists.",
  },
];

export default function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<SearchBoundary | null>(null);
  const [status, setStatus] = useState(
    "Global Search is unavailable locally. No query was sent, indexed result was loaded, or mutation was saved."
  );

  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return boundaries;
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(normalized)
    );
  }, [query]);

  const unavailable = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No query was sent, result was opened, or search mutation was saved.`
    );
  };

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="global-search-title"
    >
      <div data-ui-polish="batch-191" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Search className="size-3.5" aria-hidden="true" />
                  Search readiness
                </Badge>
                <Badge variant="secondary">No search service</Badge>
              </div>
              <h1
                id="global-search-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Global Search readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the contracts required for trustworthy cross-ecosystem
                discovery without implying that an index, user scope, result
                ranking, or live result exists.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>

        <section
          className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
          aria-label="Global Search service status"
        >
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Search service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No governed index, query endpoint, permissions scope, freshness
                signal, result navigation, or search persistence is connected.
                This is a readiness boundary, not an active discovery
                experience.
              </p>
            </div>
          </div>
        </section>

        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Global Search status"
        >
          <Card>
            <CardContent className="p-5">
              <Database
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No index scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No records, sources, freshness, schema, ranking, or provenance
                are loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No permission scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No identity, tenant, visibility rule, consent, redaction, or
                retention state is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No result claims</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No result count, price, balance, recommendation, course, post,
                or success outcome is presented.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Search-governance map</CardTitle>
            <CardDescription>
              Search filters immutable local boundary notes only. It never sends
              a query, loads results, changes permissions, saves a search, or
              claims freshness.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Filter
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search global search readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter search requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(boundary => (
                <div
                  key={boundary.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{boundary.title}</h3>
                    <Badge variant="outline">{boundary.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {boundary.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSelected(boundary);
                      unavailable(`Review ${boundary.title}`);
                    }}
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
                  No search-readiness notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {selected && (
          <section
            className="rounded-2xl border border-border/70 bg-card/50 p-5"
            aria-labelledby="selected-search-boundary"
          >
            <div className="flex items-start gap-3">
              <FileSearch
                className="mt-0.5 size-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h2 id="selected-search-boundary" className="font-semibold">
                  Selected boundary: {selected.title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {selected.description} No live search contract was invoked.
                </p>
              </div>
            </div>
          </section>
        )}

        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production search needs authenticated source scope, query
                semantics, ranking and deduplication tests, privacy controls,
                freshness and provenance, pagination, moderation, navigation,
                rate limits, observability, and tested result-operation
                recovery.
              </p>
            </div>
          </div>
        </section>

        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <Search
            className="mr-2 inline size-4 text-primary"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
