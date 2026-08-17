import { useMemo, useState } from "react";
import { Link } from "wouter";
import {
  Activity,
  ArrowLeftRight,
  BarChart3,
  Clock3,
  Cpu,
  ExternalLink,
  Flame,
  History,
  Info,
  Lock,
  RefreshCw,
  ShieldAlert,
  Wallet,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";

const TOKENS = [
  { symbol: "SKY444", name: "SkyCoin 4444", state: "Integration required" },
  { symbol: "BTC", name: "Bitcoin", state: "Live data unavailable" },
  { symbol: "TRUMP", name: "TRUMP", state: "Live data unavailable" },
  { symbol: "DOGE", name: "Dogecoin", state: "Live data unavailable" },
  { symbol: "USDT", name: "Tether USD", state: "Live data unavailable" },
  { symbol: "XMR", name: "Monero", state: "Live data unavailable" },
  { symbol: "ETH", name: "Ethereum", state: "Live data unavailable" },
  { symbol: "SOL", name: "Solana", state: "Live data unavailable" },
] as const;

type TokenSymbol = (typeof TOKENS)[number]["symbol"];

type IntegrationPanelProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  capability: string;
  nextStep: string;
};

function IntegrationPanel({ title, description, icon, capability, nextStep }: IntegrationPanelProps) {
  return (
    <Card className="border-border/70 bg-card/80 shadow-sm">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary" aria-hidden="true">
              {icon}
            </div>
            <div>
              <CardTitle className="text-base">{title}</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          <Badge variant="outline" className="shrink-0 border-amber-500/30 bg-amber-500/10 text-amber-300">
            Backend required
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-xl border border-dashed border-border bg-muted/20 p-4" role="status">
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 size-4 shrink-0 text-amber-300" aria-hidden="true" />
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">Capability unavailable in this environment</p>
              <p className="text-sm leading-6 text-muted-foreground">{capability}</p>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-xl bg-primary/5 p-4 text-sm text-muted-foreground">
          <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <p><span className="font-medium text-foreground">Next step:</span> {nextStep}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" disabled>
            <RefreshCw className="mr-2 size-4" aria-hidden="true" /> Retry when connected
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/platform-status"><ExternalLink className="mr-2 size-4" aria-hidden="true" /> View platform status</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function CryptoHub() {
  const { isAuthenticated, loading } = useAuth();
  const [selectedToken, setSelectedToken] = useState<TokenSymbol>("SKY444");

  const selectedAsset = useMemo(
    () => TOKENS.find((token) => token.symbol === selectedToken) ?? TOKENS[0],
    [selectedToken],
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-6" aria-busy="true" aria-live="polite">
        <div className="mx-auto max-w-7xl space-y-6 animate-pulse">
          <div className="h-10 w-72 rounded-xl bg-muted" />
          <div className="h-24 rounded-2xl bg-muted" />
          <div className="grid gap-4 lg:grid-cols-2"><div className="h-72 rounded-2xl bg-muted" /><div className="h-72 rounded-2xl bg-muted" /></div>
        </div>
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
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary" aria-hidden="true"><Wallet className="size-7" /></div>
              <div>
                <h1 className="text-2xl font-semibold tracking-tight">Crypto Hub requires authentication</h1>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Balances, transaction history, and account actions are private capabilities. Sign in when authentication is configured for this environment.</p>
              </div>
              {loginUrl ? (
                <Button asChild><a href={loginUrl}>Sign in to continue</a></Button>
              ) : (
                <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200" role="status">Authentication is not configured in this environment.</div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border/70 bg-card/60">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <PageHeader
            icon={Cpu}
            title="Crypto Hub"
            subtitle="A structured workspace for digital-asset capabilities with clear integration boundaries."
            badge="Integration verification in progress"
            badgeVariant="outline"
            actions={<Button variant="outline" size="sm" asChild><Link href="/wallet"><Wallet className="mr-2 size-4" /> Wallet</Link></Button>}
          />
        </div>
      </div>

      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Crypto Hub status">
          {[
            { label: "Portfolio value", value: "Unavailable", hint: "Live balance integration required", icon: <BarChart3 className="size-4" /> },
            { label: "Market prices", value: "Unavailable", hint: "Connect a verified price oracle", icon: <Activity className="size-4" /> },
            { label: "Transactions", value: "Unavailable", hint: "Connect the account transaction service", icon: <History className="size-4" /> },
            { label: "Network", value: "Not configured", hint: "Verify supported chain settings", icon: <Zap className="size-4" /> },
          ].map((item) => (
            <Card key={item.label} className="border-border/70 bg-card/80">
              <CardContent className="space-y-3 p-5">
                <div className="flex items-center justify-between text-muted-foreground"><span className="text-sm">{item.label}</span><span aria-hidden="true">{item.icon}</span></div>
                <p className="text-xl font-semibold">{item.value}</p>
                <p className="text-xs leading-5 text-muted-foreground">{item.hint}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <Card className="border-border/70 bg-card/80">
          <CardContent className="flex flex-col gap-4 p-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-semibold">Asset coverage</h2>
              <p className="mt-1 text-sm text-muted-foreground">These symbols are present in the current screen design; availability and pricing still require verified integrations.</p>
            </div>
            <div className="flex max-w-full gap-2 overflow-x-auto pb-1" aria-label="Asset selection">
              {TOKENS.map((token) => (
                <button
                  key={token.symbol}
                  type="button"
                  onClick={() => setSelectedToken(token.symbol)}
                  aria-pressed={selectedToken === token.symbol}
                  className={`shrink-0 rounded-lg border px-3 py-2 text-left text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${selectedToken === token.symbol ? "border-primary bg-primary/10 text-foreground" : "border-border bg-muted/20 text-muted-foreground hover:bg-muted/50"}`}
                >
                  <span className="block font-semibold">{token.symbol}</span>
                  <span className="block text-[11px]">{token.state}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="space-y-5">
          <TabsList className="h-auto w-full justify-start gap-1 overflow-x-auto border border-border/70 bg-card/80 p-1">
            {[
              { value: "overview", label: "Overview", icon: <BarChart3 className="size-4" /> },
              { value: "mine", label: "Mining", icon: <Cpu className="size-4" /> },
              { value: "swap", label: "Swap", icon: <ArrowLeftRight className="size-4" /> },
              { value: "stake", label: "Stake", icon: <Lock className="size-4" /> },
              { value: "burn", label: "Burn", icon: <Flame className="size-4" /> },
              { value: "history", label: "History", icon: <Clock3 className="size-4" /> },
            ].map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className="shrink-0 gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">{tab.icon}{tab.label}</TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="overview" className="space-y-5">
            <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
              <Card className="border-border/70 bg-card/80">
                <CardHeader><CardTitle className="text-base">Selected asset</CardTitle></CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-start justify-between gap-4"><div><p className="text-2xl font-semibold">{selectedAsset.symbol}</p><p className="text-sm text-muted-foreground">{selectedAsset.name}</p></div><Badge variant="outline" className="border-amber-500/30 bg-amber-500/10 text-amber-300">{selectedAsset.state}</Badge></div>
                  <EmptyState title="Asset data is not connected" description="Connect the verified balance and market-data services to display holdings, valuation, performance, and transaction activity." icon={<BarChart3 className="size-5" />} />
                </CardContent>
              </Card>
              <Card className="border-border/70 bg-card/80"><CardHeader><CardTitle className="text-base">Live tip</CardTitle></CardHeader><CardContent><div className="rounded-xl bg-primary/5 p-4 text-sm leading-6 text-muted-foreground"><Info className="mb-2 size-4 text-primary" aria-hidden="true" />Verify network and transaction details before submitting any asset action.</div></CardContent></Card>
            </div>
          </TabsContent>
          <TabsContent value="mine"><IntegrationPanel title="Mining" description="Mining controls and reward history" icon={<Cpu className="size-5" />} capability="The current backend does not expose a verified token-mining procedure. The previous progress loop has been removed so the interface cannot imply that a blockchain reward was earned." nextStep="Connect a real mining service with authenticated inputs, rate limits, reward settlement, and failure handling." /></TabsContent>
          <TabsContent value="swap"><IntegrationPanel title="Swap" description="Token conversion and slippage settings" icon={<ArrowLeftRight className="size-5" />} capability="No verified token swap procedure exists in the current router registry. Prices, quotes, fees, approvals, and transaction confirmation are therefore unavailable." nextStep="Connect a verified quote and transaction service before enabling amount entry or swap submission." /></TabsContent>
          <TabsContent value="stake"><IntegrationPanel title="Stake" description="Lock assets and monitor staking status" icon={<Lock className="size-5" />} capability="The current backend does not expose a verified staking action for this screen. APY, lock periods, and rewards must not be presented as active financial terms." nextStep="Connect the real staking contract/service and display its network, terms, transaction state, and failure modes." /></TabsContent>
          <TabsContent value="burn"><IntegrationPanel title="Burn" description="Permanently remove supported assets" icon={<Flame className="size-5" />} capability="A verified burn procedure, signing flow, and transaction confirmation are not available. No destructive action is exposed." nextStep="Connect a reviewed burn flow with address/network validation, confirmation, transaction reference, and recovery guidance." /></TabsContent>
          <TabsContent value="history"><EmptyState title="Transaction history is unavailable" description="The current router registry does not provide the authenticated token transaction procedure required to load this history." hint="Backend required before activity can be displayed." icon={<History className="size-5" />} /></TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
