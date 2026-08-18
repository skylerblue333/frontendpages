import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AgentDebate() {
  return (
    <FeatureUnavailable
      title="Agent debate is not active"
      description="This route previously presented fabricated agent perspectives, confidence scores, customer demand, financial forecasts, ROI, consensus, and final launch decisions. It remains unavailable until real inputs, model provenance, uncertainty calibration, governance, human approval, and auditable decision records are implemented."
      capability="Multi-agent decision support and recommendation review"
      nextStep="Review the launch readiness status"
    />
  );
}
