import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function ComplianceChecking() {
  return (
    <FeatureUnavailable
      title="Compliance checking is not active"
      description="Compliance assessment is unavailable until the applicable control framework, evidence sources, test procedures, findings, remediation ownership, exception handling, review approvals, and report integrity are implemented and independently verified. A readiness label or successful build is not a certification."
      capability="Compliance controls, evidence, and assessment reporting"
      nextStep="Review the launch readiness status"
    />
  );
}
