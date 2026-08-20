import FeatureUnavailable from "@/components/FeatureUnavailable";

const StreamAnalytics = () => (
  <FeatureUnavailable
    title="Stream analytics unavailable"
    description="Streaming analytics require an authenticated event pipeline, consent-aware instrumentation, viewer identity rules, aggregation, retention, access controls, and verified dashboards. No stream, viewer, engagement, latency, audience, revenue, or performance metric is generated here."
    capability="Streaming analytics, audience measurement, and engagement reporting"
    nextStep="Connect governed telemetry, streaming, privacy, aggregation, and observability services before enabling analytics"
  />
);

export default StreamAnalytics;
