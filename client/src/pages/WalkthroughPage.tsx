import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle2, Compass, LockKeyhole, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  { title: "Start with a focused workspace", description: "Use the dashboard as your daily command center for navigation, account state, and the next useful action. Authentication and live account data remain provider-dependent.", link: "/dashboard", linkText: "Open dashboard", accent: "from-cyan-500/20 to-blue-500/10" },
  { title: "Learn with visible boundaries", description: "Explore education surfaces and curriculum navigation without implying certificates, completion, or learning outcomes until the education provider is connected.", link: "/school", linkText: "Explore learning", accent: "from-violet-500/20 to-fuchsia-500/10" },
  { title: "Meet HopeAI responsibly", description: "Review the assistant experience and see clearly when a model provider, conversation persistence, or action authorization is unavailable.", link: "/hope-a-i", linkText: "Open HopeAI", accent: "from-fuchsia-500/20 to-rose-500/10" },
  { title: "Protect wallet boundaries", description: "Review wallet entry points without presenting custody, balances, transaction success, or asset ownership until verified chain and provider evidence exists.", link: "/wallet", linkText: "Review wallet", accent: "from-amber-500/20 to-orange-500/10" },
  { title: "Connect with the community", description: "Use community navigation as a starting point for social surfaces while identity, moderation, persistence, notifications, and media services remain explicit requirements.", link: "/community", linkText: "Open community", accent: "from-emerald-500/20 to-cyan-500/10" },
];

export default function WalkthroughPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];
  const isLast = currentStep === steps.length - 1;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07050f] px-4 py-8 text-white sm:px-6 sm:py-14">
      <div data-ui-polish="batch-205" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(168,85,247,0.15),transparent_35%),linear-gradient(135deg,#07050f,#0d1428_55%,#160b26)]" />
      <div className="relative mx-auto max-w-4xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="flex size-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200"><Compass className="size-5" aria-hidden="true" /></div><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/75">SKYCOIN4444 orientation</p><h1 className="mt-1 text-2xl font-black sm:text-3xl">Find your next useful surface</h1></div></div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">Local guide · {currentStep + 1} of {steps.length}</span>
        </div>
        <Card className="overflow-hidden border-white/10 bg-white/[0.055] shadow-2xl shadow-purple-950/40 backdrop-blur-xl">
          <div className={`relative overflow-hidden bg-gradient-to-br ${step.accent} p-6 sm:p-10`}>
            <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative flex min-h-[330px] flex-col justify-between">
              <div><div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/55"><Sparkles className="size-4 text-cyan-200" aria-hidden="true" />Orientation step</div><h2 className="mt-5 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">{step.title}</h2><p className="mt-5 max-w-2xl text-base leading-7 text-white/70">{step.description}</p></div>
              <div className="mt-8 flex items-center gap-3 text-sm text-white/55"><LockKeyhole className="size-4 text-amber-200" aria-hidden="true" />Live providers and account outcomes are never implied by this guide.</div>
            </div>
          </div>
          <CardContent className="p-6 sm:p-10">
            <div className="mb-8 flex gap-2" aria-label="Walkthrough progress">{steps.map((item, index) => <button key={item.title} type="button" aria-label={`Go to step ${index + 1}: ${item.title}`} onClick={() => setCurrentStep(index)} className={`h-2 flex-1 rounded-full transition-colors ${index <= currentStep ? "bg-cyan-300" : "bg-white/10"}`} />)}</div>
            <div className="flex flex-wrap items-center justify-between gap-3"><Button onClick={() => setCurrentStep(value => Math.max(value - 1, 0))} disabled={currentStep === 0} variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10"><ArrowLeft className="mr-2 size-4" />Previous</Button><div className="flex flex-wrap gap-2"><Link href={step.link}><Button className="bg-white text-black hover:bg-white/90">{step.linkText}<ArrowRight className="ml-2 size-4" /></Button></Link>{!isLast && <Button onClick={() => setCurrentStep(value => Math.min(value + 1, steps.length - 1))} variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">Next<ArrowRight className="ml-2 size-4" /></Button>}</div></div>
            {isLast && <div className="mt-8 flex items-start gap-3 rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.06] p-4 text-sm leading-6 text-white/65"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-200" aria-hidden="true" /><span><strong className="text-white">You reached the end of the guide.</strong> Continue exploring the workspace, and treat provider-dependent features as unavailable until their evidence gates are complete.</span></div>}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
