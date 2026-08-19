import { useMemo, useState } from "react";
import {
  ClipboardList,
  FileText,
  Inbox,
  LockKeyhole,
  Mail,
  Search,
  ShieldCheck,
  UserRound,
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

type IntakeCapability = {
  title: string;
  description: string;
  icon: typeof UserRound;
};

const intakeCapabilities: IntakeCapability[] = [
  {
    title: "Requester identity and consent",
    description:
      "No signed-in identity, contact details, consent record, preferred reply channel, verification, or communication preference is connected.",
    icon: UserRound,
  },
  {
    title: "Message and attachment handling",
    description:
      "No message body, category, priority, attachment policy, malware scan, size limit, redaction, or sensitive-data handling is configured.",
    icon: FileText,
  },
  {
    title: "Routing and delivery",
    description:
      "No recipient queue, service-level target, assignment, notification, email delivery, acknowledgement, retry, or escalation path is available.",
    icon: Inbox,
  },
  {
    title: "Privacy and case audit",
    description:
      "No case identifier, retention policy, access control, deletion request, status history, support transcript, or audit event is persisted.",
    icon: ClipboardList,
  },
];

export default function ContactUsForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      intakeCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="contact-us-form-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Support-intake boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="contact-us-form-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Contact form readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe, accessible support-intake
                  contract without pretending that a message can be submitted,
                  delivered, tracked, or answered.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load support channel unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Contact form status"
        >
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck
                      className="size-5 text-primary"
                      aria-hidden="true"
                    />
                    Truthful intake state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No requester, message, attachment, recipient, case,
                    acknowledgement, delivery result, or saved support record is
                    loaded or persisted.
                  </CardDescription>
                </div>
                <Mail className="size-5 text-amber-500" aria-hidden="true" />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified support-intake service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define requester identity, consent,
                  message validation, attachment safety, routing, notification,
                  delivery, acknowledgement, privacy, retention, and audit
                  evidence before this route can accept a message.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable support actions"
              >
                {[
                  "Load form",
                  "Submit message",
                  "Attach file",
                  "View case",
                ].map(label => (
                  <Button
                    key={label}
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled
                    aria-disabled="true"
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Release requirements</CardTitle>
              <CardDescription>
                These safeguards must be verified before intake controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Requester identity, contact verification, consent, communication
                preference, and account scope.
              </p>
              <p>
                Message validation, category, priority, attachment limits,
                malware scanning, redaction, and sensitive-data policy.
              </p>
              <p>
                Queue, assignment, service-level target, notification,
                acknowledgement, retries, escalation, and delivery status.
              </p>
              <p>
                Case identifier, access control, retention, deletion,
                transcript, status history, privacy, and audit.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Support-intake capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not collect contact details, upload
              files, send messages, create a case, notify staff, or persist a
              transcript.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search support-intake capability notes"
                placeholder="Search capability notes"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            {visibleCapabilities.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {visibleCapabilities.map(
                  ({ title, description, icon: Icon }) => (
                    <div
                      key={title}
                      className="rounded-xl border border-border/70 p-4"
                    >
                      <div className="flex items-center gap-2 font-medium">
                        <Icon
                          className="size-4 text-primary"
                          aria-hidden="true"
                        />
                        {title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div
                className="rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground"
                role="status"
              >
                No capability notes match “{searchQuery}”.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
