import FeatureUnavailable from "@/components/FeatureUnavailable";

const StakeDelegation = () => (
  <FeatureUnavailable
    title="Stake Delegation"
    description="Stake Delegation is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="Stake Delegation on /stake-delegation"
    nextStep="Return to the launch hub"
  />
);

export default StakeDelegation;
