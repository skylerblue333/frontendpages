import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Compass,
  Heart,
  Info,
  LockKeyhole,
  MapPinOff,
  ShieldAlert,
  Sparkles,
  UserRound,
  XCircle,
} from "lucide-react";

type Requirement = { title: string; description: string; icon: typeof Info };
const REQUIREMENTS: readonly Requirement[] = [
  {
    title: "Consented profile data",
    description:
      "Only data a person explicitly provides for discovery may be used, with retention and deletion controls.",
    icon: UserRound,
  },
  {
    title: "Age and safety assurance",
    description:
      "Age, identity, abuse reporting, moderation, blocking, and appeals must be verified before discovery is enabled.",
    icon: ShieldAlert,
  },
  {
    title: "Explainable recommendations",
    description:
      "Any recommendation needs transparent non-sensitive signals and must not infer protected or intimate traits.",
    icon: Sparkles,
  },
  {
    title: "Location minimization",
    description:
      "Exact location and distance should not be exposed without a clear purpose, consent, and safe precision limits.",
    icon: MapPinOff,
  },
];

export default function DatingDiscovery() {
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState(
    "Dating discovery service unavailable locally. No profile, recommendation, location, match, notification, or account mutation was started."
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No profile, recommendation, location, match, notification, or account mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="dating-discovery-title"
    >
      <div data-ui-polish="batch-185" className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge variant="outline" className="border-pink-400/30 text-pink-200">
            DISCOVERY READINESS PREVIEW
          </Badge>
          <h1
            id="dating-discovery-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <Compass className="h-7 w-7 text-pink-300" aria-hidden="true" />
            Dating discovery
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review the requirements for a safe discovery experience without
            inventing people, profile details, compatibility scores, locations,
            or social outcomes.
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
                Discovery service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No consented profile source, age assurance, recommendation
                model, image provider, location signal, moderation service, or
                interaction endpoint is connected. No person or recommendation
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
              No names, ages, photos, biographies, interests, or identity data
              are loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Sparkles
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Recommendations unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No compatibility, ranking, preference inference, or match score is
              calculated.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Heart className="mb-3 h-5 w-5 text-pink-300" aria-hidden="true" />
            <p className="text-lg font-semibold">Actions unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Like, pass, super-like, refresh, match, and notification outcomes
              are not connected.
            </p>
          </Card>
        </section>
        <section aria-labelledby="requirements-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="requirements-title" className="text-xl font-semibold">
                Responsible discovery requirements
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Select a requirement to review its local boundary.
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => announceUnavailable("Profile refresh")}
            >
              Refresh unavailable
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {REQUIREMENTS.map(requirement => {
              const Icon = requirement.icon;
              const active = selected === requirement.title;
              return (
                <button
                  key={requirement.title}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelected(active ? null : requirement.title)}
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
                  <h3 className="font-semibold">{requirement.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {requirement.description}
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
              <LockKeyhole
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold">Requirement selected locally</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {selected} is a planning requirement only. No profile,
                  recommendation, location signal, match, or user record
                  changed.
                </p>
              </div>
            </div>
          </section>
        )}
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/40 p-5">
            <h2 className="font-semibold">Pass unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No profile is available to dismiss and no preference is saved.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Pass action")}
            >
              Pass unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/40 p-5">
            <h2 className="font-semibold">Like unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No interest, match, notification, or conversation is created.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Like action")}
            >
              Like unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/40 p-5">
            <h2 className="font-semibold">Super-like unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No elevated signal, billing event, or recommendation effect
              exists.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Super-like action")}
            >
              Super-like unavailable
            </Button>
          </Card>
        </section>
        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <XCircle
              className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">No discovery claim</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                This page does not rank, display, recommend, contact, notify, or
                record a person. A production implementation needs consent, age
                assurance, privacy, moderation, explainability, safe failure,
                and deletion controls.
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
