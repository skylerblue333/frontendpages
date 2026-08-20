import { useMemo, useState } from "react";
import {
  FileSearch,
  Info,
  LockKeyhole,
  QrCode,
  Search,
  ShieldCheck,
  ScanLine,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Payload provenance and ownership",
    area: "Evidence",
    description:
      "No payload, URL, identifier, creator, owner, source, purpose, version, timestamp, or existing QR artifact is connected.",
  },
  {
    title: "Encoding and privacy",
    area: "Safety",
    description:
      "No encoding format, error correction, redaction, personal-data classification, secret handling, or disclosure boundary is verified.",
  },
  {
    title: "Security, expiration, and destination",
    area: "Controls",
    description:
      "No destination validation, phishing protection, credential policy, expiration, revocation, authorization, or redirect review exists.",
  },
  {
    title: "Rendering, scanning, and recovery",
    area: "Quality",
    description:
      "No QR rendering, contrast, size, accessibility alternative, scanner result, invalid-payload state, retry, or recovery path is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No generate, preview, download, copy, share, scan, revoke, rotate, export, or payload, credential, or personal-data mutation is connected or persisted.",
  },
];
export default function QRCodeGenerator() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "QR Code Generator is unavailable locally. No payload, URL, credential, QR artifact, destination, scan, expiration, or personal-data record was loaded or changed."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No QR code, payload, URL, credential, scan, destination, expiration, or personal-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="qr-code-generator-title"
    >
      <div data-ui-polish="batch-200" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <QrCode className="size-3.5" aria-hidden="true" /> QR-code
                  readiness workspace
                </Badge>
                <Badge variant="secondary">No code state</Badge>
              </div>
              <h1
                id="qr-code-generator-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                QRCodeGenerator readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review payload provenance, encoding, privacy, destination
                security, expiration, rendering, scanning, accessibility, and
                persistence boundaries without implying that a QR code, URL,
                credential, destination, or scan result exists.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                QR Code Generator is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No payload source, encoder, secret-handling policy, destination
                validator, expiration control, renderer, scanner, or persistence
                layer is connected. This workspace cannot generate, preview,
                download, copy, share, scan, revoke, rotate, or claim a QR code.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <QrCode className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No code state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No payload, URL, identifier, owner, source, purpose, version,
                timestamp, or QR artifact is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <ScanLine
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No scan state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No renderer, scanner, destination, credential, expiration,
                redirect, or scan result exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No code actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No generate, preview, download, copy, share, scan, revoke,
                rotate, or payload mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>QR-code governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads a payload, creates a QR artifact, opens a destination, scans
              content, or saves credentials.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search QRCodeGenerator readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter QR-code requirements"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(item => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${item.title}`)}
                  >
                    <FileSearch className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No QR-code requirements match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Production QR generation requires verified payload provenance,
                safe encoding and secret handling, destination validation,
                phishing and redirect controls, expiration and revocation,
                accessible rendering and alternative text, scanner validation,
                privacy review, and clear download or sharing confirmation. No
                QR code, payload, URL, credential, destination, scan,
                expiration, or personal-data record is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <ShieldCheck
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
