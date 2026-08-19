import FeatureUnavailable from "@/components/FeatureUnavailable";

const KYCVerification = () => (
  <FeatureUnavailable
    title="KYCVerification"
    description="KYCVerification is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="KYCVerification on /k-y-c-verification"
    nextStep="Return to the launch hub"
  />
);

export default KYCVerification;
