import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Activity,
  CheckCircle2,
  GitBranch,
  Info,
  LockKeyhole,
  Play,
  RotateCcw,
  Search,
  ServerCog,
  ShieldAlert,
  XCircle,
} from "lucide-react";

type Stage = "all" | "required" | "blocked";
type Requirement = {
  id: string;
  title: string;
  area: string;
  description: string;
  stage: Exclude<Stage, "all">;
  icon: typeof GitBranch;
};
const REQUIREMENTS: readonly Requirement[] = [
  {
    id: "source",
    title: "Repository and branch",
    area: "Source",
    description:
      "Repository identity, branch policy, commit provenance, and protected ref rules need a verified provider.",
    stage: "required",
    icon: GitBranch,
  },
  {
    id: "build",
    title: "Build and test contract",
    area: "Validation",
    description:
      "Install, lint, typecheck, tests, artifacts, and reproducible build evidence are not connected.",
    stage: "required",
    icon: CheckCircle2,
  },
  {
    id: "approval",
    title: "Approval and environment",
    area: "Governance",
    description:
      "Environment secrets, approval gates, access policy, and deployment ownership need server-side controls.",
    stage: "blocked",
    icon: LockKeyhole,
  },
  {
    id: "rollback",
    title: "Release recovery",
    area: "Operations",
    description:
      "Deployment status, logs, rollback, cancellation, and incident recovery require observable infrastructure.",
    stage: "blocked",
    icon: RotateCcw,
  },
];

export default function DeploymentPipeline() {
  const [query, setQuery] = useState("");
  const [stage, setStage] = useState<Stage>("all");
  const [status, setStatus] = useState(
    "Deployment service unavailable locally. No repository, build, artifact, environment, release, or infrastructure mutation was started."
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
      `${action} is unavailable locally. No repository, build, artifact, environment, release, or infrastructure mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="deployment-pipeline-title"
    >
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge
            variant="outline"
            className="border-violet-400/30 text-violet-200"
          >
            RELEASE READINESS PREVIEW
          </Badge>
          <h1
            id="deployment-pipeline-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <ServerCog className="h-7 w-7 text-violet-300" aria-hidden="true" />
            Deployment pipeline
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review CI/CD requirements without inventing repositories, builds,
            approvals, environments, artifacts, release status, or deployment
            outcomes.
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
                Deployment service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No repository provider, build runner, test system, artifact
                store, environment manager, approval service, deployment target,
                log stream, or rollback controller is connected. This page does
                not represent a live pipeline.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/50 p-5">
            <GitBranch
              className="mb-3 h-5 w-5 text-sky-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Source unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No repository, branch, commit, pull request, or source policy is
              loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Activity
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Build status unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No build, test, artifact, duration, failure, or quality result is
              authoritative.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <ServerCog
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Release unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No environment, deploy, approval, log, rollback, or uptime state
              is connected.
            </p>
          </Card>
        </section>
        <section
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Pipeline filters"
        >
          <label htmlFor="pipeline-search" className="sr-only">
            Search release requirements
          </label>
          <div className="relative min-w-[220px] flex-1">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="pipeline-search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search release requirements"
              className="w-full rounded-xl border border-border/40 bg-card/40 py-3 pl-10 pr-3 text-sm outline-none ring-primary/40 focus:ring-2"
            />
          </div>
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
            onClick={() => announceUnavailable("Pipeline settings")}
          >
            Settings unavailable
          </Button>
        </section>
        <section aria-labelledby="requirements-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="requirements-title" className="text-xl font-semibold">
                Release requirements
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Local filter state only. Nothing is connected or saved.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => announceUnavailable("Pipeline creation")}
            >
              <GitBranch className="mr-2 h-4 w-4" aria-hidden="true" />
              New pipeline unavailable
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
                <p className="font-semibold">No release requirements found</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Search is local and does not query repository or pipeline
                  records.
                </p>
              </Card>
            )}
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/30 p-5">
            <Play className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">Run unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No build or test job can be started.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Pipeline run")}
            >
              Run unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <LockKeyhole
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Approve unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No release gate, environment, or approval can be changed.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Release approval")}
            >
              Approve unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <RotateCcw
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Rollback unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No deployment exists to cancel or recover.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Rollback")}
            >
              Rollback unavailable
            </Button>
          </Card>
        </section>
        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">No release claim</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production pipeline needs protected source access,
                reproducible builds, secret isolation, approvals, artifact
                provenance, deployment telemetry, rollback, incident response,
                and audit logs. This page does not claim any of those are
                active.
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
