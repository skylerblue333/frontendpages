import {
  Activity,
  ArrowLeftRight,
  BarChart3,
  BookOpen,
  Clock3,
  Info,
  LineChart,
  LockKeyhole,
  ShieldAlert,
  Wallet,
} from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";

function CapabilityCard({ title, description, icon, detail }: { title: string; description: string; icon: React.ReactNode; detail: string }) {
  return (
    <Card className="border-border/70 bg-card/80">
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary" aria-hidden="true">{icon}</div>
          <div><CardTitle className="text-base">{title}</CardTitle><p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p></div>
        </div>
      </CardHeader>
      <CardContent><div className="rounded-xl border border-dashed border-border bg-muted/20 p-4 text-sm leading-6 text-muted-foreground" role="status"><span className="font-medium text-foreground">Integration required:</span> {detail}</div></CardContent>
    </Card>
  );
}

export default function CryptoExchange() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen bg-background p-6" aria-busy="true" aria-live="polite"><div className="mx-auto max-w-7xl animate-pulse space-y-6"><div className="h-10 w-72 rounded-xl bg-muted" /><div className="h-24 rounded-2xl bg-muted" /><div className="grid gap-4 lg:grid-cols-2"><div className="h-72 rounded-2xl bg-muted" /><div className="h-72 rounded-2xl bg-muted" /></div></div></div>;
  }

  if (!isAuthenticated) {
    const loginUrl = getLoginUrl();
    return (
      <div className="min-h-screen bg-background px-4 py-10 sm:px-6"><div className="mx-auto flex min-h-[70vh] max-w-xl items-center justify-center"><Card className="w-full border-border/70 bg-card/90 text-center shadow-lg"><CardContent className="space-y-5 p-8 sm:p-10"><div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary" aria-hidden="true"><ArrowLeftRight className="size-7" /></div><div><h1 className="text-2xl font-semibold tracking-tight">Exchange access requires authentication</h1><p className="mt-2 text-sm leading-6 text-muted-foreground">Trading quotes, orders, balances, and transaction history are private capabilities. Sign in when authentication is configured for this environment.</p></div>{loginUrl ? <Button asChild><a href={loginUrl}>Sign in to continue</a></Button> : <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200" role="status">Authentication is not configured in this environment.</div>}</CardContent></Card></div></div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border/70 bg-card/60"><div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"><PageHeader icon={ArrowLeftRight} title="Crypto Exchange" subtitle="A structured trading workspace prepared for verified market, order, and settlement integrations." badge="Backend required" badgeVariant="outline" actions={<Button variant="outline" size="sm" asChild><Link href="/wallet"><Wallet className="mr-2 size-4" /> Wallet</Link></Button>} /></div></div>

      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Exchange status">
          {[
            { label: "Market data", value: "Unavailable", hint: "Verified price feed required", icon: <LineChart className="size-4" /> },
            { label: "Order book", value: "Unavailable", hint: "Exchange liquidity service required", icon: <BarChart3 className="size-4" /> },
            { label: "Order status", value: "Not configured", hint: "No order procedure is connected", icon: <Activity className="size-4" /> },
            { label: "Settlement", value: "Blocked", hint: "Signing and confirmation required", icon: <LockKeyhole className="size-4" /> },
          ].map((item) => <Card key={item.label} className="border-border/70 bg-card/80"><CardContent className="space-y-3 p-5"><div className="flex items-center justify-between text-muted-foreground"><span className="text-sm">{item.label}</span><span aria-hidden="true">{item.icon}</span></div><p className="text-xl font-semibold">{item.value}</p><p className="text-xs leading-5 text-muted-foreground">{item.hint}</p></CardContent></Card>)}
        </section>

        <Card className="border-border/70 bg-card/80"><CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start"><div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-300" aria-hidden="true"><ShieldAlert className="size-5" /></div><div><h2 className="font-semibold">Trading safety boundary</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">No live price, order, success rate, user count, response time, fill, balance, payment, or settlement claim is shown until the corresponding service is verified. Never submit an order without confirming network, asset, amount, fees, slippage, signing, and final transaction status.</p></div></CardContent></Card>

        <section className="grid gap-5 lg:grid-cols-2" aria-label="Exchange capability areas">
          <CapabilityCard title="Markets and charts" description="Display verified price, volume, chart, and order-book data." icon={<LineChart className="size-5" />} detail="The current router registry does not expose a verified market-data or order-book service." />
          <CapabilityCard title="Buy and sell orders" description="Prepare limit, market, and advanced order flows only when schemas and permissions are known." icon={<ArrowLeftRight className="size-5" />} detail="No exchange order procedure is connected. Order entry and submission remain disabled." />
          <CapabilityCard title="Orders and fills" description="Track pending, partially filled, completed, canceled, and rejected states." icon={<Clock3 className="size-5" />} detail="No authenticated order-history or fill-status service is connected." />
          <CapabilityCard title="Research and documentation" description="Provide context without presenting unverified financial advice or market intelligence." icon={<BookOpen className="size-5" />} detail="Research content and exchange documentation must be connected and sourced before being presented as current." />
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <Card className="border-border/70 bg-card/80"><CardHeader><CardTitle className="text-base">Order activity</CardTitle></CardHeader><CardContent><EmptyState title="Order activity is unavailable" description="Connect an authenticated exchange order service to display orders, fills, fees, and transaction references." hint="Backend required before activity can be shown." icon={<Clock3 className="size-5" />} /></CardContent></Card>
          <Card className="border-border/70 bg-card/80"><CardHeader><CardTitle className="text-base">Live tip</CardTitle></CardHeader><CardContent className="space-y-4"><div className="rounded-xl bg-primary/5 p-4 text-sm leading-6 text-muted-foreground"><Info className="mb-2 size-4 text-primary" aria-hidden="true" />Review the asset, network, fees, slippage, and final confirmation before acting on any trade.</div><Button variant="outline" size="sm" asChild><Link href="/platform-status"><Wallet className="mr-2 size-4" /> View integration status</Link></Button></CardContent></Card>
        </section>
      </main>
    </div>
  );
}
