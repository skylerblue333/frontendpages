import { Link, useLocation } from "wouter";
import {
  AlertCircle,
  ArrowDownLeft,
  ArrowLeftRight,
  ArrowUpRight,
  BarChart2,
  CheckCircle2,
  Coins,
  ExternalLink,
  Globe,
  History,
  Layers,
  Link2,
  LockKeyhole,
  RefreshCw,
  Send,
  Shield,
  Wallet as WalletIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";

const CRYPTO_TABS = [
  { href: "/wallet", label: "Wallet", icon: WalletIcon },
  { href: "/portfolio", label: "Portfolio", icon: BarChart2 },
  { href: "/staking", label: "Staking", icon: Layers },
  { href: "/defi", label: "DeFi", icon: Globe },
  { href: "/trading", label: "Trade", icon: ArrowLeftRight },
  { href: "/token", label: "SKY444", icon: Coins },
] as const;

function WalletNavigation() {
  const [location] = useLocation();
  return (
    <nav aria-label="Crypto navigation" className="flex max-w-full gap-2 overflow-x-auto pb-1">
      {CRYPTO_TABS.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          aria-current={location === href ? "page" : undefined}
          className={`inline-flex shrink-0 items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${location === href ? "border-primary bg-primary text-primary-foreground" : "border-border bg-muted/30 text-muted-foreground hover:bg-muted hover:text-foreground"}`}
        >
          <Icon className="size-4" aria-hidden="true" />
          {label}
        </Link>
      ))}
    </nav>
  );
}

function CapabilityCard({ title, description, icon, detail }: { title: string; description: string; icon: React.ReactNode; detail: string }) {
  return (
    <Card className="border-border/70 bg-card/80">
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary" aria-hidden="true">{icon}</div>
          <div><CardTitle className="text-base">{title}</CardTitle><p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p></div>
        </div>
      </CardHeader>
      <CardContent><div className="rounded-xl border border-dashed border-border bg-muted/20 p-4 text-sm text-muted-foreground" role="status"><span className="font-medium text-foreground">Not configured:</span> {detail}</div></CardContent>
    </Card>
  );
}

export default function WalletPage() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-6" aria-busy="true" aria-live="polite">
        <div className="mx-auto max-w-6xl animate-pulse space-y-6"><div className="h-10 w-64 rounded-xl bg-muted" /><div className="h-16 rounded-2xl bg-muted" /><div className="h-44 rounded-2xl bg-muted" /><div className="grid gap-4 md:grid-cols-2"><div className="h-44 rounded-2xl bg-muted" /><div className="h-44 rounded-2xl bg-muted" /></div></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    const loginUrl = getLoginUrl();
    return (
      <div className="min-h-screen bg-background px-4 py-10 sm:px-6">
        <div className="mx-auto flex min-h-[70vh] max-w-xl items-center justify-center">
          <Card className="w-full border-border/70 bg-card/90 text-center shadow-lg">
            <CardContent className="space-y-5 p-8 sm:p-10">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary" aria-hidden="true"><WalletIcon className="size-7" /></div>
              <div><h1 className="text-2xl font-semibold tracking-tight">Wallet access requires authentication</h1><p className="mt-2 text-sm leading-6 text-muted-foreground">Balances, addresses, transactions, and account actions are private. Sign in when authentication is configured for this environment.</p></div>
              {loginUrl ? <Button asChild><a href={loginUrl}>Sign in to continue</a></Button> : <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200" role="status">Authentication is not configured in this environment.</div>}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border/70 bg-card/60">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <PageHeader icon={WalletIcon} title="Wallet" subtitle="A secure account workspace for balances, assets, transactions, and network activity." badge="Integration verification in progress" badgeVariant="outline" actions={<Button variant="outline" size="sm" asChild><Link href="/crypto-hub"><ArrowLeftRight className="mr-2 size-4" /> Crypto Hub</Link></Button>} />
          <WalletNavigation />
        </div>
      </div>

      <main className="mx-auto max-w-6xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Wallet status">
          {[
            { label: "Total balance", value: "Unavailable", hint: "Authenticated balance service required", icon: <BarChart2 className="size-4" /> },
            { label: "Connected network", value: "Not configured", hint: "Select and verify a supported network", icon: <Globe className="size-4" /> },
            { label: "Transactions", value: "Unavailable", hint: "Transaction history service required", icon: <History className="size-4" /> },
            { label: "Custody status", value: "Non-custodial boundary", hint: "No private keys are stored by this UI", icon: <Shield className="size-4" /> },
          ].map((item) => (
            <Card key={item.label} className="border-border/70 bg-card/80"><CardContent className="space-y-3 p-5"><div className="flex items-center justify-between text-muted-foreground"><span className="text-sm">{item.label}</span><span aria-hidden="true">{item.icon}</span></div><p className="text-xl font-semibold">{item.value}</p><p className="text-xs leading-5 text-muted-foreground">{item.hint}</p></CardContent></Card>
          ))}
        </section>

        <Card className="border-border/70 bg-card/80"><CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start"><div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-300" aria-hidden="true"><LockKeyhole className="size-5" /></div><div><h2 className="font-semibold">Wallet safety boundary</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">This screen does not claim custody, balances, ownership, or transaction success. A real wallet integration must validate network, address, amount, signing, fee, confirmation, failure, and recovery states before actions are enabled.</p></div></CardContent></Card>

        <section className="grid gap-5 lg:grid-cols-2" aria-label="Wallet capabilities">
          <CapabilityCard title="Balances and assets" description="View holdings only when a verified balance service returns authenticated data." icon={<Coins className="size-5" />} detail="The current router registry does not expose the wallet balance procedure used by the previous screen." />
          <CapabilityCard title="Receive and address book" description="Generate or display receive details only when address ownership and network are verified." icon={<ArrowDownLeft className="size-5" />} detail="No verified address-generation or address-book service is connected." />
          <CapabilityCard title="Send assets" description="Prepare a transaction with destination, network, fee, signing, and confirmation safeguards." icon={<Send className="size-5" />} detail="No verified send procedure is connected. No send form or success state is exposed." />
          <CapabilityCard title="Swap and DeFi" description="Open related trading surfaces without implying quotes, approvals, or settlement." icon={<ArrowLeftRight className="size-5" />} detail="Quotes, approvals, signatures, and settlement require verified external integrations." />
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <Card className="border-border/70 bg-card/80"><CardHeader><CardTitle className="text-base">Activity</CardTitle></CardHeader><CardContent><EmptyState title="Wallet activity is unavailable" description="Connect an authenticated transaction-history service to display deposits, withdrawals, swaps, fees, and confirmations." hint="Backend required before activity can be shown." icon={<History className="size-5" />} /></CardContent></Card>
          <Card className="border-border/70 bg-card/80"><CardHeader><CardTitle className="text-base">Live tip</CardTitle></CardHeader><CardContent className="space-y-4"><div className="rounded-xl bg-primary/5 p-4 text-sm leading-6 text-muted-foreground"><CheckCircle2 className="mb-2 size-4 text-primary" aria-hidden="true" />Confirm the destination address and network before sending assets.</div><Button variant="outline" size="sm" asChild><Link href="/platform-status"><ExternalLink className="mr-2 size-4" /> View integration status</Link></Button></CardContent></Card>
        </section>
      </main>
    </div>
  );
}
