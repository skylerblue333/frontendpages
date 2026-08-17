import { useMemo, useState } from "react";
import {
  ClipboardCheck,
  FileSearch,
  LockKeyhole,
  Plus,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/PageHeader";

type ControlDomain =
  "All" | "Governance" | "Privacy" | "Security" | "Operations";
type ReviewState = "All" | "Planned" | "Review" | "Unavailable";

type ComplianceControl = {
  id: string;
  title: string;
  domain: Exclude<ControlDomain, "All">;
  state: Exclude<ReviewState, "All">;
  summary: string;
  framework: string;
  evidence: string;
  owner: string;
  reviewDate: string;
  decision: string;
};

const controls: ComplianceControl[] = [
  {
    id: "access-governance",
    title: "Access governance",
    domain: "Governance",
    state: "Review",
    summary:
      "Proposed review area for account lifecycle, privileged access, and approval ownership.",
    framework: "Framework and jurisdiction unavailable",
    evidence: "Evidence registry unavailable",
    owner: "Control owner unavailable",
    reviewDate: "Review date unavailable",
    decision: "Compliance decision unavailable",
  },
  {
    id: "privacy-handling",
    title: "Privacy handling",
    domain: "Privacy",
    state: "Planned",
    summary:
      "Planned review area for data minimization, retention, consent, and subject-request workflows.",
    framework: "Framework and jurisdiction unavailable",
    evidence: "Evidence registry unavailable",
    owner: "Control owner unavailable",
    reviewDate: "Review date unavailable",
    decision: "Compliance decision unavailable",
  },
  {
    id: "security-monitoring",
    title: "Security monitoring",
    domain: "Security",
    state: "Unavailable",
    summary:
      "Local concept for monitoring, incident response, and audit-log coverage pending service ownership.",
    framework: "Framework and jurisdiction unavailable",
    evidence: "Evidence registry unavailable",
    owner: "Control owner unavailable",
    reviewDate: "Review date unavailable",
    decision: "Compliance decision unavailable",
  },
];

const domains: ControlDomain[] = [
  "All",
  "Governance",
  "Privacy",
  "Security",
  "Operations",
];
const states: ReviewState[] = ["All", "Review", "Planned", "Unavailable"];

export default function ComplianceChecker() {
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState<ControlDomain>("All");
  const [state, setState] = useState<ReviewState>("All");
  const [selectedId, setSelectedId] = useState(controls[0].id);
  const [status, setStatus] = useState(
    "Compliance service unavailable. Showing local control concepts only."
  );

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return controls.filter(
      control =>
        (domain === "All" || control.domain === domain) &&
        (state === "All" || control.state === state) &&
        (!normalizedQuery ||
          `${control.title} ${control.summary} ${control.domain}`
            .toLowerCase()
            .includes(normalizedQuery))
    );
  }, [domain, query, state]);

  const selected =
    filtered.find(control => control.id === selectedId) ??
    filtered[0] ??
    controls[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No regulatory, legal, audit, evidence, certification, or export request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={ClipboardCheck}
        title="Compliance checker"
        subtitle="Review local control concepts without fabricated legal conclusions, certifications, or audit results."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Compliance service unavailable.</strong> No framework
            registry, jurisdiction context, evidence store, reviewer identity,
            or decision service is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Compliance service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset review
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Controls preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review control areas
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show workflow structure only. They
                  are not an assessment, attestation, certification, or legal
                  interpretation.
                </p>
              </div>
              <FileSearch className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <label className="flex min-w-60 flex-1 items-center gap-2 rounded-md border border-slate-800 bg-slate-950/60 px-3">
                <Search aria-hidden="true" className="h-4 w-4 text-slate-500" />
                <span className="sr-only">Search control areas</span>
                <Input
                  aria-label="Search control areas"
                  className="border-0 bg-transparent px-0 focus-visible:ring-0"
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search controls"
                  value={query}
                />
              </label>
              <Button
                onClick={() => blocked("Configure review")}
                variant="outline"
              >
                Configure unavailable
              </Button>
            </div>
            <div
              className="mt-5 flex flex-wrap gap-2"
              role="group"
              aria-label="Compliance domain filter"
            >
              {domains.map(item => (
                <Button
                  aria-pressed={domain === item}
                  key={item}
                  onClick={() => setDomain(item)}
                  size="sm"
                  variant={domain === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Compliance review state filter"
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
              {filtered.map(control => (
                <button
                  aria-pressed={selected.id === control.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === control.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={control.id}
                  onClick={() => setSelectedId(control.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{control.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {control.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{control.domain}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {control.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local control fixtures match this search and filter
                  combination.
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
                Selected control
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.domain} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Framework", selected.framework],
                  ["Evidence", selected.evidence],
                  ["Owner", selected.owner],
                  ["Review date", selected.reviewDate],
                  ["Decision", selected.decision],
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
                No framework version, scope, evidence, reviewer, risk score,
                attestation, or compliance determination is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Assess control")}
                  variant="outline"
                >
                  <ClipboardCheck className="mr-2 h-4 w-4" /> Assess unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export review")}
                  variant="outline"
                >
                  <FileSearch className="mr-2 h-4 w-4" /> Export unavailable
                </Button>
                <Button
                  onClick={() => blocked("Create control")}
                  variant="outline"
                >
                  <Plus className="mr-2 h-4 w-4" /> Create unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Compliance review requires scope, jurisdiction, framework
                  version, access control, evidence provenance, and reviewer
                  accountability.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  This preview does not certify compliance, replace counsel, or
                  produce an audit result.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
