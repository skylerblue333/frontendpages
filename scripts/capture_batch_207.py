from __future__ import annotations
import json, subprocess, sys, time
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
ROUTE='/sponsorships'
BASE=(sys.argv[1] if len(sys.argv)>1 else 'http://localhost:5173').rstrip('/')
OUT=ROOT/'docs/visual-review/batch-207'
for mode,width,height in (('desktop',1440,1000),('mobile',390,844)):
 folder=OUT/mode; folder.mkdir(parents=True,exist_ok=True)
 target=folder/f'001-sponsorships.png'; started=time.time()
 cmd=['chromium','--headless','--no-sandbox','--disable-gpu','--hide-scrollbars',f'--window-size={width},{height}','--run-all-compositor-stages-before-draw','--virtual-time-budget=5000',f'--screenshot={target}',BASE+ROUTE]
 try:
  p=subprocess.run(cmd,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE,text=True,timeout=30)
  row={'index':1,'path':ROUTE,'mode':mode,'screenshot':str(target),'exit_code':p.returncode,'seconds':round(time.time()-started,2),'error':p.stderr[-500:] if p.returncode else ''}
 except subprocess.TimeoutExpired:
  row={'index':1,'path':ROUTE,'mode':mode,'screenshot':str(target),'exit_code':124,'seconds':round(time.time()-started,2),'error':'timeout'}
 (OUT/f'screenshot-results-{mode}.jsonl').write_text(json.dumps(row)+'\n')
 print(json.dumps(row))
print(json.dumps({'batch':207,'routes':1,'modes':['desktop','mobile']}))
