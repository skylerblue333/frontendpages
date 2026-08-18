import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function EmailCampaigns() {
  return (
    <FeatureUnavailable
      title="Email campaigns are not active"
      description="This route currently exposes an authenticated shell without verified campaign or delivery services. It remains unavailable until sender identity, consent and suppression lists, template review, provider contracts, rate limits, bounce handling, unsubscribe compliance, delivery status, privacy controls, and rollback are implemented and tested."
      capability="Email campaign creation, delivery, and reporting"
      nextStep="Review the launch readiness status"
    />
  );
}
