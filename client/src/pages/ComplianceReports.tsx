import { useMemo, useState } from "react";
import {
  Download,
  FileOutput,
  FileText,
  LockKeyhole,
  Send,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ReportFramework = "All" | "Governance" | "Privacy" | "Security";
type ReportState = "All" | "Planned" | "Review" | "Unavailable";

type ComplianceReport = {
  id: string;
  title: string;
  framework: Exclude<ReportFramework, "All">;
  state: Exclude<ReportState, "All">;
  summary: string;
  scope: string;
  evidence: string;
  findings: string;
  recipient: string;
  issued: string;
};

const reports: ComplianceReport[] = [
  {
    id: "governance-review",
    title: "Governance review template",
    framework: "Governance",
    state: "Review",
    summary:
      "A proposed report structure for policies, approvals, accountability, and control ownership.",
    scope: "Report scope unavailable",
    evidence: "Evidence summary unavailable",
    findings: "Findings unavailable",
    recipient: "Recipient unavailable",
    issued: "Issue date unavailable",
  },
  {
    id: "privacy-review",
    title: "Privacy review template",
    framework: "Privacy",
    state: "Planned",
    summary:
      "A planned report structure for data inventory, retention, consent, and privacy-request controls.",
    scope: "Report scope unavailable",
    evidence: "Evidence summary unavailable",
    findings: "Findings unavailable",
    recipient: "Recipient unavailable",
    issued: "Issue date unavailable",
  },
  {
    id: "security-review",
    title: "Security review template",
    framework: "Security",
    state: "Unavailable",
    summary:
      "A local report concept for security monitoring, incident response, and audit-log coverage.",
    scope: "Report scope unavailable",
    evidence: "Evidence summary unavailable",
    findings: "Findings unavailable",
    recipient: "Recipient unavailable",
    issued: "Issue date unavailable",
  },
];

const frameworks: ReportFramework[] = [
  "All",
  "Governance",
  "Privacy",
  "Security",
];
const states: ReportState[] = ["All", "Review", "Planned", "Unavailable"];

export default function ComplianceReports() {
  const [framework, setFramework] = useState<ReportFramework>("All");
  const [state, setState] = useState<ReportState>("All");
  const [selectedId, setSelectedId] = useState(reports[0].id);
  const [status, setStatus] = useState(
    "Report service unavailable. Showing local report templates only."
  );

  const filtered = useMemo(
    () =>
      reports.filter(
        report =>
          (framework === "All" || report.framework === framework) &&
          (state === "All" || report.state === state)
      ),
    [framework, state]
  );
  const selected =
    filtered.find(report => report.id === selectedId) ??
    filtered[0] ??
    reports[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No audit finding, compliance calculation, certification, regulator submission, recipient notification, or file export request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={FileText}
        title="Compliance reports"
        subtitle="Review local report templates without fabricated findings, certifications, or regulator submissions."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Report service unavailable.</strong> No framework registry,
            evidence source, reviewer approval, recipient directory, or export
            service is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Report service remains unavailable. Local templates were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset reports
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Report preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Report templates
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures describe possible report structure;
                  they are not issued reports, audit opinions, or legal advice.
                </p>
              </div>
              <FileOutput className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Compliance report framework filter"
            >
              {frameworks.map(item => (
                <Button
                  aria-pressed={framework === item}
                  key={item}
                  onClick={() => setFramework(item)}
                  size="sm"
                  variant={framework === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Compliance report state filter"
            >
              {states.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(report => (
                <button
                  aria-pressed={selected.id === report.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === report.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={report.id}
                  onClick={() => setSelectedId(report.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{report.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {report.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">
                    {report.framework}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {report.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local report templates match these filters.
                </p>
              )}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>

          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected report
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.framework} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Scope", selected.scope],
                  ["Evidence", selected.evidence],
                  ["Findings", selected.findings],
                  ["Recipient", selected.recipient],
                  ["Issued", selected.issued],
                ].map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No framework version, evidence, findings, reviewer approval,
                recipient, issue date, or report artifact is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Generate report")}
                  variant="outline"
                >
                  <FileText className="mr-2 h-4 w-4" /> Generate unavailable
                </Button>
                <Button
                  onClick={() => blocked("Download report")}
                  variant="outline"
                >
                  <Download className="mr-2 h-4 w-4" /> Download unavailable
                </Button>
                <Button
                  onClick={() => blocked("Share report")}
                  variant="outline"
                >
                  <Send className="mr-2 h-4 w-4" /> Share unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Reports require a defined scope, framework version, evidence
                  provenance, reviewer approval, access control, and immutable
                  audit history.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  This preview does not certify compliance, replace counsel, or
                  submit information to a regulator.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
