import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileSearch,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  UserCog,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Filter = "All" | "Active" | "Review";
type UserConcept = {
  id: string;
  name: string;
  state: string;
  evidence: string;
};
const users: readonly UserConcept[] = [
  {
    id: "one",
    name: "Account concept A",
    state: "Review",
    evidence:
      "Identity, role, permissions, consent, and moderation state are unavailable.",
  },
  {
    id: "two",
    name: "Account concept B",
    state: "Active",
    evidence:
      "Authenticated ownership, last activity, access scope, and audit history are unavailable.",
  },
  {
    id: "three",
    name: "Account concept C",
    state: "Review",
    evidence:
      "Invitation, suspension, recovery, privacy, and administrator authorization are unavailable.",
  },
];

export default function UserManagement() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedId, setSelectedId] = useState(users[0].id);
  const [status, setStatus] = useState(
    "User-management service unavailable locally. No user records are loaded."
  );
  const selected = useMemo(
    () => users.find(user => user.id === selectedId) ?? users[0],
    [selectedId]
  );
  const visible =
    filter === "All" ? users : users.filter(user => user.state === filter);
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No user, role, permission, invitation, moderation, suspension, or audit mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={UserCog}
        title="User management"
        subtitle="Review administrative user-management readiness without fabricating identities, roles, permissions, account states, invitations, moderation, or security actions."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="User management unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>User-management service unavailable.</strong> No
            authenticated administrator, user directory, role policy,
            authorization service, moderation queue, invitation store, or audit
            log is connected.
          </p>
          <Button
            onClick={() => blocked("Refresh users")}
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <div className="grid gap-6 lg:grid-cols-[1fr_370px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Admin preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review local account concepts
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Typed local fixtures demonstrate filtering and evidence notes
                  only. They do not represent real users, permissions, activity,
                  moderation decisions, account status, invitations, or
                  administrator authority.
                </p>
              </div>
              <UserCog
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="User state filter"
            >
              {(["All", "Active", "Review"] as const).map(item => (
                <Button
                  key={item}
                  type="button"
                  aria-pressed={filter === item}
                  onClick={() => {
                    setFilter(item);
                    setStatus(
                      `User-state filter changed locally to ${item}. No directory query was run.`
                    );
                  }}
                  size="sm"
                  variant={filter === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {visible.map(user => (
                <button
                  key={user.id}
                  type="button"
                  aria-pressed={selected.id === user.id}
                  onClick={() => setSelectedId(user.id)}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === user.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{user.name}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {user.state}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {user.evidence}
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
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected account concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.name}</h2>
              <p className="mt-1 text-sm text-cyan-200">{selected.state}</p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["User ID", "Unavailable"],
                  ["Identity", "Not authenticated"],
                  ["Role", "Policy unavailable"],
                  ["Permissions", "Not evaluated"],
                  ["Account status", "Not determined"],
                  ["Invitation", "Store unavailable"],
                  ["Moderation", "Queue unavailable"],
                  ["Audit", "Record unavailable"],
                  ["Last activity", "Timestamp unavailable"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-slate-800 p-3"
                  >
                    <dt className="text-xs text-slate-500">{label}</dt>
                    <dd className="mt-1 text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled size="sm">
                  Edit unavailable
                </Button>
                <Button disabled size="sm" variant="outline">
                  Suspend unavailable
                </Button>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production admin surface requires authenticated
                  administrator scope, server-side authorization,
                  least-privilege roles, IDOR protection, privacy controls,
                  invitation and recovery policy, moderation evidence,
                  suspension safeguards, immutable audit events, rate limits,
                  and safe confirmation before destructive actions.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Scope visible</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Evidence gaps are named.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Admin blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No account mutation.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileSearch
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Audit absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No authoritative log.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <ShieldCheck
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Role absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No permission inference.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No user identity, role, permission, account status, invitation,
            moderation, suspension, audit, or administrative outcome is claimed
            as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
