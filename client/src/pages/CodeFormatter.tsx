import { useMemo, useState } from "react";
import {
  Braces,
  CircleSlash2,
  FileCode2,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Mode = "Review" | "Planned" | "Unavailable";
type Sample = {
  id: string;
  title: string;
  language: string;
  mode: Mode;
  description: string;
  source: string;
  engine: string;
  file: string;
  output: string;
};
const samples: Sample[] = [
  {
    id: "tsx",
    title: "Component sample",
    language: "TypeScript",
    mode: "Review",
    description:
      "A local code sample for reviewing formatter requirements without transforming source.",
    source: "Source unavailable",
    engine: "Formatter unavailable",
    file: "File unavailable",
    output: "Formatted output unavailable",
  },
  {
    id: "json",
    title: "Configuration sample",
    language: "JSON",
    mode: "Planned",
    description:
      "A configuration concept pending parser version and bounded input policy.",
    source: "Source unavailable",
    engine: "Formatter unavailable",
    file: "File unavailable",
    output: "Formatted output unavailable",
  },
  {
    id: "py",
    title: "Script sample",
    language: "Python",
    mode: "Unavailable",
    description:
      "A script concept with execution explicitly excluded from this preview.",
    source: "Source unavailable",
    engine: "Formatter unavailable",
    file: "File unavailable",
    output: "Formatted output unavailable",
  },
];
const modes: Array<"All" | Mode> = ["All", "Review", "Planned", "Unavailable"];
export default function CodeFormatter() {
  const [language, setLanguage] = useState("All");
  const [mode, setMode] = useState<(typeof modes)[number]>("All");
  const [selectedId, setSelectedId] = useState(samples[0].id);
  const [status, setStatus] = useState(
    "Code formatter unavailable. Showing local samples only."
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
          (mode === "All" || sample.mode === mode)
      ),
    [language, mode]
  );
  const selected =
    samples.find(sample => sample.id === selectedId) ?? samples[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No formatter engine, source, file, output, copy, save, or repository request was started.`
    );
  const reset = () => {
    setLanguage("All");
    setMode("All");
    setSelectedId(samples[0].id);
    setStatus(
      "Formatter preview reset locally. No code, file, output, or repository state changed."
    );
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-200">
              <Braces aria-hidden="true" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Code formatter
                </h1>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-1 text-xs text-cyan-200">
                  Local preview
                </span>
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                Review formatting concepts without fabricated transformations,
                language support, files, execution, source, or repository
                mutations.
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
          <strong className="text-amber-100">Formatter unavailable.</strong> No
          verified parser, formatter engine, file source, or save service is
          connected. These are local samples.
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
              aria-label="Formatting mode filter"
            >
              {modes.map(item => (
                <Button
                  aria-pressed={mode === item}
                  key={item}
                  onClick={() => setMode(item)}
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
                  className={`w-full rounded-xl border p-5 text-left ${selectedId === sample.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={sample.id}
                  onClick={() => setSelectedId(sample.id)}
                  type="button"
                >
                  <p className="font-medium">{sample.title}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {sample.language} · {sample.mode}
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
              <p className="mt-1 text-sm text-cyan-200">
                {selected.language} · {selected.mode}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Source", selected.source],
                  ["Engine", selected.engine],
                  ["File", selected.file],
                  ["Output", selected.output],
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
                No code transformation, execution, copy, file, or repository
                state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button onClick={() => blocked("Format")} variant="outline">
                  <FileCode2 className="mr-2 h-4 w-4" />
                  Format unavailable
                </Button>
                <Button onClick={() => blocked("Copy")} variant="outline">
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Copy unavailable
                </Button>
                <Button onClick={() => blocked("Save")} variant="outline">
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Save unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No formatter, file, source, output, execution, copy, save, or
                  repository operation is available.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Production formatting requires a verified engine, bounded
                  input, language policy, safe output, provenance, and explicit
                  file-write authorization.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
