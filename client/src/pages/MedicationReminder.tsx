import { useMemo, useState } from "react";
import {
  AlertTriangle,
  BellOff,
  ClipboardCheck,
  LockKeyhole,
  Search,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Medication source and identity",
    area: "Safety",
    description:
      "No medicine name, strength, formulation, prescriber, pharmacy, indication, start date, expiration, or verified source is connected.",
  },
  {
    title: "Schedule and dose verification",
    area: "Clinical",
    description:
      "No dose, route, timing, frequency, taper, as-needed instruction, refill date, or clinician-confirmed schedule is available.",
  },
  {
    title: "Reminder delivery and adherence",
    area: "Operations",
    description:
      "No reminder, acknowledgment, missed-dose state, snooze, caregiver notification, adherence record, or notification channel is configured.",
  },
  {
    title: "Interactions and contraindications",
    area: "Safety",
    description:
      "No allergy, pregnancy, condition, medication list, interaction checker, contraindication review, or emergency escalation is available.",
  },
  {
    title: "Privacy, consent, and audit",
    area: "Governance",
    description:
      "No consent, household or caregiver role, encryption boundary, retention, access log, export, correction, or deletion policy is verified.",
  },
];
export default function MedicationReminder() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Medication reminder service is unavailable locally. No medicine, schedule, reminder, adherence, or health record was loaded or saved."
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
      `${action} is unavailable locally. No medication, dose, schedule, reminder, adherence, health, or notification data was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="medication-reminder-title"
    >
      <div data-ui-polish="batch-195" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BellOff className="size-3.5" aria-hidden="true" />{" "}
                  Medication-safety readiness
                </Badge>
                <Badge variant="secondary">Not configured</Badge>
              </div>
              <h1
                id="medication-reminder-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MedicationReminder readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review medication identity, schedule verification, reminders,
                adherence, interactions, consent, privacy, and escalation
                requirements without implying that a medicine list, reminder
                plan, or clinical record exists.
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
                Reminder service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No medication source, verified schedule, reminder delivery,
                adherence service, interaction review, clinician workflow,
                caregiver channel, or health-data store is connected. Do not use
                this screen to start, stop, change, or skip a medication.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <ClipboardCheck
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No medication records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No medicine, dose, route, prescriber, pharmacy, allergy,
                condition, or refill record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <BellOff
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No reminders</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No reminder, acknowledgment, missed-dose, snooze, caregiver, or
                notification state is configured.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Stethoscope
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No clinical advice</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                This workspace cannot assess interactions, contraindications,
                dosing, symptoms, or urgent-care needs.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Medication-safety requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              creates a medicine, dose, reminder, adherence entry, notification,
              clinical decision, or health-data record.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search medication reminder readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter medication-safety requirements"
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
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No medication-safety notes match “{query}”.
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
              <h2 className="font-semibold">Safety boundary</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                For medication questions, missed doses, side effects, possible
                interactions, or urgent symptoms, use the instructions from a
                licensed clinician or pharmacist and contact local emergency
                services when appropriate. No medical decision, dose change,
                reminder, adherence record, or health-data mutation is performed
                here.
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
