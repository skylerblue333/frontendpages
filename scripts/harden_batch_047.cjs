const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/PublishingSchedule.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst PublishingSchedule = () => (\n  <FeatureUnavailable\n    title="Publishing schedule unavailable"\n    description="A production content calendar requires authenticated content ownership, draft and approval state, channel credentials, scheduling and timezone rules, moderation, delivery confirmation, retry handling, analytics, and rollback. No content, audience, publication, or delivery outcome is created here."\n    capability="Content scheduling, multi-channel publishing, and delivery operations"\n    nextStep="Connect governed content and channel services before enabling scheduled publication"\n  />\n);\n\nexport default PublishingSchedule;\n`);
console.log(JSON.stringify({ changed: ['PublishingSchedule.tsx'] }, null, 2));
