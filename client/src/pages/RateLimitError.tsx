import FeatureUnavailable from "@/components/FeatureUnavailable";

const RateLimitError = () => (
  <FeatureUnavailable
    title="Request temporarily unavailable"
    description="A rate-limit response can only be shown as a verified operational event when an approved edge or API provider supplies the status, scope, retry guidance, request identity, and observability record. This route does not invent traffic volume, quota consumption, abuse findings, retry-after timing, or recovery success."
    capability="Verified request throttling and retry guidance"
    nextStep="Return to the launch hub and retry after the approved enforcement provider and health checks confirm availability"
  />
);

export default RateLimitError;
