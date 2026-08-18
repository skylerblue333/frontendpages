import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function CampaignCreation() {
  return (
    <FeatureUnavailable
      title="Campaign creation is not active"
      description="Campaign submission and scheduling are unavailable until verified campaign ownership, content and policy review, audience consent, delivery-provider contracts, budget authorization, rate limits, unsubscribe handling, status reconciliation, and rollback are implemented and tested."
      capability="Campaign creation, scheduling, and delivery"
      nextStep="Review the launch readiness status"
    />
  );
}
