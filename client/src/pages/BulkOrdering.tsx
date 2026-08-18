import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function BulkOrdering() {
  return (
    <FeatureUnavailable
      title="Bulk ordering is not active"
      description="Bulk purchasing is unavailable until catalog, inventory, pricing, tax, authorization, payment, fulfillment, cancellation, and reconciliation contracts are connected and tested. This route does not submit orders or imply payment success."
      capability="Bulk ordering and commerce operations"
      nextStep="Return to the launch hub"
    />
  );
}
