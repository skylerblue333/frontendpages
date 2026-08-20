const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/NLPTools.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst NLPTools = () => (\n  <FeatureUnavailable\n    title="Natural-language tools unavailable"\n    description="Natural-language processing requires an approved model provider, prompt and data handling policy, authentication, rate limits, cost controls, safety filters, retention rules, evaluation, and auditable error handling. No text is submitted, analyzed, classified, generated, stored, or scored here."\n    capability="Natural-language processing, analysis, and generation"\n    nextStep="Connect a governed AI provider and safety, privacy, usage, and observability controls before enabling NLP workflows"\n  />\n);\n\nexport default NLPTools;\n`);
console.log(JSON.stringify({ changed: ['NLPTools.tsx'] }, null, 2));
