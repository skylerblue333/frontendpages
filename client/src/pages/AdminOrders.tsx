import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AdminOrders() {
  return (
    <FeatureUnavailable
      title="Admin order management is not active"
      description="This route previously rendered hard-coded orders, revenue, fees, taxes, buyer data, payment methods, and exportable records. It is intentionally unavailable until authenticated order storage, authorization, tax calculation provenance, payment reconciliation, audit logging, and tested export contracts are connected."
      capability="Admin order management and financial reporting"
      nextStep="Return to the launch hub"
    />
  );
}
