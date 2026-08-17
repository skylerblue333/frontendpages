import { useMemo, useState } from "react";
import { Gamepad2, Search, ShieldAlert, Trophy, Users, Swords, Spade, TrendingUp, Blocks, Target, Star, Info, LockKeyhole } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";

const GAMES = [
  { id: "chess", name: "Chess", category: "Strategy / Board", description: "Turn-based strategy with rules, match history, and future multiplayer support.", icon: Swords },
  { id: "checkers", name: "Checkers", category: "Strategy / Board", description: "A classic board-game foundation prepared for practice and competitive modes.", icon: Swords },
  { id: "go", name: "Go", category: "Strategy / Board", description: "A deep territory game with extensible board and match-state architecture.", icon: Blocks },
  { id: "backgammon", name: "Backgammon", category: "Strategy / Board", description: "A turn-based board experience with future lobby and match-history slots.", icon: Blocks },
  { id: "blackjack", name: "Blackjack", category: "Card", description: "Card-game interface prepared for practice mode; wagering requires separate reviewed infrastructure.", icon: Spade },
  { id: "holdem", name: "Texas Hold'em", category: "Card", description: "Multiplayer card-game extension point with no live table or payout claims.", icon: Spade },
  { id: "baccarat", name: "Baccarat", category: "Card", description: "Practice-oriented card-game slot; regulated wagering is not enabled.", icon: Spade },
  { id: "caribbean-stud", name: "Caribbean Stud", category: "Card", description: "Card-game extension point with responsible-play and rules sections prepared.", icon: Spade },
  { id: "crash", name: "Crash", category: "Chance / Prediction", description: "Simulation or practice mode only until chance-game and payout infrastructure is reviewed.", icon: TrendingUp },
  { id: "high-low", name: "High-Low", category: "Chance / Prediction", description: "Prediction-game extension point without live odds, rewards, or payouts.", icon: TrendingUp },
  { id: "plinko", name: "Plinko", category: "Chance / Prediction", description: "Chance-game catalog entry with no simulated result presented as financial activity.", icon: Target },
  { id: "mines", name: "Mines", category: "Chance / Prediction", description: "Practice-mode slot pending a verified game engine and responsible-play controls.", icon: Target },
  { id: "roulette", name: "Roulette", category: "Chance / Prediction", description: "Roulette interface slot; wagering and payout systems are not connected.", icon: Target },
  { id: "asteroids", name: "Asteroids", category: "Arcade", description: "Arcade-game slot prepared for score, achievement, and tournament extension points.", icon: Gamepad2 },
  { id: "cyber-runner", name: "Cyber Runner", category: "Arcade", description: "Arcade-game catalog entry with no live leaderboards or rewards claimed.", icon: Gamepad2 },
  { id: "block-puzzle", name: "Block Puzzle", category: "Arcade", description: "Puzzle-game extension point for scores, progress, and practice sessions.", icon: Blocks },
  { id: "grid-fighter", name: "Grid Fighter", category: "Arcade", description: "Arcade combat slot with multiplayer and spectator capabilities reserved for later integration.", icon: Swords },
  { id: "slots", name: "Slots-style game", category: "Additional", description: "Entertainment-game slot; jackpots, prizes, and payouts are not enabled.", icon: Star },
  { id: "cluster-match", name: "Match / Cluster", category: "Additional", description: "Puzzle extension point with no fake rewards or completed results.", icon: Star },
  { id: "tournament-arcade", name: "Tournament Arcade", category: "Additional", description: "Tournament hub extension point for verified scores, rules, and player history.", icon: Trophy },
] as const;

const CATEGORIES = ["All", ...Array.from(new Set(GAMES.map((game) => game.category)))];

export default function Gaming() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filteredGames = useMemo(() => GAMES.filter((game) => {
    const matchesCategory = category === "All" || game.category === category;
    const normalized = `${game.name} ${game.category} ${game.description}`.toLowerCase();
    return matchesCategory && normalized.includes(query.toLowerCase());
  }), [category, query]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border/70 bg-card/60"><div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"><PageHeader icon={Gamepad2} title="Gaming Hub" subtitle="A catalog foundation for strategy, card, chance, arcade, and tournament experiences." badge="Catalog mode" badgeVariant="outline" actions={<Button variant="outline" size="sm" disabled><Users className="mr-2 size-4" /> Live players unavailable</Button>} /></div></div>

      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Gaming status">
          {[
            { label: "Game catalog", value: `${GAMES.length}`, hint: "Extensible entries in this screen", icon: <Gamepad2 className="size-4" /> },
            { label: "Live players", value: "Unavailable", hint: "Realtime service required", icon: <Users className="size-4" /> },
            { label: "Leaderboards", value: "Not configured", hint: "Verified score service required", icon: <Trophy className="size-4" /> },
            { label: "Rewards", value: "Disabled", hint: "No real payout or token success is shown", icon: <LockKeyhole className="size-4" /> },
          ].map((item) => <Card key={item.label} className="border-border/70 bg-card/80"><CardContent className="space-y-3 p-5"><div className="flex items-center justify-between text-muted-foreground"><span className="text-sm">{item.label}</span><span aria-hidden="true">{item.icon}</span></div><p className="text-xl font-semibold">{item.value}</p><p className="text-xs leading-5 text-muted-foreground">{item.hint}</p></CardContent></Card>)}
        </section>

        <Card className="border-border/70 bg-card/80"><CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start"><div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-300" aria-hidden="true"><ShieldAlert className="size-5" /></div><div><h2 className="font-semibold">Gaming safety boundary</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">The catalog does not claim live multiplayer, real rewards, jackpots, blockchain scoring, or completed matches. Chance-based and crypto-enabled games require reviewed game logic, responsible-play controls, wallet/network validation, transaction status, and appropriate regulatory and payment infrastructure.</p></div></CardContent></Card>

        <section className="space-y-4" aria-labelledby="catalog-heading"><div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><h2 id="catalog-heading" className="text-xl font-semibold">Game catalog</h2><p className="mt-1 text-sm text-muted-foreground">Search and filter the future-ready catalog. Launch controls remain disabled until each game has a verified implementation.</p></div><div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row"><label className="relative"><span className="sr-only">Search games</span><Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search games" className="pl-9 sm:w-56" /></label><label><span className="sr-only">Filter by category</span><select value={category} onChange={(event) => setCategory(event.target.value)} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-52">{CATEGORIES.map((item) => <option key={item}>{item}</option>)}</select></label></div></div>
          {filteredGames.length === 0 ? <EmptyState title="No games match this filter" description="Try another search term or category." icon={<Search className="size-5" />} /> : <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filteredGames.map((game) => { const Icon = game.icon; return <Card key={game.id} className="border-border/70 bg-card/80 transition-colors hover:border-primary/50"><CardContent className="flex h-full flex-col p-5"><div className="flex items-start justify-between gap-3"><div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary" aria-hidden="true"><Icon className="size-5" /></div><Badge variant="outline" className="border-amber-500/30 bg-amber-500/10 text-amber-300">Integration required</Badge></div><h3 className="mt-4 font-semibold">{game.name}</h3><p className="mt-1 text-xs font-medium text-muted-foreground">{game.category}</p><p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{game.description}</p><Button className="mt-5 w-full" disabled title="Game integration required"><Gamepad2 className="mr-2 size-4" />Unavailable</Button></CardContent></Card>; })}</div>}
        </section>

        <section className="grid gap-5 lg:grid-cols-3"><Card className="border-border/70 bg-card/80"><CardHeader><CardTitle className="text-base">Prepared extension points</CardTitle></CardHeader><CardContent className="space-y-3 text-sm text-muted-foreground"><div className="flex items-start gap-3"><Trophy className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" /><span>Rules, tutorials, scores, achievements, leaderboards, match history, and tournaments can attach to each game.</span></div><div className="flex items-start gap-3"><Users className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" /><span>Lobbies, invitations, friends, chat, spectators, and realtime player counts remain integration slots.</span></div></CardContent></Card><Card className="border-border/70 bg-card/80"><CardHeader><CardTitle className="text-base">Crypto-game boundary</CardTitle></CardHeader><CardContent className="text-sm leading-6 text-muted-foreground"><p>Wallet connection, supported asset, network, fees, signing, confirmation, and transaction reference must be verified before any crypto-enabled game can operate.</p></CardContent></Card><Card className="border-border/70 bg-card/80"><CardHeader><CardTitle className="text-base">Live tip</CardTitle></CardHeader><CardContent><div className="rounded-xl bg-primary/5 p-4 text-sm leading-6 text-muted-foreground"><Info className="mb-2 size-4 text-primary" aria-hidden="true" />Review rules and available modes before starting a game. Practice mode must never be presented as financial activity.</div></CardContent></Card></section>
      </main>
    </div>
  );
}
