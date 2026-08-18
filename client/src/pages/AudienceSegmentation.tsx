import { useState } from "react";
import {
  CircleSlash2,
  Download,
  LockKeyhole,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type SegmentState = "All" | "Review" | "Planned" | "Unavailable";
type SegmentConcept = {
  title: string;
  state: Exclude<SegmentState, "All">;
  summary: string;
  channel: string;
  identity: string;
  consent: string;
  membership: string;
  count: string;
  targeting: string;
  exportState: string;
};
const concepts: SegmentConcept[] = [
  {
    title: "Education engagement segment",
    state: "Review",
    summary:
      "Local segment concept pending consented identity resolution, purpose limitation, authorization, privacy controls, provenance, deletion handling, and auditable delivery.",
    channel: "Channel policy unavailable",
    identity: "Identity resolution unavailable",
    consent: "Consent state unavailable",
    membership: "Membership query unavailable",
    count: "Audience count unavailable",
    targeting: "Targeting list unavailable",
    exportState: "Export state unavailable",
  },
  {
    title: "Community participation segment",
    state: "Planned",
    summary:
      "Local community segment concept pending privacy-aware membership rules, moderation visibility, consent, retention, and delivery controls.",
    channel: "Channel policy unavailable",
    identity: "Identity resolution unavailable",
    consent: "Consent state unavailable",
    membership: "Membership query unavailable",
    count: "Audience count unavailable",
    targeting: "Targeting list unavailable",
    exportState: "Export state unavailable",
  },
  {
    title: "Financial activity segment",
    state: "Unavailable",
    summary:
      "Local financial segment concept pending sensitive identity authorization, purpose limitation, deletion, audit, and secure export review.",
    channel: "Channel policy unavailable",
    identity: "Identity resolution unavailable",
    consent: "Consent state unavailable",
    membership: "Membership query unavailable",
    count: "Audience count unavailable",
    targeting: "Targeting list unavailable",
    exportState: "Export state unavailable",
  },
];
export default function AudienceSegmentation() {
  const [state, setState] = useState<SegmentState>("All");
  const [selected, setSelected] = useState(concepts[0]);
  const [status, setStatus] = useState(
    "Audience service unavailable. Showing local segment concepts only."
  );
  const visible = concepts.filter(
    item => state === "All" || item.state === state
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No identity, consent, segment membership, audience count, targeting list, campaign, export, notification, or marketing operation was started.`
    );
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Layers3}
        title="Audience segmentation"
        subtitle="Review local segment concepts without fabricated identities, consent, memberships, audience counts, targeting lists, campaigns, exports, or marketing conclusions."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Audience service unavailable.</strong> No consented identity
          resolution, membership source, targeting list, campaign connector, or
          delivery service is connected.
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Segment preview
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Review audience concepts
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Typed local fixtures show segmentation structure only; they do not
              represent real identities, consent, memberships, counts,
              targeting, campaigns, or delivery.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(
                ["All", "Review", "Planned", "Unavailable"] as SegmentState[]
              ).map(item => (
                <Button
                  key={item}
                  aria-pressed={state === item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {visible.map(item => (
                <button
                  className={`w-full rounded-xl border p-5 text-left ${selected.title === item.title ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={item.title}
                  onClick={() => setSelected(item)}
                  type="button"
                >
                  <div className="flex justify-between gap-3">
                    <p className="font-medium">{item.title}</p>
                    <span className="text-xs text-slate-400">{item.state}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{item.summary}</p>
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
                Selected segment
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <div className="mt-5 grid gap-2">
                {(
                  [
                    ["Channel", selected.channel],
                    ["Identity", selected.identity],
                    ["Consent", selected.consent],
                    ["Membership", selected.membership],
                    ["Count", selected.count],
                    ["Targeting", selected.targeting],
                    ["Export", selected.exportState],
                  ] as Array<[string, string]>
                ).map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Estimate audience")}
                  variant="outline"
                >
                  <Layers3 className="mr-2 h-4 w-4" /> Estimate unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export audience")}
                  variant="outline"
                >
                  <Download className="mr-2 h-4 w-4" /> Export unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Segmentation requires consented identity resolution, purpose
                  limitation, authorization, privacy controls, provenance,
                  deletion handling, and auditable audience delivery.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No identity, consent, membership, count, targeting list,
                  campaign, export, notification, or marketing operation is
                  available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No audience count, targeting conclusion, campaign audience, or
                  marketing outcome is fabricated.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
