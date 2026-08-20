import { useState } from "react";
import {
  CheckCircle2,
  FileText,
  LockKeyhole,
  Mail,
  Save,
  ShieldCheck,
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

export default function EmailTemplates() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState(
    "Template service is unavailable locally. No template was saved, rendered for delivery, personalized, or sent."
  );
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No template was saved, rendered for delivery, personalized, or sent.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="email-templates-title"
    >
      <div data-ui-polish="batch-187" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <FileText className="size-3.5" aria-hidden="true" />
                  Template readiness
                </Badge>
                <Badge variant="secondary">Local draft</Badge>
              </div>
              <h1
                id="email-templates-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Email template readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review accessible template authoring and preview boundaries
                without claiming persistent ownership, versioning,
                personalization, moderation, localization, or provider delivery.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Template service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated owner, saved template, variable schema,
                renderer, localization, moderation review, provider, or delivery
                contract is connected. All fields below remain in page-local
                state.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <CardHeader>
              <CardTitle>Local template draft</CardTitle>
              <CardDescription>
                Draft fields are for accessibility and contract review only.
                They are not persisted or sent.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <label htmlFor="template-name" className="text-sm font-medium">
                  Template name
                </label>
                <Input
                  id="template-name"
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                    setStatus(
                      "Local template intent updated. No template was saved or sent."
                    );
                  }}
                  placeholder="Local template name"
                  className="mt-2"
                />
              </div>
              <div>
                <label
                  htmlFor="template-subject"
                  className="text-sm font-medium"
                >
                  Subject
                </label>
                <Input
                  id="template-subject"
                  value={subject}
                  onChange={e => {
                    setSubject(e.target.value);
                    setStatus(
                      "Local subject intent updated. No personalization or delivery was started."
                    );
                  }}
                  placeholder="Local subject draft"
                  className="mt-2"
                />
              </div>
              <div>
                <label htmlFor="template-body" className="text-sm font-medium">
                  Body
                </label>
                <textarea
                  id="template-body"
                  value={body}
                  onChange={e => {
                    setBody(e.target.value);
                    setStatus(
                      "Local template body updated. No rendering, personalization, or delivery was started."
                    );
                  }}
                  placeholder="Draft template content locally"
                  className="mt-2 min-h-36 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  onClick={() =>
                    setStatus(
                      "Local template draft marked for review. No template was persisted or sent."
                    )
                  }
                >
                  <Save className="mr-2 size-4" aria-hidden="true" />
                  Review draft locally
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setName("");
                    setSubject("");
                    setBody("");
                    setStatus(
                      "Local template draft reset. No template was saved or sent."
                    );
                  }}
                >
                  Reset draft
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => unavailable("Template delivery")}
                >
                  <Mail className="mr-2 size-4" aria-hidden="true" />
                  Send unavailable
                </Button>
              </div>
              <p
                className="text-xs text-muted-foreground"
                role="status"
                aria-live="polite"
              >
                {status}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Local preview</CardTitle>
              <CardDescription>
                No production recipient, variable, or account data is inserted.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-xl border border-border/70 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Subject
                </p>
                <p className="mt-2 break-words text-sm">
                  {subject.trim() || "No subject entered."}
                </p>
                <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">
                  Body
                </p>
                <p className="mt-2 min-h-28 whitespace-pre-wrap break-words text-sm text-muted-foreground">
                  {body.trim() || "No body entered."}
                </p>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">
                This preview does not resolve variables, load user data, render
                provider-specific markup, or prove deliverability.
              </p>
            </CardContent>
          </Card>
        </section>
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
                Production templates need ownership and authorization,
                versioning, variable validation, safe rendering, localization,
                accessibility review, moderation, consent, preview isolation,
                provider integration, audit history, rollback, and tests.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
