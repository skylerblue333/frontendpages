import { useMemo, useState } from "react";
import {
  Apple,
  FileWarning,
  HeartPulse,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  ShoppingBasket,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Food and nutrition source provenance",
    area: "Evidence",
    description:
      "No recipe, ingredient, serving, nutrient, allergen, source, timestamp, region, license, or catalog record is connected.",
  },
  {
    title: "Dietary preferences and safety",
    area: "Safety",
    description:
      "No user preference, allergy, intolerance, medical restriction, cultural requirement, consent, substitution rule, or safety review is verified.",
  },
  {
    title: "Plan methodology and recommendations",
    area: "Planning",
    description:
      "No calorie or nutrient target, portion method, schedule, budget, optimization rule, recommendation rationale, or dietitian review is configured.",
  },
  {
    title: "Privacy and health-data governance",
    area: "Privacy",
    description:
      "No sensitive-health boundary, data minimization, retention, access role, redaction, deletion, export, or consent withdrawal policy exists.",
  },
  {
    title: "Shopping, tracking, and outcome limits",
    area: "Operations",
    description:
      "No shopping list, inventory, price, order, adherence, symptom, weight, outcome, alert, correction, or audit evidence is available.",
  },
];
export default function MealPlans() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "MealPlans is unavailable locally. No meal, ingredient, nutrient, allergen, preference, recommendation, shopping list, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No meal, ingredient, nutrient, allergen, preference, recommendation, shopping list, health record, or nutrition-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="meal-plans-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Apple className="size-3.5" aria-hidden="true" />{" "}
                  Nutrition-planning readiness
                </Badge>
                <Badge variant="secondary">No nutrition service</Badge>
              </div>
              <h1
                id="meal-plans-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MealPlans readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review food and nutrition provenance, allergens, preferences,
                plan methodology, privacy, shopping boundaries, and health-data
                limits without implying that meals, nutrition totals,
                recommendations, or outcomes exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Nutrition service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No recipe catalog, nutrition source, allergen database,
                preference store, planning engine, health-data boundary,
                shopping integration, or persistence layer is connected. This is
                a readiness workspace, not a medical or dietary plan.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <ShoppingBasket
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No food data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No recipe, ingredient, serving, nutrient, allergen, source,
                preference, or catalog state is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <HeartPulse
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No health recommendation</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No target, portion, diet, substitution, adherence, symptom,
                weight, or health outcome is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No planning actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No plan, meal, grocery list, order, recommendation, share,
                export, or nutrition-data mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Nutrition-planning governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads food data, infers allergies, calculates nutrition,
              recommends a diet, creates a shopping list, orders ingredients, or
              saves health data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search MealPlans readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter nutrition-planning requirements"
                className="pl-9"
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
                    <FileWarning className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No nutrition-planning notes match “{query}”.
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
                A production meal-planning system needs licensed and current
                food data, allergen and dietary-safety controls, explicit
                preference consent, transparent methodology, qualified review
                for health-sensitive use, privacy and retention, safe shopping
                boundaries, and a clear disclaimer against medical diagnosis or
                treatment. No meal, nutrition total, recommendation, or health
                outcome is claimed here.
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
