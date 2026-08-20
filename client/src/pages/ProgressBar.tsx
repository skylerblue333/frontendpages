import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
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
    title: "Task and milestone provenance",
    area: "Evidence",
    description:
      "No project, task, milestone, owner, source, due date, dependency, completion criterion, or current progress record is connected.",
  },
  {
    title: "Calculation and weighting semantics",
    area: "Method",
    description:
      "No denominator, weighting, status taxonomy, roll-up rule, time basis, confidence, percentage, or completion definition is verified.",
  },
  {
    title: "Ownership, privacy, and authorization",
    area: "Controls",
    description:
      "No authenticated owner, role, audience, consent, visibility, sensitive-data classification, or access decision exists.",
  },
  {
    title: "Loading, correction, and recovery",
    area: "Reliability",
    description:
      "No source request, stale-data rule, retry, correction workflow, audit event, dependency failure, or recovery path is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No update, complete, reopen, assign, reorder, export, publish, reset, or progress, task, project, or personal-data mutation is connected or persisted.",
  },
];
export default function ProgressBar() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Progress Bar is unavailable locally. No task, milestone, owner, percentage, status, calculation, project, completion, or personal-data record was loaded or changed."
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
      `${action} is unavailable locally. No progress, task, milestone, calculation, project, ownership, privacy, or personal-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="progress-bar-title"
    >
      <div data-ui-polish="batch-200" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <SlidersHorizontal className="size-3.5" aria-hidden="true" />{" "}
                  Progress-readiness workspace
                </Badge>
                <Badge variant="secondary">No progress state</Badge>
              </div>
              <h1
                id="progress-bar-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                ProgressBar readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review task and milestone provenance, completion criteria,
                calculation and weighting semantics, ownership, privacy,
                recovery, and persistence boundaries without implying that a
                project, progress percentage, status, or completion record
                exists.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Progress Bar is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No project source, task system, milestone registry, calculation
                engine, ownership policy, privacy control, recovery path, or
                persistence layer is connected. This workspace cannot update,
                complete, reopen, assign, reorder, export, publish, reset, or
                claim progress.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <CheckCircle2
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No progress state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No project, task, milestone, owner, source, due date,
                dependency, criterion, or progress record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No calculation state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No denominator, weighting, status taxonomy, roll-up rule,
                percentage, or completion definition is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No progress actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No update, complete, reopen, assign, reorder, export, publish,
                reset, or progress mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Progress governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads project data, calculates percentages, updates tasks, or
              saves progress records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search ProgressBar readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter progress requirements"
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
                  No progress requirements match “{query}”.
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
                Production progress reporting requires authoritative project and
                task sources, explicit completion criteria, denominator and
                weighting definitions, status and roll-up semantics, ownership
                and privacy controls, freshness and stale-data handling,
                correction and recovery workflows, audit history, and
                transparent user-facing calculation explanations. No progress,
                percentage, milestone, task, project, or personal-data record is
                claimed here.
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
