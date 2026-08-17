import { useMemo, useState } from "react";
import {
  Activity,
  CircleSlash2,
  Download,
  Fingerprint,
  LockKeyhole,
  RefreshCw,
  SlidersHorizontal,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type AnalyticsArea = "All" | "Acquisition" | "Engagement" | "Retention";
type AnalyticsState = "All" | "Review" | "Draft" | "Unavailable";

type AnalyticsConcept = {
  id: string;
  title: string;
  area: Exclude<AnalyticsArea, "All">;
  state: Exclude<AnalyticsState, "All">;
  summary: string;
  audience: string;
  events: string;
  identity: string;
  consent: string;
  engagement: string;
  conversion: string;
  revenue: string;
};

const concepts: AnalyticsConcept[] = [
  {
    id: "acquisition-analysis",
    title: "Customer acquisition analysis",
    area: "Acquisition",
    state: "Review",
    summary:
      "A local analysis concept for acquisition journeys pending consent-aware events, identity controls, and attribution provenance.",
    audience: "Audience definition unavailable",
    events: "Event source unavailable",
    identity: "Identity resolution unavailable",
    consent: "Consent state unavailable",
    engagement: "Engagement metrics unavailable",
    conversion: "Conversion metrics unavailable",
    revenue: "Revenue attribution unavailable",
  },
  {
    id: "engagement-analysis",
    title: "Customer engagement analysis",
    area: "Engagement",
    state: "Draft",
    summary:
      "A draft analysis concept for engagement patterns pending event definitions, aggregation rules, privacy review, and cohort discipline.",
    audience: "Audience definition unavailable",
    events: "Event source unavailable",
    identity: "Identity resolution unavailable",
    consent: "Consent state unavailable",
    engagement: "Engagement metrics unavailable",
    conversion: "Conversion metrics unavailable",
    revenue: "Revenue attribution unavailable",
  },
  {
    id: "retention-analysis",
    title: "Customer retention analysis",
    area: "Retention",
    state: "Unavailable",
    summary:
      "A local analysis concept for retention journeys pending lawful purpose, cohort definitions, retention controls, and validated reporting.",
    audience: "Audience definition unavailable",
    events: "Event source unavailable",
    identity: "Identity resolution unavailable",
    consent: "Consent state unavailable",
    engagement: "Engagement metrics unavailable",
    conversion: "Conversion metrics unavailable",
    revenue: "Revenue attribution unavailable",
  },
];

const areas: AnalyticsArea[] = [
  "All",
  "Acquisition",
  "Engagement",
  "Retention",
];
const states: AnalyticsState[] = ["All", "Review", "Draft", "Unavailable"];

export default function CustomerAnalytics() {
  const [area, setArea] = useState<AnalyticsArea>("All");
  const [state, setState] = useState<AnalyticsState>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "Customer analytics service unavailable. Showing local analysis concepts only."
  );

  const filtered = useMemo(
    () =>
      concepts.filter(
        concept =>
          (area === "All" || concept.area === area) &&
          (state === "All" || concept.state === state)
      ),
    [area, state]
  );
  const selected =
    filtered.find(concept => concept.id === selectedId) ??
    filtered[0] ??
    concepts[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No customer identity, audience, event, consent, cohort, conversion, revenue, export, or analytics request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={UsersRound}
        title="Customer analytics"
        subtitle="Review local customer-behavior concepts without fabricated identities, audiences, events, engagement, conversion, revenue, cohorts, or live analytics."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Customer analytics service unavailable.</strong> No identity
            service, consent registry, event pipeline, cohort store, attribution
            engine, revenue source, or reporting endpoint is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Customer analytics service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset analysis
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Analytics preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review customer concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show analysis structure only. They
                  do not represent real customers, identities, audiences,
                  events, cohorts, conversions, revenue, or performance.
                </p>
              </div>
              <Activity className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Customer analytics area filter"
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
              aria-label="Customer analytics state filter"
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
              {filtered.map(concept => (
                <button
                  aria-pressed={selected.id === concept.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === concept.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={concept.id}
                  onClick={() => setSelectedId(concept.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{concept.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {concept.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{concept.area}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {concept.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local analytics fixtures match these filters.
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
                Selected analysis
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.area} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Audience", selected.audience],
                  ["Events", selected.events],
                  ["Identity", selected.identity],
                  ["Consent", selected.consent],
                  ["Engagement", selected.engagement],
                  ["Conversion", selected.conversion],
                  ["Revenue", selected.revenue],
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
                No audience, event source, identity, consent, engagement,
                conversion, cohort, revenue, or reporting state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Refresh analysis")}
                  variant="outline"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export analysis")}
                  variant="outline"
                >
                  <Download className="mr-2 h-4 w-4" /> Export unavailable
                </Button>
                <Button
                  onClick={() => blocked("Create segment")}
                  variant="outline"
                >
                  <SlidersHorizontal className="mr-2 h-4 w-4" /> Segment
                  unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Customer analytics requires lawful purpose, consent and
                  preference controls, data minimization, identity safeguards,
                  event provenance, aggregation and cohort discipline, access
                  controls, retention, privacy review, and auditable reporting.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Identity, consent, audience, event, cohort, conversion,
                  revenue, and segment transitions must be auditable and
                  isolated from fabricated customer results.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <Fingerprint className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No identity resolution, event ingestion, audience targeting,
                  cohort calculation, revenue import, notification, or segment
                  operation is available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Customer analytics remains explicitly unavailable until
                  authoritative privacy and analytics services are connected.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
