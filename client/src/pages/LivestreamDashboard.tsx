import { useState } from "react";
import {
  CalendarClock,
  CircleSlash2,
  EyeOff,
  LockKeyhole,
  Radio,
  Share2,
  ShieldAlert,
  VideoOff,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/PageHeader";
import { Textarea } from "@/components/ui/textarea";

type Tab = "Overview" | "Analytics" | "Replays" | "Create";
const tabs: Tab[] = ["Overview", "Analytics", "Replays", "Create"];
const metrics = [
  "Live streams",
  "Viewers",
  "Watch time",
  "Engagement",
] as const;
export default function LivestreamDashboard() {
  const [tab, setTab] = useState<Tab>("Overview");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(
    "Broadcast service unavailable. Showing local stream controls only."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No stream, replay, share, schedule, viewer, notification, moderation, or account mutation was started.`
    );
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Radio}
        title="Livestream dashboard"
        subtitle="Review local broadcast structure without fabricated streams, viewer counts, watch time, likes, replays, shares, scheduling, or creator outcomes."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Broadcast service unavailable.</strong> No ingest, creator
          authorization, realtime metrics, replay storage, moderation queue,
          scheduling service, or notification endpoint is connected.
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(label => (
            <Card className="border-slate-800 bg-slate-900/75 p-5" key={label}>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                {label}
              </p>
              <p className="mt-2 text-2xl font-semibold">Unavailable</p>
              <Badge className="mt-3" variant="outline">
                Source unavailable
              </Badge>
            </Card>
          ))}
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex flex-wrap gap-2">
            {tabs.map(item => (
              <Button
                aria-pressed={tab === item}
                key={item}
                onClick={() => setTab(item)}
                size="sm"
                variant={tab === item ? "default" : "outline"}
              >
                {item}
              </Button>
            ))}
          </div>
          {tab === "Create" ? (
            <div className="mt-6 max-w-2xl space-y-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Local stream draft
                </p>
                <h2 className="mt-1 text-2xl font-semibold">
                  Create stream unavailable
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  These fields remain in component memory only. They cannot
                  schedule, publish, notify, moderate, or create a broadcast.
                </p>
              </div>
              <Input
                aria-label="Stream title"
                onChange={event => setTitle(event.target.value)}
                placeholder="Stream title draft"
                value={title}
              />
              <Textarea
                aria-label="Stream description"
                onChange={event => setDescription(event.target.value)}
                placeholder="Stream description draft"
                rows={4}
                value={description}
              />
              <div className="flex gap-2">
                <Button
                  onClick={() => blocked("Create stream")}
                  variant="outline"
                >
                  Create unavailable
                </Button>
                <Button
                  onClick={() => {
                    setTitle("");
                    setDescription("");
                  }}
                  variant="ghost"
                >
                  Clear draft
                </Button>
              </div>
            </div>
          ) : (
            <div className="mt-6 rounded-xl border border-dashed border-slate-700 p-12 text-center">
              {tab === "Analytics" ? (
                <Radio className="mx-auto h-9 w-9 text-slate-500" />
              ) : tab === "Replays" ? (
                <EyeOff className="mx-auto h-9 w-9 text-slate-500" />
              ) : (
                <VideoOff className="mx-auto h-9 w-9 text-slate-500" />
              )}
              <h2 className="mt-4 text-xl font-semibold">{tab} unavailable</h2>
              <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-400">
                No verified {tab.toLowerCase()} data is connected. This preview
                does not fabricate active streams, audience metrics, replay
                media, share results, or creator outcomes.
              </p>
              <div className="mt-5 flex justify-center gap-2">
                <Button
                  onClick={() => blocked(`Load ${tab.toLowerCase()}`)}
                  variant="outline"
                >
                  Load unavailable
                </Button>
                {tab === "Overview" && (
                  <Button
                    onClick={() => blocked("Share stream")}
                    variant="outline"
                  >
                    <Share2 className="mr-2 h-4 w-4" /> Share unavailable
                  </Button>
                )}
              </div>
            </div>
          )}
        </Card>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <CalendarClock className="h-5 w-5 text-cyan-200" />
            <h2 className="mt-3 font-semibold">No scheduling</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No schedule, creator identity, broadcast key, notification, or
              event time is available.
            </p>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <ShieldAlert className="h-5 w-5 text-amber-200" />
            <h2 className="mt-3 font-semibold">No audience claims</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No viewers, watch time, likes, comments, replay views, or
              engagement is fabricated.
            </p>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <CircleSlash2 className="h-5 w-5 text-slate-500" />
            <h2 className="mt-3 font-semibold">No broadcast mutation</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No stream, replay, share, schedule, notification, moderation, or
              account operation is available locally.
            </p>
          </Card>
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-5">
          <div className="flex gap-3">
            <LockKeyhole className="h-5 w-5 text-cyan-200" />
            <p className="text-sm leading-6 text-slate-400">
              Production streaming requires authenticated creator authorization,
              ingest health, transport observability, audience controls,
              moderation, replay retention, and explicit lifecycle states.
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
