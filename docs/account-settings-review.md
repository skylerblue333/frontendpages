# AccountSettings review

The `/account-settings` route currently reads email from localStorage, labels it verified, reports password updates as successful without a server mutation, toggles notification preferences locally with success toasts, offers an unconnected 2FA button, and deletes localStorage while reporting the account deleted. These behaviors can misrepresent account state and create unsafe expectations around authentication and destructive actions.

The safe replacement must label account identity, verification, password mutation, notification persistence, 2FA state, and account deletion as unavailable until authenticated backend contracts exist. Local form editing and visibility toggles may remain for review, but no secrets should be stored or logged and no destructive action should clear storage or navigate as though deletion succeeded.
