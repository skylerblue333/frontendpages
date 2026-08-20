import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CalendarCheck,
  ClipboardList,
  FileSearch,
  GitBranch,
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
    title: "Scope, owner, and acceptance criteria",
    area: "Planning",
    description:
      "No project, milestone, work item, owner, target date, dependency, acceptance criterion, status, or source-of-truth record is connected.",
  },
  {
    title: "Progress and evidence",
    area: "Evidence",
    description:
      "No completed work, percentage, deliverable, test result, review, approval, link, artifact, or timestamp is verified.",
  },
  {
    title: "Dependencies and risk",
    area: "Delivery",
    description:
      "No dependency graph, blocker, risk, assumption, impact, mitigation, escalation, or due-date policy is configured.",
  },
  {
    title: "Change control and history",
    area: "Governance",
    description:
      "No scope change, baseline, version, audit event, approval, comment, notification, or rollback history exists.",
  },
  {
    title: "Permissions and privacy",
    area: "Security",
    description:
      "No workspace, role, viewer, editor, reviewer, sharing, retention, export, deletion, or access-audit policy is verified.",
  },
];
export default function MilestoneTracking() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Milestone tracking is unavailable locally. No project, milestone, owner, status, progress, risk, or delivery record was loaded or saved."
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
      `${action} is unavailable locally. No project, milestone, status, progress, owner, dependency, risk, or delivery-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="milestone-tracking-title"
    >
      <div data-ui-polish="batch-195" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <CalendarCheck className="size-3.5" aria-hidden="true" />{" "}
                  Delivery-readiness workspace
                </Badge>
                <Badge variant="secondary">No project data</Badge>
              </div>
              <h1
                id="milestone-tracking-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MilestoneTracking readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review milestone scope, ownership, acceptance criteria, progress
                evidence, dependencies, risk, change control, permissions, and
                auditability without implying that project work or delivery
                status exists.
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
                Milestone tracking is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No project system, work-item source, delivery evidence,
                dependency graph, risk register, permissions service, or
                persistence layer is connected. This workspace cannot create,
                update, complete, or report a milestone.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <ClipboardList
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No project records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No project, milestone, work item, owner, target date, status, or
                acceptance criterion is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <GitBranch
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No progress evidence</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No deliverable, test result, review, approval, blocker,
                dependency, or timestamp is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Users className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No delivery actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No create, assign, update, complete, comment, notify, export, or
                project-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Milestone governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              opens a project, assigns an owner, changes status, records
              progress, creates a dependency, or saves delivery data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search milestone tracking readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter milestone requirements"
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
                  No milestone notes match “{query}”.
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
                A production tracker needs a source of truth, explicit scope and
                acceptance criteria, accountable owners, verified progress
                evidence, dependency and risk handling, change history,
                permission boundaries, notifications, accessibility, and
                recoverable audit records. No project, milestone, owner, status,
                progress, or delivery record is claimed here.
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
