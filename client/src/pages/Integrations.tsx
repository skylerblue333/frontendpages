import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Cable,
  FileWarning,
  Layers3,
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
    title: "Catalog and provider identity",
    area: "Discovery",
    description:
      "No integration catalog, provider identity, environment, capability listing, version, connector health, or source provenance is loaded.",
  },
  {
    title: "Authorization and credentials",
    area: "Security",
    description:
      "No OAuth grant, API scope, account link, API key, token, secret vault, rotation, or server-side custody boundary is configured.",
  },
  {
    title: "Capability and data contract",
    area: "Integration",
    description:
      "No endpoint, request or response schema, field mapping, permission, webhook, import, export, or data-flow contract is verified.",
  },
  {
    title: "Lifecycle and sync operations",
    area: "Reliability",
    description:
      "No connect, test, sync, retry, rate limit, deduplication, conflict, revoke, deletion, rollback, or reconciliation process exists.",
  },
  {
    title: "Privacy and operational assurance",
    area: "Governance",
    description:
      "No consent, data minimization, audit, monitoring, incident, support, disable, compliance, or recovery workflow is available.",
  },
];
export default function Integrations() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Integrations are unavailable locally. No provider catalog, connector, credentials, capability, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No provider, connector, credential, sync, revoke, or mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="integrations-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Layers3 className="size-3.5" aria-hidden="true" />{" "}
                  Integration catalog readiness
                </Badge>
                <Badge variant="secondary">No integration catalog</Badge>
              </div>
              <h1
                id="integrations-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Integrations readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review provider discovery, authorization, capability,
                synchronization, lifecycle, and privacy contracts required for a
                trustworthy integration catalog without implying that connectors
                or data flows exist.
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
                Integration catalog is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No provider directory, connector registry, credential vault,
                capability contract, sync service, privacy policy, or
                persistence layer is connected. This is a governance workspace,
                not a live integrations catalog.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Layers3
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No provider catalog</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No provider, connector, environment, capability, version, or
                health record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Cable className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No connector scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No OAuth grant, API scope, account link, key, token, secret
                vault, or rotation boundary exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No activation actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No connect, test, sync, import, export, revoke, webhook, or
                external mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Integration-catalog governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never loads
              providers, authorizes a connector, accepts credentials, calls an
              endpoint, or activates an integration.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search integrations readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter integration-catalog requirements"
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
                  No integration-catalog notes match “{query}”.
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
                A production integrations catalog needs provider and version
                provenance, OAuth and secret handling, capability and field
                contracts, authorization, webhooks, sync semantics, idempotency,
                retries, rate limits, conflict handling, consent, auditability,
                revoke and deletion, monitoring, support, and tested recovery.
                No integration catalog is claimed here.
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
