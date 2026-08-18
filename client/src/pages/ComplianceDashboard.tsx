import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function ComplianceDashboard() {
  return (
    <FeatureUnavailable
      title="Compliance dashboard is not active"
      description="This route currently exposes an authenticated shell without verified control evidence or findings. It remains unavailable until control inventory, evidence sources, reviewer authorization, remediation tracking, retention, report integrity, and explicit owner acceptance are implemented and tested."
      capability="Compliance tracking, findings, remediation, and reporting"
      nextStep="Review the launch readiness status"
    />
  );
}
