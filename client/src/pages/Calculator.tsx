import { useMemo, useState } from "react";
import {
  Calculator as CalculatorIcon,
  CheckCircle2,
  FileText,
  LockKeyhole,
  Search,
  ShieldCheck,
  Sigma,
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

type CalculationCapability = {
  title: string;
  description: string;
  icon: typeof CalculatorIcon;
};

const calculationCapabilities: CalculationCapability[] = [
  {
    title: "Input validation",
    description:
      "Units, ranges, null handling, rounding, and invalid-input behavior are not connected to a calculation contract.",
    icon: CheckCircle2,
  },
  {
    title: "Formula registry",
    description:
      "Named formulas, versioning, assumptions, dependencies, and reproducibility are not configured.",
    icon: Sigma,
  },
  {
    title: "Precision and output",
    description:
      "Numeric precision, overflow handling, localization, uncertainty, and output formatting require verified tests.",
    icon: CalculatorIcon,
  },
  {
    title: "Audit and safety",
    description:
      "Input provenance, redacted history, authorization, export, and non-advisory disclosures are not verified.",
    icon: FileText,
  },
];

export default function Calculator() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      calculationCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="calculator-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Calculation boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="calculator-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Calculator readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe calculation workflow without
                  presenting an unverified result, formula, forecast, or
                  recommendation as authoritative.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Run calculation unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Calculator status"
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
                    Truthful calculation state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No inputs, formula, result, forecast, or recommendation is
                    loaded or calculated.
                  </CardDescription>
                </div>
                <CalculatorIcon
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified calculation service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define inputs, units, formulas,
                  precision, validation, error behavior, versioning, provenance,
                  and output review before this route can calculate or save a
                  result.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable calculation actions"
              >
                {[
                  "Define inputs",
                  "Choose formula",
                  "Run calculation",
                  "Export result",
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
                These safeguards must be verified before calculation controls
                are enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Explicit units, ranges, null behavior, rounding, precision, and
                overflow semantics.
              </p>
              <p>
                Versioned formulas with documented assumptions, dependencies,
                and reproducible tests.
              </p>
              <p>
                Clear loading, invalid-input, failure, retry, empty, and review
                states.
              </p>
              <p>
                Input provenance, authorization, redacted history, export, and
                non-advisory disclosures.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Calculation capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not evaluate inputs, call services,
              or persist results.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search calculation capability notes"
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
