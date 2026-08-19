import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function SocialFeedV2() {
  return (
    <FeatureUnavailable
      title="Social Feed V2 is not active"
      description="This route previously displayed hard-coded creators, verified badges, likes, comments, shares, trend volumes, follower counts, and local post creation as if a live community backend were connected. It remains unavailable until authenticated feed persistence, identity and moderation, media storage, notifications, ranking provenance, privacy controls, abuse handling, and cross-device consistency are implemented and tested."
      capability="Community feed, posting, engagement, discovery, and creator following"
      nextStep="Open the community workspace"
    />
  );
}
