import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Radio,
  FileSearch,
  Film,
  LockKeyhole,
  Search,
  ShieldCheck,
  Smartphone,
  Subtitles,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Stream source, rights, and provenance",
    area: "Content",
    description:
      "No channel, creator, source, license, territory, schedule, age rating, rights window, or provenance record is connected.",
  },
  {
    title: "Ingest, encoding, and delivery",
    area: "Infrastructure",
    description:
      "No ingest endpoint, codec, bitrate, adaptive rendition, CDN, signed URL, latency target, playback session, or delivery telemetry is verified.",
  },
  {
    title: "Viewer access and moderation",
    area: "Safety",
    description:
      "No account, audience, age gate, chat, report, block, moderation, copyright claim, takedown, or abuse escalation workflow exists.",
  },
  {
    title: "Privacy and monetization",
    area: "Governance",
    description:
      "No consent, analytics, advertising, subscription, tip, purchase, payout, retention, deletion, or financial record is available.",
  },
  {
    title: "Accessibility and recovery",
    area: "Quality",
    description:
      "No captions, transcript, audio description, keyboard control, reduced-motion behavior, buffering state, retry, outage, or recovery evidence is configured.",
  },
];
export default function MobileStreaming() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Mobile streaming is unavailable locally. No channel, creator, stream, viewer, playback, chat, purchase, or monetization record was loaded or saved."
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
      `${action} is unavailable locally. No channel, stream, creator, viewer, playback, chat, moderation, purchase, or streaming-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="mobile-streaming-title"
    >
      <div data-ui-polish="batch-196" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Radio className="size-3.5" aria-hidden="true" />{" "}
                  Streaming-readiness workspace
                </Badge>
                <Badge variant="secondary">No stream catalog</Badge>
              </div>
              <h1
                id="mobile-streaming-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MobileStreaming readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review stream provenance, rights, ingest, encoding, playback,
                viewer access, moderation, privacy, monetization, captions,
                accessibility, and recovery without implying that a channel,
                stream, viewer, or revenue record exists.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Mobile streaming is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No channel catalog, rights service, ingest pipeline, encoder,
                CDN, viewer account system, moderation layer, monetization
                provider, accessibility asset source, or persistence layer is
                connected. This workspace cannot start, play, host, or claim a
                stream.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Film className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No stream records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No channel, creator, source, license, schedule, rights window,
                artwork, playback URL, or stream is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Subtitles
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No viewer state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No viewer, playback session, chat, moderation, captions, audio
                description, or accessibility state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No streaming actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No start, play, chat, follow, report, monetize, purchase,
                upload, or streaming-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Streaming-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              opens a stream, reads a playback URL, joins chat, verifies rights,
              starts ingest, or saves viewer or financial data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search mobile streaming readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter streaming requirements"
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
                    <FileSearch className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No streaming notes match “{query}”.
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
                Production streaming requires verified source and rights, ingest
                and encoding, secure playback delivery, viewer access,
                moderation and copyright handling, privacy and monetization
                controls, captions and accessibility, buffering and failure
                recovery, and auditable operations. No channel, stream, viewer,
                playback, chat, purchase, or monetization record is claimed
                here.
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
