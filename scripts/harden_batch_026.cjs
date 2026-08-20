const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/ProtocolLayer.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst ProtocolLayer = () => (\n  <FeatureUnavailable\n    title="Developer protocol preview"\n    description="The displayed API paths, SDK packages, webhooks, API keys, payment actions, wallet management, AI intent parsing, marketplace access, and live-stream integrations are planning concepts only. No public provider, deployed endpoint, package, issuer, webhook sender, key, payment, wallet, or execution result is verified in this release."\n    capability="Public API, SDK, webhook, and partner integrations"\n    nextStep="Review the developer protocol evidence boundary"\n  />\n);\n\nexport default ProtocolLayer;\n`);
console.log(JSON.stringify({ changed: ['ProtocolLayer.tsx'] }, null, 2));
