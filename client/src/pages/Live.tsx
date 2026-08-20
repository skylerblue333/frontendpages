import { useState } from "react";
import {
  Activity,
  CircleSlash2,
  EyeOff,
  LockKeyhole,
  MessageCircleOff,
  Radio,
  Share2,
  ShieldAlert,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/PageHeader";

type Stream = {
  id: string;
  title: string;
  category: string;
  description: string;
  state: string;
  viewers: string;
  chat: string;
  timestamp: string;
};
const streams: Stream[] = [
  {
    id: "creator",
    title: "Creator studio concept",
    category: "Creator",
    description:
      "Local streaming concept pending ingest, broadcast, moderation, and delivery services.",
    state: "Stream unavailable",
    viewers: "Viewer count unavailable",
    chat: "Chat unavailable",
    timestamp: "Timestamp unavailable",
  },
  {
    id: "learning",
    title: "Learning room concept",
    category: "Education",
    description:
      "Local learning stream concept pending instructor authorization, scheduling, and learner access controls.",
    state: "Stream unavailable",
    viewers: "Viewer count unavailable",
    chat: "Chat unavailable",
    timestamp: "Timestamp unavailable",
  },
  {
    id: "community",
    title: "Community room concept",
    category: "Community",
    description:
      "Local community stream concept pending identity, moderation, privacy, and realtime infrastructure.",
    state: "Stream unavailable",
    viewers: "Viewer count unavailable",
    chat: "Chat unavailable",
    timestamp: "Timestamp unavailable",
  },
];
export default function Live() {
  const [selected, setSelected] = useState(streams[0]);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState(
    "Live service unavailable. Showing local stream concepts only."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No stream, comment, like, share, moderation, notification, or social mutation was started.`
    );
  return (
    <div data-ui-polish="batch-194" className="min-h-screen bg-background">
      <PageHeader
        icon={Radio}
        title="Live streams"
        subtitle="Review local streaming concepts without fabricated streams, viewer counts, comments, likes, timestamps, sharing, or realtime community outcomes."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Live service unavailable.</strong> No stream ingest, broadcast
          registry, realtime transport, viewer source, chat service, moderation
          queue, or notification endpoint is connected.
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-center gap-3">
              <Radio className="h-5 w-5 text-cyan-200" />
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Stream catalog
                </p>
                <h2 className="mt-1 text-2xl font-semibold">
                  Review local stream concepts
                </h2>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Local fixtures describe streaming structure only. They do not
              represent active broadcasts, audience size, identities, chat,
              likes, timestamps, moderation, or share outcomes.
            </p>
            <div className="mt-6 space-y-3">
              {streams.map(stream => (
                <button
                  className={`w-full rounded-xl border p-5 text-left ${selected.id === stream.id ? "border-purple-400/35 bg-purple-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={stream.id}
                  onClick={() => setSelected(stream)}
                  type="button"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium">{stream.title}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        {stream.category}
                      </p>
                    </div>
                    <Badge variant="outline">Unavailable</Badge>
                  </div>
                  <p className="mt-3 text-sm text-slate-400">
                    {stream.description}
                  </p>
                </button>
              ))}
            </div>
          </Card>
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected stream
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <div className="mt-5 flex aspect-video items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-950">
                <EyeOff className="h-8 w-8 text-slate-500" />
                <span className="ml-2 text-sm text-slate-500">
                  {selected.state}
                </span>
              </div>
              <div className="mt-5 grid gap-2">
                {(
                  [
                    ["Viewers", selected.viewers],
                    ["Chat", selected.chat],
                    ["Time", selected.timestamp],
                    ["Moderation", "Unavailable"],
                  ] as Array<[string, string]>
                ).map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex gap-2">
                <Button
                  onClick={() => blocked("Share stream")}
                  variant="outline"
                >
                  <Share2 className="mr-2 h-4 w-4" /> Share unavailable
                </Button>
                <Button
                  onClick={() => blocked("Like stream")}
                  variant="outline"
                >
                  Like unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Realtime streaming requires authenticated publishing,
                  transport health, audience authorization, moderation, rate
                  limits, and observable lifecycle states.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldAlert className="h-5 w-5 text-amber-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No audience count, comment identity, engagement, timestamp,
                  moderation result, or social proof is fabricated.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No broadcast, chat, like, share, notification, or community
                  mutation is available locally.
                </p>
              </div>
            </Card>
          </aside>
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex items-center gap-3">
            <MessageCircleOff className="h-5 w-5 text-cyan-200" />
            <div>
              <h2 className="font-semibold">Live chat</h2>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                Chat is unavailable because no stream, identity, moderation, or
                realtime service is connected.
              </p>
            </div>
          </div>
          <div className="mt-5 flex gap-2">
            <Input
              aria-label="Chat message"
              disabled
              onChange={event => setComment(event.target.value)}
              placeholder="Chat unavailable"
              value={comment}
            />
            <Button
              disabled
              onClick={() => blocked("Send chat message")}
              variant="outline"
            >
              Send unavailable
            </Button>
          </div>
          <p
            aria-live="polite"
            className="mt-5 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
          >
            {status}
          </p>
        </Card>
      </div>
    </div>
  );
}
