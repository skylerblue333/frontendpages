import { useMemo, useState } from "react";
import {
  Check,
  Cloud,
  Filter,
  KeyRound,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
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
const integrations = [
  {
    id: 1,
    name: "CRM connection",
    category: "Connection",
    detail:
      "A local CRM-provider concept requiring OAuth, tenant, redirect, scopes, secret boundary, rate limits, and disconnect recovery.",
    state: "Unconfigured",
  },
  {
    id: 2,
    name: "Customer object mapping",
    category: "Mapping",
    detail:
      "A customer-data mapping concept requiring schema, identity resolution, consent, minimization, deduplication, and audit.",
    state: "Needs evidence",
  },
  {
    id: 3,
    name: "Pipeline sync",
    category: "Sync",
    detail:
      "A pipeline concept requiring source-of-truth, field mapping, idempotency, conflict handling, retries, and reconciliation.",
    state: "Blocked",
  },
  {
    id: 4,
    name: "Revenue reporting sync",
    category: "Finance",
    detail:
      "A finance-data concept requiring order and payment provenance, currency, refund handling, tax scope, privacy, and accountable review.",
    state: "Preview",
  },
];
export default function SalesforceIntegration() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [scope, setScope] = useState("Scope not configured");
  const [sync, setSync] = useState("Sync policy not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(integrations.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      integrations.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const integration =
    integrations.find(item => item.id === selected) ?? integrations[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setScope("Scope not configured");
    setSync("Sync policy not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Cloud}
        eyebrow="Salesforce integration · CRM preview"
        title="Map the data before synchronizing the customer record."
        description="Explore local CRM connection, customer mapping, pipeline sync, and revenue-reporting concepts with search, category filters, scope and sync intent, privacy and conflict gates, save/reset, and blocked connect/sync actions. No CRM tenant, OAuth grant, user, customer, pipeline, order, payment, revenue, or business outcome is connected."
        badge="Enterprise integration workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save integration locally"}
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
            {showGates ? "Close gates" : "Review CRM gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset integration
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Integration concepts",
              value: `${integrations.length} local`,
              hint: "No CRM source",
              icon: Cloud,
              tone: "cyan",
            },
            {
              label: "Customers",
              value: "Unavailable",
              hint: "No identity source",
              icon: UsersRound,
              tone: "violet",
            },
            {
              label: "Scopes",
              value: "Unconfigured",
              hint: "No OAuth source",
              icon: KeyRound,
              tone: "amber",
            },
            {
              label: "Sync",
              value: "Blocked",
              hint: "No tenant source",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="CRM integration evidence boundary">
          <strong>
            This is a local CRM-integration preview, not evidence that
            Salesforce, a tenant, user, customer, pipeline, order, payment, or
            sync exists.
          </strong>{" "}
          Integration cards, filters, scope and sync intent, saved state,
          conflict/privacy gates, and disabled connect/sync actions are browser
          concepts. No OAuth grant, secret, customer record, field value,
          pipeline stage, revenue, payment, consent, or business outcome is
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
                  placeholder="Search local CRM integrations"
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
                    Selected CRM concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    {integration.name}
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {integration.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {integration.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: integration.category },
                  { label: "Scope", value: scope },
                  { label: "Sync", value: sync },
                  { label: "Tenant", value: "Unavailable" },
                  { label: "Records", value: "Unavailable" },
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
                  Scope intent
                  <select
                    value={scope}
                    onChange={event => setScope(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Scope not configured</option>
                    <option>Read-only CRM intent</option>
                    <option>Customer-data intent</option>
                    <option>Pipeline intent</option>
                    <option>Finance-reporting intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Sync policy intent
                  <select
                    value={sync}
                    onChange={event => setSync(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Sync policy not configured</option>
                    <option>Manual sync intent</option>
                    <option>Scheduled sync intent</option>
                    <option>Source-of-truth intent</option>
                    <option>Conflict-review intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Cloud className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No CRM evidence loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed tenant, OAuth, server-side secrets, object
                  schema, mapping, customer consent, privacy, rate limits,
                  conflict handling, retries, reconciliation, and audit before
                  syncing.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Connect unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Sync unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Map unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Disconnect unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No CRM or revenue claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    An integration concept does not prove a CRM tenant, OAuth
                    grant, customer, field value, pipeline, order, payment,
                    revenue, sync result, consent, or security control.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              CRM integration gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real Salesforce integration must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tenant, OAuth issuer, client, redirect, scopes, token storage, rotation, environment, user, timestamp, and disconnect provenance",
                "Object schema, field mapping, identity resolution, deduplication, source of truth, conflict policy, idempotency, retries, and reconciliation",
                "Customer privacy, consent, classification, redaction, retention, deletion, export, lawful access, support, and incident response",
                "Orders, payments, revenue, pipeline, tax, refunds, currency, financial, educational, AI, and user-impact claims require domain review",
                "Rate limits, webhooks, callback verification, audit, monitoring, error states, recovery, rollback, and data-quality checks",
                "Connect, sync, map, import, export, disconnect, notifications, accessibility, and accountable approval require governed controls",
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
              title: "CRM surface preserved",
              description:
                "Connection, customer mapping, pipeline sync, revenue reporting, filters, scopes, conflicts, privacy, connect, sync, map, disconnect, save/reset, and gates remain interactive.",
              icon: Cloud,
              status: "Local integrations",
            },
            {
              title: "No customer-data theater",
              description:
                "Tenants, OAuth grants, customers, field values, pipelines, orders, payments, revenue, sync results, and privacy outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Consent and provenance before sync",
              description:
                "Real CRM integration requires scoped OAuth, server-side secrets, data mapping, consent, conflict policy, reconciliation, rate limits, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
