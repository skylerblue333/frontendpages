import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function BlockRewards() {
  return (
    <FeatureUnavailable
      title="Block rewards are not active"
      description="Block production and reward reporting are unavailable until verified chain identity, validator or miner participation, block provenance, consensus and finality, reward emission rules, wallet authorization, duplicate prevention, tax treatment, and reconciled payout records are implemented and tested."
      capability="Blockchain block rewards and payout reporting"
      nextStep="Review the launch readiness status"
    />
  );
}
