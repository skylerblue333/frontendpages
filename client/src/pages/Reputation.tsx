import FeatureUnavailable from "@/components/FeatureUnavailable";

const Reputation = () => (
  <FeatureUnavailable
    title="Reputation"
    description="Reputation is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="Reputation on /reputation"
    nextStep="Return to the launch hub"
  />
);

export default Reputation;
