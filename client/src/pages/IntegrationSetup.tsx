import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Cable,
  FileWarning,
  KeyRound,
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
    title: "Connector identity and scope",
    area: "Access",
    description:
      "No provider, tenant, connector identifier, environment, API scope, OAuth grant, or health record is connected.",
  },
  {
    title: "Credentials and secret handling",
    area: "Security",
    description:
      "No API key, token, private credential, secret store, rotation, redaction, or server-side custody contract is configured.",
  },
  {
    title: "Data and capability contract",
    area: "Integration",
    description:
      "No endpoint, request schema, response schema, field mapping, permission, webhook, import, export, or capability is verified.",
  },
  {
    title: "Sync and failure semantics",
    area: "Reliability",
    description:
      "No cursor, idempotency, deduplication, retry, rate limit, conflict, timeout, replay, rollback, or reconciliation process exists.",
  },
  {
    title: "Lifecycle and governance",
    area: "Operations",
    description:
      "No consent, data minimization, audit, disable, revoke, deletion, incident, support, or recovery workflow is available.",
  },
];
export default function IntegrationSetup() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Integration Setup is unavailable locally. No connector, credentials, capability, sync, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No connector, credential, capability, sync, revoke, or mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="integration-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Cable className="size-3.5" aria-hidden="true" /> Integration
                  readiness
                </Badge>
                <Badge variant="secondary">No connector service</Badge>
              </div>
              <h1
                id="integration-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Integration Setup readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review connector, credential, capability, synchronization, and
                lifecycle contracts required for safe integrations without
                implying that providers, credentials, records, or side effects
                exist.
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
                Integration service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No provider, connector, credential vault, capability contract,
                synchronization process, privacy policy, or persistence layer is
                connected. This is a governance workspace, not an integration
                setup flow.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Cable className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No connector scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No provider, tenant, connector identity, environment, API scope,
                OAuth grant, or health record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <KeyRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No credential scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No API key, token, secret store, rotation, redaction, or
                server-side custody contract exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No integration actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No authorize, sync, import, export, revoke, webhook, or external
                mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Integration-governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never
              authorizes a provider, accepts credentials, calls an endpoint,
              syncs records, or saves an integration.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Integration Setup readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter integration requirements"
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
                  No integration notes match “{query}”.
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
                A production integration needs provider and OAuth review,
                server-side secret handling, capability and field contracts,
                authorization, webhooks, sync semantics, idempotency, retries,
                rate limits, conflict handling, consent, auditability, revoke
                and deletion, support, and tested recovery. No integration is
                claimed here.
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
