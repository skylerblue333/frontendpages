import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function OrderTypes() {
  return (
    <FeatureUnavailable
      title="Order types are not active"
      description="Order creation and type selection are unavailable until real product or service contracts, inventory, merchant authorization, pricing, fulfillment, payment, cancellation, refund, and audit workflows are implemented and tested."
      capability="Order type catalog and fulfillment workflows"
      nextStep="Review the launch readiness status"
    />
  );
}
