const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const pagesDir = path.join(root, 'client/src/pages');
const targets = {
  'CodeQuality.tsx': ['Code quality', 'Code-quality scores, findings, and remediation status are intentionally held at a truthful release boundary until verified repository analysis, persistence, authorization, and monitoring are connected.', 'Repository code-quality analysis and findings'],
  'MetaversePortal.tsx': ['Metaverse portal', 'Metaverse spaces, identity, and connected experiences are intentionally held at a truthful release boundary until verified identity, asset ownership, content moderation, persistence, and monitoring providers are accepted.', 'Immersive metaverse spaces and connected assets'],
  'QuantumComputing.tsx': ['Quantum computing', 'Quantum-computing workloads and results are intentionally held at a truthful release boundary until a verified execution provider, job persistence, result provenance, and cost controls are available.', 'Quantum workload submission and results'],
  'QuantumSafe.tsx': ['Quantum-safe security', 'Quantum-safe security posture and migration status are intentionally held at a truthful release boundary until verified cryptographic inventory, policy evaluation, and security monitoring evidence are available.', 'Quantum-safe cryptographic posture'],
  'PlatformStatus.tsx': ['Platform status', 'Platform status and uptime claims are intentionally held at a truthful release boundary until verified service telemetry, uptime monitors, incident records, and alerting are connected.', 'Production platform status and uptime'],
  'SystemArchitecture.tsx': ['System architecture', 'The production system architecture view is intentionally held at a truthful release boundary until the deployed topology, dependency inventory, configuration, and change evidence are verified against the running environment.', 'Deployed system topology and dependency evidence'],
};
for (const [file, [title, description, capability]] of Object.entries(targets)) {
  const component = file.replace(/\.tsx$/, '');
  fs.writeFileSync(path.join(pagesDir, file), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst ${component} = () => (\n  <FeatureUnavailable\n    title="${title}"\n    description="${description}"\n    capability="${capability}"\n    nextStep="Return to the launch hub"\n  />\n);\n\nexport default ${component};\n`);
}
console.log(JSON.stringify({ changed: Object.keys(targets) }, null, 2));
