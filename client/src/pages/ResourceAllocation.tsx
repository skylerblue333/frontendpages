import FeatureUnavailable from "@/components/FeatureUnavailable";

const ResourceAllocation = () => (
  <FeatureUnavailable
    title="Resource allocation unavailable"
    description="Reliable allocation requires an authorized organization scope, people and role records, capacity and availability rules, project permissions, budget and cost definitions, conflict detection, approvals, durable persistence, audit history, and rollback. No team size, utilization, budget, assignment, capacity, or completion outcome is shown or claimed here."
    capability="Verified resource planning and allocation"
    nextStep="Connect approved organization, project, workforce, planning, audit, and persistence services before enabling allocation changes"
  />
);

export default ResourceAllocation;
