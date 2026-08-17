import { useMemo, useState } from "react";
import {
  BarChart3,
  CircleSlash2,
  Download,
  Filter,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
  SlidersHorizontal,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type FunnelChannel = "All" | "Product" | "Education" | "Community";
type FunnelState = "All" | "Draft" | "Review" | "Unavailable";

type FunnelConcept = {
  id: string;
  title: string;
  channel: Exclude<FunnelChannel, "All">;
  state: Exclude<FunnelState, "All">;
  summary: string;
  source: string;
  audience: string;
  steps: string;
  volume: string;
  conversion: string;
  revenue: string;
  attribution: string;
};

const funnels: FunnelConcept[] = [
  {
    id: "product-funnel",
    title: "Product journey funnel",
    channel: "Product",
    state: "Review",
    summary:
      "A local funnel concept for product discovery, activation, and retention pending consent-aware events and cohort rules.",
    source: "Event source unavailable",
    audience: "Audience definition unavailable",
    steps: "Funnel steps unavailable",
    volume: "Step volume unavailable",
    conversion: "Conversion rate unavailable",
    revenue: "Revenue attribution unavailable",
    attribution: "Attribution model unavailable",
  },
  {
    id: "education-funnel",
    title: "Learning journey funnel",
    channel: "Education",
    state: "Draft",
    summary:
      "A draft funnel concept for course discovery and completion pending privacy review, event definitions, and validated cohorts.",
    source: "Event source unavailable",
    audience: "Audience definition unavailable",
    steps: "Funnel steps unavailable",
    volume: "Step volume unavailable",
    conversion: "Conversion rate unavailable",
    revenue: "Revenue attribution unavailable",
    attribution: "Attribution model unavailable",
  },
  {
    id: "community-funnel",
    title: "Community journey funnel",
    channel: "Community",
    state: "Unavailable",
    summary:
      "A local funnel concept for community discovery and participation pending identity, consent, and engagement provenance.",
    source: "Event source unavailable",
    audience: "Audience definition unavailable",
    steps: "Funnel steps unavailable",
    volume: "Step volume unavailable",
    conversion: "Conversion rate unavailable",
    revenue: "Revenue attribution unavailable",
    attribution: "Attribution model unavailable",
  },
];

const channels: FunnelChannel[] = ["All", "Product", "Education", "Community"];
const states: FunnelState[] = ["All", "Review", "Draft", "Unavailable"];

export default function ConversionFunnel() {
  const [channel, setChannel] = useState<FunnelChannel>("All");
  const [state, setState] = useState<FunnelState>("All");
  const [selectedId, setSelectedId] = useState(funnels[0].id);
  const [status, setStatus] = useState(
    "Analytics service unavailable. Showing local funnel concepts only."
  );

  const filtered = useMemo(
    () =>
      funnels.filter(
        funnel =>
          (channel === "All" || funnel.channel === channel) &&
          (state === "All" || funnel.state === state)
      ),
    [channel, state]
  );
  const selected =
    filtered.find(funnel => funnel.id === selectedId) ??
    filtered[0] ??
    funnels[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No audience, event, conversion, revenue, attribution, export, or analytics refresh request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Target}
        title="Conversion funnels"
        subtitle="Review local funnel concepts without fabricated audiences, events, conversion rates, revenue, attribution, or live performance data."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Analytics service unavailable.</strong> No event pipeline,
            consent registry, identity service, cohort store, attribution
            engine, revenue source, or reporting endpoint is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Analytics service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset funnels
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Funnel preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review funnel concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show analysis structure only. They
                  do not represent real audiences, events, users, conversions,
                  revenue, cohorts, attribution, or performance.
                </p>
              </div>
              <BarChart3 className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Funnel channel filter"
            >
              {channels.map(item => (
                <Button
                  aria-pressed={channel === item}
                  key={item}
                  onClick={() => setChannel(item)}
                  size="sm"
                  variant={channel === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Funnel state filter"
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
              {filtered.map(funnel => (
                <button
                  aria-pressed={selected.id === funnel.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === funnel.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={funnel.id}
                  onClick={() => setSelectedId(funnel.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{funnel.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {funnel.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{funnel.channel}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {funnel.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local funnel fixtures match these filters.
                </p>
              )}
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
                Selected funnel
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.channel} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Source", selected.source],
                  ["Audience", selected.audience],
                  ["Steps", selected.steps],
                  ["Volume", selected.volume],
                  ["Conversion", selected.conversion],
                  ["Revenue", selected.revenue],
                  ["Attribution", selected.attribution],
                ].map(([label, value]) => (
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
                No event source, audience, step count, volume, conversion,
                revenue, cohort, or attribution state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Refresh funnel")}
                  variant="outline"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export funnel")}
                  variant="outline"
                >
                  <Download className="mr-2 h-4 w-4" /> Export unavailable
                </Button>
                <Button
                  onClick={() => blocked("Configure funnel")}
                  variant="outline"
                >
                  <SlidersHorizontal className="mr-2 h-4 w-4" /> Configure
                  unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Funnel analysis requires consent-aware events, identity
                  controls, deduplication, time-window definitions, cohort
                  discipline, attribution provenance, and privacy safeguards.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Audience, conversion, revenue, and attribution transitions
                  must be auditable and isolated from fabricated reporting
                  results.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <Filter className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No audience targeting, event ingestion, cohort calculation,
                  revenue import, or attribution operation is available from
                  this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Funnel state remains explicitly unavailable until
                  authoritative analytics services are connected.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
