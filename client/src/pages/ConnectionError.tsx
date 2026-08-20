import FeatureUnavailable from "@/components/FeatureUnavailable";

const ConnectionError = () => (
  <FeatureUnavailable
    title="Service connection unavailable"
    description="This route is shown when the application cannot verify a reachable, authorized, and healthy backend or external provider. No user record, market data, wallet state, AI response, transaction, or operational success is displayed while the connection is unverified."
    capability="Verified service connectivity and recovery"
    nextStep="Return to the launch hub and retry after the approved service, network path, session, and health checks are restored"
  />
);

export default ConnectionError;
