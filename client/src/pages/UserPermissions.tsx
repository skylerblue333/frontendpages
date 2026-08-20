import FeatureUnavailable from "@/components/FeatureUnavailable";

const UserPermissions = () => (
  <FeatureUnavailable
    title="User permissions unavailable"
    description="Production authorization requires a policy model, server-side enforcement, least privilege, role lifecycle, tenant isolation, audit history, approval workflows, session invalidation, and denial testing. No user, role, permission, grant, revocation, or access decision is changed here."
    capability="Role, permission, and access-policy administration"
    nextStep="Connect governed identity, authorization, policy, audit, and administrative approval services before enabling permissions"
  />
);

export default UserPermissions;
