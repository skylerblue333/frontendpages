import FeatureUnavailable from "@/components/FeatureUnavailable";

const TeamManagement = () => (
  <FeatureUnavailable
    title="Team management unavailable"
    description="Team management requires an authenticated organization, member identity, invitation lifecycle, role and permission model, authorization checks, audit logging, offboarding, and durable persistence. No member, role, invitation, access, or saved-state outcome is created here."
    capability="Teams, members, roles, permissions, and invitations"
    nextStep="Connect governed organization and identity services with least-privilege authorization and audit evidence before enabling team changes"
  />
);

export default TeamManagement;
