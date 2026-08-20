const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const routes = ['FAQPage','Favorites','FeatureRequests','FeatureTour','Feedback','FeedbackDialog','FeedbackForm','FileBrowser','FileConverter','FileDownload','FilePreview','FileUploadDialog','FileUploadForm','FileUploadProgress','FileVersioning','FilterPanel','FinancialReports','FlashLoans','FlightSearch','FollowList'];
const marker = 'data-ui-polish="batch-189"';
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
console.log(JSON.stringify({batch:189,changed,routeCount:routes.length}));
