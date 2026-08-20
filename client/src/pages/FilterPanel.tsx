import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Filter,
  ListFilter,
  Search,
  ShieldCheck,
  SlidersHorizontal,
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

type FilterBoundary = { title: string; area: string; description: string };
const boundaries: readonly FilterBoundary[] = [
  {
    title: "Filter schema and facets",
    area: "Query",
    description:
      "No record source, field schema, facet list, option values, counts, ranges, labels, or filter defaults are loaded.",
  },
  {
    title: "Applied state and URL",
    area: "State",
    description:
      "No selected values, active query, URL parameters, saved view, pagination, sort, or reset state is connected.",
  },
  {
    title: "Results and performance",
    area: "Data",
    description:
      "No result set, match count, loading state, cache, request, debounce, or query error is available.",
  },
  {
    title: "Access and persistence",
    area: "Controls",
    description:
      "No permission scope, personal view, shared view, persistence, analytics, export, or mutation workflow is configured.",
  },
];

export default function FilterPanel() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Filter panel is unavailable locally. No records, filters, query, result set, or persistence mutation was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No records, filters, query, result set, or persistence mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="filter-panel-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Filter className="size-3.5" aria-hidden="true" />
                  Query controls readiness
                </Badge>
                <Badge variant="secondary">No filter service</Badge>
              </div>
              <h1
                id="filter-panel-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Filter panel readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful schema, facets, applied state, results,
                performance, access, and persistence contracts without
                presenting invented filter options or changing a query.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Filter service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No record source, field schema, facet provider, query contract,
                result cache, permission scope, or saved-view storage is
                connected. This is a planning boundary, not an active filter
                panel.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Filter panel status"
        >
          <Card>
            <CardContent className="p-5">
              <ListFilter
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No facets loaded</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No source, fields, options, counts, ranges, labels, or defaults
                are presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No applied state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No values, query, URL parameters, saved view, pagination, sort,
                or reset state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No results</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No matches, loading, cache, request, debounce, query error, or
                result count can run.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Filter panel readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              records, facets, query state, results, permissions, or saved
              views.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search filter panel readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search filter requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(({ title, area, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{title}</h3>
                    <Badge variant="outline">{area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Manage ${title}`)}
                  >
                    Manage unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No filter notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production filter panel needs a versioned query schema,
                explicit option semantics, safe URL serialization, authorized
                data scope, debounced requests, loading and error states,
                caching without stale results, accessible controls, reset
                behavior, saved-view rules, analytics boundaries, and clear
                empty states.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
