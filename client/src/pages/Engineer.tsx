import { useState } from "react";
import {
  CircleSlash2,
  Code2,
  Cpu,
  FileSearch,
  Gauge,
  LockKeyhole,
  ShieldAlert,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";
import { Textarea } from "@/components/ui/textarea";

type Mode = "Generate" | "Review" | "Debug" | "Optimize" | "Explain";
const modes: Mode[] = ["Generate", "Review", "Debug", "Optimize", "Explain"];
export default function Engineer() {
  const [mode, setMode] = useState<Mode>("Generate");
  const [text, setText] = useState("");
  const [status, setStatus] = useState(
    "AI engineering service unavailable. Showing local input structure only."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No model request, code generation, source upload, execution, telemetry, persistence, or account operation was started.`
    );
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Cpu}
        title="AI Engineer"
        subtitle="Prepare a local engineering prompt without fabricated model output, code generation, review metrics, optimization claims, execution, or source retention."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>AI engineering service unavailable.</strong> No model, tool
          authorization, source upload, code execution sandbox, output
          validator, or project persistence service is connected.
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex flex-wrap gap-2">
            {modes.map(item => (
              <Button
                aria-pressed={mode === item}
                key={item}
                onClick={() => setMode(item)}
                size="sm"
                variant={mode === item ? "default" : "outline"}
              >
                {item}
              </Button>
            ))}
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Local input draft
              </p>
              <h2 className="mt-1 text-2xl font-semibold">
                {mode} unavailable
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Input remains in component memory. It is not sent to a model,
                stored, executed, or used to claim a result.
              </p>
              <Textarea
                className="mt-5"
                maxLength={5000}
                onChange={event => setText(event.target.value)}
                placeholder={
                  mode === "Generate"
                    ? "Describe an engineering task locally"
                    : "Paste code or an issue locally"
                }
                rows={12}
                value={text}
              />
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {text.length}/5000
                </span>
                <Button
                  disabled={!text.trim()}
                  onClick={() => blocked(`Run ${mode.toLowerCase()}`)}
                >
                  <Cpu className="mr-2 h-4 w-4" /> Run unavailable
                </Button>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Result
              </p>
              <h2 className="mt-1 text-2xl font-semibold">No output claimed</h2>
              <div className="mt-5 flex min-h-[300px] items-center justify-center rounded-xl border border-dashed border-slate-700 p-8 text-center">
                <div>
                  <Code2 className="mx-auto h-9 w-9 text-slate-500" />
                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    No model response, patch, review, debugging result,
                    optimization, explanation, translation, or execution outcome
                    is available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <FileSearch className="h-5 w-5 text-cyan-200" />
            <h2 className="mt-3 font-semibold">No review metrics</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No completed review, optimization, code quality, security, or
              accuracy count is fabricated.
            </p>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <ShieldAlert className="h-5 w-5 text-amber-200" />
            <h2 className="mt-3 font-semibold">No execution</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No code is executed, compiled, tested, deployed, or represented as
              production-ready.
            </p>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <Gauge className="h-5 w-5 text-slate-500" />
            <h2 className="mt-3 font-semibold">No performance claim</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No optimization, latency, reliability, model, or engineering
              outcome is available locally.
            </p>
          </Card>
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-5">
          <div className="flex gap-3">
            <LockKeyhole className="h-5 w-5 text-cyan-200" />
            <p className="text-sm leading-6 text-slate-400">
              Production AI engineering requires source minimization, model
              policy, tool permissions, sandbox isolation, output validation,
              secret handling, audit logs, and explicit human review.
            </p>
          </div>
          <div className="mt-4 flex gap-3">
            <CircleSlash2 className="h-5 w-5 text-slate-500" />
            <p className="text-sm leading-6 text-slate-400">
              No model request, source upload, code generation, execution,
              translation, telemetry, persistence, or account operation is
              available locally.
            </p>
          </div>
        </Card>
        <p
          aria-live="polite"
          className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400"
        >
          {status}
        </p>
      </div>
    </div>
  );
}
