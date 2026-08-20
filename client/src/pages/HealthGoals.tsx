import HealthDashboard from "@/pages/HealthDashboard";

/**
 * Health goals intentionally share the validated health-data boundary until
 * consented goal, metric, care-plan, and clinical-safety contracts exist.
 * No health-data service is connected; this is not a medical dashboard.
 */
export default function HealthGoals() {
  return <HealthDashboard />;
}
