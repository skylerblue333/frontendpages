import { useState } from "react";
import {
  Brain,
  CircleSlash2,
  LockKeyhole,
  ShieldAlert,
  Tag,
  Trash2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";
import { Textarea } from "@/components/ui/textarea";
export default function MemorySystem() {
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState(
    "Memory service unavailable. Showing a local privacy boundary only."
  );
  const blocked = (a: string) =>
    setStatus(
      `${a} is unavailable locally. No memory, preference, profile, AI, retention, deletion, notification, or account mutation was started.`
    );
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Brain}
        title="Memory system"
        subtitle="Review local memory concepts without fabricated personal memories, confidence, preference inference, graph counts, continuity, or storage outcomes."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Memory service unavailable.</strong> No consent, personal-data
          store, inference model, retention policy, deletion control, or account
          memory endpoint is connected.
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <Badge variant="outline">Local draft</Badge>
            <h2 className="mt-3 text-2xl font-semibold">
              Memory storage unavailable
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              The draft below remains in component memory only. It is not
              retained, profiled, transmitted, indexed, or used for
              personalization.
            </p>
            <Textarea
              aria-label="Memory draft"
              className="mt-5"
              onChange={e => setDraft(e.target.value)}
              placeholder="Write a memory draft for local review only"
              rows={6}
              value={draft}
            />
            <div className="mt-4 flex flex-wrap gap-2">
              <Button onClick={() => blocked("Store memory")} variant="outline">
                Store unavailable
              </Button>
              <Button
                onClick={() => {
                  setDraft("");
                  setStatus(
                    "Local memory draft cleared. No stored memory or deletion request was sent."
                  );
                }}
                variant="ghost"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Clear local draft
              </Button>
            </div>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="rounded-xl border border-dashed border-slate-700 p-8 text-center">
              <Brain className="mx-auto h-9 w-9 text-slate-500" />
              <h2 className="mt-4 text-xl font-semibold">
                Stored memories unavailable
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                No memory, confidence, source, preference, or retention record
                is available.
              </p>
              <Button
                className="mt-5"
                onClick={() => blocked("Load memories")}
                variant="outline"
              >
                Load unavailable
              </Button>
            </div>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [ShieldAlert, "No personal inference"],
            [Tag, "No preference model"],
            [CircleSlash2, "No graph or continuity"],
          ].map(([Icon, label]) => (
            <Card
              className="border-slate-800 bg-slate-900/75 p-5"
              key={String(label)}
            >
              <Icon className="h-5 w-5 text-cyan-200" />
              <h2 className="mt-3 font-semibold">{String(label)}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                No confidence score, preference inference, graph node, context
                window, memory depth, or model behavior is available locally.
              </p>
            </Card>
          ))}
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-5">
          <div className="flex gap-3">
            <LockKeyhole className="h-5 w-5 text-cyan-200" />
            <p className="text-sm leading-6 text-slate-400">
              Production memory requires explicit consent, source provenance,
              access controls, retention limits, deletion workflows, model
              transparency, and protection for sensitive personal information.
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
