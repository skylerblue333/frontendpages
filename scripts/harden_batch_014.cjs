const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const pagesDir = path.join(root, 'client/src/pages');
const targets = {
  'ComprehensiveEcosystemLanding.tsx': ['SKYCOIN4444 ecosystem preview', 'Platform scale, valuation, development cost, mining earnings, projections, backend capacity, wallet custody, market data, and production-readiness claims are intentionally held at a truthful release boundary until independently verified repository, infrastructure, financial, security, and service evidence is connected.', 'Ecosystem capabilities and production evidence'],
  'AdaptiveRoadmap.tsx': ['Adaptive roadmap', 'Roadmap progress, delivery velocity, impact, owners, and release outcomes are intentionally held at a truthful release boundary until verified work items, source changes, deployment records, acceptance evidence, and rollback plans are connected.', 'Roadmap planning and delivery evidence'],
  'LogisticsOptimizer.tsx': ['Logistics optimizer', 'Routes, savings, delivery performance, vehicle utilization, cost reductions, and optimization outcomes are intentionally held at a truthful release boundary until verified logistics data, constraints, provider integrations, execution records, and reconciliation are connected.', 'Logistics planning and optimization evidence'],
};
for (const [file, [title, description, capability]] of Object.entries(targets)) {
  const component = file.replace(/\.tsx$/, '');
  fs.writeFileSync(path.join(pagesDir, file), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst ${component} = () => (\n  <FeatureUnavailable\n    title="${title}"\n    description="${description}"\n    capability="${capability}"\n    nextStep="Return to the launch hub"\n  />\n);\n\nexport default ${component};\n`);
}
console.log(JSON.stringify({ changed: Object.keys(targets) }, null, 2));
