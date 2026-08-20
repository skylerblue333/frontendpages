import FeatureUnavailable from "@/components/FeatureUnavailable";

const RateLimiting = () => (
  <FeatureUnavailable
    title="Rate limiting unavailable"
    description="Live request protection requires an approved edge/API enforcement provider, distributed policy storage, identity and route scopes, burst semantics, retry behavior, abuse controls, observability, and rollback. No traffic count, active limit, quota, blocked request, or policy success is shown or asserted here."
    capability="Verified rate-limiting enforcement and operations"
    nextStep="Connect the approved enforcement and policy services, then verify them with bounded load, failure, alerting, and rollback tests before activation"
  />
);

export default RateLimiting;
