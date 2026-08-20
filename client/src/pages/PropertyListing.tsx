import FeatureUnavailable from "@/components/FeatureUnavailable";

const PropertyListing = () => (
  <FeatureUnavailable
    title="Property listings unavailable"
    description="A trustworthy property-listing experience requires authoritative listing records, verified ownership or seller identity, location and media validation, current price and availability data, disclosure and regional-compliance controls, privacy safeguards, inquiry routing, and transaction-state reconciliation. No property, price, valuation, rent, yield, availability, seller, inquiry, offer, or transaction result is shown or asserted."
    capability="Verified property marketplace browsing and listing data"
    nextStep="Connect approved property, identity, market-data, media, disclosure, inquiry, and transaction services with provenance and rollback controls before enabling listings"
  />
);

export default PropertyListing;
