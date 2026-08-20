import { useMemo, useState } from "react";
import {
  AlertTriangle,
  FileSearch,
  FileText,
  LockKeyhole,
  Search,
  ShieldCheck,
  Target,
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
    title: "Claim and source provenance",
    area: "Evidence",
    description:
      "No narrative claim, metric, source URL, owner, citation, definition, timestamp, freshness window, calculation, or reproducible evidence is connected.",
  },
  {
    title: "Audience, consent, and disclosure",
    area: "Privacy",
    description:
      "No audience segment, purpose, consent, opt-out, personalization rule, sensitive attribute, disclosure, accessibility statement, or retention policy is verified.",
  },
  {
    title: "Approval, legal, and compliance controls",
    area: "Governance",
    description:
      "No reviewer, approval record, legal sign-off, risk classification, market claim review, security statement, financial disclosure, or versioned publication state exists.",
  },
  {
    title: "Narrative testing and measurement",
    area: "Measurement",
    description:
      "No hypothesis, variant, sample, denominator, attribution window, experiment assignment, conversion metric, bias check, or statistical result is available.",
  },
  {
    title: "Delivery, rollback, and auditability",
    area: "Operations",
    description:
      "No channel, publication endpoint, schedule, localization, rollback, incident, change history, export, or immutable audit trail is connected.",
  },
];
export default function NarrativeEngine() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Narrative engine is unavailable locally. No claim, audience, source, approval, experiment, publication, or analytics record was loaded or saved."
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
      `${action} is unavailable locally. No claim, audience, source, approval, experiment, publication, privacy, compliance, or analytics-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="narrative-engine-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <FileText className="size-3.5" aria-hidden="true" />{" "}
                  Narrative-governance workspace
                </Badge>
                <Badge variant="secondary">No claim registry</Badge>
              </div>
              <h1
                id="narrative-engine-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                NarrativeEngine readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review claim provenance, audience consent, source freshness,
                approvals, legal and compliance controls, narrative experiments,
                measurement, delivery, privacy, and auditability without
                implying that claims, audiences, metrics, or publications exist.
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
                Narrative engine is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No claim registry, source catalog, audience service, consent
                manager, approval workflow, legal review, experiment platform,
                analytics pipeline, publication endpoint, or persistence layer
                is connected. This workspace cannot generate, test, publish, or
                claim a narrative.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <FileText
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No claim records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No metric, market statement, user count, revenue, valuation,
                ROI, security, compliance, or creator claim is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Target className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No measurement state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No audience, variant, assignment, conversion, engagement,
                sample, attribution, or analytics result exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No narrative actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No draft, generate, test, approve, publish, export, retract, or
                analytics-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Narrative-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              generates copy, loads claims, targets an audience, runs an
              experiment, publishes content, or saves analytics data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search NarrativeEngine readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter narrative requirements"
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
                  No narrative notes match “{query}”.
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
                Production narrative tooling requires cited and fresh evidence
                for every claim, audience consent and disclosures, legal and
                compliance approval, reproducible experiments and metrics,
                privacy-preserving personalization, publication controls,
                rollback, and auditable ownership. No claim, audience, source,
                approval, experiment, publication, or analytics record is
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
