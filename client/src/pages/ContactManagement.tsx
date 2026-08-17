import { useMemo, useState } from "react";
import {
  ContactRound,
  Edit3,
  LockKeyhole,
  Mail,
  Plus,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/PageHeader";

type ContactCategory = "All" | "Professional" | "Community" | "Education";
type ContactState = "All" | "Review" | "Planned" | "Unavailable";

type ContactConcept = {
  id: string;
  name: string;
  category: Exclude<ContactCategory, "All">;
  state: Exclude<ContactState, "All">;
  summary: string;
  identity: string;
  consent: string;
  channel: string;
  lastContact: string;
  owner: string;
};

const contacts: ContactConcept[] = [
  {
    id: "professional-contact",
    name: "Professional contact concept",
    category: "Professional",
    state: "Review",
    summary:
      "A local contact structure for professional collaboration with purpose limitation and consent controls.",
    identity: "Contact identity unavailable",
    consent: "Consent record unavailable",
    channel: "Communication channel unavailable",
    lastContact: "Contact history unavailable",
    owner: "Record owner unavailable",
  },
  {
    id: "community-contact",
    name: "Community contact concept",
    category: "Community",
    state: "Planned",
    summary:
      "A planned contact structure for ecosystem relationships without exposing a fabricated social graph.",
    identity: "Contact identity unavailable",
    consent: "Consent record unavailable",
    channel: "Communication channel unavailable",
    lastContact: "Contact history unavailable",
    owner: "Record owner unavailable",
  },
  {
    id: "education-contact",
    name: "Education contact concept",
    category: "Education",
    state: "Unavailable",
    summary:
      "A local contact concept for learning support pending safeguarding, access, and retention controls.",
    identity: "Contact identity unavailable",
    consent: "Consent record unavailable",
    channel: "Communication channel unavailable",
    lastContact: "Contact history unavailable",
    owner: "Record owner unavailable",
  },
];

const categories: ContactCategory[] = [
  "All",
  "Professional",
  "Community",
  "Education",
];
const states: ContactState[] = ["All", "Review", "Planned", "Unavailable"];

export default function ContactManagement() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ContactCategory>("All");
  const [state, setState] = useState<ContactState>("All");
  const [selectedId, setSelectedId] = useState(contacts[0].id);
  const [status, setStatus] = useState(
    "Contact service unavailable. Showing local contact concepts only."
  );

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return contacts.filter(
      contact =>
        (category === "All" || contact.category === category) &&
        (state === "All" || contact.state === state) &&
        (!normalizedQuery ||
          `${contact.name} ${contact.summary} ${contact.category}`
            .toLowerCase()
            .includes(normalizedQuery))
    );
  }, [category, query, state]);
  const selected =
    filtered.find(contact => contact.id === selectedId) ??
    filtered[0] ??
    contacts[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No personal data, identity, consent, communication, notification, or contact-record request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={ContactRound}
        title="Contact management"
        subtitle="Review local contact concepts without fabricated personal data, identities, consent, communication history, or notifications."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Contact service unavailable.</strong> No identity directory,
            consent registry, communication channel, notification service, or
            privacy-aware contact store is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Contact service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset contacts
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Contact preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review contact concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show workflow structure only. They
                  do not represent real people, personal data, relationship
                  history, or message delivery.
                </p>
              </div>
              <ContactRound className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <label className="flex min-w-60 flex-1 items-center gap-2 rounded-md border border-slate-800 bg-slate-950/60 px-3">
                <Search aria-hidden="true" className="h-4 w-4 text-slate-500" />
                <span className="sr-only">Search contacts</span>
                <Input
                  aria-label="Search contacts"
                  className="border-0 bg-transparent px-0 focus-visible:ring-0"
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search contact concepts"
                  value={query}
                />
              </label>
              <Button
                onClick={() => blocked("Configure contacts")}
                variant="outline"
              >
                Configure unavailable
              </Button>
            </div>
            <div
              className="mt-5 flex flex-wrap gap-2"
              role="group"
              aria-label="Contact category filter"
            >
              {categories.map(item => (
                <Button
                  aria-pressed={category === item}
                  key={item}
                  onClick={() => setCategory(item)}
                  size="sm"
                  variant={category === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Contact state filter"
            >
              {states.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(contact => (
                <button
                  aria-pressed={selected.id === contact.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === contact.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={contact.id}
                  onClick={() => setSelectedId(contact.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{contact.name}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {contact.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">
                    {contact.category}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {contact.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local contact fixtures match this search and filter
                  combination.
                </p>
              )}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>

          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected contact
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.name}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.category} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Identity", selected.identity],
                  ["Consent", selected.consent],
                  ["Channel", selected.channel],
                  ["Last contact", selected.lastContact],
                  ["Owner", selected.owner],
                ].map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No identity, email, phone number, consent, communication
                history, notification, or contact record is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Edit contact")}
                  variant="outline"
                >
                  <Edit3 className="mr-2 h-4 w-4" /> Edit unavailable
                </Button>
                <Button
                  onClick={() => blocked("Message contact")}
                  variant="outline"
                >
                  <Mail className="mr-2 h-4 w-4" /> Message unavailable
                </Button>
                <Button
                  onClick={() => blocked("Create contact")}
                  variant="outline"
                >
                  <Plus className="mr-2 h-4 w-4" /> Create unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Contact management requires verified identity, purpose
                  limitation, consent, privacy controls, retention rules, and
                  authorized access.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Personal data changes must be auditable, minimization-aware,
                  and isolated from fabricated contact records or message
                  history.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
