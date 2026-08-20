import FeatureUnavailable from "@/components/FeatureUnavailable";

const ZapierIntegration = () => (
  <FeatureUnavailable
    title="Zapier integration unavailable"
    description="Reliable automation requires approved app authorization and scopes, trigger and action contracts, field mapping and validation, webhook verification, idempotency, retries and rate limits, secret handling, task history, failure routing, redaction, and rollback. No connected app, trigger, action, task, webhook, delivery, or workflow success is shown or claimed here."
    capability="Verified Zapier automation and workflow delivery"
    nextStep="Connect approved Zapier app and webhook services, then verify authorization, mappings, idempotency, retries, task history, redaction, and rollback before enabling workflows"
  />
);

export default ZapierIntegration;
