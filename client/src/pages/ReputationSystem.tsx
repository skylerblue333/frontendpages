import FeatureUnavailable from "@/components/FeatureUnavailable";

const ReputationSystem = () => (
  <FeatureUnavailable
    title="Reputation system preview"
    description="Creator scores, transaction success, trust ratings, earnings, badges, rankings, and score changes require authenticated identity, transaction provenance, moderation, scoring policy, audit, and current source data. This release does not claim a verified reputation result."
    capability="Reputation, trust, creator earnings, and ranking evidence"
    nextStep="Review the evidence matrix"
  />
);

export default ReputationSystem;
