import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileWarning,
  GitBranch,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Boundary = { title: string; area: string; description: string };
const boundaries: readonly Boundary[] = [
  {
    title: "Connector and authorization scope",
    area: "Access",
    description:
      "No IFTTT account, applet service, OAuth grant, token scope, webhook, device, or connector health record is connected.",
  },
  {
    title: "Trigger and action contracts",
    area: "Automation",
    description:
      "No event trigger, condition, action, payload schema, destination, permission, or execution identity is defined.",
  },
  {
    title: "Reliability and replay safety",
    area: "Reliability",
    description:
      "No idempotency, deduplication, retry, timeout, rate limit, ordering, replay, failure, or rollback process exists.",
  },
  {
    title: "Privacy and data flow",
    area: "Governance",
    description:
      "No data classification, consent, minimization, secret handling, retention, redaction, audit, or deletion boundary is configured.",
  },
  {
    title: "Execution evidence and recovery",
    area: "Operations",
    description:
      "No run history, output, notification, incident, support, disable, recovery, or reconciliation workflow is available.",
  },
];
export default function IFTTT() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "IFTTT automation is unavailable locally. No connector, trigger, action, execution, or mutation was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No connector, applet, trigger, action, execution, or mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="ifttt-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <GitBranch className="size-3.5" aria-hidden="true" />{" "}
                  Automation readiness
                </Badge>
                <Badge variant="secondary">No IFTTT connector</Badge>
              </div>
              <h1
                id="ifttt-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                IFTTT readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review connector, trigger, action, reliability, privacy, and
                execution contracts required for safe automation without
                implying that applets, devices, webhooks, or side effects exist.
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
                Automation connector is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No IFTTT account, service connector, OAuth grant, trigger,
                action, webhook, device, data-flow policy, or execution store is
                connected. This is a readiness workspace, not an automation
                engine.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <GitBranch
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No connector scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No account, service, OAuth grant, webhook, device, or connector
                health state is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No trigger scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No event, condition, payload, destination, permission, or
                execution identity is defined.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No side effects</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No applet, run, notification, device action, webhook, or
                external mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Automation-governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never
              authorizes a connector, registers an applet, fires a trigger,
              sends a webhook, or executes an action.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search IFTTT readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter automation requirements"
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
                  No automation notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production automation integration needs connector and OAuth
                review, trigger and action schemas, secret handling,
                idempotency, retries, rate limits, replay protection, privacy
                controls, run history, disable and rollback, incident support,
                and tested recovery. No automation is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
