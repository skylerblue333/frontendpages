import FeatureUnavailable from "@/components/FeatureUnavailable";

const WorkflowBuilder = () => (
  <FeatureUnavailable
    title="Workflow builder unavailable"
    description="Production workflow automation requires durable definitions, authenticated triggers, validated actions, retries, idempotency, secrets handling, rate limits, approvals, observability, audit history, and rollback behavior. No workflow, trigger, action, execution, integration, or success result is created here."
    capability="Workflow design, automation, and execution"
    nextStep="Connect governed workflow storage, trigger and action services, secret management, observability, and rollback controls before enabling automation"
  />
);

export default WorkflowBuilder;
