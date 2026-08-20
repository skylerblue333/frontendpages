import { useMemo, useState } from "react";
import {
  AlertTriangle,
  FileSearch,
  GitBranch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Node identity and provenance",
    area: "Integrity",
    description:
      "No people, organizations, accounts, profiles, entities, ownership, source system, consent, or last-verified timestamp is connected.",
  },
  {
    title: "Relationship semantics",
    area: "Semantics",
    description:
      "No relationship type, direction, strength, confidence, effective date, evidence, moderation state, or duplicate-resolution policy is defined.",
  },
  {
    title: "Privacy and visibility",
    area: "Privacy",
    description:
      "No audience, permission, consent purpose, sensitive attribute, redaction rule, retention period, export, or deletion control is available.",
  },
  {
    title: "Graph quality and performance",
    area: "Operations",
    description:
      "No node count, edge count, query scope, pagination, stale-data indicator, indexing strategy, layout limit, or rendering performance measurement exists.",
  },
  {
    title: "Actions and auditability",
    area: "Safety",
    description:
      "No create, edit, merge, delete, invite, follow, block, export, recommendation, or relationship mutation is connected or persisted.",
  },
];
export default function NetworkGraph() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Network data is unavailable locally. No nodes, relationships, profiles, accounts, or graph records were loaded or saved."
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
      `${action} is unavailable locally. No node, relationship, profile, account, privacy, or graph-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="network-graph-title"
    >
      <div data-ui-polish="batch-197" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <GitBranch className="size-3.5" aria-hidden="true" />{" "}
                  Relationship-readiness workspace
                </Badge>
                <Badge variant="secondary">No graph data</Badge>
              </div>
              <h1
                id="network-graph-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                NetworkGraph readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review node provenance, relationship semantics, privacy, graph
                quality, performance, auditability, and action boundaries
                without implying that people, accounts, profiles, entities, or
                connections exist.
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
                Network data is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No graph store, identity directory, relationship service,
                permissions layer, moderation workflow, analytics source, or
                persistence layer is connected. This workspace cannot render,
                infer, recommend, create, edit, merge, delete, or claim
                relationships.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Users className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No nodes</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No people, organizations, accounts, profiles, entities,
                ownership, or source records are loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <GitBranch
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No relationships</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No edge, direction, type, strength, confidence, evidence, or
                effective-date state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No graph actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No add, edit, merge, delete, invite, follow, block, export, or
                recommendation action is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Graph-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              connects profiles, loads a graph, infers relationships, or saves
              graph records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search NetworkGraph readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter graph requirements"
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
                  No graph notes match “{query}”.
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
                Production graph functionality requires verified node
                provenance, explicit relationship semantics, permission and
                consent controls, sensitive-data redaction, duplicate-safe graph
                integrity, bounded queries and layouts, moderation, audit
                history, and clear action feedback. No people, accounts,
                profiles, entities, connections, or graph records are claimed
                here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <Info
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
