import { useMemo, useState } from "react";
import {
  Check,
  Filter,
  KeyRound,
  Link2,
  LockKeyhole,
  MessageSquareText,
  RefreshCw,
  Send,
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
const integrations = [
  {
    id: 1,
    name: "SMS provider",
    category: "Provider",
    detail:
      "A local provider concept requiring server-side credentials, sender identity, rate limits, webhooks, delivery semantics, privacy, and support.",
    state: "Unconfigured",
  },
  {
    id: 2,
    name: "Transactional sender",
    category: "Sender",
    detail:
      "A sender concept requiring verified origin, purpose, template policy, consent semantics, localization, and audit.",
    state: "Needs evidence",
  },
  {
    id: 3,
    name: "Delivery webhook",
    category: "Webhooks",
    detail:
      "A delivery concept requiring signature verification, replay protection, idempotency, status mapping, retries, and secret rotation.",
    state: "Blocked",
  },
  {
    id: 4,
    name: "Consent sync",
    category: "Privacy",
    detail:
      "A consent concept requiring source authority, opt-in/opt-out events, timestamps, purpose, retention, and deletion handling.",
    state: "Unconnected",
  },
];
export default function SMSIntegration() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [credential, setCredential] = useState(
    "Credential boundary not configured"
  );
  const [webhook, setWebhook] = useState("Webhook boundary not configured");
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
    setCredential("Credential boundary not configured");
    setWebhook("Webhook boundary not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-201" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Link2}
        eyebrow="SMS integration · Connectivity preview"
        title="Connect the provider only after the boundary is safe."
        description="Explore local SMS provider, sender, webhook, and consent-sync integration concepts with search, category filters, credential and webhook intent, delivery and privacy gates, save/reset, and blocked connection/send actions. No provider, credential, phone number, webhook, delivery, consent, or compliance outcome is connected."
        badge="Integration governance workspace"
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
            {showGates ? "Close gates" : "Review integration gates"}
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
              label: "Integrations",
              value: `${integrations.length} local`,
              hint: "No provider source",
              icon: Link2,
              tone: "cyan",
            },
            {
              label: "Credentials",
              value: "Unconfigured",
              hint: "Server boundary required",
              icon: KeyRound,
              tone: "violet",
            },
            {
              label: "Webhooks",
              value: "Blocked",
              hint: "No signature source",
              icon: Send,
              tone: "amber",
            },
            {
              label: "Delivery",
              value: "Unavailable",
              hint: "No provider source",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Integration evidence boundary">
          <strong>
            This is a local SMS-connectivity preview, not evidence that a
            provider, credential, sender, webhook, recipient, or delivery status
            exists.
          </strong>{" "}
          Integration cards, filters, credential and webhook intent, saved
          state, and disabled connect/send actions are browser concepts. No
          secret, phone number, provider account, webhook event, delivery,
          consent, cost, or regulatory outcome is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local SMS integrations"
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
                    Selected integration concept
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
                  { label: "Credential", value: credential },
                  { label: "Webhook", value: webhook },
                  { label: "Provider", value: "Unavailable" },
                  { label: "Sender", value: "Unconfigured" },
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
                  Credential boundary
                  <select
                    value={credential}
                    onChange={event => setCredential(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Credential boundary not configured</option>
                    <option>Server-side secret intent</option>
                    <option>Managed connector intent</option>
                    <option>Rotation-required intent</option>
                    <option>Least-privilege intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Webhook boundary
                  <select
                    value={webhook}
                    onChange={event => setWebhook(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Webhook boundary not configured</option>
                    <option>Signed webhook intent</option>
                    <option>Replay-protected intent</option>
                    <option>Idempotent status intent</option>
                    <option>Retry-aware intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Link2 className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No integration evidence loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed provider configuration, server-side secrets,
                  sender verification, webhooks, signature checks, retries,
                  consent, privacy, rate limits, monitoring, and audit before
                  connecting.
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
                  Verify unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Send test unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Rotate unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No provider or delivery claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    An integration concept does not prove a provider account,
                    credential, sender, webhook, recipient, delivery status,
                    consent, cost, security, or compliance.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Integration gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real SMS integration must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Server-side provider credentials, sender identity, tenant, purpose, secret rotation, least privilege, and environment separation",
                "Webhook signature verification, replay protection, idempotency, status mapping, retries, dead letters, and audit",
                "Recipient provenance, consent, opt-out, quiet hours, localization, template policy, rate limits, and privacy",
                "Delivery, failure, cost, provider status, incidents, support, monitoring, retention, deletion, export, and recovery",
                "Security, transactional, marketing, education, community, financial, AI, and user-impact claims require domain review",
                "Connect, test send, rotate, disconnect, rollback, notifications, accessibility, and accountable approval",
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
              title: "Integration surface preserved",
              description:
                "Provider, sender, webhook, consent, filters, credentials, privacy, delivery, verification, test send, rotation, save/reset, and gates remain interactive.",
              icon: Link2,
              status: "Local integrations",
            },
            {
              title: "No secret theater",
              description:
                "Provider accounts, credentials, senders, webhooks, deliveries, consent, cost, security, and compliance are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Server boundary before connect",
              description:
                "Real SMS integration requires server-side secret handling, signed webhooks, idempotency, privacy, consent, rate limits, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
