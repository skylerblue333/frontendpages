import { useState } from "react";
import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  CircleSlash2,
  GraduationCap,
  LockKeyhole,
  Plus,
  ShieldAlert,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/PageHeader";

type Tab = "Courses" | "Students" | "Analytics" | "Settings";
const tabs: Tab[] = ["Courses", "Students", "Analytics", "Settings"];
const metrics = [
  ["Courses", "Unavailable"],
  ["Students", "Unavailable"],
  ["Completion", "Unavailable"],
  ["Certificates", "Unavailable"],
] as const;
export default function InstructorDashboard() {
  const [tab, setTab] = useState<Tab>("Courses");
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(
    "Education service unavailable. Showing local instructor controls only."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No course, student, analytics, certification, publication, payment, or account mutation was started.`
    );
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={GraduationCap}
        title="Instructor dashboard"
        subtitle="Review local education controls without fabricated courses, student progress, analytics, revenue, certificates, or publication outcomes."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Education service unavailable.</strong> No course catalog,
          instructor authorization, student-progress source, analytics service,
          certification registry, or publication endpoint is connected.
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(([label, value]) => (
            <Card className="border-slate-800 bg-slate-900/75 p-5" key={label}>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                {label}
              </p>
              <p className="mt-2 text-2xl font-semibold">{value}</p>
            </Card>
          ))}
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex flex-wrap gap-2">
            {tabs.map(item => (
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
          {tab === "Courses" && (
            <div className="mt-6 space-y-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Course catalog
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold">
                    Instructor course concepts
                  </h2>
                </div>
                <Button
                  onClick={() => setShowForm(value => !value)}
                  variant="outline"
                >
                  <Plus className="mr-2 h-4 w-4" /> New course unavailable
                </Button>
              </div>
              {showForm && (
                <Card className="border-cyan-400/20 bg-cyan-400/5 p-5">
                  <p className="font-medium">Local course draft</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    These fields remain in component memory only. They cannot be
                    saved, published, assigned, sold, or certified.
                  </p>
                  <div className="mt-4 grid gap-4">
                    <Input
                      aria-label="Course title"
                      onChange={event => setTitle(event.target.value)}
                      placeholder="Course title draft"
                      value={title}
                    />
                    <Textarea
                      aria-label="Course description"
                      onChange={event => setDescription(event.target.value)}
                      placeholder="Course description draft"
                      value={description}
                    />
                    <div className="flex gap-2">
                      <Button
                        onClick={() => blocked("Create course")}
                        variant="outline"
                      >
                        Create unavailable
                      </Button>
                      <Button
                        onClick={() => {
                          setTitle("");
                          setDescription("");
                        }}
                        variant="ghost"
                      >
                        Clear draft
                      </Button>
                    </div>
                  </div>
                </Card>
              )}
              <div className="rounded-xl border border-dashed border-slate-700 p-10 text-center">
                <BookOpen className="mx-auto h-8 w-8 text-slate-500" />
                <h2 className="mt-4 text-xl font-semibold">
                  Course catalog unavailable
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
                  A real catalog requires instructor authorization, curriculum
                  ownership, versioning, moderation, storage, enrollment, and
                  publication controls.
                </p>
              </div>
            </div>
          )}
          {tab === "Students" && (
            <div className="mt-6 rounded-xl border border-dashed border-slate-700 p-10 text-center">
              <Users className="mx-auto h-8 w-8 text-slate-500" />
              <h2 className="mt-4 text-xl font-semibold">
                Student progress unavailable
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
                No student identities, enrollment, progress, grades, completion,
                or support data is available from this preview.
              </p>
              <Button
                className="mt-5"
                onClick={() => blocked("Load student progress")}
                variant="outline"
              >
                Load unavailable
              </Button>
            </div>
          )}
          {tab === "Analytics" && (
            <div className="mt-6 rounded-xl border border-dashed border-slate-700 p-10 text-center">
              <BarChart3 className="mx-auto h-8 w-8 text-slate-500" />
              <h2 className="mt-4 text-xl font-semibold">
                Analytics unavailable
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
                No enrollment, completion, revenue, engagement, or performance
                metric is fabricated.
              </p>
              <Button
                className="mt-5"
                onClick={() => blocked("Load analytics")}
                variant="outline"
              >
                Load unavailable
              </Button>
            </div>
          )}
          {tab === "Settings" && (
            <div className="mt-6 rounded-xl border border-dashed border-slate-700 p-10 text-center">
              <LockKeyhole className="mx-auto h-8 w-8 text-slate-500" />
              <h2 className="mt-4 text-xl font-semibold">
                Instructor settings unavailable
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
                No instructor identity, permissions, payout, notification,
                certification, or publication settings are connected.
              </p>
              <Button
                className="mt-5"
                onClick={() => blocked("Open instructor settings")}
                variant="outline"
              >
                Open unavailable
              </Button>
            </div>
          )}
        </Card>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <ShieldAlert className="h-5 w-5 text-amber-200" />
            <h2 className="mt-3 font-semibold">No learner claims</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No student progress, completion, certification, or learning
              outcome is asserted.
            </p>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <CircleSlash2 className="h-5 w-5 text-slate-500" />
            <h2 className="mt-3 font-semibold">No course publication</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No course, lesson, enrollment, payment, or publication mutation is
              available locally.
            </p>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <CheckCircle2 className="h-5 w-5 text-emerald-200" />
            <h2 className="mt-3 font-semibold">Typed local state</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Tabs and the optional draft form remain local and are cleared when
              the page is left.
            </p>
          </Card>
        </div>
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
