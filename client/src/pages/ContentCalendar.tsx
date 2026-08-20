import FeatureUnavailable from "@/components/FeatureUnavailable";

const ContentCalendar = () => (
  <FeatureUnavailable
    title="Content calendar unavailable"
    description="Content planning requires authenticated workspaces, durable scheduling, timezone and locale handling, approvals, version history, publishing integrations, failure recovery, access controls, and audit logs. No content item, publication, campaign, audience, engagement, delivery, or performance result is shown or asserted."
    capability="Governed content planning and multi-channel publication scheduling"
    nextStep="Connect approved content, approval, scheduling, publishing, notification, and analytics services with ownership and rollback controls before enabling this feature"
  />
);

export default ContentCalendar;
