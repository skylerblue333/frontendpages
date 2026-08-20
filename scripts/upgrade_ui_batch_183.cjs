const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const routes = [
  ['ChainExplorer', 'chain-explorer'],
  ['ChangeLog', 'change-log'],
  ['ChannelCustomization', 'channel-customization'],
  ['ChartAnalysis', 'chart-analysis'],
  ['ChartDashboard', 'chart-dashboard'],
  ['ChatBot', 'chat-bot'],
  ['ChatHistory', 'chat-history'],
  ['CheckboxGroupForm', 'checkbox-group-form'],
  ['Checkout', 'checkout'],
  ['CheckoutFlow', 'checkout-flow'],
  ['ChurnPrediction', 'churn-prediction'],
  ['ClassroomManagement', 'classroom-management'],
  ['ClientLibraries', 'client-libraries'],
  ['ClosingChecklist', 'closing-checklist'],
  ['CodeCompletion', 'code-completion'],
  ['CodeQualityDashboard', 'code-quality-dashboard'],
  ['ColorPickerDialog', 'color-picker-dialog'],
  ['CommentsSection', 'comments-section'],
  ['CompanySimulator', 'company-simulator'],
  ['CompetitiveRadar', 'competitive-radar'],
];
const marker = 'data-ui-polish="batch-183"';
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
console.log(JSON.stringify({ batch: 183, changed, routeCount: routes.length }));
