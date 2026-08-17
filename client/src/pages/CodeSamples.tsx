import { useMemo, useState } from "react";
import {
  CircleSlash2,
  Code2,
  Copy,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type State = "Review" | "Planned" | "Unavailable";
type Sample = {
  id: string;
  title: string;
  language: string;
  state: State;
  description: string;
  source: string;
  author: string;
  version: string;
  license: string;
};
const samples: Sample[] = [
  {
    id: "dashboard",
    title: "Dashboard query",
    language: "TypeScript",
    state: "Review",
    description:
      "A local sample concept for reviewing typed client patterns without exposing source or credentials.",
    source: "Source unavailable",
    author: "Author unavailable",
    version: "Version unavailable",
    license: "License unavailable",
  },
  {
    id: "api",
    title: "API request",
    language: "JavaScript",
    state: "Planned",
    description:
      "A request example concept pending provider provenance, redaction rules, and bounded execution.",
    source: "Source unavailable",
    author: "Author unavailable",
    version: "Version unavailable",
    license: "License unavailable",
  },
  {
    id: "course",
    title: "Course helper",
    language: "Python",
    state: "Unavailable",
    description:
      "A helper concept with execution and repository access explicitly excluded from this preview.",
    source: "Source unavailable",
    author: "Author unavailable",
    version: "Version unavailable",
    license: "License unavailable",
  },
];
const states: Array<"All" | State> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];
export default function CodeSamples() {
  const [language, setLanguage] = useState("All");
  const [state, setState] = useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(samples[0].id);
  const [status, setStatus] = useState(
    "Code samples unavailable. Showing local fixtures only."
  );
  const languages = [
    "All",
    ...Array.from(new Set(samples.map(sample => sample.language))),
  ];
  const filtered = useMemo(
    () =>
      samples.filter(
        sample =>
          (language === "All" || sample.language === language) &&
          (state === "All" || sample.state === state)
      ),
    [language, state]
  );
  const selected =
    samples.find(sample => sample.id === selectedId) ?? samples[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No source, author, version, license, execution, copy, download, or repository request was started.`
    );
  const reset = () => {
    setLanguage("All");
    setState("All");
    setSelectedId(samples[0].id);
    setStatus(
      "Sample preview reset locally. No source, execution, download, or repository state changed."
    );
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-fuchsia-400/25 bg-fuchsia-400/10 text-fuchsia-200">
              <Code2 aria-hidden="true" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold sm:text-3xl">Code samples</h1>
                <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-2 py-1 text-xs text-fuchsia-200">
                  Local preview
                </span>
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                Review sample concepts without fabricated source, authors,
                versions, licenses, execution, downloads, or repository claims.
              </p>
            </div>
          </div>
          <Button onClick={reset} variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset preview
          </Button>
        </header>
        <section
          className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/[0.07] p-4 text-sm text-slate-300"
          role="note"
        >
          <strong className="text-amber-100">Code samples unavailable.</strong>{" "}
          No verified source catalog, author provenance, license registry,
          execution sandbox, or download service is connected. These are local
          fixtures.
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Language filter"
            >
              {languages.map(item => (
                <Button
                  aria-pressed={language === item}
                  key={item}
                  onClick={() => setLanguage(item)}
                  size="sm"
                  variant={language === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Sample state filter"
            >
              {states.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant="outline"
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(sample => (
                <button
                  aria-pressed={selectedId === sample.id}
                  className={`w-full rounded-xl border p-5 text-left ${selectedId === sample.id ? "border-fuchsia-400/35 bg-fuchsia-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={sample.id}
                  onClick={() => setSelectedId(sample.id)}
                  type="button"
                >
                  <p className="font-medium">{sample.title}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {sample.language} · {sample.state}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {sample.description}
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
                Selected sample
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-fuchsia-200">
                {selected.language} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  ["Source", selected.source],
                  ["Author", selected.author],
                  ["Version", selected.version],
                  ["License", selected.license],
                ].map(([label, value]) => (
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
                No sample source, execution result, copy, download, or
                repository state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button onClick={() => blocked("Run")} variant="outline">
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Run unavailable
                </Button>
                <Button onClick={() => blocked("Copy")} variant="outline">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy unavailable
                </Button>
                <Button onClick={() => blocked("Download")} variant="outline">
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Download unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No source, author, version, license, execution, copy,
                  download, or repository operation is available.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Production sample catalogs require provenance, licensing,
                  redaction, bounded execution, secret controls, repository
                  authorization, and auditable downloads.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
