import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileText,
  Mail,
  Search,
  Send,
  ShieldCheck,
  UsersRound,
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

type CampaignRequirement = {
  title: string;
  area: string;
  description: string;
  icon: typeof Mail;
};

const campaignRequirements: readonly CampaignRequirement[] = [
  {
    title: "Sender identity and provider",
    area: "Delivery",
    description:
      "No verified sender domain, provider account, API credential, rate limit, queue, or delivery contract is connected.",
    icon: Mail,
  },
  {
    title: "Consent and suppression",
    area: "Compliance",
    description:
      "No audience, consent record, unsubscribe state, suppression list, bounce record, or lawful-purpose policy is loaded.",
    icon: UsersRound,
  },
  {
    title: "Template and content review",
    area: "Content",
    description:
      "No campaign template, personalization data, content approval, link scan, rendering test, or moderation review is available.",
    icon: FileText,
  },
  {
    title: "Reporting and rollback",
    area: "Operations",
    description:
      "No send result, open or click metric, bounce status, complaint event, incident record, or rollback path is connected.",
    icon: ShieldCheck,
  },
];

export default function EmailCampaigns() {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("");
  const [status, setStatus] = useState(
    "Email campaign service is unavailable locally. No recipient, provider, send, notification, or reporting action was started."
  );
  const visibleRequirements = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return campaignRequirements.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(normalizedQuery)
    );
  }, [query]);
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No recipient, provider, send, notification, or reporting action was started.`
    );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="email-campaigns-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <Mail className="size-3.5" aria-hidden="true" />
                  Campaign readiness
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="email-campaigns-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Email campaign readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  Review the sender, audience, consent, content, delivery,
                  compliance, reporting, and rollback contracts required before
                  an email campaign can safely send.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => announceUnavailable("Campaign service refresh")}
            >
              Refresh unavailable
            </Button>
          </div>
        </header>

        <section
          className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
          aria-labelledby="campaign-boundary-title"
        >
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2
                id="campaign-boundary-title"
                className="font-semibold text-amber-100"
              >
                Email campaign service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No sender identity, provider, audience, consent list,
                suppression state, template, message queue, delivery result, or
                reporting data is connected. This page is a planning boundary,
                not a send console.
              </p>
            </div>
          </div>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Local campaign planning</CardTitle>
            <CardDescription>
              Draft a subject locally for review only. No recipient is selected,
              no content is sent, and no campaign is persisted.
            </CardDescription>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Input
                aria-label="Campaign subject draft"
                value={subject}
                onChange={event => {
                  setSubject(event.target.value);
                  setStatus(
                    "Local subject intent updated. No recipient or email send was started."
                  );
                }}
                placeholder="Campaign subject (local intent only)"
              />
              <Button
                type="button"
                onClick={() => announceUnavailable("Email send")}
              >
                <Send className="mr-2 size-4" aria-hidden="true" />
                Send unavailable
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl border border-dashed border-border p-5 text-sm leading-6 text-muted-foreground">
              <p className="font-medium text-foreground">
                Current local subject intent
              </p>
              <p className="mt-1 break-words">
                {subject.trim() || "No subject entered."}
              </p>
              <p className="mt-3">
                This local field does not select an audience, verify consent,
                create a queue, or claim delivery.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Campaign requirement map</CardTitle>
            <CardDescription>
              Search filters static readiness notes only. It does not inspect
              contacts, consent, suppression, provider delivery, or campaign
              analytics.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search campaign requirements"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search campaign requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visibleRequirements.map(
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
              {visibleRequirements.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No campaign notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Campaign evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production campaign program needs verified sender identity,
                explicit consent, suppression and unsubscribe handling, template
                approval, provider isolation, rate limits, bounce and complaint
                handling, privacy controls, delivery observability, rollback,
                audit logs, and tests for duplicate or accidental sends.
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
