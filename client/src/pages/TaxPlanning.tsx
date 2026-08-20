import FeatureUnavailable from "@/components/FeatureUnavailable";

const TaxPlanning = () => (
  <FeatureUnavailable
    title="Tax planning unavailable"
    description="Tax planning is a high-risk capability requiring verified jurisdiction, tax-year, identity, income, transaction, cost-basis, and account data; current authoritative rules; scenario controls; privacy; review; and clear limits against legal or tax advice. No deduction, strategy, liability, savings, compliance, filing, or optimization recommendation is generated here."
    capability="Tax-planning scenarios, optimization, and professional workflow support"
    nextStep="Connect governed financial and identity data, jurisdiction rule sources, scenario calculations, audit, privacy, and reviewed professional disclosures before enabling tax planning"
  />
);

export default TaxPlanning;
