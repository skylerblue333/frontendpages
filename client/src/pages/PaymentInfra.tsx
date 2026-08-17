import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Check, CreditCard, FileCheck2, LockKeyhole, RefreshCw, ShieldCheck, TriangleAlert, WalletCards, WifiOff } from "lucide-react";
import { ScreenFeatureGrid, ScreenHero, ScreenPreviewBanner, ScreenStatGrid } from "@/components/ScreenExperience";

type Tab = "systems" | "billing" | "transactions" | "controls";

const systems = [
  { name: "Card provider", state: "Not connected", detail: "No credentials, orders, captures, or webhooks." },
  { name: "Wallet rail", state: "Not connected", detail: "No chain, network, address, balance, or transaction source." },
  { name: "Ledger", state: "Not configured", detail: "No immutable journal, double-entry rules, or reconciliation." },
  { name: "Entitlements", state: "Unavailable", detail: "No product, inventory, delivery, or refund source." },
];

const controls = [
  "Idempotency keys and duplicate-charge prevention",
  "Provider webhook verification and replay protection",
  "Atomic ledger writes and balance invariants",
  "Refund, dispute, failure, timeout, and reconciliation workflows",
  "Secrets, least privilege, audit logging, privacy, monitoring, and incident response",
];

const billingSteps = [
  "Validate authenticated intent",
  "Create idempotent order or ledger reservation",
  "Authorize or request provider action",
  "Verify server event / receipt",
  "Reconcile, deliver entitlement, and notify",
];

const transactionStates = [
  { label: "Pending", detail: "Provider evidence required." },
  { label: "Authorized", detail: "Capture and settlement evidence required." },
  { label: "Failed", detail: "Typed error and retry semantics required." },
  { label: "Refunded", detail: "Refund ID and reconciliation required." },
];

export default function PaymentInfra() {
  const [tab, setTab] = useState<Tab>("systems");
  const [selected, setSelected] = useState("Card provider");
  const [saved, setSaved] = useState(false);
  const [query, setQuery] = useState("");
  const filteredControls = useMemo(
    () => controls.filter((item) => !query || item.toLowerCase().includes(query.toLowerCase())),
    [query],
  );
  const reset = () => {
    setTab("systems");
    setSelected("Card provider");
    setSaved(false);
    setQuery("");
  };

  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={CreditCard}
        eyebrow="PaymentInfra · Architecture preview"
        title="Map payment infrastructure before money touches it."
        description="Inspect local payment rails, billing stages, transaction evidence, and control requirements. No provider, wallet, ledger, balance, transaction, uptime, coverage, profitability, or payment event is connected."
        badge="Infrastructure preview"
      >
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => setSaved(true)} className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
            <Check className="mr-2 size-4" />{saved ? "Plan saved locally" : "Save plan locally"}
          </Button>
          <Button onClick={reset} variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
            <RefreshCw className="mr-2 size-4" />Reset plan
          </Button>
        </div>
      </ScreenHero>

      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid items={[
          { label: "Rails", value: "4", hint: "Mapped locally", icon: CreditCard, tone: "cyan" },
          { label: "Ledger", value: "Off", hint: "No journal source", icon: FileCheck2, tone: "violet" },
          { label: "Transactions", value: "0", hint: "None verified", icon: WalletCards, tone: "amber" },
          { label: "Production", value: "Blocked", hint: "Evidence missing", icon: WifiOff, tone: "slate" },
        ]} />

        <ScreenPreviewBanner title="Payment infrastructure evidence boundary">
          <strong>This is an architecture worksheet, not a payment backend.</strong> Rails, billing stages, transaction examples, security controls, balances, coverage, uptime, fees, margins, profitability, and success rates are not production measurements or live events. A real payment system requires server-side integrations, authoritative records, reconciliation, observability, and incident response.
        </ScreenPreviewBanner>

        <section className="grid gap-6 lg:grid-cols-[0.82fr_1fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="space-y-2">
                {([
                  { id: "systems", label: "Payment systems", icon: CreditCard },
                  { id: "billing", label: "Billing pipeline", icon: BarChart3 },
                  { id: "transactions", label: "Transaction states", icon: WalletCards },
                  { id: "controls", label: "Controls", icon: ShieldCheck },
                ] as const).map((item) => (
                  <button key={item.id} onClick={() => setTab(item.id)} className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left ${tab === item.id ? "border-cyan-300/40 bg-cyan-300/[0.06]" : "border-white/10 text-slate-400"}`}>
                    <item.icon className="size-4" />
                    <span className="font-semibold">{item.label}</span>
                    <span className="ml-auto text-xs text-slate-500">Preview</span>
                  </button>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                <div className="flex gap-3">
                  <TriangleAlert className="mt-0.5 size-5 shrink-0 text-amber-200" />
                  <p className="text-sm leading-6 text-slate-300">Do not put API keys, provider secrets, private keys, payer data, or customer payment details into this local architecture preview.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              {tab === "systems" && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Payment systems</p>
                  <h2 className="mt-2 text-2xl font-black">Rails and record boundaries</h2>
                  <div className="mt-5 space-y-3">
                    {systems.map((item) => (
                      <button key={item.name} onClick={() => setSelected(item.name)} className={`w-full rounded-xl border p-4 text-left ${selected === item.name ? "border-cyan-300/40 bg-cyan-300/[0.06]" : "border-white/10"}`}>
                        <div className="flex items-center justify-between gap-3"><p className="font-semibold">{item.name}</p><Badge variant="outline" className="border-white/10 text-amber-200">{item.state}</Badge></div>
                        <p className="mt-2 text-sm leading-5 text-slate-500">{item.detail}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {tab === "billing" && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">Billing pipeline</p>
                  <h2 className="mt-2 text-2xl font-black">A safe sequence</h2>
                  <div className="mt-5 space-y-3">
                    {billingSteps.map((item, index) => (
                      <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 p-3"><span className="flex size-7 items-center justify-center rounded-full bg-violet-300/15 text-sm font-bold text-violet-200">{index + 1}</span><span className="flex-1 text-sm text-slate-300">{item}</span><span className="text-xs text-amber-200">Required</span></div>
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-6 text-slate-500">These are design stages, not proof that any pipeline is implemented or profitable.</p>
                </div>
              )}

              {tab === "transactions" && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Transaction states</p>
                  <h2 className="mt-2 text-2xl font-black">No verified events</h2>
                  <div className="mt-5 space-y-3">
                    {transactionStates.map((item) => (
                      <div key={item.label} className="rounded-xl border border-white/10 p-4"><p className="text-sm font-semibold text-slate-300">{item.label}</p><p className="mt-2 text-sm text-slate-500">{item.detail}</p><p className="mt-2 text-xs text-slate-600">Local state label only; no transaction exists.</p></div>
                    ))}
                  </div>
                </div>
              )}

              {tab === "controls" && (
                <div>
                  <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search control requirements…" className="w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none focus:border-cyan-300/50" />
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Control requirements</p>
                  <h2 className="mt-2 text-2xl font-black">Protect money and records</h2>
                  <div className="mt-5 space-y-3">
                    {filteredControls.map((item) => <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 p-3"><ShieldCheck className="mt-0.5 size-4 text-cyan-300" /><span className="text-sm leading-5 text-slate-300">{item}</span></div>)}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <Card className="border-white/10 bg-white/[0.04]"><CardContent className="p-6"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Production checklist</p><h2 className="mt-2 text-2xl font-black">Infrastructure must prove</h2><div className="mt-5 space-y-3">{["Provider contracts, secret management, least privilege, environment isolation, and key rotation", "Double-entry ledger, balance invariants, atomic transactions, concurrency, and reconciliation", "Webhook/signature verification, idempotency, retries, failure, refund, dispute, and settlement semantics", "Metrics for latency/errors/volume only from instrumented production systems, not placeholders", "Privacy, compliance scope, audit trail, support, alerting, and incident response"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 p-3"><ShieldCheck className="size-4 text-slate-500" /><span className="flex-1 text-sm text-slate-300">{item}</span><span className="text-xs text-amber-200">Required</span></div>)}</div></CardContent></Card>
          <Card className="border-white/10 bg-white/[0.04]"><CardContent className="p-6"><LockKeyhole className="size-5 text-cyan-300" /><h2 className="mt-4 text-xl font-black">No fake infrastructure</h2><p className="mt-3 text-sm leading-6 text-slate-400">Saving this architecture plan changes local state only. It does not connect a rail, create a ledger entry, process money, calculate profit, or prove uptime.</p></CardContent></Card>
        </section>

        <ScreenFeatureGrid features={[
          { title: "Systems are mapped", description: "Card, wallet, ledger, and entitlement boundaries are visible as unconnected concepts.", icon: CreditCard, status: "Architecture" },
          { title: "Billing sequence is explicit", description: "Validation, idempotency, provider evidence, reconciliation, and notification are separated.", icon: BarChart3, status: "Guardrail" },
          { title: "Events stay unverified", description: "No balances, transaction history, uptime, coverage, fee, margin, or profitability claim is fabricated.", icon: WifiOff, status: "Unavailable" },
        ]} />
      </main>
    </div>
  );
}
