import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function CourseBuilder() {
  return (
    <FeatureUnavailable
      title="Course builder is not active"
      description="This route currently exposes an authenticated shell without verified curriculum authoring or publishing. It remains unavailable until instructor authorization, content persistence, versioning, moderation, accessibility, enrollment, assessment, pricing, and rollback workflows are implemented and tested."
      capability="Education course authoring and publishing"
      nextStep="Review the launch readiness status"
    />
  );
}
