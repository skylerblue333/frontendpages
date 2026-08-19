import { useMemo, useState } from "react";
import {
  Accessibility,
  CheckSquare,
  FileCheck2,
  KeyRound,
  LockKeyhole,
  Search,
  ShieldCheck,
  SlidersHorizontal,
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

type CheckboxCapability = {
  title: string;
  description: string;
  icon: typeof CheckSquare;
};

const checkboxCapabilities: CheckboxCapability[] = [
  {
    title: "Option schema and semantics",
    description:
      "No typed option values, labels, ordering, defaults, required/minimum selections, disabled states, or version is connected.",
    icon: CheckSquare,
  },
  {
    title: "Validation and consent",
    description:
      "Client/server validation, error association, consent language, lawful purpose, duplicate submission, and recovery are not configured.",
    icon: FileCheck2,
  },
  {
    title: "Accessibility and interaction",
    description:
      "Group labeling, keyboard behavior, focus visibility, screen-reader errors, touch targets, and mobile layout are not verified.",
    icon: Accessibility,
  },
  {
    title: "Authorization and persistence",
    description:
      "Account scope, permissions, sensitive values, audit history, submission status, and persistence are unavailable.",
    icon: KeyRound,
  },
];

export default function CheckboxGroupForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      checkboxCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="checkbox-group-form-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Form boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="checkbox-group-form-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Checkbox group form readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe multi-selection form contract
                  without pretending that options, submitted values, validation,
                  consent, or saved state are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load form unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Checkbox group form status"
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
                    Truthful form state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No options, selected values, validation result, consent,
                    submission, or persistence state is loaded or generated.
                  </CardDescription>
                </div>
                <SlidersHorizontal
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified form service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define option schema, selection rules,
                  validation, consent language, accessibility, authorization,
                  submission status, duplicate protection, and persistence
                  before this route can accept a selection.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable form actions"
              >
                {[
                  "Load options",
                  "Validate selection",
                  "Submit form",
                  "Reset form",
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
                These safeguards must be verified before form controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Typed option values, labels, ordering, defaults,
                required/minimum selections, disabled states, and version.
              </p>
              <p>
                Client/server validation, error association, consent language,
                lawful purpose, duplicate protection, and recovery.
              </p>
              <p>
                Group labeling, keyboard behavior, focus visibility,
                screen-reader errors, touch targets, and mobile layout.
              </p>
              <p>
                Account scope, permissions, sensitive values, audit history,
                submission status, and persistence semantics.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Checkbox form capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not load options, accept selections,
              validate input, submit values, or persist state.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search checkbox form capability notes"
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
