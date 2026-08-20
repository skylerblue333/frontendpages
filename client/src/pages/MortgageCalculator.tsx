import FeatureUnavailable from "@/components/FeatureUnavailable";

const MortgageCalculator = () => (
  <FeatureUnavailable
    title="Mortgage calculator unavailable"
    description="A trustworthy mortgage calculator requires documented formulas, current rate inputs, loan-term and fee assumptions, jurisdictional rules, tax and insurance treatment, validation, privacy controls, and clear non-advisory disclosure. No payment, affordability, lender, approval, or personalized financial outcome is calculated here."
    capability="Mortgage estimates, loan comparisons, and housing-finance calculations"
    nextStep="Connect reviewed calculation logic and disclosed rate/fee sources before enabling estimates"
  />
);

export default MortgageCalculator;
