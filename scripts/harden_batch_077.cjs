const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/UserPermissions.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst UserPermissions = () => (\n  <FeatureUnavailable\n    title="User permissions unavailable"\n    description="Production authorization requires a policy model, server-side enforcement, least privilege, role lifecycle, tenant isolation, audit history, approval workflows, session invalidation, and denial testing. No user, role, permission, grant, revocation, or access decision is changed here."\n    capability="Role, permission, and access-policy administration"\n    nextStep="Connect governed identity, authorization, policy, audit, and administrative approval services before enabling permissions"\n  />\n);\n\nexport default UserPermissions;\n`);
console.log(JSON.stringify({ changed: ['UserPermissions.tsx'] }, null, 2));
