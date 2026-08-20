import { useMemo, useState } from "react";
import {
  FileWarning,
  Gavel,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Authenticated moderator scope",
    area: "Access",
    description:
      "No authenticated administrator, moderator, teacher, workspace, role, permission, or least-privilege authorization record is connected.",
  },
  {
    title: "Report and evidence provenance",
    area: "Trust",
    description:
      "No learner report, conversation, profile, evidence attachment, timestamp, source, redaction, or case record is loaded.",
  },
  {
    title: "Review and enforcement lifecycle",
    area: "Safety",
    description:
      "No triage, assignment, appeal, warning, suspension, ban, restoration, escalation, or decision state exists.",
  },
  {
    title: "Privacy and safeguarding",
    area: "Privacy",
    description:
      "No consent, age or safeguarding signal, data minimization, retention, export control, subject access, or sensitive-content policy is verified.",
  },
  {
    title: "Audit and operational recovery",
    area: "Operations",
    description:
      "No immutable moderation audit, dual-control approval, notification, rate limit, incident response, rollback, or recovery evidence exists.",
  },
];
export function LanguageExchangeAdmin() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Language-exchange moderation is unavailable locally. No report, evidence, moderator identity, enforcement decision, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No report, evidence, moderation decision, user restriction, notification, or enforcement mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="language-exchange-admin-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Gavel className="size-3.5" aria-hidden="true" />{" "}
                  Moderation-governance readiness
                </Badge>
                <Badge variant="secondary">No moderation service</Badge>
              </div>
              <h1
                id="language-exchange-admin-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Language Exchange Admin readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the authenticated moderation, evidence, enforcement,
                safeguarding, and audit contracts required for safe
                language-exchange administration without implying that reports,
                cases, user restrictions, or moderation outcomes exist.
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
                Moderation service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated moderation data, role-based authorization,
                evidence storage, enforcement workflow, safeguarding policy,
                audit log, or persistence layer is connected. This is a
                readiness workspace, not an administrator console.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Users className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No moderation cases</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No report, learner, conversation, evidence, moderator, case, or
                decision record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No enforcement scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No authenticated role, permission, user restriction, warning,
                suspension, ban, or restoration state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No moderation actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No triage, decision, appeal, notification, export, escalation,
                or enforcement action exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Moderation-governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads a report, exposes evidence, changes a user restriction,
              sends a notification, or saves a moderation decision.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Language Exchange Admin readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter moderation-governance requirements"
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
                    <FileWarning className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No moderation-governance notes match “{query}”.
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
                A production moderation system needs authenticated
                least-privilege access, evidence provenance and redaction,
                transparent decision rules, appeals, safeguarding, privacy and
                retention controls, immutable auditability, notifications, rate
                limits, incident response, and tested rollback. No report, case,
                user restriction, or moderation outcome is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <Gavel
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
export default LanguageExchangeAdmin;
