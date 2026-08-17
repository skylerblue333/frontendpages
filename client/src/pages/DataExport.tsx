import { useMemo, useState } from "react";
import {
  Archive,
  CircleSlash2,
  Download,
  FileDown,
  LockKeyhole,
  Send,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ExportClass = "All" | "Account" | "Financial" | "Education";
type ExportState = "All" | "Draft" | "Review" | "Unavailable";

type ExportConcept = {
  id: string;
  title: string;
  dataClass: Exclude<ExportClass, "All">;
  state: Exclude<ExportState, "All">;
  summary: string;
  scope: string;
  records: string;
  format: string;
  permission: string;
  retention: string;
  recipient: string;
  status: string;
};

const exports: ExportConcept[] = [
  {
    id: "account-export",
    title: "Account data export",
    dataClass: "Account",
    state: "Review",
    summary:
      "A local account-export concept pending purpose, identity verification, field-level authorization, secure generation, and expiry controls.",
    scope: "Export scope unavailable",
    records: "Record count unavailable",
    format: "File format unavailable",
    permission: "Permission and consent unavailable",
    retention: "Retention and expiry unavailable",
    recipient: "Recipient and delivery unavailable",
    status: "Export status unavailable",
  },
  {
    id: "financial-export",
    title: "Financial activity export",
    dataClass: "Financial",
    state: "Draft",
    summary:
      "A draft financial-data export concept pending transaction provenance, privacy review, authorization, redaction, and secure delivery.",
    scope: "Export scope unavailable",
    records: "Record count unavailable",
    format: "File format unavailable",
    permission: "Permission and consent unavailable",
    retention: "Retention and expiry unavailable",
    recipient: "Recipient and delivery unavailable",
    status: "Export status unavailable",
  },
  {
    id: "education-export",
    title: "Education record export",
    dataClass: "Education",
    state: "Unavailable",
    summary:
      "A local education-data export concept pending learner authorization, institutional scope, sensitive-field controls, and secure delivery.",
    scope: "Export scope unavailable",
    records: "Record count unavailable",
    format: "File format unavailable",
    permission: "Permission and consent unavailable",
    retention: "Retention and expiry unavailable",
    recipient: "Recipient and delivery unavailable",
    status: "Export status unavailable",
  },
];

const dataClasses: ExportClass[] = ["All", "Account", "Financial", "Education"];
const states: ExportState[] = ["All", "Draft", "Review", "Unavailable"];

export default function DataExport() {
  const [dataClass, setDataClass] = useState<ExportClass>("All");
  const [state, setState] = useState<ExportState>("All");
  const [selectedId, setSelectedId] = useState(exports[0].id);
  const [status, setStatus] = useState(
    "Export service unavailable. Showing local export concepts only."
  );

  const filtered = useMemo(
    () =>
      exports.filter(
        item =>
          (dataClass === "All" || item.dataClass === dataClass) &&
          (state === "All" || item.state === state)
      ),
    [dataClass, state]
  );
  const selected =
    filtered.find(item => item.id === selectedId) ?? filtered[0] ?? exports[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No personal record, dataset, scope, permission, file, recipient, download, or data-delivery request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Archive}
        title="Data export"
        subtitle="Review local export concepts without fabricated records, scopes, permissions, file contents, retention, recipients, downloads, or personal-data delivery."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Export service unavailable.</strong> No dataset registry,
            identity and consent service, authorization layer, secure file
            generator, retention worker, or delivery endpoint is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Export service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset exports
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Export preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review export concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show export structure only. They do
                  not represent real records, file contents, permissions,
                  recipients, downloads, or delivery state.
                </p>
              </div>
              <UploadCloud className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Export data class filter"
            >
              {dataClasses.map(item => (
                <Button
                  aria-pressed={dataClass === item}
                  key={item}
                  onClick={() => setDataClass(item)}
                  size="sm"
                  variant={dataClass === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Export state filter"
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
                  <p className="mt-1 text-xs text-cyan-200">{item.dataClass}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local export fixtures match these filters.
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
                Selected export
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.dataClass} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Scope", selected.scope],
                  ["Records", selected.records],
                  ["Format", selected.format],
                  ["Permission", selected.permission],
                  ["Retention", selected.retention],
                  ["Recipient", selected.recipient],
                  ["Status", selected.status],
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
                No dataset scope, record count, format, permission, retention,
                recipient, file, or delivery state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Create export")}
                  variant="outline"
                >
                  <FileDown className="mr-2 h-4 w-4" /> Create unavailable
                </Button>
                <Button
                  onClick={() => blocked("Download export")}
                  variant="outline"
                >
                  <Download className="mr-2 h-4 w-4" /> Download unavailable
                </Button>
                <Button
                  onClick={() => blocked("Share export")}
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
                  Export tooling requires purpose limitation, data minimization,
                  authorization and consent checks, field-level controls, secure
                  generation and delivery, encryption, expiry, audit trails,
                  deletion handling, and clear unavailable-state disclosures.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Scope, permission, file, recipient, download, retention, and
                  notification transitions must be auditable and isolated from
                  fabricated personal-data outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <FileDown className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No dataset lookup, record aggregation, file generation,
                  download, delivery, recipient notification, retention, or
                  export operation is available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Export state remains explicitly unavailable until
                  authoritative privacy, authorization, storage, and delivery
                  services are connected.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
