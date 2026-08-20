import FeatureUnavailable from "@/components/FeatureUnavailable";

const TaskList = () => (
  <FeatureUnavailable
    title="Task management unavailable"
    description="A production task list requires authenticated ownership, durable storage, authorization, validation, ordering, completion semantics, collaboration rules, notifications, audit history, and conflict handling. No task, assignee, priority, completion, reminder, or synchronization result is created here."
    capability="Task creation, assignment, tracking, and collaboration"
    nextStep="Connect governed task storage, identity, authorization, notification, and audit services before enabling task management"
  />
);

export default TaskList;
