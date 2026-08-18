import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function UnifiedPaymentLedger() {
  return (
    <FeatureUnavailable
      title="Unified payment ledger is not active"
      description="This route previously displayed hard-coded tips, subscriptions, marketplace charges, token earnings, payouts, revenue charts, transaction statuses, and a withdraw control. It remains unavailable until authenticated ledger persistence, provider reconciliation, chain provenance, payout authorization, refunds, and audit evidence are connected."
      capability="Unified payments, revenue, token ledger, and payouts"
      nextStep="Review the launch readiness status"
    />
  );
}
