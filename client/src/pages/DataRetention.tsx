import FeatureUnavailable from "@/components/FeatureUnavailable";

const DataRetention = () => (
  <FeatureUnavailable
    title="Data retention controls unavailable"
    description="Data retention requires an authoritative data inventory, documented purpose and retention rules, legal and regional requirements, storage ownership, automated enforcement, deletion and legal-hold handling, audit evidence, recovery behavior, and independently validated policy publication. No retention period, deletion status, storage state, compliance result, or policy enforcement is shown or asserted."
    capability="Auditable retention, deletion, and legal-hold governance"
    nextStep="Connect approved data-governance, storage, deletion, legal-hold, audit, and policy services with owner acceptance before enabling retention operations"
  />
);

export default DataRetention;
