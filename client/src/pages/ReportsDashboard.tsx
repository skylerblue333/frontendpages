import { useMemo, useState } from "react";
import {
  BarChart3,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
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
    title: "Report and source provenance",
    area: "Evidence",
    description:
      "No report, subject, reporter, category, evidence, source, reviewer, queue, timestamp, or reporting record is connected.",
  },
  {
    title: "Definitions, aggregation, and freshness",
    area: "Method",
    description:
      "No metric definition, period, denominator, status taxonomy, grouping, trend, backlog rule, SLA, freshness signal, or reconciliation is verified.",
  },
  {
    title: "Privacy, authorization, and audience",
    area: "Controls",
    description:
      "No identity, role, audience, consent, sensitive-data classification, access rule, redaction, or privacy-preserving aggregation exists.",
  },
  {
    title: "Moderation, quality, and recovery",
    area: "Reliability",
    description:
      "No moderation state, quality check, duplicate guard, anomaly signal, correction, retry, audit event, or support recovery path is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No refresh, filter, drill down, assign, export, share, annotate, resolve, delete, or report, identity, account, or personal-data mutation is connected or persisted.",
  },
];
export default function ReportsDashboard() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Reports Dashboard is unavailable locally. No report, subject, reporter, category, queue, metric, count, trend, identity, or personal-data record was loaded or changed."
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
      `${action} is unavailable locally. No report, metric, queue, moderation, identity, account, or personal-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="reports-dashboard-title"
    >
      <div data-ui-polish="batch-200" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BarChart3 className="size-3.5" aria-hidden="true" />{" "}
                  Reporting-analytics readiness workspace
                </Badge>
                <Badge variant="secondary">No reports state</Badge>
              </div>
              <h1
                id="reports-dashboard-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                ReportsDashboard readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review report and source provenance, definitions and
                aggregation, privacy and audience, authorization, moderation
                quality, freshness, audit, recovery, and persistence boundaries
                without implying that report counts, queues, trends, outcomes,
                identities, or analytics exist.
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
                Reports Dashboard is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No reporting source, metric catalog, moderation queue, privacy
                policy, authorization layer, freshness monitor, audit store, or
                persistence layer is connected. This workspace cannot refresh,
                filter, drill down, assign, export, share, annotate, resolve,
                delete, or claim report analytics.
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
              <h2 className="font-semibold">No reports state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No report, subject, reporter, category, evidence, reviewer,
                queue, timestamp, or reporting record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <UsersRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No metrics state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No definition, period, count, denominator, status, group, trend,
                backlog, SLA, or freshness signal exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No dashboard actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No refresh, filter, drill down, assign, export, share, annotate,
                resolve, delete, or report mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Reporting analytics governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads reports, calculates metrics, exposes identities, routes
              moderation, or saves analytics records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search ReportsDashboard readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter reporting analytics requirements"
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
                  No reporting analytics requirements match “{query}”.
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
                Production reporting analytics require authoritative report
                sources, explicit metric definitions and period discipline,
                privacy-preserving aggregation, role and audience controls,
                moderation-quality signals, duplicate and anomaly handling,
                freshness and reconciliation, audit history, and clear
                correction or recovery workflows. No report, metric, queue,
                moderation, identity, account, or personal-data record is
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
