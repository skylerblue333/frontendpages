import FeatureUnavailable from "@/components/FeatureUnavailable";

const DataExport = () => (
  <FeatureUnavailable
    title="Data export unavailable"
    description="Data export requires authenticated and permission-aware data access, an explicit export scope, schema and format definitions, privacy and redaction rules, reliable job processing, retention and deletion controls, integrity checks, and secure download delivery. No records were queried, generated, exported, counted, or downloaded."
    capability="Secure, auditable user-authorized data export"
    nextStep="Connect approved export services with authorization, scope review, redaction, job tracking, integrity validation, retention, and secure delivery controls before enabling exports"
  />
);

export default DataExport;
