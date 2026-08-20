import FeatureUnavailable from "@/components/FeatureUnavailable";

const SystemArchitecture = () => (
  <FeatureUnavailable
    title="System architecture"
    description="The production system architecture view is intentionally held at a truthful release boundary until the deployed topology, dependency inventory, configuration, and change evidence are verified against the running environment."
    capability="Deployed system topology and dependency evidence"
    nextStep="Return to the launch hub"
  />
);

export default SystemArchitecture;
