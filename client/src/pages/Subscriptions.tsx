import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function Subscriptions() {
  return (
    <FeatureUnavailable
      title="Subscriptions are not active"
      description="This route previously displayed hard-coded platform tiers, prices, creator subscriptions, payment-method details, paid billing history, SKY444 bonuses, and upgrade actions without verified billing or entitlement records. It remains unavailable until account-scoped plans, provider checkout, payment authorization, webhooks, idempotency, cancellation, refunds, tax handling, creator revenue reconciliation, privacy, and entitlement enforcement are implemented and tested."
      capability="Platform and creator subscriptions, billing, and entitlements"
      nextStep="Review the launch readiness status"
    />
  );
}
