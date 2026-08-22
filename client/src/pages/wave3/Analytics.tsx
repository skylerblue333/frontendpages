import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AnalyticsPage() {
  return (
    <FeatureUnavailable
      title="Analytics is not active"
      description="Analytics remains unavailable until authenticated event collection, consent, retention, aggregation, and verified reporting persistence are connected."
      capability="User, platform, trading, marketplace, social, and learning analytics"
      nextStep="Return to the launch hub"
    />
  );
}
