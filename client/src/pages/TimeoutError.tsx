import FeatureUnavailable from "@/components/FeatureUnavailable";

const TimeoutError = () => (
  <FeatureUnavailable
    title="Request timed out"
    description="The requested operation did not receive a verified response within its allowed time. This route does not infer whether a server, provider, wallet, payment, message, AI request, or database mutation completed after the timeout, and it does not fabricate a retry or recovery result."
    capability="Verified timeout handling and operation reconciliation"
    nextStep="Return to the launch hub and retry only after checking the operation’s idempotent status or approved provider reconciliation path"
  />
);

export default TimeoutError;
