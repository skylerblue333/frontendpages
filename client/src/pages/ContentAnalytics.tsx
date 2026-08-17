import { useMemo, useState } from "react";
import {
  BarChart3,
  Download,
  LockKeyhole,
  RefreshCw,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ContentArea = "All" | "Articles" | "Video" | "Community" | "Education";
type MetricState = "All" | "Review" | "Planned" | "Unavailable";

type AnalyticsConcept = {
  id: string;
  name: string;
  area: Exclude<ContentArea, "All">;
  state: Exclude<MetricState, "All">;
  summary: string;
  source: string;
  window: string;
  volume: string;
  engagement: string;
  conversion: string;
};

const concepts: AnalyticsConcept[] = [
  {
    id: "article-performance",
    name: "Article performance",
    area: "Articles",
    state: "Review",
    summary:
      "A local metric structure for publication reach, reading behavior, and content quality review.",
    source: "Event source unavailable",
    window: "Time window unavailable",
    volume: "Content volume unavailable",
    engagement: "Engagement unavailable",
    conversion: "Conversion unavailable",
  },
  {
    id: "video-performance",
    name: "Video performance",
    area: "Video",
    state: "Planned",
    summary:
      "A planned metric structure for watch behavior, completion, and consent-aware audience analysis.",
    source: "Event source unavailable",
    window: "Time window unavailable",
    volume: "Content volume unavailable",
    engagement: "Engagement unavailable",
    conversion: "Conversion unavailable",
  },
  {
    id: "community-engagement",
    name: "Community engagement",
    area: "Community",
    state: "Unavailable",
    summary:
      "A local concept for posts, reactions, participation, and moderation-aware measurement.",
    source: "Event source unavailable",
    window: "Time window unavailable",
    volume: "Content volume unavailable",
    engagement: "Engagement unavailable",
    conversion: "Conversion unavailable",
  },
];

const areas: ContentArea[] = [
  "All",
  "Articles",
  "Video",
  "Community",
  "Education",
];
const states: MetricState[] = ["All", "Review", "Planned", "Unavailable"];

export default function ContentAnalytics() {
  const [area, setArea] = useState<ContentArea>("All");
  const [state, setState] = useState<MetricState>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "Analytics service unavailable. Showing local metric concepts only."
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
      `${action} is unavailable locally. No audience, engagement, conversion, revenue, notification, or analytics request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={BarChart3}
        title="Content analytics"
        subtitle="Review local metric concepts without fabricated audience, engagement, conversion, revenue, or live-performance data."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Analytics service unavailable.</strong> No event source,
            consent-aware identity layer, aggregation service, content registry,
            or reporting endpoint is connected.
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
            Reset analytics
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
                  Review metric concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show measurement structure only. No
                  audience size, views, reactions, shares, conversion, revenue,
                  or performance value is calculated.
                </p>
              </div>
              <BarChart3 className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Content analytics area filter"
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
              aria-label="Content analytics state filter"
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
                    <p className="font-medium">{concept.name}</p>
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
                Selected metric area
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.name}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.area} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Source", selected.source],
                  ["Window", selected.window],
                  ["Volume", selected.volume],
                  ["Engagement", selected.engagement],
                  ["Conversion", selected.conversion],
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
                No event definition, consent state, audience size, views,
                reactions, shares, conversion, revenue, or freshness signal is
                available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Refresh analytics")}
                  variant="outline"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export analytics")}
                  variant="outline"
                >
                  <Download className="mr-2 h-4 w-4" /> Export unavailable
                </Button>
                <Button
                  onClick={() => blocked("Configure analytics")}
                  variant="outline"
                >
                  <Settings2 className="mr-2 h-4 w-4" /> Configure unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Analytics requires event definitions, privacy and consent
                  controls, source provenance, aggregation rules, access
                  authorization, and freshness states.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  This preview does not estimate performance, infer audience
                  behavior, or claim a live data connection.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
