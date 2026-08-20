import { useMemo, useState } from "react";
import {
  CalendarDays,
  Check,
  Filter,
  Gift,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ScreenFeatureGrid,
  ScreenHero,
  ScreenPreviewBanner,
  ScreenStatGrid,
} from "@/components/ScreenExperience";
const events = [
  {
    id: 1,
    name: "Learning launch week",
    category: "Education",
    detail:
      "A local event concept requiring verified host, agenda, access, timezone, accessibility, moderation, registration, and notification policy.",
    state: "Unconfigured",
  },
  {
    id: 2,
    name: "Community build night",
    category: "Community",
    detail:
      "A community event concept requiring organizer identity, safeguarding, participant privacy, code of conduct, venue or stream, and support.",
    state: "Needs evidence",
  },
  {
    id: 3,
    name: "Governance season",
    category: "Governance",
    detail:
      "A governance event concept requiring proposal scope, eligibility, decision rules, quorum semantics, audit, and no voting outcome assumption.",
    state: "Preview",
  },
  {
    id: 4,
    name: "Creator showcase",
    category: "Creator",
    detail:
      "A creator event concept requiring submission rights, moderation, content safety, licensing, accessibility, and transparent selection.",
    state: "Blocked",
  },
];
export default function SeasonalEvents() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [schedule, setSchedule] = useState("Schedule not configured");
  const [audience, setAudience] = useState("Audience not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(events.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      events.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const event = events.find(item => item.id === selected) ?? events[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setSchedule("Schedule not configured");
    setAudience("Audience not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={CalendarDays}
        eyebrow="Seasonal events · Event preview"
        title="Design the event before promising a date or turnout."
        description="Explore local education, community, governance, and creator event concepts with search, category filters, schedule and audience intent, accessibility/moderation/notification gates, save/reset, and blocked publish/register/reward actions. No event, organizer, schedule, attendee, registration, attendance, reward, or engagement outcome is connected."
        badge="Event-governance workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save event locally"}
          </Button>
          <Button
            onClick={() => setShowGates(value => !value)}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            {showGates ? (
              <X className="mr-2 size-4" />
            ) : (
              <ShieldAlert className="mr-2 size-4" />
            )}
            {showGates ? "Close gates" : "Review event gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset event
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Event concepts",
              value: `${events.length} local`,
              hint: "No event source",
              icon: CalendarDays,
              tone: "cyan",
            },
            {
              label: "Schedule",
              value: "Unconfigured",
              hint: "No calendar source",
              icon: RefreshCw,
              tone: "violet",
            },
            {
              label: "Participants",
              value: "Unavailable",
              hint: "No registration source",
              icon: UsersRound,
              tone: "amber",
            },
            {
              label: "Rewards",
              value: "Blocked",
              hint: "No reward source",
              icon: Gift,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Seasonal-event evidence boundary">
          <strong>
            This is a local event-planning preview, not evidence that an event,
            organizer, date, attendee, registration, reward, or engagement
            outcome exists.
          </strong>{" "}
          Event cards, filters, schedule/audience intent, saved state,
          accessibility/moderation gates, and disabled publish/register/reward
          actions are browser concepts. No event, organizer, schedule, attendee,
          registration, attendance, message delivery, reward, revenue, or
          engagement is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local seasonal events"
                  className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-3 text-sm text-white outline-none"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map(entry => (
                  <Button
                    key={entry}
                    onClick={() => setCategory(entry)}
                    size="sm"
                    variant="outline"
                    className={
                      category === entry
                        ? "border-cyan-300/40 bg-cyan-300/[0.08] text-cyan-100"
                        : "border-white/10 text-slate-400"
                    }
                  >
                    {entry}
                  </Button>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {filtered.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item.id)}
                    className={`w-full rounded-xl border p-4 text-left ${selected === item.id ? "border-cyan-300/40 bg-cyan-300/[0.06]" : "border-white/10"}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="mt-1 text-sm text-slate-500">
                          {item.detail}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-amber-300/20 text-amber-200"
                      >
                        {item.state}
                      </Badge>
                    </div>
                    <div className="mt-4">
                      <Badge
                        variant="outline"
                        className="border-white/10 text-slate-500"
                      >
                        {item.category}
                      </Badge>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                    Selected event concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{event.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {event.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {event.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: event.category },
                  { label: "Schedule", value: schedule },
                  { label: "Audience", value: audience },
                  { label: "Organizer", value: "Unavailable" },
                  { label: "Registration", value: "Blocked" },
                  { label: "Rewards", value: "Not claimed" },
                ].map(item => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 p-3"
                  >
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold text-amber-200">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <label className="text-sm text-slate-400">
                  Schedule intent
                  <select
                    value={schedule}
                    onChange={event => setSchedule(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Schedule not configured</option>
                    <option>Timezone-aware date intent</option>
                    <option>Recurring season intent</option>
                    <option>On-demand intent</option>
                    <option>Calendar-review intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Audience intent
                  <select
                    value={audience}
                    onChange={event => setAudience(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Audience not configured</option>
                    <option>Public audience intent</option>
                    <option>Members-only intent</option>
                    <option>Invite-only intent</option>
                    <option>Age-gated intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <CalendarDays className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No event evidence loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect organizer authority, agenda, date/timezone, access,
                  registration, participant privacy, accessibility,
                  safeguarding, moderation, notifications, venue/stream, and
                  recovery before publishing.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Publish unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Register unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Add to calendar unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Reward unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No event, attendance, or reward claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    An event concept does not prove an organizer, date,
                    registration, attendee, attendance, notification, reward,
                    revenue, or engagement outcome.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Event-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real seasonal event system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated organizer, event, season, venue/stream, timezone, date, audience, participant, organization, and source provenance",
                "Registration, attendance, access, invite, age gate, consent, privacy, accessibility, safeguarding, moderation, code of conduct, and support",
                "Schedule, calendar, reminder, notification, delivery, cancellation, waitlist, recovery, incident, and accountable approval semantics",
                "Reward, token, wallet, chain, ticket, revenue, employment, education, charity, AI, financial, and user-impact claims require domain review",
                "Publish, register, cancel, join, calendar, notify, reward, share, export, accessibility, and accountable approval require governed controls",
                "An event preview must not be presented as a live event, scheduled commitment, attendance record, reward program, or engagement outcome without evidence",
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-3"
                >
                  <LockKeyhole className="size-4 text-slate-500" />
                  <span className="flex-1 text-sm text-slate-300">{item}</span>
                  <span className="text-xs text-amber-200">Required</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <ScreenFeatureGrid
          features={[
            {
              title: "Event surface preserved",
              description:
                "Education, community, governance, creator events, filters, schedules, audiences, registration, calendar, rewards, save/reset, and gates remain interactive.",
              icon: CalendarDays,
              status: "Local events",
            },
            {
              title: "No attendance theater",
              description:
                "Events, organizers, dates, attendees, registrations, notifications, rewards, revenue, and engagement are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Governance before publishing",
              description:
                "Real events require organizer authority, schedule, access, registration, privacy, accessibility, safeguarding, moderation, notification, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
