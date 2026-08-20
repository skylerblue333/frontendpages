import FeatureUnavailable from "@/components/FeatureUnavailable";

const ContactManagement = () => (
  <FeatureUnavailable
    title="Contact management unavailable"
    description="Contact management requires authenticated ownership, consent and purpose records, field validation, deduplication, access controls, retention and deletion rules, import/export safeguards, and audited persistence. No contact, customer, outreach, sync, or saved-state outcome is created here."
    capability="Contact records, customer data, outreach, and synchronization"
    nextStep="Connect a governed contact service with consent, privacy, authorization, retention, and audit controls before enabling records"
  />
);

export default ContactManagement;
