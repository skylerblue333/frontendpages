import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function MatchChat() {
  return (
    <FeatureUnavailable
      title="Match chat is not active"
      description="This route previously displayed a fabricated match, conversation history, online presence, match score, safety-filter status, AI icebreakers, and simulated reply success. It remains unavailable until consented profiles, matching authorization, durable messaging, moderation, report/block handling, presence accuracy, and privacy controls are implemented and tested."
      capability="Match messaging, presence, safety, and AI icebreakers"
      nextStep="Review the launch readiness status"
    />
  );
}
