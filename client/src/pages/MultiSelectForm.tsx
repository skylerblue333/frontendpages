import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckSquare,
  FileSearch,
  FormInput,
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
    title: "Field schema and option provenance",
    area: "Schema",
    description:
      "No field identifier, label, option source, value type, default, ordering, locale, dependency, version, or owner contract is connected.",
  },
  {
    title: "Authorization and data boundary",
    area: "Access",
    description:
      "No account, role, workspace, field permission, sensitive-data boundary, consent, audience, or server-side authorization rule is verified.",
  },
  {
    title: "Validation and submission contract",
    area: "Validation",
    description:
      "No required rule, cardinality, duplicate handling, error message, request schema, idempotency key, success state, or retry path exists.",
  },
  {
    title: "Accessibility and responsive behavior",
    area: "Accessibility",
    description:
      "No keyboard path, group label, selected-state announcement, focus restoration, touch target, mobile layout, or screen-reader error state is tested.",
  },
  {
    title: "Privacy, persistence, and auditability",
    area: "Governance",
    description:
      "No draft, selection, submission, retention, export, deletion, telemetry, change history, or audit record is available.",
  },
];
export default function MultiSelectForm() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Multi-select form is unavailable locally. No schema, option, account, selection, draft, submission, or form record was loaded or saved."
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
      `${action} is unavailable locally. No schema, option, account, selection, draft, submission, privacy, or form-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="multi-select-form-title"
    >
      <div data-ui-polish="batch-196" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <CheckSquare className="size-3.5" aria-hidden="true" />{" "}
                  Form-readiness workspace
                </Badge>
                <Badge variant="secondary">No form schema</Badge>
              </div>
              <h1
                id="multi-select-form-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MultiSelectForm readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review field schema, option provenance, authorization,
                validation, accessibility, privacy, persistence, submission, and
                auditability without implying that a form, selection, draft, or
                submitted record exists.
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
                Multi-select form is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No form schema, option registry, account service, authorization
                layer, validation contract, persistence store, submission
                endpoint, accessibility behavior, or audit pipeline is
                connected. This workspace cannot select, validate, submit, save,
                or claim form data.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <FormInput
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No form records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No field, label, option, default, dependency, locale, schema, or
                version is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No selection state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No selected values, draft, validation result, submission
                request, success, or error state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No form actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No select, reset, validate, submit, save, export, or form-data
                mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Form-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads a schema, reveals options, changes a selection, validates
              input, submits a request, or saves form data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search multi-select form readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter form requirements"
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
                  No form notes match “{query}”.
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
                Production multi-select forms require versioned field and option
                schemas, permission-aware data boundaries, accessible selection
                and validation, idempotent submissions,
                loading/success/failure/retry states, privacy and retention
                controls, and auditable changes. No schema, option, selection,
                draft, submission, or form record is claimed here.
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
