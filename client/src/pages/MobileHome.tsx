import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Bell,
  Compass,
  FileSearch,
  Home,
  LockKeyhole,
  Search,
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
    title: "Navigation and destination registry",
    area: "Navigation",
    description:
      "No authenticated route registry, destination metadata, feature availability, deep-link target, or navigation history is connected.",
  },
  {
    title: "Account context and personalization",
    area: "Context",
    description:
      "No account, profile, settings, role, preferences, recent activity, saved shortcut, or personalized recommendation is loaded.",
  },
  {
    title: "Offline, loading, and recovery states",
    area: "Reliability",
    description:
      "No connectivity status, cache, sync queue, loading contract, stale-data policy, retry, or recovery state is verified.",
  },
  {
    title: "Notifications and accessibility",
    area: "UX",
    description:
      "No unread count, notification channel, preference, reduced-motion setting, screen-reader label, keyboard path, or focus restoration policy is configured.",
  },
  {
    title: "Privacy and security",
    area: "Governance",
    description:
      "No session boundary, authorization, data minimization, retention, export, deletion, telemetry consent, or access audit is verified.",
  },
];
export default function MobileHome() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Mobile home is unavailable locally. No account, route, notification, preference, activity, or personalized home data was loaded or saved."
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
      `${action} is unavailable locally. No account, route, navigation, notification, preference, activity, or home-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="mobile-home-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Home className="size-3.5" aria-hidden="true" /> Mobile-home
                  readiness
                </Badge>
                <Badge variant="secondary">No home data</Badge>
              </div>
              <h1
                id="mobile-home-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MobileHome readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review mobile navigation, account context, personalization,
                offline behavior, notifications, accessibility, privacy, and
                recovery without implying that a session, route registry, unread
                count, or personalized home exists.
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
                Mobile home is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No session, navigation registry, account context,
                personalization service, notification source, offline cache,
                accessibility preference store, or persistence layer is
                connected. This workspace cannot claim to be a personalized home
                screen.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Compass
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No destinations</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No route registry, feature availability, deep link, shortcut,
                recent activity, or navigation history is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Bell className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No notifications</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No unread count, notification channel, preference, delivery,
                retry, or sync state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Smartphone
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No home actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No navigation, save, personalize, configure, refresh, sync, or
                home-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Mobile-home requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              opens a destination, reads account data, sends a notification,
              changes preferences, or saves home state.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search mobile home readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter mobile-home requirements"
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
                  No mobile-home notes match “{query}”.
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
                Production mobile home requires a verified route registry,
                session and authorization boundaries, account-aware navigation,
                truthful availability, notification delivery, offline and
                recovery behavior, accessibility, privacy, telemetry consent,
                and tested deep links. No account, route, notification,
                preference, activity, or home record is claimed here.
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
