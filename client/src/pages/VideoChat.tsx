import { useState } from "react";
import {
  Camera,
  CheckCircle2,
  FileText,
  LockKeyhole,
  Mic,
  MonitorUp,
  PhoneCall,
  RefreshCw,
  ShieldAlert,
  UsersRound,
  Video,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const capabilities = [
  [
    UsersRound,
    "Participant identity",
    "No verified participants, invitation, consent, relationship, or call scope is available.",
  ],
  [
    Camera,
    "Camera and microphone",
    "No browser permissions, device selection, media stream, or mute state is connected.",
  ],
  [
    PhoneCall,
    "WebRTC signaling",
    "No room, signaling server, peer connection, network state, or call status exists locally.",
  ],
  [
    Video,
    "Translation and transcript",
    "No language provider, transcript source, consent, retention, or accuracy state is available.",
  ],
  [
    MonitorUp,
    "Screen share and recording",
    "No sharing permission, recording consent, storage, moderation, or deletion policy is connected.",
  ],
] as const;

export default function VideoChat() {
  const [status, setStatus] = useState(
    "Video-chat service unavailable locally. No room was created and no media permission was requested."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No room, participant, media, signaling, translation, transcript, recording, or call mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={Video}
        title="Video chat"
        subtitle="Review communication-readiness requirements without fabricating participants, calls, media state, translation, transcripts, screen sharing, recording, or connection outcomes."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="Video chat unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Video-chat service unavailable.</strong> No verified
            identity, participant consent, room, signaling server, media
            permissions, translation provider, transcript store, recording
            policy, or moderation service is connected.
          </p>
          <Button
            onClick={() => blocked("Refresh call readiness")}
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
                  Communication preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Video calling readiness
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This read-only workspace names the operational gates required
                  for a production call. It does not create a room, request
                  camera or microphone access, connect a peer, send audio/video,
                  record, translate, or generate a transcript.
                </p>
              </div>
              <Video
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {capabilities.map(([Icon, label, description]) => (
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
                Start call unavailable
              </Button>
              <Button disabled variant="outline">
                <Mic className="mr-2 h-4 w-4" /> Mic unavailable
              </Button>
              <Button disabled variant="outline">
                Camera unavailable
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
                Call boundary
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                No live connection implied
              </h2>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Room", "Not created"],
                  ["Participants", "Not identified"],
                  ["Consent", "Not recorded"],
                  ["Media", "No stream"],
                  ["Signaling", "Unavailable"],
                  ["Translation", "Provider unavailable"],
                  ["Transcript", "Not generated"],
                  ["Recording", "Not started"],
                  ["Moderation", "Service unavailable"],
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
                  A production video service requires explicit participant
                  consent, identity and room authorization, secure signaling,
                  encrypted media transport, permission recovery, device
                  selection, network failure handling, transcript/translation
                  consent, recording retention and deletion, abuse reporting,
                  moderation, and privacy-safe logs.
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
                    No call started.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Media blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No permission request.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileText
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Transcript absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No provider output.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <ShieldAlert
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Consent required</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No participant inference.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No participant, room, media stream, call, translation, transcript,
            recording, moderation, or communication outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
