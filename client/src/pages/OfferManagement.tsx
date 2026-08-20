import FeatureUnavailable from "@/components/FeatureUnavailable";

const OfferManagement = () => (
  <FeatureUnavailable
    title="Offer management unavailable"
    description="Offer workflows require authenticated parties, an item or service catalog, pricing and currency rules, eligibility, expiry, negotiation state, acceptance authorization, payment, cancellation, and audit evidence. No offer, discount, redemption, purchase, or transaction outcome is created here."
    capability="Offers, discounts, negotiation, and commerce transactions"
    nextStep="Connect governed catalog, pricing, identity, payment, and audit services before enabling offers"
  />
);

export default OfferManagement;
