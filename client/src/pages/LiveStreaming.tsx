import { useMemo, useState } from "react";
import {
  Radio,
  FileWarning,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  Users,
  Video,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Broadcaster and audience identity",
    area: "Access",
    description:
      "No authenticated broadcaster, channel owner, moderator, viewer, audience, organization, or publication authority is connected.",
  },
  {
    title: "Ingest and playback delivery",
    area: "Transport",
    description:
      "No ingest endpoint, stream key, codec, adaptive rendition, player URL, latency mode, delivery status, or reconnect state is configured.",
  },
  {
    title: "Moderation and safety",
    area: "Governance",
    description:
      "No moderation role, report flow, chat policy, age boundary, content classification, takedown, block, or appeal record is verified.",
  },
  {
    title: "Recording, privacy, and retention",
    area: "Records",
    description:
      "No recording, transcript, clip, consent, sensitive-media rule, retention schedule, export, deletion, or access audit exists.",
  },
  {
    title: "Reliability and observability",
    area: "Operations",
    description:
      "No stream health, viewer count, delivery metric, alert, incident, failover, billing state, telemetry, or recovery evidence is available.",
  },
];
export default function LiveStreaming() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "LiveStreaming is unavailable locally. No broadcaster, channel, stream, viewer, recording, chat, or mutation was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No broadcaster, stream, playback, viewer, recording, moderation, chat, or broadcast mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="live-streaming-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Radio className="size-3.5" aria-hidden="true" />{" "}
                  Broadcast-readiness
                </Badge>
                <Badge variant="secondary">No streaming service</Badge>
              </div>
              <h1
                id="live-streaming-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                LiveStreaming readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review broadcaster identity, ingest, playback, moderation,
                recording, privacy, retention, and reliability contracts without
                implying that live streams, channels, viewers, recordings, chat,
                or metrics exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Streaming service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No broadcaster identity, ingest service, playback delivery,
                moderation layer, recording store, viewer telemetry, or
                persistence layer is connected. This is a readiness workspace,
                not an active broadcast console.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Video className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No stream or channel</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No broadcaster, channel, ingest endpoint, playback URL, codec,
                rendition, audience, or stream state is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Users className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No viewer metrics</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No viewer count, chat, delivery receipt, latency, stream health,
                recording, or moderation event is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No broadcast actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No go-live, stop, publish, chat, clip, record, moderate, export,
                or stream mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Broadcast governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              starts a broadcast, connects ingest, opens playback, loads
              viewers, records media, moderates chat, or saves a stream
              mutation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search LiveStreaming readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter broadcast-readiness requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(item => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${item.title}`)}
                  >
                    <FileWarning className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No broadcast-readiness notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production streaming system needs authenticated broadcaster
                and moderator identity, secure ingest and playback, stream
                health and reconnect handling, content moderation and age
                controls, recording consent and retention, privacy and takedown
                workflows, auditability, viewer telemetry, and tested outage
                recovery. No stream, viewer, recording, or broadcast state is
                claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <ShieldCheck
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
