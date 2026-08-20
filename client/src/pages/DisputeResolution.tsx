import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  AlertTriangle,
  Banknote,
  CalendarClock,
  FileCheck2,
  FilePlus2,
  Filter,
  Gavel,
  LockKeyhole,
  Search,
  Settings,
  ShieldAlert,
  Users,
  XCircle,
} from "lucide-react";

type Area = "all" | "case" | "evidence" | "process" | "financial";
type Requirement = {
  title: string;
  description: string;
  area: Exclude<Area, "all">;
  icon: typeof Users;
};
const REQUIREMENTS: readonly Requirement[] = [
  {
    title: "Parties and authorization",
    description:
      "Claimant, respondent, account ownership, consent, role permissions, and conflict checks need verified identity and an authorized case service.",
    area: "case",
    icon: Users,
  },
  {
    title: "Evidence and chronology",
    description:
      "Uploads, provenance, timestamps, redaction, retention, access logs, and chain of custody need a protected evidence store.",
    area: "evidence",
    icon: FileCheck2,
  },
  {
    title: "Review and resolution process",
    description:
      "Deadlines, notices, mediators, arbitration, appeals, jurisdiction, and decisions require accountable human governance and legal review.",
    area: "process",
    icon: Gavel,
  },
  {
    title: "Refunds and settlement",
    description:
      "Refunds, credits, escrow, fees, payment status, and settlement outcomes need verified commerce records and reconciliation.",
    area: "financial",
    icon: Banknote,
  },
];

export default function DisputeResolution() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState<Area>("all");
  const [status, setStatus] = useState(
    "Dispute service unavailable locally. No case, party, evidence, notice, legal process, payment, refund, notification, or persistence mutation was started."
  );
  const requirements = useMemo(
    () =>
      REQUIREMENTS.filter(item => {
        const matchesQuery =
          !query ||
          `${item.title} ${item.description}`
            .toLowerCase()
            .includes(query.toLowerCase());
        return matchesQuery && (area === "all" || item.area === area);
      }),
    [query, area]
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No case, party, evidence, notice, legal process, payment, refund, notification, or persistence mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="dispute-resolution-title"
    >
      <div data-ui-polish="batch-187" className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge
            variant="outline"
            className="border-amber-400/30 text-amber-200"
          >
            DISPUTE READINESS PREVIEW
          </Badge>
          <h1
            id="dispute-resolution-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <Gavel className="h-7 w-7 text-amber-300" aria-hidden="true" />
            Dispute resolution
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review case-management requirements without inventing parties,
            evidence, deadlines, legal outcomes, payments, refunds, or dispute
            decisions.
          </p>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Dispute service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No identity provider, case store, evidence vault, notification
                service, mediator workflow, legal review, payment ledger, or
                refund provider is connected. This page is not legal advice and
                does not represent a live case.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/50 p-5">
            <Users className="mb-3 h-5 w-5 text-sky-300" aria-hidden="true" />
            <p className="text-lg font-semibold">Parties unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No claimant, respondent, representative, role, or case identity is
              loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <FileCheck2
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Evidence unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No document, message, order, upload, chronology, or record is
              stored.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <CalendarClock
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Process unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No deadline, notice, mediator, arbitration, appeal, or decision is
              active.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Banknote
              className="mb-3 h-5 w-5 text-emerald-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Financials unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No refund, credit, escrow, fee, payment, settlement, or outcome is
              recorded.
            </p>
          </Card>
        </section>
        <section
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Dispute requirement filters"
        >
          <label htmlFor="dispute-search" className="sr-only">
            Search dispute requirements
          </label>
          <div className="relative min-w-[240px] flex-1">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="dispute-search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search dispute requirements"
              className="w-full rounded-xl border border-border/40 bg-card/40 py-3 pl-10 pr-3 text-sm outline-none ring-primary/40 focus:ring-2"
            />
          </div>
          {(["all", "case", "evidence", "process", "financial"] as const).map(
            value => (
              <Button
                key={value}
                type="button"
                variant={area === value ? "default" : "outline"}
                onClick={() => setArea(value)}
              >
                <Filter className="mr-2 h-4 w-4" aria-hidden="true" />
                {value === "all"
                  ? "All"
                  : value[0].toUpperCase() + value.slice(1)}
              </Button>
            )
          )}
          <Button
            type="button"
            variant="outline"
            onClick={() => announceUnavailable("Dispute settings")}
          >
            <Settings className="mr-2 h-4 w-4" aria-hidden="true" />
            Settings unavailable
          </Button>
        </section>
        <section aria-labelledby="requirements-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="requirements-title" className="text-xl font-semibold">
                Case requirements
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Local filters only. Nothing is filed, uploaded, escalated, paid,
                refunded, or saved.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => announceUnavailable("Case creation")}
            >
              <FilePlus2 className="mr-2 h-4 w-4" aria-hidden="true" />
              New case unavailable
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {requirements.map(item => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-border/40 bg-card/40 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-secondary/60 p-3">
                      <Icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{item.title}</h3>
                        <Badge
                          variant="outline"
                          className="border-muted-foreground/30 text-muted-foreground"
                        >
                          {item.area}
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="mt-4"
                        onClick={() =>
                          announceUnavailable(`${item.title} workflow`)
                        }
                      >
                        Manage unavailable
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
            {requirements.length === 0 && (
              <Card className="border-border/40 bg-card/30 p-8 text-center md:col-span-2">
                <XCircle
                  className="mx-auto mb-3 h-7 w-7 text-muted-foreground"
                  aria-hidden="true"
                />
                <p className="font-semibold">No dispute requirements found</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Search is local and does not query case or legal records.
                </p>
              </Card>
            )}
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/30 p-5">
            <FileCheck2
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Upload evidence unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No file, message, order, record, or chain-of-custody entry can be
              uploaded.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Evidence upload")}
            >
              Upload unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <Gavel className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">Escalation unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No mediator, arbitrator, legal notice, appeal, or decision can be
              initiated.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Case escalation")}
            >
              Escalate unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <Banknote
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Refund unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No payment, refund, credit, settlement, escrow, or account balance
              mutation can occur.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Refund or settlement")}
            >
              Refund unavailable
            </Button>
          </Card>
        </section>
        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">No legal or financial claim</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production dispute workflow needs jurisdiction-aware terms,
                consent, identity, evidence controls, human review, notices,
                accessibility, retention, audit history, payment reconciliation,
                and clear non-legal-advice disclosures.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      </div>
    </main>
  );
}
