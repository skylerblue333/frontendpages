import FeatureUnavailable from "@/components/FeatureUnavailable";

const MobileShop = () => (
  <FeatureUnavailable
    title="Mobile marketplace unavailable"
    description="A production marketplace requires authenticated catalog ownership, inventory, pricing, tax and shipping policy, seller authorization, payment processing, order state, refunds, fulfillment, fraud controls, and audit evidence. No product, price, purchase, order, or delivery outcome is created here."
    capability="Mobile marketplace, checkout, orders, and fulfillment"
    nextStep="Connect governed catalog, seller, payment, and fulfillment services before enabling commerce"
  />
);

export default MobileShop;
