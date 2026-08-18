import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function TicketDetail() {
  return (
    <FeatureUnavailable
      title="Support ticket details are not active"
      description="This route currently exposes an authenticated shell without verified support tickets or service operations. It remains unavailable until account-scoped ticket persistence, requester and agent identity, message retention, SLA and escalation rules, attachments, privacy controls, authorization, notifications, and resolution evidence are implemented and tested."
      capability="Support ticket detail, messaging, and resolution tracking"
      nextStep="Review the launch readiness status"
    />
  );
}
