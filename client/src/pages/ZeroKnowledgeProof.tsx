import FeatureUnavailable from "@/components/FeatureUnavailable";

const ZeroKnowledgeProof = () => (
  <FeatureUnavailable
    title="Zero-knowledge proofs"
    description="Proof generation and verification are intentionally held at a truthful release boundary until verified cryptographic implementations, key handling, verification results, and monitoring evidence are available."
    capability="Zero-knowledge proof generation and verification"
    nextStep="Return to the launch hub"
  />
);

export default ZeroKnowledgeProof;
