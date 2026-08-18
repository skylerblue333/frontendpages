import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function EmailIntegration() {
  return (
    <FeatureUnavailable
      title="Email integration is not active"
      description="This route currently exposes an authenticated setup shell without a verified provider connection. It remains unavailable until server-side secret handling, sender and domain verification, webhook authentication, delivery and bounce state, rate limits, consent and suppression controls, monitoring, and rotation/revocation workflows are implemented and tested."
      capability="Email provider integration and delivery status"
      nextStep="Review the launch readiness status"
    />
  );
}
