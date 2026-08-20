import { useMemo, useState } from "react";
import {
  Activity,
  AlertTriangle,
  FileSearch,
  HeartPulse,
  LockKeyhole,
  Search,
  ShieldCheck,
  Stethoscope,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Self-report provenance and consent",
    area: "Data",
    description:
      "No mood entry, author, timestamp, prompt, scale, context, consent, source, or correction history is connected.",
  },
  {
    title: "Privacy and sensitive wellbeing data",
    area: "Privacy",
    description:
      "No visibility rule, encryption boundary, retention, export, deletion, sharing, research use, or sensitive-data access audit is verified.",
  },
  {
    title: "Trend semantics and clinical boundary",
    area: "Interpretation",
    description:
      "No trend, score, baseline, correlation, diagnosis, prediction, recommendation, or clinical conclusion can be calculated or claimed.",
  },
  {
    title: "Safety and urgent-support boundary",
    area: "Safety",
    description:
      "No risk signal, crisis assessment, clinician relationship, emergency location, escalation workflow, or support contact is connected.",
  },
  {
    title: "Accessibility and reliable logging",
    area: "UX",
    description:
      "No keyboard path, screen-reader announcement, accessible scale, timezone rule, offline behavior, retry, validation, or error recovery is tested.",
  },
];
export default function MoodTracker() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Mood tracking is unavailable locally. No wellbeing entry, trend, account, consent, safety signal, or health record was loaded or saved."
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
      `${action} is unavailable locally. No wellbeing entry, trend, account, consent, safety, privacy, or health-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="mood-tracker-title"
    >
      <div data-ui-polish="batch-196" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <HeartPulse className="size-3.5" aria-hidden="true" />{" "}
                  Wellbeing-readiness workspace
                </Badge>
                <Badge variant="secondary">No wellbeing data</Badge>
              </div>
              <h1
                id="mood-tracker-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MoodTracker readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review self-report provenance, consent, privacy, trend
                semantics, clinical boundaries, urgent-support handling,
                accessibility, and reliable logging without implying that mood
                entries, scores, trends, diagnoses, or health records exist.
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
                Mood tracking is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No wellbeing data source, consent manager, privacy store, trend
                engine, clinical-safety boundary, urgent-support workflow, or
                persistence layer is connected. This workspace cannot log,
                interpret, diagnose, predict, recommend, or claim a mood state.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Activity
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No wellbeing entries</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No mood, note, scale, prompt, context, timestamp, author,
                consent, or correction record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Stethoscope
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No interpretation</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No score, trend, baseline, correlation, diagnosis, prediction,
                recommendation, or clinical conclusion exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No wellbeing actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No log, edit, share, export, delete, alert, escalation, or
                health-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Wellbeing-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              reads health data, logs a mood, calculates a trend, gives clinical
              advice, or saves a wellbeing record.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search mood tracker readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter wellbeing requirements"
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
                  No wellbeing notes match “{query}”.
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
                Production wellbeing features require informed consent, private
                and user-controlled data handling, clearly defined
                non-diagnostic semantics, accessible and reliable entry, secure
                retention and deletion, and a separate urgent-support pathway.
                If someone may be in immediate danger, contact local emergency
                services or a trusted crisis resource. No mood, trend,
                diagnosis, safety, or health record is claimed here.
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
