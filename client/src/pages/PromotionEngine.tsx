import FeatureUnavailable from "@/components/FeatureUnavailable";

const PromotionEngine = () => (
  <FeatureUnavailable
    title="Promotion engine unavailable"
    description="A trustworthy promotion engine requires authenticated campaign ownership, product and audience scope, eligibility and discount rules, budget and currency validation, consent and regional controls, scheduling, idempotency, abuse prevention, attribution, reporting, and rollback. No campaign, discount, coupon, reach, conversion, revenue, audience, schedule, or successful promotion is shown or asserted."
    capability="Auditable promotion creation and campaign execution"
    nextStep="Connect approved commerce, audience, pricing, consent, scheduling, attribution, reporting, and abuse-prevention services with rollback controls before enabling promotions"
  />
);

export default PromotionEngine;
