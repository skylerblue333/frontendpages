import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Globe2,
  KeyRound,
  LockKeyhole,
  RefreshCw,
  Search,
  Server,
  ShieldCheck,
  Waypoints,
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

type DomainControl = {
  title: string;
  area: string;
  description: string;
  icon: typeof Globe2;
};

const domainControls: readonly DomainControl[] = [
  {
    title: "Registrar ownership and transfer",
    area: "Ownership",
    description:
      "No registrar account, domain portfolio, registrant identity, transfer lock, authorization code, or ownership record is connected.",
    icon: KeyRound,
  },
  {
    title: "DNS and routing",
    area: "Infrastructure",
    description:
      "No authoritative nameserver, DNS zone, record set, propagation state, routing target, or change history is loaded.",
    icon: Waypoints,
  },
  {
    title: "TLS certificates and renewals",
    area: "Security",
    description:
      "No certificate authority, private key, issuance challenge, expiry date, renewal job, or revocation state is available.",
    icon: LockKeyhole,
  },
  {
    title: "Privacy, monitoring, and incidents",
    area: "Operations",
    description:
      "No WHOIS privacy, abuse contact, uptime check, domain alert, incident record, or recovery owner is configured.",
    icon: ShieldCheck,
  },
];

export default function DomainManagement() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Domain management is unavailable locally. No registrar, DNS, certificate, transfer, or notification action was started."
  );
  const visibleControls = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return domainControls.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(normalizedQuery)
    );
  }, [query]);
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No registrar, DNS, certificate, transfer, or notification action was started.`
    );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="domain-management-title"
    >
      <div data-ui-polish="batch-187" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <Globe2 className="size-3.5" aria-hidden="true" />
                  Domain readiness
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="domain-management-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Domain management readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  Review the ownership, DNS, certificate, privacy, renewal,
                  transfer, and incident contracts required for safe domain
                  operations without claiming that any domain is connected or
                  controlled.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => announceUnavailable("Domain status refresh")}
            >
              <RefreshCw className="mr-2 size-4" aria-hidden="true" />
              Refresh unavailable
            </Button>
          </div>
        </header>

        <section
          className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
          aria-labelledby="domain-boundary-title"
        >
          <div className="flex items-start gap-3">
            <Globe2
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2
                id="domain-boundary-title"
                className="font-semibold text-amber-100"
              >
                No domain provider is connected
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No registrar account, domain name, DNS zone, certificate,
                private key, transfer code, ownership record, or monitoring
                provider is loaded. This page is a planning boundary, not a
                registrar or DNS control plane.
              </p>
            </div>
          </div>
        </section>

        <section
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Domain availability status"
        >
          {[
            {
              title: "Ownership unavailable",
              text: "No registrar, registrant, domain, transfer, or authorization record is loaded.",
              icon: KeyRound,
            },
            {
              title: "DNS unavailable",
              text: "No nameserver, zone, record, propagation, or routing state is loaded.",
              icon: Waypoints,
            },
            {
              title: "Certificates unavailable",
              text: "No certificate, private key, challenge, expiry, renewal, or revocation state exists.",
              icon: LockKeyhole,
            },
            {
              title: "Monitoring unavailable",
              text: "No privacy, abuse contact, uptime check, alert, or incident owner is configured.",
              icon: ShieldCheck,
            },
          ].map(({ title, text, icon: Icon }) => (
            <Card key={title} className="border-border/40 bg-card/50 p-5">
              <Icon className="mb-3 size-5 text-primary" aria-hidden="true" />
              <p className="text-lg font-semibold">{title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </Card>
          ))}
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Domain control map</CardTitle>
            <CardDescription>
              Search filters local planning notes only. It does not query
              registrar accounts, DNS providers, certificates, domains, keys, or
              monitoring services.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search domain control notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search domain controls"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visibleControls.map(
                ({ title, area, description, icon: Icon }) => (
                  <div
                    key={title}
                    className="rounded-xl border border-border/70 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-secondary/60 p-3">
                        <Icon
                          className="size-5 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold">{title}</h3>
                          <Badge variant="outline">{area}</Badge>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {description}
                        </p>
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          className="mt-4"
                          onClick={() => announceUnavailable(`Manage ${title}`)}
                        >
                          Manage unavailable
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              )}
              {visibleControls.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No domain control notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <section
          className="grid gap-4 md:grid-cols-3"
          aria-label="Unavailable domain actions"
        >
          <Card className="border-border/40 bg-card/30 p-5">
            <Server className="mb-3 size-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">DNS editor unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No record, nameserver, redirect, routing, or propagation change
              can be submitted.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("DNS editor")}
            >
              Open unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <RefreshCw
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Renewal unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No certificate, domain renewal, payment, challenge, or expiry
              update can be started.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Renewal workflow")}
            >
              Renew unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <LockKeyhole
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Credential setup unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No registrar credential, API token, private key, transfer code, or
              secret is rendered or stored.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Credential setup")}
            >
              Configure unavailable
            </Button>
          </Card>
        </section>

        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Domain evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production domain program needs verified ownership,
                least-privilege registrar access, DNS change review, certificate
                key isolation, renewal monitoring, transfer controls, privacy
                and abuse contacts, rate limits, audit logs, incident response,
                and an authorized recovery owner.
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
