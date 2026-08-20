import { useMemo, useState } from "react";
import {
  Activity,
  Check,
  Filter,
  LockKeyhole,
  RefreshCw,
  RotateCcw,
  Scaling,
  ServerCog,
  ShieldAlert,
  Siren,
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
    name: "Web application resilience",
    category: "Application",
    detail:
      "A local service concept covering health checks, latency, error budgets, deployments, process supervision, rollback, and incident ownership.",
    state: "Telemetry needed",
  },
  {
    id: 2,
    name: "API recovery policy",
    category: "API",
    detail:
      "A local recovery concept covering retries, idempotency, circuit breakers, rate limits, dependency health, and safe operator approval.",
    state: "Unconfigured",
  },
  {
    id: 3,
    name: "Worker scaling policy",
    category: "Workers",
    detail:
      "A local scaling concept covering queue depth, capacity, cost, limits, autoscaling review, graceful shutdown, and recovery tests.",
    state: "Preview",
  },
  {
    id: 4,
    name: "Data-service continuity",
    category: "Data",
    detail:
      "A local continuity concept covering backups, restore tests, replication, consistency, retention, recovery point, and recovery time objectives.",
    state: "High risk",
  },
];
export default function SelfHealingInfra() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [telemetry, setTelemetry] = useState("Telemetry source not configured");
  const [recovery, setRecovery] = useState("Recovery policy not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(services.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      services.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const service = services.find(item => item.id === selected) ?? services[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setTelemetry("Telemetry source not configured");
    setRecovery("Recovery policy not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-203" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={ServerCog}
        eyebrow="Self-healing infrastructure · Resilience preview"
        title="Define the recovery policy before claiming the service healed."
        description="Explore local application, API, worker, and data resilience concepts with search, category filters, telemetry and recovery intent, anomaly/restart/scaling/continuity gates, save/reset, and blocked repair/scale actions. No service, uptime, latency, incident, restart, autoscale, recovery, backup, restore, or operational outcome is connected."
        badge="Infrastructure-resilience workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save policy locally"}
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
            {showGates ? "Close gates" : "Review resilience gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset policy
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Service concepts",
              value: `${services.length} local`,
              hint: "No service source",
              icon: ServerCog,
              tone: "cyan",
            },
            {
              label: "Telemetry",
              value: "Unconfigured",
              hint: "No observability source",
              icon: Activity,
              tone: "violet",
            },
            {
              label: "Recovery",
              value: "Blocked",
              hint: "No runbook source",
              icon: RotateCcw,
              tone: "amber",
            },
            {
              label: "Scaling",
              value: "Not claimed",
              hint: "No capacity source",
              icon: Scaling,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Resilience evidence boundary">
          <strong>
            This is a local infrastructure-resilience preview, not evidence that
            a service is live, healthy, available, repaired, scaled, restored,
            or incident-free.
          </strong>{" "}
          Service cards, filters, telemetry/recovery intent, saved state,
          anomaly/restart/scaling gates, and disabled repair/scale actions are
          browser concepts. No service, uptime, latency, error rate, incident,
          restart, autoscale, backup, restore, capacity, cost, or operational
          outcome is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local resilience concepts"
                  className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-3 text-sm text-white outline-none"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map(entry => (
                  <Button
                    key={entry}
                    onClick={() => setCategory(entry)}
                    size="sm"
                    variant="outline"
                    className={
                      category === entry
                        ? "border-cyan-300/40 bg-cyan-300/[0.08] text-cyan-100"
                        : "border-white/10 text-slate-400"
                    }
                  >
                    {entry}
                  </Button>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {filtered.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item.id)}
                    className={`w-full rounded-xl border p-4 text-left ${selected === item.id ? "border-cyan-300/40 bg-cyan-300/[0.06]" : "border-white/10"}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="mt-1 text-sm text-slate-500">
                          {item.detail}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-amber-300/20 text-amber-200"
                      >
                        {item.state}
                      </Badge>
                    </div>
                    <div className="mt-4">
                      <Badge
                        variant="outline"
                        className="border-white/10 text-slate-500"
                      >
                        {item.category}
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
                    Selected resilience concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{service.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {service.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {service.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: service.category },
                  { label: "Telemetry", value: telemetry },
                  { label: "Recovery", value: recovery },
                  { label: "Health", value: "Unavailable" },
                  { label: "Incident", value: "Unavailable" },
                  { label: "Uptime", value: "Not claimed" },
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
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <label className="text-sm text-slate-400">
                  Telemetry intent
                  <select
                    value={telemetry}
                    onChange={event => setTelemetry(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Telemetry source not configured</option>
                    <option>Application health intent</option>
                    <option>API dependency intent</option>
                    <option>Worker queue intent</option>
                    <option>Data continuity intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Recovery policy
                  <select
                    value={recovery}
                    onChange={event => setRecovery(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Recovery policy not configured</option>
                    <option>Operator-approved intent</option>
                    <option>Retry and circuit-breaker intent</option>
                    <option>Rollback intent</option>
                    <option>Restore-test intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <ServerCog className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No infrastructure evidence loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect scoped service telemetry, health checks, deployment
                  controls, process supervision, runbooks, capacity, backups,
                  recovery tests, incident response, and owner approval before
                  repair.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Inspect unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Restart unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Scale unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Restore unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No healing or uptime claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A resilience concept does not prove a service, uptime,
                    latency, incident, restart, autoscale, backup, restore,
                    capacity, cost, or recovery outcome.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Infrastructure-resilience gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real self-healing system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authorized service, environment, deployment, owner, telemetry, dependency, timestamp, version, and provenance",
                "Health checks, latency, error budgets, anomaly semantics, process supervision, retries, circuit breakers, rate limits, and idempotency",
                "Restart, rollback, autoscaling, capacity, queue, backup, restore, replication, consistency, recovery point/time, and cost controls",
                "Incident severity, ownership, communication, notification, legal hold, privacy, security, and accountable approval",
                "Uptime, performance, scaling, recovery, operational, financial, security, and user-impact claims require domain review",
                "Inspect, restart, scale, restore, notify, export, accessibility, and accountable approval require governed infrastructure operations",
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-3"
                >
                  <LockKeyhole className="size-4 text-slate-500" />
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
              title: "Resilience surface preserved",
              description:
                "Application, API, worker, data services, telemetry, health, incidents, restart, scale, restore, save/reset, and gates remain interactive.",
              icon: ServerCog,
              status: "Local resilience",
            },
            {
              title: "No recovery theater",
              description:
                "Services, uptime, latency, incidents, restarts, scaling, backups, restores, capacity, cost, and outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Telemetry before repair",
              description:
                "Real self-healing requires scoped telemetry, health checks, deployment controls, runbooks, operator approval, recovery tests, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
