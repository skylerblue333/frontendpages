import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function FlashLoans() {
  return (
    <FeatureUnavailable
      title="Flash loans are not active"
      description="Flash-loan analytics, automation, security, and execution are unavailable until verified chain and contract identity, liquidity and oracle sources, transaction simulation, atomic repayment, slippage and MEV controls, wallet authorization, risk limits, monitoring, incident response, and independently tested failure and rollback behavior exist."
      capability="Flash-loan execution, analytics, and automation"
      nextStep="Review the launch readiness status"
    />
  );
}
