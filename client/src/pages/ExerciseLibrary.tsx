import { useMemo, useState } from "react";
import {
  Accessibility,
  CheckCircle2,
  Dumbbell,
  Library,
  Search,
  ShieldCheck,
  Video,
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

type LibraryBoundary = { title: string; area: string; description: string };
const boundaries: readonly LibraryBoundary[] = [
  {
    title: "Exercise and video catalog",
    area: "Content",
    description:
      "No exercise, instructor, video, duration, equipment, intensity, license, or content metadata is loaded.",
  },
  {
    title: "Programs and safety guidance",
    area: "Safety",
    description:
      "No workout plan, recommendation, medical guidance, injury modification, progression, or suitability assessment is available.",
  },
  {
    title: "Saved activity and progress",
    area: "Personal data",
    description:
      "No favorites, history, completion state, streak, calories, biometrics, goals, or personal activity record is connected.",
  },
  {
    title: "Media and provider delivery",
    area: "Integrations",
    description:
      "No media storage, streaming provider, upload, playback entitlement, subscription, analytics, or external sync is configured.",
  },
];

export default function ExerciseLibrary() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Exercise content is unavailable locally. No workout, video, progress, health, or media mutation was started."
  );
  const visibleBoundaries = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(normalizedQuery)
    );
  }, [query]);
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No workout, video, progress, health, or media mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="exercise-library-title"
    >
      <div data-ui-polish="batch-188" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Library className="size-3.5" aria-hidden="true" />
                  Wellness content readiness
                </Badge>
                <Badge variant="secondary">No exercise catalog</Badge>
              </div>
              <h1
                id="exercise-library-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Exercise library readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful content, safety, accessibility, personal-data,
                and media-delivery contracts without presenting invented
                workouts, health guidance, videos, or progress.
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
                Exercise library service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No content catalog, media provider, wellness data store,
                health-safety review, accessibility metadata, progress service,
                or external sync is connected. This is a planning boundary, not
                a workout player or medical recommendation tool.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Exercise library status"
        >
          <Card>
            <CardContent className="p-5">
              <Video className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No videos loaded</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No exercise media, instructor, duration, equipment, or playback
                entitlement is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Dumbbell
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No plans prescribed</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No program, progression, personalized recommendation, calorie
                estimate, or health claim is generated.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Accessibility
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">Safety review required</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No suitability, injury modification, accessibility, or clinical
                review state is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Exercise library readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              workouts, videos, activity history, biometrics, or provider
              storage.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search exercise library readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search exercise requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visibleBoundaries.map(({ title, area, description }) => (
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
                    onClick={() => announceUnavailable(`Manage ${title}`)}
                  >
                    Manage unavailable
                  </Button>
                </div>
              ))}
              {visibleBoundaries.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No exercise notes match “{query}”.
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
                A production exercise library needs licensed content, accessible
                captions and controls, creator attribution, safety and health
                review, clear non-medical boundaries, age and suitability
                safeguards, secure media delivery, privacy controls for activity
                data, consent, progress correctness, and reliable
                deletion/export behavior.
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
