import { useMemo, useState } from "react";
import {
  BookOpen,
  CircleSlash2,
  Code2,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  TestTube2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ApiArea = "All" | "Core" | "Financial" | "Education";
type ApiState = "All" | "Review" | "Unavailable" | "Published";
type ApiConcept = {
  id: string;
  title: string;
  area: Exclude<ApiArea, "All">;
  state: Exclude<ApiState, "All">;
  summary: string;
  endpoint: string;
  schema: string;
  auth: string;
  limits: string;
  version: string;
  status: string;
};
const concepts: ApiConcept[] = [
  {
    id: "core-contract",
    title: "Core platform contract",
    area: "Core",
    state: "Review",
    summary:
      "A local API-contract concept pending synchronized endpoint definitions, request/response schemas, authentication guidance, and error semantics.",
    endpoint: "Endpoint catalog unavailable",
    schema: "Schema definition unavailable",
    auth: "Authentication guidance unavailable",
    limits: "Rate-limit metadata unavailable",
    version: "Version policy unavailable",
    status: "Availability status unavailable",
  },
  {
    id: "financial-contract",
    title: "Financial service contract",
    area: "Financial",
    state: "Unavailable",
    summary:
      "A local financial API concept pending server-side authorization, transaction semantics, network validation, and auditable error handling.",
    endpoint: "Endpoint catalog unavailable",
    schema: "Schema definition unavailable",
    auth: "Authentication guidance unavailable",
    limits: "Rate-limit metadata unavailable",
    version: "Version policy unavailable",
    status: "Availability status unavailable",
  },
  {
    id: "education-contract",
    title: "Education service contract",
    area: "Education",
    state: "Published",
    summary:
      "A local education API concept pending learner privacy controls, course and certification schemas, and versioned contract evidence.",
    endpoint: "Endpoint catalog unavailable",
    schema: "Schema definition unavailable",
    auth: "Authentication guidance unavailable",
    limits: "Rate-limit metadata unavailable",
    version: "Version policy unavailable",
    status: "Availability status unavailable",
  },
];
const areas: ApiArea[] = ["All", "Core", "Financial", "Education"];
const states: ApiState[] = ["All", "Review", "Unavailable", "Published"];
export default function APIDocumentation() {
  const [area, setArea] = useState<ApiArea>("All");
  const [state, setState] = useState<ApiState>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "API documentation service unavailable. Showing local contract concepts only."
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
      `${action} is unavailable locally. No endpoint request, credential use, schema lookup, API test, publication, or external mutation was started.`
    );
  const metadata: Array<[string, string]> = [
    ["Endpoint", selected.endpoint],
    ["Schema", selected.schema],
    ["Authentication", selected.auth],
    ["Rate limits", selected.limits],
    ["Version", selected.version],
    ["Status", selected.status],
  ];
  return (
    <div data-ui-polish="batch-180" className="min-h-screen bg-background">
      <PageHeader
        icon={BookOpen}
        title="API documentation"
        subtitle="Review local API-contract concepts without fabricated endpoints, schemas, credentials, availability, latency, rate limits, versions, or security guarantees."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>API documentation service unavailable.</strong> No endpoint
            catalog, schema registry, authentication guide, version policy,
            status monitor, or publishing service is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "API documentation service remains unavailable. Local contracts were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset contracts
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Contract preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review API contracts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show documentation structure only.
                  They do not represent real endpoints, request/response
                  schemas, credentials, availability, latency, versions, or
                  production security state.
                </p>
              </div>
              <Code2 className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="API area filter"
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
              aria-label="API state filter"
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
                Selected contract
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
                No endpoint, schema, authentication, rate-limit, version, or
                status state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Open API test")}
                  variant="outline"
                >
                  <TestTube2 className="mr-2 h-4 w-4" /> Test unavailable
                </Button>
                <Button
                  onClick={() => blocked("Publish API contract")}
                  variant="outline"
                >
                  <BookOpen className="mr-2 h-4 w-4" /> Publish unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  API documentation requires synchronized contracts, redacted
                  examples, accurate authentication and authorization guidance,
                  versioning, rate-limit disclosure, error semantics, changelog
                  integrity, and auditable publishing controls.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Endpoint, schema, credential, version, status, test, and
                  publication transitions must be auditable and isolated from
                  fabricated API outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No endpoint lookup, credential use, API test, schema
                  publication, availability claim, or external mutation is
                  available from this preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
