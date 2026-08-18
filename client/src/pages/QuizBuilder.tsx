import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function QuizBuilder() {
  return (
    <FeatureUnavailable
      title="Quiz builder is not active"
      description="This route currently exposes an authenticated shell without verified quiz authoring or assessment workflows. It remains unavailable until question persistence, instructor authorization, grading rules, attempt limits, accessibility, anti-cheating controls, progress, and certificate linkage are implemented and tested."
      capability="Education quiz authoring and assessment"
      nextStep="Review the launch readiness status"
    />
  );
}
