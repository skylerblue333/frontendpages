import { useMemo, useState } from "react";
import {
  CalendarClock,
  CircleSlash2,
  Clock3,
  KeyRound,
  LockKeyhole,
  Play,
  Plus,
  ShieldCheck,
  Square,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type JobChannel = "All" | "Editorial" | "Social" | "Education";
type JobState = "All" | "Draft" | "Review" | "Unavailable";

type SchedulingJob = {
  id: string;
  title: string;
  channel: Exclude<JobChannel, "All">;
  state: Exclude<JobState, "All">;
  summary: string;
  content: string;
  schedule: string;
  timezone: string;
  credentials: string;
  publication: string;
  delivery: string;
};

const jobs: SchedulingJob[] = [
  {
    id: "editorial-job",
    title: "Editorial publish job",
    channel: "Editorial",
    state: "Review",
    summary:
      "A local job structure for content publication pending approval, timezone validation, and delivery verification.",
    content: "Content asset unavailable",
    schedule: "Schedule time unavailable",
    timezone: "Timezone unavailable",
    credentials: "Channel credentials unavailable",
    publication: "Publication state unavailable",
    delivery: "Delivery verification unavailable",
  },
  {
    id: "social-job",
    title: "Social distribution job",
    channel: "Social",
    state: "Draft",
    summary:
      "A draft automation concept for channel distribution pending authorization, idempotency, and retry policy.",
    content: "Content asset unavailable",
    schedule: "Schedule time unavailable",
    timezone: "Timezone unavailable",
    credentials: "Channel credentials unavailable",
    publication: "Publication state unavailable",
    delivery: "Delivery verification unavailable",
  },
  {
    id: "education-job",
    title: "Education release job",
    channel: "Education",
    state: "Unavailable",
    summary:
      "A local job concept for learning material pending curriculum ownership, safeguarding, and release controls.",
    content: "Content asset unavailable",
    schedule: "Schedule time unavailable",
    timezone: "Timezone unavailable",
    credentials: "Channel credentials unavailable",
    publication: "Publication state unavailable",
    delivery: "Delivery verification unavailable",
  },
];

const channels: JobChannel[] = ["All", "Editorial", "Social", "Education"];
const states: JobState[] = ["All", "Review", "Draft", "Unavailable"];

export default function ContentScheduling() {
  const [channel, setChannel] = useState<JobChannel>("All");
  const [state, setState] = useState<JobState>("All");
  const [selectedId, setSelectedId] = useState(jobs[0].id);
  const [status, setStatus] = useState(
    "Scheduling service unavailable. Showing local job concepts only."
  );

  const filtered = useMemo(
    () =>
      jobs.filter(
        job =>
          (channel === "All" || job.channel === channel) &&
          (state === "All" || job.state === state)
      ),
    [channel, state]
  );
  const selected =
    filtered.find(job => job.id === selectedId) ?? filtered[0] ?? jobs[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No automation job, content, credentials, publication, delivery, notification, or retry request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={CalendarClock}
        title="Content scheduling"
        subtitle="Review local scheduling-operation concepts without fabricated jobs, dates, credentials, publication, delivery, or automation states."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Scheduling service unavailable.</strong> No job registry,
            content authorization, timezone engine, channel credential store,
            publication service, retry worker, or delivery verifier is
            connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Scheduling service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset jobs
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Operations preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review scheduling jobs
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show scheduling structure only.
                  They do not represent real jobs, dates, credentials,
                  publications, notifications, retries, or delivered content.
                </p>
              </div>
              <CalendarClock className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Scheduling channel filter"
            >
              {channels.map(item => (
                <Button
                  aria-pressed={channel === item}
                  key={item}
                  onClick={() => setChannel(item)}
                  size="sm"
                  variant={channel === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Scheduling job state filter"
            >
              {states.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(job => (
                <button
                  aria-pressed={selected.id === job.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === job.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={job.id}
                  onClick={() => setSelectedId(job.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{job.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {job.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{job.channel}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {job.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local scheduling fixtures match these filters.
                </p>
              )}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>

          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected job
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.channel} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Content", selected.content],
                  ["Schedule", selected.schedule],
                  ["Timezone", selected.timezone],
                  ["Credentials", selected.credentials],
                  ["Publication", selected.publication],
                  ["Delivery", selected.delivery],
                ].map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No content asset, schedule time, timezone, credential,
                publication, delivery receipt, or retry state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button onClick={() => blocked("Create job")} variant="outline">
                  <Plus className="mr-2 h-4 w-4" /> Create unavailable
                </Button>
                <Button onClick={() => blocked("Run job")} variant="outline">
                  <Play className="mr-2 h-4 w-4" /> Run unavailable
                </Button>
                <Button onClick={() => blocked("Cancel job")} variant="outline">
                  <Square className="mr-2 h-4 w-4" /> Cancel unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Scheduling requires authorization, timezone correctness,
                  idempotency, credentials isolation, retries, failure states,
                  audit logs, and delivery verification.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Job, publication, credential, notification, and retry
                  transitions must be auditable and isolated from fabricated
                  delivery results.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <KeyRound className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No credential use, channel publish, audience targeting,
                  reminder, or retry operation is available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Scheduling state remains explicitly unavailable until
                  authoritative services are connected.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
