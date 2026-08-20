import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Activity,
  BookOpen,
  Code2,
  Copy,
  Globe,
  KeyRound,
  LockKeyhole,
  Network,
  ShieldAlert,
  Users,
  Webhook,
  XCircle,
} from "lucide-react";

type Section = "endpoints" | "auth" | "webhooks" | "limits";
type Requirement = { title: string; description: string; icon: typeof Code2 };
const ENDPOINT_REQUIREMENTS: readonly Requirement[] = [
  {
    title: "Identity and social data",
    description:
      "Profile, feed, post, and relationship contracts need authorization, consent, privacy, pagination, and durable provenance.",
    icon: Users,
  },
  {
    title: "Financial and asset data",
    description:
      "Prices, payments, NFTs, staking, and marketplace operations need verified providers, custody boundaries, idempotency, and reconciliation.",
    icon: Network,
  },
  {
    title: "AI and analytics",
    description:
      "AI requests and platform analytics need model, dataset, access, retention, cost, and high-impact safeguards.",
    icon: Activity,
  },
  {
    title: "Versioned contract",
    description:
      "Status, schema, error, pagination, deprecation, and support policies need a published provider and test evidence.",
    icon: Code2,
  },
];
const AUTH_REQUIREMENTS = [
  "API keys and OAuth clients require a server-side issuer, scopes, rotation, revocation, and audit trail.",
  "JWT sessions require verified signing, expiry, refresh rotation, audience checks, and secure cookie or header policy.",
  "Webhook signatures require a real sender, secret isolation, replay protection, delivery receipts, and retry evidence.",
  "No token, key, private identifier, wallet balance, payment record, or personal profile is rendered in this preview.",
];
const WEBHOOK_REQUIREMENTS = [
  "Event names and payload schemas are unavailable until an event provider is connected.",
  "Endpoint registration, signing, retries, replay, dead-letter handling, and delivery status are unavailable.",
  "Subscribers need consent, least privilege, redaction, retention, and per-tenant isolation.",
];
const LIMIT_REQUIREMENTS = [
  "Rate-limit tiers, quotas, burst behavior, and Retry-After headers are unavailable.",
  "Quotas must be authoritative, scoped to an identity, observable, and protected from bypass.",
  "Billing or commercial access cannot be inferred from an unverified plan or limit table.",
];

export default function DeveloperProtocol() {
  const [section, setSection] = useState<Section>("endpoints");
  const [status, setStatus] = useState(
    "Developer protocol service unavailable locally. No API key, request, webhook, endpoint, SDK, partner, clipboard, payment, or account mutation was started."
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No API key, request, webhook, endpoint, SDK, partner, clipboard, payment, or account mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="developer-protocol-title"
    >
      <div data-ui-polish="batch-179" className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge variant="outline" className="border-cyan-400/30 text-cyan-200">
            API READINESS PREVIEW
          </Badge>
          <h1
            id="developer-protocol-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <Code2 className="h-7 w-7 text-cyan-300" aria-hidden="true" />
            Developer protocol
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review API, authentication, webhook, quota, SDK, and partner
            requirements without claiming a live protocol, compliance
            certification, uptime, performance, financial, or commercial
            outcome.
          </p>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Protocol service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No public API provider, OpenAPI source, authentication issuer,
                webhook sender, quota service, SDK registry, partner program, or
                compliance evidence is connected. This page is not an API
                reference or SLA.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/50 p-5">
            <Globe className="mb-3 h-5 w-5 text-sky-300" aria-hidden="true" />
            <p className="text-lg font-semibold">API unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No endpoint, schema, version, response, or request is
              authoritative.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <KeyRound
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Auth unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No key, OAuth client, JWT, scope, or signing secret is issued.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Webhook
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Webhooks unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No event, delivery, signature, retry, or subscriber state exists.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Activity
              className="mb-3 h-5 w-5 text-emerald-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">SLA unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No uptime, latency, region, compliance, quota, or package claim is
              verified.
            </p>
          </Card>
        </section>
        <nav
          className="flex flex-wrap gap-2"
          aria-label="Protocol readiness sections"
        >
          {(["endpoints", "auth", "webhooks", "limits"] as const).map(item => (
            <Button
              key={item}
              type="button"
              variant={section === item ? "default" : "outline"}
              onClick={() => setSection(item)}
            >
              {item === "endpoints"
                ? "Endpoint contracts"
                : item === "auth"
                  ? "Authentication"
                  : item === "webhooks"
                    ? "Webhooks"
                    : "Limits"}
            </Button>
          ))}
        </nav>
        {section === "endpoints" && (
          <section className="space-y-4">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold">
                  Endpoint contracts unavailable
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  No path, method, schema, example response, personal data,
                  price, payment, asset, or analytics record is displayed.
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={() => announceUnavailable("API reference")}
              >
                Open reference unavailable
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {ENDPOINT_REQUIREMENTS.map(item => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className="border-border/40 bg-card/40 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-secondary/60 p-3">
                        <Icon
                          className="h-5 w-5 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {item.description}
                        </p>
                        <Badge
                          variant="outline"
                          className="mt-4 border-muted-foreground/30 text-muted-foreground"
                        >
                          Unavailable
                        </Badge>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => announceUnavailable("Response copy")}
            >
              <Copy className="mr-2 h-4 w-4" aria-hidden="true" />
              Copy example unavailable
            </Button>
          </section>
        )}
        {section === "auth" && (
          <section className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">
                Authentication unavailable
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                No credential, scope, session, signing, or key-management
                operation can be performed.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {AUTH_REQUIREMENTS.map(item => (
                <Card key={item} className="border-border/40 bg-card/40 p-5">
                  <div className="flex items-start gap-3">
                    <LockKeyhole
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-6 text-muted-foreground">
                      {item}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => announceUnavailable("API key issuance")}
            >
              Get API key unavailable
            </Button>
          </section>
        )}
        {section === "webhooks" && (
          <section className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Webhooks unavailable</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                No event catalog, endpoint registration, signature, retry,
                replay, or delivery result is connected.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {WEBHOOK_REQUIREMENTS.map(item => (
                <Card key={item} className="border-border/40 bg-card/40 p-5">
                  <Webhook
                    className="mb-3 h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item}
                  </p>
                </Card>
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => announceUnavailable("Webhook registration")}
            >
              Register webhook unavailable
            </Button>
          </section>
        )}
        {section === "limits" && (
          <section className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Rate limits unavailable</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                No tier, quota, daily limit, burst, Retry-After, billing, or
                plan entitlement is claimed.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {LIMIT_REQUIREMENTS.map(item => (
                <Card key={item} className="border-border/40 bg-card/40 p-5">
                  <Activity
                    className="mb-3 h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item}
                  </p>
                </Card>
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => announceUnavailable("SDK download")}
            >
              Download SDK unavailable
            </Button>
          </section>
        )}
        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">No protocol or partner claim</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                No API key, personal record, wallet balance, payment, webhook
                secret, SDK package, uptime SLA, SOC certification, revenue
                share, partner approval, or commercial relationship is created
                or promised.
              </p>
            </div>
          </div>
        </section>
        <Button
          type="button"
          variant="outline"
          onClick={() => announceUnavailable("Partner application")}
        >
          Apply as partner unavailable
        </Button>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
        <div className="sr-only">
          <BookOpen aria-hidden="true" />
          <XCircle aria-hidden="true" /> No protocol operation is active.
        </div>
      </div>
    </main>
  );
}
