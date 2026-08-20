import { useMemo, useState } from "react";
import {
  Activity,
  CheckCircle2,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  UserRound,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Boundary = { title: string; area: string; description: string };
const boundaries: readonly Boundary[] = [
  {
    title: "Identity and patient scope",
    area: "Privacy",
    description:
      "No authenticated person, care relationship, organization, consent, age, location, or sensitive-health-data scope is loaded.",
  },
  {
    title: "Health data provenance",
    area: "Integrity",
    description:
      "No device, lab, clinical, wellness, medication, symptom, timestamp, unit, source, or validation record is connected.",
  },
  {
    title: "Metrics and interpretation",
    area: "Safety",
    description:
      "No trend, threshold, diagnosis, treatment recommendation, alert, risk score, or clinician interpretation is available.",
  },
  {
    title: "Security and access",
    area: "Governance",
    description:
      "No least-privilege role, encryption, audit log, retention, export, deletion, or support boundary is configured.",
  },
  {
    title: "Monitoring and recovery",
    area: "Operations",
    description:
      "No sync, device connection, stale-data check, error state, incident workflow, notification, or recovery contract exists.",
  },
];
export default function HealthDashboard() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Health Dashboard is unavailable locally. No health data, patient scope, interpretation, or mutation was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No health data, alert, profile, notification, or mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="health-dashboard-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Activity className="size-3.5" aria-hidden="true" />{" "}
                  Health-data readiness
                </Badge>
                <Badge variant="secondary">No health-data service</Badge>
              </div>
              <h1
                id="health-dashboard-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Health Dashboard readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the identity, provenance, privacy, security, and
                interpretation contracts required for a trustworthy health
                dashboard without implying that health data, patients, or
                clinical conclusions exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Health-data service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated health scope, device or clinical source,
                privacy policy, secure storage, interpretation process, or
                persistence layer is connected. This is a readiness workspace,
                not a medical dashboard.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <UserRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No patient scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No person, care relationship, consent, profile, or
                sensitive-health-data scope is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No data provenance</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No device, lab, wellness, medication, timestamp, unit, source,
                or validation record exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No interpretation</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No trend, diagnosis, treatment, alert, risk score, or clinical
                conclusion is presented.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Health-dashboard governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never loads
              health data, connects a device, evaluates a metric, or saves a
              profile or alert.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search health dashboard readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter health-data requirements"
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
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No health-data notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production health dashboard needs consented and authenticated
                scope, source provenance, data quality and units, secure
                storage, access controls, privacy review, clinical safety
                boundaries, stale-data handling, notifications, observability,
                and tested recovery. This screen is not medical advice.
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
