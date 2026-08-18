import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function APYTracking() {
  return (
    <FeatureUnavailable
      title="APY tracking is not active"
      description="APY and staking reporting are unavailable until verified chain and contract identity, wallet and custody boundaries, lock periods, reward semantics, fee and price provenance, compounding rules, slashing, withdrawal, tax treatment, and reconciled settlement records are implemented and tested."
      capability="Staking APY, rewards, and performance reporting"
      nextStep="Review the launch readiness status"
    />
  );
}
