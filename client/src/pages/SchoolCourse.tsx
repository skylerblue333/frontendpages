import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function SchoolCourse() {
  return (
    <FeatureUnavailable
      title="Course detail is not active"
      description="This route previously displayed hard-coded courses, instructors, student counts, ratings, reviews, curriculum, prices, enrollment, certificates, lifetime access, and SKY444 rewards. It remains unavailable until verified course content, instructor authorization, enrollment/payment persistence, lesson delivery, review provenance, assessment, and reward accounting are implemented."
      capability="Course detail, enrollment, curriculum, and completion"
      nextStep="Review the launch readiness status"
    />
  );
}
