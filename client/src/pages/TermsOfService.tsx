import FeatureUnavailable from "@/components/FeatureUnavailable";

const TermsOfService = () => (
  <FeatureUnavailable
    title="Terms of service publication unavailable"
    description="Binding terms require approved legal text, jurisdiction and governing-law review, effective-date and version control, user notice and acceptance recording, product and payment disclosures, privacy and acceptable-use alignment, dispute and termination language, and an accessible publication workflow. No legal agreement, warranty, service-level promise, compliance certification, or acceptance is shown or claimed here."
    capability="Verified legal-policy publication and acceptance"
    nextStep="Publish counsel-approved terms with versioning, effective dates, acceptance audit records, localization, and rollback-safe updates before treating this route as binding"
  />
);

export default TermsOfService;
