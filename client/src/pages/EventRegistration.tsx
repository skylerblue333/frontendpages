import { useMemo, useState } from "react";
import {
  CheckCircle2,
  ClipboardList,
  Search,
  ShieldCheck,
  Ticket,
  UsersRound,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type RegistrationBoundary = { title: string; description: string };
const boundaries: readonly RegistrationBoundary[] = [
  {
    title: "Attendee identity and consent",
    description:
      "No attendee account, contact detail, RSVP, consent, accessibility request, or registration identifier is connected.",
  },
  {
    title: "Capacity, ticketing, and payment",
    description:
      "No capacity, ticket, price, payment method, checkout session, waitlist, or allocation state is loaded.",
  },
  {
    title: "Invitations and reminders",
    description:
      "No invitation, confirmation, reminder, notification channel, delivery receipt, or unsubscribe state is configured.",
  },
  {
    title: "Cancellation and audit",
    description:
      "No approval, check-in, cancellation, refund, event update, external sync, audit trail, or delete operation is available.",
  },
];

export default function EventRegistration() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Event registration is unavailable locally. No attendee, RSVP, ticket, payment, invitation, reminder, or cancellation mutation was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, description }) =>
      `${title} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No attendee, RSVP, ticket, payment, invitation, reminder, or cancellation mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="event-registration-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <ClipboardList className="size-3.5" aria-hidden="true" />
                  Registration readiness
                </Badge>
                <Badge variant="secondary">No registration service</Badge>
              </div>
              <h1
                id="event-registration-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Event registration readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful attendee, RSVP, capacity, payment,
                accessibility, invitation, reminder, waitlist, and cancellation
                contracts without registering or charging anyone.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Registration service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No event, attendee directory, consent system, capacity store,
                payment provider, invitation channel, waitlist, or check-in
                workflow is connected. This is a planning boundary, not an RSVP
                console.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/70 p-5">
            <UsersRound
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">No attendees loaded</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No attendee, RSVP, consent, accessibility, or registration
              identifier is presented.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <Ticket className="mb-3 size-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">No ticket actions</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No capacity, ticket, price, payment, checkout, waitlist, or
              allocation state is available.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <ClipboardList
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">No confirmations sent</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No invitation, confirmation, reminder, receipt, unsubscribe,
              cancellation, or refund operation can run.
            </p>
          </div>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Registration readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              attendees, RSVPs, payments, invitations, waitlists, or
              registration storage.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search registration readiness notes"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search registration requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(({ title, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Manage ${title}`)}
                  >
                    Manage unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No registration notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 size-5 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Production registration needs authenticated event ownership,
                attendee consent, capacity correctness, payment and refund
                controls, accessibility review, privacy protection, invitation
                delivery, waitlist fairness, check-in integrity, cancellation
                handling, and audit logging.
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
