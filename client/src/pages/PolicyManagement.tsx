import FeatureUnavailable from "@/components/FeatureUnavailable";

const PolicyManagement = () => (
  <FeatureUnavailable
    title="Policy management unavailable"
    description="Policy management requires an authenticated organization, policy ownership, versioned documents, approval workflow, effective dates, acknowledgement records, enforcement controls, retention, and audit evidence. No policy, approval, compliance, or enforcement outcome is created here."
    capability="Policies, procedures, approvals, acknowledgements, and governance"
    nextStep="Connect governed document and approval services with versioning, access control, retention, and audit evidence before enabling policy operations"
  />
);

export default PolicyManagement;
