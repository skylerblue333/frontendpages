import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  Zap,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Action catalogue and provenance",
    area: "Evidence",
    description:
      "No action identifier, label, owner, source, availability rule, required inputs, target resource, or current command registry is connected.",
  },
  {
    title: "Authorization and confirmation",
    area: "Controls",
    description:
      "No authenticated actor, role, ownership check, consent, confirmation step, privilege boundary, or sensitive-action policy is verified.",
  },
  {
    title: "Side effects, privacy, and audit",
    area: "Safety",
    description:
      "No mutation definition, personal-data impact, external delivery, idempotency key, audit event, notification, or privacy boundary exists.",
  },
  {
    title: "Loading, errors, and recovery",
    area: "Reliability",
    description:
      "No pending state, timeout, validation error, retry policy, partial result, rollback, cancellation, or support recovery path is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No execute, retry, cancel, undo, reorder, pin, hide, export, or account, content, financial, or personal-data mutation is connected or persisted.",
  },
];
export default function QuickActions() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Quick Actions is unavailable locally. No action catalogue, command, actor, authorization, confirmation, side effect, execution result, or personal-data record was loaded or changed."
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
      `${action} is unavailable locally. No command, execution, authorization, side effect, audit, recovery, or personal-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="quick-actions-title"
    >
      <div data-ui-polish="batch-200" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Zap className="size-3.5" aria-hidden="true" /> Quick-action
                  readiness workspace
                </Badge>
                <Badge variant="secondary">No action state</Badge>
              </div>
              <h1
                id="quick-actions-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                QuickActions readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review action catalogue provenance, authorization, confirmation,
                side effects, privacy, audit, loading, errors, recovery, and
                persistence boundaries without implying that commands, execution
                results, or account and personal-data mutations exist.
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
                Quick Actions is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No action registry, authorization service, confirmation policy,
                side-effect contract, audit path, error recovery, or persistence
                layer is connected. This workspace cannot execute, retry,
                cancel, undo, reorder, pin, hide, export, or claim an action
                result.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Zap className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No action state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No action identifier, label, owner, source, input, target,
                availability rule, or command registry is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <CheckCircle2
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No execution state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No actor, authorization, confirmation, pending state, result,
                side effect, audit event, or recovery state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No action controls</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No execute, retry, cancel, undo, reorder, pin, hide, export, or
                user-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Quick-action governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads commands, executes actions, sends external requests, or
              saves account or personal-data records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search QuickActions readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter action requirements"
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
                  No action requirements match “{query}”.
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
                Production quick actions require an authoritative action
                registry, input and target validation, actor and role
                authorization, explicit confirmation for consequential effects,
                idempotency and audit controls, privacy review, visible pending
                and error states, cancellation or rollback, and clear
                user-facing completion evidence. No command, execution,
                side-effect, audit, recovery, or personal-data record is claimed
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
