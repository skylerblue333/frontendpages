import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function SkySchool() {
  return (
    <FeatureUnavailable
      title="SkySchool is not active"
      description="This route previously displayed course catalogs, student counts, ratings, lesson content, XP and SKY rewards, and learning progress without a verified education backend. It remains unavailable until curriculum provenance, enrollment and progress persistence, content rights, certification, and any reward ledger are independently verified."
      capability="SkySchool courses, lessons, progress, and rewards"
      nextStep="Review the launch readiness status"
    />
  );
}
