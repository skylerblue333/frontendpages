import { useMemo, useState } from "react";
import {
  BarChart3,
  Check,
  FileText,
  Filter,
  LockKeyhole,
  Mail,
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
const reports = [
  {
    id: 1,
    name: "Executive metrics brief",
    category: "Business",
    detail:
      "A local report concept requiring metric definitions, source provenance, period, audience, approval, privacy, and distribution controls.",
    state: "Unconfigured",
  },
  {
    id: 2,
    name: "Security control review",
    category: "Security",
    detail:
      "A control-report concept requiring scope, evidence, redaction, reviewer approval, report period, and audit trail.",
    state: "Needs evidence",
  },
  {
    id: 3,
    name: "Learning progress digest",
    category: "Education",
    detail:
      "An education report concept requiring learner privacy, consent, accessibility, curriculum context, and responsible audience handling.",
    state: "Blocked",
  },
  {
    id: 4,
    name: "Financial reconciliation brief",
    category: "Finance",
    detail:
      "A finance report concept requiring transaction provenance, currency, refunds, tax scope, reconciliation, and professional review.",
    state: "Preview",
  },
];
export default function ScheduledReports() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [cadence, setCadence] = useState("Cadence not configured");
  const [audience, setAudience] = useState("Audience not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(reports.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      reports.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const report = reports.find(item => item.id === selected) ?? reports[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setCadence("Cadence not configured");
    setAudience("Audience not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={FileText}
        eyebrow="Scheduled reports · Delivery preview"
        title="Define the report before distributing the claim."
        description="Explore local business, security, education, and finance report concepts with search, category filters, cadence and audience intent, privacy and version gates, save/reset, and blocked generate/send actions. No report, metric, source, recipient, delivery, compliance status, or business outcome is connected."
        badge="Report-governance workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save report locally"}
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
            {showGates ? "Close gates" : "Review report gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset report
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Report concepts",
              value: `${reports.length} local`,
              hint: "No report source",
              icon: FileText,
              tone: "cyan",
            },
            {
              label: "Schedule",
              value: "Unconfigured",
              hint: "No scheduler source",
              icon: RefreshCw,
              tone: "violet",
            },
            {
              label: "Audience",
              value: "Unavailable",
              hint: "No recipient source",
              icon: UsersRound,
              tone: "amber",
            },
            {
              label: "Delivery",
              value: "Blocked",
              hint: "No transport source",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Report evidence boundary">
          <strong>
            This is a local report-delivery preview, not evidence that a report,
            metric, source, recipient, delivery, or compliance status exists.
          </strong>{" "}
          Report cards, filters, cadence and audience intent, saved state,
          privacy/version gates, and disabled generate/send actions are browser
          concepts. No report content, metric, financial statement, security
          status, learner record, recipient, email, notification, compliance
          result, or business outcome is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local scheduled reports"
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
                    Selected report concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{report.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {report.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {report.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: report.category },
                  { label: "Cadence", value: cadence },
                  { label: "Audience", value: audience },
                  { label: "Sources", value: "Unavailable" },
                  { label: "Version", value: "Unconfigured" },
                  { label: "Delivery", value: "Blocked" },
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
                  Cadence intent
                  <select
                    value={cadence}
                    onChange={event => setCadence(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Cadence not configured</option>
                    <option>Manual intent</option>
                    <option>Daily intent</option>
                    <option>Weekly intent</option>
                    <option>Event-triggered intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Audience intent
                  <select
                    value={audience}
                    onChange={event => setAudience(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Audience not configured</option>
                    <option>Private owner intent</option>
                    <option>Security reviewer intent</option>
                    <option>Opted-in team intent</option>
                    <option>Governance reviewer intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <FileText className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No report evidence loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed data sources, metric definitions, reporting
                  period, timezone, privacy, redaction, audience, transport,
                  scheduling, versioning, approval, and audit before generating.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Generate unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  <Mail className="mr-2 size-4" />
                  Send unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Preview unavailable
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
                    No report or recipient claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A report concept does not prove source data, metric values,
                    financial statements, security results, learner records,
                    recipients, delivery, compliance status, or business
                    outcome.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Report-delivery gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real scheduled-report system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated owner, tenant, report, source, metric, period, timezone, schedule, audience, transport, version, and provenance",
                "Finance, security, education, privacy, AI, crypto, marketplace, community, and user-impact claims require domain review",
                "Redaction, access, consent, retention, deletion, export, recipient verification, notifications, retries, suppression, and support",
                "Report rendering, file security, attachment policy, email provider, links, webhooks, delivery status, bounce, and incident response",
                "Draft, approve, publish, pause, generate, preview, send, export, share, rollback, accessibility, and accountable approval",
                "A report, dashboard, or scheduled delivery must not be presented as a certification, audit result, financial statement, legal record, or operational fact without evidence",
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
              title: "Report surface preserved",
              description:
                "Business, security, education, finance reports, filters, cadence, audience, delivery, privacy, versions, generate, send, preview, export, save/reset, and gates remain interactive.",
              icon: FileText,
              status: "Local reports",
            },
            {
              title: "No reporting theater",
              description:
                "Sources, metrics, financial statements, security results, learner records, recipients, delivery, compliance status, and business outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before distribution",
              description:
                "Real reports require governed data, definitions, privacy, recipient controls, rendering, transport, scheduling, versioning, approval, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
