import type { ComponentType, ReactNode } from "react";
import { AlertTriangle, CheckCircle2, Clock3, Info, LockKeyhole, RefreshCw, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Icon = ComponentType<{ className?: string }>;

export function ScreenHero({ icon: Icon, eyebrow, title, description, badge, actions, children }: { icon: Icon; eyebrow?: string; title: string; description: string; badge?: string; actions?: ReactNode; children?: ReactNode }) {
  return <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-indigo-950 via-[#10152e] to-fuchsia-950"><div className="pointer-events-none absolute -left-24 -top-24 size-80 rounded-full bg-cyan-500/15 blur-3xl" /><div className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-fuchsia-500/15 blur-3xl" /><div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"><div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><div className="flex items-center gap-3"> <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200 shadow-lg shadow-cyan-950/30"><Icon className="size-6" aria-hidden="true" /></div><div>{eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>}<h1 className="mt-1 text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h1></div>{badge && <Badge className="border-white/15 bg-white/10 text-slate-200">{badge}</Badge>}</div><p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">{description}</p></div>{actions && <div className="flex flex-wrap gap-2">{actions}</div>}</div>{children && <div className="mt-7">{children}</div>}</div></section>;
}

export function ScreenStatGrid({ items }: { items: Array<{ label: string; value: string; hint: string; icon?: Icon; tone?: "cyan" | "violet" | "amber" | "slate" }> }) {
  return <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Screen status">{items.map(({ label, value, hint, icon: Icon, tone = "cyan" }) => <Card key={label} className="border-white/10 bg-white/[0.04]"><CardContent className="p-5"><div className="flex items-center justify-between text-slate-400"><span className="text-sm">{label}</span>{Icon && <Icon className={`size-4 ${tone === "violet" ? "text-violet-300" : tone === "amber" ? "text-amber-300" : tone === "slate" ? "text-slate-300" : "text-cyan-300"}`} aria-hidden="true" />}</div><p className="mt-2 text-2xl font-bold text-white">{value}</p><p className="mt-1 text-xs leading-5 text-slate-400">{hint}</p></CardContent></Card>)}</section>;
}

export function ScreenFeatureGrid({ features }: { features: Array<{ title: string; description: string; icon: Icon; status?: string; action?: ReactNode }> }) {
  return <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" aria-label="Available features">{features.map(({ title, description, icon: Icon, status, action }) => <Card key={title} className="border-white/10 bg-white/[0.04] transition-colors hover:border-cyan-300/30"><CardContent className="flex h-full flex-col p-5"><div className="flex items-start justify-between gap-3"><div className="flex size-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200"><Icon className="size-5" aria-hidden="true" /></div>{status && <Badge variant="outline" className="border-amber-300/30 bg-amber-300/10 text-amber-200">{status}</Badge>}</div><h3 className="mt-4 font-semibold text-white">{title}</h3><p className="mt-2 flex-1 text-sm leading-6 text-slate-300">{description}</p>{action && <div className="mt-5">{action}</div>}</CardContent></Card>)}</section>;
}

export function ScreenPreviewBanner({ title = "Preview boundary", children }: { title?: string; children: ReactNode }) {
  return <Card className="border-amber-300/15 bg-amber-300/[0.04]"><CardContent className="flex items-start gap-3 p-5"><Info className="mt-0.5 size-5 shrink-0 text-amber-300" aria-hidden="true" /><div><h2 className="font-semibold text-white">{title}</h2><p className="mt-1 text-sm leading-6 text-slate-300">{children}</p></div></CardContent></Card>;
}

export function ScreenStatePanel({ type, title, description, onRetry }: { type: "loading" | "empty" | "error" | "unavailable" | "auth" | "success"; title: string; description: string; onRetry?: () => void }) {
  const config = { loading: { icon: Clock3, tone: "text-cyan-300" }, empty: { icon: Sparkles, tone: "text-violet-300" }, error: { icon: AlertTriangle, tone: "text-red-300" }, unavailable: { icon: LockKeyhole, tone: "text-amber-300" }, auth: { icon: LockKeyhole, tone: "text-amber-300" }, success: { icon: CheckCircle2, tone: "text-emerald-300" } }[type];
  const Icon = config.icon;
  return <Card className="border-white/10 bg-white/[0.04]"><CardContent className="flex flex-col items-center p-8 text-center"><div className="flex size-12 items-center justify-center rounded-2xl bg-white/5"><Icon className={`size-6 ${config.tone}`} aria-hidden="true" /></div><h2 className="mt-4 text-lg font-semibold text-white">{title}</h2><p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">{description}</p>{onRetry && <Button variant="outline" onClick={onRetry} className="mt-5 border-white/15 bg-white/5 text-white"><RefreshCw className="mr-2 size-4" />Try again</Button>}</CardContent></Card>;
}
