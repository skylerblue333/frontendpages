import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function SchoolDashboard() {
  return (
    <FeatureUnavailable
      title="School dashboard is not active"
      description="This route previously displayed hard-coded enrolled courses, lesson completion, certificates, XP, progress percentages, and on-chain certificate claims. It remains unavailable until account-scoped enrollment and progress persistence, assessment, certificate verification, reward accounting, and authorization are implemented and tested."
      capability="Learner dashboard, progress, certificates, and rewards"
      nextStep="Review the launch readiness status"
    />
  );
}
