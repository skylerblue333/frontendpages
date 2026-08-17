import { useMemo, useState } from "react";
import {
  BarChart3,
  CircleSlash2,
  Info,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type CapabilityState = "Review" | "Planned" | "Unavailable";
type Capability = {
  id: string;
  title: string;
  state: CapabilityState;
  summary: string;
  control: string;
  evidence: string;
  boundary: string;
};
const capabilities: Capability[] = [
  {
    id: "access",
    title: "Access governance",
    state: "Review",
    summary:
      "A local capability for reviewing least-privilege administration controls.",
    control: "Role matrix fixture",
    evidence: "Approval evidence required",
    boundary:
      "No user records, roles, grants, sessions, or permission mutations are connected.",
  },
  {
    id: "health",
    title: "Operational health",
    state: "Planned",
    summary:
      "A local capability for defining which verified signals an administrator would review.",
    control: "Signal catalog fixture",
    evidence: "Monitoring source unavailable",
    boundary:
      "No uptime, latency, success rate, incident, deployment, or production metric is connected.",
  },
  {
    id: "audit",
    title: "Audit readiness",
    state: "Unavailable",
    summary:
      "A restricted governance concept pending immutable event and retention controls.",
    control: "Audit schema unavailable",
    evidence: "Evidence source unavailable",
    boundary:
      "No audit log, actor identity, configuration history, security event, or compliance claim is available.",
  },
];
const states: Array<"All" | CapabilityState> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];

export default function AdminDashboard() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] =
    useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(capabilities[0].id);
  const [status, setStatus] = useState(
    "Administration service unavailable. Showing local governance fixtures only."
  );
  const filtered = useMemo(
    () =>
      capabilities.filter(
        capability =>
          (stateFilter === "All" || capability.state === stateFilter) &&
          `${capability.title} ${capability.summary}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [query, stateFilter]
  );
  const selected =
    capabilities.find(capability => capability.id === selectedId) ??
    capabilities[0];
  const reset = () => {
    setQuery("");
    setStateFilter("All");
    setSelectedId(capabilities[0].id);
    setStatus(
      "Administration preview reset locally. No user, permission, metric, audit, or system state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No user, permission, audit, configuration, database, or deployment request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-rose-400/25 bg-rose-400/10 text-rose-200">
              <BarChart3 aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Admin dashboard
                </h1>
                <span className="rounded-full border border-rose-400/20 bg-rose-400/10 px-2.5 py-1 text-xs font-medium text-rose-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review governance capabilities without reading user data,
                inventing live metrics, granting permissions, or changing
                production systems.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset admin dashboard preview"
            className="self-start border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white"
            onClick={reset}
            variant="outline"
          >
            <RotateCcw aria-hidden="true" className="mr-2 h-4 w-4" />
            Reset preview
          </Button>
        </header>
        <section
          className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/[0.07] p-4 text-sm text-slate-300"
          role="note"
        >
          <div className="flex gap-3">
            <Info
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
            />
            <p>
              <strong className="font-semibold text-amber-100">
                Administration service unavailable.
              </strong>{" "}
              No user directory, permission service, metrics source, audit
              store, incident feed, database, deployment system, or production
              state is connected. The records below are local fixtures.
            </p>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <label className="relative block flex-1">
                <span className="sr-only">
                  Search local administration fixtures
                </span>
                <SlidersHorizontal
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                />
                <Input
                  className="border-slate-700 bg-slate-950/70 pl-9 text-slate-200 placeholder:text-slate-600"
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search governance fixtures"
                  value={query}
                />
              </label>
              <div
                aria-label="Filter capability state"
                className="flex flex-wrap gap-2"
                role="group"
              >
                {states.map(option => (
                  <Button
                    aria-pressed={stateFilter === option}
                    className={
                      stateFilter === option
                        ? "bg-rose-500 text-white hover:bg-rose-400"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={option}
                    onClick={() => {
                      setStateFilter(option);
                      setStatus(`${option} capability state selected locally.`);
                    }}
                    size="sm"
                    variant={stateFilter === option ? "default" : "outline"}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {filtered.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-8 text-center">
                  <SlidersHorizontal
                    aria-hidden="true"
                    className="mx-auto h-8 w-8 text-slate-600"
                  />
                  <p className="mt-3 font-medium text-slate-300">
                    No matching local capabilities
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Try another state or search term.
                  </p>
                </div>
              ) : (
                filtered.map(capability => (
                  <button
                    aria-pressed={capability.id === selectedId}
                    className={`flex w-full items-start gap-4 rounded-xl border p-5 text-left transition-colors ${capability.id === selectedId ? "border-rose-400/35 bg-rose-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-600"}`}
                    key={capability.id}
                    onClick={() => {
                      setSelectedId(capability.id);
                      setStatus(
                        `${capability.title} selected for local governance review.`
                      );
                    }}
                    type="button"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-rose-200">
                      <BarChart3 aria-hidden="true" className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-medium text-slate-200">
                          {capability.title}
                        </p>
                        <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-400">
                          {capability.state}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {capability.summary}
                      </p>
                      <p className="mt-2 text-xs text-slate-600">
                        {capability.control} · evidence unavailable
                      </p>
                    </div>
                  </button>
                ))
              )}
            </div>
            <p
              aria-live="polite"
              className="mt-6 rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Selected capability
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {selected.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {selected.boundary}
              </p>
              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Control surface
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {selected.control}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-500">
                  Evidence posture
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {selected.evidence}
                </p>
                <p className="mt-4 text-xs text-slate-600">
                  Users, permissions, audits, monitoring, metrics, and
                  production state are unavailable.
                </p>
              </div>
              <Button
                className="mt-5 w-full border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                onClick={() => blocked("Open admin action")}
                variant="outline"
              >
                <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                Action unavailable
              </Button>
            </Card>
            <Card className="border-slate-800 bg-slate-700/10 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-rose-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Least-privilege boundary
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No user, role, grant, session, audit, database,
                    configuration, feature flag, deployment, or security-control
                    operation is available. Future administration requires
                    approvals, tenant isolation, break-glass controls, and
                    immutable auditability.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <ShieldCheck
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Operations posture
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    User totals, transactions, success rate, response time,
                    uptime, incidents, audit health, and system state are
                    unavailable rather than estimated.
                  </p>
                </div>
              </div>
              <Users
                aria-hidden="true"
                className="mt-5 h-5 w-5 text-slate-600"
              />
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
