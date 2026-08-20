import { useMemo, useState } from "react";
import {
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Dataset, feature, and target provenance",
    area: "Data",
    description:
      "No dataset, feature, target, label, account, tenant, consent purpose, collection window, or training snapshot is connected.",
  },
  {
    title: "Model versioning and reproducibility",
    area: "Method",
    description:
      "No model family, version, code revision, hyperparameter, dependency lock, seed, pipeline run, or artifact checksum is verified.",
  },
  {
    title: "Evaluation, calibration, and uncertainty",
    area: "Quality",
    description:
      "No holdout, metric, baseline, calibration, confidence interval, uncertainty estimate, drift check, bias review, or error analysis exists.",
  },
  {
    title: "Domain safeguards, authorization, and reporting",
    area: "Safety",
    description:
      "No domain boundary, human review, privacy control, access role, consent, explainability, incident workflow, reproducible report, or disclosure state is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No train, infer, forecast, score, publish, export, approve, delete, or model, prediction, or personal-data mutation is connected or persisted.",
  },
];
export default function PredictiveModels() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Predictive modeling is unavailable locally. No dataset, feature, target, model, evaluation, forecast, uncertainty, authorization, or prediction record was loaded or saved."
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
      `${action} is unavailable locally. No dataset, model, forecast, score, uncertainty, privacy, authorization, or prediction mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="predictive-models-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Sparkles className="size-3.5" aria-hidden="true" />{" "}
                  Predictive-model readiness workspace
                </Badge>
                <Badge variant="secondary">No model data</Badge>
              </div>
              <h1
                id="predictive-models-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                PredictiveModels readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review dataset and feature provenance, model versioning,
                evaluation, calibration, uncertainty, domain safeguards,
                authorization, human review, reproducibility, and
                forecast-action boundaries without implying that predictions,
                scores, forecasts, or model outputs exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Predictive modeling is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No data source, feature pipeline, model runtime, evaluation
                store, uncertainty calibration, domain safeguard, human-review
                workflow, authorization control, or persistence layer is
                connected. This workspace cannot train, infer, forecast, score,
                publish, export, approve, delete, or claim model outputs.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Sparkles
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No model data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No dataset, feature, target, label, account, tenant, consent,
                training snapshot, or prediction record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No evaluation state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No model version, metric, baseline, calibration, confidence,
                uncertainty, drift, bias, or error-analysis state exists.
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
                No train, infer, forecast, score, publish, export, approve,
                delete, or prediction-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Predictive-model governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads a dataset, runs a model, generates a forecast, scores a
              person, or saves predictions.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search PredictiveModels readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter model requirements"
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
                  No model requirements match “{query}”.
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
                Production predictive modeling requires authoritative data and
                feature provenance, lawful consent and privacy, versioned and
                reproducible pipelines, independent evaluation, calibration and
                uncertainty, drift and bias monitoring, domain-specific
                safeguards, human oversight, access controls, incident response,
                and clear disclosure of observed versus predicted information.
                No forecast, score, model output, or prediction record is
                claimed here.
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
