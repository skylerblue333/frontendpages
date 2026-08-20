import { useMemo, useState } from "react";
import {
  CheckCircle2,
  CloudCog,
  KeyRound,
  Search,
  ServerCog,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type EnvironmentBoundary = { title: string; description: string };
const boundaries: readonly EnvironmentBoundary[] = [
  {
    title: "Environment identity",
    description:
      "No development, staging, production, region, cluster, account, or deployment target is connected.",
  },
  {
    title: "Secrets and configuration",
    description:
      "No secret, environment variable, credential, key, endpoint, or configuration value is loaded or editable.",
  },
  {
    title: "Deploy and rollback",
    description:
      "No build, release, deploy, promotion, rollback, migration, or infrastructure mutation is available.",
  },
  {
    title: "Access and observability",
    description:
      "No operator role, audit record, logs, metrics, traces, alerts, incident, or health signal is connected.",
  },
];

export default function EnvironmentManagement() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Environment management is unavailable locally. No environment, secret, deployment, rollback, or infrastructure action was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, description }) =>
      `${title} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No environment, secret, deployment, rollback, or infrastructure action was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="environment-management-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <CloudCog className="size-3.5" aria-hidden="true" />
                  Environment readiness
                </Badge>
                <Badge variant="secondary">Not connected</Badge>
              </div>
              <h1
                id="environment-management-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Environment management readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review safe environment, deployment, secrets, access,
                observability, and rollback contracts without claiming control
                of infrastructure or production systems.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Environment control plane is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No target environment, cloud account, deployment provider,
                secret store, operator role, health signal, or incident system
                is connected. This is a planning boundary, not an infrastructure
                console.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/70 p-5">
            <ServerCog
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">No deployment actions</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No build, release, promotion, rollback, migration, or
              infrastructure mutation can run.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <KeyRound className="mb-3 size-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">No secrets exposed</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No credentials, keys, endpoints, or environment variables are
              loaded or editable.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <ShieldCheck
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">No operational signals</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No logs, metrics, traces, alerts, health, audit, or incident state
              is presented.
            </p>
          </div>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Environment readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              infrastructure, credentials, deployments, logs, or monitoring
              storage.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search environment readiness notes"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search environment requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(({ title, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Manage ${title}`)}
                  >
                    Manage unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No environment notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 size-5 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Production environment controls need provider isolation, least
                privilege, secret rotation, configuration validation, deployment
                approvals, rollback tests, migration safety, observability,
                audit logging, incident response, and recovery evidence.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      </div>
    </main>
  );
}
