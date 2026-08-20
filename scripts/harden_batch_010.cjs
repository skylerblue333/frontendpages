const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const pagesDir = path.join(root, 'client/src/pages');
const targets = {
  'ExperimentFactory.tsx': ['Experiment factory', 'Experiment populations, conversion results, confidence, recommendations, and deployment outcomes are intentionally held at a truthful release boundary until consented data, experiment assignment, statistical methodology, persistence, and rollout controls are verified.', 'A/B experimentation and rollout evidence'],
  'Phase2to4Dashboard.tsx': ['Phase 2–4 dashboard', 'Phase progress, launch readiness, performance, and delivery metrics are intentionally held at a truthful release boundary until linked work items, owners, deployments, acceptance evidence, and rollback plans are verified.', 'Release phase progress and acceptance evidence'],
  'TrustSystem.tsx': ['Trust and safety', 'Trust scores, fraud signals, audit events, health status, and access decisions are intentionally held at a truthful release boundary until verified identity, policy evaluation, audit persistence, monitoring, and reviewer authorization are connected.', 'Trust, safety, RBAC, fraud, and audit operations'],
};
for (const [file, [title, description, capability]] of Object.entries(targets)) {
  const component = file.replace(/\.tsx$/, '');
  fs.writeFileSync(path.join(pagesDir, file), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst ${component} = () => (\n  <FeatureUnavailable\n    title="${title}"\n    description="${description}"\n    capability="${capability}"\n    nextStep="Return to the launch hub"\n  />\n);\n\nexport default ${component};\n`);
}
console.log(JSON.stringify({ changed: Object.keys(targets) }, null, 2));
