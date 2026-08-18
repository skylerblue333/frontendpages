import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AdaptivePersonalization() {
  return (
    <FeatureUnavailable
      title="Adaptive personalization is not active"
      description="This route previously displayed hard-coded behavioral signal weights, model statuses and accuracy, feed-relevance gains, and a local preference-save control as if personalized learning were live. It remains unavailable until consented data collection, account isolation, privacy and deletion controls, model provenance and evaluation, explainability, safety review, persistence, and measurable outcomes are verified."
      capability="Personalized feeds, recommendations, and behavioral adaptation"
      nextStep="Review the launch readiness status"
    />
  );
}
