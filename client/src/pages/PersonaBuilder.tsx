import { useMemo, useState } from "react";
import {
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  Sparkles,
  UsersRound,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Consent, source, and audience provenance",
    area: "Privacy",
    description:
      "No person, account, tenant, source dataset, consent purpose, collection scope, consent timestamp, or audience ownership is connected.",
  },
  {
    title: "Methodology and segmentation validity",
    area: "Method",
    description:
      "No persona schema, segment definition, sample, feature provenance, inclusion rule, confidence, bias review, or methodology version is verified.",
  },
  {
    title: "Isolation, access, and sensitive attributes",
    area: "Security",
    description:
      "No tenant boundary, role, sensitive attribute policy, minimization rule, redaction, retention, sharing, or export control exists.",
  },
  {
    title: "Review, correction, and deletion",
    area: "Governance",
    description:
      "No human review, provenance citation, correction flow, appeal, deletion request, model output audit, or support trace is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No import, generate, segment, save, publish, share, correct, delete, export, or persona or personal-data mutation is connected or persisted.",
  },
];
export default function PersonaBuilder() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Persona building is unavailable locally. No person, account, tenant, source dataset, consent, segment, persona, model output, or personal-data record was loaded or saved."
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
      `${action} is unavailable locally. No person, segment, persona, consent, model output, privacy, or personal-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="persona-builder-title"
    >
      <div data-ui-polish="batch-198" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Sparkles className="size-3.5" aria-hidden="true" />{" "}
                  Persona-readiness workspace
                </Badge>
                <Badge variant="secondary">No persona data</Badge>
              </div>
              <h1
                id="persona-builder-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                PersonaBuilder readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review consent and source provenance, segmentation methodology,
                audience ownership, tenant isolation, sensitive-attribute
                safety, human review, correction, deletion, and persona-action
                boundaries without implying that people, segments, personas, or
                model outputs exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Persona building is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No consented data source, segmentation methodology, privacy
                boundary, tenant isolation, review workflow, deletion service,
                model runtime, or persistence layer is connected. This workspace
                cannot import, generate, segment, save, publish, share, correct,
                delete, export, or claim persona insights.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <UsersRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No persona data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No person, account, tenant, source dataset, consent, segment,
                persona, or model-output record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Sparkles
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No methodology state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No schema, segment definition, sample, feature provenance,
                confidence, bias review, or methodology version exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No persona actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No import, generate, segment, save, publish, share, correct,
                delete, export, or personal-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Persona-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              imports people data, generates a persona, infers attributes, or
              saves personal records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search PersonaBuilder readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter persona requirements"
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
                  No persona requirements match “{query}”.
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
                Production persona tooling requires lawful and explicit consent,
                source and feature provenance, validated methodology, bias and
                uncertainty review, tenant and role isolation,
                sensitive-attribute minimization, human oversight, correction
                and deletion workflows, audit history, and clear disclosure of
                inferred versus observed information. No person, segment,
                persona, model output, or personal-data record is claimed here.
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
