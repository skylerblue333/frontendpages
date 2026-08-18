import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function DatingSubscription() {
  return (
    <FeatureUnavailable
      title="Dating subscriptions are not active"
      description="This route previously fetched unverified plan and subscription data, displayed prices and renewal dates, claimed Stripe support, and offered upgrade or downgrade actions without a verified billing contract. It remains unavailable until account-scoped plans, entitlements, payment authorization, checkout, webhooks, idempotency, cancellation, refunds, tax handling, privacy, and reconciliation are implemented and tested."
      capability="Subscription plans, billing, and premium entitlements"
      nextStep="Review the launch readiness status"
    />
  );
}
