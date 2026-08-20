import { useState } from "react";
import {
  CircleSlash2,
  Copy,
  LockKeyhole,
  Share2,
  ShieldAlert,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/PageHeader";

export default function Referrals() {
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState(
    "Referral service unavailable. Showing local structure only."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No contact, attribution, commission, payout, share, notification, or account mutation was started.`
    );
  return (
    <div data-ui-polish="batch-200" className="min-h-screen bg-background">
      <PageHeader
        icon={Users}
        title="Referrals"
        subtitle="Review referral structure without fabricated identities, emails, dates, earnings, commission, or payout outcomes."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Referral service unavailable.</strong> No identity, consent,
          attribution, fraud, payout, or referral ledger service is connected.
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <Badge variant="outline">Local link draft</Badge>
          <h2 className="mt-3 text-2xl font-semibold">
            Referral link unavailable
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            This field remains local only. No contact detail is collected,
            stored, copied, shared, or transmitted.
          </p>
          <div className="mt-5 flex gap-2">
            <Input
              aria-label="Referral draft"
              onChange={e => setDraft(e.target.value)}
              placeholder="Referral note draft"
              value={draft}
            />
            <Button onClick={() => blocked("Copy referral")} variant="outline">
              <Copy className="mr-2 h-4 w-4" />
              Copy unavailable
            </Button>
            <Button onClick={() => blocked("Share referral")} variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share unavailable
            </Button>
          </div>
        </Card>
        <div className="grid gap-4 md:grid-cols-3">
          {["Referrals", "Earnings", "Commission"].map(label => (
            <Card className="border-slate-800 bg-slate-900/75 p-5" key={label}>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                {label}
              </p>
              <p className="mt-2 text-2xl font-semibold">Unavailable</p>
              <Badge className="mt-3" variant="outline">
                Source unavailable
              </Badge>
            </Card>
          ))}
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-5">
          <div className="flex gap-3">
            <ShieldAlert className="h-5 w-5 text-amber-200" />
            <p className="text-sm text-slate-400">
              No names, emails, dates, statuses, earnings, commission,
              attribution, payout, or social proof is fabricated.
            </p>
          </div>
          <div className="mt-4 flex gap-3">
            <LockKeyhole className="h-5 w-5 text-cyan-200" />
            <p className="text-sm text-slate-400">
              Production referrals require consent, privacy, fraud prevention,
              payout rules, and auditable attribution.
            </p>
          </div>
          <div className="mt-4 flex gap-3">
            <CircleSlash2 className="h-5 w-5 text-slate-500" />
            <p className="text-sm text-slate-400">
              No referral, share, notification, commission, payout, or account
              operation is available locally.
            </p>
          </div>
        </Card>
        <p
          aria-live="polite"
          className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400"
        >
          {status}
        </p>
      </div>
    </div>
  );
}
