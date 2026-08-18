import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function MegaMarketplace() {
  return (
    <FeatureUnavailable
      title="Mega marketplace is not active"
      description="This route previously displayed hard-coded products, prices, ratings, reviews, sales, revenue, active buyers, charity amounts, age-gated content, and cart behavior. It is unavailable until catalog provenance, seller verification, age controls, payments, fulfillment, refunds, charity accounting, and audit evidence are connected."
      capability="Marketplace catalog, checkout, age-gated commerce, and charitable settlement"
      nextStep="Return to the launch hub"
    />
  );
}
