import FeatureUnavailable from "@/components/FeatureUnavailable";

const PlatformStatus = () => (
  <FeatureUnavailable
    title="Platform status"
    description="Platform status and uptime claims are intentionally held at a truthful release boundary until verified service telemetry, uptime monitors, incident records, and alerting are connected."
    capability="Production platform status and uptime"
    nextStep="Return to the launch hub"
  />
);

export default PlatformStatus;
