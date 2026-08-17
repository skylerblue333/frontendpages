import { useMemo, useState } from "react";
import {
  BookOpen,
  CircleSlash2,
  GraduationCap,
  LockKeyhole,
  MessageCircle,
  PlayCircle,
  ShieldCheck,
  Star,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type CatalogSubject = "All" | "AI" | "Finance" | "Education";
type CatalogAvailability = "All" | "Available" | "Review" | "Unavailable";

type CourseListing = {
  id: string;
  title: string;
  subject: Exclude<CatalogSubject, "All">;
  availability: Exclude<CatalogAvailability, "All">;
  summary: string;
  instructor: string;
  lessons: string;
  level: string;
  enrollment: string;
  rating: string;
  certification: string;
};

const listings: CourseListing[] = [
  {
    id: "ai-listing",
    title: "AI foundations",
    subject: "AI",
    availability: "Review",
    summary:
      "A local course listing concept for responsible AI fundamentals pending curriculum and instructor verification.",
    instructor: "Instructor identity unavailable",
    lessons: "Lesson count unavailable",
    level: "Difficulty level unavailable",
    enrollment: "Enrollment state unavailable",
    rating: "Rating and review count unavailable",
    certification: "Certification outcome unavailable",
  },
  {
    id: "finance-listing",
    title: "Digital finance literacy",
    subject: "Finance",
    availability: "Available",
    summary:
      "A local discovery concept for finance literacy pending subject review, learner safeguards, and enrollment authorization.",
    instructor: "Instructor identity unavailable",
    lessons: "Lesson count unavailable",
    level: "Difficulty level unavailable",
    enrollment: "Enrollment state unavailable",
    rating: "Rating and review count unavailable",
    certification: "Certification outcome unavailable",
  },
  {
    id: "education-listing",
    title: "Learning design essentials",
    subject: "Education",
    availability: "Unavailable",
    summary:
      "A local catalog concept for learning design pending curriculum ownership, accessibility, prerequisites, and publication controls.",
    instructor: "Instructor identity unavailable",
    lessons: "Lesson count unavailable",
    level: "Difficulty level unavailable",
    enrollment: "Enrollment state unavailable",
    rating: "Rating and review count unavailable",
    certification: "Certification outcome unavailable",
  },
];

const subjects: CatalogSubject[] = ["All", "AI", "Finance", "Education"];
const availability: CatalogAvailability[] = [
  "All",
  "Available",
  "Review",
  "Unavailable",
];

export default function CourseCatalog() {
  const [subject, setSubject] = useState<CatalogSubject>("All");
  const [availabilityState, setAvailabilityState] =
    useState<CatalogAvailability>("All");
  const [selectedId, setSelectedId] = useState(listings[0].id);
  const [status, setStatus] = useState(
    "Catalog service unavailable. Showing local course concepts only."
  );

  const filtered = useMemo(
    () =>
      listings.filter(
        listing =>
          (subject === "All" || listing.subject === subject) &&
          (availabilityState === "All" ||
            listing.availability === availabilityState)
      ),
    [availabilityState, subject]
  );
  const selected =
    filtered.find(listing => listing.id === selectedId) ??
    filtered[0] ??
    listings[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No course view, enrollment, learner record, rating, certification, notification, or catalog mutation request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={GraduationCap}
        title="Course catalog"
        subtitle="Review local course-discovery concepts without fabricated courses, instructors, enrollment, ratings, pricing, certifications, learner outcomes, or availability."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Catalog service unavailable.</strong> No curriculum
            registry, instructor directory, enrollment service, learner profile
            store, rating feed, certification issuer, or availability endpoint
            is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Catalog service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset catalog
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Catalog preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Discover course concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show catalog structure only. They
                  do not represent real courses, instructors, learners,
                  enrollments, ratings, certificates, or availability.
                </p>
              </div>
              <BookOpen className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Catalog subject filter"
            >
              {subjects.map(item => (
                <Button
                  aria-pressed={subject === item}
                  key={item}
                  onClick={() => setSubject(item)}
                  size="sm"
                  variant={subject === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Catalog availability filter"
            >
              {availability.map(item => (
                <Button
                  aria-pressed={availabilityState === item}
                  key={item}
                  onClick={() => setAvailabilityState(item)}
                  size="sm"
                  variant={availabilityState === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(listing => (
                <button
                  aria-pressed={selected.id === listing.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === listing.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={listing.id}
                  onClick={() => setSelectedId(listing.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{listing.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {listing.availability}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">
                    {listing.subject}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {listing.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local course fixtures match these filters.
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
                Selected course
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.subject} · {selected.availability}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Instructor", selected.instructor],
                  ["Lessons", selected.lessons],
                  ["Level", selected.level],
                  ["Enrollment", selected.enrollment],
                  ["Rating", selected.rating],
                  ["Certification", selected.certification],
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
                No course, instructor, lesson count, difficulty, enrollment,
                rating, price, certification, learner, or availability state is
                available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("View course")}
                  variant="outline"
                >
                  <PlayCircle className="mr-2 h-4 w-4" /> View unavailable
                </Button>
                <Button
                  onClick={() => blocked("Enroll in course")}
                  variant="outline"
                >
                  <GraduationCap className="mr-2 h-4 w-4" /> Enroll unavailable
                </Button>
                <Button
                  onClick={() => blocked("Share course")}
                  variant="outline"
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> Share unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Course catalogs require curriculum provenance, instructor
                  identity, accessibility, safeguarding, prerequisites,
                  enrollment authorization, learner privacy, assessment
                  integrity, certification criteria, and auditable availability.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Course, enrollment, learner, rating, certification, and
                  sharing transitions must be auditable and isolated from
                  fabricated education outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <UserRound className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No instructor profile, learner enrollment, review submission,
                  certificate issue, notification, or sharing operation is
                  available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <Star className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Rating and availability remain explicitly unavailable until
                  authoritative catalog services are connected.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No learner or course-discovery state is inferred from local
                  fixtures.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
