import { useMemo, useState } from "react";
import {
  Accessibility,
  CheckCircle2,
  Contrast,
  Droplets,
  LockKeyhole,
  Palette,
  Search,
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

type ColorCapability = {
  title: string;
  description: string;
  icon: typeof Palette;
};

const colorCapabilities: ColorCapability[] = [
  {
    title: "Color value and format",
    description:
      "No color value, format parser, alpha semantics, color space, gamut handling, or invalid-input state is connected.",
    icon: Droplets,
  },
  {
    title: "Contrast and accessibility",
    description:
      "Contrast calculation, text-size context, non-color cues, focus visibility, keyboard operation, and screen-reader labeling are not verified.",
    icon: Contrast,
  },
  {
    title: "Theme and design semantics",
    description:
      "No palette token, light/dark theme mapping, component usage, preview context, naming convention, or brand governance is configured.",
    icon: Palette,
  },
  {
    title: "Persistence and authorization",
    description:
      "Account scope, workspace permissions, sensitive configuration, save/apply behavior, audit history, and rollback are unavailable.",
    icon: ShieldCheck,
  },
];

export default function ColorPickerDialog() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      colorCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="color-picker-dialog-title"
    >
      <div data-ui-polish="batch-183" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Design-system boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="color-picker-dialog-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Color picker readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents an accessible color-selection contract
                  without pretending that a value, palette, contrast result,
                  preview, or saved theme state is live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load color context unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Color picker status"
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
                    Truthful color state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No color value, picker state, format, preview, contrast
                    result, theme token, or saved configuration is loaded or
                    generated.
                  </CardDescription>
                </div>
                <Droplets
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified color-picker service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define color parsing, formats, alpha,
                  contrast, accessibility, theme semantics, authorization,
                  persistence, and error states before this route can apply a
                  color or save a design token.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable color actions"
              >
                {[
                  "Choose color",
                  "Check contrast",
                  "Preview theme",
                  "Apply color",
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
                These safeguards must be verified before picker controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Color value, parser, format, alpha, color space, gamut handling,
                and invalid-input state.
              </p>
              <p>
                Contrast, text-size context, non-color cues, focus visibility,
                keyboard operation, and screen-reader labels.
              </p>
              <p>
                Palette tokens, theme mapping, component usage, preview context,
                naming, and brand governance.
              </p>
              <p>
                Account scope, permissions, sensitive configuration, save/apply
                behavior, audit, and rollback.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Color picker capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not parse values, calculate
              contrast, render a preview, apply a theme, or persist a token.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search color picker capability notes"
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
