import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function PaymentInfra() {
  return (
    <FeatureUnavailable
      title="Payment infrastructure is not active"
      description="This route previously displayed hard-coded revenue, AI costs, profit margins, transactions, Stripe readiness, wallet credits, escrow status, and subscription pricing. It remains unavailable until payment-provider configuration, ledger persistence, idempotency, authorization, reconciliation, refunds, monitoring, and financial controls are independently verified."
      capability="Payment, wallet, billing, escrow, and financial infrastructure"
      nextStep="Review the launch readiness status"
    />
  );
}
