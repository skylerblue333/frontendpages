import { useMemo, useState } from "react";
import {
  BellRing,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Settings ownership and scope",
    area: "Integrity",
    description:
      "No account owner, device, workspace, category, channel, locale, timezone, or last-updated timestamp is connected.",
  },
  {
    title: "Consent and privacy controls",
    area: "Privacy",
    description:
      "No consent purpose, permission, sensitive-content rule, quiet hours, retention, unsubscribe, export, or deletion control is available.",
  },
  {
    title: "Channel and delivery semantics",
    area: "Delivery",
    description:
      "No email, push, SMS, in-app, webhook, fallback, priority, frequency, digest, or delivery-failure policy is defined.",
  },
  {
    title: "Validation and user feedback",
    area: "Reliability",
    description:
      "No effective-value validation, conflict rule, rollback, audit event, version, error state, or confirmation state exists.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No enable, disable, subscribe, unsubscribe, mute, schedule, save, reset, export, or preference mutation is connected or persisted.",
  },
];
export default function NotificationSettings() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Notification settings are unavailable locally. No account, channel, consent, quiet-hours, subscription, or settings records were loaded or saved."
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
      `${action} is unavailable locally. No account, channel, consent, subscription, privacy, or notification-preference mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="notification-preferences-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BellRing className="size-3.5" aria-hidden="true" />{" "}
                  Preference-readiness workspace
                </Badge>
                <Badge variant="secondary">No settings data</Badge>
              </div>
              <h1
                id="notification-preferences-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                NotificationSettings readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review settings ownership, consent, privacy, channels, delivery
                semantics, validation, feedback, and action boundaries without
                implying that accounts, subscriptions, or notification settings
                exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Notification settings are unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No account settings store, consent service, channel provider,
                permission model, validation layer, or persistence layer is
                connected. This workspace cannot enable, disable, subscribe,
                unsubscribe, mute, schedule, save, reset, export, or claim
                preferences.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <BellRing
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No settings owner</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No account, device, workspace, category, channel, locale,
                timezone, or settings record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No delivery state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No channel, fallback, priority, frequency, digest, consent,
                quiet-hours, or failure policy exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No settings actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No enable, disable, subscribe, unsubscribe, mute, schedule,
                save, reset, export, or mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Settings-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              connects settings, changes consent, updates channels, or saves
              settings records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search NotificationSettings readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter settings requirements"
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
                  No settings requirements match “{query}”.
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
                Production preferences require authenticated ownership, explicit
                consent and permissions, channel semantics, quiet-hours and
                retention rules, validated effective values, versioned
                persistence, audit history, reversible changes, and clear
                confirmation or failure feedback. No account, channel, consent,
                subscription, or settings record is claimed here.
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
