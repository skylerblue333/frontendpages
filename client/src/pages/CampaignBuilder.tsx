import { useState } from "react";
import { BadgeCheck, Check, DollarSign, FileCheck2, Flag, Globe2, Megaphone, RefreshCw, ShieldAlert, Target, UsersRound, WifiOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScreenFeatureGrid, ScreenHero, ScreenPreviewBanner, ScreenStatGrid } from "@/components/ScreenExperience";

const CHANNELS = ["Community", "Newsletter", "Partner", "Organic web"];
const GATES = ["Objective and success event defined", "Audience consent and eligibility reviewed", "Creative and claims approved", "Budget and payer authorized", "Landing destination tested", "Measurement and stop criteria defined"];

export default function CampaignBuilder() {
  const [objective, setObjective] = useState("Explain a product concept");
  const [audience, setAudience] = useState("Audience not defined");
  const [channel, setChannel] = useState(CHANNELS[0]);
  const [budget, setBudget] = useState("0");
  const [launchDate, setLaunchDate] = useState("Unscheduled preview");
  const [brief, setBrief] = useState("");
  const [saved, setSaved] = useState(false);
  const [launched, setLaunched] = useState(false);

  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero icon={Megaphone} eyebrow="Growth · Campaign Planning" title="Build the brief before the campaign gets a button." description="Define a hypothetical objective, audience, channel, budget placeholder, schedule, and creative requirements. This page does not launch ads, spend money, target people, send messages, or claim performance." badge="Preview campaign builder">
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => { setSaved(true); setLaunched(false); }} className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"><FileCheck2 className="mr-2 size-4" />Save local brief</Button>
          <Button onClick={() => setLaunched(true)} variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10"><Flag className="mr-2 size-4" />Review launch boundary</Button>
          <Button onClick={() => { setSaved(false); setLaunched(false); }} variant="ghost" className="text-slate-400 hover:text-white"><RefreshCw className="mr-2 size-4" />Reset</Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid items={[{ label: "Brief", value: saved ? "Saved locally" : "Draft", hint: "No campaign record", icon: FileCheck2 }, { label: "Channel", value: channel, hint: "Local selection", icon: Globe2, tone: "violet" }, { label: "Budget", value: `$${budget || "0"}`, hint: "Hypothetical input", icon: DollarSign, tone: "amber" }, { label: "Launch", value: "Unavailable", hint: "No ad connector", icon: WifiOff, tone: "slate" }]} />
        <ScreenPreviewBanner title="Campaign launch evidence boundary">A brief is not a live campaign. Real launch requires a verified audience, consent and targeting basis, approved creative and claims, budget authority, payment controls, destination integrity, platform configuration, measurement definitions, stop criteria, and an auditable launch action.</ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-white/10 bg-white/[0.04]"><CardContent className="p-6">
            <div className="flex items-center gap-3"><Megaphone className="size-5 text-cyan-300" /><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Campaign brief</p><h2 className="mt-1 text-2xl font-black">Shape the hypothesis</h2></div></div>
            <div className="mt-6 space-y-5">
              <div><label className="mb-2 block text-sm text-slate-300" htmlFor="objective">Objective</label><Input id="objective" value={objective} onChange={(event) => { setObjective(event.target.value); setSaved(false); }} className="border-white/10 bg-black/20 text-white" /></div>
              <div><p className="mb-2 text-sm text-slate-300">Audience context</p><div className="flex flex-wrap gap-2">{["Audience not defined", "Existing consented cohort", "Public educational audience", "Partner-defined cohort"].map((item) => <button key={item} onClick={() => { setAudience(item); setSaved(false); }} className={`rounded-xl border px-3 py-2 text-sm ${audience === item ? "border-cyan-300/40 bg-cyan-300/[0.1] text-cyan-200" : "border-white/10 text-slate-400"}`}>{item}</button>)}</div><p className="mt-2 text-xs text-slate-500">A selected label does not establish eligibility, consent, reach, or targeting.</p></div>
              <div><p className="mb-2 text-sm text-slate-300">Channel plan</p><div className="grid gap-2 sm:grid-cols-2">{CHANNELS.map((item) => <button key={item} onClick={() => { setChannel(item); setSaved(false); }} className={`rounded-xl border p-3 text-left text-sm ${channel === item ? "border-violet-300/40 bg-violet-300/[0.08] text-violet-200" : "border-white/10 text-slate-400"}`}>{item}<span className="mt-1 block text-xs text-slate-500">Planning placeholder</span></button>)}</div></div>
              <div className="grid gap-4 sm:grid-cols-2"><div><label className="mb-2 block text-sm text-slate-300" htmlFor="budget">Budget placeholder</label><Input id="budget" value={budget} onChange={(event) => { setBudget(event.target.value.replace(/[^0-9.]/g, "")); setSaved(false); }} inputMode="decimal" className="border-white/10 bg-black/20 text-white" /></div><div><label className="mb-2 block text-sm text-slate-300" htmlFor="launch-date">Schedule label</label><Input id="launch-date" value={launchDate} onChange={(event) => { setLaunchDate(event.target.value); setSaved(false); }} className="border-white/10 bg-black/20 text-white" /></div></div>
              <Textarea value={brief} onChange={(event) => { setBrief(event.target.value); setSaved(false); }} placeholder="Draft message, promise, CTA, and evidence notes" className="min-h-28 border-white/10 bg-black/20 text-white placeholder:text-slate-500" />
            </div>
          </CardContent></Card>
          <Card className="border-white/10 bg-white/[0.04]"><CardContent className="p-6">
            <div className="flex items-center gap-3"><BadgeCheck className="size-5 text-violet-300" /><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Readiness gates</p><h2 className="mt-1 text-xl font-bold">Review before launch</h2></div></div>
            <div className="mt-5 space-y-3">{GATES.map((gate) => <div key={gate} className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/15 p-3"><Check className="size-4 text-slate-500" /><span className="flex-1 text-sm text-slate-300">{gate}</span><span className="text-xs text-amber-200">Required</span></div>)}</div>
            <div className="mt-6 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4"><div className="flex items-center gap-2 font-medium text-amber-200"><ShieldAlert className="size-4" />No launch action exists</div><p className="mt-2 text-sm leading-6 text-slate-300">The selected budget is not authorized, the audience is not targeted, and no platform or payment request was made.</p></div>
            {saved && <div className="mt-6 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] p-4"><p className="font-semibold text-cyan-200">Local campaign brief saved</p><p className="mt-1 text-sm text-slate-400">Objective, audience label, channel, budget placeholder, schedule label, and copy remain local.</p></div>}
            {launched && <div className="mt-6 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4"><p className="font-semibold text-amber-200">Launch unavailable</p><p className="mt-1 text-sm text-slate-400">No campaign, audience, ad, payment, message, or performance record was created.</p></div>}
          </CardContent></Card>
        </section>
        <section className="grid gap-4 md:grid-cols-3"><Card className="border-white/10 bg-white/[0.04]"><CardContent className="p-5"><Target className="size-5 text-cyan-300" /><h3 className="mt-3 font-semibold">Objectives need events</h3><p className="mt-2 text-sm leading-6 text-slate-400">Awareness, consideration, conversion, and retention require different measurable definitions.</p></CardContent></Card><Card className="border-white/10 bg-white/[0.04]"><CardContent className="p-5"><UsersRound className="size-5 text-violet-300" /><h3 className="mt-3 font-semibold">Audience is sensitive</h3><p className="mt-2 text-sm leading-6 text-slate-400">Consent, eligibility, targeting basis, exclusions, and privacy controls must precede activation.</p></CardContent></Card><Card className="border-white/10 bg-white/[0.04]"><CardContent className="p-5"><ShieldAlert className="size-5 text-amber-300" /><h3 className="mt-3 font-semibold">No fake performance</h3><p className="mt-2 text-sm leading-6 text-slate-400">A brief cannot prove delivery, reach, conversion, revenue, or return on spend.</p></CardContent></Card></section>
        <ScreenFeatureGrid features={[{ title: "Brief is a hypothesis", description: "Make objective, audience, channel, budget, and creative assumptions visible for review.", icon: Megaphone, status: "Pattern" }, { title: "Launch is a controlled action", description: "Payment, targeting, consent, creative, and stop criteria require explicit gates.", icon: ShieldAlert, status: "Required" }, { title: "No fake activation", description: "Saving a local brief is not launching a campaign, spending money, or messaging people.", icon: WifiOff, status: "Guardrail" }]} />
      </main>
    </div>
  );
}
