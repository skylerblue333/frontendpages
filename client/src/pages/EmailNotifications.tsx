import { useMemo, useState } from "react";
import { Bell, CheckCircle2, Mail, Search, ShieldCheck } from "lucide-react";

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

type NotificationRequirement = { title: string; description: string };
const requirements: readonly NotificationRequirement[] = [
  {
    title: "Event routing and consent",
    description:
      "No event source, user consent, subscription preference, lawful purpose, or notification policy is connected.",
  },
  {
    title: "Delivery and suppression",
    description:
      "No email provider, delivery state, bounce, complaint, unsubscribe, suppression list, or retry status is loaded.",
  },
  {
    title: "Quiet hours and privacy",
    description:
      "No timezone, quiet-hours preference, sensitive-content rule, retention policy, or privacy setting is available.",
  },
  {
    title: "Audit and recovery",
    description:
      "No notification log, template version, deduplication key, incident trail, monitoring alert, or rollback path is connected.",
  },
];

export default function EmailNotifications() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Notification service is unavailable locally. No preference, message, delivery, or subscription mutation was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(({ title, description }) =>
      `${title} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No preference, message, delivery, or subscription mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="email-notifications-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Bell className="size-3.5" aria-hidden="true" />
                  Notification readiness
                </Badge>
                <Badge variant="secondary">Not connected</Badge>
              </div>
              <h1
                id="email-notifications-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Email notification readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review event routing, consent, delivery, suppression, quiet
                hours, privacy, auditing, and recovery without claiming that
                notification preferences or messages are active.
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => unavailable("Notification refresh")}
            >
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
                No notification service is connected
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No account preference, event source, provider, recipient,
                template, message, delivery result, or subscription record is
                loaded. This page is a planning boundary, not a live preference
                center.
              </p>
            </div>
          </div>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Notification requirement map</CardTitle>
            <CardDescription>
              Search filters local readiness notes only and never inspects
              preferences, recipients, providers, messages, or delivery data.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search notification requirements"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search notification requirements"
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
                  <Mail
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
                  No notification notes match “{query}”.
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
                Production notifications need explicit consent, event
                authorization, server-side preference controls, unsubscribe and
                suppression handling, quiet-hours logic, privacy safeguards,
                delivery observability, deduplication, audit logs, and tested
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
