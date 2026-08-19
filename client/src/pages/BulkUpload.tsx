import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileCheck2,
  FileUp,
  LockKeyhole,
  Search,
  ShieldCheck,
  ScanSearch,
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

type UploadCapability = {
  title: string;
  description: string;
  icon: typeof FileUp;
};

const uploadCapabilities: UploadCapability[] = [
  {
    title: "File intake",
    description:
      "Accepted formats, size limits, encoding, duplicate handling, and storage boundaries are not configured.",
    icon: FileUp,
  },
  {
    title: "Validation and parsing",
    description:
      "Schema validation, row-level errors, normalization, and deterministic preview require a verified import service.",
    icon: FileCheck2,
  },
  {
    title: "Safety scanning",
    description:
      "Malware scanning, content inspection, sensitive-data redaction, and retention controls are not connected.",
    icon: ScanSearch,
  },
  {
    title: "Import integrity",
    description:
      "Authorization, idempotency, transactional writes, rollback, audit events, and per-row results are not verified.",
    icon: CheckCircle2,
  },
];

export default function BulkUpload() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      uploadCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="bulk-upload-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Ingestion boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="bulk-upload-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Bulk upload readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route describes a safe file-import workflow without
                  pretending that a file was accepted, scanned, parsed, stored,
                  or imported.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Choose file unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Bulk upload status"
        >
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <FileUp
                      className="size-5 text-primary"
                      aria-hidden="true"
                    />
                    Truthful upload state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No file is selected, uploaded, scanned, parsed, or reported
                    as imported.
                  </CardDescription>
                </div>
                <ShieldCheck
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified import service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define file limits, safe upload handling,
                  schema validation, preview, row-level failures, authorization,
                  transactional writes, rollback, retention, and audit evidence
                  before an import can be accepted.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable upload actions"
              >
                {[
                  "Choose file",
                  "Validate file",
                  "Preview rows",
                  "Import data",
                ].map(label => (
                  <Button
                    key={label}
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled
                    aria-disabled="true"
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Release requirements</CardTitle>
              <CardDescription>
                These safeguards must be verified before upload controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Allowlisted formats, bounded size/count limits, encoding rules,
                and safe temporary storage.
              </p>
              <p>
                Malware scanning, content inspection, sensitive-data redaction,
                and retention policy.
              </p>
              <p>
                Schema validation, deterministic preview, row-level errors,
                idempotency, and retries.
              </p>
              <p>
                Authorization, transactional writes, rollback, per-row outcomes,
                and redacted audit logging.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Upload capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not select files, upload content, or
              mutate records.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search upload capability notes"
                placeholder="Search capability notes"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            {visibleCapabilities.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {visibleCapabilities.map(
                  ({ title, description, icon: Icon }) => (
                    <div
                      key={title}
                      className="rounded-xl border border-border/70 p-4"
                    >
                      <div className="flex items-center gap-2 font-medium">
                        <Icon
                          className="size-4 text-primary"
                          aria-hidden="true"
                        />
                        {title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div
                className="rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground"
                role="status"
              >
                No capability notes match “{searchQuery}”.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
