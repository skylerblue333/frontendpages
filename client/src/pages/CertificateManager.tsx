import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function CertificateManager() {
  return (
    <FeatureUnavailable
      title="Certificate management is not active"
      description="This route currently exposes an authenticated shell without verified certificates or completion records. It remains unavailable until course assessment, identity binding, issuer authorization, issuance and revocation persistence, public verification, and audit controls are implemented and tested."
      capability="Education certificates, issuance, and verification"
      nextStep="Review the launch readiness status"
    />
  );
}
