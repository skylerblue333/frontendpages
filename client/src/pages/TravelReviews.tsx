import FeatureUnavailable from "@/components/FeatureUnavailable";

const TravelReviews = () => (
  <FeatureUnavailable
    title="Travel reviews unavailable"
    description="A trustworthy travel-review system requires verified destinations and visits, authenticated authorship, anti-fraud and moderation controls, review policy, privacy protections, dispute handling, and transparent aggregation. No review, author, rating, recommendation, safety signal, or trust outcome is created here."
    capability="Destination reviews, ratings, and travel trust signals"
    nextStep="Connect governed destination data, identity, review storage, moderation, anti-fraud, dispute, and audit services before enabling reviews"
  />
);

export default TravelReviews;
