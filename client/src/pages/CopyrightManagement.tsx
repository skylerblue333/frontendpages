import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CircleSlash2,
  Copyright,
  FileSearch,
  Gavel,
  LockKeyhole,
  ShieldCheck,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type RightsScope = "All" | "License" | "Ownership" | "Dispute";
type RightsState = "All" | "Review" | "Claimed" | "Unavailable";

type RightsConcept = {
  id: string;
  title: string;
  scope: Exclude<RightsScope, "All">;
  state: Exclude<RightsState, "All">;
  summary: string;
  work: string;
  owner: string;
  license: string;
  jurisdiction: string;
  evidence: string;
  dispute: string;
};

const rightsConcepts: RightsConcept[] = [
  {
    id: "license-review",
    title: "Licensed media asset",
    scope: "License",
    state: "Review",
    summary:
      "A local rights concept for media licensing pending provenance, territory, term, and permitted-use validation.",
    work: "Work identity unavailable",
    owner: "Rights holder unavailable",
    license: "License terms unavailable",
    jurisdiction: "Territory and jurisdiction unavailable",
    evidence: "Rights evidence unavailable",
    dispute: "Dispute state unavailable",
  },
  {
    id: "ownership-claim",
    title: "Ownership claim concept",
    scope: "Ownership",
    state: "Claimed",
    summary:
      "A local ownership concept pending creator identity, chain of title, documentation, and legal review.",
    work: "Work identity unavailable",
    owner: "Rights holder unavailable",
    license: "License terms unavailable",
    jurisdiction: "Territory and jurisdiction unavailable",
    evidence: "Rights evidence unavailable",
    dispute: "Dispute state unavailable",
  },
  {
    id: "dispute-review",
    title: "Rights dispute concept",
    scope: "Dispute",
    state: "Unavailable",
    summary:
      "A local dispute concept pending notice, counter-notice, evidence retention, and jurisdiction-aware process.",
    work: "Work identity unavailable",
    owner: "Rights holder unavailable",
    license: "License terms unavailable",
    jurisdiction: "Territory and jurisdiction unavailable",
    evidence: "Rights evidence unavailable",
    dispute: "Dispute state unavailable",
  },
];

const scopes: RightsScope[] = ["All", "License", "Ownership", "Dispute"];
const states: RightsState[] = ["All", "Review", "Claimed", "Unavailable"];

export default function CopyrightManagement() {
  const [scope, setScope] = useState<RightsScope>("All");
  const [state, setState] = useState<RightsState>("All");
  const [selectedId, setSelectedId] = useState(rightsConcepts[0].id);
  const [status, setStatus] = useState(
    "Rights service unavailable. Showing local rights concepts only."
  );

  const filtered = useMemo(
    () =>
      rightsConcepts.filter(
        concept =>
          (scope === "All" || concept.scope === scope) &&
          (state === "All" || concept.state === state)
      ),
    [scope, state]
  );
  const selected =
    filtered.find(concept => concept.id === selectedId) ??
    filtered[0] ??
    rightsConcepts[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No ownership finding, license validation, infringement claim, takedown, dispute, notification, or rights mutation request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Copyright}
        title="Copyright management"
        subtitle="Review local rights concepts without fabricated ownership, licenses, infringement findings, takedowns, disputes, or legal outcomes."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Rights service unavailable.</strong> No asset registry,
            rights-holder directory, license store, evidence repository, legal
            review workflow, or notice-and-counter-notice channel is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Rights service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset rights
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Rights preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review rights concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show rights-management structure
                  only. They do not represent real works, owners, licenses,
                  claims, takedowns, disputes, or legal outcomes.
                </p>
              </div>
              <FileSearch className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Rights scope filter"
            >
              {scopes.map(item => (
                <Button
                  aria-pressed={scope === item}
                  key={item}
                  onClick={() => setScope(item)}
                  size="sm"
                  variant={scope === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Rights state filter"
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
              {filtered.map(concept => (
                <button
                  aria-pressed={selected.id === concept.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === concept.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={concept.id}
                  onClick={() => setSelectedId(concept.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{concept.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {concept.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{concept.scope}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {concept.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local rights fixtures match these filters.
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
                Selected rights concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.scope} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Work", selected.work],
                  ["Owner", selected.owner],
                  ["License", selected.license],
                  ["Jurisdiction", selected.jurisdiction],
                  ["Evidence", selected.evidence],
                  ["Dispute", selected.dispute],
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
                No work, creator, owner, license, territory, evidence,
                infringement, takedown, or dispute state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Verify rights")}
                  variant="outline"
                >
                  <FileSearch className="mr-2 h-4 w-4" /> Verify unavailable
                </Button>
                <Button
                  onClick={() => blocked("Submit rights claim")}
                  variant="outline"
                >
                  <Gavel className="mr-2 h-4 w-4" /> Claim unavailable
                </Button>
                <Button
                  onClick={() => blocked("Request takedown")}
                  variant="outline"
                >
                  <Upload className="mr-2 h-4 w-4" /> Takedown unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Copyright tooling requires provenance, license and territory
                  validation, rights-holder identity, evidence retention,
                  jurisdiction-aware legal review, notice-and-counter-notice
                  process, accessibility, and privacy controls.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Ownership, licensing, takedown, dispute, and notice
                  transitions must be auditable and isolated from fabricated
                  legal outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <AlertTriangle className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No rights claim, user notice, counter-notice, content removal,
                  dispute resolution, or notification operation is available
                  from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Rights state remains explicitly unavailable until
                  authoritative legal and rights services are connected.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
