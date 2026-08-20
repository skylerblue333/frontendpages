import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BadgeCheck,
  CalendarClock,
  Download,
  FileCheck2,
  FileSignature,
  Filter,
  KeyRound,
  LockKeyhole,
  Search,
  Settings,
  ShieldAlert,
  Users,
  XCircle,
} from "lucide-react";

type Area = "all" | "document" | "identity" | "evidence" | "governance";
type Requirement = {
  title: string;
  description: string;
  area: Exclude<Area, "all">;
  icon: typeof FileSignature;
};
const REQUIREMENTS: readonly Requirement[] = [
  {
    title: "Document provenance",
    description:
      "Versioned source files, malware checks, content hashes, access policy, and retention need an approved document store.",
    area: "document",
    icon: FileCheck2,
  },
  {
    title: "Signer identity and consent",
    description:
      "Signer verification, authority, consent, signing order, disclosures, and notification need an identity and workflow provider.",
    area: "identity",
    icon: Users,
  },
  {
    title: "Signature evidence",
    description:
      "Cryptographic evidence, certificate, timestamp, IP or device handling, audit history, and verification need a trusted signing service.",
    area: "evidence",
    icon: KeyRound,
  },
  {
    title: "Governance and revocation",
    description:
      "Jurisdiction, legal terms, retention, revocation, dispute handling, accessibility, and human review need accountable governance.",
    area: "governance",
    icon: BadgeCheck,
  },
];

export default function DocumentSigning() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState<Area>("all");
  const [status, setStatus] = useState(
    "Document signing service unavailable locally. No document, signer, consent, signature, certificate, audit, notification, legal, or persistence mutation was started."
  );
  const requirements = useMemo(
    () =>
      REQUIREMENTS.filter(item => {
        const matchesQuery =
          !query ||
          `${item.title} ${item.description}`
            .toLowerCase()
            .includes(query.toLowerCase());
        return matchesQuery && (area === "all" || item.area === area);
      }),
    [query, area]
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No document, signer, consent, signature, certificate, audit, notification, legal, or persistence mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="document-signing-title"
    >
      <div data-ui-polish="batch-179" className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge
            variant="outline"
            className="border-violet-400/30 text-violet-200"
          >
            SIGNATURE READINESS PREVIEW
          </Badge>
          <h1
            id="document-signing-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <FileSignature
              className="h-7 w-7 text-violet-300"
              aria-hidden="true"
            />
            Document signing
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review electronic-signature requirements without inventing
            documents, signers, consent, certificates, timestamps, audit
            evidence, or legal execution outcomes.
          </p>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Document signing service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No document store, identity verifier, consent workflow, signing
                provider, certificate authority, audit ledger, notification
                service, or legal governance contract is connected. This page
                does not represent a signed document or legal execution.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/50 p-5">
            <FileCheck2
              className="mb-3 h-5 w-5 text-sky-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Documents unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No source file, version, hash, upload, access, or retention record
              is loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Users
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Signers unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No person, authority, consent, signing order, or notification is
              verified.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <KeyRound
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Evidence unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No signature, certificate, timestamp, audit event, or verification
              result exists.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <BadgeCheck
              className="mb-3 h-5 w-5 text-emerald-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Execution unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No legal, jurisdictional, revocation, dispute, or completion
              outcome is claimed.
            </p>
          </Card>
        </section>
        <section
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Signature requirement filters"
        >
          <label htmlFor="signing-search" className="sr-only">
            Search signature requirements
          </label>
          <div className="relative min-w-[240px] flex-1">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="signing-search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search signature requirements"
              className="w-full rounded-xl border border-border/40 bg-card/40 py-3 pl-10 pr-3 text-sm outline-none ring-primary/40 focus:ring-2"
            />
          </div>
          {(
            ["all", "document", "identity", "evidence", "governance"] as const
          ).map(value => (
            <Button
              key={value}
              type="button"
              variant={area === value ? "default" : "outline"}
              onClick={() => setArea(value)}
            >
              <Filter className="mr-2 h-4 w-4" aria-hidden="true" />
              {value === "all"
                ? "All"
                : value[0].toUpperCase() + value.slice(1)}
            </Button>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => announceUnavailable("Signing settings")}
          >
            <Settings className="mr-2 h-4 w-4" aria-hidden="true" />
            Settings unavailable
          </Button>
        </section>
        <section aria-labelledby="requirements-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="requirements-title" className="text-xl font-semibold">
                Signature requirements
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Local filters only. Nothing is uploaded, requested, signed,
                verified, revoked, downloaded, or saved.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => announceUnavailable("Signature request")}
            >
              <FileSignature className="mr-2 h-4 w-4" aria-hidden="true" />
              Request signature unavailable
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {requirements.map(item => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-border/40 bg-card/40 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-secondary/60 p-3">
                      <Icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{item.title}</h3>
                        <Badge
                          variant="outline"
                          className="border-muted-foreground/30 text-muted-foreground"
                        >
                          {item.area}
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="mt-4"
                        onClick={() =>
                          announceUnavailable(`${item.title} workflow`)
                        }
                      >
                        Manage unavailable
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
            {requirements.length === 0 && (
              <Card className="border-border/40 bg-card/30 p-8 text-center md:col-span-2">
                <XCircle
                  className="mx-auto mb-3 h-7 w-7 text-muted-foreground"
                  aria-hidden="true"
                />
                <p className="font-semibold">No signature requirements found</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Search is local and does not query documents, signers, or
                  signature records.
                </p>
              </Card>
            )}
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/30 p-5">
            <FileCheck2
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Upload unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No document, version, hash, or access record can be uploaded.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Document upload")}
            >
              Upload unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <FileSignature
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Sign unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No consent, signature, certificate, timestamp, or legal completion
              can occur.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Signing")}
            >
              Sign unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <BadgeCheck
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Verify unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No signature evidence, certificate chain, signer identity, or
              audit record can be verified.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Signature verification")}
            >
              Verify unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <Download
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Download unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No signed file, certificate, audit report, or evidence package can
              be generated.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Signed document download")}
            >
              Download unavailable
            </Button>
          </Card>
        </section>
        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">No signature or legal claim</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production signing system needs server-side key isolation,
                identity verification, consent, jurisdiction-aware terms,
                cryptographic evidence, certificate validation, audit history,
                retention, accessibility, revocation, and human support.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      </div>
    </main>
  );
}
