import { useMemo, useState } from "react";
import {
  Accessibility,
  CircleSlash2,
  FileKey2,
  LockKeyhole,
  Scale,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type PrivacyArea = "All" | "Consent" | "Access" | "Retention" | "Requests";
type PrivacyState = "All" | "Review" | "Unavailable" | "Controlled";

type PrivacyConcept = {
  id: string;
  title: string;
  area: Exclude<PrivacyArea, "All">;
  state: Exclude<PrivacyState, "All">;
  summary: string;
  legalBasis: string;
  scope: string;
  consent: string;
  retention: string;
  access: string;
  audit: string;
};

const privacyConcepts: PrivacyConcept[] = [
  {
    id: "consent-preferences",
    title: "Consent preferences",
    area: "Consent",
    state: "Review",
    summary:
      "A local preference-control concept pending purpose registry, granular choices, lawful-basis mapping, and withdrawal handling.",
    legalBasis: "Lawful basis unavailable",
    scope: "Processing scope unavailable",
    consent: "Consent record unavailable",
    retention: "Retention rule unavailable",
    access: "Preference access unavailable",
    audit: "Consent audit unavailable",
  },
  {
    id: "data-subject-access",
    title: "Data-subject access",
    area: "Requests",
    state: "Unavailable",
    summary:
      "A local access-request concept pending identity verification, record discovery, redaction review, secure delivery, and response deadlines.",
    legalBasis: "Request basis unavailable",
    scope: "Record scope unavailable",
    consent: "Identity and authorization unavailable",
    retention: "Request retention unavailable",
    access: "Access workflow unavailable",
    audit: "Request audit unavailable",
  },
  {
    id: "retention-controls",
    title: "Retention controls",
    area: "Retention",
    state: "Controlled",
    summary:
      "A local retention-control concept pending system-of-record mapping, policy ownership, deletion dependencies, and verifiable execution.",
    legalBasis: "Retention basis unavailable",
    scope: "Data inventory unavailable",
    consent: "Consent dependency unavailable",
    retention: "Retention period unavailable",
    access: "Deletion access unavailable",
    audit: "Deletion audit unavailable",
  },
  {
    id: "privacy-access",
    title: "Privacy access controls",
    area: "Access",
    state: "Review",
    summary:
      "A local privacy-access concept pending role mapping, least-privilege policy, sensitive-field controls, and access-review evidence.",
    legalBasis: "Access basis unavailable",
    scope: "Field scope unavailable",
    consent: "Consent dependency unavailable",
    retention: "Review cadence unavailable",
    access: "Role and permission unavailable",
    audit: "Access audit unavailable",
  },
];

const areas: PrivacyArea[] = [
  "All",
  "Consent",
  "Access",
  "Retention",
  "Requests",
];
const states: PrivacyState[] = ["All", "Review", "Unavailable", "Controlled"];

export default function DataPrivacy() {
  const [area, setArea] = useState<PrivacyArea>("All");
  const [state, setState] = useState<PrivacyState>("All");
  const [selectedId, setSelectedId] = useState(privacyConcepts[0].id);
  const [status, setStatus] = useState(
    "Privacy service unavailable. Showing local privacy-control concepts only."
  );

  const filtered = useMemo(
    () =>
      privacyConcepts.filter(
        item =>
          (area === "All" || item.area === area) &&
          (state === "All" || item.state === state)
      ),
    [area, state]
  );
  const selected =
    filtered.find(item => item.id === selectedId) ??
    filtered[0] ??
    privacyConcepts[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No consent, privacy preference, identity verification, data-subject request, retention change, permission update, or personal-data operation was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={ShieldCheck}
        title="Data privacy"
        subtitle="Review local privacy-control concepts without fabricated consent, legal, jurisdiction, identity, retention, request, access, or compliance outcomes."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Privacy service unavailable.</strong> No consent registry,
            identity-verification service, personal-data inventory, policy
            source, retention engine, or data-subject request workflow is
            connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Privacy service remains unavailable. Local concepts were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset controls
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Privacy preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review privacy controls
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show privacy-control structure
                  only. They do not represent real consent, legal basis,
                  identity, jurisdiction, personal-data records, retention,
                  requests, access, or compliance state.
                </p>
              </div>
              <Scale className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Privacy control area filter"
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
              aria-label="Privacy control state filter"
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
                  No local privacy concepts match these filters.
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
                {selected.area} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Legal basis", selected.legalBasis],
                  ["Scope", selected.scope],
                  ["Consent", selected.consent],
                  ["Retention", selected.retention],
                  ["Access", selected.access],
                  ["Audit", selected.audit],
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
                No legal basis, scope, consent, retention, access, identity,
                request, or audit state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Change privacy control")}
                  variant="outline"
                >
                  <FileKey2 className="mr-2 h-4 w-4" /> Change unavailable
                </Button>
                <Button
                  onClick={() => blocked("Submit privacy request")}
                  variant="outline"
                >
                  <UserRoundCheck className="mr-2 h-4 w-4" /> Request
                  unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Privacy controls require purpose limitation, lawful-basis
                  mapping, granular consent, withdrawal handling, data
                  minimization, identity verification, access and correction
                  workflows, retention and deletion controls, auditability, and
                  clear unavailable-state disclosures.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <Accessibility className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Consent, request, access, deletion, and preference transitions
                  must be auditable and isolated from fabricated personal-data
                  or compliance outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No policy lookup, identity verification, consent update,
                  data-subject request, retention change, access grant, or
                  privacy operation is available from this preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
