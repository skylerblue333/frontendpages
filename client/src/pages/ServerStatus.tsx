import { useMemo, useState } from "react";
import {
  Activity,
  AlertTriangle,
  Check,
  GitBranch,
  Globe2,
  LockKeyhole,
  RefreshCw,
  Server,
  ShieldAlert,
  Tag,
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
    name: "Core API",
    team: "Platform",
    status: "Unknown",
    version: "Not observed",
    incident: "No incident feed",
  },
  {
    id: 2,
    name: "Web application",
    team: "Frontend",
    status: "Unknown",
    version: "Not observed",
    incident: "No incident feed",
  },
  {
    id: 3,
    name: "Database",
    team: "Data",
    status: "Unknown",
    version: "Not observed",
    incident: "No incident feed",
  },
  {
    id: 4,
    name: "AI gateway",
    team: "AI",
    status: "Unknown",
    version: "Not observed",
    incident: "No incident feed",
  },
  {
    id: 5,
    name: "Wallet gateway",
    team: "Finance",
    status: "Unknown",
    version: "Not observed",
    incident: "No incident feed",
  },
  {
    id: 6,
    name: "Education services",
    team: "Learning",
    status: "Unknown",
    version: "Not observed",
    incident: "No incident feed",
  },
];
export default function ServerStatus() {
  const [query, setQuery] = useState("");
  const [team, setTeam] = useState("All");
  const [environment, setEnvironment] = useState("Environment not configured");
  const [selected, setSelected] = useState(1);
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const teams = [
    "All",
    ...Array.from(new Set(services.map(item => item.team))),
  ];
  const filtered = useMemo(
    () =>
      services.filter(
        item =>
          (team === "All" || item.team === team) &&
          `${item.name} ${item.team} ${item.status}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [query, team]
  );
  const service = services.find(item => item.id === selected) ?? services[0];
  const reset = () => {
    setQuery("");
    setTeam("All");
    setEnvironment("Environment not configured");
    setSelected(1);
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-203" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Server}
        eyebrow="Server status · Operations overview"
        title="Show status only when the source and timestamp are clear."
        description="Explore a local service-status workspace with team filters, environment and release intent, service selection, incident concepts, save/reset, and evidence gates. No service, deployment, uptime, incident, version, availability, or user-impact data is connected."
        badge="Evidence-bounded status workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save status view"}
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
            {showGates ? "Close gates" : "Review status gates"}
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
              hint: "No status source",
              icon: Server,
              tone: "cyan",
            },
            {
              label: "Status",
              value: "Unknown",
              hint: "No probes",
              icon: Activity,
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
              label: "Release",
              value: "Unobserved",
              hint: "No deployment source",
              icon: GitBranch,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Operational-status evidence boundary">
          <strong>
            This is a local service-status design preview, not evidence that any
            service is online, healthy, deployed, available, secure, or meeting
            an SLA.
          </strong>{" "}
          Service cards, filters, environment/release selectors, incident
          concepts, saved state, and disabled status actions are browser
          concepts. No uptime, version, deployment, incident resolution,
          availability, performance, security, or user-impact claim is asserted.
        </ScreenPreviewBanner>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-[1fr_0.8fr]">
              <label className="text-sm font-semibold text-slate-300">
                Search services
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search service or team"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                />
              </label>
              <label className="text-sm font-semibold text-slate-300">
                Environment intent
                <select
                  value={environment}
                  onChange={event => setEnvironment(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                >
                  <option>Environment not configured</option>
                  <option>Local preview intent</option>
                  <option>Staging intent</option>
                  <option>Production intent</option>
                </select>
              </label>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {teams.map(entry => (
                <Button
                  key={entry}
                  onClick={() => setTeam(entry)}
                  size="sm"
                  variant="outline"
                  className={
                    team === entry
                      ? "border-cyan-300/40 bg-cyan-300/[0.08] text-cyan-100"
                      : "border-white/10 text-slate-400"
                  }
                >
                  {entry}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                    Service overview
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    {filtered.length} status concept
                    {filtered.length === 1 ? "" : "s"}
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  No live status
                </Badge>
              </div>
              <div className="mt-6 space-y-3">
                {filtered.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item.id)}
                    className={`w-full rounded-xl border p-4 text-left ${selected === item.id ? "border-cyan-300/40 bg-cyan-300/[0.06]" : "border-white/10"}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="mt-2 text-sm text-slate-500">
                          {item.team} · release {item.version}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-amber-300/20 text-amber-200"
                      >
                        {item.status}
                      </Badge>
                    </div>
                    <p className="mt-3 text-xs text-slate-500">
                      {item.incident}
                    </p>
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
                  <h2 className="mt-2 text-2xl font-black">{service.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  Unknown
                </Badge>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="border-white/10 text-slate-400"
                >
                  <Tag className="mr-1 size-3" />
                  {service.team}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-white/10 text-slate-400"
                >
                  <Globe2 className="mr-1 size-3" />
                  {environment}
                </Badge>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Status", value: "Unknown" },
                  { label: "Release", value: "Unobserved" },
                  { label: "Deploy", value: "Unavailable" },
                  { label: "Uptime", value: "Unavailable" },
                  { label: "Incident", value: "No feed" },
                  { label: "Last check", value: "Not run" },
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
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Server className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No status evidence loaded</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Connect authenticated probes, deployment metadata, timestamped
                  release evidence, incident management, alert routing, access
                  controls, and audit before showing status.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Check status unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  View deployment unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Open incident unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Subscribe unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No live-status claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A service concept does not prove uptime, deployment,
                    availability, incident resolution, security, SLA compliance,
                    performance, or user impact.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Status-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real status page must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated probe, service identity, environment, region, timestamp, deployment version, source provenance, and freshness",
                "Availability, latency, error rate, capacity, incident state, alert rule, owner, escalation, and user-impact evidence",
                "Database, storage, AI, blockchain, wallet, financial, education, marketplace, and security claims require domain evidence",
                "Access controls, tenant isolation, redaction, incident audit, communication, status history, appeals, and postmortem",
                "Check status, view deployment, open incident, subscribe, export, accessibility, and accountable approval require governed operations",
                "A status preview must not be presented as live uptime, availability, deployment, incident resolution, security, or SLA compliance without evidence",
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
              title: "Status surface preserved",
              description:
                "Service inventory, teams, environment, releases, status, incidents, check, deployment, subscribe, save/reset, and gates remain interactive.",
              icon: Server,
              status: "Local overview",
            },
            {
              title: "No uptime theater",
              description:
                "Service, deployment, availability, incident, SLA, security, performance, and user-impact claims are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Source before status",
              description:
                "Real status requires timestamped probes, release evidence, incident ownership, communication, access controls, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
