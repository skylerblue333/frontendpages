import FeatureUnavailable from "@/components/FeatureUnavailable";

const GeneratedApiExplorer = () => (
  <FeatureUnavailable
    title="API explorer unavailable"
    description="The endpoint catalog, 305-endpoint count, generated responses, 200 OK state, latency, random identifiers, social mutations, wallet balances, token staking, AI chat, and recommendations were not backed by a verified provider. No request, mutation, payment, wallet action, or AI result is executed from this preview."
    capability="Interactive API discovery and request execution"
    nextStep="Publish an explorer only from a verified OpenAPI/tRPC contract and protected test environment"
  />
);

export default GeneratedApiExplorer;
