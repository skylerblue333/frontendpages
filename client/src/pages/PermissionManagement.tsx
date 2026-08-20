import { useMemo, useState } from "react";
import {
  FileSearch,
  Info,
  KeyRound,
  LockKeyhole,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  UserRoundCheck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Principal, resource, and policy provenance",
    area: "Authorization",
    description:
      "No user, service, group, resource, tenant, policy, scope, role, version, or effective-at timestamp is connected.",
  },
  {
    title: "Least privilege and separation of duties",
    area: "Security",
    description:
      "No permission model, deny precedence, inheritance rule, admin boundary, dual-control requirement, or privileged-action policy is verified.",
  },
  {
    title: "Approval, session, and lifecycle controls",
    area: "Controls",
    description:
      "No approval, consent, session, expiry, revocation, rotation, emergency access, access review, or deprovisioning state exists.",
  },
  {
    title: "Auditability, privacy, and failure handling",
    area: "Reliability",
    description:
      "No authorization decision, reason, notification, sensitive-data scope, denied event, support trace, or correction workflow is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No grant, deny, invite, assign, approve, revoke, rotate, export, or permission or identity mutation is connected or persisted.",
  },
];
export default function PermissionManagement() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Permission management is unavailable locally. No principal, resource, role, policy, scope, approval, session, audit, or authorization record was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No principal, role, policy, scope, approval, session, audit, privacy, or authorization mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="permission-management-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <UserRoundCheck className="size-3.5" aria-hidden="true" />{" "}
                  Authorization-readiness workspace
                </Badge>
                <Badge variant="secondary">No permission data</Badge>
              </div>
              <h1
                id="permission-management-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                PermissionManagement readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review principal and resource provenance, policy and scope
                ownership, least privilege, separation of duties, approvals,
                sessions, lifecycle, privacy, auditability, and
                permission-action boundaries without implying that roles,
                permissions, or authorization records exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Permission management is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No identity provider, policy engine, resource registry, role
                service, approval workflow, session control, access review,
                audit system, or persistence layer is connected. This workspace
                cannot grant, deny, invite, assign, approve, revoke, rotate,
                export, or claim authorization changes.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <UserRoundCheck
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No permission data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No user, service, group, resource, tenant, role, policy, scope,
                version, or authorization record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <KeyRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No policy state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No permission model, inheritance, deny rule, approval, session,
                expiry, revocation, or access-review state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No permission actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No grant, deny, invite, assign, approve, revoke, rotate, export,
                or identity mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Authorization-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              evaluates access, grants a role, changes a policy, or saves
              authorization records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search PermissionManagement readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter authorization requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(item => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${item.title}`)}
                  >
                    <FileSearch className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No authorization requirements match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Production permission management requires authoritative
                principals and resources, explicit policy semantics, least
                privilege, separation of duties, approvals, session and
                lifecycle controls, emergency access, access reviews, privacy
                boundaries, audit history, and clear feedback for every
                authorization action. No principal, role, policy, scope,
                approval, session, audit, or authorization record is claimed
                here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <ShieldCheck
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
