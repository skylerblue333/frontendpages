import FeatureUnavailable from "@/components/FeatureUnavailable";

const PayPalIntegration = () => (
  <FeatureUnavailable
    title="PayPal integration unavailable"
    description="A trustworthy PayPal integration requires approved credentials held server-side, environment separation, webhook signature verification, idempotency, merchant authorization, currency and amount validation, payment and refund state reconciliation, dispute handling, audit logging, and rollback controls. No account is connected, payment is initiated, transaction is completed, refund is issued, or balance is verified."
    capability="Verified PayPal payments and webhook integration"
    nextStep="Connect the approved server-side PayPal application and webhook environment with secret management, signature validation, idempotency, reconciliation, audit, and rollback controls before enabling payments"
  />
);

export default PayPalIntegration;
