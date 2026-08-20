import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  HeartHandshake,
  Info,
  MessageCircleOff,
  ShieldAlert,
  UserRound,
  XCircle,
} from "lucide-react";

type Stage = { title: string; description: string; icon: typeof Info };
const STAGES: readonly Stage[] = [
  {
    title: "Consent and profile control",
    description:
      "People choose what information may be used, for what purpose, and for how long.",
    icon: Info,
  },
  {
    title: "Safety and moderation",
    description:
      "Identity, age, abuse reporting, fraud detection, and moderation workflows must be verified.",
    icon: ShieldAlert,
  },
  {
    title: "Transparent recommendations",
    description:
      "Any suggestion needs explainable non-sensitive signals and a way to correct or opt out.",
    icon: HeartHandshake,
  },
  {
    title: "Conversation boundaries",
    description:
      "Messaging, notifications, blocking, and reporting require a secure communications provider.",
    icon: MessageCircleOff,
  },
  {
    title: "Feedback and deletion",
    description:
      "Users need control over feedback, recommendation history, retention, and deletion.",
    icon: XCircle,
  },
];

export default function Matchmaking() {
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState(
    "Matchmaking service unavailable locally. No profile, match, recommendation, message, notification, or account mutation was started."
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No profile, match, recommendation, message, notification, or account mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="matchmaking-title"
    >
      <div data-ui-polish="batch-195" className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge variant="outline" className="border-pink-400/30 text-pink-200">
            MATCHMAKING READINESS PREVIEW
          </Badge>
          <h1
            id="matchmaking-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <HeartHandshake
              className="h-7 w-7 text-pink-300"
              aria-hidden="true"
            />
            Matchmaking
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review the requirements for a safe matchmaking product without
            inventing profiles, matches, recommendations, or relationship
            outcomes.
          </p>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Matchmaking service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No consented profiles, matching model, identity and age
                controls, safety service, recommendation endpoint, messaging
                provider, or deletion workflow is connected. No person or match
                is represented.
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
            <p className="text-lg font-semibold">Profiles unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No identity, preferences, age, location, or interests are loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <HeartHandshake
              className="mb-3 h-5 w-5 text-pink-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Matches unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No ranking, recommendation, match, or compatibility outcome
              exists.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <MessageCircleOff
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Contact unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No message, notification, block, report, or introduction is sent.
            </p>
          </Card>
        </section>
        <section aria-labelledby="stages-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="stages-title" className="text-xl font-semibold">
                Responsible matchmaking stages
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Select a stage to review its governance boundary.
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => announceUnavailable("Matchmaking preview")}
            >
              Preview unavailable
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {STAGES.map(stage => {
              const Icon = stage.icon;
              const active = selected === stage.title;
              return (
                <button
                  key={stage.title}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelected(active ? null : stage.title)}
                  className={`rounded-2xl border p-5 text-left transition-colors ${active ? "border-primary/50 bg-primary/10" : "border-border/40 bg-card/40 hover:bg-card/60"}`}
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="rounded-xl bg-secondary/60 p-3">
                      <Icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <Badge
                      variant="outline"
                      className="border-muted-foreground/30 text-muted-foreground"
                    >
                      Unavailable
                    </Badge>
                  </div>
                  <h3 className="font-semibold">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {stage.description}
                  </p>
                </button>
              );
            })}
          </div>
        </section>
        {selected && (
          <section
            className="rounded-2xl border border-primary/30 bg-primary/5 p-5"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold">Stage selected locally</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {selected} is a planning requirement only. No profile,
                  recommendation, match, conversation, or consent record
                  changed.
                </p>
              </div>
            </div>
          </section>
        )}
        <section className="grid gap-4 md:grid-cols-2">
          <Card className="border-border/40 bg-card/40 p-5">
            <div className="flex items-start gap-3">
              <ShieldAlert
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold">No safety claim</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  A production service needs identity and age controls,
                  moderation, abuse reporting, fraud prevention, and accessible
                  appeals before introductions are enabled.
                </p>
              </div>
            </div>
          </Card>
          <Card className="border-border/40 bg-card/40 p-5">
            <div className="flex items-start gap-3">
              <XCircle
                className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold">No match output</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  This page does not rank, match, message, notify, or suggest a
                  person. Future actions need explicit consent and safe failure
                  states.
                </p>
              </div>
            </div>
          </Card>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
        <div className="sr-only" aria-live="polite">
          <CheckCircle2 /> No matchmaking outcome is active.
        </div>
      </div>
    </main>
  );
}
