import { useMemo, useState } from "react";
import {
  Crop,
  FileImage,
  ImageUp,
  LockKeyhole,
  Search,
  ShieldCheck,
  UserRoundCheck,
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

type PhotoCapability = {
  title: string;
  description: string;
  icon: typeof FileImage;
};

const photoCapabilities: PhotoCapability[] = [
  {
    title: "Image selection and validation",
    description:
      "No image file, profile scope, format, dimensions, size, checksum, metadata, orientation, or validation result is loaded.",
    icon: FileImage,
  },
  {
    title: "Crop and transformation",
    description:
      "No crop rectangle, aspect ratio, focal point, rotation, resize, preview, generated derivative, or client/server transformation is configured.",
    icon: Crop,
  },
  {
    title: "Moderation and permissions",
    description:
      "No content-safety review, ownership proof, account authorization, visibility setting, consent, or reporting path is verified.",
    icon: UserRoundCheck,
  },
  {
    title: "Storage and lifecycle",
    description:
      "No upload, encryption, storage location, cache invalidation, replacement, deletion, retention, audit event, or saved profile image is available.",
    icon: ImageUp,
  },
];

export default function CoverPhoto() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      photoCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="cover-photo-title"
    >
      <div data-ui-polish="batch-184" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Profile-media boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="cover-photo-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Cover photo readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe, accessible profile-media workflow
                  without pretending that an image can be uploaded, transformed,
                  moderated, or saved.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load profile media unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Cover photo status"
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
                    Truthful photo state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No image, profile owner, crop, preview, moderation result,
                    storage object, or saved cover photo is loaded or persisted.
                  </CardDescription>
                </div>
                <FileImage
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified profile-media service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must validate the image, define crop and
                  transformation behavior, enforce ownership and moderation
                  rules, protect storage, and support replacement and deletion
                  before this route can change a cover photo.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable photo actions"
              >
                {[
                  "Load current photo",
                  "Choose image",
                  "Preview crop",
                  "Save cover photo",
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
                These safeguards must be verified before profile-media controls
                are enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                File type, dimensions, size, checksum, metadata, orientation,
                profile scope, and validation.
              </p>
              <p>
                Crop, aspect ratio, focal point, rotation, resize, preview,
                derivatives, and transformation limits.
              </p>
              <p>
                Ownership, authorization, visibility, consent, content safety,
                reporting, and moderation.
              </p>
              <p>
                Upload, encryption, storage, cache invalidation, replacement,
                deletion, retention, and audit.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Profile-media capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not inspect files, open a picker,
              generate a crop, upload an image, moderate content, or persist a
              profile change.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search profile-media capability notes"
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
