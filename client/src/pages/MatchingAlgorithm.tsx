import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Activity,
  CheckCircle2,
  Database,
  FlaskConical,
  Gauge,
  Info,
  LockKeyhole,
  Network,
  Scale,
  ShieldAlert,
  SlidersHorizontal,
  XCircle,
} from "lucide-react";

type Requirement = {
  title: string;
  description: string;
  icon: typeof Database;
};

const REQUIREMENTS: readonly Requirement[] = [
  {
    title: "Consent and data minimization",
    description:
      "Only explicitly consented signals with retention and deletion controls may be considered.",
    icon: Database,
  },
  {
    title: "Explainable signals",
    description:
      "Users need a clear explanation of which non-sensitive inputs influence a recommendation.",
    icon: Network,
  },
  {
    title: "Safety and abuse resistance",
    description:
      "Harassment, fraud, manipulation, and unsafe contact patterns require governed safeguards.",
    icon: ShieldAlert,
  },
  {
    title: "Bias and fairness evaluation",
    description:
      "Performance must be evaluated across relevant groups without exposing sensitive traits.",
    icon: Scale,
  },
  {
    title: "Offline and online testing",
    description:
      "A model needs reproducible evaluation, monitoring, rollback, and incident response.",
    icon: FlaskConical,
  },
  {
    title: "Human and user control",
    description:
      "People need opt-out, correction, feedback, and deletion workflows for recommendation behavior.",
    icon: SlidersHorizontal,
  },
];

export default function MatchingAlgorithm() {
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState(
    "Matching model unavailable locally. No profile data, inference, ranking, recommendation, or account mutation was started."
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No profile, inference, ranking, recommendation, notification, or account mutation was started.`
    );

  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="matching-algorithm-title"
    >
      <div data-ui-polish="batch-195" className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge
            variant="outline"
            className="border-violet-400/30 text-violet-200"
          >
            MODEL READINESS PREVIEW
          </Badge>
          <h1
            id="matching-algorithm-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <Network className="h-7 w-7 text-violet-300" aria-hidden="true" />
            Matching algorithm
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review the requirements for a responsible matching model without
            inventing users, rankings, accuracy, or compatibility outcomes.
          </p>
        </header>
        <section
          className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
          aria-label="Matching model unavailable"
        >
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Matching model unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No consented dataset, model provider, feature contract, safety
                classifier, evaluation report, recommendation endpoint, or
                feedback loop is connected. No match score or recommendation is
                computed.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/50 p-5">
            <Gauge className="mb-3 h-5 w-5 text-sky-300" aria-hidden="true" />
            <p className="text-lg font-semibold">Accuracy unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No precision, recall, coverage, or calibration number is asserted.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Scale className="mb-3 h-5 w-5 text-amber-300" aria-hidden="true" />
            <p className="text-lg font-semibold">Fairness unmeasured</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No sensitive attribute, group metric, or fairness claim is
              produced.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Activity
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Inference inactive</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No profiles, embeddings, scores, rankings, or recommendations are
              loaded.
            </p>
          </Card>
        </section>
        <section aria-labelledby="requirements-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="requirements-title" className="text-xl font-semibold">
                Responsible model requirements
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Select a requirement to review its boundary. All implementation
                states are unavailable.
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => announceUnavailable("Model evaluation")}
            >
              <FlaskConical className="mr-2 h-4 w-4" aria-hidden="true" />
              Run evaluation unavailable
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {REQUIREMENTS.map(requirement => {
              const Icon = requirement.icon;
              const isSelected = selected === requirement.title;
              return (
                <button
                  key={requirement.title}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() =>
                    setSelected(isSelected ? null : requirement.title)
                  }
                  className={`rounded-2xl border p-5 text-left transition-colors ${isSelected ? "border-primary/50 bg-primary/10" : "border-border/40 bg-card/40 hover:bg-card/60"}`}
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
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold">Requirement selected locally</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {selected} is a planning requirement only. No model
                  configuration, dataset, metric, recommendation, or user
                  profile was changed.
                </p>
              </div>
            </div>
          </section>
        )}
        <section className="grid gap-4 md:grid-cols-2">
          <Card className="border-border/40 bg-card/40 p-5">
            <div className="flex items-start gap-3">
              <LockKeyhole
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold">Data boundary</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  A production system needs explicit consent, purpose
                  limitation, retention, deletion, access controls, and
                  protection against sensitive-trait inference.
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
                <h2 className="font-semibold">No recommendation output</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  This page does not rank, match, message, notify, or suggest a
                  person. Any future model must provide safe failure and user
                  control.
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
          <ShieldAlert /> No matching model is active.
        </div>
      </div>
    </main>
  );
}
