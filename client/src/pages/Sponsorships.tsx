import { useMemo, useState } from "react";
import {
  BarChart3,
  Check,
  FileText,
  Filter,
  Globe2,
  LockKeyhole,
  RefreshCw,
  Search,
  ShieldAlert,
  Users,
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

type MetricState = "Unavailable" | "Preview" | "Needs evidence" | "Test-only";
interface ChannelConcept {
  id: number;
  name: string;
  channel: string;
  state: MetricState;
  detail: string;
}
const channels: ChannelConcept[] = [
  {
    id: 1,
    name: "Community channel concept",
    channel: "Community",
    state: "Unavailable",
    detail:
      "Requires authorized account connection, consent, collection scope, timestamped source data, retention, moderation, and privacy controls.",
  },
  {
    id: 2,
    name: "Creator channel concept",
    channel: "Creator",
    state: "Needs evidence",
    detail:
      "Requires content ownership, audience definitions, platform API provenance, attribution rules, bot filtering, and reporting review.",
  },
  {
    id: 3,
    name: "Marketplace channel concept",
    channel: "Marketplace",
    state: "Preview",
    detail:
      "Requires campaign identity, conversion events, order linkage, financial controls, privacy basis, and dispute handling.",
  },
  {
    id: 4,
    name: "Test analytics fixture",
    channel: "Test-only",
    state: "Test-only",
    detail:
      "A fixture cannot prove reach, impressions, engagement, sentiment, audience identity, conversion, revenue, or business impact.",
  },
];
export default function SocialAnalytics() {
  const [query, setQuery] = useState("");
  const [channel, setChannel] = useState("All");
  const [selected, setSelected] = useState(1);
  const [range, setRange] = useState("Date range not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const channelTypes = [
    "All",
    ...Array.from(new Set(channels.map(item => item.channel))),
  ];
  const filtered = useMemo(
    () =>
      channels.filter(
        item =>
          (channel === "All" || item.channel === channel) &&
          `${item.name} ${item.channel} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [channel, query]
  );
  const selectedChannel =
    channels.find(item => item.id === selected) ?? channels[0];
  const reset = () => {
    setQuery("");
    setChannel("All");
    setSelected(1);
    setRange("Date range not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={FileText}
        eyebrow="Sponsorships · Partnership planning preview"
        title="Explore partnership states without inventing funding or outcomes."
        description="Explore a local sponsorship workspace with sponsor, recipient, campaign, deliverable, disclosure, schedule, funding, payment, privacy, save/reset, and blocked propose, approve, fund, publish, and report actions. No sponsor, recipient, agreement, funding, payment, deliverable, conversion, revenue, or financial outcome is connected."
        badge="Evidence-bounded sponsorship workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save analytics view"}
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
            {showGates ? "Close gates" : "Review analytics gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset view
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Channels",
              value: `${channels.length} local`,
              hint: "No platform source",
              icon: Globe2,
              tone: "cyan",
            },
            {
              label: "Audience",
              value: "Unavailable",
              hint: "No identity source",
              icon: Users,
              tone: "violet",
            },
            {
              label: "Metrics",
              value: "Unavailable",
              hint: "No event source",
              icon: BarChart3,
              tone: "amber",
            },
            {
              label: "Reports",
              value: "Blocked",
              hint: "No provenance",
              icon: FileText,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Sponsorship evidence boundary">
          <strong>
            This is a local sponsorship-design preview, not evidence that a
            platform is connected, an audience exists, a metric was measured,
            sentiment was classified, a conversion occurred, or revenue or
            business impact exists.
          </strong>{" "}
          Channel cards, filters, date range, saved state, illustrative trend
          scaffolding, and disabled collection/reporting actions are browser
          concepts. No account, identity, post, impression, reach, engagement,
          sentiment, conversion, revenue, or recommendation is asserted.
        </ScreenPreviewBanner>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-[1fr_0.8fr]">
              <label className="text-sm font-semibold text-slate-300">
                <span className="flex items-center gap-2">
                  <Search className="size-4 text-slate-500" />
                  Search sponsorship concepts
                </span>
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search community, creator, marketplace..."
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                />
              </label>
              <label className="text-sm font-semibold text-slate-300">
                Agreement and schedule intent
                <select
                  value={range}
                  onChange={event => setRange(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                >
                  <option>Date range not configured</option>
                  <option>Last seven days intent</option>
                  <option>Last thirty days intent</option>
                  <option>Quarter intent</option>
                  <option>Custom range intent</option>
                </select>
              </label>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {channelTypes.map(entry => (
                <Button
                  key={entry}
                  onClick={() => setChannel(entry)}
                  size="sm"
                  variant="outline"
                  className={
                    channel === entry
                      ? "border-cyan-300/40 bg-cyan-300/[0.08] text-cyan-100"
                      : "border-white/10 text-slate-400"
                  }
                >
                  {entry}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Channel concepts
              </p>
              <h2 className="mt-2 text-2xl font-black">
                {filtered.length} local channel
                {filtered.length === 1 ? "" : "s"}
              </h2>
              <div className="mt-6 space-y-3">
                {filtered.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item.id)}
                    className={`w-full rounded-xl border p-4 text-left ${selected === item.id ? "border-cyan-300/40 bg-cyan-300/[0.06]" : "border-white/10"}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {item.detail}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-amber-300/20 text-amber-200"
                      >
                        {item.state}
                      </Badge>
                    </div>
                    <Badge
                      variant="outline"
                      className="mt-4 border-white/10 text-slate-500"
                    >
                      {item.channel}
                    </Badge>
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
                    Selected sponsorship concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    {selectedChannel.name}
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {selectedChannel.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {selectedChannel.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Account", value: "Unavailable" },
                  { label: "Audience", value: "Unverified" },
                  { label: "Content", value: "No feed" },
                  { label: "Metrics", value: "Unavailable" },
                  { label: "Sentiment", value: "No classifier" },
                  { label: "Attribution", value: "Unconfigured" },
                ].map(item => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 p-3"
                  >
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold text-amber-200">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <BarChart3 className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No sponsorship evidence loaded
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Connect authorized platform APIs, consent, collection scope,
                  timestamped events, audience definitions, bot filtering,
                  sentiment methodology, attribution, financial linkage,
                  privacy, retention, and audit before reporting.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Connect channel unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Collect metrics unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Run sentiment unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Export report unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No audience or performance claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A local analytics concept does not prove an account,
                    audience, metric, sentiment, conversion, revenue,
                    recommendation, or business impact.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Sponsorship-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real sponsorship surface must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated platform account, owner, tenant, scopes, consent, collection purpose, data minimization, retention, deletion, and audit",
                "Timestamped post/event provenance, reach/impression/engagement definitions, bot filtering, sampling, deduplication, timezone, currency, and methodology",
                "Audience, identity, sentiment, recommendation, conversion, revenue, campaign, creator, marketplace, education, AI, crypto, and financial claims require separate evidence",
                "Sensitive personal data, inferred attributes, minors, messages, private accounts, location, payment, order, wallet, and identity data require privacy and safety controls",
                "Connect, collect, classify, attribute, export, delete, accessibility, retry, and accountable approval require governed analytics operations",
                "An analytics preview must not be presented as platform truth, audience insight, sentiment result, conversion, revenue, or business impact without evidence",
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
              title: "Sponsorship surface preserved",
              description:
                "Channel concepts, audience, content, metrics, sentiment, attribution, date range, save/reset, and blocked collection/reporting actions remain visible.",
              icon: BarChart3,
              status: "Local measurement",
            },
            {
              title: "No sponsorship theater",
              description:
                "Accounts, audiences, impressions, engagement, sentiment, conversions, revenue, and recommendations are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before funding",
              description:
                "Real analytics requires authorized data provenance, privacy, methodology, attribution, retention, and accountable reporting.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
