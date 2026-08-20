import FeatureUnavailable from "@/components/FeatureUnavailable";

const TorBridge = () => (
  <FeatureUnavailable
    title="Tor bridge information"
    description="Bridge addresses, relay counts, exit-node counts, daily-user estimates, network health, routing, anonymity, and availability are intentionally held at a truthful release boundary until authoritative network sources, current timestamps, safety review, and verified operational controls are connected. Clipboard actions cannot prove that a bridge exists or is reachable."
    capability="External privacy-network information and bridge operations"
    nextStep="Return to the launch hub"
  />
);

export default TorBridge;
