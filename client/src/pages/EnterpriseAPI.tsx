import FeatureUnavailable from "@/components/FeatureUnavailable";

const EnterpriseAPI = () => (
  <FeatureUnavailable
    title="Enterprise API unavailable"
    description="The displayed API catalog, endpoint counts, rate limits, pricing, AI engines, behavior analysis, predictions, agent earnings, documentation, and api.skycoin4444.com examples are not verified deployments. Enabling this surface requires an approved provider, contract, authentication issuer, quota service, billing, privacy controls, evaluation, and operational evidence."
    capability="Enterprise API, SDK, AI engines, quotas, and commercial access"
    nextStep="Publish a verified API contract only after the provider and controls are live"
  />
);

export default EnterpriseAPI;
