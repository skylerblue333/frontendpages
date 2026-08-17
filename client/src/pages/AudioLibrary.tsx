import { useMemo, useState } from "react";
import {
  CircleSlash2,
  FileAudio,
  Filter,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type State = "Review" | "Planned" | "Unavailable";
type Asset = {
  id: string;
  title: string;
  format: string;
  state: State;
  description: string;
  source: string;
  rights: string;
  owner: string;
  file: string;
};
const assets: Asset[] = [
  {
    id: "brief",
    title: "Ecosystem briefing",
    format: "Podcast",
    state: "Review",
    description:
      "Local catalog concept pending verified storage and rights provenance.",
    source: "Source unavailable",
    rights: "Rights unverified",
    owner: "Owner unavailable",
    file: "File unavailable",
  },
  {
    id: "lesson",
    title: "SkySchool lesson audio",
    format: "Lesson",
    state: "Planned",
    description:
      "Lesson asset concept pending upload validation and authorization.",
    source: "Source unavailable",
    rights: "License unavailable",
    owner: "Owner unavailable",
    file: "File unavailable",
  },
  {
    id: "replay",
    title: "Community session replay",
    format: "Replay",
    state: "Unavailable",
    description:
      "Restricted replay concept pending participant permissions and publication controls.",
    source: "Media source unavailable",
    rights: "Rights unverified",
    owner: "Owner unavailable",
    file: "File unavailable",
  },
];
const states: Array<"All" | State> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];
const formats = ["All", ...Array.from(new Set(assets.map(a => a.format)))];
export default function AudioLibrary() {
  const [format, setFormat] = useState("All");
  const [state, setState] = useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(assets[0].id);
  const [status, setStatus] = useState(
    "Audio library unavailable. Showing local media fixtures only."
  );
  const filtered = useMemo(
    () =>
      assets.filter(
        a =>
          (format === "All" || a.format === format) &&
          (state === "All" || a.state === state)
      ),
    [format, state]
  );
  const selected = assets.find(a => a.id === selectedId) ?? assets[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No file, storage, rights, owner, download, upload, share, or publication request was started.`
    );
  const reset = () => {
    setFormat("All");
    setState("All");
    setSelectedId(assets[0].id);
    setStatus(
      "Library preview reset locally. No file, rights, owner, upload, download, or publication state changed."
    );
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-rose-400/25 bg-rose-400/10 text-rose-200">
              <FileAudio aria-hidden="true" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Audio library
                </h1>
                <span className="rounded-full border border-rose-400/20 bg-rose-400/10 px-2 py-1 text-xs text-rose-200">
                  Local preview
                </span>
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                Review media concepts without fabricated assets, rights, owners,
                files, playback, licenses, downloads, or publication claims.
              </p>
            </div>
          </div>
          <Button onClick={reset} variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset preview
          </Button>
        </header>
        <section
          className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/[0.07] p-4 text-sm text-slate-300"
          role="note"
        >
          <strong className="text-amber-100">Audio library unavailable.</strong>{" "}
          No verified storage, upload service, media-rights registry, owner
          identity, playback source, or publication workflow is connected. These
          are local fixtures.
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Filter className="h-4 w-4" />
              Filter catalog fixtures
            </div>
            <div
              className="mt-4 flex flex-wrap gap-2"
              role="group"
              aria-label="Format filter"
            >
              {formats.map(item => (
                <Button
                  aria-pressed={format === item}
                  key={item}
                  onClick={() => setFormat(item)}
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
              aria-label="State filter"
            >
              {states.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant="outline"
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(asset => (
                <button
                  aria-pressed={selectedId === asset.id}
                  className={`w-full rounded-xl border p-5 text-left ${selectedId === asset.id ? "border-rose-400/35 bg-rose-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={asset.id}
                  onClick={() => setSelectedId(asset.id)}
                  type="button"
                >
                  <p className="font-medium">{asset.title}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {asset.format} · {asset.state}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {asset.description}
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
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected asset
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-rose-200">
                {selected.format} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  ["Source", selected.source],
                  ["Rights", selected.rights],
                  ["Owner", selected.owner],
                  ["File", selected.file],
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
                No file, duration, playback, license, owner, download, or
                publication state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button onClick={() => blocked("Upload")} variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload unavailable
                </Button>
                <Button onClick={() => blocked("Download")} variant="outline">
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Download unavailable
                </Button>
                <Button onClick={() => blocked("Publish")} variant="outline">
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Publish unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No storage, file, rights, owner, playback, download, sharing,
                  or publication operation is available.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Production libraries require verified storage, upload
                  validation, rights provenance, authorization, retention,
                  malware controls, and auditable publication state.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
