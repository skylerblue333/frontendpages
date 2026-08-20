import { useMemo, useState } from "react";
import {
  CalendarDays,
  Check,
  Columns3,
  Filter,
  GitBranch,
  Grid3X3,
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
const items = [
  {
    id: 1,
    name: "Evidence inventory",
    category: "Foundation",
    stage: "Discovery",
    detail:
      "Map sources, claims, contracts, and validation owners before calling a feature ready.",
  },
  {
    id: 2,
    name: "Frontend hardening",
    category: "Platform",
    stage: "Validation",
    detail:
      "Improve states, accessibility, responsiveness, truthful labels, diagnostics, and screenshot evidence.",
  },
  {
    id: 3,
    name: "Integration review",
    category: "Security",
    stage: "Blocked",
    detail:
      "Validate authentication, authorization, data contracts, secrets, rate limits, and error recovery.",
  },
  {
    id: 4,
    name: "Release review",
    category: "Operations",
    stage: "Planned",
    detail:
      "Confirm tests, builds, observability, rollback, support, and accountable release approval.",
  },
];
export default function RoadmapView() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [view, setView] = useState("Timeline");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(items.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      items.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.stage} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const reset = () => {
    setQuery("");
    setCategory("All");
    setView("Timeline");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-201" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Grid3X3}
        eyebrow="Roadmap view · Planning preview"
        title="Choose the view that makes dependencies visible."
        description="Explore local timeline, kanban, dependency, and milestone views over a small planning model. This screen preserves visualization and filtering surfaces while explicitly blocking live dates, staffing, capacity, completion, launch, and delivery claims."
        badge="Visualization workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save view locally"}
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
            {showGates ? "Close gates" : "Review view gates"}
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
              label: "Items",
              value: `${items.length} local`,
              hint: "No roadmap source",
              icon: Grid3X3,
              tone: "cyan",
            },
            {
              label: "Views",
              value: "4 local",
              hint: "No schedule source",
              icon: CalendarDays,
              tone: "violet",
            },
            {
              label: "Dependencies",
              value: "Conceptual",
              hint: "No graph source",
              icon: GitBranch,
              tone: "amber",
            },
            {
              label: "Dates",
              value: "Unavailable",
              hint: "No commitment",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Roadmap visualization boundary">
          <strong>
            This is a local visualization preview, not a live project plan or
            delivery report.
          </strong>{" "}
          View switching, cards, filters, stages, dependency lines, and saved
          state are browser concepts. No date, milestone completion, staffing,
          capacity, budget, launch, dependency resolution, or production status
          is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local roadmap items"
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
                    <Filter className="mr-1 size-3" />
                    {entry}
                  </Button>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {filtered.map(item => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-white/10 p-4"
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
                        {item.stage}
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
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {["Timeline", "Kanban", "Dependencies", "Milestones"].map(
                  entry => (
                    <Button
                      key={entry}
                      onClick={() => setView(entry)}
                      variant="outline"
                      className={
                        view === entry
                          ? "border-cyan-300/40 bg-cyan-300/[0.08] text-cyan-100"
                          : "border-white/10 text-slate-400"
                      }
                    >
                      {entry === "Timeline" ? (
                        <CalendarDays className="mr-2 size-4" />
                      ) : entry === "Kanban" ? (
                        <Columns3 className="mr-2 size-4" />
                      ) : entry === "Dependencies" ? (
                        <GitBranch className="mr-2 size-4" />
                      ) : (
                        <Grid3X3 className="mr-2 size-4" />
                      )}
                      {entry}
                    </Button>
                  )
                )}
              </div>
              <div className="mt-6 flex items-end gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                    Current local view
                  </p>
                  <h2 className="mt-2 text-3xl font-black">{view}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  Illustrative only
                </Badge>
              </div>
              <div className="mt-6 space-y-3">
                {filtered.map((item, index) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-white/10 bg-black/10 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{item.name}</p>
                        <p className="mt-1 text-xs text-slate-500">
                          {view === "Dependencies"
                            ? "Dependency relationship not connected"
                            : view === "Milestones"
                              ? "Milestone date not configured"
                              : view === "Kanban"
                                ? `Column intent: ${item.stage}`
                                : "Sequence intent: local preview"}
                        </p>
                      </div>
                      <span className="text-xs text-slate-500">Local</span>
                    </div>
                    {view === "Timeline" && (
                      <div className="mt-4 h-2 rounded-full bg-white/5">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-cyan-300/70 to-violet-400/60"
                          style={{ width: `${36 + index * 15}%` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <CalendarDays className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No live roadmap data loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed projects, milestones, dependencies, dates,
                  capacity, approvals, release evidence, and owners before using
                  this view for delivery decisions.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Publish view unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Share unavailable
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
                    No schedule or completion claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Illustrative bars and local stages do not prove dates,
                    staffing, capacity, budget, milestone completion, launch
                    readiness, or dependency resolution.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Visualization gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real roadmap view must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated projects, milestones, owners, dates, tenants, sources, and decision records",
                "Timeline, kanban, dependency, and milestone semantics with timezone, calendar, status, and change history",
                "Capacity, staffing, budget, risks, quality gates, release evidence, rollback, accessibility, and support",
                "Crypto, AI, finance, education, marketplace, legal, safety, and user-impact claims require domain evidence",
                "Sharing, export, privacy, redaction, permissions, retention, deletion, audit, and notification controls",
                "Delivery, launch, completion, uptime, adoption, revenue, and business outcomes require accountable review",
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
              title: "View surface preserved",
              description:
                "Timeline, kanban, dependency, milestone, filters, stages, cards, sharing, publishing, export, save/reset, and gates remain interactive.",
              icon: Grid3X3,
              status: "Local views",
            },
            {
              title: "No schedule theater",
              description:
                "Dates, staffing, capacity, budgets, milestones, launches, dependency resolution, uptime, and business outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before visualization",
              description:
                "Real roadmap views require governed project data, semantics, owners, dependencies, release evidence, privacy, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
