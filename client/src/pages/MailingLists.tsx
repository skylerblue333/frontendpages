import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function MailingLists() {
  return (
    <FeatureUnavailable
      title="Mailing lists are not active"
      description="This route currently exposes an authenticated shell without verified subscriber records or consent workflows. It remains unavailable until list ownership, consent provenance, suppression and unsubscribe handling, import/export controls, privacy and retention, provider delivery, and account-scoped authorization are implemented and tested."
      capability="Subscriber list management and compliant messaging"
      nextStep="Review the launch readiness status"
    />
  );
}
