const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const targets = {
  'client/src/pages/ReputationSystem.tsx': ['Reputation system preview', 'Creator scores, transaction success, trust ratings, earnings, badges, rankings, and score changes require authenticated identity, transaction provenance, moderation, scoring policy, audit, and current source data. This release does not claim a verified reputation result.', 'Reputation, trust, creator earnings, and ranking evidence'],
  'client/src/pages/Phase1Dashboard.tsx': ['Product organization engine preview', 'Ratings, sentiment, churn risk, revenue priority, roadmap recommendations, agent confidence, re-engagement delivery, and completed actions require verified product analytics, user consent, model evaluation, operational integrations, ownership, and audit evidence. This release does not claim live product intelligence or completed business actions.', 'Product analytics, recommendations, and operational outcomes'],
};
for (const [relative, [title, description, capability]] of Object.entries(targets)) {
  const file = path.join(root, relative);
  const component = path.basename(relative, '.tsx');
  fs.writeFileSync(file, `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst ${component} = () => (\n  <FeatureUnavailable\n    title="${title}"\n    description="${description}"\n    capability="${capability}"\n    nextStep="Review the evidence matrix"\n  />\n);\n\nexport default ${component};\n`);
}
console.log(JSON.stringify({ changed: Object.keys(targets) }, null, 2));
