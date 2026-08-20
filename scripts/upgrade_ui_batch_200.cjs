const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const routes = ['ProgressBar','PropertyDetail','PublishingQueue','QRCodeGenerator','QuickActions','QuickStats','QuizBuilder','RadioButtonForm','RatingSystem','ReceiptDownload','ReceiveCrypto','RecentActivity','Recommendations','RecommendationsFeed','Referrals','RefundRequests','ReportDialog','ReportUser','ReportsDashboard','RetentionEngine'];
const marker = 'data-ui-polish="batch-200"';
const changed=[];
for (const component of routes) {
  const file=path.join(root,'client/src/pages',`${component}.tsx`);
  let source=fs.readFileSync(file,'utf8');
  if (source.includes(marker)) continue;
  const match=source.match(/<div(\s+className=)/);
  if (!match) throw new Error(`No root div found in ${component}.tsx`);
  source=source.replace(match[0],`<div ${marker}${match[1]}`);
  fs.writeFileSync(file,source);
  changed.push(component);
}
console.log(JSON.stringify({batch:200,changed,routeCount:routes.length}));
