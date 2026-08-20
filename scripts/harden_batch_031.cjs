const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/GeneratedApiExplorer.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst GeneratedApiExplorer = () => (\n  <FeatureUnavailable\n    title="API explorer unavailable"\n    description="The endpoint catalog, 305-endpoint count, generated responses, 200 OK state, latency, random identifiers, social mutations, wallet balances, token staking, AI chat, and recommendations were not backed by a verified provider. No request, mutation, payment, wallet action, or AI result is executed from this preview."\n    capability="Interactive API discovery and request execution"\n    nextStep="Publish an explorer only from a verified OpenAPI/tRPC contract and protected test environment"\n  />\n);\n\nexport default GeneratedApiExplorer;\n`);
console.log(JSON.stringify({ changed: ['GeneratedApiExplorer.tsx'] }, null, 2));
