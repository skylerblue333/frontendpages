import { useMemo, useState } from "react";
import {
  Bell,
  CalendarDays,
  Check,
  Globe2,
  LockKeyhole,
  MapPin,
  RefreshCw,
  Search,
  ShieldAlert,
  Ticket,
  Users,
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

type EventState = "Unconfigured" | "Preview" | "Needs evidence" | "Test-only";
interface EventConcept {
  id: number;
  name: string;
  format: string;
  state: EventState;
  detail: string;
}
const concepts: EventConcept[] = [
  {
    id: 1,
    name: "Community gathering concept",
    format: "Community",
    state: "Unconfigured",
    detail:
      "Requires organizer identity, venue or access control, schedule, moderation, attendee consent, capacity, safety plan, and notification provenance.",
  },
  {
    id: 2,
    name: "Creator workshop concept",
    format: "Workshop",
    state: "Needs evidence",
    detail:
      "Requires instructor authorization, content rights, registration, accessibility, recordings, cancellation policy, and attendee support.",
  },
  {
    id: 3,
    name: "Marketplace launch concept",
    format: "Launch",
    state: "Preview",
    detail:
      "Requires seller identity, product claims, ticketing, payment, refund, location, safety, and customer-support controls.",
  },
  {
    id: 4,
    name: "Test event fixture",
    format: "Test-only",
    state: "Test-only",
    detail:
      "A fixture cannot prove a scheduled event, attendee, ticket, payment, location, reminder, attendance, or community outcome.",
  },
];
export default function SocialEvents() {
  const [query, setQuery] = useState("");
  const [format, setFormat] = useState("All");
  const [selected, setSelected] = useState(1);
  const [schedule, setSchedule] = useState("Schedule not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const formats = [
    "All",
    ...Array.from(new Set(concepts.map(item => item.format))),
  ];
  const filtered = useMemo(
    () =>
      concepts.filter(
        item =>
          (format === "All" || item.format === format) &&
          `${item.name} ${item.format} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [format, query]
  );
  const event = concepts.find(item => item.id === selected) ?? concepts[0];
  const reset = () => {
    setQuery("");
    setFormat("All");
    setSelected(1);
    setSchedule("Schedule not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={CalendarDays}
        eyebrow="Social events · Community planning preview"
        title="Design event states without claiming an event is scheduled."
        description="Explore a local events workspace with community, workshop, launch, and test concepts; format filters; schedule, location, attendee, notification, safety, privacy, payment, save/reset, and blocked create, RSVP, invite, and publish actions. No organizer, event, attendee, ticket, payment, venue, reminder, attendance, or community outcome is connected."
        badge="Evidence-bounded social events workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save event view"}
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
            Reset view
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Events",
              value: `${concepts.length} local`,
              hint: "No event source",
              icon: CalendarDays,
              tone: "cyan",
            },
            {
              label: "Attendees",
              value: "Unavailable",
              hint: "No registration",
              icon: Users,
              tone: "violet",
            },
            {
              label: "Location",
              value: "Unconfigured",
              hint: "No venue source",
              icon: MapPin,
              tone: "amber",
            },
            {
              label: "Tickets",
              value: "Blocked",
              hint: "No payment source",
              icon: Ticket,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Event evidence boundary">
          <strong>
            This is a local event-design preview, not evidence that an event,
            organizer, attendee, schedule, venue, ticket, payment, reminder,
            attendance, or community outcome exists.
          </strong>{" "}
          Event cards, format filters, schedule intent, saved state, and
          disabled create/RSVP/invite/publish actions are browser concepts. No
          identity, location, notification, payment, safety, or attendance
          record is asserted.
        </ScreenPreviewBanner>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-[1fr_0.8fr]">
              <label className="text-sm font-semibold text-slate-300">
                <span className="flex items-center gap-2">
                  <Search className="size-4 text-slate-500" />
                  Search event concepts
                </span>
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search community, workshop, launch..."
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                />
              </label>
              <label className="text-sm font-semibold text-slate-300">
                Schedule intent
                <select
                  value={schedule}
                  onChange={event => setSchedule(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                >
                  <option>Schedule not configured</option>
                  <option>One-time intent</option>
                  <option>Recurring intent</option>
                  <option>Timezone intent</option>
                  <option>Registration window intent</option>
                </select>
              </label>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {formats.map(entry => (
                <Button
                  key={entry}
                  onClick={() => setFormat(entry)}
                  size="sm"
                  variant="outline"
                  className={
                    format === entry
                      ? "border-cyan-300/40 bg-cyan-300/[0.08] text-cyan-100"
                      : "border-white/10 text-slate-400"
                  }
                >
                  {entry}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Event concepts
              </p>
              <h2 className="mt-2 text-2xl font-black">
                {filtered.length} local event{filtered.length === 1 ? "" : "s"}
              </h2>
              <div className="mt-6 space-y-3">
                {filtered.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item.id)}
                    className={`w-full rounded-xl border p-4 text-left ${selected === item.id ? "border-cyan-300/40 bg-cyan-300/[0.06]" : "border-white/10"}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-500">
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
                    <Badge
                      variant="outline"
                      className="mt-4 border-white/10 text-slate-500"
                    >
                      {item.format}
                    </Badge>
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
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Organizer", value: "Unavailable" },
                  { label: "Schedule", value: schedule },
                  { label: "Location", value: "Unconfigured" },
                  { label: "Attendees", value: "No registration" },
                  { label: "Notifications", value: "No provider" },
                  { label: "Safety", value: "Unverified" },
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
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Venue and access", icon: MapPin },
                  { label: "Registration and consent", icon: Users },
                  { label: "Reminder provider", icon: Bell },
                  { label: "Ticket and payment", icon: Ticket },
                ].map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 p-4"
                  >
                    <Icon className="size-5 text-cyan-300" />
                    <p className="mt-3 text-sm font-semibold">{label}</p>
                    <p className="mt-1 text-xs text-amber-200">Unavailable</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <CalendarDays className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No event evidence loaded</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Connect organizer identity, schedule, timezone, venue,
                  registration, attendee consent, capacity, moderation, safety,
                  notifications, ticketing, payment, refunds, accessibility, and
                  audit before publishing.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Create event unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  RSVP unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Invite unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Publish unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No event or attendance claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A local event concept does not prove an organizer, schedule,
                    venue, attendee, ticket, payment, notification, attendance,
                    or community outcome.
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
              What a real social event surface must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated organizer, tenant, attendee, venue, schedule, timezone, capacity, registration, consent, and moderation contracts",
                "Location safety, accessibility, safeguarding, code of conduct, emergency plan, reporting, cancellation, refund, and support procedures",
                "Notification, reminder, RSVP, ticket, payment, attendance, recording, invite, and read-receipt claims require provider and timestamp provenance",
                "Community, creator, marketplace, education, AI, crypto, financial, identity, and security event claims require separate domain evidence",
                "Create, RSVP, invite, publish, cancel, refund, export, accessibility, retry, and accountable approval require governed event operations",
                "An event preview must not be presented as scheduled, ticketed, attended, paid, notified, safe, or successful without evidence",
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
                "Event concepts, formats, schedule, location, attendees, notifications, tickets, safety, save/reset, and blocked create/RSVP/invite/publish actions remain visible.",
              icon: CalendarDays,
              status: "Local community",
            },
            {
              title: "No event theater",
              description:
                "Organizers, schedules, venues, attendees, tickets, payments, reminders, attendance, and community outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before publishing",
              description:
                "Real events require governed identity, logistics, privacy, safety, moderation, payment, notification, accessibility, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
