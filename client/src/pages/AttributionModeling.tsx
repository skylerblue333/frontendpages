import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AttributionModeling() {
  return (
    <FeatureUnavailable
      title="Attribution modeling is not active"
      description="This route currently exposes an authenticated shell without verified event lineage or attribution data. It remains unavailable until consented event collection, identity resolution, attribution methodology, revenue provenance, access controls, and reproducible reporting are implemented and tested."
      capability="Multi-touch attribution and impact reporting"
      nextStep="Review the launch readiness status"
    />
  );
}
