import { useMemo, useState } from "react";
import {
  FileWarning,
  LockKeyhole,
  Mail,
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
    title: "List ownership and authorization",
    area: "Access",
    description:
      "No authenticated owner, workspace, tenant, list, sender identity, role, provider account, or account-scoped permission is connected.",
  },
  {
    title: "Consent and subscriber provenance",
    area: "Consent",
    description:
      "No subscriber, address, consent source, purpose, timestamp, lawful basis, double-opt-in record, or provenance history is loaded.",
  },
  {
    title: "Suppression and unsubscribe",
    area: "Safety",
    description:
      "No unsubscribe event, suppression list, bounce, complaint, preference, re-subscription rule, or delivery exclusion is configured.",
  },
  {
    title: "Privacy, import, and export",
    area: "Governance",
    description:
      "No data minimization, sensitive-field boundary, retention schedule, import validation, export authorization, redaction, or deletion workflow is verified.",
  },
  {
    title: "Provider delivery and observability",
    area: "Operations",
    description:
      "No messaging provider, template, send event, delivery receipt, rate limit, failure state, audit event, or recovery evidence exists.",
  },
];
export default function MailingLists() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "MailingLists is unavailable locally. No list, subscriber, consent record, suppression state, message, delivery, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No list, subscriber, consent, suppression, import, export, message, delivery, or messaging mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="mailing-lists-title"
    >
      <div data-ui-polish="batch-194" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Mail className="size-3.5" aria-hidden="true" />{" "}
                  Subscriber-governance readiness
                </Badge>
                <Badge variant="secondary">No messaging service</Badge>
              </div>
              <h1
                id="mailing-lists-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MailingLists readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review list ownership, consent provenance, suppression,
                unsubscribe, import and export controls, privacy, provider
                delivery, and authorization without implying that subscribers,
                messages, lists, or delivery results exist.
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
                Messaging service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No list store, consent ledger, suppression service, provider
                account, import/export pipeline, privacy control, or persistence
                layer is connected. This is a readiness workspace, not an active
                subscriber-management console.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Users className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No subscriber records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No owner, list, subscriber, address, consent source, preference,
                suppression, or provenance record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Mail className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No delivery state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No provider, template, send event, delivery receipt, bounce,
                complaint, unsubscribe, or message state is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No messaging actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No add, import, export, subscribe, unsubscribe, send, suppress,
                delete, or messaging mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Subscriber-governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads subscribers, records consent, imports or exports addresses,
              sends a message, changes suppression, or saves list data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search MailingLists readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter subscriber-governance requirements"
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
                  No subscriber-governance notes match “{query}”.
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
                A production mailing-list system needs account-scoped ownership,
                lawful consent provenance, suppression and unsubscribe
                enforcement, privacy and retention controls, safe import and
                export, provider delivery and failure handling, rate limits,
                auditability, and tested recovery. No subscriber or delivery
                state is claimed here.
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
