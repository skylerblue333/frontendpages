import { useState } from "react";
import {
  AlertTriangle,
  PanelsTopLeft,
  CheckCircle2,
  Download,
  LockKeyhole,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ReviewState = "All" | "Review" | "Planned" | "Unavailable";
type ExtensionConcept = {
  name: string;
  state: Exclude<ReviewState, "All">;
  summary: string;
  package: string;
  permissions: string;
  wallet: string;
  privacy: string;
  security: string;
  enrollment: string;
};
const concepts: ExtensionConcept[] = [
  {
    name: "Browser overlay concept",
    state: "Review",
    summary:
      "Local interaction concept pending a reviewed extension package, manifest, least-privilege permissions, content handling, and accessible overlay design.",
    package: "Package unavailable",
    permissions: "Permission review unavailable",
    wallet: "Wallet connector unavailable",
    privacy: "Privacy review unavailable",
    security: "Security review unavailable",
    enrollment: "Enrollment unavailable",
  },
  {
    name: "Local page assistant",
    state: "Planned",
    summary:
      "Planned browser-assistance concept; no page monitoring, model, telemetry, or content-processing behavior is enabled.",
    package: "Package unavailable",
    permissions: "Permission review unavailable",
    wallet: "Wallet connector unavailable",
    privacy: "Privacy review unavailable",
    security: "Security review unavailable",
    enrollment: "Enrollment unavailable",
  },
  {
    name: "Wallet-aware extension",
    state: "Unavailable",
    summary:
      "High-risk concept pending wallet authorization, origin binding, signing controls, key isolation, transaction review, and incident response.",
    package: "Package unavailable",
    permissions: "Permission review unavailable",
    wallet: "Wallet connector unavailable",
    privacy: "Privacy review unavailable",
    security: "Security review unavailable",
    enrollment: "Enrollment unavailable",
  },
];
export default function BrowserExtension() {
  const [state, setState] = useState<ReviewState>("All");
  const [selected, setSelected] = useState(concepts[0]);
  const [status, setStatus] = useState(
    "Extension service unavailable. Showing local readiness concepts only."
  );
  const visible = concepts.filter(
    item => state === "All" || item.state === state
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No extension was installed, no browser permission was requested, and no wallet, account, telemetry, email, reward, or enrollment operation was started.`
    );
  return (
    <div data-ui-polish="batch-182" className="min-h-screen bg-background">
      <PageHeader
        icon={PanelsTopLeft}
        title="Browser extension readiness"
        subtitle="Review extension concepts without fabricated store listings, permissions, privacy guarantees, wallet access, security audits, telemetry claims, or beta rewards."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Extension service unavailable.</strong> No reviewed package,
          store listing, manifest, permission policy, wallet connector, privacy
          assessment, security audit, or enrollment endpoint is connected.
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-center gap-3">
              <PanelsTopLeft className="h-5 w-5 text-cyan-200" />
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Readiness catalog
                </p>
                <h2 className="mt-1 text-2xl font-semibold">
                  Review extension concepts
                </h2>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Local fixtures describe review structure only. They do not
              indicate an installable package, browser permissions, page
              monitoring, local AI, encryption, telemetry posture, wallet
              access, audits, or production availability.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(
                ["All", "Review", "Planned", "Unavailable"] as ReviewState[]
              ).map(item => (
                <Button
                  key={item}
                  aria-pressed={state === item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {visible.map(item => (
                <button
                  className={`w-full rounded-xl border p-5 text-left ${selected.name === item.name ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={item.name}
                  onClick={() => setSelected(item)}
                  type="button"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-medium">{item.name}</p>
                    <Badge
                      variant={
                        item.state === "Review" ? "secondary" : "outline"
                      }
                    >
                      {item.state}
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{item.summary}</p>
                </button>
              ))}
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
                Selected concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.name}</h2>
              <div className="mt-5 grid gap-2">
                {(
                  [
                    ["Package", selected.package],
                    ["Permissions", selected.permissions],
                    ["Wallet", selected.wallet],
                    ["Privacy", selected.privacy],
                    ["Security", selected.security],
                    ["Enrollment", selected.enrollment],
                  ] as Array<[string, string]>
                ).map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Install extension")}
                  variant="outline"
                >
                  <Download className="mr-2 h-4 w-4" /> Install unavailable
                </Button>
                <Button
                  onClick={() => blocked("Join beta enrollment")}
                  variant="outline"
                >
                  <CheckCircle2 className="mr-2 h-4 w-4" /> Enrollment
                  unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Browser access requires a reviewed package, least-privilege
                  permissions, explicit consent, origin isolation, secure update
                  delivery, and auditable release controls.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <WalletCards className="h-5 w-5 text-amber-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No wallet connection, signing request, balance, transaction,
                  page monitoring, or credential access is available from this
                  preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <AlertTriangle className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No privacy guarantee, security audit, zero-telemetry claim,
                  encryption claim, token reward, or beta enrollment outcome is
                  fabricated.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
