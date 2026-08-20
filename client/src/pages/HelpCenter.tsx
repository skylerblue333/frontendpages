import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileQuestion,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  Ticket,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Boundary = { title: string; area: string; description: string };
const boundaries: readonly Boundary[] = [
  {
    title: "Help content source and freshness",
    area: "Content",
    description:
      "No authored article, version, product scope, publication date, localization, or freshness record is connected.",
  },
  {
    title: "Account and product context",
    area: "Identity",
    description:
      "No authenticated account, plan, organization, device, route context, or support entitlement is loaded.",
  },
  {
    title: "Issue reporting and support cases",
    area: "Support",
    description:
      "No ticket, conversation, attachment, priority, SLA, assignment, escalation, or resolution state exists.",
  },
  {
    title: "Safety and privacy",
    area: "Governance",
    description:
      "No sensitive-data redaction, consent, access control, retention, deletion, or abuse-report workflow is configured.",
  },
  {
    title: "Search and troubleshooting",
    area: "Discovery",
    description:
      "No search index, diagnostic signal, reproduction context, recommendation, or verified troubleshooting result is evaluated.",
  },
];
export default function HelpCenter() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Help Center is unavailable locally. No article, account context, support case, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No support case, account detail, attachment, or escalation record was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="help-center-title"
    >
      <div data-ui-polish="batch-191" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <FileQuestion className="size-3.5" aria-hidden="true" />{" "}
                  Support readiness
                </Badge>
                <Badge variant="secondary">No support service</Badge>
              </div>
              <h1
                id="help-center-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Help Center readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the content, account-context, support-case, privacy, and
                troubleshooting contracts required for reliable help without
                implying that documentation, diagnostics, or support records
                exist.
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
                Support service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authored help catalog, authenticated account context, case
                system, diagnostic signal, privacy policy, or persistence layer
                is connected. This is a readiness workspace, not a promise of
                support coverage.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <FileQuestion
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No help content</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No article, version, route context, localization, or freshness
                record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No account context</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No identity, organization, device, entitlement, or sensitive
                support context is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No support case</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No ticket, conversation, attachment, SLA, escalation, or
                resolution state exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Support-governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never loads
              help content, diagnoses an issue, creates a ticket, or saves
              account context.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search help center readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter support requirements"
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
                    <Ticket className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No support notes match “{query}”.
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
                A production help center needs versioned content ownership,
                authenticated context, safe diagnostics, support-case contracts,
                sensitive-data handling, accessibility, localization, response
                expectations, observability, and tested recovery for case
                creation and escalation.
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
