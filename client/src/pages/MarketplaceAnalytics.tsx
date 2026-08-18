import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function MarketplaceAnalytics() {
  return (
    <FeatureUnavailable
      title="Marketplace analytics is not active"
      description="This route currently exposes an authenticated shell without a real analytics contract. It remains unavailable until marketplace events, revenue provenance, seller authorization, date-range queries, aggregation correctness, loading/error states, and access-controlled exports are implemented and tested."
      capability="Marketplace analytics and reporting"
      nextStep="Return to the launch hub"
    />
  );
}
