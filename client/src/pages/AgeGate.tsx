import FeatureUnavailable from "@/components/FeatureUnavailable";

const AgeGate = () => (
  <FeatureUnavailable
    title="Age-restricted service unavailable"
    description="A sessionStorage self-attestation is not age verification. The prior gate also claimed legal compliance, performer documentation, content-custodian records, terms, and policy acceptance without evidence. No adult-content access is granted here."
    capability="Age assurance, adult-content access, consent, and legal compliance"
    nextStep="Obtain jurisdiction-specific legal review and connect an approved age-assurance, consent, moderation, records, and policy-acceptance service before enabling access"
  />
);

export default AgeGate;
