import FeatureUnavailable from "@/components/FeatureUnavailable";

const SolanaValidatorSetup = () => (
  <FeatureUnavailable
    title="Solana Validator Setup"
    description="Solana Validator Setup is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="Solana Validator Setup on /solana-validator-setup"
    nextStep="Return to the launch hub"
  />
);

export default SolanaValidatorSetup;
