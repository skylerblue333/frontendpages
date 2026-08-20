import FeatureUnavailable from "@/components/FeatureUnavailable";

const WebhookManager = () => (
  <FeatureUnavailable
    title="Webhook manager unavailable"
    description="Webhook management requires authenticated ownership, endpoint registration, secret handling, signature verification, event schemas, replay protection, retry and dead-letter policy, delivery observability, and audited persistence. No endpoint, event, delivery, retry, or success outcome is created here."
    capability="Webhooks, event delivery, signatures, retries, and integrations"
    nextStep="Connect governed integration services with secret rotation, verification, replay protection, delivery monitoring, and audit evidence before enabling webhooks"
  />
);

export default WebhookManager;
