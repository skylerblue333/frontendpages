import { useCallback, useEffect, useRef, useState } from "react";
import { AlertTriangle, History, TrendingUp, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type GameState = "waiting" | "running" | "crashed";

const INITIAL_PRACTICE_HISTORY = [2.14, 1.42, 3.08, 1.11, 4.62, 1.76, 2.58, 1.32] as const;

function MultiplierDisplay({ value, state }: { value: number; state: GameState }) {
  const color = state === "crashed" ? "text-red-400" : value >= 2 ? "text-green-400" : "text-yellow-400";
  return <div className={`text-6xl font-black tabular-nums transition-colors duration-200 sm:text-7xl ${color}`}>{value.toFixed(2)}x</div>;
}

function getPracticeCrashPoint() {
  return Number((1.15 + Math.random() * 4.85).toFixed(2));
}

export default function GameCrash() {
  const [gameState, setGameState] = useState<GameState>("waiting");
  const [multiplier, setMultiplier] = useState(1);
  const [practiceCredits, setPracticeCredits] = useState(1000);
  const [betAmount, setBetAmount] = useState("10");
  const [autoCashout, setAutoCashout] = useState("2.00");
  const [hasBet, setHasBet] = useState(false);
  const [cashedOut, setCashedOut] = useState(false);
  const [cashedOutAt, setCashedOutAt] = useState(0);
  const [countdown, setCountdown] = useState(5);
  const [history, setHistory] = useState<number[]>([...INITIAL_PRACTICE_HISTORY]);
  const [message, setMessage] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const crashPointRef = useRef(1);
  const betRef = useRef(0);
  const autoCashoutRef = useRef(2);
  const hasBetRef = useRef(false);
  const cashedOutRef = useRef(false);

  const finishRound = useCallback((crashPoint: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setMultiplier(crashPoint);
    setGameState("crashed");
    setHistory((previous) => [crashPoint, ...previous].slice(0, 12));
    if (!cashedOutRef.current && hasBetRef.current) setMessage(`Practice round ended at ${crashPoint.toFixed(2)}x.`);
    window.setTimeout(() => {
      setGameState("waiting");
      setHasBet(false);
      hasBetRef.current = false;
      setCashedOut(false);
      cashedOutRef.current = false;
      setMultiplier(1);
      setCountdown(5);
      setMessage("");
    }, 1800);
  }, []);

  const startRound = useCallback(() => {
    crashPointRef.current = getPracticeCrashPoint();
    setMultiplier(1);
    setGameState("running");
    setMessage("");
    const startedAt = Date.now();
    intervalRef.current = setInterval(() => {
      const current = Number(Math.exp(((Date.now() - startedAt) / 1000) * 0.15).toFixed(2));
      setMultiplier(current);
      if (hasBetRef.current && !cashedOutRef.current && autoCashoutRef.current > 1 && current >= autoCashoutRef.current) {
        const payout = Number((betRef.current * current).toFixed(2));
        setPracticeCredits((credits) => credits + payout);
        setCashedOut(true);
        cashedOutRef.current = true;
        setCashedOutAt(current);
        setMessage(`Auto cash-out at ${current.toFixed(2)}x: +${payout.toFixed(2)} practice credits.`);
      }
      if (current >= crashPointRef.current) finishRound(crashPointRef.current);
    }, 50);
  }, [finishRound]);

  useEffect(() => {
    if (countdown !== 0 || gameState !== "waiting") return;
    startRound();
  }, [countdown, gameState, startRound]);

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  const handleBet = () => {
    const amount = Number(betAmount);
    if (!Number.isFinite(amount) || amount <= 0) { setMessage("Enter a valid practice-credit amount."); return; }
    if (amount > practiceCredits) { setMessage("Not enough practice credits."); return; }
    if (gameState !== "waiting") { setMessage("Wait for the next practice round."); return; }
    betRef.current = amount;
    hasBetRef.current = true;
    setPracticeCredits((credits) => credits - amount);
    setHasBet(true);
    setMessage(`Practice entry reserved: ${amount} credits.`);
  };

  const handleCashout = () => {
    if (!hasBetRef.current || cashedOutRef.current || gameState !== "running") return;
    const current = multiplier;
    const payout = Number((betRef.current * current).toFixed(2));
    setPracticeCredits((credits) => credits + payout);
    setCashedOut(true);
    cashedOutRef.current = true;
    setCashedOutAt(current);
    setMessage(`Cashed out at ${current.toFixed(2)}x: +${payout.toFixed(2)} practice credits.`);
  };

  const startCountdown = () => {
    if (gameState !== "waiting") return;
    setMessage("");
    setCountdown(5);
    const countdownTimer = window.setInterval(() => {
      setCountdown((current) => {
        if (current <= 1) { window.clearInterval(countdownTimer); return 0; }
        return current - 1;
      });
    }, 1000);
  };

  return <div className="min-h-screen bg-[#07050f] p-4 text-white sm:p-6"><main className="mx-auto max-w-5xl"><header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div><div className="flex items-center gap-3"><TrendingUp className="size-7 text-amber-400" aria-hidden="true" /><h1 className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-3xl font-black text-transparent sm:text-4xl">CRASH PRACTICE</h1></div><p className="mt-1 text-sm text-slate-400">Local multiplier simulation with practice credits only.</p></div><div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"><p className="text-xs text-slate-500">Practice credits</p><p className="font-bold text-yellow-400">{practiceCredits.toFixed(2)}</p></div></header>

    <div className="mb-4 flex gap-1.5 overflow-x-auto pb-2" aria-label="Local practice history"><span className="flex shrink-0 items-center gap-1 text-xs text-slate-500"><History className="size-3" aria-hidden="true" />Practice history</span>{history.map((value, index) => <Badge key={`${value}-${index}`} className={`shrink-0 text-xs font-bold ${value < 1.5 ? "border-red-500/30 bg-red-500/20 text-red-400" : value < 3 ? "border-yellow-500/30 bg-yellow-500/20 text-yellow-400" : "border-green-500/30 bg-green-500/20 text-green-400"}`}>{value.toFixed(2)}x</Badge>)}</div>

    <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]"><section><div className="relative flex min-h-[360px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0e0a1a] p-6"><div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent" aria-hidden="true" />{gameState === "waiting" ? <div className="relative text-center"><p className="mb-2 text-sm text-slate-400">{hasBet ? "Entry reserved" : "Start a practice round"}</p><div className="text-6xl font-black text-white">{countdown}s</div><p className="mt-2 text-xs text-slate-500">No real-money or blockchain activity occurs.</p></div> : <div className="relative text-center"><MultiplierDisplay value={multiplier} state={gameState} />{gameState === "crashed" && <p className="mt-2 text-xl font-bold text-red-400">ROUND ENDED</p>}{cashedOut && <p className="mt-2 font-semibold text-green-400">Cashed out at {cashedOutAt.toFixed(2)}x</p>}</div>}{gameState === "running" && <div className="absolute bottom-8 left-8 text-4xl" aria-hidden="true">🚀</div>}{gameState === "crashed" && <div className="absolute bottom-8 left-8 text-4xl" aria-hidden="true">✦</div>}</div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-[#0e0a1a] p-4"><div className="grid gap-3 sm:grid-cols-2"><label className="text-xs text-slate-400">Practice credits<input value={betAmount} onChange={(event) => setBetAmount(event.target.value)} className="mt-1 h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 text-white outline-none focus-visible:ring-2 focus-visible:ring-amber-400" inputMode="decimal" /></label><label className="text-xs text-slate-400">Auto cash-out multiplier<input value={autoCashout} onChange={(event) => setAutoCashout(event.target.value)} className="mt-1 h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 text-white outline-none focus-visible:ring-2 focus-visible:ring-amber-400" inputMode="decimal" /></label></div><div className="mt-3 flex flex-wrap gap-2">{[10, 25, 50, 100].map((amount) => <Button key={amount} size="sm" variant="outline" className="border-white/10 text-slate-300" onClick={() => setBetAmount(String(amount))}>{amount}</Button>)}<Button className="ml-auto bg-gradient-to-r from-yellow-500 to-orange-500 font-bold text-black hover:from-yellow-400 hover:to-orange-400" onClick={gameState === "running" ? handleCashout : gameState === "waiting" && !hasBet ? handleBet : startCountdown}>{gameState === "running" ? `Cash out ${ (Number(betAmount) * multiplier).toFixed(2) }` : gameState === "waiting" && !hasBet ? "Reserve practice entry" : gameState === "waiting" ? `Start in ${countdown}s` : "Round ended"}</Button></div>{message && <p className="mt-3 text-sm text-amber-300" role="status">{message}</p>}</div></section>

      <aside className="rounded-2xl border border-white/10 bg-[#0e0a1a] p-5"><h2 className="flex items-center gap-2 text-sm font-semibold text-slate-300"><Zap className="size-4 text-amber-400" aria-hidden="true" />Practice rules</h2><ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400"><li>Rounds are local simulations generated in the browser.</li><li>Practice credits have no monetary value and cannot be withdrawn, transferred, or converted.</li><li>There are no real players, odds, payouts, wallet actions, or blockchain transactions.</li><li>A production chance game would require separate reviewed game logic, payment, custody, regulatory, and responsible-play infrastructure.</li></ul><div className="mt-5 flex items-start gap-2 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 text-xs leading-5 text-amber-200"><AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />Do not treat practice results as financial, gambling, or market information.</div></aside></div>
    </main></div>;
}
