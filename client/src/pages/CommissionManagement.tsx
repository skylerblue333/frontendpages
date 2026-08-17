import { useState } from "react";
import {
  CircleSlash2,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Program = {
  id: string;
  name: string;
  channel: string;
  state: string;
  description: string;
};
const programs: Program[] = [
  {
    id: "creator",
    name: "Creator referral",
    channel: "Community",
    state: "Review",
    description:
      "Local program concept pending verified attribution and accounting.",
  },
  {
    id: "school",
    name: "SkySchool partner",
    channel: "Education",
    state: "Planned",
    description:
      "Local program concept requiring partner authorization and rate policy.",
  },
  {
    id: "ecosystem",
    name: "Ecosystem partner",
    channel: "Platform",
    state: "Unavailable",
    description:
      "Restricted program concept with no provider or payout connection.",
  },
];
export default function CommissionManagement() {
  const [selected, setSelected] = useState(programs[0]);
  const [status, setStatus] = useState(
    "Commission data unavailable. Showing local fixtures only."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No affiliate, order, rate, earnings, payout, identity, balance, or payment request was started.`
    );
  const reset = () => {
    setSelected(programs[0]);
    setStatus(
      "Commission preview reset locally. No financial or payout state changed."
    );
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-black px-4 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:justify-between">
          <div className="flex gap-4">
            <WalletCards className="h-12 w-12 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-3 text-emerald-200" />
            <div>
              <h1 className="text-3xl font-bold">Commission management</h1>
              <p className="mt-2 text-sm text-slate-400">
                Review local commission-program concepts without fabricated
                financial data.
              </p>
            </div>
          </div>
          <Button onClick={reset} variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </header>
        <section className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/[.07] p-4 text-sm">
          <strong className="text-amber-100">
            Commission data unavailable.
          </strong>{" "}
          No verified attribution, accounting, affiliate identity, or payout
          service is connected.
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="space-y-3">
              {programs.map(program => (
                <button
                  aria-pressed={selected.id === program.id}
                  className={`w-full rounded-xl border p-5 text-left ${selected.id === program.id ? "border-emerald-400/35 bg-emerald-400/10" : "border-slate-800"}`}
                  key={program.id}
                  onClick={() => setSelected(program)}
                  type="button"
                >
                  <p className="font-medium">{program.name}</p>
                  <p className="text-xs text-slate-500">
                    {program.channel} · {program.state}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {program.description}
                  </p>
                </button>
              ))}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <h2 className="text-xl font-semibold">{selected.name}</h2>
            <div className="mt-5 grid gap-2">
              {[
                "Affiliate unavailable",
                "Order unavailable",
                "Rate unavailable",
                "Earnings unavailable",
                "Payout unavailable",
                "Identity unavailable",
              ].map(item => (
                <div
                  className="rounded-lg border border-slate-800 p-3 text-sm"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-2">
              <Button onClick={() => blocked("Calculate")} variant="outline">
                <CircleSlash2 className="mr-2 h-4 w-4" />
                Calculate unavailable
              </Button>
              <Button onClick={() => blocked("Approve")} variant="outline">
                <CircleSlash2 className="mr-2 h-4 w-4" />
                Approve unavailable
              </Button>
              <Button onClick={() => blocked("Payout")} variant="outline">
                <CircleSlash2 className="mr-2 h-4 w-4" />
                Payout unavailable
              </Button>
            </div>
            <div className="mt-6 flex gap-3 text-sm text-slate-400">
              <LockKeyhole className="h-5 w-5 text-cyan-200" />
              <span>
                No financial, payout, wallet, balance, or payment operation is
                available.
              </span>
            </div>
            <div className="mt-4 flex gap-3 text-sm text-slate-400">
              <ShieldCheck className="h-5 w-5 text-emerald-200" />
              <span>
                Production commissions require attribution, accounting,
                reconciliation, fraud controls, and payout authorization.
              </span>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
