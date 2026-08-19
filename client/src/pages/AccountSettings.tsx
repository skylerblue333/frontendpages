import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Bell,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldAlert,
  Trash2,
  UserRound,
  XCircle,
} from "lucide-react";

type SettingsTab = "general" | "security" | "notifications" | "danger";
type NotificationKey =
  | "emailNotifications"
  | "pushNotifications"
  | "marketingEmails"
  | "weeklyDigest";

type NotificationPreference = { label: string; description: string };

const tabs: readonly { key: SettingsTab; label: string }[] = [
  { key: "general", label: "General" },
  { key: "security", label: "Security" },
  { key: "notifications", label: "Notifications" },
  { key: "danger", label: "Danger zone" },
];

const notificationPreferences: Readonly<
  Record<NotificationKey, NotificationPreference>
> = {
  emailNotifications: {
    label: "Email notifications",
    description: "Email delivery and preference persistence are unavailable.",
  },
  pushNotifications: {
    label: "Push notifications",
    description: "Browser permission and push delivery are unavailable.",
  },
  marketingEmails: {
    label: "Marketing emails",
    description: "Consent and mailing-list synchronization are unavailable.",
  },
  weeklyDigest: {
    label: "Weekly digest",
    description: "Digest generation and delivery are unavailable.",
  },
};

export function AccountSettings() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("general");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState({
    current: "",
    next: "",
    confirm: "",
  });
  const [notifications, setNotifications] = useState<
    Record<NotificationKey, boolean>
  >({
    emailNotifications: false,
    pushNotifications: false,
    marketingEmails: false,
    weeklyDigest: false,
  });
  const [status, setStatus] = useState(
    "Account settings service unavailable locally. No account, credential, preference, or deletion mutation was started."
  );

  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No account, credential, notification, session, storage, or deletion mutation was started.`
    );
  const updateNotificationPreview = (key: NotificationKey) => {
    setNotifications(previous => ({ ...previous, [key]: !previous[key] }));
    setStatus(
      "Notification preference changed in local preview only. It was not persisted or sent to a provider."
    );
  };

  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="account-settings-title"
    >
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge
            variant="outline"
            className="border-amber-400/30 text-amber-200"
          >
            ACCOUNT SETTINGS PREVIEW
          </Badge>
          <h1
            id="account-settings-title"
            className="text-3xl font-bold tracking-tight"
          >
            Account settings
          </h1>
          <p className="text-muted-foreground">
            Review account, security, and notification boundaries without
            claiming that any setting is connected or persisted.
          </p>
        </header>
        <section
          className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
          aria-label="Settings service unavailable"
        >
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Account service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated profile endpoint, email verification state,
                password mutation, preference store, 2FA status, or account
                deletion workflow is connected. Values shown here are not
                authoritative.
              </p>
            </div>
          </div>
        </section>
        <nav
          aria-label="Account settings sections"
          className="grid gap-2 sm:grid-cols-4"
        >
          {tabs.map(tab => (
            <button
              key={tab.key}
              type="button"
              aria-current={activeTab === tab.key ? "page" : undefined}
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-xl border px-3 py-2 text-sm transition-colors ${activeTab === tab.key ? "border-primary/50 bg-primary/10 text-foreground" : "border-border/30 bg-card/30 text-muted-foreground hover:bg-card/60"}`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {activeTab === "general" && (
          <section className="space-y-4" aria-labelledby="general-title">
            <Card className="border-border/40 bg-card/50">
              <CardHeader>
                <CardTitle
                  id="general-title"
                  className="flex items-center gap-2"
                >
                  <UserRound
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  General identity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label
                    htmlFor="account-email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email address
                  </label>
                  <div className="flex gap-2">
                    <Input
                      id="account-email"
                      value="Account email unavailable"
                      disabled
                      aria-describedby="email-help"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => announceUnavailable("Email change")}
                    >
                      Change unavailable
                    </Button>
                  </div>
                  <p
                    id="email-help"
                    className="mt-2 text-xs text-muted-foreground"
                  >
                    Email ownership and verification are unavailable. No value
                    is read from browser storage and no verified badge is shown.
                  </p>
                </div>
                <div className="rounded-xl border border-border/30 bg-background/30 p-4 text-sm text-muted-foreground">
                  <Mail
                    className="mr-2 inline h-4 w-4 text-primary"
                    aria-hidden="true"
                  />
                  Profile fields, email delivery, and verification state require
                  an authenticated account service.
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {activeTab === "security" && (
          <section className="space-y-4" aria-labelledby="security-title">
            <Card className="border-border/40 bg-card/50">
              <CardHeader>
                <CardTitle
                  id="security-title"
                  className="flex items-center gap-2"
                >
                  <LockKeyhole
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  Password preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-4"
                  onSubmit={event => {
                    event.preventDefault();
                    announceUnavailable("Password update");
                  }}
                >
                  <div>
                    <label
                      htmlFor="current-password"
                      className="mb-2 block text-sm font-medium"
                    >
                      Current password
                    </label>
                    <Input
                      id="current-password"
                      type="password"
                      autoComplete="current-password"
                      value={password.current}
                      onChange={event =>
                        setPassword(previous => ({
                          ...previous,
                          current: event.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="new-password"
                      className="mb-2 block text-sm font-medium"
                    >
                      New password
                    </label>
                    <div className="relative">
                      <Input
                        id="new-password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        value={password.next}
                        onChange={event =>
                          setPassword(previous => ({
                            ...previous,
                            next: event.target.value,
                          }))
                        }
                        className="pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-2 text-muted-foreground"
                        onClick={() => setShowPassword(value => !value)}
                        aria-label={
                          showPassword
                            ? "Hide new password"
                            : "Show new password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="mb-2 block text-sm font-medium"
                    >
                      Confirm new password
                    </label>
                    <Input
                      id="confirm-password"
                      type="password"
                      autoComplete="new-password"
                      value={password.confirm}
                      onChange={event =>
                        setPassword(previous => ({
                          ...previous,
                          confirm: event.target.value,
                        }))
                      }
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={
                      !password.current || !password.next || !password.confirm
                    }
                  >
                    Update password unavailable
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card className="border-border/40 bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldAlert
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  Two-factor authentication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  2FA enrollment and current security status are unavailable.
                  Use the dedicated setup only after a verified server-side
                  enrollment flow exists.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-4"
                  onClick={() => announceUnavailable("2FA enrollment")}
                >
                  Enable 2FA unavailable
                </Button>
              </CardContent>
            </Card>
          </section>
        )}

        {activeTab === "notifications" && (
          <section aria-labelledby="notifications-title">
            <Card className="border-border/40 bg-card/50">
              <CardHeader>
                <CardTitle
                  id="notifications-title"
                  className="flex items-center gap-2"
                >
                  <Bell className="h-5 w-5 text-primary" aria-hidden="true" />
                  Notification preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {(
                  Object.keys(notificationPreferences) as NotificationKey[]
                ).map(key => {
                  const preference = notificationPreferences[key];
                  return (
                    <div
                      key={key}
                      className="flex items-center gap-3 rounded-xl border border-border/30 bg-background/30 p-4"
                    >
                      <div className="min-w-0 flex-1">
                        <h2 className="text-sm font-medium">
                          {preference.label}
                        </h2>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {preference.description}
                        </p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={notifications[key]}
                        onClick={() => updateNotificationPreview(key)}
                        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${notifications[key] ? "bg-primary" : "bg-secondary"}`}
                      >
                        <span
                          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${notifications[key] ? "translate-x-6" : "translate-x-1"}`}
                        />
                      </button>
                    </div>
                  );
                })}
                <p className="rounded-xl border border-border/30 bg-background/30 p-4 text-xs text-muted-foreground">
                  These switches are local previews only. No email, push
                  notification, marketing consent, digest, or preference record
                  is changed.
                </p>
              </CardContent>
            </Card>
          </section>
        )}

        {activeTab === "danger" && (
          <section aria-labelledby="danger-title">
            <Card className="border-red-500/30 bg-red-500/5">
              <CardHeader>
                <CardTitle
                  id="danger-title"
                  className="flex items-center gap-2 text-red-300"
                >
                  <Trash2 className="h-5 w-5" aria-hidden="true" />
                  Danger zone
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-6 text-muted-foreground">
                  Account deletion requires authenticated confirmation,
                  server-side data removal, dependent-record handling, audit
                  controls, and a recoverable status flow. None is connected
                  here.
                </p>
                <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
                  <XCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-red-300"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-red-100/80">
                    This preview will not clear browser storage, sign out an
                    account, navigate away, or claim that deletion succeeded.
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="border-red-500/40 text-red-300"
                  onClick={() => announceUnavailable("Account deletion")}
                >
                  Delete account unavailable
                </Button>
              </CardContent>
            </Card>
          </section>
        )}

        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
        <div className="sr-only" aria-live="polite">
          <CheckCircle2 /> Account service is unavailable.
        </div>
      </div>
    </main>
  );
}

export default AccountSettings;
