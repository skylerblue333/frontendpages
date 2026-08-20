import { useMemo, useState } from "react";
import {
  Check,
  ClipboardList,
  Filter,
  LockKeyhole,
  RefreshCw,
  Search,
  ShieldAlert,
  WalletCards,
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
const requests = [
  {
    id: 1,
    title: "Return request",
    detail:
      "A local request pattern requiring order, item, customer, policy, condition, and fulfillment evidence.",
    category: "Return",
    state: "Needs evidence",
  },
  {
    id: 2,
    title: "Refund request",
    detail:
      "A financial workflow concept requiring payment provenance, settlement, amount, currency, authorization, and reconciliation.",
    category: "Refund",
    state: "Blocked",
  },
  {
    id: 3,
    title: "Exchange request",
    detail:
      "A fulfillment concept requiring inventory, replacement availability, shipping, authorization, and audit.",
    category: "Exchange",
    state: "Unconnected",
  },
  {
    id: 4,
    title: "Policy exception",
    detail:
      "An escalation concept requiring jurisdiction, product exception, customer communication, and accountable review.",
    category: "Policy",
    state: "Review needed",
  },
];
export default function ReturnsRefunds() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [status, setStatus] = useState("Status not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(requests.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      requests.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.title} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const request = requests.find(item => item.id === selected) ?? requests[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setStatus("Status not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-179" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={ClipboardList}
        eyebrow="Returns & refunds · Preview"
        title="Make the request traceable before money moves."
        description="Explore local return, refund, exchange, and policy-exception concepts with search, category filters, status intent, evidence requirements, save/reset, blocked financial actions, and review gates. No live order, payment, inventory, customer, refund, or legal outcome is connected."
        badge="Commerce governance"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save request locally"}
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
            {showGates ? "Close gates" : "Review refund gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset request
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Requests",
              value: `${requests.length} local`,
              hint: "No commerce source",
              icon: ClipboardList,
              tone: "cyan",
            },
            {
              label: "Orders",
              value: "Unavailable",
              hint: "No order source",
              icon: WalletCards,
              tone: "violet",
            },
            {
              label: "Payments",
              value: "Unconnected",
              hint: "No settlement source",
              icon: WalletCards,
              tone: "amber",
            },
            {
              label: "Refunds",
              value: "Blocked",
              hint: "No authorization",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Refund evidence boundary">
          <strong>
            This is a local returns/refunds governance preview, not proof that a
            request, order, payment, eligibility, or refund exists.
          </strong>{" "}
          Request cards, filters, status intent, evidence gates, saved state,
          and disabled actions are browser concepts. No order ID, customer,
          amount, currency, payment status, refund status, inventory change, or
          legal result is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local requests"
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
                        <p className="font-semibold">{item.title}</p>
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
                    Selected request concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{request.title}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {request.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {request.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: request.category },
                  { label: "Status", value: status },
                  { label: "Order", value: "Unavailable" },
                  { label: "Payment", value: "Unconnected" },
                  { label: "Amount", value: "Unavailable" },
                  { label: "Audit", value: "Required" },
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
              <label className="mt-5 block text-sm text-slate-400">
                Status intent
                <select
                  value={status}
                  onChange={event => setStatus(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                >
                  <option>Status not configured</option>
                  <option>Evidence requested intent</option>
                  <option>Review pending intent</option>
                  <option>Approved intent</option>
                  <option>Rejected intent</option>
                  <option>Escalated intent</option>
                </select>
              </label>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <ClipboardList className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No request evidence loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed order, policy, customer, item, shipment,
                  payment, inventory, authorization, communication, and audit
                  sources before taking action.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Approve unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Issue refund unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Exchange unavailable
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
                    No financial or legal claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A request concept does not prove eligibility, payment
                    settlement, refund authorization, inventory receipt,
                    customer identity, or jurisdictional compliance.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Returns/refunds gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real request workflow must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated order, customer, item, shipment, fulfillment, condition, timestamp, and tenant provenance",
                "Policy version, jurisdiction, product exceptions, eligibility window, authorization, and communication history",
                "Payment instrument, settlement, refund amount, currency, fees, fraud controls, idempotency, and reconciliation",
                "Inventory receipt, inspection, restock, disposal, replacement, shipment, and warehouse audit",
                "Privacy, redaction, access controls, user requests, retention, incident response, and support ownership",
                "Approval roles, separation of duties, audit log, rollback, notifications, accessibility, and localization",
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
              title: "Request surface preserved",
              description:
                "Return, refund, exchange, policy exceptions, filters, status, approvals, payments, audit, save/reset, and gates remain interactive.",
              icon: ClipboardList,
              status: "Local concepts",
            },
            {
              title: "No refund theater",
              description:
                "Orders, payments, amounts, currencies, refunds, inventory, customers, shipment, and legal outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before money movement",
              description:
                "Real refunds require authoritative commerce records, authorization, reconciliation, idempotency, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
