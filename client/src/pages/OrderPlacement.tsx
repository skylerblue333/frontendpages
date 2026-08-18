import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function OrderPlacement() {
  return (
    <FeatureUnavailable
      title="Order placement is not active"
      description="Order creation is unavailable until catalog, inventory, authorization, payment intent, idempotency, fulfillment, cancellation, refund, and reconciliation contracts are connected and tested. This route does not submit an order or claim payment success."
      capability="Order placement and checkout"
      nextStep="Return to the launch hub"
    />
  );
}
