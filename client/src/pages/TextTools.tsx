import FeatureUnavailable from "@/components/FeatureUnavailable";

const TextTools = () => (
  <FeatureUnavailable
    title="Text tools unavailable"
    description="Production text processing requires an explicit processing contract, input and output handling, privacy and retention controls, model or algorithm verification, encoding and language guarantees, error reporting, and safe export behavior. No text is transformed, summarized, translated, analyzed, stored, or exported here."
    capability="Text transformation, analysis, translation, and export utilities"
    nextStep="Connect governed text-processing services, privacy controls, input validation, language and model disclosures, and audited export before enabling text tools"
  />
);

export default TextTools;
