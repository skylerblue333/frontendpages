import { useMemo, useState } from "react";
import {
  AlertTriangle,
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
    title: "Reported user and incident provenance",
    area: "Evidence",
    description:
      "No user identity, account, profile, incident, evidence attachment, source, timestamp, relationship, or report record is connected.",
  },
  {
    title: "Policy, severity, and moderation routing",
    area: "Method",
    description:
      "No report category, policy rule, severity, triage queue, reviewer role, SLA, enforcement action, or moderation decision is verified.",
  },
  {
    title: "Reporter privacy and authorization",
    area: "Controls",
    description:
      "No reporter identity, anonymity choice, consent, audience, subject access rule, sensitive-data boundary, or permission decision exists.",
  },
  {
    title: "Abuse prevention, appeals, and recovery",
    area: "Reliability",
    description:
      "No duplicate-report guard, rate limit, retaliation protection, false-report handling, appeal, correction, retry, audit event, or support path is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No select user, attach, submit, cancel, update, withdraw, escalate, appeal, export, share, delete, or report, identity, account, or personal-data mutation is connected or persisted.",
  },
];
export default function ReportUser() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Report User is unavailable locally. No user identity, reporter, incident, evidence, category, report, moderation decision, account, or personal-data record was loaded or changed."
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
      `${action} is unavailable locally. No user report, evidence, moderation, appeal, identity, account, or personal-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="report-user-title"
    >
      <div data-ui-polish="batch-200" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <AlertTriangle className="size-3.5" aria-hidden="true" />{" "}
                  User-reporting readiness workspace
                </Badge>
                <Badge variant="secondary">No user report state</Badge>
              </div>
              <h1
                id="report-user-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                ReportUser readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review reported-user and incident provenance, policy and
                moderation routing, reporter privacy, authorization, abuse
                prevention, appeals, recovery, and persistence boundaries
                without implying that user identities, reports, evidence, or
                enforcement outcomes exist.
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
                Report User is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No user directory, reporting policy, evidence store, moderation
                queue, reporter privacy control, authorization policy,
                abuse-prevention layer, appeal path, or persistence layer is
                connected. This workspace cannot select a user, attach, submit,
                cancel, update, withdraw, escalate, appeal, export, share, or
                claim a report.
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
              <h2 className="font-semibold">No user state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No identity, account, profile, incident, evidence, source,
                timestamp, relationship, or report record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <AlertTriangle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No enforcement state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No category, severity, policy, triage, reviewer, SLA,
                enforcement, or moderation decision exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No user-report actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No select, attach, submit, cancel, update, withdraw, escalate,
                appeal, export, share, or report mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>User-reporting governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads users, exposes identities, accepts evidence, routes
              moderation, or saves report records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search ReportUser readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter user-reporting requirements"
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
                  No user-reporting requirements match “{query}”.
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
                Production user reporting requires authoritative identity and
                incident sources, clear policy categories and severity, trained
                moderation routing, reporter anonymity and privacy controls,
                authorization, abuse and retaliation safeguards, duplicate and
                rate-limit protection, appeals and correction workflows, audit
                history, and explicit handling of false or malicious reports. No
                user report, evidence, moderation, appeal, identity, account, or
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
