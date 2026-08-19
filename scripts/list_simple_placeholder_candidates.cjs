const fs = require('fs');
const path = require('path');

const pagesDir = path.resolve(__dirname, '../client/src/pages');
const candidates = [];
for (const file of fs.readdirSync(pagesDir).filter((name) => name.endsWith('.tsx'))) {
  const full = path.join(pagesDir, file);
  const source = fs.readFileSync(full, 'utf8');
  if (!/(coming soon|not yet available|under construction)/i.test(source)) continue;
  const lines = source.split(/\r?\n/).length;
  const imports = [...source.matchAll(/^import\s+.*$/gm)].map((m) => m[0]);
  const hasDataOrMutation = /(useQuery|useMutation|trpc\.|fetch\(|axios|graphql|onSubmit|useState|useEffect)/.test(source);
  const hasRichStructure = /(grid|table|Tabs|Chart|Dialog|form|Form|Progress|Badge|CardHeader|CardContent)/.test(source);
  candidates.push({ file, lines, imports: imports.length, hasDataOrMutation, hasRichStructure });
}
candidates.sort((a, b) => a.lines - b.lines || a.file.localeCompare(b.file));
console.log(JSON.stringify(candidates, null, 2));
