import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AICore() {
  return (
    <FeatureUnavailable
      title="AI Core is not active"
      description="This route previously exposed chat, content generation, market analysis, token balances, recent generations, and an AI Pro upgrade without a verified production contract. It is unavailable until model-provider configuration, market-data provenance, usage accounting, privacy controls, authorization, billing, and tested failure handling are complete."
      capability="AI chat, content generation, market analysis, and usage accounting"
      nextStep="Return to the launch hub"
    />
  );
}
