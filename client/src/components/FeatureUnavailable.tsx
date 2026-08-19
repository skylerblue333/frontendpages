import { AlertTriangle, ArrowRight, CheckCircle2, LockKeyhole, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export type FeatureUnavailableProps = {
  title: string;
  description: string;
  capability?: string;
  nextStep?: string;
};

export function FeatureUnavailable({ title, description, capability = "This capability", nextStep = "Return to the launch hub" }: FeatureUnavailableProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07050f] px-4 py-10 text-white sm:px-6 sm:py-16" aria-labelledby="feature-unavailable-title">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(168,85,247,0.16),transparent_35%),linear-gradient(135deg,#07050f,#0c1022_55%,#160b26)]" />
      <div className="pointer-events-none absolute -left-24 top-1/3 size-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
          <span>SKYCOIN4444 · Release boundary</span>
          <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-amber-200">Not active</span>
        </div>
        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl shadow-purple-950/40 backdrop-blur-xl">
          <div className="border-b border-white/10 bg-gradient-to-r from-amber-300/[0.12] via-purple-400/[0.08] to-cyan-300/[0.1] p-6 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 shadow-lg shadow-amber-950/20">
                <AlertTriangle className="size-7 text-amber-200" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">Provider boundary</p>
                <h1 id="feature-unavailable-title" className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">{description}</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-9">
            <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-100"><ShieldCheck className="size-4" aria-hidden="true" />Truthful state</div>
              <p className="mt-3 text-sm leading-6 text-white/65">{capability} is not presented as active, simulated, or financially successful until its provider, authorization, persistence, and monitoring are verified.</p>
            </div>
            <div className="rounded-2xl border border-amber-300/15 bg-amber-300/[0.05] p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-amber-100"><LockKeyhole className="size-4" aria-hidden="true" />Release requirement</div>
              <p className="mt-3 text-sm leading-6 text-white/65">No fabricated balances, users, transactions, market data, AI responses, security status, or success outcomes are shown on this route.</p>
            </div>
          </div>
          <div className="border-t border-white/10 px-6 py-5 sm:px-9">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/45"><CheckCircle2 className="size-4 text-emerald-300" aria-hidden="true" />What is preserved</p>
            <p className="mt-2 text-sm leading-6 text-white/60">The route remains discoverable and honest while the real provider, authorization, persistence, monitoring, and acceptance evidence are completed.</p>
          </div>
          <div className="flex flex-wrap gap-3 border-t border-white/10 p-6 sm:p-9">
            <Link href="/"><Button className="bg-white text-black shadow-lg shadow-white/10 hover:bg-white/90">{nextStep}<ArrowRight className="ml-2 size-4" /></Button></Link>
            <Link href="/dashboard"><Button variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">Open dashboard</Button></Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default FeatureUnavailable;
