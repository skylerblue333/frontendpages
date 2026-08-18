import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function ComplianceChecker() {
  return (
    <FeatureUnavailable
      title="Compliance checking is not active"
      description="This route currently exposes an authenticated shell without real compliance controls or evidence. It remains unavailable until policy sources, control tests, evidence collection, reviewer authorization, findings persistence, remediation tracking, and audit retention are implemented."
      capability="Compliance assessment and control evidence"
      nextStep="Review the launch readiness status"
    />
  );
}
