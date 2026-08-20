import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Clock3,
  FileText,
  History,
  LockKeyhole,
  MessageSquare,
  RefreshCw,
  ShieldAlert,
  UserRound,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type TaskStatus = "Draft" | "Blocked" | "In review";
type TaskArea = "Core" | "Education" | "Financial";
type TaskRecord = {
  id: string;
  title: string;
  area: TaskArea;
  status: TaskStatus;
  summary: string;
  owner: string;
  due: string;
};

const tasks: readonly TaskRecord[] = [
  {
    id: "core-readiness",
    title: "Core platform readiness review",
    area: "Core",
    status: "In review",
    summary:
      "A local task concept pending authenticated ownership, acceptance criteria, evidence links, and auditable completion review.",
    owner: "Owner unavailable",
    due: "Due date unavailable",
  },
  {
    id: "education-curriculum",
    title: "Curriculum accessibility check",
    area: "Education",
    status: "Blocked",
    summary:
      "A local education task concept pending learner scope, content provenance, review assignment, and privacy-safe progress evidence.",
    owner: "Assignee unavailable",
    due: "Due date unavailable",
  },
  {
    id: "financial-controls",
    title: "Financial control review",
    area: "Financial",
    status: "Draft",
    summary:
      "A local financial task concept pending authorization, non-custodial boundaries, approval evidence, and transaction-safe audit history.",
    owner: "Owner unavailable",
    due: "Due date unavailable",
  },
];
const areas: readonly ("All" | TaskArea)[] = [
  "All",
  "Core",
  "Education",
  "Financial",
];

export default function TaskDetail() {
  const [area, setArea] = useState<(typeof areas)[number]>("All");
  const [selectedId, setSelectedId] = useState(tasks[0].id);
  const [status, setStatus] = useState(
    "Task service unavailable locally. Showing typed task concepts only."
  );
  const filtered = useMemo(
    () => tasks.filter(task => area === "All" || task.area === area),
    [area]
  );
  const selected =
    filtered.find(task => task.id === selectedId) ?? filtered[0] ?? tasks[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No task, comment, assignment, status, retry, notification, or completion mutation was started.`
    );

  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={FileText}
        title="Task detail"
        subtitle="Review local task structure without fabricating ownership, progress, execution, comments, outputs, approvals, or completion evidence."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Task service unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Task detail service unavailable.</strong> No authenticated
            task record, tenant scope, owner, assignee, status history, comment
            stream, output store, approval workflow, retry queue, notification
            source, or completion evidence is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Task concepts remain local. No task detail was refreshed."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset detail
          </Button>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Task-detail preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review task concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show detail structure only. They do
                  not represent a real task, owner, assignee, due date,
                  progress, comment, artifact, approval, retry, notification, or
                  result.
                </p>
              </div>
              <Clock3 className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Task area filter"
            >
              {areas.map(item => (
                <Button
                  key={item}
                  type="button"
                  aria-pressed={area === item}
                  onClick={() => setArea(item)}
                  size="sm"
                  variant={area === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(task => (
                <button
                  key={task.id}
                  type="button"
                  aria-pressed={selected.id === task.id}
                  onClick={() => setSelectedId(task.id)}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === task.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{task.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {task.status}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{task.area}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {task.summary}
                  </p>
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

          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected task concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.area} · {selected.status}
              </p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Owner", selected.owner],
                  ["Due date", selected.due],
                  ["Progress", "Progress measurement unavailable"],
                  ["Comments", "Comment stream unavailable"],
                  ["Outputs", "Artifact store unavailable"],
                  ["Approvals", "Approval history unavailable"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-slate-800 p-3"
                  >
                    <dt className="text-xs text-slate-500">{label}</dt>
                    <dd className="mt-1 text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No execution state, completion evidence, assignee identity,
                comment, artifact, approval, retry, or notification outcome is
                available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Assign task")}
                  variant="outline"
                >
                  <UserRound className="mr-2 h-4 w-4" /> Assign unavailable
                </Button>
                <Button
                  onClick={() => blocked("Add comment")}
                  variant="outline"
                >
                  <MessageSquare className="mr-2 h-4 w-4" /> Comment unavailable
                </Button>
                <Button onClick={() => blocked("Retry task")} variant="outline">
                  <RefreshCw className="mr-2 h-4 w-4" /> Retry unavailable
                </Button>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  Task detail requires tenant-aware authorization, immutable
                  task identity, explicit ownership, validated state
                  transitions, idempotent retries, comment moderation, artifact
                  provenance, approval records, notification controls,
                  privacy-safe history, and auditable completion evidence.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Evidence required</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No completion proof loaded.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Execution blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No queue or runner connected.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <History
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Audit unavailable</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No immutable history source.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <ShieldAlert
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Mutations withheld</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No local action claims success.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}
