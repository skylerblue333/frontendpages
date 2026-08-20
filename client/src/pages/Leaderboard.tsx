import FeatureUnavailable from "@/components/FeatureUnavailable";

const Leaderboard = () => (
  <FeatureUnavailable
    title="Leaderboard unavailable"
    description="The prior leaderboard relied on an unverified client query and implied ranked users, identities, XP, posts, followers, reputation, creator and earner outcomes, verified badges, and personal rank. No server procedure, scoring policy, privacy review, or durable ranking evidence is connected, so no ranking is displayed."
    capability="User rankings, reputation, achievements, and competitive outcomes"
    nextStep="Connect a documented server-side scoring service with privacy, authorization, anti-abuse controls, and audit evidence before publishing rankings"
  />
);

export default Leaderboard;
