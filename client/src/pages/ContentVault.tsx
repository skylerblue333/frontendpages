import { useMemo, useState } from "react";
import {
  Archive,
  FileKey2,
  FolderLock,
  HardDrive,
  LockKeyhole,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Trash2,
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

type VaultCapability = {
  title: string;
  description: string;
  icon: typeof Archive;
};

const vaultCapabilities: VaultCapability[] = [
  {
    title: "Asset inventory and metadata",
    description:
      "No asset, owner, media type, size, checksum, version, preview, creation date, or availability state is loaded.",
    icon: Archive,
  },
  {
    title: "Storage and key custody",
    description:
      "No storage provider, encryption key, access token, retention class, backup, region, or recovery mechanism is connected.",
    icon: HardDrive,
  },
  {
    title: "Permission and delivery",
    description:
      "No account scope, entitlement, share link, download authorization, watermark, delivery record, or access log is verified.",
    icon: FileKey2,
  },
  {
    title: "Lifecycle and deletion",
    description:
      "No upload, replace, publish, archive, restore, deletion request, legal hold, expiry, or audit event can be executed or persisted.",
    icon: Trash2,
  },
];

export default function ContentVault() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      vaultCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="content-vault-title"
    >
      <div data-ui-polish="batch-184" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Content custody boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="content-vault-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Content vault readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents secure content storage without pretending
                  that assets, entitlements, views, downloads, or subscription
                  access are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load vault unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Content vault status"
        >
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck
                      className="size-5 text-primary"
                      aria-hidden="true"
                    />
                    Truthful vault state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No asset, owner, entitlement, storage location, encryption
                    key, view count, download, or saved lifecycle state is
                    loaded or persisted.
                  </CardDescription>
                </div>
                <SlidersHorizontal
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified content-vault service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define asset inventory, storage and
                  encryption, authorization, entitlements, delivery, retention,
                  backup, recovery, deletion, and audit evidence before this
                  route can expose or change content.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable vault actions"
              >
                {[
                  "Load assets",
                  "Upload asset",
                  "View asset",
                  "Delete asset",
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
                These safeguards must be verified before vault controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Asset owner, type, size, checksum, version, preview,
                availability, account scope, and entitlement.
              </p>
              <p>
                Storage provider, encryption, key custody, access tokens,
                retention, backup, region, and recovery.
              </p>
              <p>
                Permission checks, share links, download authorization,
                watermarking, delivery, and access logs.
              </p>
              <p>
                Upload, replacement, publishing, archive, restore, deletion,
                expiry, legal hold, and audit.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Vault capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query storage, expose files,
              calculate views, grant access, upload content, or persist a
              lifecycle change.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search vault capability notes"
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
