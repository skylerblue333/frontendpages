const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const routes = [
  ['Home', 'home'],
  ['ABTesting', 'a-b-testing'],
  ['ABTestingAdvanced', 'a-b-testing-advanced'],
  ['APIDocumentation', 'a-p-i-documentation'],
  ['APIIntegration', 'a-p-i-integration'],
  ['APIKeys', 'a-p-i-keys'],
  ['APIMonitoring', 'a-p-i-monitoring'],
  ['APIStatus', 'a-p-i-status'],
  ['APITesting', 'a-p-i-testing'],
  ['APIUsage', 'a-p-i-usage'],
  ['APIVersioning', 'a-p-i-versioning'],
  ['About', 'about'],
  ['AchievementBadges', 'achievement-badges'],
  ['Achievements', 'achievements'],
  ['ActivityFeed', 'activity-feed'],
  ['ActivityTracking', 'activity-tracking'],
  ['AddressLookup', 'address-lookup'],
  ['AdvancedAnalytics', 'advanced-analytics'],
  ['AdvancedSearch', 'advanced-search'],
  ['AgeVerification', 'age-verification'],
];
const marker = 'data-ui-polish="batch-180"';
const changed = [];
for (const [component] of routes) {
  const file = path.join(root, 'client/src/pages', `${component}.tsx`);
  let source = fs.readFileSync(file, 'utf8');
  if (source.includes(marker)) continue;
  const match = source.match(/<div(\s+className=)/);
  if (!match) throw new Error(`No root div found in ${component}.tsx`);
  source = source.replace(match[0], `<div ${marker}${match[1]}`);
  fs.writeFileSync(file, source);
  changed.push(component);
}
const cssFile = path.join(root, 'client/src/index.css');
let css = fs.readFileSync(cssFile, 'utf8');
css = css.replaceAll('[data-ui-polish="batch-179"]', '[data-ui-polish]');
fs.writeFileSync(cssFile, css);
console.log(JSON.stringify({ batch: 180, changed, routeCount: routes.length, sharedSelector: '[data-ui-polish]' }));
