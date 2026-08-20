import { useMemo, useState } from "react";
import {
  Activity,
  AlertTriangle,
  Check,
  Filter,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
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
const monitors = [
  {
    id: 1,
    name: "Eligibility monitor",
    category: "Eligibility",
    detail:
      "A local monitor definition for duplicate events, policy version, eligibility drift, and approval state.",
    state: "Unconfigured",
  },
  {
    id: 2,
    name: "Issuance monitor",
    category: "Issuance",
    detail:
      "An issuance-health concept requiring idempotency, ledger authority, settlement, retry semantics, and transaction status.",
    state: "No source",
  },
  {
    id: 3,
    name: "Reconciliation monitor",
    category: "Finance",
    detail:
      "A reconciliation concept requiring authoritative ledgers, balances, transfers, reversals, and accountable review.",
    state: "Blocked",
  },
  {
    id: 4,
    name: "Abuse monitor",
    category: "Safety",
    detail:
      "An anti-abuse concept requiring signals, thresholds, false-positive handling, appeals, privacy, and incident response.",
    state: "Needs evidence",
  },
];
export default function RewardsMonitoring() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [alert, setAlert] = useState("Alert intent not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(monitors.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      monitors.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const monitor = monitors.find(item => item.id === selected) ?? monitors[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setAlert("Alert intent not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Activity}
        eyebrow="Rewards monitoring · Preview"
        title="Monitor the ledger only after the source is authoritative."
        description="Explore local reward-monitoring concepts with search, category filters, health and alert intent, issuance and reconciliation gates, save/reset, and blocked financial actions. No live reward, balance, token, user, wallet, payment, issuance, or operational outcome is connected."
        badge="Monitoring workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save monitor locally"}
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
            {showGates ? "Close gates" : "Review monitoring gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset monitor
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Monitors",
              value: `${monitors.length} local`,
              hint: "No source",
              icon: Activity,
              tone: "cyan",
            },
            {
              label: "Issuance",
              value: "Unavailable",
              hint: "No ledger source",
              icon: Activity,
              tone: "violet",
            },
            {
              label: "Reconciliation",
              value: "Blocked",
              hint: "No authority",
              icon: AlertTriangle,
              tone: "amber",
            },
            {
              label: "Alerts",
              value: "Unconfigured",
              hint: "No telemetry",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Monitoring evidence boundary">
          <strong>
            This is a local rewards-monitoring preview, not operational evidence
            that rewards, balances, tokens, transactions, or alerts exist.
          </strong>{" "}
          Monitor cards, filters, alert intent, health states, saved state, and
          blocked actions are browser concepts. No issuance count, balance,
          mismatch, user, wallet, payment, SLA, alert, or incident is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local monitors"
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
                    Selected monitor concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{monitor.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {monitor.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {monitor.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: monitor.category },
                  { label: "Health", value: "Unavailable" },
                  { label: "Source", value: "Unconnected" },
                  { label: "Alert", value: alert },
                  { label: "Audit", value: "Required" },
                  { label: "Recovery", value: "Review needed" },
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
              <label className="mt-5 block text-sm text-slate-400">
                Alert intent
                <select
                  value={alert}
                  onChange={event => setAlert(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                >
                  <option>Alert intent not configured</option>
                  <option>Threshold intent</option>
                  <option>Mismatch intent</option>
                  <option>Retry-spike intent</option>
                  <option>Abuse-signal intent</option>
                </select>
              </label>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Activity className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No monitoring telemetry loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed reward events, ledger, balances, wallet,
                  payment, authorization, alerts, logs, incident response, and
                  audit before showing health.
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
                  Reconcile unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Acknowledge unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Export unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No monitoring or financial claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A monitor definition does not prove a reward balance,
                    issuance, mismatch, user impact, token transaction, alert,
                    incident, or operational status.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Monitoring gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real reward-monitoring system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated reward events, user, policy, tenant, timestamp, provenance, duplicate handling, and source authority",
                "Ledger, wallet, balance, issuance, transfer, settlement, idempotency, retry, reversal, and reconciliation integrity",
                "Alert definitions, thresholds, time windows, baselines, missing data, noise, ownership, escalation, and acknowledgement",
                "Fraud and abuse signals, privacy, sensitive financial data, rate limits, incident response, audit, and rollback",
                "Operational SLOs, uptime, latency, queue health, costs, on-call ownership, support, and accessible status",
                "Token, financial, user, business, educational, marketplace, AI, and security claims require separate evidence",
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
              title: "Monitoring surface preserved",
              description:
                "Eligibility, issuance, reconciliation, abuse, filters, alerts, health, refresh, acknowledge, export, save/reset, and gates remain interactive.",
              icon: Activity,
              status: "Local definitions",
            },
            {
              title: "No monitoring theater",
              description:
                "Balances, issuances, mismatches, users, tokens, transactions, alerts, incidents, SLOs, and financial outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Telemetry before status",
              description:
                "Real monitoring requires authoritative events, ledger integrity, alert semantics, ownership, incident response, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
