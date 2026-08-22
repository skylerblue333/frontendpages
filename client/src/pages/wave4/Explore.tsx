import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function ExplorePage() {
  return (
    <FeatureUnavailable
      title="Explore is not active"
      description="Discovery remains unavailable until authenticated user identity, content moderation, commerce, education, gaming, governance, recommendation, and persistence contracts are connected and verified."
      capability="User, content, product, course, game, proposal, and recommendation discovery"
      nextStep="Return to the launch hub"
    />
  );
}
