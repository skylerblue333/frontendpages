import FeatureUnavailable from "@/components/FeatureUnavailable";

const NSFWFeed = () => (
  <FeatureUnavailable
    title="Adult-content service unavailable"
    description="The prior feed used mock adult-content listings, creator identities, likes, comments, prices, premium tiers, unlock actions, and an 80% revenue-share claim. Age assurance, performer documentation, consent, moderation, payment, content storage, privacy, regional compliance, and 18 U.S.C. § 2257 records are not verified here; no content is displayed or purchased."
    capability="Age-restricted content, creator monetization, and paid unlocks"
    nextStep="Obtain legal/compliance approval and connect verified age, consent, moderation, payment, and content services before enabling this route"
  />
);

export default NSFWFeed;
