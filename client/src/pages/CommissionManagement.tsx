import FeatureUnavailable from "@/components/FeatureUnavailable";

const CommissionManagement = () => (
  <FeatureUnavailable
    title="Commission management unavailable"
    description="Commission management requires documented parties and agreements, rate and currency rules, attribution, tax treatment, authorization, ledger reconciliation, payout processing, disputes, refunds, and audit evidence. No commission, rate, participant, payout, or settlement outcome is created here."
    capability="Commissions, revenue share, attribution, and payouts"
    nextStep="Connect governed contract, ledger, tax, payment, and reconciliation services before enabling commission workflows"
  />
);

export default CommissionManagement;
