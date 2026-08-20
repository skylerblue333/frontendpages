import FeatureUnavailable from "@/components/FeatureUnavailable";

const MinerDashboard = () => (
  <FeatureUnavailable
    title="Mining dashboard"
    description="Worker status, hash rate, temperature, power, uptime, pool connections, shares, earnings, and USD outcomes are intentionally held at a truthful release boundary until verified miner telemetry, pool provenance, wallet custody, market data, and payout reconciliation are connected."
    capability="Mining infrastructure and payout telemetry"
    nextStep="Return to the launch hub"
  />
);

export default MinerDashboard;
