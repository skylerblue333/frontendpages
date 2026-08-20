import { useMemo, useState } from "react";
import {
  BarChart3,
  Calculator,
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
    title: "Campaign and channel provenance",
    area: "Evidence",
    description:
      "No campaign, channel, creative, audience, owner, launch date, platform, spend source, or tracking identifier is connected.",
  },
  {
    title: "Cost, revenue, and conversion definitions",
    area: "Method",
    description:
      "No spend ledger, revenue source, currency, margin basis, conversion event, attribution window, denominator, or reconciliation policy is configured.",
  },
  {
    title: "Attribution and measurement integrity",
    area: "Analysis",
    description:
      "No first- or multi-touch method, incrementality design, deduplication, identity graph, experiment, confidence interval, or analyst review exists.",
  },
  {
    title: "Consent and privacy",
    area: "Governance",
    description:
      "No lawful tracking basis, consent state, sensitive audience rule, minimization, retention, redaction, access role, or export control is verified.",
  },
  {
    title: "Reporting and decision boundary",
    area: "Operations",
    description:
      "No dashboard refresh, source freshness, anomaly, budget alert, recommendation, audit event, correction, or recovery evidence is available.",
  },
];
export default function MarketingROI() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "MarketingROI is unavailable locally. No campaign, spend, revenue, conversion, attribution, ROI, chart, or recommendation was loaded or saved."
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
      `${action} is unavailable locally. No campaign, spend, revenue, conversion, attribution, ROI, budget, or marketing-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="marketing-roi-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Calculator className="size-3.5" aria-hidden="true" />{" "}
                  Marketing-measurement readiness
                </Badge>
                <Badge variant="secondary">No analytics service</Badge>
              </div>
              <h1
                id="marketing-roi-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MarketingROI readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review campaign provenance, cost and revenue definitions,
                conversion and attribution methodology, consent, privacy,
                reconciliation, and reporting boundaries without presenting
                fabricated spend, return, ROI, or recommendations.
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
                Marketing analytics is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No campaign store, spend ledger, revenue source, conversion
                events, attribution service, consent layer, reporting pipeline,
                or persistence layer is connected. This is a readiness
                workspace, not a financial-performance report.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <BarChart3
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No campaign data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No campaign, channel, creative, audience, spend, revenue,
                conversion, currency, or tracking state is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Calculator
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No ROI calculation</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No cost basis, attribution window, margin, denominator,
                incrementality, reconciliation, ROI, or confidence interval is
                verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No marketing actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No ingest, attribute, calculate, publish, recommend, budget,
                export, or marketing-data mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Marketing-measurement governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads spend or revenue, attributes a conversion, calculates ROI,
              publishes a chart, changes a budget, or saves marketing data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search MarketingROI readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter marketing-measurement requirements"
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
                  No marketing-measurement notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <Target
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production marketing ROI system needs campaign and cost
                provenance, reconciled revenue, explicit conversion and
                attribution definitions, consent and privacy controls,
                incrementality or experiment design, uncertainty, analyst
                review, freshness monitoring, and a clear boundary against
                unsupported financial decisions. No ROI, return, revenue, or
                marketing recommendation is claimed here.
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
