import FeatureUnavailable from "@/components/FeatureUnavailable";

const TaxReports = () => (
  <FeatureUnavailable
    title="Tax reports unavailable"
    description="Tax reporting requires verified account, transaction, cost-basis, jurisdiction, tax-year, and document data; deterministic rules; reconciliation; privacy and retention controls; review workflows; and clear boundaries against legal or tax advice. No tax record, gain, loss, filing, liability, refund, compliance status, or advice is calculated or issued here."
    capability="Tax-document organization, reporting, and tax-year calculations"
    nextStep="Connect governed financial data, jurisdiction rules, document storage, reconciliation, privacy, audit, and reviewed professional disclosures before enabling tax reports"
  />
);

export default TaxReports;
