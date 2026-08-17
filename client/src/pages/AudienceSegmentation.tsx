import { useMemo, useState } from "react";
import {
  CircleSlash2,
  Filter,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type SegmentState = "Review" | "Planned" | "Unavailable";
type Segment = {
  id: string;
  title: string;
  channel: string;
  state: SegmentState;
  description: string;
  identity: string;
  consent: string;
  membership: string;
  count: string;
};
const segments: Segment[] = [
  {
    id: "learners",
    title: "Learning interest",
    channel: "Education",
    state: "Review",
    description:
      "A local segment concept for reviewing education-interest rules after consented events and purpose controls are connected.",
    identity: "Identity unavailable",
    consent: "Consent unavailable",
    membership: "Membership unavailable",
    count: "Count unavailable",
  },
  {
    id: "creators",
    title: "Creator cohort",
    channel: "Community",
    state: "Planned",
    description:
      "A community segment concept pending verified membership, identity resolution, and deletion handling.",
    identity: "Identity unavailable",
    consent: "Consent unavailable",
    membership: "Membership unavailable",
    count: "Count unavailable",
  },
  {
    id: "finance",
    title: "Financial interest",
    channel: "Finance",
    state: "Unavailable",
    description:
      "A restricted segment concept requiring strict purpose limitation, privacy review, and verified source provenance.",
    identity: "Identity unavailable",
    consent: "Consent unavailable",
    membership: "Membership unavailable",
    count: "Count unavailable",
  },
];
const states: Array<"All" | SegmentState> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];
const channels = [
  "All",
  ...Array.from(new Set(segments.map(segment => segment.channel))),
];

export default function AudienceSegmentation() {
  const [channel, setChannel] = useState("All");
  const [state, setState] = useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(segments[0].id);
  const [status, setStatus] = useState(
    "Audience segmentation unavailable. Showing local segment fixtures only."
  );
  const filtered = useMemo(
    () =>
      segments.filter(
        segment =>
          (channel === "All" || segment.channel === channel) &&
          (state === "All" || segment.state === state)
      ),
    [channel, state]
  );
  const selected =
    segments.find(segment => segment.id === selectedId) ?? segments[0];
  const reset = () => {
    setChannel("All");
    setState("All");
    setSelectedId(segments[0].id);
    setStatus(
      "Audience preview reset locally. No identity, consent, membership, count, target, or export state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No identity, consent, segment, membership, count, targeting, export, or campaign request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-fuchsia-400/25 bg-fuchsia-400/10 text-fuchsia-200">
              <Target aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Audience segmentation
                </h1>
                <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-2.5 py-1 text-xs text-fuchsia-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review segment concepts without fabricated identities, consent,
                membership, counts, targeting, exports, or campaign conclusions.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset audience preview"
            className="self-start border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800"
            onClick={reset}
            variant="outline"
          >
            <RotateCcw aria-hidden="true" className="mr-2 h-4 w-4" />
            Reset preview
          </Button>
        </header>
        <section
          className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/[0.07] p-4 text-sm text-slate-300"
          role="note"
        >
          <p>
            <strong className="text-amber-100">
              Audience segmentation unavailable.
            </strong>{" "}
            No consented identity source, membership store, event schema,
            privacy policy, count service, targeting connector, or campaign
            delivery channel is connected. The segments below are local
            fixtures.
          </p>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 sm:p-8">
            <div className="border-b border-slate-800 pb-6">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Filter aria-hidden="true" className="h-4 w-4" />
                Filter segment fixtures
              </div>
              <div
                className="mt-4 flex flex-wrap gap-2"
                role="group"
                aria-label="Filter segment channel"
              >
                {channels.map(item => (
                  <Button
                    aria-pressed={channel === item}
                    className={
                      channel === item
                        ? "bg-fuchsia-500 text-white"
                        : "border-slate-700 bg-slate-950 text-slate-400"
                    }
                    key={item}
                    onClick={() => {
                      setChannel(item);
                      setStatus(`${item} channel selected locally.`);
                    }}
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
                aria-label="Filter segment state"
              >
                {states.map(item => (
                  <Button
                    aria-pressed={state === item}
                    className={
                      state === item
                        ? "border-fuchsia-400/50 bg-fuchsia-400/10 text-fuchsia-100"
                        : "border-slate-700 bg-slate-950 text-slate-400"
                    }
                    key={item}
                    onClick={() => {
                      setState(item);
                      setStatus(`${item} segment state selected locally.`);
                    }}
                    size="sm"
                    variant="outline"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(segment => (
                <button
                  aria-pressed={selectedId === segment.id}
                  className={`w-full rounded-xl border p-5 text-left ${selectedId === segment.id ? "border-fuchsia-400/35 bg-fuchsia-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={segment.id}
                  onClick={() => {
                    setSelectedId(segment.id);
                    setStatus(`${segment.title} selected locally.`);
                  }}
                  type="button"
                >
                  <div className="flex gap-3">
                    <Users
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-fuchsia-200"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap justify-between gap-2">
                        <div>
                          <p className="font-medium text-slate-200">
                            {segment.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {segment.channel}
                          </p>
                        </div>
                        <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                          {segment.state}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {segment.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Selected segment
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-fuchsia-200">
                {selected.channel} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  ["Identity", selected.identity],
                  ["Consent", selected.consent],
                  ["Membership", selected.membership],
                  ["Count", selected.count],
                ].map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm text-slate-200">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No audience, person, membership, count, target, campaign, or
                delivery state is available.
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                <Button
                  className="border-amber-400/30 text-amber-100"
                  onClick={() => blocked("Estimate")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Estimate unavailable
                </Button>
                <Button
                  className="border-amber-400/30 text-amber-100"
                  onClick={() => blocked("Export")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Export unavailable
                </Button>
                <Button
                  className="border-amber-400/30 text-amber-100"
                  onClick={() => blocked("Create segment")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Create unavailable
                </Button>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  aria-hidden="true"
                  className="h-5 w-5 text-cyan-200"
                />
                <p className="text-sm leading-6 text-slate-400">
                  No identity, consent, membership, count, targeting, export,
                  notification, or campaign operation is available. Filters and
                  selection are local only.
                </p>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <ShieldCheck
                  aria-hidden="true"
                  className="h-5 w-5 text-emerald-200"
                />
                <p className="text-sm leading-6 text-slate-400">
                  Production segmentation requires consented identity
                  resolution, purpose limitation, authorization, privacy
                  controls, provenance, deletion handling, and auditable
                  delivery.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
