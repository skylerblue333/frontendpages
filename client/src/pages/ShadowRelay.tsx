import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  Check,
  Globe2,
  LockKeyhole,
  Network,
  RefreshCw,
  Server,
  ShieldAlert,
  Wifi,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ScreenFeatureGrid,
  ScreenHero,
  ScreenPreviewBanner,
  ScreenStatGrid,
} from "@/components/ScreenExperience";
const nodes = [
  {
    id: 1,
    name: "Community relay concept",
    region: "Region not observed",
    type: "Unconfigured",
    detail:
      "Requires operator identity, network endpoint, key lifecycle, abuse controls, health probes, and audit.",
  },
  {
    id: 2,
    name: "Privacy relay concept",
    region: "Region not observed",
    type: "Unconfigured",
    detail:
      "Requires threat model, encryption design, metadata analysis, traffic policy, key rotation, and independent review.",
  },
  {
    id: 3,
    name: "Test relay concept",
    region: "Test environment intent",
    type: "Test-only",
    detail:
      "A test concept cannot prove production routing, anonymity, trust, latency, or availability.",
  },
  {
    id: 4,
    name: "Gateway relay concept",
    region: "Region not observed",
    type: "Unconfigured",
    detail:
      "Requires destination policy, egress controls, logging redaction, rate limits, and incident handling.",
  },
];
export default function ShadowRelay() {
  const [chain, setChain] = useState<number[]>([]);
  const [query, setQuery] = useState("");
  const [showGates, setShowGates] = useState(false);
  const filtered = useMemo(
    () =>
      nodes.filter(node =>
        `${node.name} ${node.region} ${node.type} ${node.detail}`
          .toLowerCase()
          .includes(query.toLowerCase())
      ),
    [query]
  );
  const selected = chain
    .map(id => nodes.find(node => node.id === id))
    .filter(Boolean) as typeof nodes;
  const toggle = (id: number) =>
    setChain(current =>
      current.includes(id)
        ? current.filter(item => item !== id)
        : [...current, id]
    );
  const move = (id: number, direction: -1 | 1) =>
    setChain(current => {
      const index = current.indexOf(id);
      const next = index + direction;
      if (index < 0 || next < 0 || next >= current.length) return current;
      const copy = [...current];
      [copy[index], copy[next]] = [copy[next], copy[index]];
      return copy;
    });
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Network}
        eyebrow="Shadow relay · Network design preview"
        title="Design relay paths without claiming traffic is private."
        description="Explore a local relay-chain workspace with node search, hop selection, ordering, reset, and blocked activation. No relay node, endpoint, encryption, traffic route, latency, trust, anonymity, availability, or security outcome is connected."
        badge="Evidence-bounded network workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button disabled className="bg-slate-700 text-slate-400">
            <Wifi className="mr-2 size-4" />
            Activate relay unavailable
          </Button>
          <Button
            onClick={() => setShowGates(value => !value)}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            {showGates ? (
              <X className="mr-2 size-4" />
            ) : (
              <ShieldAlert className="mr-2 size-4" />
            )}
            {showGates ? "Close gates" : "Review relay gates"}
          </Button>
          <Button
            onClick={() => setChain([])}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset chain
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Nodes",
              value: `${nodes.length} local`,
              hint: "No endpoints",
              icon: Server,
              tone: "cyan",
            },
            {
              label: "Hops",
              value: `${chain.length}`,
              hint: "Local order",
              icon: Network,
              tone: "violet",
            },
            {
              label: "Latency",
              value: "Unavailable",
              hint: "No probe source",
              icon: Globe2,
              tone: "amber",
            },
            {
              label: "Privacy",
              value: "Unverified",
              hint: "No threat-model proof",
              icon: LockKeyhole,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Relay evidence boundary">
          <strong>
            This is a local network-design preview, not evidence that traffic is
            routed, encrypted, anonymous, private, available, trusted, or
            protected.
          </strong>{" "}
          Node cards, chain ordering, hop count, reset, and disabled activation
          are browser concepts. No endpoint, operator, network connection,
          encryption, key, packet, latency, trust, anonymity, destination,
          traffic outcome, or security guarantee is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                    Relay node concepts
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    {filtered.length} local node
                    {filtered.length === 1 ? "" : "s"}
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  No live nodes
                </Badge>
              </div>
              <input
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search relay concepts"
                className="mt-6 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
              />
              <div className="mt-5 space-y-3">
                {filtered.map(node => (
                  <button
                    key={node.id}
                    onClick={() => toggle(node.id)}
                    className={`w-full rounded-xl border p-4 text-left ${chain.includes(node.id) ? "border-cyan-300/40 bg-cyan-300/[0.06]" : "border-white/10"}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{node.name}</p>
                        <p className="mt-2 text-xs text-slate-500">
                          {node.region} · {node.type}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-amber-300/20 text-amber-200"
                      >
                        {chain.includes(node.id)
                          ? "In local chain"
                          : "Not verified"}
                      </Badge>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {node.detail}
                    </p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                    Local relay chain
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    {selected.length
                      ? `${selected.length} selected hop${selected.length === 1 ? "" : "s"}`
                      : "No hops selected"}
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  Not connected
                </Badge>
              </div>
              {selected.length ? (
                <div className="mt-6 space-y-3">
                  {selected.map((node, index) => (
                    <div
                      key={node.id}
                      className="flex items-center gap-3 rounded-xl border border-white/10 p-4"
                    >
                      <span className="flex size-8 items-center justify-center rounded-lg bg-cyan-300 text-sm font-black text-slate-950">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <p className="font-semibold">{node.name}</p>
                        <p className="mt-1 text-xs text-slate-500">
                          Endpoint, status, latency, encryption, and operator
                          evidence unavailable.
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <Button
                          onClick={() => move(node.id, -1)}
                          size="icon"
                          variant="outline"
                          className="border-white/10 text-slate-400"
                        >
                          <ArrowUp className="size-4" />
                        </Button>
                        <Button
                          onClick={() => move(node.id, 1)}
                          size="icon"
                          variant="outline"
                          className="border-white/10 text-slate-400"
                        >
                          <ArrowDown className="size-4" />
                        </Button>
                        <Button
                          onClick={() => toggle(node.id)}
                          size="icon"
                          variant="outline"
                          className="border-white/10 text-slate-400"
                        >
                          <X className="size-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-10 text-center">
                  <Network className="mx-auto size-8 text-slate-600" />
                  <p className="mt-3 font-semibold">No relay path defined</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Select local node concepts to design hop order. Selection
                    does not connect a node, route traffic, encrypt data, or
                    create anonymity.
                  </p>
                </div>
              )}
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Hops", value: `${selected.length}` },
                  { label: "Latency", value: "Unavailable" },
                  { label: "Anonymity", value: "Unverified" },
                ].map(item => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 p-4"
                  >
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold text-amber-200">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Connect unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Test latency unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Verify encryption unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Route traffic unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No relay or anonymity claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A local hop list does not prove a node, endpoint,
                    encryption, key, traffic route, latency, trust, anonymity,
                    privacy, or security outcome.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Relay-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real relay system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated node identity, endpoint, operator, region, network, key lifecycle, uptime, capacity, health probe, and incident owner",
                "Encryption design, session keys, routing metadata, traffic analysis, linkability, replay, DNS, egress, destination, and compromise handling",
                "Latency, trust, reputation, anonymity, privacy, censorship, security, user protection, and network-performance claims require independent evidence",
                "Abuse controls, illegal-content handling, rate limits, logging redaction, consent, retention, legal basis, appeals, and accountable review",
                "Connect, disconnect, route, test, verify, rotate, export, accessibility, and approval require governed network operations",
                "A relay preview must not be presented as private, anonymous, encrypted, trusted, available, or secure without evidence",
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-3"
                >
                  <LockKeyhole className="size-4 text-slate-500" />
                  <span className="flex-1 text-sm text-slate-300">{item}</span>
                  <span className="text-xs text-amber-200">Required</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <ScreenFeatureGrid
          features={[
            {
              title: "Relay surface preserved",
              description:
                "Node search, hop selection, chain ordering, hop count, connect, test, verify, route, reset, and gates remain interactive.",
              icon: Network,
              status: "Local design",
            },
            {
              title: "No privacy theater",
              description:
                "Nodes, endpoints, encryption, latency, trust, anonymity, routing, availability, and security outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Threat model before traffic",
              description:
                "Real relay infrastructure requires governed nodes, keys, routing controls, abuse handling, independent review, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
