import { useMemo, useState } from "react";
import {
  BookOpenCheck,
  CircleSlash2,
  Cookie,
  Download,
  FileText,
  LockKeyhole,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type PolicyScope = "All" | "Cookies" | "Consent" | "Privacy";
type PolicyState = "All" | "Review" | "Published" | "Unavailable";

type PolicyConcept = {
  id: string;
  title: string;
  scope: Exclude<PolicyScope, "All">;
  state: Exclude<PolicyState, "All">;
  summary: string;
  jurisdiction: string;
  version: string;
  owner: string;
  consent: string;
  inventory: string;
  retention: string;
};

const policies: PolicyConcept[] = [
  {
    id: "cookie-policy",
    title: "Cookie notice concept",
    scope: "Cookies",
    state: "Review",
    summary:
      "A local policy concept for cookie purposes and vendors pending jurisdiction-aware legal review and inventory validation.",
    jurisdiction: "Jurisdiction unavailable",
    version: "Policy version unavailable",
    owner: "Policy owner unavailable",
    consent: "Consent evidence unavailable",
    inventory: "Cookie inventory unavailable",
    retention: "Retention period unavailable",
  },
  {
    id: "consent-policy",
    title: "Consent preference concept",
    scope: "Consent",
    state: "Published",
    summary:
      "A local preference concept pending verified consent categories, enforcement hooks, and auditable change history.",
    jurisdiction: "Jurisdiction unavailable",
    version: "Policy version unavailable",
    owner: "Policy owner unavailable",
    consent: "Consent evidence unavailable",
    inventory: "Cookie inventory unavailable",
    retention: "Retention period unavailable",
  },
  {
    id: "privacy-policy",
    title: "Privacy policy reference",
    scope: "Privacy",
    state: "Unavailable",
    summary:
      "A local privacy reference concept pending legal review, data-purpose mapping, vendor disclosures, and retention controls.",
    jurisdiction: "Jurisdiction unavailable",
    version: "Policy version unavailable",
    owner: "Policy owner unavailable",
    consent: "Consent evidence unavailable",
    inventory: "Cookie inventory unavailable",
    retention: "Retention period unavailable",
  },
];

const scopes: PolicyScope[] = ["All", "Cookies", "Consent", "Privacy"];
const states: PolicyState[] = ["All", "Review", "Published", "Unavailable"];

export default function CookiePolicy() {
  const [scope, setScope] = useState<PolicyScope>("All");
  const [state, setState] = useState<PolicyState>("All");
  const [selectedId, setSelectedId] = useState(policies[0].id);
  const [status, setStatus] = useState(
    "Privacy policy service unavailable. Showing local policy concepts only."
  );

  const filtered = useMemo(
    () =>
      policies.filter(
        policy =>
          (scope === "All" || policy.scope === scope) &&
          (state === "All" || policy.state === state)
      ),
    [scope, state]
  );
  const selected =
    filtered.find(policy => policy.id === selectedId) ??
    filtered[0] ??
    policies[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No legal acknowledgement, consent preference, cookie change, notification, or policy export request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Cookie}
        title="Cookie and privacy policy"
        subtitle="Review local privacy-policy concepts without fabricated legal conclusions, consent records, cookie inventories, retention, jurisdictions, or compliance status."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Privacy policy service unavailable.</strong> No policy
            registry, jurisdictional legal review, consent store, cookie
            scanner, preference enforcement, or notification service is
            connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Privacy policy service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset policies
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Policy preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review privacy concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show policy structure only. They do
                  not represent legal advice, consent, cookie settings, data
                  processing, retention, or compliance outcomes.
                </p>
              </div>
              <BookOpenCheck className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Privacy policy scope filter"
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
              aria-label="Privacy policy state filter"
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
              {filtered.map(policy => (
                <button
                  aria-pressed={selected.id === policy.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === policy.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={policy.id}
                  onClick={() => setSelectedId(policy.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{policy.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {policy.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{policy.scope}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {policy.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local policy fixtures match these filters.
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
                Selected policy
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.scope} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Jurisdiction", selected.jurisdiction],
                  ["Version", selected.version],
                  ["Owner", selected.owner],
                  ["Consent", selected.consent],
                  ["Inventory", selected.inventory],
                  ["Retention", selected.retention],
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
                No legal scope, jurisdiction, policy version, owner, consent
                record, cookie, vendor, or retention state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Acknowledge policy")}
                  variant="outline"
                >
                  <FileText className="mr-2 h-4 w-4" /> Acknowledge unavailable
                </Button>
                <Button
                  onClick={() => blocked("Manage preferences")}
                  variant="outline"
                >
                  <SlidersHorizontal className="mr-2 h-4 w-4" /> Preferences
                  unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export policy")}
                  variant="outline"
                >
                  <Download className="mr-2 h-4 w-4" /> Export unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Privacy policy tooling requires jurisdiction-aware legal
                  review, purpose and vendor inventories, consent evidence,
                  preference enforcement, retention controls, accessibility, and
                  version history.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Policy, consent, preference, and retention transitions must be
                  auditable and isolated from fabricated compliance outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <FileText className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No legal acknowledgement, consent write, cookie change, vendor
                  notice, or notification operation is available from this
                  preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Policy state remains explicitly unavailable until
                  authoritative privacy services are connected.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
