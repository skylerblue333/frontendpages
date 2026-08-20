import FeatureUnavailable from "@/components/FeatureUnavailable";

const TriggersActions = () => (
  <FeatureUnavailable
    title="Triggers and actions unavailable"
    description="Production event automation requires authenticated event sources, validated payloads, durable rules, idempotent actions, secret handling, rate limits, retries, approvals, audit records, and observable delivery state. No trigger, rule, action, integration call, or success result is created here."
    capability="Event triggers, action rules, and integration automation"
    nextStep="Connect governed event ingestion, rule storage, action execution, secret management, observability, and rollback controls before enabling automation"
  />
);

export default TriggersActions;
