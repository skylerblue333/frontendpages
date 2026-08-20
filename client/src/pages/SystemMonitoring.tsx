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
    title: "Core monitored service",
    area: "Core",
    state: "Review",
    summary:
      "A local monitoring concept pending authenticated probes, endpoint ownership, bounded telemetry, incident routing, privacy, and redacted observability data.",
    endpoint: "Endpoint inventory unavailable",
    uptime: "Uptime measurement unavailable",
    latency: "Latency measurement unavailable",
    traffic: "Traffic volume unavailable",
    incidents: "Incident feed unavailable",
    alerts: "Alert routing unavailable",
  },
  {
    id: "financial-api",
    title: "Financial monitored service",
    area: "Financial",
    state: "Unavailable",
    summary:
      "A local financial monitoring concept pending network-aware probes, sensitive-log controls, failure classification, privacy, and escalation ownership.",
    endpoint: "Endpoint inventory unavailable",
    uptime: "Uptime measurement unavailable",
    latency: "Latency measurement unavailable",
    traffic: "Traffic volume unavailable",
    incidents: "Incident feed unavailable",
    alerts: "Alert routing unavailable",
  },
  {
    id: "education-api",
    title: "Education monitored service",
    area: "Education",
    state: "Monitored",
    summary:
      "A local education monitoring concept pending learner-safe telemetry, retention limits, privacy controls, availability evidence, and auditable alert policy.",
    endpoint: "Endpoint inventory unavailable",
    uptime: "Uptime measurement unavailable",
    latency: "Latency measurement unavailable",
    traffic: "Traffic volume unavailable",
    incidents: "Incident feed unavailable",
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
    "System monitoring service unavailable. Showing local observability concepts only."
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
      `${action} is unavailable locally. No probe, endpoint request, telemetry collection, incident, alert, notification, or status mutation was started.`
    );
  const metadata: Array<[string, string]> = [
    ["Endpoint", selected.endpoint],
    ["Uptime", selected.uptime],
    ["Latency", selected.latency],
    ["Traffic", selected.traffic],
    ["Incidents", selected.incidents],
    ["Alerts", selected.alerts],
  ];
  return (
    <div data-ui-polish="batch-180" className="min-h-screen bg-background">
      <PageHeader
        icon={Activity}
        title="System monitoring"
        subtitle="Review local monitoring concepts without fabricated probes, uptime, latency, traffic, incidents, alerts, availability, performance, privacy, or SLA claims."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>System monitoring service unavailable.</strong> No probe
            service, endpoint inventory, traffic telemetry, latency measurement,
            incident feed, alert routing, availability source, or SLA source is
            connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "System monitoring service remains unavailable. Local monitoring concepts were reset."
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
                  System-monitoring preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review monitored services
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show monitoring structure only.
                  They do not represent real probes, endpoints, uptime, latency,
                  request volume, incidents, alerts, availability, performance,
                  privacy, or SLA state.
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
                Selected monitoring concept
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
                No endpoint, uptime, latency, traffic, incident, or alert state
                is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Add probe concept")}
                  variant="outline"
                >
                  <Activity className="mr-2 h-4 w-4" /> Probe unavailable
                </Button>
                <Button
                  onClick={() => blocked("Refresh monitoring concepts")}
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
                  System monitoring requires authenticated probes, endpoint
                  ownership, trustworthy telemetry, bounded retention, redacted
                  logs, rate-limit awareness, alert deduplication, incident
                  ownership, escalation controls, privacy, and auditable status
                  evidence.
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
