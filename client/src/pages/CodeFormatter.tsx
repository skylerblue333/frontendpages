import FeatureUnavailable from "@/components/FeatureUnavailable";

const CodeFormatter = () => (
  <FeatureUnavailable
    title="Code formatter unavailable"
    description="Code formatting requires a defined language/toolchain matrix, deterministic parser versions, safe handling of untrusted source text, validated output, configuration management, and a tested export or download path. No code has been parsed, transformed, validated, saved, or downloaded."
    capability="Deterministic multi-language code formatting"
    nextStep="Connect version-pinned formatters with sandboxing, input/output validation, configuration, error recovery, and secure export handling before enabling this feature"
  />
);

export default CodeFormatter;
