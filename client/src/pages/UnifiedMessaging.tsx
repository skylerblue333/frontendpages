import { useState } from "react";
import {
  BellOff,
  CircleSlash2,
  LockKeyhole,
  MessageCircle,
  Paperclip,
  PhoneOff,
  Send,
  Settings2,
  ShieldAlert,
  UserRound,
  VideoOff,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/PageHeader";

type Conversation = {
  id: string;
  title: string;
  kind: string;
  summary: string;
};
const conversations: Conversation[] = [
  {
    id: "direct",
    title: "Direct conversation concept",
    kind: "Direct",
    summary:
      "Messaging concept pending identity, membership, delivery, and retention services.",
  },
  {
    id: "group",
    title: "Group conversation concept",
    kind: "Group",
    summary:
      "Group concept pending participant authorization, moderation, presence, and notification services.",
  },
  {
    id: "support",
    title: "Support conversation concept",
    kind: "Support",
    summary:
      "Support concept pending secure case routing, data minimization, and auditable history.",
  },
];
export default function UnifiedMessaging() {
  const [selected, setSelected] = useState(conversations[0]);
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState(
    "Messaging service unavailable. Showing local conversation concepts only."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No message, notification, presence, call, video, attachment, account, or conversation mutation was started.`
    );
  return (
    <div data-ui-polish="batch-205" className="min-h-screen bg-background">
      <PageHeader
        icon={MessageCircle}
        title="Unified messaging"
        subtitle="Review local conversation concepts without fabricated identities, presence, unread state, message history, delivery, calls, notifications, or social outcomes."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Messaging service unavailable.</strong> No authenticated
          identity, conversation store, realtime transport, presence service,
          delivery receipt, notification endpoint, or moderation queue is
          connected.
        </div>
        <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
          <Card className="border-slate-800 bg-slate-900/75 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Conversations
                </p>
                <h2 className="mt-1 text-xl font-semibold">Local concepts</h2>
              </div>
              <Badge variant="outline">Unavailable</Badge>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              No participant identity, unread count, last-message timestamp, or
              presence state is claimed.
            </p>
            <div className="mt-5 space-y-2">
              {conversations.map(conversation => (
                <button
                  className={`w-full rounded-xl border p-4 text-left ${selected.id === conversation.id ? "border-purple-400/35 bg-purple-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={conversation.id}
                  onClick={() => setSelected(conversation)}
                  type="button"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800">
                      <UserRound className="h-4 w-4 text-slate-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">
                        {conversation.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {conversation.kind} · Presence unavailable
                      </p>
                      <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                        {conversation.summary}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <Button
              className="mt-5 w-full"
              onClick={() => blocked("Create conversation")}
              variant="outline"
            >
              New conversation unavailable
            </Button>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-400/10">
                  <UserRound className="h-5 w-5 text-purple-200" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{selected.title}</h2>
                  <p className="text-sm text-slate-500">
                    {selected.kind} · Identity and presence unavailable
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => blocked("Start voice call")}
                  size="sm"
                  variant="outline"
                >
                  <PhoneOff className="mr-2 h-4 w-4" /> Call unavailable
                </Button>
                <Button
                  onClick={() => blocked("Start video call")}
                  size="sm"
                  variant="outline"
                >
                  <VideoOff className="mr-2 h-4 w-4" /> Video unavailable
                </Button>
                <Button
                  onClick={() => blocked("Open conversation settings")}
                  size="sm"
                  variant="outline"
                >
                  <Settings2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex min-h-[360px] items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-950/40 p-8 text-center">
              <div>
                <MessageCircle className="mx-auto h-9 w-9 text-slate-500" />
                <h2 className="mt-4 text-xl font-semibold">
                  Message history unavailable
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
                  No message identity, content, timestamp, read state, delivery
                  receipt, attachment, moderation result, or retention outcome
                  is available.
                </p>
                <Button
                  className="mt-5"
                  onClick={() => blocked("Load message history")}
                  variant="outline"
                >
                  Load history unavailable
                </Button>
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              <Button
                disabled
                onClick={() => blocked("Attach file")}
                size="icon"
                variant="outline"
              >
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input
                aria-label="Message draft"
                onChange={event => setDraft(event.target.value)}
                placeholder="Local message draft only"
                value={draft}
              />
              <Button
                disabled={!draft.trim()}
                onClick={() => blocked("Send message")}
              >
                <Send className="mr-2 h-4 w-4" /> Send unavailable
              </Button>
            </div>
            <p
              aria-live="polite"
              className="mt-4 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
            >
              {status}
            </p>
          </Card>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <LockKeyhole className="h-5 w-5 text-cyan-200" />
            <h2 className="mt-3 font-semibold">Private by default</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              A real messenger requires authenticated membership, data
              minimization, retention, deletion, and access controls.
            </p>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <BellOff className="h-5 w-5 text-amber-200" />
            <h2 className="mt-3 font-semibold">No notification claims</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No delivery, unread state, push notification, read receipt, or
              presence outcome is fabricated.
            </p>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <CircleSlash2 className="h-5 w-5 text-slate-500" />
            <h2 className="mt-3 font-semibold">No realtime mutation</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No message, call, video, attachment, moderation, notification, or
              conversation operation is available locally.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
