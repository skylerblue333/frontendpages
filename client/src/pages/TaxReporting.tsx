import { useState } from "react";
import {
  CalendarClock,
  CheckCircle2,
  FileText,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  UserRound,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type TaxArea = "Individual" | "Business" | "Crypto";
type ReportConcept = {
  id: string;
  title: string;
  area: TaxArea;
  period: string;
  state: "Unavailable" | "Review" | "Planned";
  summary: string;
};

const reports: readonly ReportConcept[] = [
  {
    id: "individual",
    title: "Individual reporting workspace",
    area: "Individual",
    period: "Tax period unavailable",
    state: "Unavailable",
    summary:
      "A local reporting concept pending jurisdiction, taxpayer facts, source documents, deductions, credits, and professional review.",
  },
  {
    id: "business",
    title: "Business reporting workspace",
    area: "Business",
    period: "Fiscal period unavailable",
    state: "Review",
    summary:
      "A local business concept pending entity scope, accounting records, filing authority, reconciliation, and controlled approval.",
  },
  {
    id: "crypto",
    title: "Digital-asset tax records",
    area: "Crypto",
    period: "Transaction period unavailable",
    state: "Planned",
    summary:
      "A local digital-asset concept pending chain provenance, cost basis, disposition records, jurisdiction rules, and tax-professional review.",
  },
];

export default function TaxReporting() {
  const [selectedId, setSelectedId] = useState(reports[0].id);
  const [status, setStatus] = useState(
    "Tax reporting service unavailable locally. Showing planning concepts only."
  );
  const selected =
    reports.find(report => report.id === selectedId) ?? reports[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No tax calculation, filing, submission, payment, export, or financial mutation was started.`
    );

  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={FileText}
        title="Tax reporting"
        subtitle="Review reporting requirements without fabricating tax figures, liabilities, deductions, filing status, compliance, or submission outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Tax reporting service unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Tax reporting service unavailable.</strong> No jurisdiction,
            taxpayer profile, source ledger, cost basis, deduction, credit,
            liability, filing authority, payment account, or compliance source
            is connected. This preview is not tax advice or a filing.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Tax reporting remains unavailable. Local concepts were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Reset view
          </Button>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Tax-reporting preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review reporting concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures do not represent a tax return, tax
                  year, filing deadline, income, gain, loss, cost basis,
                  deduction, credit, liability, payment, refund, or compliance
                  conclusion.
                </p>
              </div>
              <CalendarClock className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div className="mt-6 space-y-3">
              {reports.map(report => (
                <button
                  key={report.id}
                  type="button"
                  aria-pressed={selected.id === report.id}
                  onClick={() => setSelectedId(report.id)}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === report.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{report.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {report.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">
                    {report.area} · {report.period}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {report.summary}
                  </p>
                </button>
              ))}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>

          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected reporting concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.area} · {selected.state}
              </p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Tax period", selected.period],
                  ["Jurisdiction", "Jurisdiction unavailable"],
                  ["Source records", "Source ledger unavailable"],
                  ["Tax basis", "Cost-basis method unavailable"],
                  ["Liability", "Tax liability calculation unavailable"],
                  ["Filing status", "Filing status unavailable"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-slate-800 p-3"
                  >
                    <dt className="text-xs text-slate-500">{label}</dt>
                    <dd className="mt-1 text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No tax number, estimated payment, filing deadline, compliance
                state, refund, or transaction classification is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Calculate tax estimate")}
                  variant="outline"
                >
                  Calculate unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export tax report")}
                  variant="outline"
                >
                  Export unavailable
                </Button>
                <Button
                  onClick={() => blocked("Submit filing")}
                  variant="outline"
                >
                  Submit unavailable
                </Button>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  I am an AI, not a tax professional. Verify consequential
                  information with a CPA or tax professional before filing. A
                  production workflow also requires jurisdiction-specific rules,
                  authoritative source records, privacy controls, audit trails,
                  filing approvals, and secure payment or submission boundaries.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">
                    Provenance required
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    No authoritative source loaded.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Filing blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No filing authority connected.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <UserRound
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">
                    Profile unavailable
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    No taxpayer identity loaded.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <ShieldAlert
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Numbers withheld</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No mock liability is shown.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}
