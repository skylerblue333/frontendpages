import FeatureUnavailable from "@/components/FeatureUnavailable";

const NLPTools = () => (
  <FeatureUnavailable
    title="Natural-language tools unavailable"
    description="Natural-language processing requires an approved model provider, prompt and data handling policy, authentication, rate limits, cost controls, safety filters, retention rules, evaluation, and auditable error handling. No text is submitted, analyzed, classified, generated, stored, or scored here."
    capability="Natural-language processing, analysis, and generation"
    nextStep="Connect a governed AI provider and safety, privacy, usage, and observability controls before enabling NLP workflows"
  />
);

export default NLPTools;
