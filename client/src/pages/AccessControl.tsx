import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AccessControl() {
  return (
    <FeatureUnavailable
      title="Access control management is not active"
      description="This route currently exposes an authenticated shell without a verified authorization-management contract. It remains unavailable until role and policy persistence, tenant isolation, privileged-operation checks, audit logging, and deny-path tests are implemented."
      capability="Role-based access control and policy management"
      nextStep="Review the launch readiness status"
    />
  );
}
