import { useMemo, useState } from "react";
import {
  Bot,
  CircleSlash2,
  Info,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type CatalogState = "Review" | "Planned" | "Unavailable";
type AgentFixture = {
  id: string;
  title: string;
  category: string;
  state: CatalogState;
  summary: string;
  capability: string;
  permission: string;
  boundary: string;
};
const agents: AgentFixture[] = [
  {
    id: "review",
    title: "Code review assistant",
    category: "Developer tools",
    state: "Review",
    summary:
      "A local catalog concept for reviewing typed changes with human approval.",
    capability: "Repository analysis unavailable",
    permission: "Read-only scope review required",
    boundary:
      "No provider, repository, prompt, account, model, chat, deployment, or execution record is connected.",
  },
  {
    id: "study",
    title: "Learning guide",
    category: "Education",
    state: "Planned",
    summary:
      "A local catalog concept for guided study with private-data controls pending.",
    capability: "Course guidance unavailable",
    permission: "Learner-data boundary pending",
    boundary:
      "No course, learner, recommendation, provider, pricing, usage, account, or notification record is available.",
  },
  {
    id: "ops",
    title: "Operations analyst",
    category: "Operations",
    state: "Unavailable",
    summary:
      "A restricted catalog concept pending production-tool and break-glass review.",
    capability: "Operational analysis unavailable",
    permission: "Production tools disabled",
    boundary:
      "No incident, infrastructure, log, provider, account, cost, deployment, or execution state is available.",
  },
];
const states: Array<"All" | CatalogState> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];
const categories = [
  "All",
  ...Array.from(new Set(agents.map(agent => agent.category))),
];

export default function AgentMarketplace() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] =
    useState<(typeof states)[number]>("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [selectedId, setSelectedId] = useState(agents[0].id);
  const [status, setStatus] = useState(
    "Agent marketplace unavailable. Showing local catalog fixtures only."
  );
  const filtered = useMemo(
    () =>
      agents.filter(
        agent =>
          (stateFilter === "All" || agent.state === stateFilter) &&
          (categoryFilter === "All" || agent.category === categoryFilter) &&
          `${agent.title} ${agent.category} ${agent.summary}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [categoryFilter, query, stateFilter]
  );
  const selected = agents.find(agent => agent.id === selectedId) ?? agents[0];
  const reset = () => {
    setQuery("");
    setStateFilter("All");
    setCategoryFilter("All");
    setSelectedId(agents[0].id);
    setStatus(
      "Marketplace preview reset locally. No provider, listing, account, pricing, chat, deployment, or execution state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No provider, agent, account, chat, prompt, payment, deployment, or execution request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-200">
              <Bot aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Agent marketplace
                </h1>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review agent catalog concepts without provider claims, pricing,
                identity assignment, chat, deployment, or execution.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset agent marketplace preview"
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
                Agent marketplace unavailable.
              </strong>{" "}
              No provider catalog, account, model registry, pricing source,
              usage system, chat service, payment channel, or deployment service
              is connected. The agents below are local fixtures.
            </p>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <label className="relative block flex-1">
                  <span className="sr-only">Search local agent fixtures</span>
                  <SlidersHorizontal
                    aria-hidden="true"
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                  />
                  <Input
                    className="border-slate-700 bg-slate-950/70 pl-9 text-slate-200 placeholder:text-slate-600"
                    onChange={event => setQuery(event.target.value)}
                    placeholder="Search agent fixtures"
                    value={query}
                  />
                </label>
                <div
                  aria-label="Filter catalog state"
                  className="flex flex-wrap gap-2"
                  role="group"
                >
                  {states.map(option => (
                    <Button
                      aria-pressed={stateFilter === option}
                      className={
                        stateFilter === option
                          ? "bg-cyan-500 text-white hover:bg-cyan-400"
                          : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                      }
                      key={option}
                      onClick={() => {
                        setStateFilter(option);
                        setStatus(`${option} catalog state selected locally.`);
                      }}
                      size="sm"
                      variant={stateFilter === option ? "default" : "outline"}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
              <div
                aria-label="Filter agent category"
                className="flex flex-wrap gap-2"
                role="group"
              >
                {categories.map(category => (
                  <Button
                    aria-pressed={categoryFilter === category}
                    className={
                      categoryFilter === category
                        ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-100"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={category}
                    onClick={() => {
                      setCategoryFilter(category);
                      setStatus(`${category} category selected locally.`);
                    }}
                    size="sm"
                    variant="outline"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {filtered.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-8 text-center">
                  <Bot
                    aria-hidden="true"
                    className="mx-auto h-8 w-8 text-slate-600"
                  />
                  <p className="mt-3 font-medium text-slate-300">
                    No matching local agents
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Try another category, state, or search term.
                  </p>
                </div>
              ) : (
                filtered.map(agent => (
                  <button
                    aria-pressed={agent.id === selectedId}
                    className={`flex w-full items-start gap-4 rounded-xl border p-5 text-left transition-colors ${agent.id === selectedId ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-600"}`}
                    key={agent.id}
                    onClick={() => {
                      setSelectedId(agent.id);
                      setStatus(
                        `${agent.title} selected for local catalog review.`
                      );
                    }}
                    type="button"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-cyan-200">
                      <Bot aria-hidden="true" className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <p className="font-medium text-slate-200">
                            {agent.title}
                          </p>
                          <p className="mt-0.5 text-xs text-slate-500">
                            {agent.category}
                          </p>
                        </div>
                        <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-400">
                          {agent.state}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {agent.summary}
                      </p>
                      <p className="mt-2 text-xs text-slate-600">
                        Provider unavailable · pricing unavailable
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
                Selected catalog entry
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {selected.title}
              </h2>
              <p className="mt-1 text-sm text-cyan-200">{selected.category}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {selected.boundary}
              </p>
              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Capability posture
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {selected.capability}
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-lg border border-slate-800 p-3">
                    <p className="text-xs text-slate-500">Permission</p>
                    <p className="mt-1 text-sm text-slate-200">
                      {selected.permission}
                    </p>
                  </div>
                  <div className="rounded-lg border border-slate-800 p-3">
                    <p className="text-xs text-slate-500">Pricing</p>
                    <p className="mt-1 text-sm text-slate-200">Unavailable</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-600">
                  Provider, rating, usage, cost, account, prompt, chat, and
                  deployment details are unavailable.
                </p>
              </div>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Chat")}
                  variant="outline"
                >
                  <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                  Chat unavailable
                </Button>
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Deploy")}
                  variant="outline"
                >
                  <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                  Deploy unavailable
                </Button>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-700/10 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Marketplace boundary
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No provider, agent, account, payment, identity, prompt,
                    tool, chat, notification, deployment, or execution operation
                    is available. Future listings require provider verification,
                    scoped credentials, approval, budget, and auditability.
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
                    Catalog posture
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Listing count, ratings, installs, active users, usage,
                    pricing, spend, provider health, and deployment metrics are
                    unavailable rather than estimated.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex gap-3 text-slate-600">
                <Sparkles aria-hidden="true" className="h-5 w-5" />
                <Bot aria-hidden="true" className="h-5 w-5" />
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
