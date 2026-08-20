import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { Link } from "wouter";
import {
  Activity,
  ArrowRight,
  Bell,
  Brain,
  GraduationCap,
  ShieldCheck,
  Store,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const quickLinks = [
  { label: "Profile", href: "/profile", icon: ShieldCheck },
  { label: "HopeAI", href: "/hope-a-i", icon: Brain },
  { label: "SkySchool", href: "/school", icon: GraduationCap },
  { label: "Wallet", href: "/wallet", icon: WalletCards },
  { label: "Marketplace", href: "/mega-marketplace", icon: Store },
  { label: "Notifications", href: "/notifications-hub", icon: Bell },
];

const unavailableAreas = [
  {
    title: "Financial overview",
    description:
      "Balances, prices, orders, staking, and transaction activity appear only after verified providers and custody boundaries are connected.",
    href: "/crypto-hub",
  },
  {
    title: "AI activity",
    description:
      "Assistant history, model usage, and agent outcomes appear only when an authorized model provider and persistence contract are available.",
    href: "/hope-a-i",
  },
  {
    title: "Learning progress",
    description:
      "Course progress and certificates appear only after verified education records and issuance workflows are connected.",
    href: "/school",
  },
];

export default function Dashboard() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <main
        className="grid min-h-screen place-items-center bg-[#080b14] text-white"
        aria-busy="true"
      >
        <div data-ui-polish="batch-185" className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center">
          <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-cyan-300 border-t-transparent" />
          <p className="text-sm text-slate-300">Checking your session…</p>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#080b14] px-6 text-white">
        <section className="max-w-lg rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-500/10 via-white/5 to-violet-500/10 p-8 text-center shadow-2xl">
          <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-400 text-slate-950">
            <Activity className="h-7 w-7" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-black tracking-tight">
            Your SKYCOIN4444 workspace
          </h1>
          <p className="mt-3 text-slate-300">
            Sign in to access your account surfaces. Unsupported financial, AI,
            and provider-dependent outcomes remain clearly bounded rather than
            simulated.
          </p>
          <a className="mt-7 inline-flex" href={getLoginUrl()}>
            <Button className="gap-2 bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 hover:from-cyan-300 hover:to-violet-400">
              Sign in to continue{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#080b14] pb-16 text-white">
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8 lg:px-8">
        <header className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end">
          <div>
            <Badge className="border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
              Daily workspace
            </Badge>
            <h1 className="mt-3 text-4xl font-black tracking-tight">
              Welcome back{user.name ? `, ${user.name}` : ""}.
            </h1>
            <p className="mt-2 max-w-2xl text-slate-400">
              A focused starting point for account, learning, community, and
              provider-dependent features—with no fabricated metrics or success
              states.
            </p>
          </div>
          <Link href="/settings">
            <Button
              variant="outline"
              className="border-white/15 bg-white/5 text-white hover:bg-white/10"
            >
              Account settings
            </Button>
          </Link>
        </header>

        <section aria-labelledby="quick-actions-heading">
          <div className="mb-4 flex items-center justify-between">
            <h2 id="quick-actions-heading" className="text-lg font-semibold">
              Quick actions
            </h2>
            <span className="text-xs text-slate-500">
              Navigate verified surfaces
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {quickLinks.map(({ label, href, icon: Icon }) => (
              <Link key={href} href={href}>
                <a className="group flex min-h-24 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.07]">
                  <Icon className="h-5 w-5 text-cyan-300" aria-hidden="true" />
                  <span className="flex items-center justify-between gap-2 text-sm font-medium">
                    {label}
                    <ArrowRight
                      className="h-3.5 w-3.5 text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-cyan-200"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </section>

        <section
          className="grid gap-5 lg:grid-cols-3"
          aria-label="Service status"
        >
          {unavailableAreas.map(area => (
            <Card
              key={area.title}
              className="border-white/10 bg-white/[0.04] text-white"
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="text-base">{area.title}</CardTitle>
                  <Badge
                    variant="outline"
                    className="border-amber-300/30 text-amber-200"
                  >
                    Unavailable
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-slate-400">
                  {area.description}
                </p>
                <Link href={area.href}>
                  <Button
                    variant="ghost"
                    className="mt-4 px-0 text-cyan-200 hover:bg-transparent hover:text-cyan-100"
                  >
                    Review boundary{" "}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </section>

        <section
          className="rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.05] p-5"
          aria-labelledby="truth-heading"
        >
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300"
              aria-hidden="true"
            />
            <div>
              <h2 id="truth-heading" className="font-semibold text-emerald-100">
                Truthful product state
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                This dashboard confirms navigation and session state only. It
                does not claim balances, market prices, transactions, AI
                outputs, certificates, uptime, or production infrastructure
                readiness.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
