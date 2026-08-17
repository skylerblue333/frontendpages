import { useMemo, useState } from "react";
import {
  CircleSlash2,
  Database,
  FileKey2,
  LockKeyhole,
  Network,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ProcessingArea = "All" | "Account" | "Financial" | "Education";
type ProcessingState = "All" | "Review" | "Unavailable" | "Controlled";
type ProcessingConcept = {
  id: string;
  title: string;
  area: Exclude<ProcessingArea, "All">;
  state: Exclude<ProcessingState, "All">;
  summary: string;
  purpose: string;
  fields: string;
  processor: string;
  transfer: string;
  legalBasis: string;
  audit: string;
};

const concepts: ProcessingConcept[] = [
  {
    id: "account-processing",
    title: "Account profile processing",
    area: "Account",
    state: "Review",
    summary:
      "A local processing-activity concept pending purpose registry, field catalog, controller/processor mapping, and access controls.",
    purpose: "Purpose unavailable",
    fields: "Data fields unavailable",
    processor: "Processor role unavailable",
    transfer: "Transfer safeguards unavailable",
    legalBasis: "Lawful basis unavailable",
    audit: "Processing audit unavailable",
  },
  {
    id: "financial-processing",
    title: "Financial activity processing",
    area: "Financial",
    state: "Unavailable",
    summary:
      "A local financial-processing concept pending transaction provenance, minimization, segregation, transfer safeguards, and retention policy.",
    purpose: "Purpose unavailable",
    fields: "Financial fields unavailable",
    processor: "Processor role unavailable",
    transfer: "Transfer safeguards unavailable",
    legalBasis: "Lawful basis unavailable",
    audit: "Processing audit unavailable",
  },
  {
    id: "education-processing",
    title: "Education record processing",
    area: "Education",
    state: "Controlled",
    summary:
      "A local education-processing concept pending learner scope, institutional roles, sensitive-field controls, and verifiable policy execution.",
    purpose: "Purpose unavailable",
    fields: "Learner fields unavailable",
    processor: "Processor role unavailable",
    transfer: "Transfer safeguards unavailable",
    legalBasis: "Lawful basis unavailable",
    audit: "Processing audit unavailable",
  },
];
const areas: ProcessingArea[] = ["All", "Account", "Financial", "Education"];
const states: ProcessingState[] = [
  "All",
  "Review",
  "Unavailable",
  "Controlled",
];

export default function DataProcessing() {
  const [area, setArea] = useState<ProcessingArea>("All");
  const [state, setState] = useState<ProcessingState>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "Processing service unavailable. Showing local processing concepts only."
  );
  const filtered = useMemo(
    () =>
      concepts.filter(
        item =>
          (area === "All" || item.area === area) &&
          (state === "All" || item.state === state)
      ),
    [area, state]
  );
  const selected =
    filtered.find(item => item.id === selectedId) ?? filtered[0] ?? concepts[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No processor, purpose, field, transfer, legal-basis, compliance, or personal-data processing operation was started.`
    );
  const metadata: Array<[string, string]> = [
    ["Purpose", selected.purpose],
    ["Data fields", selected.fields],
    ["Processor", selected.processor],
    ["Transfers", selected.transfer],
    ["Legal basis", selected.legalBasis],
    ["Audit", selected.audit],
  ];
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Database}
        title="Data processing"
        subtitle="Review local processing-activity concepts without fabricated purposes, fields, processors, transfers, legal bases, records, or compliance outcomes."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Processing service unavailable.</strong> No activity
            registry, purpose and field catalog, processor inventory,
            transfer-control service, legal-basis source, or audit service is
            connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Processing service remains unavailable. Local concepts were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset activities
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Processing preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review processing activities
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show governance structure only.
                  They do not represent real records, purposes, fields,
                  processors, transfers, legal bases, or compliance state.
                </p>
              </div>
              <Network className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Processing area filter"
            >
              {areas.map(item => (
                <Button
                  aria-pressed={area === item}
                  key={item}
                  onClick={() => setArea(item)}
                  size="sm"
                  variant={area === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Processing state filter"
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
              {filtered.map(item => (
                <button
                  aria-pressed={selected.id === item.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === item.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{item.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {item.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{item.area}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local processing concepts match these filters.
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
                Selected activity
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.area} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {metadata.map(([label, value]) => (
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
                No purpose, fields, processor, transfer, legal-basis, retention,
                access, or audit state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Create processing activity")}
                  variant="outline"
                >
                  <FileKey2 className="mr-2 h-4 w-4" /> Create unavailable
                </Button>
                <Button
                  onClick={() => blocked("Review processing activity")}
                  variant="outline"
                >
                  <ShieldCheck className="mr-2 h-4 w-4" /> Review unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Processing governance requires purpose limitation, data
                  minimization, controller/processor accountability,
                  lawful-basis mapping, transfer safeguards, access controls,
                  retention, auditability, and clear unavailable-state
                  disclosures.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No registry lookup, processor update, field catalog, transfer
                  decision, legal conclusion, compliance assessment, or
                  personal-data processing operation is available from this
                  preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
