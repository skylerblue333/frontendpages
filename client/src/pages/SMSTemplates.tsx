import { useMemo, useState } from "react";
import {
  Check,
  FileText,
  Filter,
  Languages,
  LockKeyhole,
  MessageSquareText,
  RefreshCw,
  ShieldAlert,
  Tag,
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
const templates = [
  {
    id: 1,
    name: "Transactional notification",
    category: "Transactional",
    detail:
      "A local message-template concept requiring event provenance, sender identity, variable validation, localization, quiet hours, and audit.",
    state: "Unconfigured",
  },
  {
    id: 2,
    name: "Lifecycle update",
    category: "Lifecycle",
    detail:
      "A lifecycle template concept requiring consent purpose, audience rules, opt-out, personalization safety, and approval.",
    state: "Needs review",
  },
  {
    id: 3,
    name: "Learning reminder",
    category: "Education",
    detail:
      "An education template concept requiring learner consent, safeguarding, accessible language, curriculum authority, and privacy.",
    state: "Blocked",
  },
  {
    id: 4,
    name: "Community announcement",
    category: "Community",
    detail:
      "A community template concept requiring moderator approval, audience boundaries, anti-abuse controls, language support, and appeals.",
    state: "Preview",
  },
];
export default function SMSTemplates() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [variables, setVariables] = useState("Variables not configured");
  const [locale, setLocale] = useState("Locale not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(templates.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      templates.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const template = templates.find(item => item.id === selected) ?? templates[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setVariables("Variables not configured");
    setLocale("Locale not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={FileText}
        eyebrow="SMS templates · Content preview"
        title="Validate the message before it reaches a phone."
        description="Explore local transactional, lifecycle, education, and community SMS-template concepts with search, category filters, variable and locale intent, consent and opt-out gates, save/reset, and blocked publish/send actions. No message, recipient, phone number, consent, provider, delivery, or communication outcome is connected."
        badge="Message-quality workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save template locally"}
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
            {showGates ? "Close gates" : "Review template gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset template
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Templates",
              value: `${templates.length} local`,
              hint: "No content source",
              icon: FileText,
              tone: "cyan",
            },
            {
              label: "Variables",
              value: "Unconfigured",
              hint: "No event source",
              icon: Tag,
              tone: "violet",
            },
            {
              label: "Locales",
              value: "Unconfigured",
              hint: "No language source",
              icon: Languages,
              tone: "amber",
            },
            {
              label: "Publishing",
              value: "Blocked",
              hint: "No approval",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Template evidence boundary">
          <strong>
            This is a local message-template preview, not evidence that a
            message, recipient, consent, sender, or delivery exists.
          </strong>{" "}
          Template cards, filters, variable and locale intent, saved state,
          opt-out gates, and disabled publish/send actions are browser concepts.
          No phone number, message content, provider, delivery, cost,
          compliance, or user outcome is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local message templates"
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
                    Selected template concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{template.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {template.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {template.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: template.category },
                  { label: "Variables", value: variables },
                  { label: "Locale", value: locale },
                  { label: "Sender", value: "Unconfigured" },
                  { label: "Consent", value: "Required" },
                  { label: "Opt-out", value: "Required" },
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
                  Variable intent
                  <select
                    value={variables}
                    onChange={event => setVariables(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Variables not configured</option>
                    <option>Event-safe variables</option>
                    <option>Consent-aware variables</option>
                    <option>Localized variables</option>
                    <option>Redacted variables</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Locale intent
                  <select
                    value={locale}
                    onChange={event => setLocale(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Locale not configured</option>
                    <option>English intent</option>
                    <option>Multilingual intent</option>
                    <option>Right-to-left review intent</option>
                    <option>Accessible-language intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <MessageSquareText className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No template evidence loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed content, event variables, sender, consent,
                  opt-out, locale, accessibility, provider, approval, privacy,
                  and audit before publishing.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Publish unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Preview send unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Validate unavailable
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
                    No message or delivery claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A template concept does not prove message content,
                    recipient, phone number, variable value, consent, sender,
                    provider, delivery, cost, or regulatory compliance.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Template gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real SMS-template system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated event and recipient context, purpose, consent, phone provenance, tenant, locale, timestamp, and source",
                "Variable schema, type validation, redaction, escaping, character limits, localization, encoding, and accessibility",
                "Sender identity, template approval, transactional/marketing policy, quiet hours, opt-out, rate limits, and provider",
                "Delivery, failure, retry, cost, status callbacks, support, monitoring, retention, deletion, export, and recovery",
                "Security, education, community, marketing, financial, health, legal, and user-impact claims require domain review",
                "Preview send, publish, rollback, versioning, audit, abuse prevention, notifications, and accountable approval",
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
              title: "Template surface preserved",
              description:
                "Transactional, lifecycle, education, community templates, filters, variables, locales, senders, consent, opt-out, validation, publishing, export, save/reset, and gates remain interactive.",
              icon: FileText,
              status: "Local templates",
            },
            {
              title: "No message theater",
              description:
                "Messages, recipients, phone numbers, variables, consent, providers, deliveries, costs, and compliance outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Consent before publish",
              description:
                "Real templates require governed content, variables, sender, consent, opt-out, localization, provider evidence, privacy, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
