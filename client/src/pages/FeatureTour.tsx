import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Compass,
  Map,
  Search,
  ShieldCheck,
  Sparkles,
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

type TourBoundary = { title: string; area: string; description: string };
const boundaries: readonly TourBoundary[] = [
  {
    title: "Tour steps and destinations",
    area: "Content",
    description:
      "No tour step, product destination, instructional copy, media asset, prerequisite, or sequence is loaded.",
  },
  {
    title: "Progress and completion",
    area: "State",
    description:
      "No user progress, completed step, resume point, dismissal, preference, or onboarding status is connected.",
  },
  {
    title: "Navigation and deep links",
    area: "Experience",
    description:
      "No route transition, deep link, focus target, contextual highlight, or return behavior can run.",
  },
  {
    title: "Audience and accessibility",
    area: "Controls",
    description:
      "No audience rule, rollout version, reduced-motion preference, keyboard pathway, localization, or analytics event is configured.",
  },
];

export default function FeatureTour() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Feature tour is unavailable locally. No tour, navigation, progress, dismissal, or onboarding mutation was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No tour, navigation, progress, dismissal, or onboarding mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="feature-tour-title"
    >
      <div data-ui-polish="batch-189" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Compass className="size-3.5" aria-hidden="true" />
                  Onboarding readiness
                </Badge>
                <Badge variant="secondary">No tour service</Badge>
              </div>
              <h1
                id="feature-tour-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Feature tour readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful tour content, navigation, progress,
                accessibility, rollout, and localization contracts without
                presenting invented onboarding steps or changing a user’s
                completion state.
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
                Feature tour service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No onboarding configuration, route map, progress store, audience
                rule, accessibility setting, localization pipeline, or analytics
                channel is connected. This is a planning boundary, not a live
                guided tour.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Feature tour status"
        >
          <Card>
            <CardContent className="p-5">
              <Map className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No tour steps loaded</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No destinations, instructional copy, assets, prerequisites,
                sequence, or feature highlights are presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Waypoints
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No progress tracked</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No completion, resume point, dismissal, preference, or
                onboarding state is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Sparkles
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No navigation actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No route transition, deep link, focus target, contextual
                highlight, or return behavior can run.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Feature tour readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects user
              progress, routes, onboarding state, preferences, or analytics
              storage.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search feature tour readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search tour requirements"
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
                  No tour notes match “{query}”.
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
                A production feature tour needs versioned step content, safe
                route transitions, focus management, reduced-motion support,
                completion persistence, resumability, dismissal semantics,
                localization, audience rollout controls, privacy-aware
                analytics, and reliable fallback behavior.
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
