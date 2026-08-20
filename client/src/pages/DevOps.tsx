import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Activity,
  Archive,
  BarChart3,
  CheckCircle2,
  Container,
  Database,
  Download,
  Info,
  LockKeyhole,
  MessageSquare,
  RefreshCw,
  Server,
  ShieldAlert,
  Terminal,
  XCircle,
} from "lucide-react";

type Tab =
  "services" | "observability" | "events" | "readiness" | "configuration";
type Requirement = { title: string; description: string; icon: typeof Server };
const REQUIREMENTS: readonly Requirement[] = [
  {
    title: "Service inventory",
    description:
      "Authenticated infrastructure discovery, ownership, versions, health probes, and incident state need a verified source.",
    icon: Server,
  },
  {
    title: "Observability",
    description:
      "Metrics, traces, logs, retention, alert rules, and dashboards must be connected without fabricating uptime or performance.",
    icon: BarChart3,
  },
  {
    title: "Event transport",
    description:
      "Topics, consumers, delivery, lag, replay, and privacy controls require an authorized event provider.",
    icon: MessageSquare,
  },
  {
    title: "Deployment and recovery",
    description:
      "Builds, artifacts, environments, approvals, rollback, backups, and restoration need tested operational contracts.",
    icon: Archive,
  },
];
const CONFIG_REQUIREMENTS = [
  "Environment secrets remain server-side and are never rendered in the client.",
  "Operational actions require least privilege, approval, idempotency, and audit logs.",
  "Metrics and service states need timestamped provenance and a clear unavailable state.",
  "Infrastructure downloads must not contain passwords, tokens, private keys, or connection strings.",
];

export default function DevOps() {
  const [tab, setTab] = useState<Tab>("services");
  const [status, setStatus] = useState(
    "DevOps service unavailable locally. No infrastructure, metric, event, deployment, acquisition, download, or configuration mutation was started."
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No infrastructure, metric, event, deployment, acquisition, download, or configuration mutation was started.`
    );
  return (
    <main className="min-h-screen bg-background" aria-labelledby="devops-title">
      <div data-ui-polish="batch-179" className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3">
            <Badge
              variant="outline"
              className="border-emerald-400/30 text-emerald-200"
            >
              OPERATIONS READINESS PREVIEW
            </Badge>
            <h1
              id="devops-title"
              className="flex items-center gap-2 text-3xl font-bold tracking-tight"
            >
              <Server className="h-7 w-7 text-emerald-300" aria-hidden="true" />
              DevOps operations
            </h1>
            <p className="max-w-3xl text-muted-foreground">
              Review infrastructure, observability, event, deployment, and
              governance requirements without inventing live services, metrics,
              credentials, or operational outcomes.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => announceUnavailable("Operations refresh")}
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
                Operations service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated infrastructure provider, monitoring source,
                event bus, deployment controller, acquisition data room, or
                configuration store is connected. No service is represented as
                running.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/50 p-5">
            <Server className="mb-3 h-5 w-5 text-sky-300" aria-hidden="true" />
            <p className="text-lg font-semibold">Services unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No service count, health, CPU, memory, port, or uptime is
              reported.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <BarChart3
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Metrics unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No Prometheus, Grafana, throughput, latency, or alert value is
              live.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <MessageSquare
              className="mb-3 h-5 w-5 text-orange-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Events unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No Kafka topic, consumer, message, or lag state is connected.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Container
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Runtime unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No container, cluster, image, release, or infrastructure command
              is active.
            </p>
          </Card>
        </section>
        <nav
          className="flex flex-wrap gap-2"
          aria-label="DevOps readiness sections"
        >
          {(
            [
              "services",
              "observability",
              "events",
              "readiness",
              "configuration",
            ] as const
          ).map(item => (
            <Button
              key={item}
              type="button"
              variant={tab === item ? "default" : "outline"}
              onClick={() => setTab(item)}
            >
              {item === "services"
                ? "Services"
                : item === "observability"
                  ? "Observability"
                  : item === "events"
                    ? "Events"
                    : item === "readiness"
                      ? "Readiness"
                      : "Configuration"}
            </Button>
          ))}
        </nav>
        {tab === "services" && (
          <section className="space-y-4">
            <div className="flex items-end justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold">
                  Service inventory unavailable
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  No container or cluster record is loaded.
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={() => announceUnavailable("Service discovery")}
              >
                Discover unavailable
              </Button>
            </div>
            <Card className="border-border/40 bg-card/30 p-8 text-center">
              <XCircle
                className="mx-auto mb-3 h-8 w-8 text-muted-foreground"
                aria-hidden="true"
              />
              <p className="font-semibold">No operational services loaded</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Service health, images, ports, resource usage, readiness, and
                ownership require an authorized runtime provider.
              </p>
            </Card>
          </section>
        )}
        {tab === "observability" && (
          <section className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">
                Observability unavailable
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                No live PromQL, Grafana, logs, traces, alerts, or dashboards are
                connected.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "API throughput",
                "Request latency",
                "Worker health",
                "Database connections",
                "Event lag",
                "Memory utilization",
              ].map(metric => (
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
                    No timestamped measurement or query result is displayed.
                  </p>
                </Card>
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => announceUnavailable("Observability dashboard")}
            >
              Open dashboard unavailable
            </Button>
          </section>
        )}
        {tab === "events" && (
          <section className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">
                Event transport unavailable
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                No topic, partition, consumer group, message count, delivery, or
                lag state is represented.
              </p>
            </div>
            <Card className="border-border/40 bg-card/30 p-8 text-center">
              <MessageSquare
                className="mx-auto mb-3 h-8 w-8 text-muted-foreground"
                aria-hidden="true"
              />
              <p className="font-semibold">No event streams loaded</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Event transport needs authorization, schema validation,
                retention, replay, privacy, and failure handling.
              </p>
            </Card>
            <Button
              type="button"
              variant="outline"
              onClick={() => announceUnavailable("Event stream discovery")}
            >
              Discover streams unavailable
            </Button>
          </section>
        )}
        {tab === "readiness" && (
          <section className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">
                Operations readiness requirements
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Planning requirements only; no acquisition valuation, checklist
                completion, or audit outcome is claimed.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {REQUIREMENTS.map(item => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className="border-border/40 bg-card/40 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-secondary/60 p-3">
                        <Icon
                          className="h-5 w-5 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold">{item.title}</h3>
                          <Badge
                            variant="outline"
                            className="border-muted-foreground/30 text-muted-foreground"
                          >
                            Unavailable
                          </Badge>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => announceUnavailable("Readiness export")}
            >
              Export unavailable
            </Button>
          </section>
        )}
        {tab === "configuration" && (
          <section className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">
                Safe configuration boundary
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                No Docker Compose, password, token, connection string, or launch
                command is generated.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {CONFIG_REQUIREMENTS.map(item => (
                <Card key={item} className="border-border/40 bg-card/40 p-5">
                  <div className="flex items-start gap-3">
                    <LockKeyhole
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-6 text-muted-foreground">
                      {item}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => announceUnavailable("Configuration download")}
              >
                <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                Download unavailable
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => announceUnavailable("Runtime launch")}
              >
                <Terminal className="mr-2 h-4 w-4" aria-hidden="true" />
                Launch unavailable
              </Button>
            </div>
          </section>
        )}
        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">No operations claim</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                This page does not claim service uptime, system metrics, event
                throughput, security certification, acquisition readiness,
                valuation, deployment success, or access to infrastructure
                credentials.
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
