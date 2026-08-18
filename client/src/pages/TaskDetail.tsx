import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function TaskDetail() {
  return (
    <FeatureUnavailable
      title="Task details are not active"
      description="This route currently exposes an authenticated shell without verified task records or execution workflows. It remains unavailable until account and tenant scope, task ownership, comments, status transitions, authorization, notifications, audit history, retries, and completion evidence are implemented and tested."
      capability="Task detail, collaboration, and execution tracking"
      nextStep="Review the launch readiness status"
    />
  );
}
