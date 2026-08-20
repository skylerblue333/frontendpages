import { useMemo, useState } from "react";
import {
  Bell,
  FileWarning,
  Headphones,
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

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Requester and agent identity",
    area: "Access",
    description:
      "No authenticated requester, support agent, role, queue, organization, ticket owner, or escalation authority is connected.",
  },
  {
    title: "Conversation and ticket persistence",
    area: "Records",
    description:
      "No conversation, ticket, message, attachment, status, priority, assignment, transcript, or audit record is loaded.",
  },
  {
    title: "Realtime delivery and ordering",
    area: "Realtime",
    description:
      "No transport, delivery receipt, reconnect state, message ordering, duplicate handling, typing state, or offline queue is configured.",
  },
  {
    title: "Privacy, redaction, and retention",
    area: "Governance",
    description:
      "No sensitive-content redaction, attachment policy, consent, retention schedule, export rule, deletion workflow, or staff access audit is verified.",
  },
  {
    title: "Routing, escalation, and recovery",
    area: "Operations",
    description:
      "No routing rule, SLA, escalation path, notification preference, outage fallback, incident, retry, or recovery evidence exists.",
  },
];
export default function LiveChat() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "LiveChat is unavailable locally. No requester, agent, conversation, message, ticket, attachment, notification, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No requester, agent, conversation, message, ticket, attachment, assignment, notification, or support mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="live-chat-title"
    >
      <div data-ui-polish="batch-194" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <MessageCircle className="size-3.5" aria-hidden="true" />{" "}
                  Support-chat readiness
                </Badge>
                <Badge variant="secondary">No realtime service</Badge>
              </div>
              <h1
                id="live-chat-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                LiveChat readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review requester and agent identity, conversation persistence,
                realtime delivery, routing, escalation, privacy, retention, and
                recovery contracts without implying that support conversations,
                messages, tickets, or replies exist.
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
                Realtime support service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated support identity, ticket store, realtime
                transport, routing engine, privacy-redaction layer, notification
                service, or persistence layer is connected. This is a readiness
                workspace, not an active support chat.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Users className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No conversations</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No requester, agent, queue, ticket, conversation, message,
                attachment, status, or transcript is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Bell className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No realtime delivery</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No transport, delivery receipt, reconnect, notification, typing
                state, offline queue, or message ordering is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No support actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No message, assignment, escalation, attachment, status update,
                close, or support mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Support-chat governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              opens a conversation, sends a message, attaches a file, assigns a
              ticket, escalates a case, or saves support data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search LiveChat readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter support-chat requirements"
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
                  No support-chat notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <Headphones
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production support chat needs authenticated requester and
                agent identity, ticket and message persistence, realtime
                transport with ordering and reconnect handling, routing and SLA
                controls, privacy redaction and retention, attachment security,
                notification policy, auditability, escalation, and tested outage
                recovery. No conversation, message, ticket, or reply is claimed
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
          <LockKeyhole
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
