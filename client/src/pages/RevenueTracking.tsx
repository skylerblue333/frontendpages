import { useMemo, useState } from "react";
import {
  BarChart3,
  Check,
  CircleDollarSign,
  Download,
  Filter,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  SlidersHorizontal,
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
const definitions = [
  {
    id: 1,
    name: "Gross revenue",
    category: "Revenue",
    detail:
      "A metric definition requiring settled transaction provenance, currency, fees, refunds, reversals, time zone, and reconciliation.",
    state: "Unmeasured",
  },
  {
    id: 2,
    name: "Net revenue",
    category: "Revenue",
    detail:
      "A definition concept requiring approved deductions, taxes, refunds, chargebacks, costs, and accounting policy.",
    state: "Needs ledger",
  },
  {
    id: 3,
    name: "Recurring revenue",
    category: "Subscription",
    detail:
      "A subscription metric concept requiring contract state, billing events, proration, cancellations, renewals, and source authority.",
    state: "Unconnected",
  },
  {
    id: 4,
    name: "Revenue per account",
    category: "Unit economics",
    detail:
      "A ratio definition requiring an explicit denominator, identity stitching, consent, deduplication, and review.",
    state: "Blocked",
  },
];
export default function RevenueTracking() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [period, setPeriod] = useState("Period not configured");
  const [currency, setCurrency] = useState("Currency not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(definitions.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      definitions.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const definition =
    definitions.find(item => item.id === selected) ?? definitions[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setPeriod("Period not configured");
    setCurrency("Currency not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={CircleDollarSign}
        eyebrow="Revenue tracking · Preview"
        title="Define the ledger before trusting the number."
        description="Explore local revenue metric definitions with filters, period and currency intent, illustrative-only trend bars, save/reset, export boundaries, and evidence gates. No live revenue, users, transactions, payments, currency, profit, or business outcome is connected."
        badge="Finance workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save definition locally"}
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
            {showGates ? "Close gates" : "Review finance gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset definition
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Definitions",
              value: `${definitions.length} local`,
              hint: "No ledger source",
              icon: BarChart3,
              tone: "cyan",
            },
            {
              label: "Revenue",
              value: "Unavailable",
              hint: "No settlement source",
              icon: CircleDollarSign,
              tone: "violet",
            },
            {
              label: "Transactions",
              value: "Unconnected",
              hint: "No event source",
              icon: BarChart3,
              tone: "amber",
            },
            {
              label: "Finance status",
              value: "Review needed",
              hint: "No reconciliation",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Revenue evidence boundary">
          <strong>
            This is a local revenue-definition preview, not financial reporting.
          </strong>{" "}
          Metric definitions, period and currency intent, illustrative bars,
          saved state, export boundaries, and review gates are browser concepts.
          No revenue amount, active user count, transaction count, success rate,
          response time, currency, profit, tax, payment, or business outcome is
          asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local revenue definitions"
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
                    Selected metric definition
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    {definition.name}
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {definition.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {definition.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: definition.category },
                  { label: "Period", value: period },
                  { label: "Currency", value: currency },
                  { label: "Amount", value: "Unavailable" },
                  { label: "Transactions", value: "Unconnected" },
                  { label: "Reconciliation", value: "Required" },
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
                  Reporting period
                  <select
                    value={period}
                    onChange={event => setPeriod(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Period not configured</option>
                    <option>Daily intent</option>
                    <option>Monthly intent</option>
                    <option>Quarterly intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Currency policy
                  <select
                    value={currency}
                    onChange={event => setCurrency(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Currency not configured</option>
                    <option>Single-currency intent</option>
                    <option>Multi-currency intent</option>
                    <option>Reporting-currency intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Illustrative trend shape</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Decorative preview only · not financial data
                    </p>
                  </div>
                  <SlidersHorizontal className="size-4 text-slate-500" />
                </div>
                <div className="mt-5 flex h-28 items-end gap-2">
                  {[26, 38, 32, 48, 42, 56, 50, 62].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-emerald-400/60 to-cyan-300/60"
                      style={{ height: `${height}%` }}
                      aria-label="Illustrative revenue bar"
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wider text-slate-600">
                  <span>Earlier</span>
                  <span>Illustrative</span>
                  <span>Later</span>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  <Download className="mr-2 size-4" />
                  Export unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Refresh unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Reconcile unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No financial reporting claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A metric definition and illustrative bars do not establish
                    revenue, profit, active users, transaction counts, payment
                    success, tax, or accounting status.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Revenue gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real revenue system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated transaction and settlement events, identity, merchant, tenant, currency, timestamps, and provenance",
                "Gross/net definitions, fees, taxes, refunds, chargebacks, reversals, discounts, rounding, and accounting policy",
                "Ledger integrity, idempotency, reconciliation, backfills, period close, audit, access control, and incident response",
                "Payment processors, currencies, exchange rates, subscriptions, proration, cancellations, and jurisdictional rules",
                "Privacy, redaction, retention, deletion, exports, role separation, sensitive financial-data security, and support",
                "Forecasts, unit economics, investor claims, profitability, and business decisions require reproducible evidence and review",
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
              title: "Revenue surface preserved",
              description:
                "Revenue, net revenue, recurring revenue, unit economics, filters, periods, currency, trends, exports, reconciliation, save/reset, and gates remain interactive.",
              icon: CircleDollarSign,
              status: "Local definitions",
            },
            {
              title: "No financial theater",
              description:
                "Revenue, users, transactions, rates, response time, profit, payment, tax, and accounting outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Ledger before number",
              description:
                "Real revenue reporting needs authoritative settlements, definitions, currency rules, reconciliation, audit, and review.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
