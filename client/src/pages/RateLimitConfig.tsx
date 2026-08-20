import FeatureUnavailable from "@/components/FeatureUnavailable";

const RateLimitConfig = () => (
  <FeatureUnavailable
    title="Rate-limit configuration unavailable"
    description="A trustworthy rate-limit policy requires an approved edge or API enforcement provider, route and identity scopes, burst and sustained limits, distributed coordination, retry semantics, abuse controls, observability, change approval, and rollback. No request quota, traffic count, protection status, or saved policy is shown or claimed here."
    capability="Verified request enforcement and rate-limit policy management"
    nextStep="Connect the approved edge/API policy service, persistence, audit trail, alerting, and bounded load tests before enabling configuration"
  />
);

export default RateLimitConfig;
