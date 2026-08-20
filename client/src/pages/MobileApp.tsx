import { useState } from "react";
import {
  Apple,
  Ban,
  CheckCircle2,
  Download,
  LockKeyhole,
  Smartphone,
  ShieldAlert,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Platform = "iOS" | "Android";
type Feature = {
  name: string;
  summary: string;
  web: string;
  mobile: string;
  status: string;
};
const features: Feature[] = [
  {
    name: "Dashboard access",
    summary:
      "Mobile dashboard concept pending an installable package, API contract, session handling, and accessibility review.",
    web: "Web state unavailable",
    mobile: "Mobile state unavailable",
    status: "Availability unavailable",
  },
  {
    name: "Secure notifications",
    summary:
      "Notification concept pending permissions, consent, delivery service, and privacy controls.",
    web: "Web state unavailable",
    mobile: "Mobile state unavailable",
    status: "Availability unavailable",
  },
  {
    name: "Wallet experience",
    summary:
      "High-risk wallet concept pending secure key isolation, signing, network validation, and transaction review.",
    web: "Web state unavailable",
    mobile: "Mobile state unavailable",
    status: "Availability unavailable",
  },
];
export default function MobileApp() {
  const [platform, setPlatform] = useState<Platform>("iOS");
  const [status, setStatus] = useState(
    "Mobile service unavailable. Showing local platform-readiness information only."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No download, store navigation, waitlist, account, notification, reward, or device operation was started.`
    );
  return (
    <div data-ui-polish="batch-195" className="min-h-screen bg-background">
      <PageHeader
        icon={Smartphone}
        title="Mobile app readiness"
        subtitle="Review platform concepts without fabricated downloads, store listings, feature availability, waitlist counts, launch timing, or token rewards."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Mobile service unavailable.</strong> No signed package,
          app-store listing, release channel, device integration, waitlist
          endpoint, notification service, or reward ledger is connected.
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-center gap-3">
              <Smartphone className="h-5 w-5 text-cyan-200" />
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Readiness catalog
                </p>
                <h2 className="mt-1 text-2xl font-semibold">
                  Review mobile concepts
                </h2>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Local fixtures describe product structure only. They do not
              indicate a working app, store approval, platform support,
              production features, device permissions, user counts, launch
              timing, or rewards.
            </p>
            <div className="mt-6 space-y-3">
              {features.map(feature => (
                <div
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"
                  key={feature.name}
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-medium">{feature.name}</p>
                    <Badge variant="outline">Unavailable</Badge>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">
                    {feature.summary}
                  </p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-lg border border-slate-800 p-3">
                      <p className="text-xs text-slate-500">Web</p>
                      <p className="mt-1 text-sm">{feature.web}</p>
                    </div>
                    <div className="rounded-lg border border-slate-800 p-3">
                      <p className="text-xs text-slate-500">Mobile</p>
                      <p className="mt-1 text-sm">{feature.mobile}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Platform notes
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                {platform} readiness
              </h2>
              <div className="mt-5 flex gap-2">
                <Button
                  aria-pressed={platform === "iOS"}
                  onClick={() => setPlatform("iOS")}
                  size="sm"
                  variant={platform === "iOS" ? "default" : "outline"}
                >
                  <Apple className="mr-2 h-4 w-4" /> iOS
                </Button>
                <Button
                  aria-pressed={platform === "Android"}
                  onClick={() => setPlatform("Android")}
                  size="sm"
                  variant={platform === "Android" ? "default" : "outline"}
                >
                  <Smartphone className="mr-2 h-4 w-4" /> Android
                </Button>
              </div>
              <div className="mt-5 grid gap-2">
                {(
                  [
                    ["Package", "Signed package unavailable"],
                    ["Store", "Store listing unavailable"],
                    ["Requirements", "Requirements unavailable"],
                    ["Release", "Release state unavailable"],
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
              <Button
                className="mt-5 w-full"
                onClick={() => blocked("Download mobile app")}
                variant="outline"
              >
                <Download className="mr-2 h-4 w-4" /> Download unavailable
              </Button>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Mobile release requires signed artifacts, store review, secure
                  sessions, privacy disclosures, platform permissions,
                  accessibility testing, and release observability.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldAlert className="h-5 w-5 text-amber-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No waitlist count, launch date, feature claim, device
                  permission, notification, token reward, or production outcome
                  is fabricated.
                </p>
              </div>
            </Card>
          </aside>
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex items-start gap-3">
            <Ban className="mt-0.5 h-5 w-5 text-slate-400" />
            <div>
              <h2 className="font-semibold">Early access</h2>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                A waitlist service is not connected. This local preview does not
                accept or retain contact details.
              </p>
              <Button
                className="mt-4"
                onClick={() => blocked("Join mobile waitlist")}
                variant="outline"
              >
                <CheckCircle2 className="mr-2 h-4 w-4" /> Waitlist unavailable
              </Button>
            </div>
          </div>
          <p
            aria-live="polite"
            className="mt-5 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
          >
            {status}
          </p>
        </Card>
      </div>
    </div>
  );
}
