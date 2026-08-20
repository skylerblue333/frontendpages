const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const pagesDir = path.join(root, 'client/src/pages');
const targets = {
  'MinerDashboard.tsx': ['Mining dashboard', 'Worker status, hash rate, temperature, power, uptime, pool connections, shares, earnings, and USD outcomes are intentionally held at a truthful release boundary until verified miner telemetry, pool provenance, wallet custody, market data, and payout reconciliation are connected.', 'Mining infrastructure and payout telemetry'],
  'SystemStatus.tsx': ['System status', 'Health, uptime, latency, resource, incident, and service availability claims are intentionally held at a truthful release boundary until verified deployment identity, health probes, monitoring retention, alert ownership, and publication controls are connected.', 'Production system health and incident evidence'],
};
for (const [file, [title, description, capability]] of Object.entries(targets)) {
  const component = file.replace(/\.tsx$/, '');
  fs.writeFileSync(path.join(pagesDir, file), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst ${component} = () => (\n  <FeatureUnavailable\n    title="${title}"\n    description="${description}"\n    capability="${capability}"\n    nextStep="Return to the launch hub"\n  />\n);\n\nexport default ${component};\n`);
}
console.log(JSON.stringify({ changed: Object.keys(targets) }, null, 2));
