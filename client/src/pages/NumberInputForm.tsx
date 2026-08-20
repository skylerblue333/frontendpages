import { useMemo, useState } from "react";
import {
  Calculator,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
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
    title: "Input meaning and units",
    area: "Semantics",
    description:
      "No field label, unit, locale, decimal precision, range, step, sign convention, source, or business meaning is connected.",
  },
  {
    title: "Validation and error feedback",
    area: "Reliability",
    description:
      "No required rule, min/max bound, integer or decimal policy, formatting rule, parse error, inline message, or correction state is verified.",
  },
  {
    title: "Accessibility and localization",
    area: "Accessibility",
    description:
      "No form contract, accessible name, description, keyboard behavior, locale formatting, screen-reader error association, or focus recovery is connected.",
  },
  {
    title: "Privacy and persistence",
    area: "Privacy",
    description:
      "No owner, sensitive-data classification, consent purpose, retention, server validation, draft, persistence, or audit record exists.",
  },
  {
    title: "Submission and calculation boundary",
    area: "Safety",
    description:
      "No submit, calculate, transform, save, export, API call, financial decision, or numeric-data mutation is connected or persisted.",
  },
];
export default function NumberInputForm() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Number input functionality is unavailable locally. No numeric value, unit, validation result, calculation, or record was loaded or saved."
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
      `${action} is unavailable locally. No numeric value, unit, validation, calculation, privacy, or data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="number-input-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Calculator className="size-3.5" aria-hidden="true" />{" "}
                  Numeric-input readiness workspace
                </Badge>
                <Badge variant="secondary">No input contract</Badge>
              </div>
              <h1
                id="number-input-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                NumberInputForm readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review numeric meaning, units, validation, accessibility,
                localization, privacy, persistence, and submission boundaries
                without implying that a numeric value, calculation, or record
                exists.
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
                Number input is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No input contract, validation service, unit registry, locale
                policy, calculation service, form persistence, or API endpoint
                is connected. This workspace cannot accept, validate, calculate,
                submit, save, export, or claim numeric data.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Calculator
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No numeric value</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No field, unit, locale, precision, range, step, sign convention,
                or numeric record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No validation state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No required rule, bounds, parse result, formatting policy,
                error, or correction state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No numeric actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No submit, calculate, transform, save, export, API call, or
                numeric-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Numeric-input governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              accepts a numeric value, performs validation, calculates, or saves
              a record.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search NumberInputForm readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter input requirements"
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
                  No input requirements match “{query}”.
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
                Production numeric forms require an explicit field contract,
                units and locale, bounded validation, accessible errors,
                server-side revalidation, privacy classification, safe
                persistence, auditability, and clear feedback for every
                mutation. No numeric value, calculation, or record is claimed
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
