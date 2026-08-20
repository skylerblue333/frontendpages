import { useMemo, useState } from "react";
import {
  BrainCircuit,
  FileWarning,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  SlidersHorizontal,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Dataset provenance and consent",
    area: "Evidence",
    description:
      "No dataset, feature source, collection purpose, consent basis, owner, timestamp, lineage, license, or data-quality record is connected.",
  },
  {
    title: "Model identity and evaluation",
    area: "Model",
    description:
      "No model version, architecture, training run, feature schema, holdout design, metric, threshold, baseline, or reproducible evaluation is configured.",
  },
  {
    title: "Fairness, explainability, and human review",
    area: "Governance",
    description:
      "No protected-attribute review, subgroup metric, explanation method, decision policy, appeal path, analyst sign-off, or human-override rule is verified.",
  },
  {
    title: "Privacy and security",
    area: "Security",
    description:
      "No sensitive-feature policy, minimization, access role, redaction, retention, encryption, prompt boundary, or inference audit exists.",
  },
  {
    title: "Monitoring and lifecycle",
    area: "Operations",
    description:
      "No drift signal, quality alert, feedback loop, deployment approval, rollback, incident, retraining schedule, or recovery evidence is available.",
  },
];
export default function MLInsights() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "MLInsights is unavailable locally. No dataset, model, prediction, insight, metric, recommendation, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No dataset, model, prediction, explanation, recommendation, deployment, or ML mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="ml-insights-title"
    >
      <div data-ui-polish="batch-194" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BrainCircuit className="size-3.5" aria-hidden="true" />{" "}
                  ML-governance readiness
                </Badge>
                <Badge variant="secondary">No ML service</Badge>
              </div>
              <h1
                id="ml-insights-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MLInsights readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review dataset provenance, model identity, evaluation, fairness,
                explainability, privacy, monitoring, and lifecycle contracts
                without implying that predictions, insights, recommendations,
                metrics, or model results exist.
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
                ML service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No governed dataset, feature pipeline, model registry,
                evaluation store, inference service, explanation layer,
                monitoring pipeline, or persistence layer is connected. This is
                a readiness workspace, not an ML insights console.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <BrainCircuit
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No model or dataset</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No dataset, feature, model version, training run, owner,
                lineage, metric, or evaluation is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No insights</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No prediction, explanation, confidence, subgroup result,
                recommendation, alert, drift signal, or feedback is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No ML actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No train, infer, explain, approve, deploy, retrain, export, or
                model mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>ML-governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads a dataset, invokes a model, calculates a prediction,
              publishes an insight, changes a threshold, or saves an ML
              mutation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search MLInsights readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter ML-governance requirements"
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
                  No ML-governance notes match “{query}”.
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
                A production ML insights system needs dataset provenance and
                lawful consent, versioned models and reproducible evaluation,
                fairness and explainability review, human oversight, privacy and
                security controls, drift and quality monitoring, deployment
                approval, rollback, auditability, and tested recovery. No
                prediction or model result is claimed here.
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
