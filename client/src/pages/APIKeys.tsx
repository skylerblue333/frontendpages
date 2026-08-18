import { useMemo, useState } from "react";
import {
  CircleSlash2,
  KeyRound,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type KeyArea = "All" | "Public API" | "Automation" | "Internal";
type KeyState = "All" | "Review" | "Unavailable" | "Controlled";
type KeyConcept = {
  id: string;
  title: string;
  area: Exclude<KeyArea, "All">;
  state: Exclude<KeyState, "All">;
  summary: string;
  scope: string;
  owner: string;
  rotation: string;
  revocation: string;
  usage: string;
  audit: string;
};
const concepts: KeyConcept[] = [
  {
    id: "public-key",
    title: "Public API key governance",
    area: "Public API",
    state: "Review",
    summary:
      "A local key-governance concept pending server-side custody, scoped permissions, environment separation, rotation, and audit policy.",
    scope: "Permission scope unavailable",
    owner: "Key owner unavailable",
    rotation: "Rotation schedule unavailable",
    revocation: "Revocation status unavailable",
    usage: "Usage telemetry unavailable",
    audit: "Key audit unavailable",
  },
  {
    id: "automation-key",
    title: "Automation credential governance",
    area: "Automation",
    state: "Controlled",
    summary:
      "A local automation-key concept pending workload identity, least privilege, expiry, secret rotation, and revocation evidence.",
    scope: "Permission scope unavailable",
    owner: "Workload owner unavailable",
    rotation: "Rotation schedule unavailable",
    revocation: "Revocation status unavailable",
    usage: "Usage telemetry unavailable",
    audit: "Key audit unavailable",
  },
  {
    id: "internal-key",
    title: "Internal service credential",
    area: "Internal",
    state: "Unavailable",
    summary:
      "A local internal-credential concept pending service identity, secret vault integration, access review, and environment controls.",
    scope: "Permission scope unavailable",
    owner: "Service owner unavailable",
    rotation: "Rotation schedule unavailable",
    revocation: "Revocation status unavailable",
    usage: "Usage telemetry unavailable",
    audit: "Key audit unavailable",
  },
];
const areas: KeyArea[] = ["All", "Public API", "Automation", "Internal"];
const states: KeyState[] = ["All", "Review", "Unavailable", "Controlled"];
export default function APIKeys() {
  const [area, setArea] = useState<KeyArea>("All");
  const [state, setState] = useState<KeyState>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "Key-management service unavailable. Showing local governance concepts only."
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
      `${action} is unavailable locally. No secret, token, key, fingerprint, credential, rotation, revocation, or permission mutation was started.`
    );
  const metadata: Array<[string, string]> = [
    ["Scope", selected.scope],
    ["Owner", selected.owner],
    ["Rotation", selected.rotation],
    ["Revocation", selected.revocation],
    ["Usage", selected.usage],
    ["Audit", selected.audit],
  ];
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={KeyRound}
        title="API keys"
        subtitle="Review local key-governance concepts without fabricated secrets, tokens, owners, scopes, usage, rotations, revocations, or credential state."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Key-management service unavailable.</strong> No server-side
            secret vault, ownership registry, scope policy, rotation workflow,
            revocation service, or usage audit is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Key-management service remains unavailable. Local governance concepts were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset key concepts
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Key governance preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review credential concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show key-governance structure only.
                  They do not represent real secrets, tokens, fingerprints,
                  owners, permissions, usage, rotation, or revocation state.
                </p>
              </div>
              <ShieldCheck className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Key area filter"
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
              aria-label="Key state filter"
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
                Selected key concept
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
                No secret, token, owner, scope, rotation, revocation, usage, or
                audit state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Create API key")}
                  variant="outline"
                >
                  <KeyRound className="mr-2 h-4 w-4" /> Create unavailable
                </Button>
                <Button
                  onClick={() => blocked("Rotate API key")}
                  variant="outline"
                >
                  <RotateCcw className="mr-2 h-4 w-4" /> Rotate unavailable
                </Button>
                <Button
                  onClick={() => blocked("Revoke API key")}
                  variant="outline"
                >
                  <Trash2 className="mr-2 h-4 w-4" /> Revoke unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Key management requires server-side secret custody, one-time
                  reveal controls, scoped permissions, rotation and revocation,
                  environment separation, rate limits, audit logging, and secure
                  error handling.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Key, scope, rotation, revocation, usage, and audit transitions
                  must be auditable and isolated from fabricated credential
                  outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No secret lookup, token generation, key display, rotation,
                  revocation, permission grant, or credential mutation is
                  available from this preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
