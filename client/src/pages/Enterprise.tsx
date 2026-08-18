import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function Enterprise() {
  return (
    <FeatureUnavailable
      title="Enterprise planning is not evidence of enterprise capability"
      description="This route previously displayed hard-coded valuation, ARR, revenue, pricing commitments, client counts, retention, sales pipeline, moat scores, SLA claims, infrastructure commitments, and module targets. It remains unavailable until commercial terms, customer and revenue evidence, service-level definitions, security and privacy controls, support ownership, capacity testing, deployment options, and contract approval are backed by real records and accountable review."
      capability="Enterprise commercial planning, pricing, and readiness workspace"
      nextStep="Review the launch readiness status"
    />
  );
}
