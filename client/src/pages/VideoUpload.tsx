import { useState } from "react";
import {
  CheckCircle2,
  FileCheck2,
  FileSearch,
  Film,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  Upload,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Gate = { label: string; value: string; detail: string };
const gates: readonly Gate[] = [
  {
    label: "File selection",
    value: "No file selected",
    detail:
      "No browser file input, filename, size, duration, or media metadata is read.",
  },
  {
    label: "Validation",
    value: "Not evaluated",
    detail:
      "Type, size, duration, codec, malware, and content validation are unavailable.",
  },
  {
    label: "Authorization",
    value: "Not established",
    detail:
      "Ownership, consent, destination, and upload permission are unavailable.",
  },
  {
    label: "Storage",
    value: "Not connected",
    detail:
      "No private object store, encryption, signed upload, or retention policy is available.",
  },
  {
    label: "Processing",
    value: "Not started",
    detail:
      "No queue, transcoding worker, progress, checksum, or failure recovery is connected.",
  },
  {
    label: "Outcome",
    value: "Not determined",
    detail:
      "No upload ID, media URL, playable asset, or completion result exists locally.",
  },
];

export default function VideoUpload() {
  const [status, setStatus] = useState(
    "Video-upload service unavailable locally. No file was selected and no upload started."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No file, validation, authorization, storage, processing, or upload mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={Upload}
        title="Video upload"
        subtitle="Review media-upload readiness without fabricating files, validation, authorization, storage, processing, progress, playable assets, or upload outcomes."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="Video upload unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Video-upload service unavailable.</strong> No file intake,
            media validation, ownership authorization, private storage,
            processing queue, malware scan, or retention policy is connected.
          </p>
          <Button
            onClick={() => blocked("Refresh upload readiness")}
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
                  Upload preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Media intake readiness
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This read-only workspace names the operational gates required
                  for a production upload. It does not open a file picker,
                  inspect a file, upload bytes, create an asset, or claim
                  processing progress.
                </p>
              </div>
              <Film
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {gates.map(gate => (
                <div
                  key={gate.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs text-slate-500">{gate.label}</p>
                  <p className="mt-2 font-medium">{gate.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {gate.detail}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button disabled className="bg-slate-700 text-slate-400">
                <Upload className="mr-2 h-4 w-4" /> Choose file unavailable
              </Button>
              <Button disabled variant="outline">
                Validate unavailable
              </Button>
              <Button disabled variant="outline">
                Upload unavailable
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
                Upload boundary
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                No asset is created
              </h2>
              <dl className="mt-5 grid gap-2">
                {[
                  ["File", "Not selected"],
                  ["Type and size", "Not evaluated"],
                  ["Ownership", "Unavailable"],
                  ["Consent", "Not recorded"],
                  ["Storage", "Not connected"],
                  ["Scan", "Not run"],
                  ["Processing", "Not queued"],
                  ["Progress", "Not tracked"],
                  ["Asset ID", "Unavailable"],
                  ["Media URL", "Not created"],
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
                  A production upload flow requires constrained file intake,
                  type and size validation, malware scanning, content-policy
                  checks, ownership and consent authorization, private encrypted
                  storage, signed transfer URLs, resumable progress,
                  idempotency, processing failure recovery, checksums, access
                  control, and retention/deletion controls.
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
                    No file inspected.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Upload blocked</p>
                  <p className="mt-1 text-xs text-slate-500">No bytes sent.</p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileSearch
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Scan absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No file metadata.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileCheck2
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Outcome absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No asset record.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No file, validation, authorization, storage, processing, progress,
            playable asset, media URL, or upload outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
