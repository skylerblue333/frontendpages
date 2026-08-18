import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function ModerationDashboard() {
  return (
    <FeatureUnavailable
      title="Moderation dashboard is not active"
      description="This route currently exposes an authenticated shell without governed reports or enforcement workflows. It remains unavailable until report provenance, policy versioning, reviewer roles, privacy safeguards, appeals, notification, reversible enforcement, and audit logging are implemented and tested."
      capability="Content moderation, review, appeals, and enforcement"
      nextStep="Review the launch readiness status"
    />
  );
}
