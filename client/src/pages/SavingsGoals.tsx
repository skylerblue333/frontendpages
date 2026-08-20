import { useMemo, useState } from "react";
import {
  Banknote,
  Check,
  Filter,
  Flag,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  Target,
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
const goals = [
  {
    id: 1,
    name: "Education goal",
    category: "Personal",
    detail:
      "A local goal concept requiring target definition, time horizon, contribution source, assumptions, privacy, and review before any plan is acted on.",
    state: "Unconfigured",
  },
  {
    id: 2,
    name: "Emergency reserve",
    category: "Safety",
    detail:
      "A reserve concept requiring verified accounts, liquidity, currency, access, risk, tax, and regulated financial review.",
    state: "Needs evidence",
  },
  {
    id: 3,
    name: "Property deposit",
    category: "Property",
    detail:
      "A property-planning concept requiring price source, jurisdiction, financing, fees, tax, title, affordability, and professional advice.",
    state: "Blocked",
  },
  {
    id: 4,
    name: "Community project",
    category: "Community",
    detail:
      "A community funding concept requiring purpose, approval, stewardship, transparent accounting, privacy, and participant safeguards.",
    state: "Preview",
  },
];
export default function SavingsGoals() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [target, setTarget] = useState("Target not configured");
  const [cadence, setCadence] = useState("Cadence not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(goals.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      goals.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const goal = goals.find(item => item.id === selected) ?? goals[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setTarget("Target not configured");
    setCadence("Cadence not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Target}
        eyebrow="Savings goals · Planning preview"
        title="Define the goal before moving any money."
        description="Explore local education, reserve, property, and community savings-goal concepts with search, category filters, target and cadence intent, milestone and privacy gates, save/reset, and blocked deposits/transfers. No account, balance, income, expense, interest, return, affordability, financial plan, or transaction is connected."
        badge="Financial-planning workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save goal locally"}
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
            {showGates ? "Close gates" : "Review goal gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset goal
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Goal concepts",
              value: `${goals.length} local`,
              hint: "No account source",
              icon: Target,
              tone: "cyan",
            },
            {
              label: "Target",
              value: "Unconfigured",
              hint: "No currency source",
              icon: Flag,
              tone: "violet",
            },
            {
              label: "Progress",
              value: "Unavailable",
              hint: "No balance source",
              icon: Banknote,
              tone: "amber",
            },
            {
              label: "Transfers",
              value: "Blocked",
              hint: "No financial integration",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Savings evidence boundary">
          <strong>
            This is a local goal-planning preview, not a savings account,
            balance tracker, investment product, or financial recommendation.
          </strong>{" "}
          Goal cards, filters, target and cadence intent, saved state,
          milestone/privacy gates, and disabled deposit/transfer actions are
          browser concepts. No account, balance, contribution, income, expense,
          interest, return, tax, affordability, financial outcome, or
          transaction is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local savings goals"
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
                    Selected goal concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{goal.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {goal.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {goal.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: goal.category },
                  { label: "Target", value: target },
                  { label: "Cadence", value: cadence },
                  { label: "Progress", value: "Unavailable" },
                  { label: "Interest", value: "Not claimed" },
                  { label: "Privacy", value: "Required" },
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
                  Target intent
                  <select
                    value={target}
                    onChange={event => setTarget(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Target not configured</option>
                    <option>Fixed target intent</option>
                    <option>Milestone target intent</option>
                    <option>Percentage target intent</option>
                    <option>Review-before-target intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Contribution cadence
                  <select
                    value={cadence}
                    onChange={event => setCadence(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Cadence not configured</option>
                    <option>Weekly intent</option>
                    <option>Monthly intent</option>
                    <option>Milestone intent</option>
                    <option>Manual intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Target className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No savings evidence loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed accounts, balances, currency, income,
                  expenses, contributions, transfers, interest, fees, tax,
                  privacy, affordability, and regulated financial review before
                  acting on a goal.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Add contribution unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Transfer unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Calculate unavailable
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
                    No balance or financial-outcome claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A goal concept does not prove an account, balance,
                    contribution, income, expense, interest, return,
                    affordability, tax result, financial plan, or transfer.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Savings-goal gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real savings-goal system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated account, user, currency, target, time horizon, contribution source, timestamp, privacy, and change history",
                "Balance, income, expense, contribution, transfer, interest, fee, tax, liquidity, affordability, and reconciliation evidence",
                "Goal milestones, cadence, notifications, missed contributions, stale data, access, retention, deletion, export, and support",
                "Financial, investment, retirement, property, mortgage, tax, crypto, legal, and user-impact claims require domain review",
                "No custody, money movement, payment, wallet, bank, investment return, or financial-advice boundary may be implied by a preview",
                "Add, edit, pause, contribute, transfer, calculate, share, export, notify, and accountable approval require governed controls",
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
              title: "Savings surface preserved",
              description:
                "Education, reserve, property, community goals, filters, targets, cadence, milestones, contributions, transfers, calculation, export, save/reset, and gates remain interactive.",
              icon: Target,
              status: "Local goals",
            },
            {
              title: "No finance theater",
              description:
                "Accounts, balances, contributions, income, expenses, interest, returns, affordability, taxes, transfers, and financial outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before money movement",
              description:
                "Real savings goals require governed accounts, balances, currency, contribution sources, reconciliation, privacy, affordability, and professional financial review.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
