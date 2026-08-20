import { useMemo, useState } from "react";
import {
  Activity,
  AlertTriangle,
  Check,
  CircleGauge,
  Clock3,
  Database,
  HardDrive,
  RefreshCw,
  Server,
  ShieldAlert,
  Wifi,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ScreenFeatureGrid,
  ScreenHero,
  ScreenPreviewBanner,
  ScreenStatGrid,
} from "@/components/ScreenExperience";
const services = [
  {
    id: 1,
    name: "API service",
    scope:
      "Request health, authentication, authorization, latency, rate limits, and error evidence.",
    state: "Telemetry unavailable",
  },
  {
    id: 2,
    name: "Database service",
    scope:
      "Connection pool, query latency, migrations, locks, replication, backups, and failure evidence.",
    state: "Telemetry unavailable",
  },
  {
    id: 3,
    name: "Worker service",
    scope:
      "Queue depth, retries, idempotency, schedules, dead letters, and job outcome evidence.",
    state: "Telemetry unavailable",
  },
  {
    id: 4,
    name: "Storage service",
    scope:
      "Object availability, capacity, uploads, downloads, retention, permissions, and integrity evidence.",
    state: "Telemetry unavailable",
  },
  {
    id: 5,
    name: "AI service",
    scope:
      "Provider availability, model routing, latency, quota, safety, privacy, and response evidence.",
    state: "Telemetry unavailable",
  },
  {
    id: 6,
    name: "Blockchain gateway",
    scope:
      "RPC health, chain ID, nonce, fee, signing, broadcast, confirmation, and transaction evidence.",
    state: "Telemetry unavailable",
  },
];
const metrics = [
  { label: "CPU", icon: CircleGauge },
  { label: "Memory", icon: HardDrive },
  { label: "Disk I/O", icon: Database },
  { label: "Network", icon: Wifi },
];
export default function ServerHealth() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(1);
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const [refreshState, setRefreshState] = useState("Refresh unavailable");
  const selectedService =
    services.find(item => item.id === selected) ?? services[0];
  const filtered = useMemo(
    () =>
      services.filter(item =>
        `${item.name} ${item.scope}`.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );
  const reset = () => {
    setQuery("");
    setSelected(1);
    setSaved(false);
    setShowGates(false);
    setRefreshState("Refresh unavailable");
  };
  return (
    <div data-ui-polish="batch-203" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Activity}
        eyebrow="Server health · Observability preview"
        title="Make health claims only when telemetry proves them."
        description="Explore a local infrastructure-health workspace with service selection, metric concepts, incident states, refresh/error/loading controls, save/reset, and evidence gates. No server, uptime, latency, capacity, availability, incident, or monitoring data is connected."
        badge="Evidence-bounded operations workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save health view"}
          </Button>
          <Button
            onClick={() => setRefreshState("Telemetry unavailable")}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            {refreshState}
          </Button>
          <Button
            onClick={() => setShowGates(value => !value)}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            {showGates ? (
              <X className="mr-2 size-4" />
            ) : (
              <ShieldAlert className="mr-2 size-4" />
            )}
            {showGates ? "Close gates" : "Review health gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset view
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Services",
              value: `${services.length} local`,
              hint: "No telemetry",
              icon: Server,
              tone: "cyan",
            },
            {
              label: "Availability",
              value: "Unknown",
              hint: "No probe source",
              icon: Wifi,
              tone: "violet",
            },
            {
              label: "Incidents",
              value: "Unavailable",
              hint: "No incident feed",
              icon: AlertTriangle,
              tone: "amber",
            },
            {
              label: "Last check",
              value: "Not run",
              hint: "No monitor",
              icon: Clock3,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Infrastructure evidence boundary">
          <strong>
            This is a local observability design preview, not evidence that any
            service is healthy, available, online, secure, performant, backed
            up, or operational.
          </strong>{" "}
          Service cards, metric bars, incident states, saved state, refresh
          controls, and disabled telemetry actions are browser concepts. No
          uptime, latency, CPU, memory, disk, network, capacity, incident
          resolution, SLA, security posture, deployment, user impact, or
          production metric is asserted.
        </ScreenPreviewBanner>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end">
              <label className="flex-1 text-sm font-semibold text-slate-300">
                Find a service
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search service concepts"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                />
              </label>
              <Badge
                variant="outline"
                className="w-fit border-amber-300/20 text-amber-200"
              >
                {filtered.length} concepts · no live telemetry
              </Badge>
            </div>
          </CardContent>
        </Card>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Service inventory
              </p>
              <h2 className="mt-2 text-2xl font-black">
                Select a health boundary
              </h2>
              <div className="mt-6 space-y-3">
                {filtered.map(service => (
                  <button
                    key={service.id}
                    onClick={() => setSelected(service.id)}
                    className={`w-full rounded-xl border p-4 text-left ${selected === service.id ? "border-cyan-300/40 bg-cyan-300/[0.06]" : "border-white/10"}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{service.name}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {service.scope}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-amber-300/20 text-amber-200"
                      >
                        {service.state}
                      </Badge>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                    Selected service
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    {selectedService.name}
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  Unknown
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {selectedService.scope}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Status", value: "Unknown" },
                  { label: "Uptime", value: "Unavailable" },
                  { label: "Latency", value: "Unavailable" },
                  { label: "Capacity", value: "Unavailable" },
                  { label: "Errors", value: "Unavailable" },
                  { label: "Last probe", value: "Not run" },
                ].map(item => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 p-3"
                  >
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold text-amber-200">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {metrics.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-slate-300">
                        <Icon className="size-4 text-cyan-300" />
                        {label}
                      </span>
                      <span className="text-xs text-amber-200">
                        Unavailable
                      </span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-1/3 rounded-full bg-slate-700" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Server className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No health evidence loaded</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Connect authenticated probes, service discovery, metric
                  storage, timestamps, region, deployment, alerting, incident
                  management, access controls, and audit before showing health.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Run probe unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Open logs unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Create incident unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Export metrics unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No production-health claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A service concept does not prove uptime, latency,
                    availability, capacity, incident resolution, SLA compliance,
                    security, deployment status, or user impact.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Operations gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real server-health view must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated probe, service identity, region, timestamp, environment, deployment version, health contract, and source provenance",
                "Metrics storage, scrape interval, latency distribution, error rates, saturation, capacity, retention, alert rules, and incident linkage",
                "Database, storage, queue, AI, blockchain, wallet, financial, security, education, marketplace, and user-impact claims require domain evidence",
                "Access controls, tenant isolation, redaction, structured logs, audit trail, alert routing, escalation, incident ownership, and postmortem",
                "Run probe, open logs, create incident, export metrics, acknowledge, resolve, retry, accessibility, and accountable approval require governed operations",
                "A health preview must not be presented as live uptime, availability, security, performance, or production readiness without evidence",
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-3"
                >
                  <ShieldAlert className="size-4 text-slate-500" />
                  <span className="flex-1 text-sm text-slate-300">{item}</span>
                  <span className="text-xs text-amber-200">Required</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <ScreenFeatureGrid
          features={[
            {
              title: "Health surface preserved",
              description:
                "Service inventory, selected-service detail, status, uptime, latency, capacity, metrics, incidents, refresh, save/reset, and gates remain interactive.",
              icon: Activity,
              status: "Local observability",
            },
            {
              title: "No uptime theater",
              description:
                "Availability, performance, resource, incident, SLA, security, deployment, and user-impact claims are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Telemetry before status",
              description:
                "Real health requires governed probes, timestamps, metric provenance, alerting, access controls, incident ownership, and audit.",
              icon: Server,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
