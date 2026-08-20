import FeatureUnavailable from "@/components/FeatureUnavailable";

const ValidatorPerformance = () => (
  <FeatureUnavailable
    title="Validator performance"
    description="Validator performance analytics are intentionally held at a truthful release boundary until verified chain telemetry, validator authorization, persistence, monitoring, and acceptance evidence are available."
    capability="Blockchain-validator performance telemetry"
    nextStep="Return to the launch hub"
  />
);

export default ValidatorPerformance;
