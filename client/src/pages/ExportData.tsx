import { useMemo, useState } from "react";
import {
  Archive,
  CheckCircle2,
  Download,
  FileOutput,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type ExportBoundary = { title: string; area: string; description: string };
const boundaries: readonly ExportBoundary[] = [
  {
    title: "Data scope and identity",
    area: "Privacy",
    description:
      "No authenticated subject, account scope, data inventory, tenant boundary, or export authorization is loaded.",
  },
  {
    title: "Format and portability",
    area: "Delivery",
    description:
      "No JSON, CSV, archive, media bundle, schema version, checksum, download URL, or portable export file is generated.",
  },
  {
    title: "Job and retention lifecycle",
    area: "Operations",
    description:
      "No export job, queue, progress, expiration, retry, cancellation, notification, or retention state is available.",
  },
  {
    title: "Redaction and security",
    area: "Controls",
    description:
      "No sensitive-field policy, redaction rule, encryption key, access log, consent record, or deletion verification is configured.",
  },
];

export default function ExportData() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Data export is unavailable locally. No export job, file generation, download, or account-data mutation was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No export job, file generation, download, or account-data mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="export-data-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <FileOutput className="size-3.5" aria-hidden="true" />
                  Privacy operations readiness
                </Badge>
                <Badge variant="secondary">No export service</Badge>
              </div>
              <h1
                id="export-data-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Data export readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful scope, portability, job lifecycle, retention,
                redaction, and security contracts without generating a file or
                claiming that account data is ready to download.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Data export service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated export scope, data inventory, archive builder,
                secure download channel, retention worker, or privacy
                fulfillment workflow is connected. This is a planning boundary,
                not a download console.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Data export status"
        >
          <Card>
            <CardContent className="p-5">
              <Archive
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No data inventory</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No account, tenant, data category, subject, scope, or
                authorization state is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Download
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No files generated</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No archive, format, checksum, download URL, progress, or
                completion state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <ShieldCheck
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">Controls required</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No redaction, encryption, retention, access log, consent, or
                deletion verification is configured.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Export readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              account data, export jobs, files, links, or privacy records.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search data export readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search export requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(({ title, area, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{title}</h3>
                    <Badge variant="outline">{area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Manage ${title}`)}
                  >
                    Manage unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No export notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production export workflow needs verified subject
                authorization, complete data inventory, schema and format
                contracts, secure asynchronous jobs, expiring downloads,
                encryption, redaction, audit logging, deletion and retention
                handling, rate limits, and clear failure/retry behavior.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
