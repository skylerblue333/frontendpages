import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function EmailTemplates() {
  return (
    <FeatureUnavailable
      title="Email templates are not active"
      description="This route currently exposes an authenticated shell without verified template persistence or delivery integration. It remains unavailable until ownership, versioning, variable validation, safe rendering, localization, accessibility, consent, preview isolation, moderation, and provider delivery controls are implemented and tested."
      capability="Email template authoring, preview, and delivery"
      nextStep="Review the launch readiness status"
    />
  );
}
