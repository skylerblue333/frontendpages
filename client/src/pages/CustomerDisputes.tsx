import FeatureUnavailable from "@/components/FeatureUnavailable";

const CustomerDisputes = () => (
  <FeatureUnavailable
    title="Customer disputes unavailable"
    description="Dispute management requires authenticated case intake, durable records, evidence handling, payment-provider or support integrations, role-based access, deadlines, notifications, escalation, audit history, and tested resolution or refund workflows. No dispute, customer complaint, payment, refund, chargeback, case status, outcome, amount, or resolution is shown or asserted."
    capability="Auditable customer dispute and complaint handling"
    nextStep="Connect approved support and payment-dispute services with identity, evidence, access, notification, escalation, audit, and rollback controls before enabling this feature"
  />
);

export default CustomerDisputes;
