import { useMemo, useState } from "react";
import {
  BarChart3,
  FileWarning,
  Globe2,
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
    title: "Source, licensing, and timestamp",
    area: "Evidence",
    description:
      "No licensed market-data source, competitor identity, jurisdiction, collection timestamp, freshness policy, or provenance record is connected.",
  },
  {
    title: "Metric definitions and methodology",
    area: "Method",
    description:
      "No market-size definition, share denominator, growth formula, sentiment method, ranking rule, capability rubric, or model version is configured.",
  },
  {
    title: "Comparability and uncertainty",
    area: "Analysis",
    description:
      "No comparable cohort, segment, currency, period, confidence interval, missing-data treatment, assumption log, or analyst review exists.",
  },
  {
    title: "Privacy, competition, and governance",
    area: "Governance",
    description:
      "No lawful collection, privacy boundary, sensitive-source rule, retention, export control, conflict review, or publication approval is verified.",
  },
  {
    title: "Monitoring and operational recovery",
    area: "Operations",
    description:
      "No scheduled ingest, source outage, duplicate handling, alert, audit event, correction, rollback, or reproducible report evidence exists.",
  },
];
export default function CompetitiveRadar() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "CompetitiveRadar is unavailable locally. No competitor, market, benchmark, sentiment, ranking, trend, or recommendation data was loaded or saved."
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
      `${action} is unavailable locally. No market source, competitor comparison, metric, chart, threat, opportunity, recommendation, or research mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="competitive-radar-title"
    >
      <div data-ui-polish="batch-183" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Globe2 className="size-3.5" aria-hidden="true" />{" "}
                  Market-research readiness
                </Badge>
                <Badge variant="secondary">No market-data service</Badge>
              </div>
              <h1
                id="competitive-radar-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Competitive Radar readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review source licensing, metric definitions, comparability,
                uncertainty, governance, monitoring, and analyst review without
                presenting fabricated competitor counts, market share, growth,
                sentiment, rankings, threats, opportunities, or recommendations.
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
                Market-data service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No licensed source, research methodology, data pipeline,
                timestamp, analyst review, evidence store, or persistence layer
                is connected. This is a readiness workspace, not a
                competitive-intelligence report.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Globe2 className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No market sources</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No competitor, market, jurisdiction, licensed source, timestamp,
                segment, or provenance record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <BarChart3
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No verified metrics</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No market share, growth, sentiment, ranking, capability score,
                trend, confidence, or benchmark is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No intelligence actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No comparison, chart, threat, opportunity, alert,
                recommendation, export, or research mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Market-research governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads a market source, calculates a metric, draws a chart,
              publishes a comparison, issues a recommendation, or saves research
              data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Competitive Radar readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter market-research requirements"
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
                  No market-research notes match “{query}”.
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
                A production competitive-intelligence system needs licensed and
                timestamped sources, documented definitions and methodology,
                comparable cohorts and uncertainty, lawful collection, analyst
                review, correction and provenance controls, reproducible
                reports, and tested recovery. No market metric or competitive
                conclusion is claimed here.
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
