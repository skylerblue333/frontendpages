import { useMemo, useState } from "react";
import {
  CalendarRange,
  Check,
  Filter,
  GitBranch,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  Target,
  UsersRound,
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
const initiatives = [
  {
    id: 1,
    name: "Frontend reliability",
    category: "Platform",
    detail:
      "A local initiative concept for validation, accessibility, performance, error states, and release evidence.",
    state: "Planning",
  },
  {
    id: 2,
    name: "Wallet safety review",
    category: "Crypto",
    detail:
      "A high-risk concept requiring network, address, custody, transaction, signing, status, and recovery evidence.",
    state: "Needs evidence",
  },
  {
    id: 3,
    name: "HopeAI evaluation",
    category: "AI",
    detail:
      "An AI-quality concept requiring model contract, evaluation set, safety review, privacy, latency, and human oversight.",
    state: "Unconfigured",
  },
  {
    id: 4,
    name: "SkySchool curriculum",
    category: "Education",
    detail:
      "An education concept requiring curriculum authority, content review, learner progress, assessment, accessibility, and certification evidence.",
    state: "Preview",
  },
];
export default function Roadmap() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [status, setStatus] = useState("Status not configured");
  const [owner, setOwner] = useState("Owner not assigned");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(initiatives.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      initiatives.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const initiative =
    initiatives.find(item => item.id === selected) ?? initiatives[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setStatus("Status not configured");
    setOwner("Owner not assigned");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-201" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={CalendarRange}
        eyebrow="Roadmap · Planning preview"
        title="Plan the proof, not just the promise."
        description="Explore local platform, crypto, AI, and education initiative concepts with search, category filters, status and owner intent, dependency gates, save/reset, and blocked delivery actions. No schedule, funding, capacity, launch, completion, uptime, model, wallet, or curriculum outcome is asserted."
        badge="Planning workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save initiative locally"}
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
            {showGates ? "Close gates" : "Review planning gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset roadmap
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Initiatives",
              value: `${initiatives.length} local`,
              hint: "No roadmap source",
              icon: Target,
              tone: "cyan",
            },
            {
              label: "Milestones",
              value: "Unplanned",
              hint: "No schedule source",
              icon: CalendarRange,
              tone: "violet",
            },
            {
              label: "Owners",
              value: "Unassigned",
              hint: "No directory source",
              icon: UsersRound,
              tone: "amber",
            },
            {
              label: "Dependencies",
              value: "Unmapped",
              hint: "No delivery source",
              icon: GitBranch,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Roadmap evidence boundary">
          <strong>
            This is a local planning preview, not a delivery commitment or
            project-status report.
          </strong>{" "}
          Initiative cards, filters, status and owner intent, dependency gates,
          saved state, and disabled delivery actions are browser concepts. No
          date, budget, staffing, launch, completion, dependency resolution,
          uptime, security certification, AI outcome, wallet result, or
          education result is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local initiatives"
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
                    Selected initiative concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    {initiative.name}
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {initiative.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {initiative.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: initiative.category },
                  { label: "Status", value: status },
                  { label: "Owner", value: owner },
                  { label: "Milestones", value: "Unplanned" },
                  { label: "Dependencies", value: "Unmapped" },
                  { label: "Evidence", value: "Required" },
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
                  Status intent
                  <select
                    value={status}
                    onChange={event => setStatus(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Status not configured</option>
                    <option>Discovery intent</option>
                    <option>Design intent</option>
                    <option>Build intent</option>
                    <option>Validation intent</option>
                    <option>Release-review intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Owner intent
                  <select
                    value={owner}
                    onChange={event => setOwner(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Owner not assigned</option>
                    <option>Product owner intent</option>
                    <option>Engineering owner intent</option>
                    <option>Security owner intent</option>
                    <option>Education owner intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <CalendarRange className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No roadmap evidence loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed initiatives, milestones, dependencies,
                  staffing, capacity, budget, approvals, risks, release
                  evidence, and accountable owners before making delivery
                  claims.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Create milestone unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Commit date unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Publish roadmap unavailable
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
                    No delivery or completion claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    An initiative concept does not prove a schedule, budget,
                    staff, milestone completion, launch, dependency resolution,
                    production readiness, or user outcome.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Roadmap gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real delivery roadmap must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated initiative, scope, owner, tenant, priority, assumptions, source, timestamp, and decision record",
                "Milestones, dependencies, capacity, staffing, budget, calendar, risks, changes, approvals, and escalation",
                "Definition of done, quality gates, accessibility, security, privacy, performance, tests, observability, and rollback",
                "Crypto, AI, finance, education, marketplace, legal, safety, and user-impact claims require domain evidence",
                "Release status, environments, migrations, incident response, support, communications, and operational ownership",
                "Dates, launch, completion, uptime, certification, financial, adoption, revenue, and business outcomes require accountable review",
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
              title: "Roadmap surface preserved",
              description:
                "Platform, crypto, AI, education initiatives, filters, status, owners, milestones, dependencies, dates, publishing, export, save/reset, and gates remain interactive.",
              icon: CalendarRange,
              status: "Local initiatives",
            },
            {
              title: "No delivery theater",
              description:
                "Dates, funding, staffing, milestones, launches, completion, uptime, certification, adoption, and business outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before commitment",
              description:
                "Real roadmaps require governed scope, owners, dependencies, capacity, quality gates, release evidence, and accountable review.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
