import { useState } from "react";
import {
  BookOpen,
  CircleSlash2,
  DollarSign,
  LockKeyhole,
  MessageSquareOff,
  ShieldAlert,
  VideoOff,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Tab = "Find teachers" | "My sessions" | "Teach";
export default function TeachingOpportunities() {
  const [tab, setTab] = useState<Tab>("Find teachers");
  const [status, setStatus] = useState(
    "Teaching service unavailable. Showing local education structure only."
  );
  const blocked = (a: string) =>
    setStatus(
      `${a} is unavailable locally. No teacher, booking, message, onboarding, payment, payout, notification, or account mutation was started.`
    );
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={BookOpen}
        title="Teaching opportunities"
        subtitle="Review local teaching structure without fabricated teachers, ratings, rates, students, bookings, earnings, payments, or education outcomes."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Teaching service unavailable.</strong> No instructor identity,
          scheduling, education content, moderation, payment, tax, payout, or
          notification service is connected.
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex flex-wrap gap-2">
            {(["Find teachers", "My sessions", "Teach"] as Tab[]).map(item => (
              <Button
                aria-pressed={tab === item}
                key={item}
                onClick={() => setTab(item)}
                size="sm"
                variant={tab === item ? "default" : "outline"}
              >
                {item}
              </Button>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-dashed border-slate-700 p-12 text-center">
            {tab === "Teach" ? (
              <DollarSign className="mx-auto h-9 w-9 text-slate-500" />
            ) : tab === "My sessions" ? (
              <VideoOff className="mx-auto h-9 w-9 text-slate-500" />
            ) : (
              <BookOpen className="mx-auto h-9 w-9 text-slate-500" />
            )}
            <h2 className="mt-4 text-xl font-semibold">{tab} unavailable</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-400">
              No verified teachers, ratings, languages, rates, students,
              sessions, messages, earnings, or education outcomes are connected.
            </p>
            <Button
              className="mt-5"
              onClick={() => blocked(`Load ${tab.toLowerCase()}`)}
              variant="outline"
            >
              Load unavailable
            </Button>
          </div>
        </Card>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [ShieldAlert, "No teacher data"],
            [MessageSquareOff, "No booking"],
            [CircleSlash2, "No payment"],
          ].map(([Icon, label]) => (
            <Card
              className="border-slate-800 bg-slate-900/75 p-5"
              key={String(label)}
            >
              <Icon className="h-5 w-5 text-cyan-200" />
              <h2 className="mt-3 font-semibold">{String(label)}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                No teacher, booking, message, onboarding, payment, payout,
                notification, or account operation is available locally.
              </p>
            </Card>
          ))}
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-5">
          <div className="flex gap-3">
            <LockKeyhole className="h-5 w-5 text-cyan-200" />
            <p className="text-sm leading-6 text-slate-400">
              Production teaching marketplaces require verified instructor
              identity, scheduling, curriculum quality, moderation, payment,
              tax, payout, and dispute controls.
            </p>
          </div>
        </Card>
        <p
          aria-live="polite"
          className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400"
        >
          {status}
        </p>
      </div>
    </div>
  );
}
