import { Layers3, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

const sources = [
  { name: "frontendpages", role: "Canonical frontend", status: "Primary", note: "Preserve the strongest existing shared shell, routing, components, and page implementations." },
  { name: "ShadowChat-Pro-Edition", role: "Frontend-rich source", status: "Harvest", note: "Compare page-by-page and retain implementations that add real capability rather than duplication." },
  { name: "ShadowChat-Core", role: "Unique capability source", status: "Harvest", note: "Preserve distinctive generated/application screens and migrate only after evidence and quality review." },
];

const gaps = [
  "Unique crypto/community feed screens",
  "Jurisdiction and regional policy selection",
  "Live rankings and reputation views",
  "Commerce product discovery and search",
  "Financial reports and transaction history",
  "Cross-frontend route parity and migration provenance",
];

export default function FrontendIntegrationHub() {
  return (
    <div className="container max-w-7xl animate-page-in py-8">
      <PageHeader icon={Layers3} title="Frontend Integration Hub" subtitle="One canonical frontend, three source repositories, zero lost functionality" />
      <div className="mb-8 rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/[0.12] via-violet-400/[0.08] to-transparent p-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200"><Sparkles className="size-4" />Unified frontend program</div>
        <h2 className="mt-3 text-3xl font-black tracking-tight">Harvest the best work. Preserve every unique capability.</h2>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300">frontendpages remains the integration target. ShadowChat-Pro-Edition and ShadowChat-Core are source repositories for additional screens and interaction patterns. Nothing is treated as production-ready merely because a page exists.</p>
      </div>
      <section className="grid gap-4 md:grid-cols-3">
        {sources.map(source => <article key={source.name} className="card p-5"><div className="flex items-center gap-3"><Workflow className="size-5 text-cyan-200" /><h3 className="font-bold">{source.name}</h3></div><p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{source.role}</p><p className="mt-4 text-sm leading-6 text-muted-foreground">{source.note}</p><span className="mt-4 inline-flex rounded-full border border-border/60 px-3 py-1 text-xs">{source.status}</span></article>)}
      </section>
      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card p-5"><h3 className="text-lg font-bold">Current gap queue</h3><div className="mt-4 space-y-3">{gaps.map((gap, index) => <div key={gap} className="flex gap-3 rounded-xl border border-border/50 p-4"><span className="font-mono text-xs text-cyan-200">{String(index + 1).padStart(2, "0")}</span><span className="text-sm">{gap}</span></div>)}</div></div>
        <div className="card p-5"><div className="flex items-center gap-3"><ShieldCheck className="size-5 text-emerald-300" /><h3 className="text-lg font-bold">Integration rules</h3></div><ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground"><li>Compare before copying.</li><li>Prefer the strongest implementation, not the newest filename.</li><li>Keep unique screens even when the domain already exists.</li><li>Mark unavailable backend capabilities honestly.</li><li>Record source repository and migration provenance.</li><li>Verify build, routes, tests, and security before declaring completion.</li></ul></div>
      </section>
    </div>
  );
}
