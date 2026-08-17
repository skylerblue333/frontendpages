import { useMemo, useState } from "react";
import {
  CalendarDays,
  Compass,
  Hash,
  LockKeyhole,
  MessageSquare,
  Plus,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type CommunityTopic = "All" | "Crypto" | "AI" | "Education" | "Creators";
type CommunityState = "All" | "Planned" | "Review" | "Unavailable";

type CommunitySpace = {
  id: string;
  name: string;
  topic: Exclude<CommunityTopic, "All">;
  state: Exclude<CommunityState, "All">;
  description: string;
  access: string;
  memberCount: string;
  latestActivity: string;
  nextEvent: string;
};

const spaces: CommunitySpace[] = [
  {
    id: "crypto-research",
    name: "Crypto research",
    topic: "Crypto",
    state: "Review",
    description:
      "A proposed space for network, custody, and market-data discussions with a clear separation between education and financial advice.",
    access: "Access policy unavailable",
    memberCount: "Member count unavailable",
    latestActivity: "Activity feed unavailable",
    nextEvent: "Event schedule unavailable",
  },
  {
    id: "hopeai-builders",
    name: "HopeAI builders",
    topic: "AI",
    state: "Planned",
    description:
      "A planned space for transparent AI experimentation, prompt review, and responsible product feedback.",
    access: "Invitation policy unavailable",
    memberCount: "Member count unavailable",
    latestActivity: "Activity feed unavailable",
    nextEvent: "Event schedule unavailable",
  },
  {
    id: "skylearn-study",
    name: "SkyLearn study circle",
    topic: "Education",
    state: "Unavailable",
    description:
      "A local concept for course discussion and peer learning pending identity, safeguarding, and moderation controls.",
    access: "Enrollment policy unavailable",
    memberCount: "Member count unavailable",
    latestActivity: "Activity feed unavailable",
    nextEvent: "Event schedule unavailable",
  },
];

const topics: CommunityTopic[] = [
  "All",
  "Crypto",
  "AI",
  "Education",
  "Creators",
];
const states: CommunityState[] = ["All", "Review", "Planned", "Unavailable"];

export default function CommunityHub() {
  const [topic, setTopic] = useState<CommunityTopic>("All");
  const [state, setState] = useState<CommunityState>("All");
  const [selectedId, setSelectedId] = useState(spaces[0].id);
  const [status, setStatus] = useState(
    "Community services unavailable. Showing local space concepts only."
  );

  const filtered = useMemo(
    () =>
      spaces.filter(
        space =>
          (topic === "All" || space.topic === topic) &&
          (state === "All" || space.state === state)
      ),
    [state, topic]
  );

  const selected =
    filtered.find(space => space.id === selectedId) ?? filtered[0] ?? spaces[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No identity, community, content, moderation, notification, or event request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Users}
        title="Community hub"
        subtitle="Review local community spaces without fabricated members, activity, or engagement metrics."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Community services unavailable.</strong> No member
            directory, activity feed, event calendar, moderation service, or
            live metrics are connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Community services remain unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset preview
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Spaces preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Find a community space
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures describe possible destinations;
                  they do not represent a live directory or populated social
                  graph.
                </p>
              </div>
              <Compass className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Community topic filter"
            >
              {topics.map(item => (
                <Button
                  aria-pressed={topic === item}
                  key={item}
                  onClick={() => setTopic(item)}
                  size="sm"
                  variant={topic === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Community availability filter"
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
              {filtered.map(space => (
                <button
                  aria-pressed={selected.id === space.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === space.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={space.id}
                  onClick={() => setSelectedId(space.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{space.name}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {space.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{space.topic}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {space.description}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local space fixtures match these filters.
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
                Selected space
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.name}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.topic} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Access", selected.access],
                  ["Members", selected.memberCount],
                  ["Latest activity", selected.latestActivity],
                  ["Next event", selected.nextEvent],
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
                No member, post, event, attendance, reaction, invitation, or
                moderation record is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button onClick={() => blocked("Join space")} variant="outline">
                  <Users className="mr-2 h-4 w-4" /> Join unavailable
                </Button>
                <Button
                  onClick={() => blocked("Create post")}
                  variant="outline"
                >
                  <MessageSquare className="mr-2 h-4 w-4" /> Post unavailable
                </Button>
                <Button
                  onClick={() => blocked("Invite member")}
                  variant="outline"
                >
                  <Plus className="mr-2 h-4 w-4" /> Invite unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Community interactions require verified identity,
                  consent-aware content handling, notification authorization,
                  and abuse controls.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Production spaces require moderation ownership, audit trails,
                  privacy controls, and reliable event delivery.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CalendarDays className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No calendar, attendance, messaging, or notification operation
                  is available from this local preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <Hash className="h-5 w-5 text-amber-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Member counts and engagement metrics are intentionally not
                  estimated.
                </p>
              </div>
            </Card>
            <p className="sr-only" role="status">
              {status}
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
