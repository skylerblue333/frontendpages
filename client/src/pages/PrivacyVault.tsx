import { useMemo, useState } from "react";
import {
  Archive,
  FileSearch,
  Info,
  KeyRound,
  LockKeyhole,
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
    title: "Vault boundary and data inventory",
    area: "Scope",
    description:
      "No personal-data category, record, source, owner, classification, sensitivity label, residency, or vault boundary is connected.",
  },
  {
    title: "Encryption and key custody",
    area: "Security",
    description:
      "No encryption mode, key-management provider, key rotation, hardware boundary, recovery key, secret, or custody evidence is verified.",
  },
  {
    title: "Identity, access, and audit",
    area: "Controls",
    description:
      "No authenticated identity, role, least-privilege policy, approval, session, access event, export event, or audit history exists.",
  },
  {
    title: "Retention, recovery, and deletion",
    area: "Lifecycle",
    description:
      "No retention schedule, backup, restore test, deletion workflow, legal hold, recovery procedure, or completion evidence is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No unlock, import, store, export, share, rotate, recover, delete, or vault or personal-data mutation is connected or persisted.",
  },
];
export default function PrivacyVault() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Privacy Vault is unavailable locally. No personal data, vault, encryption key, identity, access event, backup, recovery, export, sharing, or deletion record was loaded or changed."
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
      `${action} is unavailable locally. No personal-data, vault, key, identity, access, backup, recovery, sharing, or deletion mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="privacy-vault-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />{" "}
                  Privacy-vault readiness workspace
                </Badge>
                <Badge variant="secondary">No vault state</Badge>
              </div>
              <h1
                id="privacy-vault-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                PrivacyVault readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review vault scope, personal-data inventory, encryption and key
                custody, identity and access, auditability, retention, recovery,
                deletion, and sharing boundaries without implying that a secure
                vault, key, record, backup, or personal-data store exists.
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
                Privacy Vault is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No secure storage boundary, encryption service, key-management
                provider, identity service, access policy, backup system,
                recovery workflow, or persistence layer is connected. This
                workspace cannot unlock, import, store, export, share, rotate,
                recover, delete, or claim secure custody of personal data or
                secrets.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Archive
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No vault data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No personal-data category, record, source, classification,
                sensitivity, residency, or vault state is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <KeyRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No key custody</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No encryption mode, key provider, key rotation, recovery key,
                secret, or custody evidence exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No vault actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No unlock, import, store, export, share, rotate, recover,
                delete, or vault mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Privacy-vault governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads personal data, unlocks storage, handles keys, or saves vault
              records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search PrivacyVault readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter vault requirements"
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
                  No vault requirements match “{query}”.
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
                Production privacy vaults require a documented data boundary,
                threat model, encryption and key custody, authenticated
                least-privilege access, secret-handling controls, rotation,
                backup and restore testing, retention and deletion, audit
                history, incident recovery, and clear disclosure of whether
                custody is user-controlled or platform-controlled. No
                personal-data, vault, key, backup, recovery, export, sharing, or
                deletion record is claimed here.
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
