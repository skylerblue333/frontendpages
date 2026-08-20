import { useMemo, useState } from "react";
import {
  Building2,
  CircleSlash2,
  KeyRound,
  LockKeyhole,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type OrgArea = "All" | "Platform" | "Community" | "Education";
type OrgState = "All" | "Review" | "Unavailable" | "Controlled";
type OrgConcept = {
  id: string;
  title: string;
  area: Exclude<OrgArea, "All">;
  state: Exclude<OrgState, "All">;
  summary: string;
  members: string;
  owner: string;
  permissions: string;
  reporting: string;
  audit: string;
};
const concepts: OrgConcept[] = [
  {
    id: "platform-operations",
    title: "Platform operations",
    area: "Platform",
    state: "Review",
    summary:
      "A local department concept pending authoritative membership, ownership, role mapping, and privacy-aware directory controls.",
    members: "Member count unavailable",
    owner: "Department owner unavailable",
    permissions: "Permission scope unavailable",
    reporting: "Reporting structure unavailable",
    audit: "Organization audit unavailable",
  },
  {
    id: "community-programs",
    title: "Community programs",
    area: "Community",
    state: "Controlled",
    summary:
      "A local community department concept pending member, moderation, engagement, and least-privilege services.",
    members: "Member count unavailable",
    owner: "Department owner unavailable",
    permissions: "Permission scope unavailable",
    reporting: "Reporting structure unavailable",
    audit: "Organization audit unavailable",
  },
  {
    id: "education-services",
    title: "Education services",
    area: "Education",
    state: "Unavailable",
    summary:
      "A local education department concept pending learner, instructor, course, certification, and privacy-aware administration services.",
    members: "Member count unavailable",
    owner: "Department owner unavailable",
    permissions: "Permission scope unavailable",
    reporting: "Reporting structure unavailable",
    audit: "Organization audit unavailable",
  },
];
const areas: OrgArea[] = ["All", "Platform", "Community", "Education"];
const states: OrgState[] = ["All", "Review", "Unavailable", "Controlled"];
export default function DepartmentManagement() {
  const [area, setArea] = useState<OrgArea>("All");
  const [state, setState] = useState<OrgState>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "Organization service unavailable. Showing local department concepts only."
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
      `${action} is unavailable locally. No department, member, owner, permission, reporting, directory, or administrative mutation was started.`
    );
  const metadata: Array<[string, string]> = [
    ["Members", selected.members],
    ["Owner", selected.owner],
    ["Permissions", selected.permissions],
    ["Reporting", selected.reporting],
    ["Audit", selected.audit],
  ];
  return (
    <div data-ui-polish="batch-186" className="min-h-screen bg-background">
      <PageHeader
        icon={Building2}
        title="Department management"
        subtitle="Review local organization concepts without fabricated departments, members, owners, permissions, reporting lines, staffing metrics, or administrative outcomes."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Organization service unavailable.</strong> No department
            registry, member directory, role and permission service, reporting
            structure, or organization audit service is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Organization service remains unavailable. Local concepts were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset departments
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Organization preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review department concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show organization structure only.
                  They do not represent real members, owners, permissions,
                  reporting lines, staffing counts, or admin state.
                </p>
              </div>
              <Network className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Department area filter"
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
              aria-label="Department state filter"
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
                Selected department
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
                No members, owner, permissions, reporting, or audit state is
                available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Create department")}
                  variant="outline"
                >
                  <Building2 className="mr-2 h-4 w-4" /> Create unavailable
                </Button>
                <Button
                  onClick={() => blocked("Manage department")}
                  variant="outline"
                >
                  <Users className="mr-2 h-4 w-4" /> Manage unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Organization tooling requires authorization, least privilege,
                  privacy-aware directory handling, server-side mutation
                  controls, member lifecycle validation, audit trails, and clear
                  unavailable-state disclosures.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Department, member, owner, permission, reporting, and audit
                  transitions must be auditable and isolated from fabricated
                  administrative outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No directory lookup, member assignment, permission grant,
                  reporting update, department creation, or organization
                  mutation is available from this preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
