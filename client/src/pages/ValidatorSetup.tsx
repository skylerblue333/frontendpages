import FeatureUnavailable from "@/components/FeatureUnavailable";

const ValidatorSetup = () => (
  <FeatureUnavailable
    title="Validator Setup"
    description="Validator Setup is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="Validator Setup on /validator-setup"
    nextStep="Return to the launch hub"
  />
);

export default ValidatorSetup;
