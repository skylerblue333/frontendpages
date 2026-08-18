import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AutomationWorkflows() {
  return (
    <FeatureUnavailable
      title="Automation workflows are not active"
      description="This route previously presented hard-coded active workflows, run counts, last-run timestamps, success rate, latency, monetization, wallet, fraud, AI, charity, and moderation side effects. It remains unavailable until authenticated workflow ownership, event provenance, idempotent execution, authorization, queue and retry semantics, rate limits, approval gates, audit logs, secret isolation, observability, rollback, and integration tests are implemented and verified."
      capability="Event-driven workflow creation, scheduling, and external side effects"
      nextStep="Review the launch readiness status"
    />
  );
}
