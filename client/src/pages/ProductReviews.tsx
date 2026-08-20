import FeatureUnavailable from "@/components/FeatureUnavailable";

const ProductReviews = () => (
  <FeatureUnavailable
    title="Product reviews unavailable"
    description="Product reviews require a verified product catalog, authenticated authorship, purchase or eligibility rules, review storage, anti-fraud controls, moderation, abuse reporting, privacy, and auditable rating aggregation. No product, reviewer, rating, review, moderation, or purchase outcome is created here."
    capability="Product reviews, ratings, trust signals, and moderation"
    nextStep="Connect governed catalog, identity, review, and moderation services with anti-abuse and audit controls before enabling reviews"
  />
);

export default ProductReviews;
