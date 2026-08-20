import { useMemo, useState } from "react";
import {
  CheckCircle2,
  KeyRound,
  Mail,
  RefreshCw,
  Search,
  ShieldCheck,
  Webhook,
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

type IntegrationRequirement = {
  title: string;
  description: string;
  icon: typeof Mail;
};
const requirements: readonly IntegrationRequirement[] = [
  {
    title: "Provider connection and secret isolation",
    description:
      "No provider account, server-side API credential, region, rate limit, rotation, or revocation workflow is connected.",
    icon: KeyRound,
  },
  {
    title: "Sender and domain verification",
    description:
      "No sender identity, DNS record, ownership challenge, SPF, DKIM, DMARC, or verification result is loaded.",
    icon: Mail,
  },
  {
    title: "Webhook and delivery state",
    description:
      "No signed webhook, delivery event, bounce, complaint, retry, suppression update, or delivery status is configured.",
    icon: Webhook,
  },
  {
    title: "Monitoring and consent controls",
    description:
      "No consent policy, unsubscribe flow, privacy control, monitoring alert, audit event, incident runbook, or rollback is connected.",
    icon: ShieldCheck,
  },
];

export default function EmailIntegration() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Email integration is unavailable locally. No provider, credential, sender, webhook, delivery, or notification action was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(({ title, description }) =>
      `${title} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No provider, credential, sender, webhook, delivery, or notification action was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="email-integration-title"
    >
      <div data-ui-polish="batch-187" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Mail className="size-3.5" aria-hidden="true" />
                  Integration readiness
                </Badge>
                <Badge variant="secondary">Not connected</Badge>
              </div>
              <h1
                id="email-integration-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Email integration readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review provider connection, secret isolation, sender
                verification, webhooks, delivery, suppression, monitoring, and
                rotation contracts without claiming an active email integration.
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => unavailable("Integration refresh")}
            >
              <RefreshCw className="mr-2 size-4" aria-hidden="true" />
              Refresh unavailable
            </Button>
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
                No email provider is connected
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No provider account, API key, sender identity, DNS verification,
                webhook, suppression list, delivery result, or monitoring signal
                is loaded. This is a planning boundary, not a live integration
                console.
              </p>
            </div>
          </div>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Integration requirement map</CardTitle>
            <CardDescription>
              Search filters local readiness notes only and never inspects
              credentials, providers, sender domains, webhooks, recipients, or
              delivery data.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search email integration requirements"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search integration requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <Icon
                    className="mb-3 size-5 text-primary"
                    aria-hidden="true"
                  />
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
                  No integration notes match “{query}”.
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
                Production integration needs server-side secret isolation,
                sender and DNS verification, webhook authentication, consent and
                suppression controls, rate limits, bounce handling, monitoring,
                rotation and revocation, audit logs, rollback, and tested
                failure recovery.
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
