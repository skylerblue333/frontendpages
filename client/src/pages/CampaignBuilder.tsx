import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function CampaignBuilder() {
  return (
    <FeatureUnavailable
      title="Campaign builder is not active"
      description="This route currently exposes an authenticated shell without verified campaign creation or delivery. It remains unavailable until campaign ownership, audience consent, content review, provider integrations, budget authorization, rate limits, unsubscribe handling, delivery status, and rollback are implemented and tested."
      capability="Campaign creation, targeting, delivery, and controls"
      nextStep="Review the launch readiness status"
    />
  );
}
