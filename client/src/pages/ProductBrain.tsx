import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function ProductBrain() {
  return (
    <FeatureUnavailable
      title="Product Brain is not active"
      description="This route previously displayed fabricated playbooks, usage counts, effectiveness scores, knowledge-base totals, adoption claims, retention and revenue recommendations, and versioning actions. It remains unavailable until source documents, ownership, provenance, access control, version history, evaluation methodology, and analytics reconciliation are implemented and tested."
      capability="Institutional product knowledge, playbooks, and insights"
      nextStep="Review the launch readiness status"
    />
  );
}
