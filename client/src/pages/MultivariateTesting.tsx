import { useMemo, useState } from "react";
import {
  AlertTriangle,
  BarChart3,
  FileSearch,
  FlaskConical,
  LockKeyhole,
  Search,
  ShieldCheck,
  UsersRound,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Hypothesis, variant, and assignment provenance",
    area: "Design",
    description:
      "No experiment ID, hypothesis, variant, eligibility rule, assignment event, exposure timestamp, allocation, or version is connected.",
  },
  {
    title: "Consent, privacy, and eligibility",
    area: "Privacy",
    description:
      "No account, consent purpose, sensitive-data boundary, age or jurisdiction rule, exclusion, retention, deletion, or experiment opt-out is verified.",
  },
  {
    title: "Metrics and statistical validity",
    area: "Analysis",
    description:
      "No primary metric, guardrail, denominator, attribution window, sample-size plan, confidence method, bias check, or analysis result is available.",
  },
  {
    title: "Rollout, safety, and operational controls",
    area: "Operations",
    description:
      "No rollout gate, holdout, kill switch, exposure limit, feature flag, incident process, regression alert, or rollback state exists.",
  },
  {
    title: "Reporting and auditability",
    area: "Governance",
    description:
      "No dashboard, raw event, data lineage, analyst access, report export, decision rationale, change history, or immutable audit record is connected.",
  },
];
export default function MultivariateTesting() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Multivariate testing is unavailable locally. No experiment, variant, assignment, consent, metric, exposure, result, or analytics record was loaded or saved."
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
      `${action} is unavailable locally. No experiment, variant, assignment, consent, metric, exposure, result, privacy, or analytics-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="multivariate-testing-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <FlaskConical className="size-3.5" aria-hidden="true" />{" "}
                  Experiment-readiness workspace
                </Badge>
                <Badge variant="secondary">No experiment registry</Badge>
              </div>
              <h1
                id="multivariate-testing-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MultivariateTesting readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review experiment provenance, variant assignment, consent,
                metrics, statistical validity, privacy, rollout safety,
                reporting, and auditability without implying that an experiment,
                exposure, result, or analytics record exists.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Multivariate testing is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No experiment registry, assignment service, consent manager,
                event pipeline, metric catalog, statistical analysis layer,
                feature-flag system, rollout control, or audit store is
                connected. This workspace cannot create, assign, expose,
                analyze, launch, or claim an experiment.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <FlaskConical
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No experiment records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No hypothesis, variant, eligibility, allocation, assignment,
                exposure, or experiment version is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <BarChart3
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No analysis state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No metric, denominator, sample, confidence method, guardrail,
                result, or decision state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No experiment actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No create, assign, expose, launch, pause, analyze, export, or
                analytics-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Experiment-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              creates an experiment, assigns a variant, records exposure,
              calculates significance, changes rollout, or saves analytics data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search multivariate testing readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter experiment requirements"
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
                    <FileSearch className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
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
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Production experimentation requires versioned hypotheses and
                variants, consent and eligibility boundaries, deterministic
                assignment, metric and guardrail definitions, statistically
                valid analysis, safe rollout and rollback, privacy and retention
                controls, and auditable decisions. No experiment, variant,
                assignment, exposure, result, or analytics record is claimed
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
          <ShieldCheck
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
