import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Brain,
  CheckCircle2,
  Crown,
  CreditCard,
  Info,
  LockKeyhole,
  ShieldAlert,
  Sparkles,
  XCircle,
  Zap,
} from "lucide-react";

type Capability = {
  title: string;
  description: string;
  icon: typeof CreditCard;
};
type Plan = { name: string; description: string; capabilities: string[] };
const PLANS: readonly Plan[] = [
  {
    name: "Free plan concept",
    description: "Baseline access concept; current entitlement is unavailable.",
    capabilities: [
      "Core product access",
      "Standard settings",
      "No billing record",
    ],
  },
  {
    name: "Subscription concept",
    description:
      "Recurring billing and premium entitlement are not configured.",
    capabilities: [
      "Premium feature concepts",
      "Provider checkout required",
      "Cancellation and refunds required",
    ],
  },
  {
    name: "Add-on concept",
    description:
      "Boosts and interaction add-ons have no active catalog or wallet.",
    capabilities: [
      "Catalog and price source required",
      "Receipt and entitlement required",
      "Spend controls required",
    ],
  },
];
const CAPABILITIES: readonly Capability[] = [
  {
    title: "Billing provider",
    description:
      "Checkout, tax, payment method, receipt, refund, and cancellation flows are unavailable.",
    icon: CreditCard,
  },
  {
    title: "Entitlement service",
    description:
      "No account has an authoritative subscription, boost, super-like, or feature entitlement.",
    icon: Crown,
  },
  {
    title: "Outcome evidence",
    description:
      "No visibility, match likelihood, ranking, trust, or response metric is claimed.",
    icon: Sparkles,
  },
  {
    title: "AI profile tools",
    description:
      "No profile audit, rewrite, model, prompt, or generated content is connected.",
    icon: Brain,
  },
];

export default function DatingPremium() {
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState(
    "Premium billing unavailable locally. No price, checkout, payment, subscription, entitlement, refund, or account mutation was started."
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No price, checkout, payment, subscription, entitlement, refund, or account mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="dating-premium-title"
    >
      <div data-ui-polish="batch-185" className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge
            variant="outline"
            className="border-amber-400/30 text-amber-200"
          >
            BILLING READINESS PREVIEW
          </Badge>
          <h1
            id="dating-premium-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <Crown className="h-7 w-7 text-amber-300" aria-hidden="true" />
            Dating premium
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review premium capability and billing requirements without inventing
            prices, purchases, subscriptions, entitlements, or performance
            outcomes.
          </p>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Premium service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authoritative catalog, currency and tax source, payment
                processor, subscription service, entitlement record, receipt,
                refund path, or AI provider is connected. No plan price or
                purchase outcome is presented as current.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/50 p-5">
            <CreditCard
              className="mb-3 h-5 w-5 text-sky-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Checkout unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No payment method, charge, receipt, tax, or refund is available.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Crown className="mb-3 h-5 w-5 text-amber-300" aria-hidden="true" />
            <p className="text-lg font-semibold">Entitlements unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No subscription, add-on, boost, or premium access is active.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Zap className="mb-3 h-5 w-5 text-violet-300" aria-hidden="true" />
            <p className="text-lg font-semibold">Outcomes unmeasured</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No visibility, ranking, match, trust, or response benefit is
              asserted.
            </p>
          </Card>
        </section>
        <section aria-labelledby="plans-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="plans-title" className="text-xl font-semibold">
                Plan concepts
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                These are planning concepts, not offers or current prices.
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => announceUnavailable("Plan catalog")}
            >
              Catalog unavailable
            </Button>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {PLANS.map(plan => {
              const active = selected === plan.name;
              return (
                <Card
                  key={plan.name}
                  className={`border p-5 ${active ? "border-primary/50 bg-primary/10" : "border-border/40 bg-card/40"}`}
                >
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelected(active ? null : plan.name)}
                    className="w-full text-left"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold">{plan.name}</h3>
                      <Badge
                        variant="outline"
                        className="border-muted-foreground/30 text-muted-foreground"
                      >
                        Unpriced
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {plan.description}
                    </p>
                    <div className="mt-4 space-y-2">
                      {plan.capabilities.map(item => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                  </button>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-5 w-full"
                    onClick={() => announceUnavailable(`${plan.name} checkout`)}
                  >
                    Checkout unavailable
                  </Button>
                </Card>
              );
            })}
          </div>
        </section>
        {selected && (
          <section
            className="rounded-2xl border border-primary/30 bg-primary/5 p-5"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <Info
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold">Plan concept selected locally</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {selected} is a planning concept only. No price, billing
                  event, subscription, or entitlement changed.
                </p>
              </div>
            </div>
          </section>
        )}
        <section aria-labelledby="capabilities-title">
          <h2 id="capabilities-title" className="mb-4 text-xl font-semibold">
            Premium capability requirements
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {CAPABILITIES.map(capability => {
              const Icon = capability.icon;
              return (
                <Card
                  key={capability.title}
                  className="border-border/40 bg-card/40 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-secondary/60 p-3">
                      <Icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{capability.title}</h3>
                        <Badge
                          variant="outline"
                          className="border-muted-foreground/30 text-muted-foreground"
                        >
                          Unavailable
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-2">
          <Card className="border-border/40 bg-card/30 p-5">
            <div className="flex items-start gap-3">
              <LockKeyhole
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold">Safe billing boundary</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  A production purchase needs authenticated account ownership,
                  clear offer terms, secure checkout, idempotency, receipts,
                  taxes, refunds, cancellation, access revocation, and
                  non-sensitive audit logs.
                </p>
              </div>
            </div>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <div className="flex items-start gap-3">
              <XCircle
                className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold">No purchase claim</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  No payment, plan activation, boost, super-like, AI result, or
                  premium access is available from this screen.
                </p>
              </div>
            </div>
          </Card>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      </div>
    </main>
  );
}
