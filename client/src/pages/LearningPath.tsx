import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function LearningPath() {
  return (
    <FeatureUnavailable
      title="Learning paths are not active"
      description="This route currently exposes an authenticated shell without verified curriculum or learner data. It remains unavailable until course relationships, recommendation methodology, learner authorization, progress persistence, accessibility, and completion outcomes are implemented and tested."
      capability="Personalized education paths and recommendations"
      nextStep="Review the launch readiness status"
    />
  );
}
