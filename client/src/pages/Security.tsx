import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function Security() {
  return (
    <FeatureUnavailable
      title="Security Center is not evidence-complete"
      description="This route previously claimed active encryption, two-factor authentication, audit logging, WAF protection, scoped API keys, SOC 2 readiness, threat counts, uptime, bug-bounty rewards, and vulnerability-reporting operations without verified evidence. It remains unavailable until controls, provider configuration, monitoring, incident response, responsible-disclosure ownership, reward funding, and independent acceptance artifacts are connected and tested."
      capability="Security posture, controls, and vulnerability reporting"
      nextStep="Review the launch readiness status"
    />
  );
}
