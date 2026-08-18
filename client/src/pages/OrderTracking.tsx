import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function OrderTracking() {
  return (
    <FeatureUnavailable
      title="Order tracking is not active"
      description="This route currently exposes an authenticated shell without verified order or carrier data. It remains unavailable until order ownership, fulfillment events, shipment-provider integration, delivery status, cancellation, refund, and failure handling are implemented and tested."
      capability="Order tracking and fulfillment status"
      nextStep="Return to the launch hub"
    />
  );
}
