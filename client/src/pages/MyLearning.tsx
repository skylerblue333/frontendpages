import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function MyLearning() {
  return (
    <FeatureUnavailable
      title="My Learning is not active"
      description="This route currently exposes an authenticated shell without verified enrollments or student progress. It remains unavailable until course access, lesson completion, progress persistence, certification rules, and account-scoped authorization are implemented and tested."
      capability="Student learning dashboard and progress tracking"
      nextStep="Return to the launch hub"
    />
  );
}
