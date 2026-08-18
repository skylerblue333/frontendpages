import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function SocialMediaCampaigns() {
  return (
    <FeatureUnavailable
      title="Social media campaigns are not active"
      description="This route currently exposes an authenticated shell without verified social-platform connections or posting workflows. It remains unavailable until account ownership, OAuth scopes, content and policy review, consent, scheduling, platform delivery, moderation, rate limits, deletion, and analytics provenance are implemented and tested."
      capability="Social posting, scheduling, moderation, and campaign analytics"
      nextStep="Review the launch readiness status"
    />
  );
}
