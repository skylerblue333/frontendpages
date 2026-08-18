import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function BuildOrder() {
  return (
    <FeatureUnavailable
      title="Production build order is not verified"
      description="The previous roadmap displayed completion and in-progress claims for authentication, chat, AI, realtime systems, simulation, payments, and scaling without independently verifiable implementation and operational evidence. It remains unavailable until those claims are backed by tested contracts, deployment artifacts, monitoring, rollback evidence, and release acceptance."
      capability="Production build-order planning and readiness status"
      nextStep="Review the launch readiness status"
    />
  );
}
