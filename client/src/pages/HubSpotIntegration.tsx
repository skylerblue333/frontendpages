import { useMemo, useState } from "react";
import {
  CheckCircle2,
  ContactRound,
  FileWarning,
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
    title: "Connector and OAuth scope",
    area: "Access",
    description:
      "No HubSpot account, OAuth grant, token scope, tenant, environment, or connector health record is connected.",
  },
  {
    title: "Contacts and CRM objects",
    area: "Data",
    description:
      "No contact, company, deal, ticket, owner, custom object, field mapping, or source-of-truth record is loaded.",
  },
  {
    title: "Sync and conflict semantics",
    area: "Reliability",
    description:
      "No import, export, webhook, cursor, deduplication, conflict, retry, rate-limit, or reconciliation process exists.",
  },
  {
    title: "Privacy and authorization",
    area: "Governance",
    description:
      "No consent, purpose, data minimization, retention, redaction, role, audit, deletion, or customer-data boundary is configured.",
  },
  {
    title: "Mutation and recovery",
    area: "Operations",
    description:
      "No create, update, archive, merge, automation, notification, rollback, incident, or support workflow is available.",
  },
];
export default function HubSpotIntegration() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "HubSpot integration is unavailable locally. No connector, CRM record, token scope, sync, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No connector, CRM object, OAuth grant, sync job, or mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="hubspot-title"
    >
      <div data-ui-polish="batch-192" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <ContactRound className="size-3.5" aria-hidden="true" /> CRM
                  integration readiness
                </Badge>
                <Badge variant="secondary">No HubSpot connector</Badge>
              </div>
              <h1
                id="hubspot-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                HubSpot integration readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review connector, CRM-object, sync, privacy, authorization, and
                recovery contracts required for a safe HubSpot integration
                without implying that contacts, tokens, or synchronized records
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
                CRM connector is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No HubSpot tenant, OAuth grant, token scope, CRM object catalog,
                sync process, privacy boundary, or persistence layer is
                connected. This is a readiness workspace, not a live
                integration.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <ContactRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No connector scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No tenant, OAuth grant, token scope, environment, or connector
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
              <h2 className="font-semibold">No CRM records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No contacts, companies, deals, tickets, owners, fields, or
                customer data is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No sync actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No import, export, webhook, update, archive, merge, or
                reconciliation action exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>CRM-integration governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never
              authorizes OAuth, queries HubSpot, reads CRM objects, runs sync,
              or saves an integration action.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search HubSpot readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter CRM integration requirements"
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
                  No CRM notes match “{query}”.
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
                A production HubSpot integration needs connector and OAuth
                review, object and field contracts, consent and customer-data
                controls, import/export and webhook semantics, conflict
                handling, rate limits, auditability, rollback, support, and
                tested recovery. No CRM connection is claimed here.
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
