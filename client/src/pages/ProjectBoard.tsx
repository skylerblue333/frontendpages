import FeatureUnavailable from "@/components/FeatureUnavailable";

const ProjectBoard = () => (
  <FeatureUnavailable
    title="Project board unavailable"
    description="A trustworthy project board requires durable project and task records, tenant and role-aware access, ownership, workflow definitions, ordering, deadlines, dependencies, comments, notifications, conflict handling, audit history, and synchronized updates. No project, task, status, progress, deadline, owner, priority, completion, or collaboration result is shown or asserted."
    capability="Auditable collaborative project and task management"
    nextStep="Connect approved project, task, identity, notification, collaboration, and audit services with concurrency and recovery controls before enabling the board"
  />
);

export default ProjectBoard;
