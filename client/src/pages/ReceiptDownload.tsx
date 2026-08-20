import { useMemo, useState } from "react";
import {
  Download,
  FileSearch,
  Info,
  LockKeyhole,
  ReceiptText,
  Search,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Receipt and transaction provenance",
    area: "Evidence",
    description:
      "No order, invoice, payment, customer, merchant, item, tax, total, transaction identifier, source, or receipt record is connected.",
  },
  {
    title: "Authorization and integrity",
    area: "Controls",
    description:
      "No authenticated owner, purchaser role, access decision, signature, checksum, tamper evidence, document version, or audit trail is verified.",
  },
  {
    title: "Privacy and sensitive financial data",
    area: "Privacy",
    description:
      "No personal, address, payment, tax, merchant, or financial-data classification, redaction, retention, or sharing boundary exists.",
  },
  {
    title: "Download, expiry, and recovery",
    area: "Reliability",
    description:
      "No file format, rendering, download token, expiry, revocation, failed-download state, retry, correction, or support recovery path is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No view, generate, download, print, email, share, revoke, regenerate, export, delete, or receipt, order, payment, or personal-data mutation is connected or persisted.",
  },
];
export default function ReceiptDownload() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Receipt Download is unavailable locally. No order, invoice, payment, customer, merchant, total, receipt, file, download, or personal-data record was loaded or changed."
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
      `${action} is unavailable locally. No receipt, order, invoice, payment, download, file, revocation, or personal-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="receipt-download-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <ReceiptText className="size-3.5" aria-hidden="true" />{" "}
                  Receipt-readiness workspace
                </Badge>
                <Badge variant="secondary">No receipt state</Badge>
              </div>
              <h1
                id="receipt-download-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                ReceiptDownload readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review receipt and transaction provenance, authorization,
                document integrity, privacy, sensitive financial data, download,
                expiry, revocation, and persistence boundaries without implying
                that a receipt, order, invoice, payment, total, or downloadable
                file exists.
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
                Receipt Download is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No order, invoice, payment, receipt generator, document store,
                access control, download-token service, privacy policy, expiry
                control, or persistence layer is connected. This workspace
                cannot view, generate, download, print, email, share, revoke,
                regenerate, export, delete, or claim a receipt.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <ReceiptText
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No receipt state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No order, invoice, payment, customer, merchant, item, tax,
                total, transaction ID, source, or receipt record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Download
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No file state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No format, rendering, download token, expiry, revocation, file,
                retry, or delivery result exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No receipt actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No view, generate, download, print, email, share, revoke,
                regenerate, export, delete, or receipt mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Receipt governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads transactions, creates files, opens downloads, exposes
              financial data, or saves receipt records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search ReceiptDownload readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter receipt requirements"
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
                  No receipt requirements match “{query}”.
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
                Production receipts require source-backed orders and payments,
                verified purchaser authorization, immutable transaction and tax
                data, document integrity, privacy and redaction, protected
                storage, expiring and revocable download access, audit history,
                correction workflows, and clear user-facing download
                confirmation. No receipt, order, invoice, payment, file,
                download, revocation, or personal-data record is claimed here.
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
