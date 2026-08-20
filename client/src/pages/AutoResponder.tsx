import FeatureUnavailable from "@/components/FeatureUnavailable";

const AutoResponder = () => (
  <FeatureUnavailable
    title="Auto-responder unavailable"
    description="Automated replies require an approved message provider, explicit account authorization, configurable rules, safe content handling, rate limits, delivery receipts, audit logs, opt-out controls, and failure recovery. No message has been sent, scheduled, delivered, or acknowledged."
    capability="Governed automated message responses"
    nextStep="Connect an approved messaging provider and rule engine with authorization, moderation, rate-limit, opt-out, delivery, audit, and rollback controls before enabling automation"
  />
);

export default AutoResponder;
