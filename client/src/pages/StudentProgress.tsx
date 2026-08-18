import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function StudentProgress() {
  return (
    <FeatureUnavailable
      title="Student progress is not active"
      description="This route currently exposes an authenticated shell without verified learner records. It remains unavailable until enrollment, lesson and quiz outcomes, streaks, certificates, rewards, privacy controls, and account authorization are persisted and tested."
      capability="Learner progress, achievement, and reward tracking"
      nextStep="Review the launch readiness status"
    />
  );
}
