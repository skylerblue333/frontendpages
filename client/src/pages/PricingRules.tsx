import FeatureUnavailable from "@/components/FeatureUnavailable";

const PricingRules = () => (
  <FeatureUnavailable
    title="Pricing rules unavailable"
    description="Dynamic pricing requires an authenticated product catalog, currency and tax policy, billing provider, rule governance, approvals, audit, customer disclosures, and rollback controls. No price, discount, rate, charge, or billing outcome is calculated here."
    capability="Dynamic pricing, billing rules, discounts, and commercial controls"
    nextStep="Connect governed catalog and billing infrastructure before enabling pricing rules"
  />
);

export default PricingRules;
