import { useMemo, useState } from "react";
import {
  Accessibility,
  Database,
  FileCheck2,
  LockKeyhole,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  UserRoundCheck,
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

type PredictionCapability = {
  title: string;
  description: string;
  icon: typeof Database;
};

const predictionCapabilities: PredictionCapability[] = [
  {
    title: "Data and target provenance",
    description:
      "No customer dataset, feature definitions, churn target, observation window, label quality, account scope, or lineage is connected.",
    icon: Database,
  },
  {
    title: "Model validation and uncertainty",
    description:
      "No trained model, version, calibration, baseline, drift monitor, confidence interval, threshold, or out-of-distribution handling is available.",
    icon: FileCheck2,
  },
  {
    title: "Fairness and privacy",
    description:
      "Sensitive-feature handling, consent, minimization, redaction, fairness evaluation, retention, and privacy impact review are not verified.",
    icon: ShieldCheck,
  },
  {
    title: "Human review and action",
    description:
      "No risk score, recommendation, intervention, alert, explanation, override, audit trail, or human-in-the-loop workflow is configured.",
    icon: UserRoundCheck,
  },
];

export default function ChurnPrediction() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      predictionCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="churn-prediction-title"
    >
      <div data-ui-polish="batch-183" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Predictive analytics boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="churn-prediction-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Churn prediction readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents responsible predictive analytics without
                  pretending that customer data, model outputs, risk scores, or
                  retention recommendations are live or authoritative.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load prediction model unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Churn prediction status"
        >
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck
                      className="size-5 text-primary"
                      aria-hidden="true"
                    />
                    Truthful prediction state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No dataset, feature, label, model, score, explanation,
                    recommendation, or customer action is loaded or generated.
                  </CardDescription>
                </div>
                <SlidersHorizontal
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified churn-prediction service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define target and feature provenance,
                  model validation, uncertainty, fairness, privacy, account
                  authorization, human review, and safe action boundaries before
                  this route can score a customer or recommend an intervention.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable prediction actions"
              >
                {[
                  "Load cohort",
                  "Run prediction",
                  "View explanations",
                  "Create intervention",
                ].map(label => (
                  <Button
                    key={label}
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled
                    aria-disabled="true"
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Release requirements</CardTitle>
              <CardDescription>
                These safeguards must be verified before prediction controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Customer data lineage, feature definitions, churn target,
                observation window, label quality, scope, and access.
              </p>
              <p>
                Model version, calibration, baseline, drift monitoring,
                uncertainty, thresholds, and out-of-distribution behavior.
              </p>
              <p>
                Sensitive-feature handling, consent, minimization, redaction,
                fairness evaluation, retention, and privacy review.
              </p>
              <p>
                Explanations, human review, overrides, action authorization,
                intervention safeguards, audit, and redacted telemetry.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Prediction capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not read customer data, run a model,
              calculate a score, recommend an action, or persist an
              intervention.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search churn prediction capability notes"
                placeholder="Search capability notes"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            {visibleCapabilities.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {visibleCapabilities.map(
                  ({ title, description, icon: Icon }) => (
                    <div
                      key={title}
                      className="rounded-xl border border-border/70 p-4"
                    >
                      <div className="flex items-center gap-2 font-medium">
                        <Icon
                          className="size-4 text-primary"
                          aria-hidden="true"
                        />
                        {title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div
                className="rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground"
                role="status"
              >
                No capability notes match “{searchQuery}”.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
