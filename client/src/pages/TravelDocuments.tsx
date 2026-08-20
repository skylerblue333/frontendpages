import FeatureUnavailable from "@/components/FeatureUnavailable";

const TravelDocuments = () => (
  <FeatureUnavailable
    title="Travel document storage unavailable"
    description="Passport, visa, identity, and travel-document handling requires encrypted storage, strict access control, data minimization, retention and deletion policy, malware scanning, audit logging, region and compliance review, and verified sharing boundaries. No document, identity record, expiry, eligibility, compliance, or approval result is stored or generated here."
    capability="Sensitive travel-document storage and organization"
    nextStep="Connect approved encrypted storage, identity and authorization controls, retention policy, audit logging, and compliance review before enabling travel documents"
  />
);

export default TravelDocuments;
