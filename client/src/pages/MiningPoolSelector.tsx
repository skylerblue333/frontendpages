import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function MiningPoolSelector() {
  return (
    <FeatureUnavailable
      title="Mining pool selection is not active"
      description="Pool selection is unavailable until provider connectivity, network validation, worker authorization, payout rules, monitoring, and verifiable reward reconciliation are implemented. This route does not connect to a pool or claim mining rewards."
      capability="Mining pool connectivity and payout configuration"
      nextStep="Return to the launch hub"
    />
  );
}
