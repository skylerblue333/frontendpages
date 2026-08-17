import { useMemo, useState } from "react";
import {
  Activity,
  CircleSlash2,
  Filter,
  Headphones,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type MediaState = "Review" | "Planned" | "Unavailable";
type AudioItem = {
  id: string;
  title: string;
  format: string;
  state: MediaState;
  description: string;
  source: string;
  playback: string;
  listeners: string;
  engagement: string;
};
const items: AudioItem[] = [
  {
    id: "brief",
    title: "Ecosystem briefing",
    format: "Podcast",
    state: "Review",
    description:
      "A local audio concept for reviewing episode metadata after a verified source and consent-aware event stream are connected.",
    source: "Source unavailable",
    playback: "Playback unavailable",
    listeners: "Listener data unavailable",
    engagement: "Engagement unavailable",
  },
  {
    id: "lesson",
    title: "SkySchool lesson audio",
    format: "Lesson",
    state: "Planned",
    description:
      "A lesson-audio concept pending course context, playback events, and privacy-preserving analytics.",
    source: "Source unavailable",
    playback: "Playback unavailable",
    listeners: "Listener data unavailable",
    engagement: "Engagement unavailable",
  },
  {
    id: "session",
    title: "Community session replay",
    format: "Replay",
    state: "Unavailable",
    description:
      "A restricted replay concept requiring verified media rights, source provenance, and retention controls.",
    source: "Media source unavailable",
    playback: "Playback unavailable",
    listeners: "Listener data unavailable",
    engagement: "Engagement unavailable",
  },
];
const states: Array<"All" | MediaState> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];
const formats = ["All", ...Array.from(new Set(items.map(item => item.format)))];

export default function AudioAnalytics() {
  const [format, setFormat] = useState("All");
  const [state, setState] = useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(items[0].id);
  const [status, setStatus] = useState(
    "Audio analytics unavailable. Showing local media fixtures only."
  );
  const filtered = useMemo(
    () =>
      items.filter(
        item =>
          (format === "All" || item.format === format) &&
          (state === "All" || item.state === state)
      ),
    [format, state]
  );
  const selected = items.find(item => item.id === selectedId) ?? items[0];
  const reset = () => {
    setFormat("All");
    setState("All");
    setSelectedId(items[0].id);
    setStatus(
      "Audio preview reset locally. No playback, listener, engagement, telemetry, revenue, or report state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No media source, playback, listener, identity, telemetry, export, or publication request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-400/10 text-sky-200">
              <Headphones aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Audio analytics
                </h1>
                <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-xs text-sky-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review media-observability concepts without fabricated playback,
                listeners, engagement, identity, revenue, telemetry, or
                performance claims.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset audio analytics preview"
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
              Audio analytics unavailable.
            </strong>{" "}
            No verified media source, playback stream, listener identity, event
            schema, revenue source, or analytics store is connected. The items
            below are local fixtures.
          </p>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 sm:p-8">
            <div className="border-b border-slate-800 pb-6">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Filter aria-hidden="true" className="h-4 w-4" />
                Filter media fixtures
              </div>
              <div
                className="mt-4 flex flex-wrap gap-2"
                role="group"
                aria-label="Filter audio format"
              >
                {formats.map(item => (
                  <Button
                    aria-pressed={format === item}
                    className={
                      format === item
                        ? "bg-sky-500 text-white"
                        : "border-slate-700 bg-slate-950 text-slate-400"
                    }
                    key={item}
                    onClick={() => {
                      setFormat(item);
                      setStatus(`${item} format selected locally.`);
                    }}
                    size="sm"
                    variant={format === item ? "default" : "outline"}
                  >
                    {item}
                  </Button>
                ))}
              </div>
              <div
                className="mt-3 flex flex-wrap gap-2"
                role="group"
                aria-label="Filter audio state"
              >
                {states.map(item => (
                  <Button
                    aria-pressed={state === item}
                    className={
                      state === item
                        ? "border-sky-400/50 bg-sky-400/10 text-sky-100"
                        : "border-slate-700 bg-slate-950 text-slate-400"
                    }
                    key={item}
                    onClick={() => {
                      setState(item);
                      setStatus(`${item} media state selected locally.`);
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
              {filtered.map(item => (
                <button
                  aria-pressed={selectedId === item.id}
                  className={`w-full rounded-xl border p-5 text-left ${selectedId === item.id ? "border-sky-400/35 bg-sky-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={item.id}
                  onClick={() => {
                    setSelectedId(item.id);
                    setStatus(`${item.title} selected locally.`);
                  }}
                  type="button"
                >
                  <div className="flex gap-3">
                    <Activity
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-sky-200"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap justify-between gap-2">
                        <div>
                          <p className="font-medium text-slate-200">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {item.format}
                          </p>
                        </div>
                        <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                          {item.state}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {item.description}
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
                Selected media
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-sky-200">
                {selected.format} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  ["Source", selected.source],
                  ["Playback", selected.playback],
                  ["Listeners", selected.listeners],
                  ["Engagement", selected.engagement],
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
                No play, pause, listener, identity, completion, revenue, or
                performance state is available.
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                <Button
                  className="border-amber-400/30 text-amber-100"
                  onClick={() => blocked("Inspect")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Inspect unavailable
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
                  onClick={() => blocked("Publish")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Publish unavailable
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
                  No playback, listener, identity, telemetry, revenue, export,
                  or publication operation is available. Filters and selection
                  are local only.
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
                  Production audio analytics requires consent, source
                  provenance, privacy controls, event semantics, retention
                  policy, and auditable reporting.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
