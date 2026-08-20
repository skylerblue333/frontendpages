import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Compass,
  KeyRound,
  Search,
  ServerOff,
  ShieldCheck,
  UserRound,
  XCircle,
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

type OnboardingBoundary = { title: string; area: string; description: string };
const boundaries: readonly OnboardingBoundary[] = [
  {
    title: "Account identity and profile setup",
    area: "Identity",
    description:
      "No account, profile, role, organization, verification status, recovery method, or onboarding progress is loaded.",
  },
  {
    title: "Connected services and feature readiness",
    area: "Services",
    description:
      "No wallet, AI provider, education enrollment, notifications, data source, or feature entitlement is connected.",
  },
  {
    title: "Privacy, security, and consent",
    area: "Safety",
    description:
      "No privacy choice, security setting, consent record, device scope, age control, or data-use explanation is available.",
  },
  {
    title: "Checklist persistence and support",
    area: "Operations",
    description:
      "No completed step, saved checklist, resume point, help request, telemetry, audit event, or support handoff exists.",
  },
];

export default function GettingStartedGuide() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Getting started is unavailable locally. No account, setup step, connected service, completion state, or onboarding mutation was saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No account, setup step, connected service, completion state, or onboarding mutation was saved.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="guide-title"
    >
      <div data-ui-polish="batch-191" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Compass className="size-3.5" aria-hidden="true" />
                  Onboarding readiness
                </Badge>
                <Badge variant="secondary">No onboarding service</Badge>
              </div>
              <h1
                id="guide-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Getting started readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review account setup, connected services, privacy, security,
                support, and checklist persistence boundaries without implying
                that onboarding is complete or account-scoped.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
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
                Onboarding service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated identity, setup catalog, connected-service
                checks, consent flow, persistence, or support stream is
                connected. This is a planning boundary, not a completed setup
                guide.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Getting started status"
        >
          <Card>
            <CardContent className="p-5">
              <UserRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No account scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No account, profile, role, organization, verification status,
                recovery method, or progress is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <ServerOff
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No service readiness</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No wallet, AI provider, education enrollment, notifications,
                data source, or feature entitlement can be checked.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No saved checklist</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No completed step, resume point, support request, telemetry,
                audit event, or onboarding mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Onboarding-readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never loads account
              progress, starts setup, connects services, changes consent, or
              saves a checklist.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search getting started readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search onboarding requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(({ title, area, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/70 p-5"
                >
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
                    onClick={() => unavailable(`Review ${title}`)}
                  >
                    <KeyRound className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No onboarding notes match “{query}”.
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
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production guide needs authenticated scope, versioned setup
                steps, explicit service readiness contracts, privacy and
                security defaults, accessible progress states, consent
                semantics, persistence and resume behavior, support handoff, and
                tested recovery.
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
