import { useMemo, useState } from "react";
import {
  Copy,
  FileSearch,
  Info,
  LockKeyhole,
  QrCode,
  Search,
  ShieldCheck,
  WalletCards,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Network and address provenance",
    area: "Evidence",
    description:
      "No network, chain, wallet owner, receiving address, derivation path, public key, address format, or current wallet record is connected.",
  },
  {
    title: "Custody, privacy, and QR handling",
    area: "Security",
    description:
      "No custody model, private-key boundary, seed-phrase handling, QR payload, redaction, personal-data classification, or disclosure policy is verified.",
  },
  {
    title: "Deposit detection and confirmations",
    area: "Blockchain",
    description:
      "No RPC provider, monitored address, transaction hash, amount, token, block, confirmation count, pending state, or failed-deposit status exists.",
  },
  {
    title: "Authorization, recovery, and audit",
    area: "Controls",
    description:
      "No authenticated owner, receive permission, rate limit, duplicate-detection guard, alert, audit event, support trace, or recovery path is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No generate address, copy, show QR, share, monitor, label, export, withdraw, or wallet, address, transaction, balance, or personal-data mutation is connected or persisted.",
  },
];
export default function ReceiveCrypto() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Receive Crypto is unavailable locally. No network, wallet, address, QR payload, balance, deposit, transaction, confirmation, or personal-data record was loaded or changed."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No wallet, address, QR, deposit, transaction, confirmation, balance, custody, or personal-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="receive-crypto-title"
    >
      <div data-ui-polish="batch-200" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <WalletCards className="size-3.5" aria-hidden="true" />{" "}
                  Crypto-receive readiness workspace
                </Badge>
                <Badge variant="secondary">No receive state</Badge>
              </div>
              <h1
                id="receive-crypto-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                ReceiveCrypto readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review network and address provenance, custody and privacy, QR
                handling, deposit detection, confirmations, authorization,
                audit, and persistence boundaries without implying that a wallet
                address, balance, deposit, transaction, or confirmation exists.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Receive Crypto is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No chain or RPC provider, wallet custody service, address
                generator, QR encoder, deposit monitor, confirmation tracker,
                authorization policy, or persistence layer is connected. This
                workspace cannot generate an address, copy, show a QR, share,
                monitor, label, export, withdraw, or claim a deposit.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <WalletCards
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No receive state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No network, chain, wallet owner, address, derivation path,
                public key, or wallet record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <QrCode className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No deposit state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No QR payload, token, amount, transaction hash, block,
                confirmation count, balance, or pending state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No receive actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No address, copy, QR, share, monitor, label, export, withdraw,
                or wallet mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Crypto-receive governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads wallets, exposes addresses, creates QR payloads, monitors
              chains, or saves transaction records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search ReceiveCrypto readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter crypto-receive requirements"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(item => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${item.title}`)}
                  >
                    <FileSearch className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No crypto-receive requirements match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Production crypto receiving requires verified network identity,
                address validation and ownership, secure custody boundaries, no
                plaintext keys or seed phrases, safe QR payloads, RPC-backed
                deposit detection, transaction hashes and confirmation states,
                duplicate and replay safeguards, rate limits, privacy controls,
                audit history, and explicit failed or pending deposit handling.
                No wallet, address, QR, deposit, transaction, balance,
                confirmation, custody, or personal-data record is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <ShieldCheck
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
