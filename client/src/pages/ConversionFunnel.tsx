import FeatureUnavailable from "@/components/FeatureUnavailable";

const ConversionFunnel = () => (
  <FeatureUnavailable
    title="Conversion funnel unavailable"
    description="Conversion funnels require governed event instrumentation, documented stage definitions, attribution and identity rules, consent and privacy controls, deduplication, time-window handling, reproducible calculations, and validated exports. No visitor, user, stage, conversion, revenue, attribution, optimization, or forecast result is presented."
    capability="Auditable conversion-funnel measurement"
    nextStep="Connect approved analytics events and a governed reporting pipeline with privacy, attribution, calculation, access, export, and retention controls before enabling this feature"
  />
);

export default ConversionFunnel;
