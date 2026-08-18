import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Coins,
  Users,
  Heart,
  Zap,
  Shield,
  Globe,
  Star,
  Play,
  Trophy,
  Cpu,
  BookOpen,
} from "lucide-react";

const SKYLER_PHOTO =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400";
const TEAM_PHOTOS = [
  {
    name: "Skyler Blue",
    role: "Lead Developer",
    photo: SKYLER_PHOTO,
    bio: "Software engineer turned Web3 builder. Started SkyCoin4444 to create a platform where everyone earns from what they love.",
  },
  {
    name: "Hope AI",
    role: "AI Core System",
    photo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400",
    bio: "The intelligence layer powering every recommendation, moderation decision, and personalized experience on the platform.",
  },
];

const STATS = [
  {
    label: "Active users (unverified)",
    value: "Unavailable",
    icon: Users,
    color: "text-cyan-400",
  },
  {
    label: "SKY444 distributed",
    value: "Unavailable",
    icon: Coins,
    color: "text-yellow-400",
  },
  {
    label: "Charity funding",
    value: "Unavailable",
    icon: Heart,
    color: "text-pink-400",
  },
  {
    label: "Games played",
    value: "Unavailable",
    icon: Trophy,
    color: "text-purple-400",
  },
];

const FEATURES = [
  {
    icon: Play,
    title: "Watch & Earn",
    desc: "Reward and watch-to-earn availability is unavailable in this local build; no earning result is asserted.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Cpu,
    title: "Mine Crypto",
    desc: "Mining capability and outcomes are unavailable in this local build; no mining result is asserted.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Heart,
    title: "Gaming for Charity",
    desc: "Charity integrations and donation verification are unavailable in this local build; no funding result is asserted.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: BookOpen,
    title: "Sky School",
    desc: "Course, instructor, certificate, and blockchain integrations are unavailable in this local build.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Zap,
    title: "Hope AI",
    desc: "AI assistant, agent, voice, and market-data capabilities are unavailable in this local build.",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Globe,
    title: "Creator Economy",
    desc: "Creator, commerce, subscription, tip, and drop services are unavailable in this local build.",
    color: "from-indigo-500 to-blue-600",
  },
];

const TIMELINE = [
  {
    year: "2023",
    event:
      "SkyCoin4444 concept born — one platform for social, crypto, and impact",
  },
  {
    year: "2024 Q1",
    event:
      "Architecture and early-adoption history require verified project records before being presented as factual metrics.",
  },
  {
    year: "2024 Q3",
    event:
      "AI, reward, mining, and adoption milestones require verified release records before being presented as live history.",
  },
  {
    year: "2025 Q1",
    event:
      "Education, charity, and adoption milestones require verified service and funding records.",
  },
  {
    year: "2025 Q4",
    event:
      "Marketplace, AI deployment, and adoption milestones require verified production evidence.",
  },
  {
    year: "Future roadmap",
    event:
      "Future plans require verified delivery, regulatory review, secure integrations, and public evidence before they can be represented as live capabilities.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-20 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                Built by Skyler Blue
              </Badge>
              <h1 className="text-5xl font-black leading-tight mb-6">
                One Platform.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Infinite Opportunity.
                </span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                SkyCoin4444 started with a simple idea: what if time spent
                online could support learning, creativity, and community?
                Explore the platform preview while keeping account, reward,
                mining, blockchain, and financial outcomes dependent on verified
                services.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/dashboard">
                  <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold px-6 py-3 rounded-xl">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/watch-earn">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/5 px-6 py-3 rounded-xl"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch & Earn
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-xl" />
                <img
                  src={SKYLER_PHOTO}
                  alt="Skyler Blue — Founder"
                  className="relative w-full h-full object-cover rounded-3xl border border-white/10"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="font-bold">Skyler Blue</div>
                  <div className="text-sm text-cyan-400">
                    Founder profile · Platform preview
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 rounded-full bg-purple-600" />
                    <span className="text-xs text-gray-400">
                      Online · Building the future
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-[#0d1220]/50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                <div className={`text-3xl font-black ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">Everything in One Place</h2>
          <p className="text-gray-400 text-lg">
            Six ways to earn, learn, and connect — all powered by SKY444
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="bg-[#111827] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-[#0d1220]/50 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">The Story</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500" />
            <div className="space-y-8 pl-12">
              {TIMELINE.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-10 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 border-2 border-[#0a0e1a]" />
                  <div className="bg-[#111827] border border-white/5 rounded-xl p-4">
                    <Badge className="mb-2 bg-cyan-500/10 border-cyan-500/30 text-cyan-400 text-xs">
                      {item.year}
                    </Badge>
                    <p className="text-gray-300">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-12">
          <h2 className="text-4xl font-black mb-4">Ready to Start Earning?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Explore the SKYCOIN4444 platform preview; user and reward metrics
            are unavailable in this local build.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold px-8 py-4 rounded-xl text-lg">
                Create Account <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/mining">
              <Button
                variant="outline"
                className="border-orange-500/40 text-orange-400 hover:bg-orange-500/10 px-8 py-4 rounded-xl text-lg"
              >
                <Cpu className="w-5 h-5 mr-2" />
                Start Mining
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
