import { useMemo, useState } from "react";
import {
  CheckCircle2,
  KeyRound,
  Mail,
  Search,
  Server,
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

type ConfigRequirement = {
  title: string;
  description: string;
  icon: typeof Mail;
};
const requirements: readonly ConfigRequirement[] = [
  {
    title: "Provider and credentials",
    description:
      "No email provider account, API credential, secret, region, rate limit, or queue is connected.",
    icon: KeyRound,
  },
  {
    title: "Sender identity and DNS",
    description:
      "No sender domain, SPF, DKIM, DMARC, verification challenge, or ownership result is available.",
    icon: Server,
  },
  {
    title: "Webhooks and delivery",
    description:
      "No webhook signature, delivery event, bounce, complaint, retry, or suppression update is configured.",
    icon: Webhook,
  },
  {
    title: "Privacy and operational controls",
    description:
      "No consent policy, unsubscribe flow, data retention, audit event, incident runbook, or rollback is connected.",
    icon: ShieldCheck,
  },
];

export default function EmailConfiguration() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Email configuration is unavailable locally. No provider, credential, sender, DNS, webhook, or delivery action was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(({ title, description }) =>
      `${title} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No provider, credential, sender, DNS, webhook, or delivery action was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="email-configuration-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Mail className="size-3.5" aria-hidden="true" />
                  Email readiness
                </Badge>
                <Badge variant="secondary">Not configured</Badge>
              </div>
              <h1
                id="email-configuration-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Email configuration readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review provider, sender, DNS, webhook, suppression, privacy, and
                delivery contracts without claiming that email infrastructure or
                credentials are connected.
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => unavailable("Configuration refresh")}
            >
              Refresh unavailable
            </Button>
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                No email provider is connected
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No account, API key, sender identity, DNS verification, webhook,
                suppression list, or delivery result is loaded. This page is a
                planning boundary, not a credential or send console.
              </p>
            </div>
          </div>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Configuration requirement map</CardTitle>
            <CardDescription>
              Search filters local readiness notes only and never inspects
              credentials, providers, DNS, recipients, webhooks, or delivery
              data.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search email configuration notes"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search configuration requirements"
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
                  No configuration notes match “{query}”.
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
                Production email configuration needs secret isolation, sender
                verification, DNS review, webhook authentication, consent and
                unsubscribe controls, rate limits, bounce handling, audit logs,
                privacy safeguards, and tested failure recovery.
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
