import FeatureUnavailable from "@/components/FeatureUnavailable";

const PropertyTransfer = () => (
  <FeatureUnavailable
    title="Property transfer unavailable"
    description="A trustworthy property-transfer workflow requires verified parties, authoritative ownership and property records, jurisdiction-specific documents and approvals, identity and authorization checks, escrow or payment controls, fee and tax calculations, signing and audit trails, idempotency, and recoverable settlement state. No transfer, ownership change, document, approval, fee, tax, payment, settlement, or completion result is shown or asserted."
    capability="Auditable property-transfer and settlement workflow"
    nextStep="Connect approved identity, title, document, legal, payment or escrow, signing, settlement, and audit services with owner acceptance and rollback controls before enabling transfers"
  />
);

export default PropertyTransfer;
