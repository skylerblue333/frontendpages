import { useMemo, useState } from "react";
import {
  AlertTriangle,
  BrainCircuit,
  FileSearch,
  LockKeyhole,
  Network,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Provider and model provenance",
    area: "Identity",
    description:
      "No approved provider, model identifier, version, release date, region, endpoint, capability card, license, or deprecation state is connected.",
  },
  {
    title: "Capability and quality metadata",
    area: "Capabilities",
    description:
      "No context limit, modality, latency, safety behavior, evaluation, reliability, tool support, data-use policy, or quality benchmark is verified.",
  },
  {
    title: "Routing and authorization policy",
    area: "Routing",
    description:
      "No task classifier, user permission, policy rule, fallback, tenant boundary, prompt boundary, or routing decision audit is available.",
  },
  {
    title: "Privacy, cost, and rate controls",
    area: "Governance",
    description:
      "No consent, sensitive-data policy, retention, token or request cost, budget, quota, rate limit, billing event, or provider contract is connected.",
  },
  {
    title: "Failure handling and observability",
    area: "Reliability",
    description:
      "No timeout, retry, circuit breaker, provider outage, partial response, model error, trace, redaction, incident, or operator alert workflow exists.",
  },
];
export default function MultiModelSelector() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Multi-model selection is unavailable locally. No provider, model, capability, route, prompt, cost, quota, or AI request record was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No provider, model, capability, route, prompt, cost, quota, privacy, or AI-request mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="multi-model-selector-title"
    >
      <div data-ui-polish="batch-196" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BrainCircuit className="size-3.5" aria-hidden="true" />{" "}
                  AI-routing readiness workspace
                </Badge>
                <Badge variant="secondary">No model registry</Badge>
              </div>
              <h1
                id="multi-model-selector-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MultiModelSelector readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review provider and model identity, capability metadata, routing
                policy, authorization, privacy, cost, quotas, rate limits,
                failure handling, and observability without implying that
                models, prompts, requests, or AI outputs exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Multi-model selection is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No approved model registry, provider integration, capability
                metadata, routing policy, authorization layer, privacy boundary,
                cost meter, quota service, rate limiter, or observability
                pipeline is connected. This workspace cannot select, route,
                invoke, compare, or claim an AI model.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Network
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No model records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No provider, model, version, capability, endpoint, region,
                license, or availability state is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No routing state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No task, prompt, user, policy, route, cost, quota, fallback,
                request, or output state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No AI actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No select, invoke, compare, route, retry, save, export, or
                AI-request mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>AI-routing governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              queries a registry, selects a model, sends a prompt, calculates
              cost, consumes quota, or saves AI request data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search multi-model selector readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter AI-routing requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(item => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${item.title}`)}
                  >
                    <FileSearch className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No AI-routing notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Production multi-model routing requires an approved and
                versioned registry, capability and safety metadata,
                permission-aware routing, prompt and sensitive-data boundaries,
                cost and quota controls, provider failure handling, redacted
                observability, and auditable decisions. No provider, model,
                prompt, request, output, cost, quota, or AI record is claimed
                here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <ShieldCheck
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
