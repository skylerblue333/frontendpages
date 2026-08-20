import FeatureUnavailable from "@/components/FeatureUnavailable";

const TravelBudget = () => (
  <FeatureUnavailable
    title="Travel budgeting unavailable"
    description="A production travel budget requires user-provided expenses, verified prices and exchange rates, currency and tax assumptions, secure persistence, calculation rules, correction history, and clear limits against financial advice. No amount, balance, forecast, savings claim, booking cost, or financial recommendation is generated here."
    capability="Travel expense planning, budgeting, and cost estimates"
    nextStep="Connect governed expense storage, market and exchange-rate sources, calculation rules, privacy controls, and reviewed disclosures before enabling budgeting"
  />
);

export default TravelBudget;
