import { useMemo, useState } from "react";
import {
  CircleSlash2,
  GitBranch,
  LockKeyhole,
  Megaphone,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type VersionArea = "All" | "Core" | "Financial" | "Education";
type VersionState = "All" | "Review" | "Unavailable" | "Planned";
type VersionConcept = {
  id: string;
  title: string;
  area: Exclude<VersionArea, "All">;
  state: Exclude<VersionState, "All">;
  summary: string;
  version: string;
  compatibility: string;
  deprecation: string;
  migration: string;
  adoption: string;
  rollout: string;
};
const concepts: VersionConcept[] = [
  {
    id: "core-release",
    title: "Core API release",
    area: "Core",
    state: "Review",
    summary:
      "A local release concept pending synchronized contracts, compatibility testing, migration guidance, client communication, and staged rollout approval.",
    version: "Version identity unavailable",
    compatibility: "Compatibility result unavailable",
    deprecation: "Deprecation policy unavailable",
    migration: "Migration guidance unavailable",
    adoption: "Client adoption unavailable",
    rollout: "Rollout state unavailable",
  },
  {
    id: "financial-release",
    title: "Financial API release",
    area: "Financial",
    state: "Unavailable",
    summary:
      "A local financial release concept pending network-aware contract validation, transaction compatibility, rollback authority, and audit evidence.",
    version: "Version identity unavailable",
    compatibility: "Compatibility result unavailable",
    deprecation: "Deprecation policy unavailable",
    migration: "Migration guidance unavailable",
    adoption: "Client adoption unavailable",
    rollout: "Rollout state unavailable",
  },
  {
    id: "education-release",
    title: "Education API release",
    area: "Education",
    state: "Planned",
    summary:
      "A local education release concept pending learner-safe migration communication, course-schema compatibility, adoption evidence, and staged deployment review.",
    version: "Version identity unavailable",
    compatibility: "Compatibility result unavailable",
    deprecation: "Deprecation policy unavailable",
    migration: "Migration guidance unavailable",
    adoption: "Client adoption unavailable",
    rollout: "Rollout state unavailable",
  },
];
const areas: VersionArea[] = ["All", "Core", "Financial", "Education"];
const states: VersionState[] = ["All", "Review", "Unavailable", "Planned"];
export default function APIVersioning() {
  const [area, setArea] = useState<VersionArea>("All");
  const [state, setState] = useState<VersionState>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "API versioning service unavailable. Showing local release concepts only."
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
      `${action} is unavailable locally. No contract publication, compatibility test, deprecation notice, migration, client notification, rollout, or production mutation was started.`
    );
  const metadata: Array<[string, string]> = [
    ["Version", selected.version],
    ["Compatibility", selected.compatibility],
    ["Deprecation", selected.deprecation],
    ["Migration", selected.migration],
    ["Adoption", selected.adoption],
    ["Rollout", selected.rollout],
  ];
  return (
    <div data-ui-polish="batch-180" className="min-h-screen bg-background">
      <PageHeader
        icon={GitBranch}
        title="API versioning"
        subtitle="Review local release concepts without fabricated versions, compatibility, deprecations, migrations, client adoption, rollout state, or production decisions."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>API versioning service unavailable.</strong> No contract
            registry, release history, compatibility analyzer, deprecation
            policy, migration guide, adoption telemetry, or rollout workflow is
            connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "API versioning service remains unavailable. Local releases were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset releases
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Release preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review API releases
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show release-lifecycle structure
                  only. They do not represent real versions, compatibility
                  results, migrations, client adoption, rollout, deprecation, or
                  deployment state.
                </p>
              </div>
              <GitBranch className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Version area filter"
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
              aria-label="Version state filter"
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
                Selected release
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
                No version, compatibility, deprecation, migration, adoption, or
                rollout state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Publish API release")}
                  variant="outline"
                >
                  <UploadCloud className="mr-2 h-4 w-4" /> Publish unavailable
                </Button>
                <Button
                  onClick={() => blocked("Deprecate API release")}
                  variant="outline"
                >
                  <Megaphone className="mr-2 h-4 w-4" /> Deprecate unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  API lifecycle management requires synchronized contracts,
                  semantic version policy, compatibility testing, migration
                  guidance, client communication, staged rollout, rollback, and
                  auditable approvals.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Version, compatibility, deprecation, migration, communication,
                  rollout, and deployment transitions must be auditable and
                  isolated from fabricated release outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No contract publication, compatibility test, deprecation
                  notice, client notification, migration, rollout, or production
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
