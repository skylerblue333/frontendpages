import FeatureUnavailable from "@/components/FeatureUnavailable";

const PrivacyPolicy = () => (
  <FeatureUnavailable
    title="Privacy policy publication unavailable"
    description="A trustworthy privacy policy requires an approved policy source, current data inventory, purposes and legal bases, regional requirements, processor disclosures, retention and rights procedures, versioning, effective dates, consent and withdrawal behavior, and validated publication controls. No policy text, consent state, compliance status, legal conclusion, or rights workflow is shown or asserted."
    capability="Auditable privacy policy publication and rights disclosure"
    nextStep="Connect approved privacy governance, policy-authoring, versioning, consent, rights-request, and publication services with owner acceptance before enabling this page"
  />
);

export default PrivacyPolicy;
