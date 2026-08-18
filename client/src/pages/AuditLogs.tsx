import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AuditLogs() {
  return (
    <FeatureUnavailable
      title="Audit logs are not active"
      description="Audit-log access is unavailable until authenticated event collection, tamper-aware retention, actor and target attribution, sensitive-data redaction, access controls, export integrity, and monitoring are implemented and verified."
      capability="Administrative audit logs and compliance evidence"
      nextStep="Review the launch readiness status"
    />
  );
}
