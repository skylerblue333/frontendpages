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
    title: "Provider and service scope",
    area: "Infrastructure",
    description:
      "No approved model, provider, deployment, capability, availability, or routing contract is connected.",
  },
  {
    title: "Financial and automation safety",
    area: "Risk",
    description:
      "No mining, trading, investment, portfolio, transaction, automation, risk, or user-authorization workflow exists.",
  },
  {
    title: "Security monitoring and support",
    area: "Operations",
    description:
      "No security signal, alert, response playbook, support context, escalation, or incident record is loaded.",
  },
  {
    title: "Privacy, retention, and audit",
    area: "Governance",
    description:
      "No identity, consent, sensitive-data boundary, retention, audit log, export, deletion, or accountability policy is configured.",
  },
  {
    title: "AI response and failure controls",
    area: "Safety",
    description:
      "No prompt, response, tool permission, evaluation, rate limit, timeout, fallback, or observability contract exists.",
  },
];
export default function HopeAIPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "HopeAI services are unavailable locally. No provider, automation, financial data, alert, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No AI call, financial action, alert, support case, or mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="hope-ai-title"
    >
      <div data-ui-polish="batch-192" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Bot className="size-3.5" aria-hidden="true" /> AI services
                  readiness
                </Badge>
                <Badge variant="secondary">No AI services</Badge>
              </div>
              <h1
                id="hope-ai-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                HopeAI readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the provider, safety, financial, security, privacy, and
                support contracts required for trustworthy AI services without
                implying that models, automation, market data, or outcomes
                exist.
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
                AI services are unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No approved provider, safety policy, financial authorization,
                market or mining source, security signal, privacy boundary, or
                persistence layer is connected. This is a readiness workspace,
                not a production AI service.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Bot className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No provider scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No model, provider, capability, availability, or routing state
                is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No risk scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No financial, automation, security, privacy, or authorization
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
              <h2 className="font-semibold">No outcome claims</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No answer, market price, mining result, alert, transaction, or
                investment insight is presented.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>HopeAI governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never
              invokes a model, executes automation, accesses financial data, or
              saves a service action.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search HopeAI readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter AI-service requirements"
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
                  No HopeAI notes match “{query}”.
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
                A production HopeAI surface needs approved providers, prompt and
                output safety, explicit financial authorization, trustworthy
                market and mining data, security and support workflows, privacy
                and retention controls, usage accounting, observability, and
                tested recovery. No capability is claimed here.
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
