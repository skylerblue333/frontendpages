import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Clock3,
  ExternalLink,
  Wallet,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

function isExternalReference(
  value: string | null | undefined
): value is string {
  return Boolean(value && /^https?:\/\//i.test(value));
}

export default function WalletOverview() {
  const { isAuthenticated } = useAuth();
  const overview = trpc.wallet.overview.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-background px-4 py-10 sm:px-6">
        <Card className="mx-auto mt-12 max-w-xl border-slate-800 bg-slate-900/75">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-cyan-200" aria-hidden="true" />{" "}
              Sign in to view your wallet
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-6 text-muted-foreground">
              Wallet records are only requested for an authenticated account. No
              balance, address, or transaction data is shown in this state.
            </p>
            <a href={getLoginUrl()}>
              <Button>Sign in</Button>
            </a>
          </CardContent>
        </Card>
      </main>
    );
  }

  if (overview.isLoading) {
    return (
      <main className="min-h-screen bg-background px-4 py-10 sm:px-6">
        <div aria-live="polite" className="mx-auto mt-12 max-w-4xl space-y-4">
          <div className="h-9 w-56 animate-pulse rounded bg-muted" />
          <div className="h-32 animate-pulse rounded-xl bg-muted" />
          <p className="text-sm text-muted-foreground">
            Loading verified wallet records…
          </p>
        </div>
      </main>
    );
  }

  if (overview.isError) {
    return (
      <main className="min-h-screen bg-background px-4 py-10 sm:px-6">
        <Alert variant="destructive" className="mx-auto mt-12 max-w-xl">
          <AlertTitle>Wallet records could not be loaded</AlertTitle>
          <AlertDescription className="mt-2 space-y-3">
            <p>{overview.error.message}</p>
            <Button
              onClick={() => overview.refetch()}
              variant="outline"
              size="sm"
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Retry
            </Button>
          </AlertDescription>
        </Alert>
      </main>
    );
  }

  if (!overview.data) {
    return (
      <main className="min-h-screen bg-background px-4 py-10 sm:px-6">
        <Alert className="mx-auto mt-12 max-w-xl">
          <AlertTitle>Wallet response was empty</AlertTitle>
          <AlertDescription className="mt-2">
            No wallet record or transaction ledger was returned. No financial
            value is inferred.
          </AlertDescription>
        </Alert>
      </main>
    );
  }

  const wallet = overview.data.wallet;
  const transactions = overview.data.transactions;

  if (!wallet) {
    return (
      <main className="min-h-screen bg-background px-4 py-10 sm:px-6">
        <Card className="mx-auto mt-12 max-w-xl border-slate-800 bg-slate-900/75">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-cyan-200" aria-hidden="true" /> No
              wallet record
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              No wallet has been provisioned for this authenticated account. No
              balance or address is shown because no verified record exists.
            </p>
            <Link href="/">
              <Button variant="outline">Return to launch hub</Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6">
      <div data-ui-polish="batch-205" className="mx-auto max-w-5xl space-y-6">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Verified account record
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              Wallet overview
            </h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Read-only wallet and transaction records returned by the
              authenticated account service.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-200">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" /> Read-only
            view
          </div>
        </header>
        <Alert className="border-slate-800 bg-slate-900/50">
          <AlertTitle>Record boundary</AlertTitle>
          <AlertDescription>
            Values below are displayed only when returned by the wallet service.
            This page does not create wallets, initiate transfers, or estimate
            missing financial data.
          </AlertDescription>
        </Alert>
        <section
          aria-label="Wallet record"
          className="grid gap-4 sm:grid-cols-2"
        >
          <Card className="border-slate-800 bg-slate-900/75">
            <CardHeader>
              <CardTitle className="text-base text-muted-foreground">
                Recorded balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="break-words text-2xl font-semibold">
                {wallet.balance ?? "Unavailable"} {wallet.currency ?? ""}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                No balance is inferred when the service returns no value.
              </p>
            </CardContent>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75">
            <CardHeader>
              <CardTitle className="text-base text-muted-foreground">
                Recorded address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="break-all font-mono text-sm">
                {wallet.address ?? "Unavailable"}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Address provenance is limited to the returned account record.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card className="border-slate-800 bg-slate-900/75">
          <CardHeader>
            <CardTitle className="flex items-center justify-between gap-3">
              <span>Transaction ledger</span>
              <span className="text-sm font-normal text-muted-foreground">
                {transactions.length} record
                {transactions.length === 1 ? "" : "s"}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {transactions.length === 0 ? (
              <div className="rounded-lg border border-dashed border-slate-700 p-6 text-center">
                <p className="font-medium">
                  No transaction records exist for this account.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  No activity, fees, counterparties, or transaction outcomes are
                  inferred from an empty ledger.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {transactions.map(transaction => (
                  <article
                    key={transaction.id}
                    className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-950/40 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      {transaction.type === "deposit" ? (
                        <ArrowDownLeft
                          className="h-5 w-5 shrink-0 text-emerald-300"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArrowUpRight
                          className="h-5 w-5 shrink-0 text-muted-foreground"
                          aria-hidden="true"
                        />
                      )}
                      <div className="min-w-0">
                        <p className="font-medium">
                          {transaction.type ?? "Transaction"}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {transaction.createdAt
                            ? new Date(transaction.createdAt).toLocaleString()
                            : "Date unavailable"}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="font-medium">
                        {transaction.amount ?? "Amount unavailable"}
                      </span>
                      <span className="inline-flex items-center gap-1 text-muted-foreground">
                        <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                        {transaction.status ?? "Status unavailable"}
                      </span>
                      {isExternalReference(transaction.txHash) && (
                        <a
                          href={transaction.txHash}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Open transaction reference"
                        >
                          <ExternalLink
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
