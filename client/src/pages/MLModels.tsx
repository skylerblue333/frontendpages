import { useMemo, useState } from "react";
import {
  Brain,
  FileWarning,
  GitBranch,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  Activity,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Model provenance and versioning",
    area: "Registry",
    description:
      "No model artifact, owner, source repository, training run, version, checksum, license, dependency, or lineage record is connected.",
  },
  {
    title: "Evaluation and release gates",
    area: "Quality",
    description:
      "No dataset snapshot, metric, baseline, threshold, subgroup result, approval, reproducibility record, or release decision is configured.",
  },
  {
    title: "Deployment and access control",
    area: "Security",
    description:
      "No serving target, environment, authenticated operator, permission boundary, endpoint, secret, or traffic policy is verified.",
  },
  {
    title: "Monitoring and cost attribution",
    area: "Operations",
    description:
      "No latency, error, drift, quality, usage, token, compute, budget, alert, or model-health telemetry exists.",
  },
  {
    title: "Rollback and lifecycle governance",
    area: "Governance",
    description:
      "No deprecation, rollback, incident, retraining, retention, audit event, change record, or recovery evidence is available.",
  },
];
export default function MLModels() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "MLModels is unavailable locally. No model artifact, version, evaluation, deployment, endpoint, metric, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No model, version, evaluation, deployment, endpoint, traffic, rollback, or ML mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="ml-models-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Brain className="size-3.5" aria-hidden="true" />{" "}
                  Model-registry readiness
                </Badge>
                <Badge variant="secondary">No model service</Badge>
              </div>
              <h1
                id="ml-models-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MLModels readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review model provenance, versioning, evaluation, deployment,
                access control, monitoring, cost attribution, rollback, and
                lifecycle contracts without implying that model artifacts,
                endpoints, deployments, or predictions exist.
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
                Model service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No governed registry, artifact store, evaluation pipeline,
                serving platform, deployment control, monitoring system, or
                persistence layer is connected. This is a readiness workspace,
                not a model-management console.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Brain className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No model artifacts</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No artifact, version, owner, repository, training run, checksum,
                lineage, dependency, or license is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Activity
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No evaluation or health</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No metric, baseline, threshold, subgroup result, latency, drift,
                quality, usage, cost, or model-health signal is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No model actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No register, evaluate, approve, deploy, promote, rollback,
                retrain, deprecate, or ML mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Model-registry governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads a model, evaluates an artifact, deploys an endpoint, changes
              traffic, records cost, or saves a model mutation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search MLModels readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter model-registry requirements"
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
                  No model-registry notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <GitBranch
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production model registry needs artifact provenance and
                versioning, reproducible evaluation and release gates,
                authenticated deployment and access controls, monitoring for
                quality and drift, cost attribution, approval and rollback,
                lifecycle retention, auditability, and tested recovery. No model
                or deployment state is claimed here.
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
