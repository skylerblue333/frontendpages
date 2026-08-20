import FeatureUnavailable from "@/components/FeatureUnavailable";

const TaskAutomation = () => (
  <FeatureUnavailable
    title="Task automation unavailable"
    description="Production task automation requires authenticated ownership, validated task definitions, triggers, scheduling, idempotent execution, secret handling, retries, rate limits, observability, approvals, and rollback. No task, schedule, trigger, integration call, execution, completion, or success result is created here."
    capability="Task scheduling, automation, integration execution, and retry workflows"
    nextStep="Connect governed task storage, event and schedule services, integration credentials, execution workers, observability, approval, and rollback controls before enabling automation"
  />
);

export default TaskAutomation;
