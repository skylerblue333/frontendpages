import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Clock3,
  Heart,
  LockKeyhole,
  MessageCircleOff,
  Send,
  ShieldAlert,
  Smile,
  UserRound,
  XCircle,
} from "lucide-react";

type DraftState = "empty" | "ready";

export default function DatingMessages() {
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState(
    "Dating messaging service unavailable locally. No profile, match, message, presence, notification, or account mutation was started."
  );
  const draftState: DraftState = draft.trim() ? "ready" : "empty";
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No profile, match, message, presence, notification, or account mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="dating-messages-title"
    >
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge variant="outline" className="border-pink-400/30 text-pink-200">
            MESSAGING READINESS PREVIEW
          </Badge>
          <h1
            id="dating-messages-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <Heart className="h-7 w-7 text-pink-300" aria-hidden="true" />
            Dating messages
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review a local, draft-only messaging surface without inventing
            participants, profile images, conversations, presence, unread state,
            or delivery results.
          </p>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Messaging service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated match provider, profile source, conversation
                history, messaging transport, presence signal, moderation
                service, notification route, or deletion workflow is connected.
                This page cannot open or create a real conversation.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/50 p-5">
            <UserRound
              className="mb-3 h-5 w-5 text-sky-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Participant unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No name, profile image, identity, age, match, or presence is
              loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <MessageCircleOff
              className="mb-3 h-5 w-5 text-pink-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">History unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No message content, timestamps, read state, or unread count is
              displayed.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Clock3
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Delivery unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No send, notification, delivery receipt, or response outcome is
              claimed.
            </p>
          </Card>
        </section>
        <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="border-border/40 bg-card/40 p-5">
            <div className="flex items-start gap-3">
              <XCircle
                className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold">No conversations available</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Matches and conversation history are unavailable until
                  authenticated API contracts, authorization, moderation,
                  retention, and deletion are verified.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-4"
                  onClick={() => announceUnavailable("Conversation loading")}
                >
                  Load conversations unavailable
                </Button>
              </div>
            </div>
          </Card>
          <Card className="border-border/40 bg-card/40 p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold">Local draft composer</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Draft memory is component-local only and is never posted.
                </p>
              </div>
              <Badge
                variant="outline"
                className="border-violet-400/30 text-violet-200"
              >
                {draftState === "ready" ? "Draft ready" : "Empty draft"}
              </Badge>
            </div>
            <label htmlFor="dating-message-draft" className="sr-only">
              Local message draft
            </label>
            <textarea
              id="dating-message-draft"
              value={draft}
              onChange={event => setDraft(event.target.value)}
              placeholder="Write a local draft only"
              rows={6}
              className="w-full resize-y rounded-xl border border-border/40 bg-background/40 p-3 text-sm outline-none ring-primary/40 focus:ring-2"
            />
            <div className="mt-3 flex flex-wrap gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => announceUnavailable("Emoji and media controls")}
              >
                <Smile className="mr-2 h-4 w-4" aria-hidden="true" />
                Media unavailable
              </Button>
              <Button
                type="button"
                onClick={() => announceUnavailable("Message delivery")}
                disabled={!draft.trim()}
              >
                <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                Send unavailable
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setDraft("")}
              >
                Clear local draft
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Do not enter real personal information, passwords, recovery codes,
              seed phrases, or sensitive content. {draft.length} local
              characters.
            </p>
          </Card>
        </section>
        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">Secure messaging requirements</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production messaging flow needs authenticated participants,
                authorization, encryption in transit and at rest, abuse
                reporting, blocking, rate limits, safe attachments, delivery
                states, notification controls, retention, deletion, and
                structured non-sensitive logging.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      </div>
    </main>
  );
}
