import { useMemo, useState } from "react";
import {
  Activity,
  Bell,
  CircleSlash2,
  Gauge,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type MonitorArea = "All" | "Core" | "Financial" | "Education";
type MonitorState = "All" | "Review" | "Unavailable" | "Monitored";
type MonitorConcept = {
  id: string;
  title: string;
  area: Exclude<MonitorArea, "All">;
  state: Exclude<MonitorState, "All">;
  summary: string;
  endpoint: string;
  uptime: string;
  latency: string;
  traffic: string;
  incidents: string;
  alerts: string;
};
const concepts: MonitorConcept[] = [
  {
    id: "core-api",
    title: "Core system events",
    area: "Core",
    state: "Review",
    summary:
      "A local system-log concept pending authenticated collectors, event ownership, bounded retention, incident linkage, redaction, and access controls.",
    endpoint: "Event-source inventory unavailable",
    uptime: "Timestamp coverage unavailable",
    latency: "Correlation coverage unavailable",
    traffic: "Event volume unavailable",
    incidents: "Incident linkage unavailable",
    alerts: "Alert routing unavailable",
  },
  {
    id: "financial-api",
    title: "Financial system events",
    area: "Financial",
    state: "Unavailable",
    summary:
      "A local financial-log concept pending event provenance, sensitive-log controls, failure classification, redaction, and escalation ownership.",
    endpoint: "Event-source inventory unavailable",
    uptime: "Timestamp coverage unavailable",
    latency: "Correlation coverage unavailable",
    traffic: "Event volume unavailable",
    incidents: "Incident linkage unavailable",
    alerts: "Alert routing unavailable",
  },
  {
    id: "education-api",
    title: "Education system events",
    area: "Education",
    state: "Monitored",
    summary:
      "A local education-log concept pending learner-safe event provenance, retention limits, privacy controls, and auditable alert policy.",
    endpoint: "Event-source inventory unavailable",
    uptime: "Timestamp coverage unavailable",
    latency: "Correlation coverage unavailable",
    traffic: "Event volume unavailable",
    incidents: "Incident linkage unavailable",
    alerts: "Alert routing unavailable",
  },
];
const areas: MonitorArea[] = ["All", "Core", "Financial", "Education"];
const states: MonitorState[] = ["All", "Review", "Unavailable", "Monitored"];
export default function APIMonitoring() {
  const [area, setArea] = useState<MonitorArea>("All");
  const [state, setState] = useState<MonitorState>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "System log service unavailable. Showing local observability concepts only."
  );
  const filtered = useMemo(
    () =>
      concepts.filter(
        item =>
          (area === "All" || item.area === area) &&
          (state === "All" || item.state === state)
      ),
    [area, state]
  );
  const selected =
    filtered.find(item => item.id === selectedId) ?? filtered[0] ?? concepts[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No collector request, event ingestion, log mutation, incident, alert, notification, or status transition was started.`
    );
  const metadata: Array<[string, string]> = [
    ["Event source", selected.endpoint],
    ["Timestamps", selected.uptime],
    ["Correlation", selected.latency],
    ["Event volume", selected.traffic],
    ["Incidents", selected.incidents],
    ["Alerts", selected.alerts],
  ];
  return (
    <div data-ui-polish="batch-180" className="min-h-screen bg-background">
      <PageHeader
        icon={Activity}
        title="System logs"
        subtitle="Review local log-governance concepts without fabricated events, timestamps, severity, request traces, retention, alerts, access, or operational claims."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>System log service unavailable.</strong> No log collector,
            event stream, timestamp source, severity classifier, request
            correlation, retention store, redaction pipeline, access policy,
            alert route, or audit source is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "System log service remains unavailable. Local log-governance concepts were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset monitors
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  System-log preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review system events
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show log-governance structure only.
                  They do not represent real events, timestamps, severity,
                  request volume, traces, incidents, alerts, retention, access,
                  privacy, or operational state.
                </p>
              </div>
              <Gauge className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Monitoring area filter"
            >
              {areas.map(item => (
                <Button
                  aria-pressed={area === item}
                  key={item}
                  onClick={() => setArea(item)}
                  size="sm"
                  variant={area === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Monitoring state filter"
            >
              {states.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(item => (
                <button
                  aria-pressed={selected.id === item.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === item.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{item.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {item.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{item.area}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.summary}
                  </p>
                </button>
              ))}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected log concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.area} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {metadata.map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No event source, timestamp, correlation, event volume, incident
                linkage, or alert state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Add collector concept")}
                  variant="outline"
                >
                  <Activity className="mr-2 h-4 w-4" /> Probe unavailable
                </Button>
                <Button
                  onClick={() => blocked("Refresh log concepts")}
                  variant="outline"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  System logging requires authenticated collectors, trustworthy
                  timestamps, event schemas, severity policy, request
                  correlation, bounded retention, redaction and secret
                  detection, least-privilege access, alert deduplication,
                  incident ownership, and auditable evidence.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Probe, telemetry, incident, alert, notification, and status
                  transitions must be auditable and isolated from fabricated
                  observability outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No endpoint probe, traffic collection, uptime claim, incident
                  creation, alert delivery, notification, or monitoring mutation
                  is available from this preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
