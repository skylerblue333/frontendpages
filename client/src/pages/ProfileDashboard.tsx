import { useMemo, useState } from "react";
import {
  Activity,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  UserRound,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Identity, profile, and activity provenance",
    area: "Evidence",
    description:
      "No authenticated identity, profile field, activity event, source, timestamp, ownership, or account record is connected.",
  },
  {
    title: "Metrics, calculations, and freshness",
    area: "Method",
    description:
      "No statistic, count, completion value, contribution metric, calculation definition, source, observation time, or freshness state is verified.",
  },
  {
    title: "Privacy, visibility, and authorization",
    area: "Controls",
    description:
      "No audience, consent, sensitive-data classification, role, ownership check, session, or sharing boundary exists.",
  },
  {
    title: "Loading, errors, and operational recovery",
    area: "Reliability",
    description:
      "No data request, retry, partial state, correction workflow, audit event, support trace, or recovery path is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No edit, refresh, share, export, follow, save, delete, or profile, activity, metric, or personal-data mutation is connected or persisted.",
  },
];
export default function ProfileDashboard() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Profile Dashboard is unavailable locally. No identity, profile, activity, statistic, metric, audience, consent, or personal-data record was loaded or changed."
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
      `${action} is unavailable locally. No identity, profile, activity, metric, privacy, authorization, or personal-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="profile-dashboard-title"
    >
      <div data-ui-polish="batch-199" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <UserRound className="size-3.5" aria-hidden="true" />{" "}
                  Profile-dashboard readiness workspace
                </Badge>
                <Badge variant="secondary">No profile data</Badge>
              </div>
              <h1
                id="profile-dashboard-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                ProfileDashboard readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review identity and profile provenance, activity and metric
                calculations, privacy and visibility, authorization, freshness,
                recovery, and persistence boundaries without implying that an
                account, user statistic, activity stream, or personal-data
                record exists.
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
                Profile Dashboard is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No identity service, profile source, activity feed, metric
                pipeline, privacy manager, authorization control, error recovery
                path, or persistence layer is connected. This workspace cannot
                edit, refresh, share, export, follow, save, delete, or claim
                profile activity or statistics.
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
              <h2 className="font-semibold">No profile state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No identity, profile field, activity event, ownership, source,
                timestamp, or account record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Activity
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No metrics state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No count, completion value, contribution, calculation,
                observation time, or freshness state is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No dashboard actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No edit, refresh, share, export, follow, save, delete, or
                profile mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Profile-dashboard governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads profile data, calculates metrics, refreshes activity, or
              saves dashboard records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search ProfileDashboard readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter dashboard requirements"
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
                  No dashboard requirements match “{query}”.
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
                Production profile dashboards require authenticated identity and
                ownership, sourced profile and activity data, defined metric
                calculations and freshness, privacy and visibility controls,
                role authorization, loading and error recovery, audit history,
                and clear user-facing explanations for every statistic. No
                identity, profile, activity, metric, audience, consent, or
                personal-data record is claimed here.
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
