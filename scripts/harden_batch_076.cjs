const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/UserDirectory.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst UserDirectory = () => (\n  <FeatureUnavailable\n    title="User directory unavailable"\n    description="A production user directory requires verified identity records, privacy and discoverability rules, authorization, tenant isolation, search controls, moderation, audit history, and safe account administration. No user, profile, search result, permission, or management action is exposed here."\n    capability="User directory, account discovery, and administration"\n    nextStep="Connect governed identity, directory, authorization, privacy, and audit services before enabling user discovery"\n  />\n);\n\nexport default UserDirectory;\n`);
console.log(JSON.stringify({ changed: ['UserDirectory.tsx'] }, null, 2));
