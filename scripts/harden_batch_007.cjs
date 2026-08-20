const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const pagesDir = path.join(root, 'client/src/pages');
const targets = {
  'DefensibilityMoat.tsx': ['Defensibility and moat', 'Defensibility claims, user counts, interaction volumes, economic lock-in, and moat scores are intentionally held at a truthful release boundary until independently verified product, customer, financial, and security evidence is available.', 'Defensibility analysis and platform moat evidence'],
  'BuildRoadmap.tsx': ['Build roadmap', 'Roadmap status and completion claims are intentionally held at a truthful release boundary until each milestone has an owner, acceptance evidence, rollback plan, and verified deployment state.', 'Production roadmap and milestone acceptance'],
  'ProductionArchitecture.tsx': ['Production architecture', 'Production topology, capacity, resilience, and readiness claims are intentionally held at a truthful release boundary until the deployed environment, dependencies, controls, and rollback evidence are independently verified.', 'Deployed production architecture and capacity evidence'],
  'IITR.tsx': ['IITR workspace', 'IITR analysis and readiness outputs are intentionally held at a truthful release boundary until their source data, methodology, authorization, persistence, and review evidence are available.', 'IITR analysis and evidence review'],
};
for (const [file, [title, description, capability]] of Object.entries(targets)) {
  const component = file.replace(/\.tsx$/, '');
  fs.writeFileSync(path.join(pagesDir, file), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst ${component} = () => (\n  <FeatureUnavailable\n    title="${title}"\n    description="${description}"\n    capability="${capability}"\n    nextStep="Return to the launch hub"\n  />\n);\n\nexport default ${component};\n`);
}
console.log(JSON.stringify({ changed: Object.keys(targets) }, null, 2));
