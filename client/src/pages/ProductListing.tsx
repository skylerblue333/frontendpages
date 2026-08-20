import FeatureUnavailable from "@/components/FeatureUnavailable";

const ProductListing = () => (
  <FeatureUnavailable
    title="Product listing unavailable"
    description="A trustworthy product listing workflow requires authenticated seller ownership, durable product records, schema and media validation, pricing and currency rules, inventory or fulfillment integration, policy and prohibited-content review, draft and publication state, audit history, and rollback behavior. No listing, product, price, inventory, availability, order, publication, or successful save is shown or asserted."
    capability="Auditable product creation and marketplace publishing"
    nextStep="Connect approved seller, catalog, media, pricing, inventory, review, publishing, and audit services with least-privilege controls before enabling listings"
  />
);

export default ProductListing;
