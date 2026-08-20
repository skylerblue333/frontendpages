import { useMemo, useState } from "react";
import {
  Check,
  FileCheck2,
  Filter,
  LockKeyhole,
  RefreshCw,
  Scale,
  ShieldAlert,
  ShieldCheck,
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
const controls = [
  {
    id: 1,
    name: "Privacy and data governance",
    category: "Privacy",
    detail:
      "A local compliance concept covering data inventory, lawful basis, consent, minimization, retention, deletion, export, processors, and incident response.",
    state: "Evidence needed",
  },
  {
    id: 2,
    name: "Fraud and abuse controls",
    category: "Safety",
    detail:
      "A local trust-control concept covering account abuse, transaction risk, rate limits, appeals, false positives, monitoring, and accountable review.",
    state: "Unconfigured",
  },
  {
    id: 3,
    name: "Transaction safety",
    category: "Financial",
    detail:
      "A local transaction-control concept requiring authorization, idempotency, limits, reconciliation, custody boundaries, audit, and failed-operation handling.",
    state: "High risk",
  },
  {
    id: 4,
    name: "Control framework mapping",
    category: "Assurance",
    detail:
      "A local framework concept covering control owners, evidence, tests, exceptions, review dates, and independent acceptance without claiming certification.",
    state: "Preview",
  },
];
export default function SecurityCompliance() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [framework, setFramework] = useState("Framework not configured");
  const [review, setReview] = useState("Review state not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(controls.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      controls.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const control = controls.find(item => item.id === selected) ?? controls[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setFramework("Framework not configured");
    setReview("Review state not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-203" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={ShieldCheck}
        eyebrow="Security compliance · Trust preview"
        title="Map the control before making the assurance claim."
        description="Explore local privacy, safety, financial-control, and assurance concepts with search, category filters, framework and review intent, evidence/owner/exception gates, save/reset, and blocked compliance actions. No live authentication, fraud detection, abuse filter, rate limit, transaction safety, privacy control, trust score, certification, compliance status, or system-health claim is connected."
        badge="Trust-and-control workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save control locally"}
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
            {showGates ? "Close gates" : "Review compliance gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset controls
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Control concepts",
              value: `${controls.length} local`,
              hint: "No posture source",
              icon: ShieldCheck,
              tone: "cyan",
            },
            {
              label: "Framework",
              value: "Unconfigured",
              hint: "No assessor source",
              icon: FileCheck2,
              tone: "violet",
            },
            {
              label: "Exceptions",
              value: "Unavailable",
              hint: "No register source",
              icon: Scale,
              tone: "amber",
            },
            {
              label: "Certification",
              value: "Not claimed",
              hint: "No independent review",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Security-compliance evidence boundary">
          <strong>
            This is a local control-mapping preview, not evidence that the
            platform is compliant, certified, fraud-protected, abuse-free, safe
            for transactions, or secure by default.
          </strong>{" "}
          Control cards, filters, framework/review intent, saved state,
          evidence/owner/exception gates, and disabled compliance actions are
          browser concepts. No authentication control, trust score, fraud
          result, abuse count, rate-limit posture, transaction safety, privacy
          outcome, certification, compliance status, or system-health outcome is
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
                  placeholder="Search local compliance controls"
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
                    Selected control concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{control.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {control.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {control.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: control.category },
                  { label: "Framework", value: framework },
                  { label: "Review", value: review },
                  { label: "Evidence", value: "Unavailable" },
                  { label: "Owner", value: "Unconfigured" },
                  { label: "Exception", value: "Not assessed" },
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
                  Framework intent
                  <select
                    value={framework}
                    onChange={event => setFramework(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Framework not configured</option>
                    <option>Internal-control intent</option>
                    <option>SOC-style mapping intent</option>
                    <option>Privacy-framework intent</option>
                    <option>Financial-control intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Review state
                  <select
                    value={review}
                    onChange={event => setReview(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Review state not configured</option>
                    <option>Owner review intent</option>
                    <option>Security review intent</option>
                    <option>Legal review intent</option>
                    <option>Independent assessor intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <ShieldCheck className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No compliance evidence loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect control implementation, scope, owner, evidence, tests,
                  exceptions, privacy review, transaction safeguards,
                  fraud/abuse monitoring, incident response, and independent
                  acceptance before making an assurance claim.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Assess unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Create exception unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Export evidence unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Claim compliance unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No compliance or trust claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A control concept does not prove authentication, fraud
                    protection, abuse prevention, rate limits, transaction
                    safety, privacy, trust, certification, compliance, or system
                    health.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Compliance-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real compliance surface must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated scope, control, owner, environment, framework, version, timestamp, evidence source, assessor, and review provenance",
                "Authentication, authorization, fraud, abuse, rate limits, transaction controls, privacy, data handling, logging, monitoring, and recovery",
                "Exceptions, compensating controls, remediation, retest, legal basis, processor review, incident response, and accountable approval",
                "SOC 2, ISO, PCI, HIPAA, GDPR, financial, security, privacy, trust, uptime, safety, and user-impact claims require independent domain review",
                "Assess, evidence, exception, remediate, export, attest, notify, accessibility, and accountable approval require governed compliance operations",
                "A compliance preview must not be presented as a certification, audit, trust score, regulatory status, security guarantee, fraud result, or all-systems-secure claim without evidence",
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
              title: "Compliance surface preserved",
              description:
                "Privacy, safety, financial controls, framework mapping, evidence, owners, exceptions, assessment, attestation, save/reset, and gates remain interactive.",
              icon: ShieldCheck,
              status: "Local controls",
            },
            {
              title: "No trust theater",
              description:
                "Authentication, fraud, abuse, rate limits, transaction safety, privacy, trust, certifications, compliance, and system health are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before assurance",
              description:
                "Real compliance requires implemented controls, scope, owners, evidence, tests, exceptions, legal review, incident response, and independent acceptance.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
