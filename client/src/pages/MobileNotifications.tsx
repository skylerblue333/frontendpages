import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Bell,
  CheckCheck,
  FileSearch,
  LockKeyhole,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Event source and message provenance",
    area: "Content",
    description:
      "No event, actor, message, timestamp, deep link, priority, template, locale, or source system is connected.",
  },
  {
    title: "Permission and delivery channels",
    area: "Delivery",
    description:
      "No device token, permission state, push provider, in-app channel, email, SMS, digest, retry, or delivery receipt is available.",
  },
  {
    title: "Read, unread, and preference semantics",
    area: "State",
    description:
      "No unread count, read receipt, archive, mute, category preference, quiet hours, expiration, or duplicate-suppression rule is configured.",
  },
  {
    title: "Privacy and security",
    area: "Governance",
    description:
      "No consent, token boundary, sensitive-content rule, data minimization, retention, deletion, access log, or revocation workflow is verified.",
  },
  {
    title: "Accessibility and reliability",
    area: "Quality",
    description:
      "No screen-reader announcement, focus behavior, reduced-motion treatment, offline queue, failure state, retry, incident, or recovery evidence exists.",
  },
];
export default function MobileNotifications() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Mobile notifications are unavailable locally. No event, message, device token, unread state, preference, delivery receipt, or notification record was loaded or saved."
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
      `${action} is unavailable locally. No event, message, device token, unread state, preference, delivery, privacy, or notification-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="mobile-notifications-title"
    >
      <div data-ui-polish="batch-195" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Bell className="size-3.5" aria-hidden="true" />{" "}
                  Notification-readiness workspace
                </Badge>
                <Badge variant="secondary">No notification feed</Badge>
              </div>
              <h1
                id="mobile-notifications-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MobileNotifications readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review event provenance, delivery permissions, notification
                channels, read and preference semantics, privacy, accessibility,
                reliability, and recovery without implying that messages, unread
                counts, device tokens, or delivery receipts exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Notification service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No event source, push provider, device-token service, in-app
                feed, email or SMS channel, preference store, privacy boundary,
                or persistence layer is connected. This workspace cannot send,
                mark, archive, mute, or claim a notification.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Send className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No delivery records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No event, message, device token, provider, channel, permission,
                receipt, retry, or deep link is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <CheckCheck
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No read state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No unread count, read receipt, archive, mute, preference, quiet
                hours, or expiration state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No notification actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No send, read, archive, mute, retry, subscribe, unsubscribe, or
                notification-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Notification-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              sends a message, reads a device token, changes a preference, marks
              an item read, or saves notification data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search mobile notification readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter notification requirements"
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
                    <FileSearch className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
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
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Production notifications require authoritative event sources,
                permission-aware delivery, device-token security, read and
                preference semantics, duplicate suppression, privacy and
                sensitive-content controls, accessibility, offline and retry
                behavior, and auditable delivery history. No event, message,
                token, unread state, preference, delivery, or notification
                record is claimed here.
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
