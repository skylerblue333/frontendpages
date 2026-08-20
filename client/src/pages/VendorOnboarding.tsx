import FeatureUnavailable from "@/components/FeatureUnavailable";

const VendorOnboarding = () => (
  <FeatureUnavailable
    title="Vendor onboarding unavailable"
    description="Safe vendor onboarding requires verified organization identity, beneficial-owner and tax checks, jurisdiction and category eligibility, policy acceptance, catalog and fulfillment controls, payment and payout setup, fraud and compliance review, account permissions, durable status history, and appeals or rollback. No vendor, verification, approval, listing, payout, compliance, or activation outcome is shown or claimed here."
    capability="Verified vendor onboarding and marketplace activation"
    nextStep="Connect approved identity, compliance, catalog, payments, payout, and marketplace services before enabling vendor submission or activation"
  />
);

export default VendorOnboarding;
