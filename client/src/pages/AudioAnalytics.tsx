import FeatureUnavailable from "@/components/FeatureUnavailable";

const AudioAnalytics = () => (
  <FeatureUnavailable
    title="Audio analytics unavailable"
    description="Audio analytics require verified playback events, consent-aware listener identity, aggregation, retention, access controls, licensing context, and auditable dashboards. No listener, play, duration, engagement, audience, revenue, or performance metric is generated here."
    capability="Audio playback analytics and listener reporting"
    nextStep="Connect governed media telemetry, privacy, aggregation, licensing, and observability services before enabling analytics"
  />
);

export default AudioAnalytics;
