import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  FileWarning,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Boundary = { title: string; area: string; description: string };
const boundaries: readonly Boundary[] = [
  {
    title: "Detection and incident source",
    area: "Signals",
    description:
      "No application error, security alert, outage, user report, vendor notice, source system, timestamp, or incident record is connected.",
  },
  {
    title: "Triage and severity",
    area: "Response",
    description:
      "No impact scope, severity, priority, affected service, customer count, status, owner, or escalation decision is evaluated.",
  },
  {
    title: "Response and containment",
    area: "Operations",
    description:
      "No runbook, on-call path, containment action, evidence collection, communication, change, or recovery action exists.",
  },
  {
    title: "Privacy and access",
    area: "Governance",
    description:
      "No incident role, least privilege, sensitive-data redaction, legal hold, retention, audit, or disclosure boundary is configured.",
  },
  {
    title: "Post-incident assurance",
    area: "Learning",
    description:
      "No timeline, root-cause analysis, corrective action, owner, due date, verification, metric, or closure record is available.",
  },
];
export default function IncidentManagement() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Incident Management is unavailable locally. No incident, alert, severity, response action, or mutation was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No incident, severity, response, communication, or post-incident record was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="incident-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <AlertTriangle className="size-3.5" aria-hidden="true" />{" "}
                  Incident-readiness
                </Badge>
                <Badge variant="secondary">No incident service</Badge>
              </div>
              <h1
                id="incident-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Incident Management readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review detection, triage, response, access, and post-incident
                contracts required for responsible operations without implying
                that an incident, outage, alert, or recovery action exists.
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
                Incident service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No signal source, alert pipeline, incident record, severity
                model, response runbook, communication process, or persistence
                layer is connected. This is a readiness workspace, not an
                operational incident console.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <AlertTriangle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No incident signals</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No error, security alert, outage, report, vendor notice,
                timestamp, or incident record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No response scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No impact, severity, owner, escalation, runbook, containment, or
                communication action is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No closure evidence</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No timeline, root cause, corrective action, verification,
                metric, or closure record exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Incident-governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never
              creates an incident, assigns severity, sends a response message,
              changes a service, or saves a post-incident record.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Incident Management readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter incident requirements"
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
                  No incident notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production incident system needs signal and alert contracts,
                impact and severity semantics, ownership and escalation,
                runbooks, containment and communication, access and privacy
                controls, timelines, corrective actions, verification,
                auditability, observability, and tested recovery. No incident
                service is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
