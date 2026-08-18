import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function SkySchoolAI() {
  return (
    <FeatureUnavailable
      title="SkySchool AI is not active"
      description="This route previously displayed fabricated AI-taught courses, instructors, student counts, ratings, prices, enrollment, and learner skill-tree progress. It remains unavailable until verified course content, model/provider controls, enrollment and payment persistence, assessments, learner authorization, and certificate/reward accounting are implemented."
      capability="AI-assisted education catalog and personalized learning"
      nextStep="Review the launch readiness status"
    />
  );
}
