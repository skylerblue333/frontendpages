import FeatureUnavailable from "@/components/FeatureUnavailable";

const TravelTips = () => (
  <FeatureUnavailable
    title="Travel tips unavailable"
    description="Reliable travel guidance requires sourced and current destination information, editorial review, regional context, accessibility and safety caveats, date/version tracking, and a clear distinction between general information and professional advice. No destination tip, recommendation, availability, price, or safety outcome is published here."
    capability="Travel tips, guides, and destination recommendations"
    nextStep="Connect governed editorial sources, freshness checks, destination data, moderation, and disclosure controls before enabling travel guidance"
  />
);

export default TravelTips;
