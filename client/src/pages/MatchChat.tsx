import { useMemo, useState } from "react";
import {
  Ban,
  FileWarning,
  HeartHandshake,
  LockKeyhole,
  MessageCircle,
  Search,
  ServerOff,
  ShieldCheck,
  UserRound,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Profile consent and match provenance",
    area: "Identity",
    description:
      "No consented profile, match record, preference, age or eligibility check, match rationale, participant identity, or provenance timestamp is connected.",
  },
  {
    title: "Conversation and delivery integrity",
    area: "Messaging",
    description:
      "No durable conversation, participant authorization, message body, delivery state, unread count, realtime channel, retention policy, or failure state exists.",
  },
  {
    title: "Presence and safety controls",
    area: "Safety",
    description:
      "No online presence, location signal, safety filter, report, block, mute, escalation path, moderation case, or response-time guarantee is verified.",
  },
  {
    title: "Privacy and data minimization",
    area: "Privacy",
    description:
      "No private-message boundary, sensitive-profile rule, consent withdrawal, export, deletion, retention, access audit, or redaction policy is configured.",
  },
  {
    title: "AI assistance and human oversight",
    area: "AI",
    description:
      "No AI icebreaker, prompt context, generated suggestion, disclosure, human review, abuse detection, or model safety evaluation is available.",
  },
];
export default function MatchChat() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "MatchChat is unavailable locally. No profile, match, presence, conversation, message, AI suggestion, safety case, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No profile, match, presence, conversation, message, report, block, AI suggestion, or dating-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="match-chat-title"
    >
      <div data-ui-polish="batch-194" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <HeartHandshake className="size-3.5" aria-hidden="true" />{" "}
                  Match-safety readiness
                </Badge>
                <Badge variant="secondary">No match chat service</Badge>
              </div>
              <h1
                id="match-chat-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MatchChat readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review consented identities, match provenance, durable
                messaging, presence, safety, privacy, moderation, and
                AI-assistance boundaries without implying that profiles,
                matches, conversations, messages, or replies exist.
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
                Match chat is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No consented profile store, matching service, message
                persistence, realtime delivery, presence signal, moderation
                workflow, safety filter, AI service, or privacy layer is
                connected. This is a readiness workspace, not an active
                conversation.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <UserRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No profile or match</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No participant, consent, preference, match rationale,
                eligibility, identity, or presence state is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <MessageCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No conversation state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No message, delivery, unread count, realtime channel, reply, AI
                icebreaker, or retention state is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No match actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No match, send, reply, report, block, mute, delete, generate, or
                dating-data mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Match-safety governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads a profile, creates a match, opens a conversation, sends a
              message, reports a user, blocks a participant, or generates an AI
              suggestion.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search MatchChat readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter match-safety requirements"
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
                  No match-safety notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <Ban
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production match-chat system needs consented profiles and
                matching authorization, durable and encrypted messaging,
                accurate delivery and presence, report and block controls,
                moderation escalation, privacy and retention, safe AI disclosure
                and oversight, abuse prevention, auditability, and tested
                recovery. No profile, match, message, reply, or safety outcome
                is claimed here.
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
