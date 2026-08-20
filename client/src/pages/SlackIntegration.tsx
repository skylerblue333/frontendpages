import FeatureUnavailable from "@/components/FeatureUnavailable";

const SlackIntegration = () => (
  <FeatureUnavailable
    title="Slack integration unavailable"
    description="A safe Slack integration requires an approved OAuth app, exact scopes, state and callback validation, workspace authorization, token storage and rotation, channel and user mapping, message and notification contracts, rate limits, redaction, audit logging, and delivery monitoring. No workspace, channel, message, notification, connection, or sync success is shown or claimed here."
    capability="Verified Slack authorization and message delivery"
    nextStep="Connect the approved Slack OAuth and event services, secret rotation, policy controls, and delivery tests before enabling the integration"
  />
);

export default SlackIntegration;
