import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function CampaignAnalytics() {
  return (
    <FeatureUnavailable
      title="Campaign analytics is not active"
      description="This route currently exposes an authenticated shell without verified campaign events or performance data. It remains unavailable until campaign ownership, event lineage, attribution methodology, spend and conversion sources, revenue reconciliation, privacy controls, and account-scoped access are implemented and tested."
      capability="Campaign performance, attribution, and revenue analytics"
      nextStep="Review the launch readiness status"
    />
  );
}
