import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function School() {
  return (
    <FeatureUnavailable
      title="SkySchool is not active"
      description="This route previously displayed hard-coded courses, instructors, student counts, ratings, prices, SKY444 earnings, certificates, and enrollment paths. It remains unavailable until curriculum provenance, instructor authorization, course access, progress persistence, certification rules, and any reward ledger are verified."
      capability="SkySchool catalog, enrollment, progress, and certificates"
      nextStep="Review the launch readiness status"
    />
  );
}
