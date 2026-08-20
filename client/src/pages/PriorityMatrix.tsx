import FeatureUnavailable from "@/components/FeatureUnavailable";

const PriorityMatrix = () => (
  <FeatureUnavailable
    title="Priority matrix unavailable"
    description="A trustworthy priority matrix requires durable task records, user or organization scope, explicit prioritization criteria, ownership, permissions, change history, reminders, completion state, and synchronization across clients. No task, score, priority, schedule, recommendation, completion, or productivity result is shown or asserted."
    capability="Auditable task prioritization and planning workspace"
    nextStep="Connect approved task and planning services with authorization, durable state, scoring rules, reminders, audit, and recovery behavior before enabling the matrix"
  />
);

export default PriorityMatrix;
