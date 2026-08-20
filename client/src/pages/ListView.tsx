import { useMemo, useState } from "react";
import {
  FileWarning,
  Filter,
  List,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  SlidersHorizontal,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Collection and record source",
    area: "Data",
    description:
      "No collection, record type, owner, workspace, tenant, source, query contract, or permission boundary is connected.",
  },
  {
    title: "Filtering and sorting semantics",
    area: "Behavior",
    description:
      "No field schema, filter operator, sort order, search index, pagination cursor, count, or empty-result contract is configured.",
  },
  {
    title: "Loading, error, and consistency",
    area: "Reliability",
    description:
      "No request state, retry policy, cache rule, stale-data indicator, optimistic update, or consistency evidence exists.",
  },
  {
    title: "Privacy and authorization",
    area: "Governance",
    description:
      "No authenticated viewer, row-level access, sensitive-field redaction, export policy, retention, or audit record is verified.",
  },
  {
    title: "Actions and persistence",
    area: "Operations",
    description:
      "No selection, bulk action, edit, delete, export, notification, audit event, or recovery workflow is available.",
  },
];
export default function ListView() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "ListView is unavailable locally. No collection, record, query, filter, pagination result, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No collection, record, query, filter, selection, edit, delete, export, or data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="list-view-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <List className="size-3.5" aria-hidden="true" />{" "}
                  Collection-view readiness
                </Badge>
                <Badge variant="secondary">No data source</Badge>
              </div>
              <h1
                id="list-view-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                List View readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review collection, query, filtering, pagination, loading, error,
                authorization, privacy, and action contracts without implying
                that records, list results, counts, or mutations exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                List data source is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No collection, API contract, query engine, search index,
                pagination cursor, row-level authorization, persistence layer,
                or operational telemetry is connected. This is a readiness
                workspace, not a populated list.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <List className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No list records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No collection, record type, owner, source, query result, count,
                page, or row is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No query state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No field schema, filter, sort, search index, pagination cursor,
                loading, error, or consistency state is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No list actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No selection, bulk edit, delete, export, notification, retry, or
                data mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Collection-view governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads records, queries a collection, changes filters, selects
              rows, exports data, or saves a list mutation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search List View readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter collection-view requirements"
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
                    <FileWarning className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No collection-view notes match “{query}”.
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
                A production list view needs a typed collection contract,
                authorized query and row access, robust filtering and sorting,
                cursor pagination, loading and error states, consistency and
                cache rules, privacy and redaction, selection safeguards, export
                controls, auditability, and tested recovery. No record or list
                result is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <Filter
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
