import FeatureUnavailable from "@/components/FeatureUnavailable";

const ProductCatalog = () => (
  <FeatureUnavailable
    title="Product catalog unavailable"
    description="A trustworthy product catalog requires an authoritative catalog source, product ownership, schema and media validation, pricing and currency rules, inventory or availability synchronization, search indexing, access controls, localization, publishing state, and cache correctness. No product, price, inventory, availability, listing, search result, or catalog synchronization is shown or asserted."
    capability="Verified product catalog and availability browsing"
    nextStep="Connect approved catalog, pricing, inventory, search, media, localization, and publishing services with freshness and rollback controls before enabling the catalog"
  />
);

export default ProductCatalog;
