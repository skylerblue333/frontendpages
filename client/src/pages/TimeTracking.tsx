import FeatureUnavailable from "@/components/FeatureUnavailable";

const TimeTracking = () => (
  <FeatureUnavailable
    title="Time tracking unavailable"
    description="A production time-tracking system requires trusted clock and timer behavior, authenticated users, project and task authorization, edit history, timezone handling, privacy controls, approval workflows, and any billing or payroll rules to be independently verified. No timer, work hour, assignment, utilization, invoice, payroll, or synchronization result is created here."
    capability="Work logs, timers, utilization, and billable-time records"
    nextStep="Connect governed identity, project authorization, time persistence, audit history, approval, privacy, and billing systems before enabling time tracking"
  />
);

export default TimeTracking;
