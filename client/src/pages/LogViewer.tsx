import { useMemo, useState } from "react";
import {
  FileWarning,
  ListFilter,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  TerminalSquare,
  TimerReset,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Log source and event schema",
    area: "Evidence",
    description:
      "No service, source, timestamp, severity, correlation ID, structured event schema, retention tier, or ingestion contract is connected.",
  },
  {
    title: "Query, filter, and ordering",
    area: "Behavior",
    description:
      "No authorized query, field allowlist, filter operator, time range, pagination cursor, ordering, sampling, or search index is configured.",
  },
  {
    title: "Privacy and redaction",
    area: "Security",
    description:
      "No secret masking, personal-data redaction, access role, tenant boundary, export control, retention policy, or viewer audit is verified.",
  },
  {
    title: "Reliability and integrity",
    area: "Operations",
    description:
      "No ingestion lag, dropped-event signal, duplicate handling, clock policy, checksum, outage state, retry, or recovery evidence exists.",
  },
  {
    title: "Incident and action boundary",
    area: "Governance",
    description:
      "No incident, alert, annotation, acknowledgment, remediation, deletion, or log mutation workflow is available.",
  },
];
export default function LogViewer() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "LogViewer is unavailable locally. No event, source, query result, incident, alert, or log mutation was loaded or saved."
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
      `${action} is unavailable locally. No log event, query, filter, incident, alert, annotation, export, or operational mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="log-viewer-title"
    >
      <div data-ui-polish="batch-194" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <TerminalSquare className="size-3.5" aria-hidden="true" />{" "}
                  Observability readiness
                </Badge>
                <Badge variant="secondary">No log service</Badge>
              </div>
              <h1
                id="log-viewer-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Log Viewer readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review event provenance, query authorization, redaction,
                retention, integrity, and incident boundaries without implying
                that logs, incidents, alerts, or operational data exist.
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
                Log service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No event source, ingestion pipeline, structured schema,
                authorized query service, redaction layer, retention store, or
                persistence layer is connected. This is a readiness workspace,
                not an operational log viewer.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <TerminalSquare
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No log events</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No source, event, timestamp, severity, correlation ID,
                structured record, incident, or alert is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <TimerReset
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No query state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No authorized query, time range, filter, ordering, pagination,
                sampling, retention, or ingestion state is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No log actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No acknowledge, annotate, export, delete, remediate, alert, or
                operational mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Observability governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads events, executes an operational query, exposes sensitive
              data, creates an incident, exports logs, or saves a log mutation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Log Viewer readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter observability requirements"
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
                  No observability notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <ListFilter
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production log viewer needs structured event provenance,
                authorized and tenant-scoped queries, field allowlists and
                secret redaction, retention and export controls, ingestion
                integrity, clock and correlation policy, incident workflows,
                auditability, and tested outage recovery. No log event or
                operational incident is claimed here.
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
