import { useMemo, useState } from "react";
import {
  Activity,
  Check,
  Filter,
  KeyRound,
  LockKeyhole,
  RefreshCw,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
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
const posture = [
  {
    id: 1,
    name: "Identity posture",
    category: "Identity",
    detail:
      "A local posture concept covering MFA, sessions, recovery, authorization, device trust, rate limits, and sensitive-action reauthentication.",
    state: "Evidence needed",
  },
  {
    id: 2,
    name: "Edge protection",
    category: "Infrastructure",
    detail:
      "A local edge concept covering TLS, WAF, ingress, egress, secrets, API keys, uploads, SSRF, and dependency controls.",
    state: "Unconfigured",
  },
  {
    id: 3,
    name: "Monitoring and incidents",
    category: "Operations",
    detail:
      "A local operations concept covering telemetry, alerts, severity, incident ownership, response, recovery, and notification.",
    state: "Preview",
  },
  {
    id: 4,
    name: "Privacy posture",
    category: "Privacy",
    detail:
      "A local privacy concept covering data inventory, consent, minimization, retention, deletion, export, access, and processor review.",
    state: "Blocked",
  },
];
export default function SecurityDashboard() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [telemetry, setTelemetry] = useState("Telemetry source not configured");
  const [window, setWindow] = useState("Window not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(posture.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      posture.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const control = posture.find(item => item.id === selected) ?? posture[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setTelemetry("Telemetry source not configured");
    setWindow("Window not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-203" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={ShieldCheck}
        eyebrow="Security dashboard · Posture preview"
        title="Show telemetry provenance before showing a security score."
        description="Explore local identity, edge, operations, and privacy posture concepts with search, category filters, telemetry and time-window intent, incident and recovery gates, save/reset, and blocked scan/resolve/claim actions. No security score, TLS grade, WAF state, uptime, MFA state, scan, threat count, session, incident, certification, or compliance status is connected."
        badge="Security-posture workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save posture locally"}
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
            {showGates ? "Close gates" : "Review posture gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset posture
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Posture concepts",
              value: `${posture.length} local`,
              hint: "No telemetry source",
              icon: ShieldCheck,
              tone: "cyan",
            },
            {
              label: "Security score",
              value: "Unavailable",
              hint: "No scoring model",
              icon: Activity,
              tone: "violet",
            },
            {
              label: "Scans",
              value: "Not run",
              hint: "No scanner source",
              icon: ScanSearch,
              tone: "amber",
            },
            {
              label: "Incidents",
              value: "Unavailable",
              hint: "No incident source",
              icon: Siren,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Security-dashboard evidence boundary">
          <strong>
            This is a local posture-design preview, not evidence that the
            platform is secure, available, scanned, monitored, certified, or
            incident-free.
          </strong>{" "}
          Posture cards, filters, telemetry/time-window intent, saved state,
          incident/recovery gates, and disabled scan/resolve/claim actions are
          browser concepts. No score, TLS grade, WAF state, uptime, MFA state,
          scan result, threat count, active session, incident, certification,
          compliance, or user safety outcome is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local posture concepts"
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
                    Selected posture concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{control.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {control.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {control.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: control.category },
                  { label: "Telemetry", value: telemetry },
                  { label: "Window", value: window },
                  { label: "Score", value: "Unavailable" },
                  { label: "Incidents", value: "Unavailable" },
                  { label: "Certification", value: "Not claimed" },
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
                    <option>Application telemetry intent</option>
                    <option>Infrastructure telemetry intent</option>
                    <option>Identity telemetry intent</option>
                    <option>Privacy-safe aggregate intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Time window intent
                  <select
                    value={window}
                    onChange={event => setWindow(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Window not configured</option>
                    <option>Current snapshot intent</option>
                    <option>Rolling 24-hour intent</option>
                    <option>Release-window intent</option>
                    <option>Incident-window intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <ShieldCheck className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No security telemetry loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect verified identity, infrastructure, application,
                  privacy, scan, logging, monitoring, alert, incident, recovery,
                  provider, and independent-review evidence before showing
                  posture.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Refresh unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Run scan unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Resolve incident unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Claim secure unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No posture or uptime claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A posture concept does not prove security score, TLS, WAF,
                    MFA, uptime, scan completion, threat count, active session,
                    incident status, certification, compliance, or safety.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Posture-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real security dashboard must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated asset, environment, tenant, control, telemetry source, time window, version, owner, and provenance",
                "TLS, WAF, MFA, sessions, API keys, logs, scans, dependencies, secrets, rate limits, monitoring, alerts, backups, and recovery",
                "Incident severity, ownership, response, notification, evidence, remediation, retest, exception, communication, and legal review",
                "Security score, uptime, threat, vulnerability, trust, certification, compliance, fraud, privacy, transaction, and user-impact claims require domain review",
                "Refresh, scan, resolve, notify, export, certify, share, accessibility, and accountable approval require governed posture operations",
                "A dashboard preview must not be presented as a live security scorecard, all-systems-secure status, uptime report, audit, certification, or guarantee without evidence",
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
              title: "Security dashboard preserved",
              description:
                "Identity, edge, operations, privacy, telemetry, scans, incidents, scores, uptime, save/reset, and gates remain interactive.",
              icon: ShieldCheck,
              status: "Local posture",
            },
            {
              title: "No score theater",
              description:
                "Security scores, TLS grades, WAF states, MFA, uptime, scans, threats, incidents, certifications, and guarantees are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Telemetry before trust",
              description:
                "Real posture requires authenticated telemetry, scoped controls, source provenance, time semantics, monitoring, incidents, recovery, and independent acceptance.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
