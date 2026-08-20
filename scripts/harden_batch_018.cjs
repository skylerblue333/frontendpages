const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const pagesDir = path.join(root, 'client/src/pages');
const targets = {
  'Onboarding.tsx': ['Platform onboarding', 'Airdrops, token rewards, live AI integrations, certificates, leaderboards, governance, staking, analytics, commerce, user counts, command counts, and completion readiness are intentionally held at a truthful release boundary until verified account, provider, ledger, education, governance, and service evidence are connected.', 'Account onboarding and capability discovery'],
  'DataLake.tsx': ['Data lake', 'Ingestion rates, stored volumes, pipeline throughput, latency, catalog rows, and infrastructure health are intentionally held at a truthful release boundary until verified deployment identity, telemetry, storage, pipeline, retention, access, and monitoring evidence are connected.', 'Data platform and infrastructure telemetry'],
};
for (const [file, [title, description, capability]] of Object.entries(targets)) {
  const component = file.replace(/\.tsx$/, '');
  fs.writeFileSync(path.join(pagesDir, file), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst ${component} = () => (\n  <FeatureUnavailable\n    title="${title}"\n    description="${description}"\n    capability="${capability}"\n    nextStep="Return to the launch hub"\n  />\n);\n\nexport default ${component};\n`);
}
console.log(JSON.stringify({ changed: Object.keys(targets) }, null, 2));
