import { Globe2, LockKeyhole, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

const controls = [
  ["Region selection", "Select a user region before enabling jurisdiction-sensitive workflows."],
  ["Feature eligibility", "Map regulated features to verified regional policy rules."],
  ["Audit evidence", "Persist policy decisions and the policy version used for each decision."],
  ["Privacy boundary", "Keep location and eligibility data isolated from unrelated product domains."],
];

export default function JurisdictionCenter() {
  return <div className="container max-w-6xl animate-page-in py-8"><PageHeader icon={Globe2} title="Jurisdiction Center" subtitle="Regional policy, eligibility, and compliance boundaries" /><div className="mb-8 rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.05] p-6"><div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200"><ShieldCheck className="size-4" />Safety boundary</div><h2 className="mt-3 text-3xl font-black">Know the jurisdiction before enabling the workflow.</h2><p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">This screen supplies the missing frontend boundary for regional feature gating. It intentionally does not infer legal eligibility or claim compliance without an authoritative policy service.</p></div><div className="grid gap-4 md:grid-cols-2">{controls.map(([title, description]) => <article key={title} className="card p-5"><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p><div className="mt-5 rounded-xl border border-dashed border-border/60 p-4 text-xs text-amber-200">Policy source not connected</div></article>)}</div><div className="mt-8 card p-6"><div className="flex items-center gap-3"><LockKeyhole className="size-5 text-amber-200" /><h3 className="font-bold">Current decision</h3></div><div className="mt-4 rounded-2xl border border-dashed border-border/60 p-6 text-center"><p className="font-semibold">No jurisdiction selected</p><p className="mt-2 text-sm text-muted-foreground">Connect an authoritative policy and identity source before activating jurisdiction-sensitive actions.</p></div></div></div>;
}
