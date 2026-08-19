import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Activity,
  Bot,
  Code2,
  Download,
  FileText,
  Info,
  LockKeyhole,
  RefreshCw,
  Server,
  ShieldAlert,
  XCircle,
} from "lucide-react";

type Section = "overview" | "agents" | "logs" | "metrics";
type Agent = { name: string; description: string; icon: typeof Code2 };
const AGENTS: readonly Agent[] = [
  {
    name: "Code engineer",
    description:
      "Repository context, permissions, model provider, tool policy, and review evidence are required before execution.",
    icon: Code2,
  },
  {
    name: "Data analyst",
    description:
      "A verified dataset, query scope, privacy boundary, and reproducible analysis contract are required.",
    icon: Activity,
  },
  {
    name: "Business advisor",
    description:
      "Source provenance, uncertainty, user context, and high-impact decision safeguards are required.",
    icon: Bot,
  },
  {
    name: "Security reviewer",
    description:
      "Authorized code scope, threat model, evidence, and non-destructive controls are required.",
    icon: ShieldAlert,
  },
];
const METRICS = [
  "API response time",
  "Cache hit rate",
  "Database query time",
  "Test results",
  "Error rate",
  "Token usage",
] as const;

export default function DeveloperArea() {
  const [section, setSection] = useState<Section>("overview");
  const [status, setStatus] = useState(
    "Developer service unavailable locally. No project, agent, log, metric, integration, export, or execution mutation was started."
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No project, agent, log, metric, integration, export, or execution mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="developer-area-title"
    >
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3">
            <Badge
              variant="outline"
              className="border-cyan-400/30 text-cyan-200"
            >
              DEVELOPER READINESS PREVIEW
            </Badge>
            <h1
              id="developer-area-title"
              className="flex items-center gap-2 text-3xl font-bold tracking-tight"
            >
              <Code2 className="h-7 w-7 text-cyan-300" aria-hidden="true" />
              Developer area
            </h1>
            <p className="max-w-3xl text-muted-foreground">
              Review developer-platform requirements without inventing project
              counts, test results, AI execution, logs, performance metrics,
              keys, or integrations.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => announceUnavailable("Developer refresh")}
          >
            <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
            Refresh unavailable
          </Button>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Developer service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No repository, project inventory, AI provider, log store,
                metrics source, API key manager, integration, or execution
                authorization is connected. Nothing on this page claims a live
                developer environment.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/50 p-5">
            <Server className="mb-3 h-5 w-5 text-sky-300" aria-hidden="true" />
            <p className="text-lg font-semibold">Project data unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No router, module, repository, branch, or test count is
              authoritative.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Bot className="mb-3 h-5 w-5 text-violet-300" aria-hidden="true" />
            <p className="text-lg font-semibold">Agents unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No model, tools, permissions, context, or execution result is
              connected.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <FileText
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Logs unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No system, audit, task, or agent event is loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Activity
              className="mb-3 h-5 w-5 text-emerald-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Metrics unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No latency, cache, database, test, error, or usage result is live.
            </p>
          </Card>
        </section>
        <nav
          className="flex flex-wrap gap-2"
          aria-label="Developer readiness sections"
        >
          {(["overview", "agents", "logs", "metrics"] as const).map(item => (
            <Button
              key={item}
              type="button"
              variant={section === item ? "default" : "outline"}
              onClick={() => setSection(item)}
            >
              {item === "overview"
                ? "Overview"
                : item === "agents"
                  ? "AI agents"
                  : item === "logs"
                    ? "System logs"
                    : "Metrics"}
            </Button>
          ))}
        </nav>
        {section === "overview" && (
          <section className="space-y-4">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold">
                  Project overview unavailable
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  No repository or API contract is loaded.
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={() => announceUnavailable("Project connection")}
              >
                Connect project unavailable
              </Button>
            </div>
            <Card className="border-border/40 bg-card/30 p-8 text-center">
              <XCircle
                className="mx-auto mb-3 h-8 w-8 text-muted-foreground"
                aria-hidden="true"
              />
              <p className="font-semibold">No developer project loaded</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Router count, module count, tests, branches, builds, ownership,
                and API status require verified repository and CI providers.
              </p>
            </Card>
          </section>
        )}
        {section === "agents" && (
          <section className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">AI agent readiness</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Agent labels are planning concepts only. No agent can execute,
                write files, call tools, or modify a project.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {AGENTS.map(agent => {
                const Icon = agent.icon;
                return (
                  <Card
                    key={agent.name}
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
                        <h3 className="font-semibold">{agent.name}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {agent.description}
                        </p>
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          className="mt-4"
                          onClick={() =>
                            announceUnavailable(`${agent.name} execution`)
                          }
                        >
                          Execute unavailable
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>
        )}
        {section === "logs" && (
          <section className="space-y-4">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold">
                  System logs unavailable
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  No system-ready, audit, agent, or task event is fabricated.
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={() => announceUnavailable("Log refresh")}
              >
                Refresh logs unavailable
              </Button>
            </div>
            <Card className="border-border/40 bg-card/30 p-8 text-center">
              <FileText
                className="mx-auto mb-3 h-8 w-8 text-muted-foreground"
                aria-hidden="true"
              />
              <p className="font-semibold">No log stream connected</p>
              <p className="mt-2 text-sm text-muted-foreground">
                A production log view needs access control, redaction,
                retention, timestamps, correlation IDs, and a verified event
                source.
              </p>
            </Card>
            <Button
              type="button"
              variant="outline"
              onClick={() => announceUnavailable("Log export")}
            >
              <Download className="mr-2 h-4 w-4" aria-hidden="true" />
              Export logs unavailable
            </Button>
          </section>
        )}
        {section === "metrics" && (
          <section className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">
                Performance metrics unavailable
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                No latency, cache, database, test, error, or usage values are
                displayed.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {METRICS.map(metric => (
                <Card key={metric} className="border-border/40 bg-card/40 p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{metric}</span>
                    <Badge
                      variant="outline"
                      className="border-muted-foreground/30 text-muted-foreground"
                    >
                      Unavailable
                    </Badge>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    No timestamped measurement or query result is authoritative.
                  </p>
                </Card>
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => announceUnavailable("Metrics export")}
            >
              <Download className="mr-2 h-4 w-4" aria-hidden="true" />
              Export metrics unavailable
            </Button>
          </section>
        )}
        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">No secret or system claim</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                API keys, access tokens, agent credentials, project secrets,
                system logs, performance evidence, and execution permissions
                remain unavailable and are not exposed in the client.
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
