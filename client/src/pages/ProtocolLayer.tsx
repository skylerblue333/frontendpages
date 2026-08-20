import FeatureUnavailable from "@/components/FeatureUnavailable";

const ProtocolLayer = () => (
  <FeatureUnavailable
    title="Developer protocol preview"
    description="The displayed API paths, SDK packages, webhooks, API keys, payment actions, wallet management, AI intent parsing, marketplace access, and live-stream integrations are planning concepts only. No public provider, deployed endpoint, package, issuer, webhook sender, key, payment, wallet, or execution result is verified in this release."
    capability="Public API, SDK, webhook, and partner integrations"
    nextStep="Review the developer protocol evidence boundary"
  />
);

export default ProtocolLayer;
