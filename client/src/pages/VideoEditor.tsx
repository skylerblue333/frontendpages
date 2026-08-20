import { useState } from "react";
import {
  CheckCircle2,
  Film,
  FileOutput,
  LockKeyhole,
  PlaySquare,
  RefreshCw,
  Scissors,
  ShieldAlert,
  Upload,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const gates = [
  [
    Upload,
    "Asset and upload",
    "No source asset, upload authorization, storage, media metadata, or virus scan is connected.",
  ],
  [
    Scissors,
    "Timeline and edits",
    "No project, timeline, tracks, cuts, captions, effects, or edit persistence exists locally.",
  ],
  [
    PlaySquare,
    "Preview and render",
    "No preview stream, render queue, codec, worker, progress, or output checksum is available.",
  ],
  [
    FileOutput,
    "Export and sharing",
    "No export target, download, collaboration, publishing, retention, or access policy is connected.",
  ],
] as const;

export default function VideoEditor() {
  const [status, setStatus] = useState(
    "Video-editor service unavailable locally. No asset was uploaded and no project was created."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No asset, project, timeline, render, export, collaboration, or media mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={Film}
        title="Video editor"
        subtitle="Review media-editing readiness without fabricating assets, projects, timelines, renders, exports, collaboration, publishing, or stored video outcomes."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="Video editor unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Video-editor service unavailable.</strong> No asset storage,
            upload pipeline, media metadata, project persistence, render worker,
            export target, collaboration layer, or retention policy is
            connected.
          </p>
          <Button
            onClick={() => blocked("Refresh editor")}
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Editing preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Media project readiness
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This read-only workspace names the operational gates required
                  for a production editor. It does not upload media, create a
                  project, inspect a file, render a preview, export a video, or
                  publish a result.
                </p>
              </div>
              <Film
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {gates.map(([Icon, label, description]) => (
                <div
                  key={label as string}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <Icon className="h-5 w-5 text-cyan-200" aria-hidden="true" />
                  <p className="mt-3 font-medium">{label as string}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {description as string}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button disabled className="bg-slate-700 text-slate-400">
                <Upload className="mr-2 h-4 w-4" /> Upload unavailable
              </Button>
              <Button disabled variant="outline">
                Create project unavailable
              </Button>
              <Button disabled variant="outline">
                Render unavailable
              </Button>
            </div>
            <p
              aria-live="polite"
              className="mt-5 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Project boundary
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                No edit state implied
              </h2>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Asset", "Not selected"],
                  ["Project", "Not created"],
                  ["Timeline", "Not available"],
                  ["Tracks", "Not loaded"],
                  ["Preview", "Not rendered"],
                  ["Render", "Queue unavailable"],
                  ["Export", "Target unavailable"],
                  ["Collaboration", "Service unavailable"],
                  ["Publishing", "Not authorized"],
                  ["Retention", "Policy unavailable"],
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
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production editor requires authorized upload, content-type
                  and malware validation, private storage, project ownership,
                  autosave and concurrency controls, deterministic rendering,
                  worker monitoring, export integrity, download authorization,
                  collaboration permissions, publishing review, and
                  retention/deletion controls.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Gates visible</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No project started.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Export blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No media output.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No asset, project, timeline, edit, preview, render, export,
            collaboration, publication, or stored-video outcome is claimed as
            real.
          </strong>
        </p>
      </main>
    </div>
  );
}
