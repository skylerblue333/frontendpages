import FeatureUnavailable from "@/components/FeatureUnavailable";

const VendorAnalytics = () => (
  <FeatureUnavailable
    title="Vendor analytics unavailable"
    description="Vendor performance and revenue analytics require authenticated seller records, order and payment reconciliation, attribution rules, refunds, tax treatment, privacy controls, and an auditable reporting pipeline. No vendor, revenue, customer, order, or performance outcome is represented here."
    capability="Vendor analytics, revenue reporting, and marketplace performance"
    nextStep="Connect governed seller, order, payment, and reporting services before enabling analytics"
  />
);

export default VendorAnalytics;
