import FeatureUnavailable from "@/components/FeatureUnavailable";

const TicketAssignment = () => (
  <FeatureUnavailable
    title="Ticket assignment unavailable"
    description="Production ticket routing requires authenticated agent and requester identities, role and skill policy, workload and availability signals, fair assignment rules, SLA controls, notifications, reassignment history, and auditability. No ticket, agent, assignment, availability, priority, SLA, or notification outcome is created here."
    capability="Support-ticket assignment, routing, and workload operations"
    nextStep="Connect governed support storage, identity, role and skill policy, workload signals, routing, notification, and audit services before enabling assignment"
  />
);

export default TicketAssignment;
