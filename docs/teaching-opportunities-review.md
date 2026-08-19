# TeachingOpportunities review

The `/teaching-opportunities` route currently renders mock teachers, ratings, languages, hourly rates, student counts, bookings, messages, teacher onboarding, earnings, and session payment behavior. These claims require verified instructor identity, scheduling, moderation, payment, tax, payout, and education persistence services.

The safe replacement is a strictly typed local teaching-readiness view. Preserve teacher and learner concepts, but label profiles, ratings, rates, students, bookings, messages, onboarding, earnings, and payments unavailable. No booking, message, teacher application, payment, or account mutation should be claimed.
