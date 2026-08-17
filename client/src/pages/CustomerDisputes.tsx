import { useMemo, useState } from "react";
import {
  CircleSlash2,
  FileDown,
  FileSearch,
  Gavel,
  LockKeyhole,
  MessageSquareWarning,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type DisputeCategory = "All" | "Payment" | "Content" | "Account";
type DisputeState = "All" | "Review" | "Open" | "Unavailable";

type DisputeConcept = {
  id: string;
  title: string;
  category: Exclude<DisputeCategory, "All">;
  state: Exclude<DisputeState, "All">;
  summary: string;
  customer: string;
  caseId: string;
  evidence: string;
  owner: string;
  resolution: string;
  refund: string;
  appeal: string;
};

const disputes: DisputeConcept[] = [
  {
    id: "payment-dispute",
    title: "Payment dispute review",
    category: "Payment",
    state: "Review",
    summary:
      "A local dispute concept for payment concerns pending identity safeguards, transaction evidence, and authorized financial review.",
    customer: "Customer identity unavailable",
    caseId: "Case identifier unavailable",
    evidence: "Evidence provenance unavailable",
    owner: "Case owner unavailable",
    resolution: "Resolution outcome unavailable",
    refund: "Refund authorization unavailable",
    appeal: "Appeal process unavailable",
  },
  {
    id: "content-dispute",
    title: "Content rights dispute",
    category: "Content",
    state: "Open",
    summary:
      "A local dispute concept for content concerns pending rights evidence, policy review, and role-separated decision controls.",
    customer: "Customer identity unavailable",
    caseId: "Case identifier unavailable",
    evidence: "Evidence provenance unavailable",
    owner: "Case owner unavailable",
    resolution: "Resolution outcome unavailable",
    refund: "Refund authorization unavailable",
    appeal: "Appeal process unavailable",
  },
  {
    id: "account-dispute",
    title: "Account access dispute",
    category: "Account",
    state: "Unavailable",
    summary:
      "A local dispute concept for account-access concerns pending consent, authentication evidence, privacy review, and appeal safeguards.",
    customer: "Customer identity unavailable",
    caseId: "Case identifier unavailable",
    evidence: "Evidence provenance unavailable",
    owner: "Case owner unavailable",
    resolution: "Resolution outcome unavailable",
    refund: "Refund authorization unavailable",
    appeal: "Appeal process unavailable",
  },
];

const categories: DisputeCategory[] = ["All", "Payment", "Content", "Account"];
const states: DisputeState[] = ["All", "Review", "Open", "Unavailable"];

export default function CustomerDisputes() {
  const [category, setCategory] = useState<DisputeCategory>("All");
  const [state, setState] = useState<DisputeState>("All");
  const [selectedId, setSelectedId] = useState(disputes[0].id);
  const [status, setStatus] = useState(
    "Dispute service unavailable. Showing local dispute concepts only."
  );

  const filtered = useMemo(
    () =>
      disputes.filter(
        dispute =>
          (category === "All" || dispute.category === category) &&
          (state === "All" || dispute.state === state)
      ),
    [category, state]
  );
  const selected =
    filtered.find(dispute => dispute.id === selectedId) ??
    filtered[0] ??
    disputes[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No customer identity, case, evidence, liability finding, refund, sanction, appeal, notification, or legal outcome request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={MessageSquareWarning}
        title="Customer disputes"
        subtitle="Review local dispute concepts without fabricated customers, complaints, evidence, liability findings, refunds, sanctions, legal conclusions, or case outcomes."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Dispute service unavailable.</strong> No case registry,
            customer identity service, evidence store, reviewer workflow,
            financial authorization, appeal process, or notification endpoint is
            connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Dispute service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset disputes
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Dispute preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review case concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show dispute structure only. They
                  do not represent real customers, cases, evidence, findings,
                  refunds, appeals, or resolutions.
                </p>
              </div>
              <Scale className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Dispute category filter"
            >
              {categories.map(item => (
                <Button
                  aria-pressed={category === item}
                  key={item}
                  onClick={() => setCategory(item)}
                  size="sm"
                  variant={category === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Dispute state filter"
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
              {filtered.map(dispute => (
                <button
                  aria-pressed={selected.id === dispute.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === dispute.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={dispute.id}
                  onClick={() => setSelectedId(dispute.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{dispute.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {dispute.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">
                    {dispute.category}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {dispute.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local dispute fixtures match these filters.
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
                Selected case
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.category} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Customer", selected.customer],
                  ["Case", selected.caseId],
                  ["Evidence", selected.evidence],
                  ["Owner", selected.owner],
                  ["Resolution", selected.resolution],
                  ["Refund", selected.refund],
                  ["Appeal", selected.appeal],
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
                No customer, case, evidence, liability, resolution, refund,
                appeal, or legal outcome state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Review case")}
                  variant="outline"
                >
                  <FileSearch className="mr-2 h-4 w-4" /> Review unavailable
                </Button>
                <Button
                  onClick={() => blocked("Resolve case")}
                  variant="outline"
                >
                  <Gavel className="mr-2 h-4 w-4" /> Resolve unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export case")}
                  variant="outline"
                >
                  <FileDown className="mr-2 h-4 w-4" /> Export unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Dispute tooling requires identity and consent safeguards,
                  evidence provenance, role separation, procedural fairness,
                  privacy controls, financial authorization, legal review
                  boundaries, appeal handling, audit trails, and clear
                  non-determination disclosures.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Case, evidence, liability, resolution, refund, appeal, and
                  notification transitions must be auditable and isolated from
                  fabricated customer outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <Gavel className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No complaint submission, evidence upload, legal determination,
                  sanction, refund transfer, appeal, notification, or
                  case-resolution operation is available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Dispute state remains explicitly unavailable until
                  authoritative case and review services are connected.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
