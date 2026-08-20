import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Archive,
  CalendarClock,
  CheckCircle2,
  FileWarning,
  Info,
  LockKeyhole,
  Megaphone,
  Plus,
  Search,
  ShieldAlert,
  Users,
  XCircle,
} from "lucide-react";

type Stage = "all" | "required" | "blocked";
type Requirement = {
  id: string;
  title: string;
  area: string;
  description: string;
  stage: Exclude<Stage, "all">;
  icon: typeof FileWarning;
};
const REQUIREMENTS: readonly Requirement[] = [
  {
    id: "scope",
    title: "Version and scope",
    area: "Inventory",
    description:
      "Affected versions, dependencies, users, replacement paths, and support boundaries need a verified source.",
    stage: "required",
    icon: FileWarning,
  },
  {
    id: "timeline",
    title: "Timeline and ownership",
    area: "Governance",
    description:
      "Effective dates, owners, approvals, migration milestones, and escalation paths must be accountable.",
    stage: "required",
    icon: CalendarClock,
  },
  {
    id: "communication",
    title: "User communication",
    area: "Change management",
    description:
      "Notices, consent, accessibility, support, and acknowledgement records need a controlled delivery service.",
    stage: "blocked",
    icon: Megaphone,
  },
  {
    id: "archive",
    title: "Archive and recovery",
    area: "Operations",
    description:
      "Retirement, archive, rollback, compatibility, and deletion outcomes require tested persistence and audit.",
    stage: "blocked",
    icon: Archive,
  },
];

export default function DeprecationPolicy() {
  const [query, setQuery] = useState("");
  const [stage, setStage] = useState<Stage>("all");
  const [status, setStatus] = useState(
    "Deprecation policy service unavailable locally. No notice, version, migration, user, archive, or persistence mutation was started."
  );
  const requirements = useMemo(
    () =>
      REQUIREMENTS.filter(item => {
        const matchesQuery =
          !query ||
          `${item.title} ${item.area}`
            .toLowerCase()
            .includes(query.toLowerCase());
        return matchesQuery && (stage === "all" || item.stage === stage);
      }),
    [query, stage]
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No notice, version, migration, user, archive, or persistence mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="deprecation-policy-title"
    >
      <div data-ui-polish="batch-186" className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge
            variant="outline"
            className="border-orange-400/30 text-orange-200"
          >
            GOVERNANCE READINESS PREVIEW
          </Badge>
          <h1
            id="deprecation-policy-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <FileWarning
              className="h-7 w-7 text-orange-300"
              aria-hidden="true"
            />
            Deprecation policy
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review version-retirement requirements without inventing notices,
            timelines, owners, migration status, compatibility, or user
            acknowledgements.
          </p>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Deprecation service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No version inventory, policy store, owner directory, release
                calendar, notice delivery, migration tracker, archive, or audit
                service is connected. The planning items below are requirements,
                not current product records.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/50 p-5">
            <FileWarning
              className="mb-3 h-5 w-5 text-orange-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Notices unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No deprecation notice, affected version, deadline, or support
              promise is published.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Users className="mb-3 h-5 w-5 text-sky-300" aria-hidden="true" />
            <p className="text-lg font-semibold">Owners unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No accountable team, approver, user audience, or acknowledgement
              state is loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <CheckCircle2
              className="mb-3 h-5 w-5 text-emerald-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Migration unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No migration, compatibility, archive, rollback, or completion
              status is authoritative.
            </p>
          </Card>
        </section>
        <section
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Deprecation filters"
        >
          <label htmlFor="deprecation-search" className="sr-only">
            Search governance requirements
          </label>
          <input
            id="deprecation-search"
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder="Search policy requirements"
            className="min-w-[220px] flex-1 rounded-xl border border-border/40 bg-card/40 px-3 py-3 text-sm outline-none ring-primary/40 focus:ring-2"
          />
          {(["all", "required", "blocked"] as const).map(value => (
            <Button
              key={value}
              type="button"
              variant={stage === value ? "default" : "outline"}
              onClick={() => setStage(value)}
            >
              {value === "all"
                ? "All"
                : value === "required"
                  ? "Required"
                  : "Blocked"}
            </Button>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => announceUnavailable("Policy settings")}
          >
            Settings unavailable
          </Button>
        </section>
        <section aria-labelledby="requirements-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="requirements-title" className="text-xl font-semibold">
                Policy requirements
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Local filter state only. Nothing is published or saved.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => announceUnavailable("Policy creation")}
            >
              <Plus className="mr-2 h-4 w-4" aria-hidden="true" />
              New policy unavailable
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {requirements.map(item => {
              const Icon = item.icon;
              return (
                <Card key={item.id} className="border-border/40 bg-card/40 p-5">
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
                          {item.stage}
                        </Badge>
                      </div>
                      <p className="mt-1 text-xs text-primary">{item.area}</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="mt-4"
                        onClick={() =>
                          announceUnavailable(`Manage ${item.title}`)
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
                <p className="font-semibold">No policy requirements found</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Search is local and does not query policy records.
                </p>
              </Card>
            )}
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/30 p-5">
            <Megaphone
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Publish unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No notice, notification, email, or acknowledgement can be sent.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Policy publication")}
            >
              Publish unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <CalendarClock
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Migration unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No migration task, deadline, compatibility rule, or user state can
              change.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Migration planning")}
            >
              Migrate unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <Archive className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">Archive unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No version, content, or policy can be archived or deleted.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Policy archive")}
            >
              Archive unavailable
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
              <h2 className="font-semibold">No governance claim</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production deprecation workflow needs version provenance,
                policy ownership, accessible notices, migration support,
                compatibility guarantees, user impact analysis, archive and
                rollback controls, and a durable audit trail.
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
