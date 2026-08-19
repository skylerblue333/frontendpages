import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Activity,
  CheckCircle2,
  Heart,
  LockKeyhole,
  MessageCircleOff,
  Network,
  ShieldAlert,
  UserRound,
  XCircle,
} from "lucide-react";

type View = "map" | "cards";
type Concept = { id: string; label: string; description: string; tone: string };

const CONCEPTS: readonly Concept[] = [
  {
    id: "shared-interest",
    label: "Shared-interest signal",
    description:
      "Interest overlap is unavailable without consented profile data.",
    tone: "border-cyan-400/30 text-cyan-200",
  },
  {
    id: "safety",
    label: "Safety and trust",
    description:
      "Trust, identity, moderation, and safety history are not assessed.",
    tone: "border-amber-400/30 text-amber-200",
  },
  {
    id: "communication",
    label: "Communication preference",
    description: "No communication style or behavioral inference is collected.",
    tone: "border-violet-400/30 text-violet-200",
  },
  {
    id: "availability",
    label: "Availability",
    description: "Presence, location, and distance are unavailable.",
    tone: "border-emerald-400/30 text-emerald-200",
  },
];

export default function MatchSpace() {
  const [view, setView] = useState<View>("map");
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState(
    "Matching service unavailable locally. No profile, inference, recommendation, message, or social mutation was started."
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No profile, location, inference, recommendation, message, notification, or social mutation was started.`
    );

  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="match-space-title"
    >
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge variant="outline" className="border-pink-400/30 text-pink-200">
            SOCIAL READINESS PREVIEW
          </Badge>
          <h1
            id="match-space-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <Heart className="h-7 w-7 text-pink-300" aria-hidden="true" />
            Match Space
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review relationship-graph concepts without inventing people,
            compatibility scores, locations, presence, emotional inference, or
            social outcomes.
          </p>
        </header>
        <section
          className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
          aria-label="Matching service unavailable"
        >
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Matching service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No consented profiles, identity verification, safety moderation,
                matching model, presence source, location signal, messaging
                provider, or recommendation endpoint is connected. Nothing here
                represents a real person or recommendation.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/50 p-5">
            <UserRound
              className="mb-3 h-5 w-5 text-cyan-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Profiles unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No names, ages, photos, roles, interests, or identities are
              loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Activity
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Inference unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No trust, emotional, behavioral, distance, or compatibility score
              is calculated.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <MessageCircleOff
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Interactions unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Like, pass, match, message, and notification outcomes are not
              connected.
            </p>
          </Card>
        </section>
        <nav className="flex flex-wrap gap-2" aria-label="Match Space views">
          <Button
            type="button"
            variant={view === "map" ? "default" : "outline"}
            onClick={() => setView("map")}
          >
            <Network className="mr-2 h-4 w-4" aria-hidden="true" />
            Abstract map
          </Button>
          <Button
            type="button"
            variant={view === "cards" ? "default" : "outline"}
            onClick={() => setView("cards")}
          >
            <UserRound className="mr-2 h-4 w-4" aria-hidden="true" />
            Concept cards
          </Button>
        </nav>
        {view === "map" && (
          <section aria-labelledby="map-title">
            <Card className="border-border/40 bg-card/40 p-6">
              <div className="mb-5 text-center">
                <h2 id="map-title" className="text-xl font-semibold">
                  Abstract relationship model
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Illustrative topology only. No person, node, line, score, or
                  relationship is represented.
                </p>
              </div>
              <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl border border-border/30 bg-background/30">
                <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary/40 bg-primary/10 text-center text-xs font-semibold">
                  Local
                  <br />
                  concept
                </div>
                {CONCEPTS.map((concept, index) => {
                  const positions = [
                    "left-[12%] top-[18%]",
                    "right-[12%] top-[18%]",
                    "left-[12%] bottom-[18%]",
                    "right-[12%] bottom-[18%]",
                  ];
                  return (
                    <button
                      key={concept.id}
                      type="button"
                      onClick={() => setSelected(concept.id)}
                      aria-pressed={selected === concept.id}
                      className={`absolute ${positions[index]} flex h-20 w-20 items-center justify-center rounded-full border bg-card/80 p-2 text-center text-[10px] transition-colors ${selected === concept.id ? "border-primary bg-primary/15" : "${concept.tone}"}`}
                    >
                      {concept.label}
                    </button>
                  );
                })}
                <div
                  className="absolute inset-0 -z-0 opacity-50"
                  aria-hidden="true"
                >
                  <div className="absolute left-1/2 top-[30%] h-[20%] w-px bg-border" />
                  <div className="absolute left-[30%] top-1/2 h-px w-[40%] bg-border" />
                  <div className="absolute left-1/2 bottom-[30%] h-[20%] w-px bg-border" />
                </div>
              </div>
              {selected ? (
                <p className="mx-auto mt-4 max-w-xl rounded-xl border border-border/30 bg-background/30 p-4 text-sm text-muted-foreground">
                  {
                    CONCEPTS.find(concept => concept.id === selected)
                      ?.description
                  }{" "}
                  This selection is local only.
                </p>
              ) : (
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Select a concept node to review its data boundary.
                </p>
              )}
            </Card>
          </section>
        )}
        {view === "cards" && (
          <section aria-labelledby="cards-title">
            <div className="mb-4">
              <h2 id="cards-title" className="text-xl font-semibold">
                Match concepts
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                These cards describe possible product requirements, not real
                profiles.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {CONCEPTS.map(concept => (
                <Card
                  key={concept.id}
                  className="border-border/40 bg-card/40 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-secondary/60 p-3">
                      <Network
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{concept.label}</h3>
                        <Badge
                          variant="outline"
                          className="border-muted-foreground/30 text-muted-foreground"
                        >
                          Not assessed
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {concept.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => announceUnavailable("Pass action")}
                    >
                      Pass unavailable
                    </Button>
                    <Button
                      type="button"
                      className="flex-1"
                      onClick={() => announceUnavailable("Like action")}
                    >
                      Like unavailable
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}
        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Responsible matching requirements
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production matching system needs consent, identity and age
                controls, privacy boundaries, transparent signals, bias testing,
                safety reporting, moderation, location minimization, explainable
                recommendations, rate limits, and clear deletion workflows. None
                is connected to this preview.
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
        <div className="sr-only" aria-live="polite">
          <CheckCircle2 /> No matching recommendation is active.
        </div>
      </div>
    </main>
  );
}
