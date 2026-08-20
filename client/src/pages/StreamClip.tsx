import { useState } from "react";
import {
  CircleSlash2,
  Clock3,
  Download,
  EyeOff,
  LockKeyhole,
  PlayCircle,
  Scissors,
  Share2,
  ShieldAlert,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/PageHeader";

export default function StreamClip() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(
    "Clip service unavailable. Showing local media structure only."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No source stream, clip, playback, share, download, notification, media, or account mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={Scissors}
        title="Stream clips"
        subtitle="Review local clip structure without fabricated streams, creators, views, likes, durations, playback, shares, downloads, or clip outcomes."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Clip service unavailable.</strong> No source stream, media
          storage, creator authorization, copyright policy, moderation,
          playback, or analytics service is connected.
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <Badge variant="outline">Local clip draft</Badge>
          <h2 className="mt-3 text-2xl font-semibold">
            Create clip unavailable
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            The title remains in component memory only. No stream is loaded and
            no time range, media, or clip is persisted.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Input
              aria-label="Clip title"
              onChange={event => setTitle(event.target.value)}
              placeholder="Clip title draft"
              value={title}
            />
            <Button onClick={() => blocked("Create clip")} variant="outline">
              <Scissors className="mr-2 h-4 w-4" />
              Create unavailable
            </Button>
          </div>
        </Card>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="rounded-xl border border-dashed border-slate-700 p-12 text-center">
            <PlayCircle className="mx-auto h-9 w-9 text-slate-500" />
            <h2 className="mt-4 text-xl font-semibold">
              Trending clips unavailable
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-400">
              No source media, creator, title, game, views, likes, duration,
              playback, share link, download, or moderation outcome is
              available.
            </p>
            <div className="mt-5 flex justify-center gap-2">
              <Button onClick={() => blocked("Play clip")} variant="outline">
                <PlayCircle className="mr-2 h-4 w-4" />
                Play unavailable
              </Button>
              <Button onClick={() => blocked("Share clip")} variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share unavailable
              </Button>
              <Button
                onClick={() => blocked("Download clip")}
                variant="outline"
              >
                <Download className="mr-2 h-4 w-4" />
                Download unavailable
              </Button>
            </div>
          </div>
        </Card>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [EyeOff, "No audience metrics"],
            [Clock3, "No time range"],
            [ShieldAlert, "No media claim"],
          ].map(([Icon, label]) => (
            <Card
              className="border-slate-800 bg-slate-900/75 p-5"
              key={String(label)}
            >
              <Icon className="h-5 w-5 text-cyan-200" />
              <h2 className="mt-3 font-semibold">{String(label)}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                No clip, view, like, creator, duration, source, or media
                operation is available locally.
              </p>
            </Card>
          ))}
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-5">
          <div className="flex gap-3">
            <LockKeyhole className="h-5 w-5 text-cyan-200" />
            <p className="text-sm leading-6 text-slate-400">
              Production clips require media ownership, source-stream access,
              storage, copyright controls, moderation, retention, and auditable
              sharing.
            </p>
          </div>
          <div className="mt-4 flex gap-3">
            <CircleSlash2 className="h-5 w-5 text-slate-500" />
            <p className="text-sm leading-6 text-slate-400">
              No clip, playback, share, download, notification, media, or
              account operation is available locally.
            </p>
          </div>
        </Card>
        <p
          aria-live="polite"
          className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400"
        >
          {status}
        </p>
      </div>
    </div>
  );
}
