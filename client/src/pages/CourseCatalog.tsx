import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function CourseCatalog() {
  return (
    <FeatureUnavailable
      title="Course catalog is not active"
      description="This route currently exposes an authenticated shell without verified course data or enrollment behavior. It remains unavailable until curriculum persistence, instructor authorization, enrollment, progress tracking, content access, completion rules, and tested error states are connected."
      capability="Course catalog and enrollment"
      nextStep="Return to the launch hub"
    />
  );
}
