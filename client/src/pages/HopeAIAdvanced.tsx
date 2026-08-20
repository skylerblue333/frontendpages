import { useMemo, useState } from "react";
import {
  Bot,
  CheckCircle2,
  FileWarning,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Boundary = { title: string; area: string; description: string };
const boundaries: readonly Boundary[] = [
  {
    title: "Approved provider and model scope",
    area: "Infrastructure",
    description:
      "No approved model, provider, deployment, version, capability, availability, or routing contract is connected.",
  },
  {
    title: "Prompt, response, and tool safety",
    area: "Safety",
    description:
      "No prompt handling, response validation, code execution guard, tool permission, abuse filter, or incident policy exists.",
  },
  {
    title: "Privacy and conversation scope",
    area: "Privacy",
    description:
      "No identity, consent, retention, redaction, sensitive-data policy, conversation store, or export/delete workflow is loaded.",
  },
  {
    title: "Usage and quality accounting",
    area: "Measurement",
    description:
      "No token, cost, latency, quota, evaluation, confidence, quality, attribution, or comparative capability metric is verified.",
  },
  {
    title: "Failure and recovery",
    area: "Reliability",
    description:
      "No timeout, rate limit, provider error, partial response, retry, fallback, support, or observability contract exists.",
  },
];
export default function HopeAIAdvanced() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Hope AI Advanced is unavailable locally. No provider, response, usage record, or mutation was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No prompt, response, provider call, usage record, or conversation mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="hope-ai-advanced-title"
    >
      <div data-ui-polish="batch-192" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Bot className="size-3.5" aria-hidden="true" /> AI readiness
                </Badge>
                <Badge variant="secondary">No AI provider</Badge>
              </div>
              <h1
                id="hope-ai-advanced-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Hope AI Advanced readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review provider, safety, privacy, usage, quality, and recovery
                contracts for advanced AI without implying that a model,
                response, reasoning score, code result, or comparative
                capability exists.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                AI provider is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No approved model, safety policy, privacy boundary, usage
                accounting, persistence, evaluation, or failure handling is
                connected. This is a readiness workspace, not an AI
                conversation.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Bot className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No model scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No provider, model, version, capability, availability, or
                routing state is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No safety scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No prompt, response, tool, privacy, abuse, or sensitive-data
                control is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No response claims</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No answer, code, reasoning confidence, tokens, latency, cost, or
                success outcome is presented.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>AI-governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never sends
              a prompt, invokes a model, executes code, records usage, or saves
              a conversation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Hope AI Advanced readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter AI requirements"
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
                    <FileWarning className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No AI notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production AI surface needs approved provider contracts,
                prompt and output safety, privacy and retention controls, tool
                isolation, cost and quota accounting, quality evaluation, abuse
                handling, observability, and tested recovery. This screen does
                not claim AI capability.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
