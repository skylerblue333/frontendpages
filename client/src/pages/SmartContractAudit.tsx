import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function SmartContractAudit() {
  return (
    <FeatureUnavailable
      title="Smart-contract auditing is not active"
      description="This route currently exposes an authenticated shell without verified contract source or audit findings. It remains unavailable until chain and contract identity, source provenance, analysis tooling, finding severity, remediation tracking, reviewer authorization, and immutable evidence are implemented and tested."
      capability="Smart-contract security analysis and audit reporting"
      nextStep="Review the launch readiness status"
    />
  );
}
