import { useMemo, useState } from "react";
import {
  BookOpenCheck,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Content ownership and version",
    area: "Content",
    description:
      "No tutorial, author, audience, locale, version, publication state, step sequence, or last-reviewed timestamp is connected.",
  },
  {
    title: "Progress and resume safety",
    area: "Progress",
    description:
      "No user, completion state, checkpoint, resume position, prerequisite, duplicate guard, or progress persistence is available.",
  },
  {
    title: "Accessibility and personalization",
    area: "Accessibility",
    description:
      "No accessible step labels, keyboard flow, reduced-motion behavior, language, reading level, personalization, or assistive-content policy exists.",
  },
  {
    title: "Privacy and analytics",
    area: "Privacy",
    description:
      "No consent purpose, event taxonomy, sensitive onboarding answer, retention, export, deletion, or analytics disclosure is available.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No start, continue, skip, complete, reset, save, personalize, dismiss, or onboarding-progress mutation is connected or persisted.",
  },
];
export default function OnboardingTutorial() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Onboarding content is unavailable locally. No tutorial, user profile, progress checkpoint, preference, or onboarding record was loaded or saved."
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
      `${action} is unavailable locally. No tutorial, user profile, progress, preference, privacy, or onboarding-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="onboarding-tutorial-title"
    >
      <div data-ui-polish="batch-197" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BookOpenCheck className="size-3.5" aria-hidden="true" />{" "}
                  Guided-onboarding readiness workspace
                </Badge>
                <Badge variant="secondary">No tutorial data</Badge>
              </div>
              <h1
                id="onboarding-tutorial-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                OnboardingTutorial readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review tutorial content ownership, step sequencing, progress
                safety, accessibility, personalization, privacy, analytics, and
                action boundaries without implying that onboarding content,
                profiles, preferences, or progress records exist.
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
                Onboarding content is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No tutorial catalog, content service, user profile, progress
                store, preference model, analytics layer, or persistence service
                is connected. This workspace cannot start, continue, skip,
                complete, reset, save, personalize, dismiss, or claim onboarding
                progress.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <BookOpenCheck
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No tutorial</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No tutorial, author, audience, locale, version, publication
                state, or step sequence is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Sparkles
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No progress</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No user, checkpoint, resume position, prerequisite, completion
                state, or onboarding preference exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No onboarding actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No start, continue, skip, complete, reset, save, personalize,
                dismiss, or progress mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Onboarding-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads tutorial content, records progress, personalizes guidance,
              or saves onboarding data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search OnboardingTutorial readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter onboarding requirements"
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
                  No onboarding requirements match “{query}”.
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
                Production onboarding requires versioned content ownership,
                bounded and resumable progress, accessible step navigation,
                localization and personalization rules, privacy and analytics
                disclosure, safe persistence, reset and deletion controls, and
                clear feedback for every action. No tutorial, profile, progress,
                preference, or onboarding record is claimed here.
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
