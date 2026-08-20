import FeatureUnavailable from "@/components/FeatureUnavailable";

const QuantumSafe = () => (
  <FeatureUnavailable
    title="Quantum-safe security"
    description="Quantum-safe security posture and migration status are intentionally held at a truthful release boundary until verified cryptographic inventory, policy evaluation, and security monitoring evidence are available."
    capability="Quantum-safe cryptographic posture"
    nextStep="Return to the launch hub"
  />
);

export default QuantumSafe;
