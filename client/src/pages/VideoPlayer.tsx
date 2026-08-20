import { useState } from "react";
import {
  BarChart3,
  Captions,
  CheckCircle2,
  Download,
  FileSearch,
  Film,
  LockKeyhole,
  PlaySquare,
  RefreshCw,
  ShieldAlert,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const gates = [
  [
    Film,
    "Asset and access",
    "No media asset, ownership, entitlement, signed URL, DRM, or access policy is connected.",
  ],
  [
    PlaySquare,
    "Playback and delivery",
    "No manifest, stream, codec, player state, buffering telemetry, or delivery provider is available.",
  ],
  [
    Captions,
    "Captions and transcript",
    "No caption track, language source, transcript, accessibility metadata, or consent state exists locally.",
  ],
  [
    BarChart3,
    "Analytics and retention",
    "No watch events, progress, audience analytics, download policy, or retention store is connected.",
  ],
] as const;

export default function VideoPlayer() {
  const [status, setStatus] = useState(
    "Video-player service unavailable locally. No asset was selected and no playback started."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No asset, access, playback, caption, analytics, download, or media mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={PlaySquare}
        title="Video player"
        subtitle="Review playback-readiness requirements without fabricating media assets, access, player state, captions, transcripts, analytics, downloads, or viewing outcomes."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="Video player unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Video-player service unavailable.</strong> No media asset,
            ownership entitlement, signed delivery URL, playback provider,
            caption source, analytics pipeline, download policy, or retention
            store is connected.
          </p>
          <Button
            onClick={() => blocked("Refresh player")}
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
                  Playback preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Media playback readiness
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This read-only workspace names the operational gates required
                  for a production player. It does not load an asset, request
                  access, stream media, track progress, render captions, record
                  analytics, or download content.
                </p>
              </div>
              <PlaySquare
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
                Play unavailable
              </Button>
              <Button disabled variant="outline">
                <Download className="mr-2 h-4 w-4" /> Download unavailable
              </Button>
              <Button disabled variant="outline">
                Caption settings unavailable
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
                Playback boundary
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                No viewing state implied
              </h2>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Asset", "Not selected"],
                  ["Access", "Entitlement unavailable"],
                  ["Stream", "Not loaded"],
                  ["Player", "Not initialized"],
                  ["Progress", "Not tracked"],
                  ["Captions", "Not loaded"],
                  ["Transcript", "Not generated"],
                  ["Analytics", "Pipeline unavailable"],
                  ["Download", "Policy unavailable"],
                  ["Retention", "Store unavailable"],
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
                  A production player requires authorized asset resolution,
                  signed delivery, content protection, resilient streaming,
                  accessible captions, transcript provenance, consent-aware
                  analytics, privacy-safe progress tracking, download
                  authorization, retention/deletion controls, and safe failure
                  states.
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
                    No player started.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Playback blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No stream loaded.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileSearch
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Asset absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No source metadata.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <ShieldAlert
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Privacy boundary</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No viewing inference.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No asset, entitlement, stream, playback, caption, transcript,
            analytics, download, viewing, or media outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
