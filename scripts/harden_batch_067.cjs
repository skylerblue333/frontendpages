const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/MobileMessages.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst MobileMessages = () => (\n  <FeatureUnavailable\n    title="Mobile messaging unavailable"\n    description="Messaging requires authenticated participants, recipient discovery, durable conversation storage, delivery and read-state tracking, abuse controls, notifications, privacy and retention rules, and reliable sync. No message, recipient, delivery, read, or success outcome is created here."\n    capability="Mobile messaging, conversations, delivery, and notifications"\n    nextStep="Connect governed messaging and notification services with identity, moderation, privacy, and delivery evidence before enabling messages"\n  />\n);\n\nexport default MobileMessages;\n`);
console.log(JSON.stringify({ changed: ['MobileMessages.tsx'] }, null, 2));
