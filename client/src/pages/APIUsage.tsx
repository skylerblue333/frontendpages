import { useMemo, useState } from "react";
import {
  BarChart3,
  CircleSlash2,
  Download,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type UsageArea = "All" | "Core" | "Financial" | "Education";
type UsagePeriod = "All" | "Current" | "Historical" | "Unavailable";
type UsageConcept = {
  id: string;
  title: string;
  area: Exclude<UsageArea, "All">;
  period: Exclude<UsagePeriod, "All">;
  summary: string;
  requests: string;
  cost: string;
  quota: string;
  owner: string;
  errors: string;
  retention: string;
};
const concepts: UsageConcept[] = [
  {
    id: "core-usage",
    title: "Core API usage",
    area: "Core",
    period: "Current",
    summary:
      "A local usage-report concept pending privacy-aware aggregation, server-side authorization, quota policy, cost reconciliation, and retention controls.",
    requests: "Request volume unavailable",
    cost: "Cost ledger unavailable",
    quota: "Quota state unavailable",
    owner: "Owner mapping unavailable",
    errors: "Error rate unavailable",
    retention: "Retention policy unavailable",
  },
  {
    id: "financial-usage",
    title: "Financial API usage",
    area: "Financial",
    period: "Unavailable",
    summary:
      "A local financial usage concept pending transaction-safe telemetry, sensitive-data redaction, billing reconciliation, and auditable export controls.",
    requests: "Request volume unavailable",
    cost: "Cost ledger unavailable",
    quota: "Quota state unavailable",
    owner: "Owner mapping unavailable",
    errors: "Error rate unavailable",
    retention: "Retention policy unavailable",
  },
  {
    id: "education-usage",
    title: "Education API usage",
    area: "Education",
    period: "Historical",
    summary:
      "A local education usage concept pending learner-safe aggregation, retention limits, permission review, and historical evidence.",
    requests: "Request volume unavailable",
    cost: "Cost ledger unavailable",
    quota: "Quota state unavailable",
    owner: "Owner mapping unavailable",
    errors: "Error rate unavailable",
    retention: "Retention policy unavailable",
  },
];
const areas: UsageArea[] = ["All", "Core", "Financial", "Education"];
const periods: UsagePeriod[] = ["All", "Current", "Historical", "Unavailable"];
export default function APIUsage() {
  const [area, setArea] = useState<UsageArea>("All");
  const [period, setPeriod] = useState<UsagePeriod>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "API usage service unavailable. Showing local usage concepts only."
  );
  const filtered = useMemo(
    () =>
      concepts.filter(
        item =>
          (area === "All" || item.area === area) &&
          (period === "All" || item.period === period)
      ),
    [area, period]
  );
  const selected =
    filtered.find(item => item.id === selectedId) ?? filtered[0] ?? concepts[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No request telemetry, cost, quota, owner mapping, billing, personal-data export, or external mutation was started.`
    );
  const metadata: Array<[string, string]> = [
    ["Requests", selected.requests],
    ["Cost", selected.cost],
    ["Quota", selected.quota],
    ["Owner", selected.owner],
    ["Errors", selected.errors],
    ["Retention", selected.retention],
  ];
  return (
    <div data-ui-polish="batch-180" className="min-h-screen bg-background">
      <PageHeader
        icon={BarChart3}
        title="API usage"
        subtitle="Review local usage-report concepts without fabricated requests, costs, quotas, owners, error rates, billing, retention, or personal-data exports."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>API usage service unavailable.</strong> No request
            telemetry, key-to-owner mapping, quota policy, cost ledger, billing
            source, retention policy, or export contract is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "API usage service remains unavailable. Local usage concepts were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset usage
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Usage preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review API usage concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show reporting structure only. They
                  do not represent real request counts, users, keys, quotas,
                  latency, costs, billing, errors, or usage trends.
                </p>
              </div>
              <BarChart3 className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Usage area filter"
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
              aria-label="Usage period filter"
            >
              {periods.map(item => (
                <Button
                  aria-pressed={period === item}
                  key={item}
                  onClick={() => setPeriod(item)}
                  size="sm"
                  variant={period === item ? "default" : "outline"}
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
                      {item.period}
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
                Selected usage concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.area} · {selected.period}
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
                No request, cost, quota, owner, error, billing, or retention
                state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Refresh API usage")}
                  variant="outline"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export API usage")}
                  variant="outline"
                >
                  <Download className="mr-2 h-4 w-4" /> Export unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Usage reporting requires privacy-aware aggregation,
                  server-side authorization, redaction, retention limits,
                  rate-limit semantics, billing reconciliation, and auditable
                  exports.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Telemetry, quota, billing, owner mapping, export, and
                  retention transitions must be auditable and isolated from
                  fabricated usage outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No telemetry lookup, cost calculation, quota mutation,
                  personal-data export, billing action, or usage mutation is
                  available from this preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
