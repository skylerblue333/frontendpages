import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function PersonaBuilder() {
  return (
    <FeatureUnavailable
      title="Persona builder is not active"
      description="This route currently exposes an authenticated shell without verified persona data or methodology. It remains unavailable until consented data collection, segmentation logic, privacy controls, account and tenant isolation, persistence, review, and deletion workflows are implemented and tested."
      capability="AI persona creation and audience analysis"
      nextStep="Review the launch readiness status"
    />
  );
}
