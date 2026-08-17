import { useMemo, useState } from "react";
import {
  CalendarDays,
  CircleSlash2,
  Clock3,
  Edit3,
  LockKeyhole,
  Send,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ContentChannel = "All" | "Editorial" | "Social" | "Education";
type ScheduleState = "All" | "Draft" | "Review" | "Unavailable";

type ScheduleConcept = {
  id: string;
  title: string;
  channel: Exclude<ContentChannel, "All">;
  state: Exclude<ScheduleState, "All">;
  summary: string;
  content: string;
  owner: string;
  date: string;
  publish: string;
  notification: string;
};

const schedules: ScheduleConcept[] = [
  {
    id: "editorial-brief",
    title: "Editorial brief",
    channel: "Editorial",
    state: "Review",
    summary:
      "A local schedule structure for educational writing with review ownership and source checks.",
    content: "Content asset unavailable",
    owner: "Content owner unavailable",
    date: "Scheduled date unavailable",
    publish: "Publication state unavailable",
    notification: "Notification state unavailable",
  },
  {
    id: "social-preview",
    title: "Social preview",
    channel: "Social",
    state: "Draft",
    summary:
      "A draft schedule structure for channel-specific content pending approval and delivery credentials.",
    content: "Content asset unavailable",
    owner: "Content owner unavailable",
    date: "Scheduled date unavailable",
    publish: "Publication state unavailable",
    notification: "Notification state unavailable",
  },
  {
    id: "learning-release",
    title: "Learning release",
    channel: "Education",
    state: "Unavailable",
    summary:
      "A local schedule concept for course material pending curriculum ownership, safeguarding, and release controls.",
    content: "Content asset unavailable",
    owner: "Content owner unavailable",
    date: "Scheduled date unavailable",
    publish: "Publication state unavailable",
    notification: "Notification state unavailable",
  },
];

const channels: ContentChannel[] = ["All", "Editorial", "Social", "Education"];
const states: ScheduleState[] = ["All", "Review", "Draft", "Unavailable"];

export default function ContentCalendar() {
  const [channel, setChannel] = useState<ContentChannel>("All");
  const [state, setState] = useState<ScheduleState>("All");
  const [selectedId, setSelectedId] = useState(schedules[0].id);
  const [status, setStatus] = useState(
    "Calendar service unavailable. Showing local schedule concepts only."
  );

  const filtered = useMemo(
    () =>
      schedules.filter(
        schedule =>
          (channel === "All" || schedule.channel === channel) &&
          (state === "All" || schedule.state === state)
      ),
    [channel, state]
  );
  const selected =
    filtered.find(schedule => schedule.id === selectedId) ??
    filtered[0] ??
    schedules[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No content, calendar, approval, publication, audience delivery, or notification request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={CalendarDays}
        title="Content calendar"
        subtitle="Review local schedule concepts without fabricated content, dates, owners, publication, audience, or notification states."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Calendar service unavailable.</strong> No content registry,
            approval workflow, channel credential, timezone rule, publishing
            service, or notification channel is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Calendar service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset calendar
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Calendar preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review schedule concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show scheduling structure only.
                  They do not represent real content, dates, approvals,
                  publications, audience delivery, or reminders.
                </p>
              </div>
              <CalendarDays className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Content calendar channel filter"
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
              aria-label="Content calendar state filter"
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
              {filtered.map(schedule => (
                <button
                  aria-pressed={selected.id === schedule.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === schedule.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={schedule.id}
                  onClick={() => setSelectedId(schedule.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{schedule.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {schedule.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">
                    {schedule.channel}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {schedule.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local schedule fixtures match these filters.
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
                Selected schedule
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.channel} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Content", selected.content],
                  ["Owner", selected.owner],
                  ["Date", selected.date],
                  ["Publish", selected.publish],
                  ["Notification", selected.notification],
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
                No content asset, timezone, date, owner, approval, publication,
                delivery receipt, or notification is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Edit schedule")}
                  variant="outline"
                >
                  <Edit3 className="mr-2 h-4 w-4" /> Edit unavailable
                </Button>
                <Button
                  onClick={() => blocked("Schedule content")}
                  variant="outline"
                >
                  <Clock3 className="mr-2 h-4 w-4" /> Schedule unavailable
                </Button>
                <Button
                  onClick={() => blocked("Publish content")}
                  variant="outline"
                >
                  <Send className="mr-2 h-4 w-4" /> Publish unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Scheduling requires content authorization, timezone rules,
                  approval ownership, channel credentials, idempotent
                  publication, and retry states.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Publish and notification transitions must be auditable,
                  consent-aware, and isolated from fabricated delivery results.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No calendar sync, audience targeting, reminder, or delivery
                  operation is available from this preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
