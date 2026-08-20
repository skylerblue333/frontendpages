import { useMemo, useState } from "react";
import {
  Check,
  CircleDollarSign,
  ClipboardCheck,
  Fuel,
  KeyRound,
  LockKeyhole,
  Network,
  RefreshCw,
  ShieldAlert,
  WalletCards,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ScreenFeatureGrid,
  ScreenHero,
  ScreenPreviewBanner,
  ScreenStatGrid,
} from "@/components/ScreenExperience";
const networks = [
  "Network not configured",
  "Ethereum intent",
  "Solana intent",
  "Polygon intent",
  "Testnet-only intent",
];
const wallets = [
  "Wallet not configured",
  "External wallet intent",
  "Hardware wallet intent",
  "Read-only wallet intent",
  "Test wallet intent",
];
export default function SendCrypto() {
  const [network, setNetwork] = useState(networks[0]);
  const [wallet, setWallet] = useState(wallets[0]);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [fee, setFee] = useState("Fee estimate unavailable");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const valid =
    network !== networks[0] &&
    wallet !== wallets[0] &&
    recipient.trim().length >= 8 &&
    Number(amount) > 0;
  const fields = useMemo(
    () => [
      { label: "Network", value: network },
      { label: "Wallet", value: wallet },
      { label: "Recipient", value: recipient ? "Entered locally" : "Required" },
      { label: "Amount", value: amount ? "Entered locally" : "Required" },
      { label: "Fee", value: fee },
      { label: "Balance", value: "Unavailable" },
    ],
    [network, wallet, recipient, amount, fee]
  );
  const reset = () => {
    setNetwork(networks[0]);
    setWallet(wallets[0]);
    setRecipient("");
    setAmount("");
    setFee("Fee estimate unavailable");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={CircleDollarSign}
        eyebrow="Send crypto · Transaction preview"
        title="Review every transaction boundary before signing."
        description="Explore a local transaction-intent workspace with network and wallet selection, recipient and amount validation, fee intent, nonce/replay/signing gates, save/reset, and blocked signing/broadcast actions. No wallet, balance, private key, signature, fee quote, chain state, transaction hash, or transfer outcome is connected."
        badge="High-risk transaction workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            disabled={!valid}
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save transaction draft"}
          </Button>
          <Button
            onClick={() => setShowGates(value => !value)}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            {showGates ? (
              <X className="mr-2 size-4" />
            ) : (
              <ShieldAlert className="mr-2 size-4" />
            )}
            {showGates ? "Close gates" : "Review transaction gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset transaction
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Network",
              value: network === networks[0] ? "Required" : "Local intent",
              hint: "No chain source",
              icon: Network,
              tone: "cyan",
            },
            {
              label: "Recipient",
              value: recipient ? "Entered" : "Required",
              hint: "Local validation",
              icon: WalletCards,
              tone: "violet",
            },
            {
              label: "Fee",
              value: "Unavailable",
              hint: "No RPC source",
              icon: Fuel,
              tone: "amber",
            },
            {
              label: "Signing",
              value: "Blocked",
              hint: "No key source",
              icon: KeyRound,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Crypto-transaction evidence boundary">
          <strong>
            This is a local transaction-intent preview, not evidence that a
            wallet, balance, recipient, fee, signature, network, transaction
            hash, or transfer exists.
          </strong>{" "}
          Form controls, client-side validation, saved state, review gates, and
          disabled signing/broadcast actions are browser concepts. No wallet
          custody, private key, seed phrase, balance, token price, fee quote,
          chain status, signature, nonce, transaction hash, confirmation, or
          financial outcome is asserted.
        </ScreenPreviewBanner>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="space-y-6 p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Local transaction intent
              </p>
              <h2 className="mt-2 text-2xl font-black">
                Prepare the transfer without broadcasting it
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Every value below remains local. A valid draft is not a signed
                or submitted transaction.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-semibold text-slate-300">
                Network
                <select
                  value={network}
                  onChange={event => setNetwork(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                >
                  <option>Network not configured</option>
                  <option>Ethereum intent</option>
                  <option>Solana intent</option>
                  <option>Polygon intent</option>
                  <option>Testnet-only intent</option>
                </select>
              </label>
              <label className="text-sm font-semibold text-slate-300">
                Wallet source
                <select
                  value={wallet}
                  onChange={event => setWallet(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                >
                  <option>Wallet not configured</option>
                  <option>External wallet intent</option>
                  <option>Hardware wallet intent</option>
                  <option>Read-only wallet intent</option>
                  <option>Test wallet intent</option>
                </select>
              </label>
              <label className="text-sm font-semibold text-slate-300">
                Recipient address
                <input
                  value={recipient}
                  onChange={event => setRecipient(event.target.value)}
                  placeholder="Enter address locally"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                />
              </label>
              <label className="text-sm font-semibold text-slate-300">
                Amount
                <input
                  value={amount}
                  onChange={event => setAmount(event.target.value)}
                  inputMode="decimal"
                  placeholder="0.00"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                />
              </label>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {fields.map(item => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 p-3"
                >
                  <p className="text-xs text-slate-500">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-amber-200">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            {!valid && (
              <div className="rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4 text-sm text-amber-100">
                Choose a network and wallet, enter a recipient with local
                minimum validation, and enter a positive amount to enable saving
                the draft. This does not validate a real chain address or
                balance.
              </div>
            )}
            <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center">
              <WalletCards className="mx-auto size-8 text-slate-600" />
              <p className="mt-3 font-semibold">No chain evidence loaded</p>
              <p className="mt-2 text-sm text-slate-500">
                Connect network RPC, wallet ownership, address checksum rules,
                balance, token metadata, fee estimation, nonce, replay
                protection, signing, broadcast, confirmation, failure handling,
                and audit before sending.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button disabled className="bg-slate-700 text-slate-400">
                <KeyRound className="mr-2 size-4" />
                Sign unavailable
              </Button>
              <Button
                disabled
                variant="outline"
                className="border-white/10 text-slate-500"
              >
                Broadcast unavailable
              </Button>
              <Button
                disabled
                variant="outline"
                className="border-white/10 text-slate-500"
              >
                Estimate fee unavailable
              </Button>
              <Button
                disabled
                variant="outline"
                className="border-white/10 text-slate-500"
              >
                View hash unavailable
              </Button>
            </div>
            {showGates && (
              <div className="rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                <p className="font-semibold text-amber-100">
                  No transfer or financial claim
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  A local draft does not prove a wallet, balance, ownership,
                  recipient, fee, signature, nonce, transaction hash,
                  confirmation, token movement, or financial outcome.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Transaction-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real crypto send flow must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated wallet ownership, network, chain ID, recipient checksum, token contract, decimals, balance, allowance, nonce, and timestamp",
                "Private-key custody, seed phrase protection, hardware/external signing, replay protection, idempotency, fee limits, and user confirmation",
                "RPC availability, simulation, transaction encoding, signature verification, broadcast, pending/failed/confirmed states, hash, and explorer provenance",
                "Token, NFT, exchange, custody, tax, financial, regulatory, security, privacy, and user-impact claims require domain review",
                "Save, sign, broadcast, cancel, retry, accelerate, export, accessibility, and accountable approval require governed wallet operations",
                "A transaction preview must not be presented as a successful transfer, balance update, chain confirmation, or financial result without evidence",
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-3"
                >
                  <LockKeyhole className="size-4 text-slate-500" />
                  <span className="flex-1 text-sm text-slate-300">{item}</span>
                  <span className="text-xs text-amber-200">Required</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <ScreenFeatureGrid
          features={[
            {
              title: "Transaction surface preserved",
              description:
                "Network, wallet, recipient, amount, fee, signing, broadcast, confirmation, failure, save/reset, and gates remain interactive.",
              icon: CircleDollarSign,
              status: "Local intent",
            },
            {
              title: "No transfer theater",
              description:
                "Wallets, balances, keys, fees, signatures, hashes, confirmations, token movements, and financial outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Custody before broadcast",
              description:
                "Real crypto sends require network validation, wallet ownership, safe signing, replay protection, RPC verification, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
