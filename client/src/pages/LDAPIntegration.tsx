import { useMemo, useState } from "react";
import {
  BookKey,
  FileWarning,
  KeyRound,
  Search,
  ServerOff,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Directory and tenant ownership",
    area: "Trust",
    description:
      "No LDAP or directory endpoint, tenant, organization, base DN, environment, service account, or ownership record is connected.",
  },
  {
    title: "Connection and transport security",
    area: "Network",
    description:
      "No TLS certificate validation, secure bind, network boundary, timeout, connection pool, or directory health check is configured.",
  },
  {
    title: "Identity and group mapping",
    area: "Identity",
    description:
      "No user, group, role, claim, attribute mapping, provisioning, deprovisioning, or authorization record is loaded.",
  },
  {
    title: "Credentials and secrets",
    area: "Secrets",
    description:
      "No bind password, private key, token, credential, or directory secret is collected, stored, logged, or exposed.",
  },
  {
    title: "Audit and recovery",
    area: "Operations",
    description:
      "No sync job, import result, retry, conflict resolution, audit event, rate limit, incident, or recovery evidence exists.",
  },
];
export default function LDAPIntegration() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "LDAPIntegration is unavailable locally. No directory endpoint, identity record, credential, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No directory connection, identity mapping, credential, sync, or authorization mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="ldap-integration-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Users className="size-3.5" aria-hidden="true" />{" "}
                  Directory-integration readiness
                </Badge>
                <Badge variant="secondary">No directory service</Badge>
              </div>
              <h1
                id="ldap-integration-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                LDAPIntegration readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the directory, transport, identity-mapping, secrets, and
                operations contracts required for safe enterprise directory
                integration without implying that an LDAP connection, account,
                group, or sync exists.
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
                Directory service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No LDAP provider, directory endpoint, secure bind, certificate
                validation, service account, identity mapping, or persistence
                layer is connected. This is a readiness workspace, not a
                directory administration console.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <BookKey
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No directory records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No endpoint, tenant, base DN, user, group, role, claim, or
                organization record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <KeyRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No credentials</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No bind password, private key, token, credential, or directory
                secret is collected or exposed.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No directory actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No connection, provisioning, deprovisioning, sync, import,
                mapping, or authorization action exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Directory-integration governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              connects to a directory, collects credentials, imports identities,
              changes mappings, runs sync, or saves an authorization mutation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search LDAPIntegration readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter directory-integration requirements"
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
                  No directory-integration notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <KeyRound
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production directory integration needs verified endpoint
                ownership, secure transport and bind behavior, secret
                management, identity and group mapping, least-privilege
                authorization, provisioning safeguards, auditability, rate
                limits, conflict handling, and tested recovery. No directory or
                identity state is claimed here.
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
