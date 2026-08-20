import FeatureUnavailable from "@/components/FeatureUnavailable";

const StripeIntegration = () => (
  <FeatureUnavailable
    title="Stripe integration unavailable"
    description="Safe payments require approved Stripe account configuration, server-side secret handling, PCI-aware boundaries, customer and product contracts, payment-intent state verification, webhook signature validation, idempotency, refunds and disputes, tax and currency rules, reconciliation, audit logging, and incident recovery. No customer, payment method, checkout, subscription, invoice, refund, balance, or webhook success is shown or claimed here."
    capability="Verified payment processing and billing operations"
    nextStep="Connect approved server-side Stripe services, secret management, webhook verification, reconciliation, and sandbox tests before enabling payments"
  />
);

export default StripeIntegration;
