import FeatureUnavailable from "@/components/FeatureUnavailable";

const DataProcessing = () => (
  <FeatureUnavailable
    title="Data processing unavailable"
    description="Data processing requires an approved input source, explicit scope and authorization, schema validation, deterministic transformation rules, job tracking, idempotency, resource limits, privacy and retention controls, integrity checks, and failure recovery. No data was ingested, transformed, counted, stored, exported, or marked complete."
    capability="Governed and auditable data processing workflows"
    nextStep="Connect approved processing services with input validation, authorization, privacy, resource, job, integrity, monitoring, and rollback controls before enabling processing"
  />
);

export default DataProcessing;
