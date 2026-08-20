import FeatureUnavailable from "@/components/FeatureUnavailable";

const AutomationRules = () => (
  <FeatureUnavailable
    title="Automation rules unavailable"
    description="Automation rules require a governed trigger and action engine, durable scheduling, idempotency, authorization, integration health, retries, rate limits, audit logs, secret handling, and an emergency stop. No rule has been created, enabled, scheduled, executed, or completed."
    capability="Reliable cross-service automation and scheduled workflows"
    nextStep="Connect approved trigger/action services with authorization, scheduling, idempotency, retry, audit, secret, monitoring, and rollback controls before enabling rules"
  />
);

export default AutomationRules;
