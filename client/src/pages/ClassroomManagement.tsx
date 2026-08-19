import { useMemo, useState } from "react";
import {
  Accessibility,
  BookOpenCheck,
  Database,
  KeyRound,
  LockKeyhole,
  Search,
  ShieldCheck,
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

type ClassroomCapability = {
  title: string;
  description: string;
  icon: typeof Database;
};

const classroomCapabilities: ClassroomCapability[] = [
  {
    title: "Class and roster contracts",
    description:
      "No classroom, instructor, student, guardian, roster, enrollment status, attendance, or account-scoped record source is connected.",
    icon: Database,
  },
  {
    title: "Roles and safeguarding",
    description:
      "Instructor permissions, student privacy, guardian access, moderation, safeguarding, consent, suspension, and audit rules are not configured.",
    icon: KeyRound,
  },
  {
    title: "Curriculum and assessment",
    description:
      "Course membership, assignments, grading, feedback, accommodations, progress, certificates, and grade-change history are unavailable.",
    icon: BookOpenCheck,
  },
  {
    title: "Accessibility and communication",
    description:
      "Keyboard navigation, screen-reader labels, language support, accessible materials, notifications, and contact boundaries are not verified.",
    icon: Accessibility,
  },
];

export default function ClassroomManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      classroomCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="classroom-management-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Education boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="classroom-management-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Classroom management readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents privacy-conscious classroom
                  administration without pretending that classes, students,
                  enrollments, grades, attendance, or permissions are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load classroom data unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Classroom management status"
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
                    Truthful classroom state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No classroom, roster, student, enrollment, assignment,
                    grade, attendance, or permission state is loaded or
                    persisted.
                  </CardDescription>
                </div>
                <UsersRound
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified classroom-management service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define class ownership, roster privacy,
                  enrollment, roles, safeguarding, curriculum, assessment,
                  accessibility, communication, and audit evidence before this
                  route can reveal or change education records.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable classroom actions"
              >
                {[
                  "Load classes",
                  "Manage roster",
                  "Add enrollment",
                  "Record grade",
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
                These safeguards must be verified before classroom controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Class, instructor, student, guardian, roster, enrollment,
                attendance, and account-scoped record contracts.
              </p>
              <p>
                Instructor permissions, student privacy, guardian access,
                moderation, safeguarding, consent, suspension, and audit.
              </p>
              <p>
                Course membership, assignments, grading, feedback,
                accommodations, progress, certificates, and grade history.
              </p>
              <p>
                Keyboard navigation, screen-reader labels, language support,
                accessible materials, notifications, and contact boundaries.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Classroom capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not read students, expose rosters,
              change enrollment, record grades, or persist classroom state.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search classroom capability notes"
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
