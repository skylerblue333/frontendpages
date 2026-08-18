import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function SecurityCompliance() {
  return (
    <FeatureUnavailable
      title="Security and compliance controls are not active"
      description="This route previously claimed live authentication hardening, fraud detection, abuse filters, rate limits, transaction safety, audit logging, privacy controls, trust scores, compliance readiness, event counts, and an all-systems-secure status without independent evidence. It remains unavailable until each control is implemented, tested, monitored, redacted, and accepted by the security owner."
      capability="Security, fraud, abuse, audit, trust, and compliance controls"
      nextStep="Review the launch readiness status"
    />
  );
}
