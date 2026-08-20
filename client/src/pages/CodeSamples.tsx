import FeatureUnavailable from "@/components/FeatureUnavailable";

const CodeSamples = () => (
  <FeatureUnavailable
    title="Code samples unavailable"
    description="Code samples require a governed content catalog, license and attribution metadata, version and language compatibility, security review, provenance, moderation, and tested copy or download behavior. No sample, execution result, dependency safety claim, or compatibility guarantee is presented."
    capability="Curated, versioned, and safely distributable code examples"
    nextStep="Connect an approved content source with provenance, licensing, moderation, security review, versioning, and export controls before enabling this feature"
  />
);

export default CodeSamples;
