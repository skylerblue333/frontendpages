import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Activity,
  ArrowDown,
  ClipboardList,
  Info,
  LockKeyhole,
  Network,
  Plus,
  Search,
  ShieldAlert,
  Settings2,
  XCircle,
} from "lucide-react";

type Stage = "all" | "planning" | "blocked";
type Item = {
  id: string;
  title: string;
  area: string;
  description: string;
  stage: Exclude<Stage, "all">;
};
const ITEMS: readonly Item[] = [
  {
    id: "auth",
    title: "Authentication contract",
    area: "Security",
    description:
      "Identity, role, and authorization evidence is required before dependency data is exposed.",
    stage: "blocked",
  },
  {
    id: "api",
    title: "Graph data contract",
    area: "Platform",
    description:
      "Nodes, edges, ownership, versions, and failure semantics need a verified source.",
    stage: "planning",
  },
  {
    id: "audit",
    title: "Change audit trail",
    area: "Governance",
    description:
      "Create, edit, remove, and dependency changes require accountable audit records.",
    stage: "blocked",
  },
  {
    id: "recovery",
    title: "Recovery and export",
    area: "Operations",
    description:
      "Backup, restore, export, and deletion behavior need tested persistence workflows.",
    stage: "planning",
  },
];

export default function DependencyGraph() {
  const [query, setQuery] = useState("");
  const [stage, setStage] = useState<Stage>("all");
  const [status, setStatus] = useState(
    "Dependency graph service unavailable locally. No graph, task, dependency, user, or persistence mutation was started."
  );
  const items = useMemo(
    () =>
      ITEMS.filter(item => {
        const matchesQuery =
          !query ||
          `${item.title} ${item.area}`
            .toLowerCase()
            .includes(query.toLowerCase());
        return matchesQuery && (stage === "all" || item.stage === stage);
      }),
    [query, stage]
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No graph, task, dependency, user, or persistence mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="dependency-graph-title"
    >
      <div data-ui-polish="batch-186" className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge variant="outline" className="border-sky-400/30 text-sky-200">
            PLANNING READINESS PREVIEW
          </Badge>
          <h1
            id="dependency-graph-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <Network className="h-7 w-7 text-sky-300" aria-hidden="true" />
            Dependency graph
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review dependency-management requirements without inventing tasks,
            graph edges, owners, completion states, or saved project data.
          </p>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Dependency graph service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated project source, task store, dependency API,
                owner directory, persistence layer, audit trail, or
                collaboration service is connected. The planning items below are
                requirements, not current project records.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/50 p-5">
            <Network className="mb-3 h-5 w-5 text-sky-300" aria-hidden="true" />
            <p className="text-lg font-semibold">Graph unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No nodes, edges, cycles, critical path, or dependency health is
              loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <ClipboardList
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Tasks unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No task, owner, due date, status, or completion record is
              authoritative.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Activity
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Health unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No cycle detection, bottleneck, risk, or project metric is
              calculated.
            </p>
          </Card>
        </section>
        <section
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Dependency filters"
        >
          <label htmlFor="dependency-search" className="sr-only">
            Search dependency requirements
          </label>
          <div className="relative min-w-[220px] flex-1">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="dependency-search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search planning requirements"
              className="w-full rounded-xl border border-border/40 bg-card/40 py-3 pl-10 pr-3 text-sm outline-none ring-primary/40 focus:ring-2"
            />
          </div>
          {(["all", "planning", "blocked"] as const).map(value => (
            <Button
              key={value}
              type="button"
              variant={stage === value ? "default" : "outline"}
              onClick={() => setStage(value)}
            >
              {value === "all"
                ? "All"
                : value === "planning"
                  ? "Planning"
                  : "Blocked"}
            </Button>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => announceUnavailable("Graph settings")}
          >
            <Settings2 className="mr-2 h-4 w-4" aria-hidden="true" />
            Settings unavailable
          </Button>
        </section>
        <section aria-labelledby="requirements-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="requirements-title" className="text-xl font-semibold">
                Dependency requirements
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Local filter state only. Nothing is saved or queried.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => announceUnavailable("New task")}
            >
              <Plus className="mr-2 h-4 w-4" aria-hidden="true" />
              New task unavailable
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {items.map(item => (
              <Card key={item.id} className="border-border/40 bg-card/40 p-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-secondary/60 p-3">
                    <ArrowDown
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold">{item.title}</h3>
                      <Badge
                        variant="outline"
                        className="border-muted-foreground/30 text-muted-foreground"
                      >
                        {item.stage}
                      </Badge>
                    </div>
                    <p className="mt-1 text-xs text-primary">{item.area}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      className="mt-4"
                      onClick={() =>
                        announceUnavailable(`Manage ${item.title}`)
                      }
                    >
                      Manage unavailable
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
            {items.length === 0 && (
              <Card className="border-border/40 bg-card/30 p-8 text-center md:col-span-2">
                <XCircle
                  className="mx-auto mb-3 h-7 w-7 text-muted-foreground"
                  aria-hidden="true"
                />
                <p className="font-semibold">No planning requirements found</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Search is local and does not query project records.
                </p>
              </Card>
            )}
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-2">
          <Card className="border-border/40 bg-card/30 p-5">
            <div className="flex items-start gap-3">
              <LockKeyhole
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold">Authorization boundary</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  A production graph requires project-scoped authorization,
                  least privilege, tenant isolation, safe mutations, audit
                  logging, and deletion controls.
                </p>
              </div>
            </div>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <div className="flex items-start gap-3">
              <Info
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold">No project claim</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  This page does not represent a real project, task, dependency
                  graph, owner, risk, or completion status.
                </p>
              </div>
            </div>
          </Card>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      </div>
    </main>
  );
}
