const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pagesDir = path.join(root, 'client/src/pages');
const candidates = JSON.parse(fs.readFileSync('/tmp/simple-placeholder-candidates.json', 'utf8'));
const inventory = JSON.parse(fs.readFileSync(path.join(root, 'docs/visual-route-inventory.json'), 'utf8')).routes;

function humanize(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const changed = [];
for (const candidate of candidates) {
  if (candidate.hasDataOrMutation || candidate.hasRichStructure || candidate.lines > 25) continue;
  const filePath = path.join(pagesDir, candidate.file);
  const component = candidate.file.replace(/\.tsx$/, '');
  const route = inventory.find((item) => item.page_file === candidate.file);
  const title = humanize(component);
  const routeLabel = route?.path || `/${component.toLowerCase()}`;
  const source = `import FeatureUnavailable from "@/components/FeatureUnavailable";

const ${component} = () => (
  <FeatureUnavailable
    title="${title}"
    description="${title} is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="${title} on ${routeLabel}"
    nextStep="Return to the launch hub"
  />
);

export default ${component};
`;
  fs.writeFileSync(filePath, source);
  changed.push({ file: candidate.file, route: routeLabel, component });
}
console.log(JSON.stringify({ changed: changed.length, files: changed }, null, 2));
