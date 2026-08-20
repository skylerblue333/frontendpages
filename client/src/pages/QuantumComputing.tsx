import FeatureUnavailable from "@/components/FeatureUnavailable";

const QuantumComputing = () => (
  <FeatureUnavailable
    title="Quantum computing"
    description="Quantum-computing workloads and results are intentionally held at a truthful release boundary until a verified execution provider, job persistence, result provenance, and cost controls are available."
    capability="Quantum workload submission and results"
    nextStep="Return to the launch hub"
  />
);

export default QuantumComputing;
