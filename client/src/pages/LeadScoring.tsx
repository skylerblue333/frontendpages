import { useMemo, useState } from "react";
import {
  BarChart3,
  FileWarning,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  Target,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Lead identity and consent",
    area: "Trust",
    description:
      "No authenticated lead, account owner, organization, consent, communication preference, source, or contact record is connected.",
  },
  {
    title: "Signals and provenance",
    area: "Data",
    description:
      "No verified interaction, campaign, firmographic, behavioral, intent, timestamp, source, or data-quality record is loaded.",
  },
  {
    title: "Scoring model and thresholds",
    area: "Model",
    description:
      "No versioned scoring model, feature definition, weighting, threshold, calibration, decay rule, or assignment policy is configured.",
  },
  {
    title: "Fairness and authorization",
    area: "Governance",
    description:
      "No role, purpose limitation, sensitive-attribute exclusion, fairness review, explainability, retention, export, or decision authorization is verified.",
  },
  {
    title: "Reconciliation and operations",
    area: "Operations",
    description:
      "No score run, CRM reconciliation, duplicate handling, drift check, audit event, override review, notification, or rollback evidence exists.",
  },
];
export default function LeadScoring() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "LeadScoring is unavailable locally. No lead, signal, score, model, qualification, or sales mutation was loaded or saved."
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
      `${action} is unavailable locally. No lead, signal, score, model, qualification, assignment, export, or sales mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="lead-scoring-title"
    >
      <div data-ui-polish="batch-193" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Target className="size-3.5" aria-hidden="true" />{" "}
                  Qualification-model readiness
                </Badge>
                <Badge variant="secondary">No verified signals</Badge>
              </div>
              <h1
                id="lead-scoring-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Lead Scoring readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the identity, signal, model, fairness, authorization, and
                reconciliation contracts required for responsible lead
                qualification without presenting fabricated scores, intent,
                conversion likelihood, or sales outcomes.
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
                Verified lead signals are unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No CRM or marketing source, consent record, signal pipeline,
                scoring model, fairness review, assignment workflow, or
                persistence layer is connected. This is a readiness workspace,
                not a lead-qualification console.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Target className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No lead records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No lead, account, owner, consent, campaign, interaction,
                firmographic, or behavioral record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <BarChart3
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No scoring model</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No versioned features, weights, threshold, calibration, decay
                rule, or score is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No qualification actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No score assignment, routing, override, export, campaign action,
                or sales mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Qualification-model governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads lead data, calculates a score, changes qualification,
              assigns an owner, exports a result, or saves a sales mutation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Lead Scoring readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter qualification-model requirements"
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
                  No qualification-model notes match “{query}”.
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
                A production lead-scoring system needs consented data
                provenance, versioned models and thresholds, calibration,
                fairness and explainability review, least-privilege access, CRM
                reconciliation, duplicate handling, drift monitoring,
                auditability, human override controls, and tested rollback. No
                lead score or sales outcome is claimed here.
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
