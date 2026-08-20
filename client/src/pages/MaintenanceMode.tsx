import { useMemo, useState } from "react";
import {
  Bell,
  CalendarClock,
  FileWarning,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  SlidersHorizontal,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Scope and operator authorization",
    area: "Access",
    description:
      "No authenticated operator, service scope, environment, tenant boundary, approval, or change authority is connected.",
  },
  {
    title: "Schedule and user communication",
    area: "Planning",
    description:
      "No start or end time, timezone, maintenance reason, status-page message, audience, notification, or communication approval is configured.",
  },
  {
    title: "Health and safe access",
    area: "Experience",
    description:
      "No service health, read-only boundary, bypass policy, maintenance banner, degraded-mode rule, or emergency contact is verified.",
  },
  {
    title: "Rollback and recovery",
    area: "Reliability",
    description:
      "No change record, rollback plan, checkpoint, dependency check, incident path, recovery target, or restoration evidence exists.",
  },
  {
    title: "Audit and persistence",
    area: "Governance",
    description:
      "No maintenance state, operator event, approval history, access log, retention policy, or configuration store is available.",
  },
];
export default function MaintenanceMode() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "MaintenanceMode is unavailable locally. No environment, schedule, operator, service state, banner, notification, or configuration mutation was loaded or saved."
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
      `${action} is unavailable locally. No maintenance window, schedule, banner, notification, access rule, rollback, or configuration mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="maintenance-mode-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <CalendarClock className="size-3.5" aria-hidden="true" />{" "}
                  Service-continuity readiness
                </Badge>
                <Badge variant="secondary">No maintenance controller</Badge>
              </div>
              <h1
                id="maintenance-mode-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MaintenanceMode readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review scope, operator authorization, scheduling, user
                communication, safe access, health, rollback, recovery, and
                audit contracts without implying that maintenance is active or
                that any service state, banner, or notification exists.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Maintenance controller is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No change-management system, operator authorization, schedule
                store, service-health signal, status communication, access
                policy, rollback mechanism, or persistence layer is connected.
                This is a readiness workspace, not a live maintenance control.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <CalendarClock
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No maintenance window</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No scope, environment, schedule, timezone, reason, operator,
                approval, or active service state is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Bell className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No communications</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No banner, status-page message, audience, notification,
                degraded-mode rule, or emergency contact is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No maintenance actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No start, pause, end, bypass, restrict, notify, rollback, or
                configuration mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Service-continuity governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              starts maintenance, changes access, schedules a window, sends a
              notification, publishes a banner, or saves service state.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search MaintenanceMode readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter service-continuity requirements"
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
                    <FileWarning className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No service-continuity notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <SlidersHorizontal
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production maintenance controller needs scoped operator
                authorization, approved schedules and communications,
                service-health and safe-access rules, read-only or degraded-mode
                behavior, rollback and recovery plans, auditability, incident
                handling, and tested restoration. No maintenance window or
                service state is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <LockKeyhole
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
