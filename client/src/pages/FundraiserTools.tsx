import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function FundraiserTools() {
  return (
    <FeatureUnavailable
      title="Fundraising tools are not active"
      description="Fundraising workflows are unavailable until campaign ownership, beneficiary verification, donor consent, payment custody, restricted-fund controls, disbursement approvals, refunds, tax and legal review, fraud monitoring, and independently reconciled reporting are implemented and tested."
      capability="Fundraiser creation, donations, and disbursement reporting"
      nextStep="Review the launch readiness status"
    />
  );
}
