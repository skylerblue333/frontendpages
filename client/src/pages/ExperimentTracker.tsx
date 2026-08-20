import { useMemo, useState } from "react";
import {
  Beaker,
  CheckCircle2,
  ClipboardCheck,
  FlaskConical,
  Search,
  ShieldCheck,
  Split,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type ExperimentBoundary = { title: string; area: string; description: string };
const boundaries: readonly ExperimentBoundary[] = [
  {
    title: "Experiment definition and variants",
    area: "Design",
    description:
      "No experiment key, hypothesis, variant, allocation rule, feature flag, owner, or lifecycle state is loaded.",
  },
  {
    title: "Assignment and eligibility",
    area: "Runtime",
    description:
      "No user assignment, cohort, eligibility rule, exposure event, randomization, or holdout state is connected.",
  },
  {
    title: "Metrics and analysis",
    area: "Measurement",
    description:
      "No event stream, metric definition, sample, conversion, confidence interval, lift, or test result is calculated.",
  },
  {
    title: "Governance and rollout",
    area: "Safety",
    description:
      "No approval, privacy review, rollback, kill switch, audit trail, or production rollout control is configured.",
  },
];

export default function ExperimentTracker() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Experiment tracking is unavailable locally. No experiment, assignment, metric, rollout, or analytics mutation was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No experiment, assignment, metric, rollout, or analytics mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="experiment-tracker-title"
    >
      <div data-ui-polish="batch-188" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <FlaskConical className="size-3.5" aria-hidden="true" />
                  Experiment operations readiness
                </Badge>
                <Badge variant="secondary">No experimentation service</Badge>
              </div>
              <h1
                id="experiment-tracker-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Experiment tracking readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful experiment design, assignment, measurement,
                governance, and rollout contracts without claiming that
                variants, cohorts, metrics, or test results exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Experiment service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No flag provider, assignment service, event pipeline, analytics
                store, privacy review, or rollout control is connected. This is
                a planning boundary, not a live experimentation console.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Experiment tracking status"
        >
          <Card>
            <CardContent className="p-5">
              <Beaker className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No experiments loaded</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No hypothesis, variant, owner, feature flag, allocation, or
                lifecycle state is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Split className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No assignments made</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No user, cohort, eligibility, exposure, randomization, or
                holdout state is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <ClipboardCheck
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No results calculated</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No metrics, sample, conversion, confidence, lift, or rollout
                recommendation is generated.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Experiment readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects users,
              assignments, events, metrics, feature flags, or analytics storage.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search experiment readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search experiment requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(({ title, area, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{title}</h3>
                    <Badge variant="outline">{area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Manage ${title}`)}
                  >
                    Manage unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No experiment notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production experimentation system needs deterministic
                assignment, exposure logging, metric provenance, sample-ratio
                checks, privacy and consent controls, statistical review,
                approval gates, rollback and kill-switch behavior, audit
                logging, and safe defaults.
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
