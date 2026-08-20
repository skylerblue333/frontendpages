import { useMemo, useState } from "react";
import {
  FileAudio,
  FileCheck2,
  Headphones,
  LockKeyhole,
  Mic2,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  UploadCloud,
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

type AudioCapability = {
  title: string;
  description: string;
  icon: typeof FileAudio;
};

const audioCapabilities: AudioCapability[] = [
  {
    title: "Source and audio validation",
    description:
      "No microphone stream, audio file, format, duration, sample rate, channels, codec, size, checksum, or validation result is connected.",
    icon: FileAudio,
  },
  {
    title: "Recording and processing",
    description:
      "No permission grant, recording state, waveform, playback buffer, editing, normalization, transcription, generated derivative, or processing job exists.",
    icon: Mic2,
  },
  {
    title: "Rights and publishing",
    description:
      "No title, description, ownership proof, license, content review, visibility policy, audience entitlement, publish workflow, or moderation result is verified.",
    icon: FileCheck2,
  },
  {
    title: "Storage and monetization",
    description:
      "No storage object, encryption, delivery URL, retention, deletion, play count, earnings rate, revenue share, payout, or audit record is available.",
    icon: UploadCloud,
  },
];

export default function CreateAudio() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      audioCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="create-audio-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Audio-creation boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="create-audio-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Create audio readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe, accessible audio workflow without
                  pretending that recording, upload, playback, publishing, or
                  earnings are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load audio studio unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Create audio status"
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
                    Truthful audio state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No microphone, recording, file, duration, waveform, title,
                    license, audience, storage object, publish state, or
                    earnings data is loaded or persisted.
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
                  No verified audio-creation service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must handle microphone permission, file
                  validation, rights and moderation, audio processing, secure
                  storage, audience access, publishing, playback, and financial
                  reporting before this route can create or distribute audio.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable audio actions"
              >
                {[
                  "Start recording",
                  "Upload audio",
                  "Preview playback",
                  "Publish audio",
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
                These safeguards must be verified before audio controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Microphone permission, file format, duration, sample rate,
                channels, codec, size, checksum, and validation.
              </p>
              <p>
                Recording, waveform, playback, editing, normalization,
                transcription, derivatives, and processing state.
              </p>
              <p>
                Title, description, ownership, license, content review,
                visibility, entitlement, publishing, and moderation.
              </p>
              <p>
                Storage, encryption, delivery, retention, deletion, play counts,
                rates, revenue share, payouts, and audit.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Audio capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not request microphone access,
              inspect files, record audio, generate playback, publish content,
              or calculate earnings.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search audio capability notes"
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
