import { useMemo, useState } from "react";
import {
  Archive,
  CircleSlash2,
  Database,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type DatabaseArea = "All" | "Schema" | "Migrations" | "Backups" | "Access";
type DatabaseState = "All" | "Review" | "Unavailable" | "Controlled";
type DatabaseConcept = {
  id: string;
  title: string;
  area: Exclude<DatabaseArea, "All">;
  state: Exclude<DatabaseState, "All">;
  summary: string;
  source: string;
  health: string;
  permissions: string;
  recovery: string;
  audit: string;
};

const concepts: DatabaseConcept[] = [
  {
    id: "schema-review",
    title: "Schema review",
    area: "Schema",
    state: "Review",
    summary:
      "A local schema-review concept pending an authoritative database connection, migration history, relationships, indexes, and validation rules.",
    source: "Database connection unavailable",
    health: "Schema health unavailable",
    permissions: "Access scope unavailable",
    recovery: "Recovery dependency unavailable",
    audit: "Schema audit unavailable",
  },
  {
    id: "migration-control",
    title: "Migration control",
    area: "Migrations",
    state: "Unavailable",
    summary:
      "A local migration-control concept pending version provenance, transaction strategy, rollback validation, and deployment approval.",
    source: "Migration source unavailable",
    health: "Migration status unavailable",
    permissions: "Deployment permission unavailable",
    recovery: "Rollback state unavailable",
    audit: "Migration audit unavailable",
  },
  {
    id: "backup-review",
    title: "Backup and recovery",
    area: "Backups",
    state: "Controlled",
    summary:
      "A local backup concept pending backup catalog, encryption verification, recovery-point semantics, restore testing, and ownership evidence.",
    source: "Backup source unavailable",
    health: "Backup health unavailable",
    permissions: "Recovery access unavailable",
    recovery: "Restore evidence unavailable",
    audit: "Backup audit unavailable",
  },
  {
    id: "database-access",
    title: "Database access review",
    area: "Access",
    state: "Review",
    summary:
      "A local access-review concept pending role mapping, least privilege, secret custody, rotation evidence, and audit records.",
    source: "Credential source unavailable",
    health: "Connection health unavailable",
    permissions: "Role and permission unavailable",
    recovery: "Rotation state unavailable",
    audit: "Access audit unavailable",
  },
];
const areas: DatabaseArea[] = [
  "All",
  "Schema",
  "Migrations",
  "Backups",
  "Access",
];
const states: DatabaseState[] = ["All", "Review", "Unavailable", "Controlled"];

export default function DatabaseManagement() {
  const [area, setArea] = useState<DatabaseArea>("All");
  const [state, setState] = useState<DatabaseState>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "Database management service unavailable. Showing local operations concepts only."
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
      `${action} is unavailable locally. No database connection, query, migration, backup, restore, credential, permission, or production mutation was started.`
    );
  const metadata: Array<[string, string]> = [
    ["Source", selected.source],
    ["Health", selected.health],
    ["Permissions", selected.permissions],
    ["Recovery", selected.recovery],
    ["Audit", selected.audit],
  ];
  return (
    <div data-ui-polish="batch-185" className="min-h-screen bg-background">
      <PageHeader
        icon={Database}
        title="Database management"
        subtitle="Review local database-operation concepts without fabricated connections, schemas, rows, health metrics, migrations, backups, credentials, or production mutations."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Database management service unavailable.</strong> No
            server-side database connection, schema registry, migration runner,
            backup catalog, recovery verifier, or access-review service is
            connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Database management service remains unavailable. Local concepts were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset operations
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Operations preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review database operations
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show operational structure only.
                  They do not represent real connections, schemas, rows,
                  queries, migrations, backups, credentials, health, or recovery
                  state.
                </p>
              </div>
              <Wrench className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Database operation area filter"
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
              aria-label="Database operation state filter"
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
                  No local database concepts match these filters.
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
                Selected operation
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
                No connection, schema, health, permission, recovery, or audit
                state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Connect database")}
                  variant="outline"
                >
                  <KeyRound className="mr-2 h-4 w-4" /> Connect unavailable
                </Button>
                <Button
                  onClick={() => blocked("Run database operation")}
                  variant="outline"
                >
                  <Database className="mr-2 h-4 w-4" /> Run unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Database tooling requires server-side credentials, least
                  privilege, input validation, transaction safety, migration
                  review, backup verification, restore testing, audit logging,
                  secret rotation, and clear unavailable-state disclosures.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Connection, query, migration, backup, restore, permission, and
                  audit transitions must be auditable and isolated from
                  fabricated production outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No credential lookup, schema inspection, query execution,
                  migration, backup, restore, or database mutation is available
                  from this preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
