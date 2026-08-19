import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  Fingerprint,
  Globe2,
  Info,
  KeyRound,
  LockKeyhole,
  ShieldAlert,
  WalletCards,
  XCircle,
} from "lucide-react";

type Tab = "identity" | "credentials" | "privacy";
type Requirement = {
  title: string;
  description: string;
  icon: typeof Fingerprint;
};
const REQUIREMENTS: readonly Requirement[] = [
  {
    title: "DID method and key custody",
    description:
      "A production DID needs a documented method, key generation, rotation, recovery, revocation, and secure custody boundary.",
    icon: Fingerprint,
  },
  {
    title: "Verifiable credentials",
    description:
      "Issuers, schemas, signatures, subject consent, expiration, status, and revocation must be independently verifiable.",
    icon: CheckCircle2,
  },
  {
    title: "Wallet and account linking",
    description:
      "Wallet addresses, proof of control, network, and account relationships require explicit authorization and privacy controls.",
    icon: WalletCards,
  },
  {
    title: "Selective disclosure",
    description:
      "Zero-knowledge or selective-disclosure claims require audited cryptography, verifier policy, and safe failure.",
    icon: LockKeyhole,
  },
];

export default function DecentralizedIdentity() {
  const [tab, setTab] = useState<Tab>("identity");
  const [status, setStatus] = useState(
    "Identity service unavailable locally. No DID, key, credential, wallet, proof, or account mutation was started."
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No DID, key, credential, wallet, proof, verification, or account mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="identity-title"
    >
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge variant="outline" className="border-cyan-400/30 text-cyan-200">
            IDENTITY READINESS PREVIEW
          </Badge>
          <h1
            id="identity-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <Fingerprint className="h-7 w-7 text-cyan-300" aria-hidden="true" />
            Decentralized identity
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review DID, credential, wallet, and selective-disclosure
            requirements without inventing an identifier, verification, key, or
            privacy-proof outcome.
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
                Identity service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No DID method, key custody, credential issuer, wallet provider,
                verifier, cryptographic proof service, or revocation registry is
                connected. No identity or verification state is authoritative.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/50 p-5">
            <Fingerprint
              className="mb-3 h-5 w-5 text-cyan-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">DID unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No identifier, method, key, creation date, or active status is
              shown.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <CheckCircle2
              className="mb-3 h-5 w-5 text-emerald-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Credentials unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No issuer, KYC, phone, email, creator, or revocation claim is
              loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <WalletCards
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Wallets unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No wallet address, network, control proof, or account link is
              displayed.
            </p>
          </Card>
        </section>
        <nav
          className="flex flex-wrap gap-2"
          aria-label="Identity readiness sections"
        >
          {(["identity", "credentials", "privacy"] as const).map(item => (
            <Button
              key={item}
              type="button"
              variant={tab === item ? "default" : "outline"}
              onClick={() => setTab(item)}
            >
              {item === "identity"
                ? "Identity model"
                : item === "credentials"
                  ? "Credentials"
                  : "Privacy proofs"}
            </Button>
          ))}
        </nav>
        {tab === "identity" && (
          <section className="grid gap-4 md:grid-cols-2">
            <Card className="border-border/40 bg-card/40 p-5">
              <div className="flex items-start gap-3">
                <KeyRound
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="font-semibold">
                    Identifier and keys unavailable
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    No DID string, public key, private key, seed phrase, key
                    creation date, rotation state, recovery method, or
                    revocation status is generated or stored.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-4"
                    onClick={() => announceUnavailable("DID creation")}
                  >
                    Create DID unavailable
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="border-border/40 bg-card/40 p-5">
              <div className="flex items-start gap-3">
                <Globe2
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="font-semibold">
                    Share and resolve unavailable
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    No resolver, registry, service endpoint, wallet link, or
                    external identity sharing operation is connected.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-4"
                    onClick={() => announceUnavailable("Identity sharing")}
                  >
                    Share identity unavailable
                  </Button>
                </div>
              </div>
            </Card>
          </section>
        )}
        {tab === "credentials" && (
          <section className="grid gap-4 md:grid-cols-2">
            <Card className="border-border/40 bg-card/40 p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="font-semibold">No credentials loaded</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    There are no synthetic email, phone, KYC, creator,
                    employment, income, or other credential records shown.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-4"
                    onClick={() => announceUnavailable("Credential issuance")}
                  >
                    Add credential unavailable
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="border-border/40 bg-card/40 p-5">
              <div className="flex items-start gap-3">
                <LockKeyhole
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="font-semibold">Verification unavailable</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    No issuer, signature, subject consent, expiry, verifier,
                    status list, or revocation check is performed.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-4"
                    onClick={() =>
                      announceUnavailable("Credential verification")
                    }
                  >
                    Verify credential unavailable
                  </Button>
                </div>
              </div>
            </Card>
          </section>
        )}
        {tab === "privacy" && (
          <section className="space-y-4">
            <Card className="border-border/40 bg-card/40 p-5">
              <div className="flex items-start gap-3">
                <LockKeyhole
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="font-semibold">
                    Selective disclosure unavailable
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    No age, income, location, credit, identity, or other
                    zero-knowledge proof is enabled. Cryptographic privacy
                    claims require audited primitives, verifier policy, consent,
                    and failure handling.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-4"
                    onClick={() => announceUnavailable("Privacy proof")}
                  >
                    Generate proof unavailable
                  </Button>
                </div>
              </div>
            </Card>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Age assurance",
                "Region disclosure",
                "Income range",
                "Credit range",
              ].map(item => (
                <div
                  key={item}
                  className="rounded-xl border border-border/30 bg-card/30 p-4"
                >
                  <p className="font-medium">{item}</p>
                  <Badge
                    variant="outline"
                    className="mt-2 border-muted-foreground/30 text-muted-foreground"
                  >
                    Not configured
                  </Badge>
                  <p className="mt-2 text-xs text-muted-foreground">
                    No claim or verifier is active.
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
        <section>
          <h2 className="mb-4 text-xl font-semibold">
            Identity implementation requirements
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {REQUIREMENTS.map(requirement => {
              const Icon = requirement.icon;
              return (
                <Card
                  key={requirement.title}
                  className="border-border/40 bg-card/30 p-5"
                >
                  <div className="flex items-start gap-3">
                    <Icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{requirement.title}</h3>
                        <Badge
                          variant="outline"
                          className="border-muted-foreground/30 text-muted-foreground"
                        >
                          Unavailable
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {requirement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
        <div className="sr-only" aria-live="polite">
          <XCircle /> No decentralized identity operation is active.
        </div>
      </div>
    </main>
  );
}
