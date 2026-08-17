import { useMemo, useState } from "react";
import {
  BarChart3,
  CircleSlash2,
  Filter,
  GitBranch,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type State = "Review" | "Planned" | "Unavailable";
type Journey = {
  id: string;
  title: string;
  channel: string;
  state: State;
  description: string;
  source: string;
  identity: string;
  conversion: string;
  revenue: string;
};
const journeys: Journey[] = [
  {
    id: "journey",
    title: "Cross-channel journey",
    channel: "Multi-channel",
    state: "Review",
    description:
      "A local journey concept for reviewing touchpoint definitions after consented identity and event sources are connected.",
    source: "Source unavailable",
    identity: "Identity not resolved",
    conversion: "Conversion undefined",
    revenue: "Revenue unavailable",
  },
  {
    id: "organic",
    title: "Organic discovery",
    channel: "Organic",
    state: "Planned",
    description:
      "A channel concept pending search-source provenance, consent, and conversion semantics.",
    source: "Source unavailable",
    identity: "Identity not resolved",
    conversion: "Conversion undefined",
    revenue: "Revenue unavailable",
  },
  {
    id: "partner",
    title: "Partner referral",
    channel: "Partner",
    state: "Unavailable",
    description:
      "A restricted concept requiring verified referral events, deduplication, and reconciliation.",
    source: "Referral source unavailable",
    identity: "Identity not resolved",
    conversion: "Conversion undefined",
    revenue: "Revenue unavailable",
  },
];
const states: Array<"All" | State> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];
const channels = [
  "All",
  ...Array.from(new Set(journeys.map(journey => journey.channel))),
];

export default function AttributionModeling() {
  const [channel, setChannel] = useState("All");
  const [state, setState] = useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(journeys[0].id);
  const [status, setStatus] = useState(
    "Attribution unavailable. Showing local journey fixtures only."
  );
  const filtered = useMemo(
    () =>
      journeys.filter(
        journey =>
          (channel === "All" || journey.channel === channel) &&
          (state === "All" || journey.state === state)
      ),
    [channel, state]
  );
  const selected =
    journeys.find(journey => journey.id === selectedId) ?? journeys[0];
  const reset = () => {
    setChannel("All");
    setState("All");
    setSelectedId(journeys[0].id);
    setStatus(
      "Attribution preview reset locally. No identity, journey, conversion, revenue, credit, or report state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No source, identity, journey, conversion, revenue, attribution, export, or report request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-400/25 bg-indigo-400/10 text-indigo-200">
              <GitBranch aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Attribution modeling
                </h1>
                <span className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-2.5 py-1 text-xs text-indigo-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review journey concepts without fabricated sources, identities,
                conversions, revenue, campaign credit, or marketing conclusions.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset attribution preview"
            className="self-start border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800"
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
          <p>
            <strong className="text-amber-100">Attribution unavailable.</strong>{" "}
            No consented identity source, campaign events, conversion
            definition, revenue ledger, model registry, or report store is
            connected. The journeys below are local fixtures.
          </p>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 sm:p-8">
            <div className="border-b border-slate-800 pb-6">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Filter aria-hidden="true" className="h-4 w-4" />
                Filter journey fixtures
              </div>
              <div
                className="mt-4 flex flex-wrap gap-2"
                role="group"
                aria-label="Filter attribution channel"
              >
                {channels.map(item => (
                  <Button
                    aria-pressed={channel === item}
                    className={
                      channel === item
                        ? "bg-indigo-500 text-white"
                        : "border-slate-700 bg-slate-950 text-slate-400"
                    }
                    key={item}
                    onClick={() => {
                      setChannel(item);
                      setStatus(`${item} channel selected locally.`);
                    }}
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
                aria-label="Filter attribution state"
              >
                {states.map(item => (
                  <Button
                    aria-pressed={state === item}
                    className={
                      state === item
                        ? "border-indigo-400/50 bg-indigo-400/10 text-indigo-100"
                        : "border-slate-700 bg-slate-950 text-slate-400"
                    }
                    key={item}
                    onClick={() => {
                      setState(item);
                      setStatus(`${item} journey state selected locally.`);
                    }}
                    size="sm"
                    variant="outline"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(journey => (
                <button
                  aria-pressed={selectedId === journey.id}
                  className={`w-full rounded-xl border p-5 text-left ${selectedId === journey.id ? "border-indigo-400/35 bg-indigo-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={journey.id}
                  onClick={() => {
                    setSelectedId(journey.id);
                    setStatus(`${journey.title} selected locally.`);
                  }}
                  type="button"
                >
                  <div className="flex gap-3">
                    <BarChart3
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-indigo-200"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap justify-between gap-2">
                        <div>
                          <p className="font-medium text-slate-200">
                            {journey.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {journey.channel}
                          </p>
                        </div>
                        <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                          {journey.state}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {journey.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Selected journey
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-indigo-200">
                {selected.channel} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  ["Source", selected.source],
                  ["Identity", selected.identity],
                  ["Conversion", selected.conversion],
                  ["Revenue", selected.revenue],
                ].map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm text-slate-200">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No touchpoint, audience, campaign credit, conversion, revenue,
                or business conclusion is available.
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                <Button
                  className="border-amber-400/30 text-amber-100"
                  onClick={() => blocked("Calculate")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Calculate unavailable
                </Button>
                <Button
                  className="border-amber-400/30 text-amber-100"
                  onClick={() => blocked("Export")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Export unavailable
                </Button>
                <Button
                  className="border-amber-400/30 text-amber-100"
                  onClick={() => blocked("Create model")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Create unavailable
                </Button>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  aria-hidden="true"
                  className="h-5 w-5 text-cyan-200"
                />
                <p className="text-sm leading-6 text-slate-400">
                  No identity, source, journey, conversion, revenue,
                  attribution, export, or report operation is available. Filters
                  and selection are local only.
                </p>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <ShieldCheck
                  aria-hidden="true"
                  className="h-5 w-5 text-emerald-200"
                />
                <p className="text-sm leading-6 text-slate-400">
                  Production attribution requires consented identity resolution,
                  source provenance, event semantics, privacy, model definition,
                  revenue reconciliation, and auditable reporting.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
