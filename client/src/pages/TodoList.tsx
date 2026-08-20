import { useMemo, useState } from "react";
import {
  CheckCircle2,
  CircleSlash2,
  ClipboardList,
  LockKeyhole,
  Plus,
  Search,
  Settings2,
  ShieldAlert,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/PageHeader";

type TaskConcept = { id: string; title: string; state: string };
const concepts: TaskConcept[] = [
  {
    id: "personal",
    title: "Personal task concept",
    state: "Task data unavailable",
  },
  {
    id: "project",
    title: "Project task concept",
    state: "Task data unavailable",
  },
  {
    id: "review",
    title: "Review task concept",
    state: "Task data unavailable",
  },
];
export default function TodoList() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Task service unavailable. Showing local task structure only."
  );
  const filtered = useMemo(
    () =>
      concepts.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );
  const blocked = (a: string) =>
    setStatus(
      `${a} is unavailable locally. No task, account, notification, collaboration, settings, synchronization, or persistence mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={ClipboardList}
        title="Todo list"
        subtitle="Review local task structure without fabricated tasks, owners, due dates, completion, collaboration, or persistence outcomes."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Task service unavailable.</strong> No authenticated task
          store, collaboration, reminders, synchronization, settings, or
          notification endpoint is connected.
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Badge variant="outline">Local task catalog</Badge>
              <h2 className="mt-3 text-2xl font-semibold">Tasks unavailable</h2>
              <p className="mt-2 text-sm text-slate-400">
                Search filters local concepts only. No task data is queried or
                persisted.
              </p>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => blocked("Create task")} variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                New unavailable
              </Button>
              <Button
                onClick={() => blocked("Open task settings")}
                variant="outline"
              >
                <Settings2 className="mr-2 h-4 w-4" />
                Settings unavailable
              </Button>
            </div>
          </div>
          <div className="relative mt-6">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <Input
              aria-label="Search tasks"
              className="pl-9"
              onChange={e => setQuery(e.target.value)}
              placeholder="Search local task concepts"
              value={query}
            />
          </div>
          <div className="mt-5 space-y-3">
            {filtered.map(item => (
              <div
                className="rounded-xl border border-slate-800 p-4"
                key={item.id}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-slate-500" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-400">
                      {item.state}. Owner, due date, priority, completion,
                      activity, and notes unavailable.
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="rounded-xl border border-slate-800 p-8 text-center text-sm text-slate-400">
                No local concepts match this search.
              </div>
            )}
          </div>
        </Card>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [ShieldAlert, "No task data"],
            [LockKeyhole, "No collaboration"],
            [CircleSlash2, "No persistence"],
          ].map(([Icon, label]) => (
            <Card
              className="border-slate-800 bg-slate-900/75 p-5"
              key={String(label)}
            >
              <Icon className="h-5 w-5 text-cyan-200" />
              <h2 className="mt-3 font-semibold">{String(label)}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                No task, owner, completion, reminder, collaboration,
                notification, settings, or account operation is available
                locally.
              </p>
            </Card>
          ))}
        </div>
        <p
          aria-live="polite"
          className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400"
        >
          {status}
        </p>
      </div>
    </div>
  );
}
