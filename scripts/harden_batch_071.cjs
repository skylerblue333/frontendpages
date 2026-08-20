const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/ConnectionRequests.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst ConnectionRequests = () => (\n  <FeatureUnavailable\n    title="Connection requests unavailable"\n    description="Connection requests require verified identities, consent, relationship storage, privacy controls, abuse prevention, notification delivery, and auditable accept or decline actions. No person, request, approval, relationship, or notification is created here."\n    capability="Social connection requests and relationship management"\n    nextStep="Connect governed identity, relationship, notification, privacy, and moderation services before enabling requests"\n  />\n);\n\nexport default ConnectionRequests;\n`);
console.log(JSON.stringify({ changed: ['ConnectionRequests.tsx'] }, null, 2));
