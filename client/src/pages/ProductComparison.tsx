import FeatureUnavailable from "@/components/FeatureUnavailable";

const ProductComparison = () => (
  <FeatureUnavailable
    title="Product comparison unavailable"
    description="A trustworthy product comparison requires authoritative product records, consistent feature and specification schemas, current pricing and currency data, availability and regional rules, provenance, ranking methodology, accessibility, and freshness handling. No product, price, feature, ranking, recommendation, availability, savings, or comparison result is shown or asserted."
    capability="Verified side-by-side product comparison"
    nextStep="Connect approved catalog, pricing, inventory, specification, ranking, and localization services with provenance and freshness controls before enabling comparisons"
  />
);

export default ProductComparison;
