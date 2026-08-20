import { useMemo, useState } from "react";
import {
  CheckCircle2,
  CircleSlash2,
  FlaskConical,
  KeyRound,
  LockKeyhole,
  Play,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type TestArea = "All" | "Core" | "Financial" | "Education";
type TestState = "All" | "Draft" | "Review" | "Unavailable";
type TestConcept = {
  id: string;
  title: string;
  area: Exclude<TestArea, "All">;
  state: Exclude<TestState, "All">;
  summary: string;
  request: string;
  auth: string;
  fixtures: string;
  assertions: string;
  result: string;
  persistence: string;
};
const concepts: TestConcept[] = [
  {
    id: "core-test",
    title: "Core contract smoke test",
    area: "Core",
    state: "Review",
    summary:
      "A local test-plan concept pending a synchronized contract, isolated environment, redacted credentials, deterministic fixtures, and bounded assertions.",
    request: "Request definition unavailable",
    auth: "Authentication boundary unavailable",
    fixtures: "Fixture data unavailable",
    assertions: "Assertion set unavailable",
    result: "Test result unavailable",
    persistence: "Test-plan persistence unavailable",
  },
  {
    id: "financial-test",
    title: "Financial authorization test",
    area: "Financial",
    state: "Draft",
    summary:
      "A local finance test concept pending explicit authorization, network isolation, idempotency safeguards, failure handling, and audit review.",
    request: "Request definition unavailable",
    auth: "Authentication boundary unavailable",
    fixtures: "Fixture data unavailable",
    assertions: "Assertion set unavailable",
    result: "Test result unavailable",
    persistence: "Test-plan persistence unavailable",
  },
  {
    id: "education-test",
    title: "Education access test",
    area: "Education",
    state: "Unavailable",
    summary:
      "A local education test concept pending learner-safe fixtures, permission boundaries, privacy controls, and deterministic result evidence.",
    request: "Request definition unavailable",
    auth: "Authentication boundary unavailable",
    fixtures: "Fixture data unavailable",
    assertions: "Assertion set unavailable",
    result: "Test result unavailable",
    persistence: "Test-plan persistence unavailable",
  },
];
const areas: TestArea[] = ["All", "Core", "Financial", "Education"];
const states: TestState[] = ["All", "Draft", "Review", "Unavailable"];
export default function APITesting() {
  const [area, setArea] = useState<TestArea>("All");
  const [state, setState] = useState<TestState>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "API test service unavailable. Showing local test-plan concepts only."
  );
  const filtered = useMemo(
    () =>
      concepts.filter(
        item =>
          (area === "All" || item.area === area) &&
          (state === "All" || item.state === state)
      ),
    [area, state]
  );
  const selected =
    filtered.find(item => item.id === selectedId) ?? filtered[0] ?? concepts[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No request, credential, fixture, response, assertion, result, persistence, or external mutation was started.`
    );
  const metadata: Array<[string, string]> = [
    ["Request", selected.request],
    ["Authentication", selected.auth],
    ["Fixtures", selected.fixtures],
    ["Assertions", selected.assertions],
    ["Result", selected.result],
    ["Persistence", selected.persistence],
  ];
  return (
    <div data-ui-polish="batch-180" className="min-h-screen bg-background">
      <PageHeader
        icon={FlaskConical}
        title="API testing"
        subtitle="Review local test-plan concepts without fabricated requests, credentials, fixtures, responses, assertions, pass/fail results, persistence, or mutations."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>API test service unavailable.</strong> No contract registry,
            sandbox environment, request builder, credential boundary, fixture
            store, assertion engine, or result store is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "API test service remains unavailable. Local test plans were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset test plans
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Test-plan preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review API test plans
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show test-plan structure only. They
                  do not represent real requests, credentials, fixtures,
                  responses, assertions, results, persistence, or mutations.
                </p>
              </div>
              <CheckCircle2 className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Test area filter"
            >
              {areas.map(item => (
                <Button
                  aria-pressed={area === item}
                  key={item}
                  onClick={() => setArea(item)}
                  size="sm"
                  variant={area === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Test state filter"
            >
              {states.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(item => (
                <button
                  aria-pressed={selected.id === item.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === item.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{item.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {item.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{item.area}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.summary}
                  </p>
                </button>
              ))}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected test plan
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.area} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {metadata.map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No request, credential, fixture, assertion, result, or
                persistence state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Run API test")}
                  variant="outline"
                >
                  <Play className="mr-2 h-4 w-4" /> Run unavailable
                </Button>
                <Button
                  onClick={() => blocked("Save API test")}
                  variant="outline"
                >
                  <FlaskConical className="mr-2 h-4 w-4" /> Save unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  API testing requires isolated environments, redacted
                  credentials, explicit authorization, deterministic fixtures,
                  bounded timeouts, rate-limit controls, safe retries, and
                  auditable results.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Request, credential, fixture, assertion, result, and
                  persistence transitions must be auditable and isolated from
                  fabricated test outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No request, credential lookup, fixture mutation, response
                  evaluation, pass/fail result, test persistence, or external
                  mutation is available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <KeyRound className="h-5 w-5 text-amber-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Never place API keys or tokens in client-side test fixtures,
                  browser storage, logs, screenshots, or generated examples.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
