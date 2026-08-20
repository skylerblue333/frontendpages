import { useMemo, useState } from "react";
import {
  Check,
  ClipboardCheck,
  FileSearch,
  Filter,
  LockKeyhole,
  RefreshCw,
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
const audits = [
  {
    id: 1,
    name: "Identity and access review",
    category: "Access",
    detail:
      "A local audit concept covering authentication, authorization, sessions, MFA, recovery, IDOR, privileged paths, and evidence provenance.",
    state: "Scope needed",
  },
  {
    id: 2,
    name: "Application security review",
    category: "Application",
    detail:
      "A local application audit concept covering validation, XSS, CSRF, SSRF, uploads, secrets, dependencies, error handling, and test evidence.",
    state: "Unconfigured",
  },
  {
    id: 3,
    name: "Infrastructure controls review",
    category: "Infrastructure",
    detail:
      "A local infrastructure audit concept covering ingress, egress, WAF, keys, logging, monitoring, backups, recovery, and provider evidence.",
    state: "Preview",
  },
  {
    id: 4,
    name: "Privacy-control review",
    category: "Privacy",
    detail:
      "A local privacy audit concept covering data map, consent, minimization, retention, deletion, export, processors, and incident response.",
    state: "Blocked",
  },
];
export default function SecurityAudit() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [severity, setSeverity] = useState("Severity model not configured");
  const [remediation, setRemediation] = useState(
    "Remediation state not configured"
  );
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(audits.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      audits.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const audit = audits.find(item => item.id === selected) ?? audits[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setSeverity("Severity model not configured");
    setRemediation("Remediation state not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-203" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={ClipboardCheck}
        eyebrow="Security audit · Assurance preview"
        title="Plan the audit before declaring the finding."
        description="Explore local access, application, infrastructure, and privacy audit concepts with search, category filters, severity and remediation intent, evidence/finding/retest/exception gates, save/reset, and blocked scan/report actions. No scan, finding, vulnerability, threat count, remediation, certification, compliance, or security outcome is connected."
        badge="Audit-planning workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save audit locally"}
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
            {showGates ? "Close gates" : "Review audit gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset audit
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Audit concepts",
              value: `${audits.length} local`,
              hint: "No scan source",
              icon: ClipboardCheck,
              tone: "cyan",
            },
            {
              label: "Findings",
              value: "Unavailable",
              hint: "No evidence source",
              icon: ShieldAlert,
              tone: "violet",
            },
            {
              label: "Remediation",
              value: "Unconfigured",
              hint: "No owner source",
              icon: RefreshCw,
              tone: "amber",
            },
            {
              label: "Certification",
              value: "Not claimed",
              hint: "No assessor source",
              icon: ShieldCheck,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Security-audit evidence boundary">
          <strong>
            This is a local audit-planning preview, not evidence that a scan
            ran, a vulnerability exists, a control passed, or a certification or
            compliance result was issued.
          </strong>{" "}
          Audit cards, filters, severity/remediation intent, saved state,
          evidence/finding/retest gates, and disabled scan/report actions are
          browser concepts. No scan, finding, vulnerability, threat count,
          remediation status, certification, compliance posture, or security
          outcome is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local audit concepts"
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
                    Selected audit concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{audit.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {audit.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {audit.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: audit.category },
                  { label: "Severity", value: severity },
                  { label: "Remediation", value: remediation },
                  { label: "Evidence", value: "Unavailable" },
                  { label: "Retest", value: "Unconfigured" },
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
                  Severity model
                  <select
                    value={severity}
                    onChange={event => setSeverity(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Severity model not configured</option>
                    <option>Risk-based intent</option>
                    <option>CVSS-like intent</option>
                    <option>Business-impact intent</option>
                    <option>Human-review intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Remediation state
                  <select
                    value={remediation}
                    onChange={event => setRemediation(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Remediation state not configured</option>
                    <option>Owner-assigned intent</option>
                    <option>Mitigation intent</option>
                    <option>Fix-planned intent</option>
                    <option>Retest-required intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <ClipboardCheck className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No audit evidence loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect authorized scope, scanner or assessor, control
                  evidence, findings, severity semantics, owner/remediation,
                  retest, exception, privacy, and report provenance before
                  auditing.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Run scan unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Create finding unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Export report unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Attest unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No audit, vulnerability, or certification claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    An audit concept does not prove a scan, finding,
                    vulnerability, control result, remediation, certification,
                    compliance posture, threat count, or security outcome.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Audit-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real security audit must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authorized scope, asset, environment, owner, assessor, tool, version, timestamp, rule set, and evidence provenance",
                "Finding semantics, severity, exploitability, impact, false-positive handling, remediation, retest, exceptions, and disclosure",
                "Identity, application, infrastructure, privacy, data, crypto, AI, financial, safety, compliance, and user-impact claims require domain review",
                "Credentials, secrets, uploads, dependencies, logs, monitoring, incident response, legal hold, retention, deletion, and access",
                "Scan, create finding, assign owner, remediate, retest, export, attest, notify, accessibility, and accountable approval require governed controls",
                "Audit previews must not be presented as penetration tests, vulnerability reports, certifications, compliance attestations, or security guarantees without evidence",
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
              title: "Audit surface preserved",
              description:
                "Access, application, infrastructure, privacy audits, findings, severity, remediation, retest, exceptions, scans, reports, attestations, save/reset, and gates remain interactive.",
              icon: ClipboardCheck,
              status: "Local audit",
            },
            {
              title: "No assurance theater",
              description:
                "Scans, findings, vulnerabilities, remediation, certifications, compliance, threat counts, and security outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Scope before scanning",
              description:
                "Real audits require authorized scope, evidence provenance, qualified assessment, severity semantics, remediation, retest, disclosure, and audit trail.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
