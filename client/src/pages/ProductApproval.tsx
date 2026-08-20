import FeatureUnavailable from "@/components/FeatureUnavailable";

const ProductApproval = () => (
  <FeatureUnavailable
    title="Product approval unavailable"
    description="Product approval requires authoritative product records, ownership, role-based review, catalog and pricing validation, inventory or fulfillment controls, prohibited-content checks, audit history, publishing safeguards, and rollback behavior. No product, price, inventory value, approval decision, publication state, compliance result, or successful change is shown or asserted."
    capability="Auditable product review and commerce publishing workflow"
    nextStep="Connect approved catalog, identity, review, pricing, inventory, compliance, publishing, and audit services with owner acceptance before enabling approval"
  />
);

export default ProductApproval;
