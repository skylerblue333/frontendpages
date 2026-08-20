import { useMemo, useState } from "react";
import {
  CheckCircle2,
  LockKeyhole,
  MessageCircle,
  Search,
  ServerOff,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type ChatBoundary = { title: string; area: string; description: string };
const boundaries: readonly ChatBoundary[] = [
  {
    title: "Membership and room authorization",
    area: "Identity",
    description:
      "No authenticated identity, group membership, room role, invite, block, or visibility scope is loaded.",
  },
  {
    title: "Durable conversation history",
    area: "Messaging",
    description:
      "No room, thread, message, attachment, reaction, read receipt, or edit history is connected.",
  },
  {
    title: "Realtime delivery and reconnect",
    area: "Reliability",
    description:
      "No websocket, delivery receipt, ordering, retry, offline queue, or reconnect state is available.",
  },
  {
    title: "Moderation and abuse handling",
    area: "Safety",
    description:
      "No report, mute, ban, rate limit, spam control, content review, or escalation workflow exists.",
  },
  {
    title: "Privacy and retention",
    area: "Governance",
    description:
      "No consent, encryption, redaction, export, deletion, retention, notification, or support policy is configured.",
  },
  {
    title: "Messaging mutations",
    area: "Operations",
    description:
      "Send, edit, delete, react, invite, leave, pin, and file-upload operations have no connected backend contract.",
  },
];

export default function GroupChat() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Group chat is unavailable locally. No room, member, message, or mutation was loaded or saved."
  );
  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return boundaries.filter(
      ({ title, area, description }) =>
        !normalized ||
        `${title} ${area} ${description}`.toLowerCase().includes(normalized)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No room, membership, message, attachment, or moderation record was changed.`
    );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="group-chat-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <MessageCircle className="size-3.5" aria-hidden="true" />{" "}
                  Community messaging
                </Badge>
                <Badge variant="secondary">No chat service</Badge>
              </div>
              <h1
                id="group-chat-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Group Chat readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the identity, realtime delivery, moderation, and privacy
                contracts required for safe group messaging without implying
                that rooms, members, or messages exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section
          className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
          aria-label="Group Chat service status"
        >
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Group chat service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated group scope, realtime transport, durable
                message store, moderation pipeline, privacy policy, or
                persistence layer is connected. This is a readiness workspace,
                not an active conversation.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Group Chat status"
        >
          <Card>
            <CardContent className="p-5">
              <Users className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No room scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No group, member, role, invite, block, or visibility state is
                loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No safety scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No moderation, abuse, privacy, retention, or support control is
                available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No messages</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No history, delivery receipt, notification, attachment, or
                realtime event exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Chat-governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never joins
              a room, sends a message, connects realtime transport, or saves a
              conversation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search group chat readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter chat requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(boundary => (
                <div
                  key={boundary.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{boundary.title}</h3>
                    <Badge variant="outline">{boundary.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {boundary.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${boundary.title}`)}
                  >
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No chat notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production chat needs authenticated membership and room
                authorization, durable message contracts, realtime ordering and
                reconnect behavior, moderation and abuse handling, privacy and
                retention controls, rate limits, notifications, observability,
                and tested recovery for delivery and uploads.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
