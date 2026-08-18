import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function MLModels() {
  return (
    <FeatureUnavailable
      title="ML model management is not active"
      description="This route currently exposes an authenticated shell without a verified model registry or deployment workflow. It remains unavailable until model provenance, versioning, evaluation, data governance, access control, monitoring, cost attribution, and rollback are implemented and tested."
      capability="Machine-learning model registry and deployment management"
      nextStep="Review the launch readiness status"
    />
  );
}
