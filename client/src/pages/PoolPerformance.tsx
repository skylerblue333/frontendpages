import FeatureUnavailable from "@/components/FeatureUnavailable";

const PoolPerformance = () => (
  <FeatureUnavailable
    title="Pool performance"
    description="Pool performance analytics are intentionally held at a truthful release boundary until verified provider telemetry, authorization, persistence, monitoring, and acceptance evidence are available."
    capability="Mining-pool performance telemetry"
    nextStep="Return to the launch hub"
  />
);

export default PoolPerformance;
