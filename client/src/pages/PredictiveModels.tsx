import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function PredictiveModels() {
  return (
    <FeatureUnavailable
      title="Predictive models are not active"
      description="This route currently exposes an authenticated shell without verified predictions or model outputs. It remains unavailable until data provenance, model versioning, uncertainty calibration, evaluation evidence, domain safeguards, account authorization, and reproducible reporting are implemented and tested."
      capability="Predictive modeling and forecast analysis"
      nextStep="Review the launch readiness status"
    />
  );
}
