import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function DeveloperMarketplace() {
  return (
    <FeatureUnavailable
      title="Developer marketplace is not active"
      description="This route previously displayed fabricated asset listings, ratings, download counts, prices, revenue share, and payout claims. It is unavailable until catalog provenance, seller authorization, licensing, payment processing, fulfillment, refunds, moderation, and audit evidence are connected."
      capability="Developer asset marketplace and seller operations"
      nextStep="Return to the launch hub"
    />
  );
}
