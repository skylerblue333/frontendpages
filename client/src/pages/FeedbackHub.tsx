import FeatureUnavailable from "@/components/FeatureUnavailable";

const FeedbackHub = () => (
  <FeatureUnavailable
    title="Feedback hub unavailable"
    description="The prior hub used mock feedback records and fabricated totals, trends, sentiment, actionable-item counts, response rates, moderation, and auto-update behavior. No authenticated feedback store, consent policy, identity handling, analysis pipeline, triage workflow, or resolution evidence is connected."
    capability="Feedback collection, sentiment analysis, triage, and product-response workflows"
    nextStep="Connect a governed feedback service with consent, privacy, moderation, analysis provenance, and audited triage before publishing metrics"
  />
);

export default FeedbackHub;
