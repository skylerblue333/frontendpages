import { useMemo, useState } from "react";
import {
  AlertTriangle,
  BellRing,
  CircleSlash2,
  Clock3,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type StatusArea = "All" | "Core" | "Financial" | "Education";
type StatusState = "All" | "Review" | "Unavailable" | "Planned";
type StatusConcept = {
  id: string;
  title: string;
  area: Exclude<StatusArea, "All">;
  state: Exclude<StatusState, "All">;
  summary: string;
  availability: string;
  incidents: string;
  maintenance: string;
  uptime: string;
  latency: string;
  sla: string;
};
const concepts: StatusConcept[] = [
  {
    id: "core-status",
    title: "Core platform status",
    area: "Core",
    state: "Review",
    summary:
      "A local status concept pending verified probes, incident ownership, maintenance approvals, historical evidence, and publication review.",
    availability: "Availability state unavailable",
    incidents: "Incident state unavailable",
    maintenance: "Maintenance calendar unavailable",
    uptime: "Uptime history unavailable",
    latency: "Latency history unavailable",
    sla: "SLA evidence unavailable",
  },
  {
    id: "financial-status",
    title: "Financial service status",
    area: "Financial",
    state: "Unavailable",
    summary:
      "A local financial status concept pending network-aware service evidence, customer-impact review, communication controls, and recovery verification.",
    availability: "Availability state unavailable",
    incidents: "Incident state unavailable",
    maintenance: "Maintenance calendar unavailable",
    uptime: "Uptime history unavailable",
    latency: "Latency history unavailable",
    sla: "SLA evidence unavailable",
  },
  {
    id: "education-status",
    title: "Education service status",
    area: "Education",
    state: "Planned",
    summary:
      "A local education status concept pending learner-safe incident communications, maintenance ownership, and auditable service evidence.",
    availability: "Availability state unavailable",
    incidents: "Incident state unavailable",
    maintenance: "Maintenance calendar unavailable",
    uptime: "Uptime history unavailable",
    latency: "Latency history unavailable",
    sla: "SLA evidence unavailable",
  },
];
const areas: StatusArea[] = ["All", "Core", "Financial", "Education"];
const states: StatusState[] = ["All", "Review", "Unavailable", "Planned"];
export default function APIStatus() {
  const [area, setArea] = useState<StatusArea>("All");
  const [state, setState] = useState<StatusState>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "API status service unavailable. Showing local status concepts only."
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
      `${action} is unavailable locally. No probe, availability claim, incident, maintenance notice, notification, SLA calculation, or publication was started.`
    );
  const metadata: Array<[string, string]> = [
    ["Availability", selected.availability],
    ["Incidents", selected.incidents],
    ["Maintenance", selected.maintenance],
    ["Uptime", selected.uptime],
    ["Latency", selected.latency],
    ["SLA", selected.sla],
  ];
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={BellRing}
        title="API status"
        subtitle="Review local service-status concepts without fabricated availability, incidents, maintenance, uptime, latency, recovery, customer impact, or SLA claims."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>API status service unavailable.</strong> No status
            aggregation, incident system, maintenance calendar, probe evidence,
            uptime history, or SLA source is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "API status service remains unavailable. Local status concepts were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset status
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Status preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review service status
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show status structure only. They do
                  not represent real availability, incidents, maintenance,
                  uptime, latency, recovery, customer impact, or SLA state.
                </p>
              </div>
              <Clock3 className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Status area filter"
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
              aria-label="Status state filter"
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
                Selected service
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
                No availability, incident, maintenance, uptime, latency, or SLA
                state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Refresh status")}
                  variant="outline"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
                </Button>
                <Button
                  onClick={() => blocked("Publish status")}
                  variant="outline"
                >
                  <BellRing className="mr-2 h-4 w-4" /> Publish unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Status publication requires verified probes, incident
                  ownership, maintenance approvals, communication review,
                  historical evidence, and auditable publication controls.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Availability, incident, maintenance, recovery, notification,
                  and publication transitions must be auditable and isolated
                  from fabricated service outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No probe, availability claim, incident creation, maintenance
                  notice, SLA calculation, notification, or status publication
                  is available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Do not infer customer impact, recovery, or contractual service
                  levels from this local-only state.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
