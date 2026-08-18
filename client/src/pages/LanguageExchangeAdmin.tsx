import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export function LanguageExchangeAdmin() {
  return (
    <FeatureUnavailable
      title="Language-exchange moderation is not active"
      description="This route previously rendered fabricated moderation cases, teacher reports, analytics, evidence counts, and local approve/ban actions. It is unavailable until authenticated moderation data, role-based authorization, evidence storage, audit logging, export controls, and tested enforcement workflows are connected."
      capability="Language-exchange moderation and administrator controls"
      nextStep="Return to the launch hub"
    />
  );
}

export default LanguageExchangeAdmin;
