import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AuditTrail() {
  return (
    <FeatureUnavailable
      title="Audit trail is not active"
      description="This route currently exposes an authenticated shell without verified audit records. It remains unavailable until structured event collection, actor and target attribution, tamper-aware retention, sensitive-data redaction, privileged access controls, search, export integrity, and monitoring are implemented and tested."
      capability="Audit trail and operational event history"
      nextStep="Review the launch readiness status"
    />
  );
}
