import FeatureUnavailable from "@/components/FeatureUnavailable";

const VendorVerification = () => (
  <FeatureUnavailable
    title="Vendor verification unavailable"
    description="Trustworthy vendor verification requires an approved identity and business-verification provider, consent and privacy controls, document capture and malware scanning, jurisdiction and sanctions rules, beneficial-owner review, manual escalation, evidence retention, status provenance, appeals, and secure deletion. No identity, document, KYC, compliance, trust, approval, or verified-vendor result is shown or claimed here."
    capability="Verified vendor identity and compliance review"
    nextStep="Connect approved verification and compliance services with secure evidence handling, review, appeals, retention, and deletion controls before enabling verification"
  />
);

export default VendorVerification;
