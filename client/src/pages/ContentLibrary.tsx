import { useMemo, useState } from "react";
import {
  Download,
  FileBox,
  Eye,
  LockKeyhole,
  ShieldCheck,
  Upload,
  History,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type AssetType = "All" | "Article" | "Media" | "Course";
type AssetState = "All" | "Draft" | "Review" | "Unavailable";

type LibraryAsset = {
  id: string;
  title: string;
  type: Exclude<AssetType, "All">;
  state: Exclude<AssetState, "All">;
  summary: string;
  file: string;
  owner: string;
  access: string;
  version: string;
  storage: string;
  download: string;
};

const assets: LibraryAsset[] = [
  {
    id: "article-asset",
    title: "Editorial article asset",
    type: "Article",
    state: "Review",
    summary:
      "A local article concept for source review, content ownership, and controlled publication.",
    file: "File metadata unavailable",
    owner: "Asset owner unavailable",
    access: "Access policy unavailable",
    version: "Version history unavailable",
    storage: "Storage location unavailable",
    download: "Download state unavailable",
  },
  {
    id: "media-asset",
    title: "Media asset collection",
    type: "Media",
    state: "Draft",
    summary:
      "A draft media concept pending upload validation, scanning, rights review, and delivery controls.",
    file: "File metadata unavailable",
    owner: "Asset owner unavailable",
    access: "Access policy unavailable",
    version: "Version history unavailable",
    storage: "Storage location unavailable",
    download: "Download state unavailable",
  },
  {
    id: "course-asset",
    title: "Course material asset",
    type: "Course",
    state: "Unavailable",
    summary:
      "A local course asset concept pending curriculum ownership, learner access, and retention rules.",
    file: "File metadata unavailable",
    owner: "Asset owner unavailable",
    access: "Access policy unavailable",
    version: "Version history unavailable",
    storage: "Storage location unavailable",
    download: "Download state unavailable",
  },
];

const types: AssetType[] = ["All", "Article", "Media", "Course"];
const states: AssetState[] = ["All", "Review", "Draft", "Unavailable"];

export default function ContentLibrary() {
  const [type, setType] = useState<AssetType>("All");
  const [state, setState] = useState<AssetState>("All");
  const [selectedId, setSelectedId] = useState(assets[0].id);
  const [status, setStatus] = useState(
    "Library service unavailable. Showing local asset concepts only."
  );

  const filtered = useMemo(
    () =>
      assets.filter(
        asset =>
          (type === "All" || asset.type === type) &&
          (state === "All" || asset.state === state)
      ),
    [state, type]
  );
  const selected =
    filtered.find(asset => asset.id === selectedId) ?? filtered[0] ?? assets[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No file, asset, permission, storage, download, content-sync, or notification request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={FileBox}
        title="Content library"
        subtitle="Review local asset concepts without fabricated files, ownership, permissions, versions, storage, downloads, or delivery states."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Library service unavailable.</strong> No content registry,
            storage provider, upload scanner, access-control service, version
            store, or download endpoint is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Library service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset library
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Library preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review asset concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show repository structure only.
                  They do not represent real files, owners, permissions,
                  versions, storage, downloads, or content delivery.
                </p>
              </div>
              <FileBox className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Library asset type filter"
            >
              {types.map(item => (
                <Button
                  aria-pressed={type === item}
                  key={item}
                  onClick={() => setType(item)}
                  size="sm"
                  variant={type === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Library asset state filter"
            >
              {states.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(asset => (
                <button
                  aria-pressed={selected.id === asset.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === asset.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={asset.id}
                  onClick={() => setSelectedId(asset.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{asset.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {asset.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{asset.type}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {asset.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local asset fixtures match these filters.
                </p>
              )}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>

          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected asset
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.type} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["File", selected.file],
                  ["Owner", selected.owner],
                  ["Access", selected.access],
                  ["Version", selected.version],
                  ["Storage", selected.storage],
                  ["Download", selected.download],
                ].map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No file, size, owner, permission, version, storage, scan,
                download, or delivery state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Preview asset")}
                  variant="outline"
                >
                  <Eye className="mr-2 h-4 w-4" /> Preview unavailable
                </Button>
                <Button
                  onClick={() => blocked("Upload asset")}
                  variant="outline"
                >
                  <Upload className="mr-2 h-4 w-4" /> Upload unavailable
                </Button>
                <Button
                  onClick={() => blocked("Download asset")}
                  variant="outline"
                >
                  <Download className="mr-2 h-4 w-4" /> Download unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Content libraries require validated uploads, malware and
                  content scanning, least-privilege access, version integrity,
                  retention policies, and audit trails.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Asset, permission, storage, and download transitions must be
                  auditable and isolated from fabricated delivery results.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <History className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No editor, version conflict, upload, content-sync, or download
                  operation is available from this preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
